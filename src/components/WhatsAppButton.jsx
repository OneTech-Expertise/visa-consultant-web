import React from 'react'
import { MessageCircle } from 'lucide-react'
import siteConfig from '../data/siteConfig'

const WhatsAppButton = () => {
  const whatsappMessage = "Hello AS Consultant, I would like to discuss my visa options."
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp.replace(/\s+/g, '')}?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 w-12 h-12 sm:w-14 sm:h-14 bg-[#25D366] text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-[#20BA5C] hover:shadow-xl hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#25D366]/50 focus:ring-offset-2 group"
      aria-label="Chat on WhatsApp"
      title="Chat on WhatsApp"
    >
      <MessageCircle size={22} className="sm:text-2xl" />
      <span className="absolute right-full mr-3 hidden sm:group-hover:flex items-center bg-navy text-white text-sm font-medium px-3 py-2 rounded-lg shadow-md whitespace-nowrap">
        Chat on WhatsApp
      </span>
    </a>
  )
}

export default WhatsAppButton
