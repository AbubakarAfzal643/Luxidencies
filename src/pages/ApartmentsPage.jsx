import { useEffect, useMemo, useState } from 'react'
import ApartmentGrid from '../components/ApartmentGrid'
import EmptyState from '../components/EmptyState'
import SearchBar from '../components/SearchBar'
import { getApartments } from '../services/apartmentService'
import { checkAvailability } from '../services/bookingService'

const parseNumber = (value, fallback) => {
  const parsed = Number(value)
  return Number.isFinite(parsed) ? parsed : fallback
}

function ApartmentsPage() {
  const searchParams = new URLSearchParams(window.location.search)

  const [allApartments, setAllApartments] = useState([])
  const [filters, setFilters] = useState({
    location: searchParams.get('location') ?? '',
    guests: parseNumber(searchParams.get('guests'), 1),
    bedrooms: 0,
    priceMax: '',
    availability: 'all',
    checkIn: searchParams.get('checkIn') ?? '',
    checkOut: searchParams.get('checkOut') ?? '',
  })

  useEffect(() => {
    const load = async () => {
      const data = await getApartments()
      setAllApartments(data)
    }
    load()
  }, [])

  const filteredApartments = useMemo(() => {
    return allApartments.filter((apartment) => {
      const byLocation =
        !filters.location || apartment.location.toLowerCase().includes(filters.location.toLowerCase())
      const byGuests = apartment.maxGuests >= filters.guests
      const byBedrooms = apartment.bedrooms >= filters.bedrooms
      const byPrice = !filters.priceMax || apartment.pricePerNight <= Number(filters.priceMax)
      const byAvailability =
        filters.availability === 'all' || apartment.availability === filters.availability

      return byLocation && byGuests && byBedrooms && byPrice && byAvailability
    })
  }, [allApartments, filters])

  const [availabilityMatches, setAvailabilityMatches] = useState({})

  useEffect(() => {
    const applyDateFilter = async () => {
      if (!filters.checkIn || !filters.checkOut) {
        setAvailabilityMatches({})
        return
      }

      const result = {}
      for (const apartment of filteredApartments) {
        const availability = await checkAvailability({
          apartmentId: apartment.id,
          checkIn: filters.checkIn,
          checkOut: filters.checkOut,
        })
        result[apartment.id] = availability.isAvailable
      }
      setAvailabilityMatches(result)
    }

    applyDateFilter()
  }, [filteredApartments, filters.checkIn, filters.checkOut])

  const finalApartments = useMemo(() => {
    if (!filters.checkIn || !filters.checkOut) return filteredApartments
    return filteredApartments.filter((apartment) => availabilityMatches[apartment.id])
  }, [availabilityMatches, filteredApartments, filters.checkIn, filters.checkOut])

  const handleChange = (event) => {
    const { name, value } = event.target
    setFilters((current) => ({
      ...current,
      [name]: ['guests', 'bedrooms'].includes(name) ? Number(value) : value,
    }))
  }

  const handleSubmit = (event) => event.preventDefault()

  return (
    <div className="page-shell space-y-8 luxury-reveal">
      <header className="luxury-scale">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">Browse Apartments</p>
        <h1 className="mt-2 font-serif text-4xl text-neutral-900">Find your ideal stay</h1>
        <p className="mt-2 text-sm text-neutral-600">Filter by location, price, room count, guest capacity, and date availability.</p>
      </header>

      <SearchBar filters={filters} onChange={handleChange} onSubmit={handleSubmit} />

      {finalApartments.length ? (
        <ApartmentGrid apartments={finalApartments} />
      ) : (
        <EmptyState
          title="No apartments found"
          description="Try adjusting your filters or selecting different dates."
        />
      )}
    </div>
  )
}

export default ApartmentsPage
