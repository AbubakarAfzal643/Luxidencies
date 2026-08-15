import { Bath, BedDouble, MapPin, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import { formatCurrency, formatGuestsLabel } from '../utils/formatters'
import Button from './Button'

function ApartmentCard({ apartment, showActions = true }) {
  return (
    <article className="group overflow-hidden rounded-[1.7rem] border border-neutral-200 bg-white shadow-[0_18px_40px_rgba(15,23,42,0.04)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_rgba(15,23,42,0.08)]">
      <div className="relative h-72 overflow-hidden">
        <img
          src={apartment.mainImage}
          alt={apartment.name}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <span
          className={`absolute left-4 top-4 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] ${
            apartment.availability === 'Available'
              ? 'bg-black text-amber-400'
              : 'bg-[#f3e8d0] text-neutral-900'
          }`}
        >
          {apartment.availability}
        </span>
      </div>

      <div className="space-y-4 p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-xl font-semibold text-neutral-900">{apartment.name}</h3>
            <p className="mt-1 flex items-center gap-1.5 text-sm text-neutral-600">
              <MapPin className="h-4 w-4 text-neutral-500" /> {apartment.location}
            </p>
          </div>
          <div className="text-right">
            <p className="text-[10px] uppercase tracking-[0.16em] text-neutral-500">From</p>
            <p className="text-lg font-bold text-neutral-900">{formatCurrency(apartment.pricePerNight)}</p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 rounded-2xl bg-neutral-100 p-3 text-[11px] font-medium text-neutral-700">
          <p className="flex items-center gap-1.5">
            <BedDouble className="h-4 w-4 text-neutral-500" /> {apartment.bedrooms} Beds
          </p>
          <p className="flex items-center gap-1.5">
            <Bath className="h-4 w-4 text-neutral-500" /> {apartment.bathrooms} Baths
          </p>
          <p className="flex items-center gap-1.5">
            <Users className="h-4 w-4 text-neutral-500" /> {formatGuestsLabel(apartment.maxGuests)}
          </p>
        </div>

        <p className="text-sm leading-relaxed text-neutral-600">{apartment.shortDescription}</p>

        {showActions ? (
          <div className="flex gap-3 pt-1">
            <Link to={`/apartments/${apartment.id}`} className="flex-1">
              <Button variant="ghost" className="w-full rounded-full">View Details</Button>
            </Link>
            <Link to={`/apartments/${apartment.id}#booking`} className="flex-1">
              <Button variant="accent" className="w-full rounded-full">Book Now</Button>
            </Link>
          </div>
        ) : null}
      </div>
    </article>
  )
}

export default ApartmentCard
