import { CalendarDays, Hash, MapPin, UserRound } from 'lucide-react'
import { formatDate } from '../utils/dateUtils'
import { formatCurrency } from '../utils/formatters'
import Button from './Button'
import PDFGenerator from './PDFGenerator'

function BookingConfirmation({ booking, apartment, onDownloadPdf, onClose }) {
  if (!booking || !apartment) return null

  return (
    <div className="space-y-4">
      <p className="rounded-xl bg-emerald-50 p-3 text-sm text-emerald-800">
        Your booking has been confirmed in this demo system.
      </p>

      <div className="grid gap-3 rounded-2xl bg-neutral-50 p-4 text-sm text-neutral-700">
        <p className="flex items-center gap-2"><Hash className="h-4 w-4" /> {booking.reference}</p>
        <p className="flex items-center gap-2"><MapPin className="h-4 w-4" /> {apartment.name} - {apartment.location}</p>
        <p className="flex items-center gap-2"><UserRound className="h-4 w-4" /> {booking.fullName} ({booking.guests} guests)</p>
        <p className="flex items-center gap-2"><CalendarDays className="h-4 w-4" /> {formatDate(booking.checkIn)} to {formatDate(booking.checkOut)}</p>
      </div>

      <div className="rounded-2xl border border-neutral-200 p-4 text-sm text-neutral-700">
        <h3 className="mb-2 font-semibold text-neutral-900">Price Breakdown</h3>
        <p>Price per Night: {formatCurrency(booking.pricePerNight)}</p>
        <p>Subtotal: {formatCurrency(booking.subtotal)}</p>
        <p>Service Fee: {formatCurrency(booking.serviceFee)}</p>
        <p className="mt-2 font-semibold text-neutral-900">Total: {formatCurrency(booking.total)}</p>
      </div>

      <div className="flex flex-wrap gap-2">
        <PDFGenerator onGenerate={onDownloadPdf} />
        <Button variant="ghost" onClick={onClose}>Close</Button>
      </div>
    </div>
  )
}

export default BookingConfirmation
