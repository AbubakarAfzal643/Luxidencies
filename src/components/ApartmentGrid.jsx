import ApartmentCard from './ApartmentCard'

function ApartmentGrid({ apartments }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {apartments.map((apartment) => (
        <ApartmentCard key={apartment.id} apartment={apartment} />
      ))}
    </div>
  )
}

export default ApartmentGrid
