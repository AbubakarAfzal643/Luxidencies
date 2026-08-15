import { MessageCircleMore } from 'lucide-react'
import { Link } from 'react-router-dom'
import { buildWhatsAppUrl, siteConfig } from '../config/siteConfig'
import { locations } from '../data/locations'

function Footer() {
  return (
    <footer className="mt-16 bg-neutral-950 text-neutral-300">
      <div className="mx-auto grid w-full max-w-336 gap-8 px-4 py-12 md:grid-cols-4 md:px-6">
        <div>
          <h3 className="font-serif text-xl text-white">{siteConfig.websiteName}</h3>
          <p className="mt-3 text-sm text-neutral-400">Premium apartments for elegant, seamless stays in top cities.</p>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-white">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/apartments" className="hover:text-white">Apartments</Link></li>
            <li><Link to="/locations" className="hover:text-white">Locations</Link></li>
            <li><Link to="/about" className="hover:text-white">About</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-white">Locations</h4>
          <ul className="space-y-2 text-sm">
            {locations.map((location) => (
              <li key={location.id}>{location.name}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-white">Contact</h4>
          <p className="text-sm">{siteConfig.phoneNumber}</p>
          <p className="text-sm">{siteConfig.alternatePhoneNumber}</p>
          <p className="text-sm">{siteConfig.emailAddress}</p>
          <a
            href={buildWhatsAppUrl()}
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-flex items-center gap-2 text-sm text-[#25D366] hover:text-[#1eb757]"
          >
            <MessageCircleMore className="h-4 w-4" /> WhatsApp
          </a>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-4 text-center text-xs text-neutral-500">
        Copyright {new Date().getFullYear()} {siteConfig.websiteName}. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
