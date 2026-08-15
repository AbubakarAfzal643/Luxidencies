import { useEffect, useRef, useState } from 'react'
import { Mail, MessageCircleMore, Phone } from 'lucide-react'
import { buildWhatsAppUrl, siteConfig } from '../config/siteConfig'
import Button from './Button'

function ContactSection({ className = '', compact = false }) {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = sectionRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(element)
        }
      },
      { threshold: 0.25 },
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="contact"
      className={`relative flex h-full flex-col justify-center overflow-hidden rounded-4xl bg-[#111111] px-6 py-8 text-white md:px-8 ${className}`}
    >
      {compact ? (
        <div className="flex items-center justify-center">
          <span className="whitespace-nowrap text-xs font-semibold uppercase tracking-[0.32em] text-white [writing-mode:horizontal-tb]">
            Contact
          </span>
        </div>
      ) : (
        <div className="transition-opacity duration-300">
          <h2 className="font-serif text-3xl leading-tight">Contact</h2>
          <p className="mt-1 max-w-xl text-sm leading-4 text-neutral-300">We keep support simple and direct. Reach out anytime for availability and booking assistance.</p>

          <div className="mt-4 grid gap-3 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-3.5 backdrop-blur-sm">
              <p className="mb-1 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.08em] text-neutral-200"><Phone className="h-3.5 w-3.5" /> Phone 1</p>
              <p className="text-sm leading-5">{siteConfig.phoneNumber}</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-3.5 backdrop-blur-sm">
              <p className="mb-1 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.08em] text-neutral-200"><Phone className="h-3.5 w-3.5" /> Phone 2</p>
              <p className="text-sm leading-5">{siteConfig.alternatePhoneNumber}</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-3.5 backdrop-blur-sm">
              <p className="mb-1 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.08em] text-neutral-200"><Mail className="h-3.5 w-3.5" /> Email</p>
              <p className="text-sm leading-5">{siteConfig.emailAddress}</p>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href={`mailto:${siteConfig.emailAddress}`}
              className={`contact-cta ${isVisible ? 'is-visible' : ''}`}
              aria-label="Send us an email"
            >
              <Button variant="accent">Contact Us</Button>
            </a>
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noreferrer"
              className={`contact-cta ${isVisible ? 'is-visible' : ''}`}
              aria-label="Open WhatsApp chat"
            >
              <Button className="whatsapp-button bg-[#25D366] text-white hover:bg-[#1eb757] focus-visible:ring-[#25D366]">
                <MessageCircleMore className="mr-2 h-4 w-4 duration-200" /> WhatsApp
              </Button>
            </a>
          </div>
        </div>
      )}
    </section>
  )
}

export default ContactSection