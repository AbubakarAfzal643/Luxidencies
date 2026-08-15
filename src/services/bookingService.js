import { initialBookings } from '../data/initialBookings'
import { rangesOverlap } from '../utils/dateUtils'

const BOOKINGS_STORAGE_KEY = 'luxidency_demo_bookings_v1'
const LAST_BOOKING_STORAGE_KEY = 'luxidency_last_booking_v1'

const readStorage = (key) => {
  try {
    const raw = window.localStorage.getItem(key)
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

const writeStorage = (key, value) => {
  try {
    window.localStorage.setItem(key, JSON.stringify(value))
    return true
  } catch {
    return false
  }
}

export const getBookings = async () => {
  return getBookingsSync()
}

export const getBookingsSync = () => {
  const stored = readStorage(BOOKINGS_STORAGE_KEY)
  if (!Array.isArray(stored)) {
    writeStorage(BOOKINGS_STORAGE_KEY, initialBookings)
    return initialBookings
  }
  return stored
}

export const getBookingsByApartment = async (apartmentId) => {
  const allBookings = getBookingsSync()
  return allBookings.filter((booking) => booking.apartmentId === apartmentId)
}

export const getBookingsByApartmentSync = (apartmentId) => {
  const allBookings = getBookingsSync()
  return allBookings.filter((booking) => booking.apartmentId === apartmentId)
}

export const checkAvailability = async ({ apartmentId, checkIn, checkOut }) => {
  const apartmentBookings = await getBookingsByApartment(apartmentId)

  const overlappingBooking = apartmentBookings.find((booking) =>
    rangesOverlap(checkIn, checkOut, booking.checkIn, booking.checkOut),
  )

  return {
    isAvailable: !overlappingBooking,
    conflict: overlappingBooking ?? null,
  }
}

export const createBookingReference = () => {
  const randomPart = Math.floor(10000 + Math.random() * 90000)
  const year = new Date().getFullYear()
  return `APT-${year}-${randomPart}`
}

export const createBooking = async (payload) => {
  const currentBookings = getBookingsSync()

  const booking = {
    id: `book-${Date.now()}`,
    ...payload,
  }

  const nextBookings = [...currentBookings, booking]
  writeStorage(BOOKINGS_STORAGE_KEY, nextBookings)
  writeStorage(LAST_BOOKING_STORAGE_KEY, booking)

  return booking
}

export const getLastBooking = async () => readStorage(LAST_BOOKING_STORAGE_KEY)
