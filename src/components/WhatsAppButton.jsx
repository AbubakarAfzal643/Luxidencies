import { MessageCircleMore } from 'lucide-react'
import { buildWhatsAppUrl } from '../config/siteConfig'

function WhatsAppButton() {
  return (
    <a
      href={buildWhatsAppUrl()}
      target="_blank"
      rel="noreferrer"
      className="group fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircleMore className="h-7 w-7" />
      <span className="pointer-events-none absolute right-16 top-1/2 -translate-y-1/2 rounded-lg bg-neutral-900 px-2 py-1 text-xs text-white opacity-0 transition group-hover:opacity-100">
        Chat with us
      </span>
    </a>
  )
}

export default WhatsAppButton
