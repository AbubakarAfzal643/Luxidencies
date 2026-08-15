import {
  differenceInCalendarDays,
  eachDayOfInterval,
  endOfDay,
  format,
  isAfter,
  isBefore,
  parseISO,
  startOfDay,
} from 'date-fns'

export const toDate = (value) => (value instanceof Date ? value : parseISO(value))

export const formatDate = (value, pattern = 'MMM dd, yyyy') => {
  if (!value) return '-'
  return format(toDate(value), pattern)
}

export const getNights = (checkIn, checkOut) => {
  if (!checkIn || !checkOut) return 0
  return Math.max(0, differenceInCalendarDays(toDate(checkOut), toDate(checkIn)))
}

export const rangesOverlap = (aStart, aEnd, bStart, bEnd) => {
  const startA = startOfDay(toDate(aStart))
  const endA = endOfDay(toDate(aEnd))
  const startB = startOfDay(toDate(bStart))
  const endB = endOfDay(toDate(bEnd))

  return !(isBefore(endA, startB) || isAfter(startA, endB))
}

export const getBookedDateMatchers = (bookings) =>
  bookings.map((booking) => ({
    from: toDate(booking.checkIn),
    to: toDate(booking.checkOut),
  }))

export const listDaysInRange = (start, end) => {
  if (!start || !end) return []
  return eachDayOfInterval({ start: toDate(start), end: toDate(end) })
}
