import { Link } from 'react-router-dom'
import Button from './Button'

const heroImages = [
  'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80',
  'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1600&q=80',
  'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1600&q=80',
]

const keywords = [
  'Apartment booking Lahore',
  'Best rooms in Lahore',
  'Serviced apartments Lahore',
  'Luxury stays Lahore',
  'Short stay apartments',
  'Book apartment in Lahore',
]

function Hero() {
  return (
    <section className="hero-shell mb-25 relative overflow-hidden rounded-4xl border border-neutral-200 bg-neutral-950 text-white shadow-[0_30px_80px_rgba(23,23,23,0.12)]">
      <div className="hero-visual" aria-hidden="true">
        {heroImages.map((image, index) => (
          <img key={image} src={image} alt="Luxury apartment interior" className={`hero-slide hero-slide-${index + 1}`} />
        ))}
        <div className="hero-overlay" />
      </div>

      <div className="hero-marquee mb-3" aria-label="Popular apartment keywords">
        <div className="hero-marquee-track">
          {[...keywords, ...keywords].map((keyword, index) => (
            <span key={`${keyword}-${index}`} className="hero-keyword-item">{keyword}</span>
          ))}
        </div>
      </div>

      <div className="relative z-10 flex min-h-140 items-end px-6 pb-12 pt-2 md:px-10 md:pb-16 md:pt-3">
        <div className="max-w-3xl -translate-y-8 md:-translate-y-10">
          <p className="mb-10 inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.28em] text-neutral-200 backdrop-blur-sm">
            Premium Apartment Booking
          </p>
          <h1 className="max-w-xl text-4xl font-semibold leading-[0.90] tracking-[-0.06em] text-white md:text-6xl">
            Stay in beautifully curated <strong className='text-yellow-400'>apartments</strong>, wherever your journey leads.
          </h1>
          <p className="mt-2 max-w-xl text-base text-neutral-200 md:text-lg">
            Discover premium homes, effortless booking, and thoughtful hospitality from city skyline lofts to scenic mountain retreats.
          </p>
          <div className="cta-stack mt-8 flex flex-wrap gap-3">
            <Link to="/apartments">
              <Button variant="accent" className="hero-action-button cursor-pointer">Explore Apartments</Button>
            </Link>
            <a href="#how-booking-works">
              <Button
                variant="ghost"
                className="hero-action-button cursor-pointer border border-white/25 bg-white/8 text-white shadow-[0_10px_28px_rgba(15,23,42,0.12)] transition-all duration-200 hover:-translate-y-0.5 hover:border-amber-500 hover:bg-amber-500 hover:text-neutral-950 hover:shadow-[0_14px_30px_rgba(245,158,11,0.24)]"
              >
                How It Works
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
