import LocationCard from '../components/LocationCard'
import { locations } from '../data/locations'

function LocationsPage() {
  return (
    <div className="page-shell space-y-8">
      <header>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">Locations</p>
        <h1 className="mt-2 font-serif text-4xl text-neutral-900">Discover our destinations</h1>
        <p className="mt-2 text-sm text-neutral-600">From dynamic urban districts to scenic escapes, choose the stay that fits your style.</p>
      </header>

      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {locations.map((location) => (
          <LocationCard key={location.id} location={location} />
        ))}
      </section>
    </div>
  )
}

export default LocationsPage
