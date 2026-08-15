import { Mail, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { siteConfig } from '../config/siteConfig'

function HomeContactSection({ className = '', compact = false }) {
  const contactItems = [
    {
      label: 'Phone',
      value: siteConfig.phoneNumber,
      href: `tel:${siteConfig.phoneNumber.replace(/\s+/g, '')}`,
      icon: Phone,
      external: true,
    },
    {
      label: 'Email',
      value: siteConfig.emailAddress,
      href: '/contact',
      icon: Mail,
      external: false,
    },
  ]

  if (compact) {
    return (
      <section
        className={`home-contact-section relative flex h-70 min-h-70 items-center justify-center overflow-hidden rounded-4xl border border-white/10 bg-[#111111] px-6 py-8 text-white shadow-[0_16px_36px_rgba(12,12,12,0.22)] transition-all duration-300 ease-out md:px-8 ${className}`}
      >
        <div className="absolute inset-x-6 top-0 h-px bg-linear-to-r from-transparent via-amber-400/50 to-transparent" />
        <span className="whitespace-nowrap text-xs font-semibold uppercase tracking-[0.32em] text-white">
          Contact
        </span>
      </section>
    )
  }

  return (
    <section
      className={`home-contact-section relative flex h-auto min-h-70 flex-col justify-center overflow-hidden rounded-4xl border border-white/10 bg-[#111111] px-4 py-5 text-white shadow-[0_16px_36px_rgba(12,12,12,0.22)] transition-all duration-300 ease-out sm:px-6 sm:py-8 md:h-70 md:min-h-70 md:px-8 ${className}`}
    >
      <div className="absolute inset-x-6 top-0 h-px bg-linear-to-r from-transparent via-amber-400/50 to-transparent" />

      <div className="w-full">
        <p className="pt-0 text-[10px] font-semibold uppercase tracking-[0.22em] text-amber-700 sm:pt-5 sm:text-xs">Contact</p>
        <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-white sm:text-3xl md:text-[2.3rem]">
          Let’s start your next stay
        </h2>
        <p className="mt-3 max-w-md text-sm leading-6 text-neutral-300">
          Reach us directly for bookings, availability, and personalized apartment support.
        </p>

        <div className="mt-4 grid gap-3 sm:mt-3 sm:gap-4 sm:grid-cols-2">
          {contactItems.map(({ label, value, href, icon: Icon, external }) => {
            const content = (
              <>
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-500/10 text-amber-300 transition-colors duration-200 group-hover:bg-amber-500 group-hover:text-neutral-950">
                  <Icon className="h-4 w-4" />
                </span>

                <span className="min-w-0 flex-1">
                  <span className="block text-[10px] font-medium uppercase tracking-[0.18em] text-neutral-400">
                    {label}
                  </span>
                  <span className="mt-1 block wrap-break-words text-sm font-medium text-white group-hover:text-amber-100 md:text-[1.05rem]">
                    {value}
                  </span>
                </span>
              </>
            )

            if (external) {
              return (
                <a
                  key={label}
                  href={href}
                  className="group flex min-h-19.5 items-center gap-3 rounded-2xl border border-white/10 bg-[#1a1a1a] p-3 text-left transition-colors duration-200 hover:border-amber-500/60 hover:bg-white/8 sm:min-h-21.5 sm:p-3.5"
                >
                  {content}
                </a>
              )
            }

            return (
              <Link
                key={label}
                to={href}
                className="group flex min-h-19.5 items-center gap-3 rounded-2xl border border-white/10 bg-[#1a1a1a] p-3 text-left transition-colors duration-200 hover:border-amber-500/60 hover:bg-white/8 sm:min-h-21.5 sm:p-3.5"
              >
                {content}
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default HomeContactSection
