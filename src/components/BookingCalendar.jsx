import { DayPicker } from 'react-day-picker'
import { useEffect, useState } from 'react'
import 'react-day-picker/style.css'
import { getBookedDateMatchers } from '../utils/dateUtils'

function BookingCalendar({ selectedRange, onSelectRange, bookings }) {
  const disabledDates = getBookedDateMatchers(bookings)
  const [monthsToShow, setMonthsToShow] = useState(2)

  useEffect(() => {
    const updateMonths = () => {
      setMonthsToShow(window.innerWidth < 900 ? 1 : 2)
    }

    updateMonths()
    window.addEventListener('resize', updateMonths)
    return () => window.removeEventListener('resize', updateMonths)
  }, [])

  return (
    <div className="rounded-3xl border border-neutral-200 bg-white p-4 shadow-sm">
      <DayPicker
        mode="range"
        selected={selectedRange}
        onSelect={onSelectRange}
        disabled={disabledDates}
        excludeDisabled
        numberOfMonths={monthsToShow}
        className="booking-calendar"
        captionLayout="dropdown"
        fromYear={2026}
        toYear={2028}
      />

      <div className="mt-4 grid grid-cols-2 gap-2 text-xs text-neutral-600 md:grid-cols-4">
        <p className="legend-chip"><span className="legend-box bg-white border border-neutral-300" /> Available</p>
        <p className="legend-chip"><span className="legend-box bg-neutral-900" /> Selected</p>
        <p className="legend-chip"><span className="legend-box bg-amber-400" /> Check-in/out</p>
        <p className="legend-chip"><span className="legend-box bg-neutral-300" /> Occupied</p>
      </div>
    </div>
  )
}

export default BookingCalendar
