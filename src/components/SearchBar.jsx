import { ChevronDown, Search } from 'lucide-react'
import Button from './Button'

const locationOptions = [
  'Lahore',
  'Islamabad',
  'Murree',
  'Gulberg',
  'MM Alam',
  'DHA Phase III',
  'DHA Phase VII',
  'Johar Town',
  'Bahria Town',
  'Model Town',
]

const fieldClass =
  'h-12 w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 text-sm text-neutral-900 placeholder:text-neutral-400 outline-none transition focus:border-neutral-900 focus:bg-white focus:ring-2 focus:ring-neutral-900/5'

const labelClass = 'text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-neutral-500'

function SearchBar({ filters, onChange, onSubmit }) {
  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col gap-4 rounded-4xl border border-neutral-200 bg-white p-5 shadow-[0_16px_40px_rgba(15,23,42,0.06)] sm:p-6"
    >
      {/* Row 1 — Location / Guests / Bedrooms / Max price */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <label className="flex flex-col gap-2">
          <span className={labelClass}>Location</span>
          <div className="relative">
            <select
              name="location"
              value={filters.location}
              onChange={onChange}
              className={`${fieldClass} appearance-none pr-10`}
            >
              <option value="">Any location</option>
              {locationOptions.map((location) => (
                <option key={location} value={location}>
                  {location}
                </option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-500" />
          </div>
        </label>

        <label className="flex flex-col gap-2">
          <span className={labelClass}>Guests</span>
          <input
            type="number"
            min={1}
            name="guests"
            value={filters.guests}
            onChange={onChange}
            className={fieldClass}
          />
        </label>

        <label className="flex flex-col gap-2">
          <span className={labelClass}>Bedrooms</span>
          <input
            type="number"
            min={0}
            name="bedrooms"
            value={filters.bedrooms}
            onChange={onChange}
            className={fieldClass}
          />
        </label>

        <label className="flex flex-col gap-2">
          <span className={labelClass}>Max price</span>
          <input
            type="number"
            min={0}
            name="priceMax"
            value={filters.priceMax}
            onChange={onChange}
            placeholder="No limit"
            className={fieldClass}
          />
        </label>
      </div>

      {/* Row 2 — Availability / Check-in / Check-out / Apply */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-[0.8fr_1.2fr_1.2fr_auto] lg:items-end">
        <label className="flex flex-col gap-2">
          <span className={labelClass}>Availability</span>
          <select
            name="availability"
            value={filters.availability}
            onChange={onChange}
            className={`${fieldClass} appearance-none bg-neutral-50 pr-10`}
          >
            <option value="all">All</option>
            <option value="available">Available</option>
            <option value="limited">Limited</option>
          </select>
        </label>

        <label className="flex flex-col gap-2">
          <span className={labelClass}>Check-in</span>
          <input
            type="date"
            name="checkIn"
            value={filters.checkIn}
            onChange={onChange}
            className={fieldClass}
          />
        </label>

        <label className="flex flex-col gap-2">
          <span className={labelClass}>Check-out</span>
          <input
            type="date"
            name="checkOut"
            value={filters.checkOut}
            onChange={onChange}
            className={fieldClass}
          />
        </label>

        <Button
          type="submit"
          variant="accent"
          className="flex h-12 items-center justify-center gap-2 rounded-xl border border-neutral-900 bg-neutral-900 px-6 text-sm font-semibold text-white shadow-[0_10px_22px_rgba(15,23,42,0.12)] transition-all duration-200 hover:-translate-y-0.5 hover:border-amber-500 hover:bg-amber-500 hover:text-neutral-950 hover:shadow-[0_14px_28px_rgba(245,158,11,0.22)] lg:w-auto"
        >
          <Search className="h-4 w-4" />
          Apply
        </Button>
      </div>
    </form>
  )
}

export default SearchBar