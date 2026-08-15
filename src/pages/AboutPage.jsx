import { Link } from 'react-router-dom'
import {
  Award,
  BedDouble,
  CheckCircle2,
  HeartHandshake,
  Home,
  MapPin,
  ShieldCheck,
  Sparkles,
  Star,
  UsersRound,
} from 'lucide-react'
import Button from '../components/Button'

const aboutCards = [
  {
    icon: Sparkles,
    title: 'Elegant Experiences',
    text: 'We curate apartments that blend premium design, thoughtful amenities, and a polished guest experience from booking to check-out.',
  },
  {
    icon: Award,
    title: 'Trusted Stays',
    text: 'Every listing is selected with comfort, cleanliness, transparency, and reliability in mind so guests feel confident and cared for.',
  },
  {
    icon: UsersRound,
    title: 'Guest-First Service',
    text: 'Our approach focuses on convenience, privacy, and responsive communication to make every stay feel smoother and more personal.',
  },
]

const hospitalityPoints = [
  'Well-maintained apartments for comfortable stays and productive travel.',
  'Thoughtful details that support convenience, privacy, and a relaxed guest experience.',
  'Calm, welcoming spaces suitable for both short-term and longer stays.',
  'Reliable communication and transparent booking support from start to finish.',
]

const reasonsToChoose = [
  {
    icon: Home,
    title: 'Comfortable stays',
    text: 'Premium apartments designed for restful living, practical comfort, and easy routines.',
  },
  {
    icon: MapPin,
    title: 'Convenient locations',
    text: 'Our stays are positioned to keep guests close to essential city access and everyday convenience.',
  },
  {
    icon: ShieldCheck,
    title: 'Clean and secure',
    text: 'We prioritise clean, welcoming spaces that feel safe, private, and ready for guests.',
  },
  {
    icon: HeartHandshake,
    title: 'Guest-focused service',
    text: 'Clear communication and attentive support help guests feel looked after throughout their stay.',
  },
]

const expectationPoints = [
  {
    icon: BedDouble,
    title: 'Simple booking experience',
    text: 'From browsing to confirmation, the process is designed to feel straightforward and reassuring.',
  },
  {
    icon: CheckCircle2,
    title: 'Comfort and privacy',
    text: 'Guests can expect clean, well-kept spaces that support restful nights and peaceful downtime.',
  },
  {
    icon: Star,
    title: 'Reliable hospitality',
    text: 'We focus on thoughtful service, clear communication, and an experience that feels premium without being complicated.',
  },
]

const commitmentPoints = [
  'Comfort-focused accommodation for modern travelers and residents.',
  'Cleanliness and maintenance as a core part of the guest experience.',
  'Transparent communication and dependable guest support.',
  'A premium standard that balances style, convenience, and peace of mind.',
]

function AboutPage() {
  return (
    <div className="page-shell space-y-8 luxury-reveal">
      <header className="about-hero luxury-scale">
        <div className="about-hero-content">
          <p className="section-kicker">About Luxidency</p>
          <h1>Comfortable apartment stays designed for modern living.</h1>
          <p>
            Luxidency brings together some of the best apartments in Murree, Islamabad, and Lahore, with a focus on comfort, privacy, and effortless city-to-mountain stays. From scenic escapes in Murree to polished city living in Islamabad and Lahore, our homes are chosen to make every trip feel easy, premium, and genuinely relaxing.
          </p>
          <div className="about-hero-actions">
            <Link to="/apartments">
              <Button variant="accent">Explore Apartments</Button>
            </Link>
            <Link to="/contact">
              <Button variant="ghost">Contact Us</Button>
            </Link>
          </div>
        </div>
        <div className="about-hero-visual">
          <img
            src="/Luxidency_Image.jpeg"
            alt="Luxury apartment living space with premium interior design and modern styling"
          />
        </div>
      </header>

      <section className="about-section luxury-scale" aria-labelledby="about-intro-title">
        <div className="section-heading">
          <p className="section-kicker">About Us</p>
          <h2 id="about-intro-title">A guest-first approach to apartment booking.</h2>
        </div>
        <p className="about-intro-copy">
          Luxidency is built around the idea that apartment stays should feel effortless, comfortable, and genuinely welcoming. We help guests discover premium homes in Murree, Islamabad, and Lahore that support both leisure escapes and practical city stays. Whether you are planning a mountain getaway, a business trip, or a smooth family stay, our goal is to make booking feel simple, dependable, and beautifully premium from start to finish.
        </p>
      </section>

      <section className="about-values luxury-scale" aria-label="Luxidency trust values">
        <div className="values-grid">
          {aboutCards.map(({ icon: Icon, title, text }) => (
            <article key={title} className="value-card">
              <Icon className="value-icon" />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-two-column luxury-scale" aria-labelledby="hospitality-title">
        <div className="about-panel">
          <p className="section-kicker">Our Hospitality</p>
          <h2 id="hospitality-title">Thoughtful stays shaped around guest comfort.</h2>
          <p>
            Our hospitality approach is built on attention to detail, easy communication, and spaces that feel welcoming from the moment a guest arrives. We focus on apartment stays across Murree, Islamabad, and Lahore that are comfortable, convenient, and designed to feel like a calm, well-cared-for home rather than a rushed accommodation experience.
          </p>
          <ul className="about-check-list">
            {hospitalityPoints.map((point) => (
              <li key={point}><CheckCircle2 className="h-4 w-4" /> {point}</li>
            ))}
          </ul>
        </div>

        <div className="about-panel accent-panel">
          <p className="section-kicker">Why Choose Us</p>
          <h2>Premium apartment accommodation with a guest-first mindset.</h2>
          <div className="reason-grid">
            {reasonsToChoose.map(({ icon: Icon, title, text }) => (
              <div key={title} className="reason-item">
                <Icon className="reason-icon" />
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-section luxury-scale" aria-labelledby="expect-title">
        <div className="section-heading">
          <p className="section-kicker">What Guests Can Expect</p>
          <h2 id="expect-title">A smooth, comfortable, and reassuring guest experience.</h2>
        </div>
        <div className="expect-grid">
          {expectationPoints.map(({ icon: Icon, title, text }) => (
            <article key={title} className="expect-card">
              <Icon className="expect-icon" />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section luxury-scale" aria-labelledby="commitment-title">
        <div className="section-heading">
          <p className="section-kicker">Our Commitment</p>
          <h2 id="commitment-title">Quality, cleanliness, comfort, and trust at every stage.</h2>
        </div>
        <div className="commitment-wrap">
          <p className="about-commitment-copy">
            We are committed to creating apartment stays that feel comfortable, welcoming, and dependable across Murree, Islamabad, and Lahore. Our standards reflect a focus on quality accommodation, guest satisfaction, clear communication, and a consistent level of care that guests can trust when choosing their next stay. Booking with Luxidency is designed to be easy, smooth, and reassuring at every step.
          </p>
          <ul className="about-check-list compact-list">
            {commitmentPoints.map((point) => (
              <li key={point}><CheckCircle2 className="h-4 w-4" /> {point}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="about-cta luxury-scale" aria-labelledby="cta-title">
        <div>
          <p className="section-kicker">Book Your Stay</p>
          <h2 id="cta-title">Discover apartment accommodation that feels premium, comfortable, and easy.</h2>
        </div>
        <div className="about-cta-actions">
          <Link to="/apartments">
            <Button variant="accent">Explore Available Apartments</Button>
          </Link>
          <Link to="/contact">
            <Button variant="ghost">Contact the Team</Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
