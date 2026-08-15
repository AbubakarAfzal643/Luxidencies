import { MessageCircleMore, PhoneCall } from 'lucide-react'
import { buildWhatsAppUrl } from '../config/siteConfig'

function WhatsAppButton() {
  return (
    <a
      href={buildWhatsAppUrl()}
      target="_blank"
      rel="noreferrer"
      className="floating-whatsapp-button group fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
      aria-label="Chat with us on WhatsApp"
    >
      <span className="floating-whatsapp-inner relative flex h-full w-full items-center justify-center overflow-hidden rounded-full">
        <MessageCircleMore className="floating-whatsapp-icon absolute h-7 w-7 transition-all duration-300 ease-out group-hover:translate-x-6 group-hover:opacity-0" />
        <PhoneCall className="floating-whatsapp-call absolute left-3.5 h-5 w-5 -translate-x-6 opacity-0 transition-all duration-300 ease-out group-hover:translate-x-0 group-hover:opacity-100" />
      </span>

      <span className="pointer-events-none absolute right-16 top-1/2 -translate-y-1/2 rounded-lg bg-neutral-900 px-2.5 py-1.5 text-xs font-medium text-white opacity-0 shadow-lg transition-all duration-200 ease-out group-hover:opacity-100 group-hover:translate-x-0 whitespace-nowrap">
        Chat With Us
      </span>
    </a>
  )
}

export default WhatsAppButton
