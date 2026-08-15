import { formatISO } from 'date-fns'
import { useState } from 'react'
import { getNights } from '../utils/dateUtils'
import Button from './Button'

const initialForm = {
  fullName: '',
  email: '',
  phone: '',
  guests: 1,
  specialRequests: '',
}

function BookingForm({ apartment, dateRange, onSubmitBooking, isSubmitting, availabilityError }) {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({
      ...current,
      [name]: name === 'guests' ? Number(value) : value,
    }))
  }

  const validate = () => {
    const nextErrors = {}
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const phonePattern = /^[0-9+\-\s]{7,20}$/
    const checkoutValidationMessage = 'Check-out date must be after check-in date.'

    if (!dateRange?.from || !dateRange?.to) {
      nextErrors.dates = 'Please select a check-in and check-out date.'
    }

    if (!form.fullName.trim()) nextErrors.fullName = 'Please enter your full name.'
    if (form.email && !emailPattern.test(form.email)) nextErrors.email = 'Please enter a valid email address.'
    if (!phonePattern.test(form.phone)) nextErrors.phone = 'Please enter a valid phone number.'
    if (form.guests < 1 || form.guests > apartment.maxGuests) {
      nextErrors.guests = `Guests must be between 1 and ${apartment.maxGuests}.`
    }

    if (dateRange?.from && dateRange?.to && getNights(dateRange.from, dateRange.to) <= 0) {
      nextErrors.dates = checkoutValidationMessage
    }

    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!validate()) return

    onSubmitBooking({
      ...form,
      checkIn: formatISO(dateRange.from, { representation: 'date' }),
      checkOut: formatISO(dateRange.to, { representation: 'date' }),
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-3xl border border-neutral-200 bg-white p-5 shadow-sm">
      <h3 className="text-lg font-semibold text-neutral-900">Guest Information</h3>

      {(errors.dates || availabilityError) && (
        <p className="rounded-xl bg-red-50 p-3 text-sm text-red-700">{errors.dates || availabilityError}</p>
      )}

      <label className="form-field">
        Full Name
        <input
          type="text"
          name="fullName"
          value={form.fullName}
          onChange={handleChange}
          className="input"
          placeholder="Enter full name"
        />
        {errors.fullName ? <span className="error-text">{errors.fullName}</span> : null}
      </label>

      <label className="form-field">
        <span className="flex items-center gap-2">
          Email
          <span className="rounded-full border border-neutral-300 bg-neutral-100 px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.12em] text-neutral-500">
            Optional
          </span>
        </span>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          className="input"
          placeholder="Enter email address"
        />
        {errors.email ? <span className="error-text">{errors.email}</span> : null}
      </label>

      <label className="form-field">
        Phone Number
        <input
          type="tel"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          className="input"
          placeholder="Enter phone number"
        />
        {errors.phone ? <span className="error-text">{errors.phone}</span> : null}
      </label>

      <label className="form-field">
        Number of Guests
        <input
          type="number"
          min={1}
          max={apartment.maxGuests}
          name="guests"
          value={form.guests}
          onChange={handleChange}
          className="input"
        />
        {errors.guests ? <span className="error-text">{errors.guests}</span> : null}
      </label>

      <label className="form-field">
        Special Requests
        <textarea
          name="specialRequests"
          value={form.specialRequests}
          onChange={handleChange}
          className="input min-h-24"
          placeholder="Any requests for your stay"
        />
      </label>

      <Button type="submit" variant="accent" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? 'Confirming...' : 'Confirm Booking'}
      </Button>
      <p className="text-xs text-neutral-500">Demo booking system: data is stored in localStorage only.</p>
    </form>
  )
}

export default BookingForm
