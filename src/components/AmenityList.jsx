import { Check } from 'lucide-react'

function AmenityList({ amenities }) {
  return (
    <ul className="grid gap-2 sm:grid-cols-2">
      {amenities.map((amenity) => (
        <li key={amenity} className="flex items-center gap-2 text-sm text-neutral-700">
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-50 text-emerald-700">
            <Check className="h-4 w-4" />
          </span>
          {amenity}
        </li>
      ))}
    </ul>
  )
}

export default AmenityList
