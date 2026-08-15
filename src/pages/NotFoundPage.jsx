import { Link } from 'react-router-dom'
import Button from '../components/Button'

function NotFoundPage() {
  return (
    <div className="rounded-3xl border border-neutral-200 bg-white p-10 text-center">
      <p className="text-sm uppercase tracking-[0.2em] text-amber-700">404</p>
      <h1 className="mt-2 font-serif text-4xl text-neutral-900">Page not found</h1>
      <p className="mt-3 text-neutral-600">The page you are looking for does not exist or has moved.</p>
      <Link to="/" className="mt-6 inline-flex">
        <Button>Go Home</Button>
      </Link>
    </div>
  )
}

export default NotFoundPage
