import ContactSection from '../components/ContactSection'

function ContactPage() {
  return (
    <div className="page-shell space-y-8 luxury-reveal">
      <header className="luxury-scale">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">Contact</p>
        <h1 className="mt-2 font-serif text-4xl text-neutral-900">We are here to help</h1>
      </header>
      <ContactSection />
    </div>
  )
}

export default ContactPage
