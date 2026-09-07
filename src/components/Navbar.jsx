import React, { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'

import siteConfig from '../data/siteConfig'
import Logo from './Logo'
import Button from './Button'

const navLinks = [
  { label: 'Home', href: '/', type: 'route' },
  { label: 'Services', href: '/services', type: 'route' },
  { label: 'Countries', href: '/countries', type: 'route' },
  { label: 'About', href: '/about', type: 'route' },
  { label: 'FAQs', href: '/faqs', type: 'route' },
  { label: 'Contact', href: '/contact', type: 'route' },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const menuRef = useRef(null)
  const location = useLocation()
  const isHome = location.pathname === '/'
  const isLight = !scrolled && isHome

  useEffect(() => {
    const onScroll = () => setScrolled(window.pageYOffset > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!isOpen) return
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) setIsOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [isOpen])

  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') setIsOpen(false) }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  useEffect(() => {
    setIsOpen(false)
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-soft'
            : isHome
            ? 'bg-transparent'
            : 'bg-white/95 backdrop-blur-md shadow-soft'
        }`}
        ref={menuRef}
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 sm:h-20">
          <Link to="/" aria-label={`${siteConfig.agencyName} home`}>
            <Logo size="navbar" light={isLight} />
          </Link>

          <nav className="hidden lg:flex items-center gap-6 xl:gap-8" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm font-medium transition-colors hover:text-gold whitespace-nowrap ${
                  isLight ? 'text-white' : 'text-dark-text'
                } ${location.pathname === link.href ? 'text-gold' : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
              className={`text-sm font-semibold flex items-center gap-2 ${
                isLight ? 'text-white' : 'text-navy'
              }`}
            >
              <Phone size={15} className="text-gold" />
              <span className="hidden xl:inline">{siteConfig.phone}</span>
            </a>
            <Button as={Link} to="/contact" size="sm">
              Book Consultation
            </Button>
          </div>

          <button
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isLight ? 'text-white' : 'text-navy'
            }`}
            onClick={() => setIsOpen((o) => !o)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
            />

            <motion.div
              id="mobile-menu"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-72 max-w-[85vw] bg-white shadow-xl lg:hidden flex flex-col"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
            >
              <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-100">
                <Logo size="default" />
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-lg text-navy hover:bg-gray-100 transition-colors"
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto p-4 sm:p-6" aria-label="Mobile navigation">
                <ul className="space-y-1">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        to={link.href}
                        onClick={() => setIsOpen(false)}
                        className={`block px-4 py-3 rounded-xl font-medium transition-colors ${
                          location.pathname === link.href
                            ? 'bg-navy/5 text-navy'
                            : 'text-dark-text hover:bg-navy/5 hover:text-navy'
                        }`}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="p-4 sm:p-6 border-t border-gray-100 space-y-3">
                <a
                  href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl bg-navy/5 text-navy font-medium hover:bg-navy/10 transition-colors"
                >
                  <Phone size={18} className="text-royal" />
                  {siteConfig.phone}
                </a>
                <Button as={Link} to="/contact" size="lg" className="w-full" onClick={() => setIsOpen(false)}>
                  Book Consultation
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar