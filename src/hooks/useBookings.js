import { useCallback, useState } from 'react'
import { getBookingsByApartmentSync } from '../services/bookingService'

export const useBookings = (apartmentId) => {
  const [bookings, setBookings] = useState(() => getBookingsByApartmentSync(apartmentId))

  const refreshBookings = useCallback(() => {
    if (!apartmentId) return
    const data = getBookingsByApartmentSync(apartmentId)
    setBookings(data)
  }, [apartmentId])

  const loading = false

  return { bookings, loading, refreshBookings }
}
