import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
// import { siteConfig } from '../config/siteConfig'
import Button from './Button'

const links = [
  { to: '/', label: 'Home' },
  { to: '/apartments', label: 'Apartments' },
  { to: '/locations', label: 'Locations' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsSticky(window.scrollY > 16)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const logoLetters = ['L', 'u', 'x', 'i', 'd', 'e', 'n', 'c', 'i', 'e', 's']

  const navLinkClass = ({ isActive }) =>
    `nav-link-underline relative inline-flex items-center px-3 py-2 text-sm font-medium tracking-[0.08em] uppercase transition ${
      isActive ? 'active' : ''
    }`

  return (
    <header
      className={`glass-navbar ${isSticky ? 'glass-navbar-scrolled' : ''}`}
    >
      <nav className="glass-navbar-inner" aria-label="Main navigation">
        <Link to="/" className="brand-logo-link brand-logo-link-offset" aria-label="Luxidencies home">
          <span className="brand-logo" aria-label="Luxidencies" role="img">
            {logoLetters.map((letter, index) => (
              <span
                key={`${letter}-${index}`}
                className="brand-logo-letter"
                style={{ '--delay': `${(logoLetters.length - index - 1) * 0.08}s` }}
              >
                {letter}
              </span>
            ))}
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} className={navLinkClass} end={link.to === '/'}>
              {link.label}
            </NavLink>
          ))}
          <Link to="/apartments">
            <Button
              variant="primary"
              className="ml-2 cursor-pointer hover:bg-amber-500 hover:text-neutral-950"
            >
              Book Now
            </Button>
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation"
          className="rounded-full p-2 text-neutral-700 transition hover:bg-neutral-100 md:hidden"
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {isOpen ? (
        <div className="glass-mobile-panel md:hidden">
          <div className="flex flex-col gap-2">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={navLinkClass}
                end={link.to === '/'}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
            <Link to="/apartments" onClick={() => setIsOpen(false)}>
              <Button variant="ghost" className="mt-2 w-full">Book Now</Button>
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  )
}

export default Navbar
