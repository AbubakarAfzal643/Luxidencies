import { formatDate, getNights } from '../utils/dateUtils'
import { formatCurrency } from '../utils/formatters'

function PriceSummary({ checkIn, checkOut, pricePerNight, serviceFee }) {
  const nights = getNights(checkIn, checkOut)
  const subtotal = nights * pricePerNight
  const total = subtotal + serviceFee

  return (
    <section className="rounded-3xl border border-neutral-200 bg-neutral-50 p-5" aria-live="polite">
      <h3 className="text-lg font-semibold text-neutral-900">Price Summary</h3>
      <div className="mt-4 space-y-2 text-sm text-neutral-700">
        <div className="flex justify-between">
          <span>Check-in</span>
          <span>{formatDate(checkIn)}</span>
        </div>
        <div className="flex justify-between">
          <span>Check-out</span>
          <span>{formatDate(checkOut)}</span>
        </div>
        <div className="flex justify-between">
          <span>Nights</span>
          <span>{nights}</span>
        </div>
        <div className="flex justify-between">
          <span>Price per night</span>
          <span>{formatCurrency(pricePerNight)}</span>
        </div>
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>{formatCurrency(subtotal)}</span>
        </div>
        <div className="flex justify-between">
          <span>Service fee</span>
          <span>{formatCurrency(serviceFee)}</span>
        </div>
      </div>

      <div className="mt-4 border-t border-neutral-300 pt-3">
        <div className="flex justify-between text-base font-semibold text-neutral-900">
          <span>Total</span>
          <span>{formatCurrency(total)}</span>
        </div>
      </div>
    </section>
  )
}

export default PriceSummary
