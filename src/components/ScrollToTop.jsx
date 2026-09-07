import React, { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300)
    }
    window.addEventListener('scroll', toggleVisibility, { passive: true })
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed bottom-20 sm:bottom-24 right-4 sm:right-6 z-40
        w-10 h-10 sm:w-12 sm:h-12
        bg-navy text-white rounded-full
        shadow-lg flex items-center justify-center
        transition-all duration-300
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}
        hover:bg-royal hover:shadow-medium
        focus:outline-none focus:ring-2 focus:ring-royal/50 focus:ring-offset-2
      `}
      aria-label="Scroll to top"
      title="Scroll to top"
    >
      <ArrowUp size={18} className="sm:text-xl" />
    </button>
  )
}

export default ScrollToTop
