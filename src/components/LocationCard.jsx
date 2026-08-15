import { Link } from 'react-router-dom'
import Button from './Button'

function LocationCard({ location, className = '' }) {
  return (
    <article className={`group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-neutral-200 bg-white shadow-[0_18px_35px_rgba(17,17,17,0.04)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_45px_rgba(17,17,17,0.08)] ${className}`}>
      <img
        src={location.image}
        alt={location.name}
        loading="lazy"
        className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
      />
      <div className="flex flex-1 flex-col justify-between gap-4 p-5">
        <div className="space-y-2">
          <h3 className="text-[1.4rem] font-semibold tracking-[-0.04em] text-neutral-900">{location.name}</h3>
          <p className="text-sm leading-6 text-neutral-600">{location.description}</p>
        </div>

        <div className="space-y-3">
          <p className="text-[0.68rem] font-medium uppercase tracking-[0.18em] text-neutral-500">
            {location.apartmentsCount} apartments
          </p>

          <Link to={`/apartments?location=${encodeURIComponent(location.name)}`} className="block">
            <Button className="w-full justify-center" variant="ghost">Explore Apartments</Button>
          </Link>
        </div>
      </div>
    </article>
  )
}

export default LocationCard
