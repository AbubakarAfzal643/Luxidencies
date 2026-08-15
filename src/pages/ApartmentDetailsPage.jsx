import { useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import AmenityList from '../components/AmenityList'
import BookingCalendar from '../components/BookingCalendar'
import BookingConfirmation from '../components/BookingConfirmation'
import BookingForm from '../components/BookingForm'
import LoadingSpinner from '../components/LoadingSpinner'
import Modal from '../components/Modal'
import PriceSummary from '../components/PriceSummary'
import { siteConfig } from '../config/siteConfig'
import { useBookings } from '../hooks/useBookings'
import { getApartmentById } from '../services/apartmentService'
import {
  checkAvailability,
  createBooking,
  createBookingReference,
} from '../services/bookingService'
import { getNights } from '../utils/dateUtils'
import { formatCurrency } from '../utils/formatters'
import { generateBookingPdf } from '../utils/pdfUtils'

function ApartmentDetailsPage() {
  const { apartmentId } = useParams()
  const [apartment, setApartment] = useState(null)
  const [loadingApartment, setLoadingApartment] = useState(true)
  const [dateRange, setDateRange] = useState()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [availabilityError, setAvailabilityError] = useState('')
  const [confirmedBooking, setConfirmedBooking] = useState(null)
  const [modalOpen, setModalOpen] = useState(false)

  const { bookings, loading, refreshBookings } = useBookings(apartmentId)

  useEffect(() => {
    const loadApartment = async () => {
      const data = await getApartmentById(apartmentId)
      setApartment(data)
      setLoadingApartment(false)
    }

    loadApartment()
  }, [apartmentId])

  const priceData = useMemo(() => {
    if (!apartment || !dateRange?.from || !dateRange?.to) return null

    const nights = getNights(dateRange.from, dateRange.to)
    const subtotal = nights * apartment.pricePerNight
    const serviceFee = siteConfig.baseServiceFee

    return {
      nights,
      subtotal,
      serviceFee,
      total: subtotal + serviceFee,
    }
  }, [apartment, dateRange])

  const dateValidationMessage = 'Check-out date must be after check-in date.'

  const handleDateSelect = (range) => {
    setAvailabilityError('')

    if (!range) {
      setDateRange(undefined)
      return
    }

    if (range.from && range.to && range.to <= range.from) {
      setAvailabilityError(dateValidationMessage)
      setDateRange({ from: range.from, to: undefined })
      return
    }

    setDateRange(range)
  }

  const handleBookingSubmit = async (formData) => {
    if (!apartment || !priceData) return

    if (!dateRange?.from || !dateRange?.to || getNights(dateRange.from, dateRange.to) <= 0) {
      setAvailabilityError(dateValidationMessage)
      return
    }

    setIsSubmitting(true)

    const availability = await checkAvailability({
      apartmentId: apartment.id,
      checkIn: formData.checkIn,
      checkOut: formData.checkOut,
    })

    if (!availability.isAvailable) {
      setAvailabilityError('These dates are unavailable. Please choose a different range.')
      setIsSubmitting(false)
      return
    }

    const booking = await createBooking({
      apartmentId: apartment.id,
      apartmentName: apartment.name,
      reference: createBookingReference(),
      ...formData,
      pricePerNight: apartment.pricePerNight,
      subtotal: priceData.subtotal,
      serviceFee: priceData.serviceFee,
      total: priceData.total,
      status: 'confirmed',
      createdAt: new Date().toISOString(),
    })

    await refreshBookings()
    setConfirmedBooking(booking)
    setModalOpen(true)
    setIsSubmitting(false)
  }

  const handleDownloadPdf = () => {
    if (!confirmedBooking || !apartment) return

    try {
      generateBookingPdf({
        booking: confirmedBooking,
        apartment,
        siteConfig,
      })
    } catch {
      setAvailabilityError('Unable to generate PDF right now. Please try again.')
    }
  }

  if (loadingApartment || loading) return <LoadingSpinner label="Loading apartment details..." />
  if (!apartment) return <p className="rounded-2xl bg-white p-6">Apartment not found.</p>

  return (
    <div className="space-y-8">
      <section className="grid gap-4 lg:grid-cols-3">
        <img
          src={apartment.mainImage}
          alt={apartment.name}
          className="h-72 w-full rounded-3xl object-cover lg:col-span-2 lg:h-120"
        />
        <div className="grid gap-4">
          {apartment.gallery.map((image) => (
            <img key={image} src={image} alt={`${apartment.name} interior`} loading="lazy" className="h-36 w-full rounded-3xl object-cover lg:h-38" />
          ))}
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-amber-700">{apartment.location}</p>
            <h1 className="mt-2 font-serif text-4xl text-neutral-900">{apartment.name}</h1>
            <p className="mt-3 text-neutral-700">{apartment.description}</p>
          </div>

          <div className="rounded-3xl border border-neutral-200 bg-white p-5">
            <h2 className="mb-3 text-xl font-semibold text-neutral-900">Amenities</h2>
            <AmenityList amenities={apartment.amenities} />
          </div>

          <div className="rounded-3xl border border-neutral-200 bg-white p-5">
            <h2 className="mb-3 text-xl font-semibold text-neutral-900">Apartment Rules</h2>
            <ul className="list-disc space-y-2 pl-5 text-sm text-neutral-700">
              {apartment.rules.map((rule) => (
                <li key={rule}>{rule}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-neutral-200 bg-white p-5 text-sm text-neutral-700">
            <p><strong>Bedrooms:</strong> {apartment.bedrooms}</p>
            <p><strong>Bathrooms:</strong> {apartment.bathrooms}</p>
            <p><strong>Maximum Guests:</strong> {apartment.maxGuests}</p>
            <p><strong>Price per Night:</strong> {formatCurrency(apartment.pricePerNight)}</p>
          </div>
        </div>

        <div id="booking" className="space-y-4">
          <div className="rounded-3xl border border-neutral-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-neutral-900">Booking Progress</h2>
            <ol className="mt-3 space-y-2 text-sm text-neutral-700">
              <li>1. Select check-in and check-out dates</li>
              <li>2. Enter guest details</li>
              <li>3. Review pricing</li>
              <li>4. Confirm booking and download PDF</li>
            </ol>
          </div>

          <BookingCalendar selectedRange={dateRange} onSelectRange={handleDateSelect} bookings={bookings} />
          <PriceSummary
            checkIn={dateRange?.from}
            checkOut={dateRange?.to}
            pricePerNight={apartment.pricePerNight}
            serviceFee={siteConfig.baseServiceFee}
          />
          <BookingForm
            apartment={apartment}
            dateRange={dateRange}
            onSubmitBooking={handleBookingSubmit}
            isSubmitting={isSubmitting}
            availabilityError={availabilityError}
          />
        </div>
      </section>

      <Modal isOpen={modalOpen} title="Booking Confirmation" onClose={() => setModalOpen(false)}>
        <BookingConfirmation
          booking={confirmedBooking}
          apartment={apartment}
          onDownloadPdf={handleDownloadPdf}
          onClose={() => setModalOpen(false)}
        />
      </Modal>
    </div>
  )
}

export default ApartmentDetailsPage
