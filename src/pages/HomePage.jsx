import {  useState } from 'react'
import { ArrowRight, Building2, Compass, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'
import ApartmentGrid from '../components/ApartmentGrid'
import Button from '../components/Button'
import ContactSection from '../components/ContactSection'
import Hero from '../components/Hero'
import HeroSearchWidget from '../components/HeroSearchWidget'
import LocationCard from '../components/LocationCard'
import { apartments } from '../data/apartments'
import { locations } from '../data/locations'

function HomePage() {
  // const pageRef = useRef(null)
  const [hoveredPanel, setHoveredPanel] = useState(null) // null | 'book' | 'contact'
  const featuredApartments = apartments.slice(0, 3)
  const whyChooseUs = [
    {
      icon: Building2,
      title: 'Premium Apartments',
      text: 'Elegant interiors, curated amenities, and top-tier locations.',
      accent: 'text-amber-400',
      headingColor: 'text-amber-200',
    },
    {
      icon: ShieldCheck,
      title: 'Reliable Booking',
      text: 'Clear availability, transparent pricing, and smooth confirmation.',
      accent: 'text-emerald-400',
      headingColor: 'text-emerald-200',
    },
    {
      icon: Compass,
      title: 'Prime Locations',
      text: 'Stay where city life, scenic views, and convenience meet.',
      accent: 'text-sky-400',
      headingColor: 'text-sky-200',
    },
  ]

  const bookingSteps = [
    {
      title: 'Choose an apartment',
      text: 'Browse curated spaces that match your lifestyle and preferred neighborhood.',
      accent: 'text-amber-400',
      headingColor: 'text-amber-200',
    },
    {
      title: 'Pick your dates',
      text: 'Select your check-in and check-out time to secure the best stay window.',
      accent: 'text-emerald-400',
      headingColor: 'text-emerald-200',
    },
    {
      title: 'Review your booking',
      text: 'Confirm guest details and pricing before finalizing your ideal reservation.',
      accent: 'text-sky-400',
      headingColor: 'text-sky-200',
    },
    {
      title: 'Confirm and relax',
      text: 'Receive your booking plan instantly and enjoy a smooth premium experience.',
      accent: 'text-violet-400',
      headingColor: 'text-violet-200',
    },
  ]

  return (
    <div className="home-page-shell space-y-14 md:space-y-16">

      <section className="space-y-6 luxury-reveal">
        <Hero />
        <HeroSearchWidget />
      </section>

      <section className="section-shell luxury-reveal">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="section-kicker">Featured Apartments</p>
            <h2 className="section-title mt-2">Exceptional spaces, handpicked for comfort</h2>
          </div>
          <Link to="/apartments" className="hidden text-sm font-semibold text-neutral-700 hover:text-neutral-900 md:inline-flex">
            View all <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
        <div className="luxury-scale">
          <ApartmentGrid apartments={featuredApartments} />
        </div>
      </section>

      <section className="rounded-3xl bg-neutral-950 px-6 py-10 text-white md:px-10 luxury-reveal">
        <p className="section-kicker text-amber-300">Why Choose Us</p>
        <h2 className="mt-2 text-3xl font-medium tracking-[-0.04em] text-white md:text-4xl">Designed for modern living</h2>

        <div className="feature-marquee mt-6">
          <div className="feature-marquee-track">
            {[...whyChooseUs, ...whyChooseUs].map(({ icon: Icon, title, text, accent, headingColor }, index) => (
              <article key={`${title}-${index}`} className="feature-marquee-item luxury-scale">
                <div className="feature-title-row">
                  <Icon className={`h-5 w-5 shrink-0 ${accent}`} />
                  <h3 className={headingColor}>{title}</h3>
                </div>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell luxury-reveal">
        <p className="section-kicker">Apartment Locations</p>
        <h2 className="section-title mt-2">Find your next stay by destination</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {locations.map((location) => (
            <LocationCard key={location.id} location={location} className="luxury-scale" />
          ))}
        </div>
      </section>

      <section id="how-booking-works" className="rounded-3xl bg-neutral-950 px-6 py-10 text-white md:px-10 luxury-reveal">
        <p className="section-kicker text-amber-300">How Booking Works</p>
        <h2 className="mt-2 text-3xl font-medium tracking-[-0.04em] text-white md:text-4xl">Simple steps, premium experience</h2>

        <div className="feature-marquee mt-6">
          <div className="feature-marquee-track">
            {[...bookingSteps, ...bookingSteps].map(({ title, text, accent, headingColor }, index) => (
              <article key={`${title}-${index}`} className="feature-marquee-item luxury-scale">
                <div className="feature-title-row">
                  <span className={`inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/5 text-xs font-semibold ${accent}`}>
                    {index + 1}
                  </span>
                  <h3 className={headingColor}>{title}</h3>
                </div>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="flex flex-col gap-6 lg:flex-row lg:items-stretch luxury-reveal">
        <section
          onMouseEnter={() => setHoveredPanel('book')}
          onMouseLeave={() => setHoveredPanel(null)}
          className={`group relative flex h-70 min-h-70 flex-col justify-center overflow-hidden rounded-4xl border border-amber-700 bg-white px-6 py-8 shadow-[0_16px_36px_rgba(24,24,27,0.04)] transition-all duration-300 ease-out md:px-8 lg:flex-[0.9_1_0%] ${
            hoveredPanel === 'book' ? 'lg:flex-[2.1_1_0%] lg:shadow-[0_20px_44px_rgba(24,24,27,0.08)]' : ''
          } ${hoveredPanel === 'contact' ? 'lg:flex-[0.5_1_0%] lg:px-4' : ''}`}
        >
          <div className="absolute inset-x-6 top-0 h-px bg-linear-to-r from-transparent via-amber-400/50 to-transparent" />

          {hoveredPanel === 'contact' ? (
            <div className="flex items-center justify-center">
              <span className="whitespace-nowrap text-xs font-semibold uppercase tracking-[0.32em] text-amber-700">
                Ready to Book
              </span>
            </div>
          ) : (
            <div className="transition-opacity duration-300">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-700">Ready to Book</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-neutral-900 md:text-[2.3rem]">Reserve your stay in minutes</h2>
              <p className="mt-3 max-w-md text-sm leading-6 text-neutral-600">Browse apartments, lock your dates, and receive your booking plan instantly.</p>
              <div className="mt-10 flex flex-wrap gap-3">
                <Link to="/apartments">
                  <Button variant="accent">Book Now</Button>
                </Link>
                <a href="#contact">
                  <Button className="border-neutral-300 bg-neutral-100 text-neutral-900 hover:bg-neutral-200">
                    Contact Us
                  </Button>
                </a>
              </div>
            </div>
          )}
        </section>

        <div
          onMouseEnter={() => setHoveredPanel('contact')}
          onMouseLeave={() => setHoveredPanel(null)}
          className={`transition-all duration-300 ease-out lg:flex-[1.3_1_0%] ${
            hoveredPanel === 'contact' ? 'lg:flex-[2.1_1_0%]' : ''
          } ${hoveredPanel === 'book' ? 'lg:flex-[0.5_1_0%]' : ''}`}
        >
          <ContactSection
            className={`h-70 min-h-70 rounded-4xl border border-white/10 bg-[radial-gradient(circle_at_top,rgba(255,186,80,0.16),transparent_32%),#111111] shadow-[0_16px_36px_rgba(12,12,12,0.22)] ${
              hoveredPanel === 'book' ? 'lg:px-4' : ''
            }`}
            compact={hoveredPanel === 'book'}
          />
        </div>
      </div>
    </div>
  )
}

export default HomePage