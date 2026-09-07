import React from 'react'
import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin } from 'lucide-react'
import siteConfig from '../data/siteConfig'
import services from '../data/services'
import Logo from './Logo'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Countries', href: '/countries' },
  { label: 'About', href: '/about' },
  { label: 'FAQs', href: '/faqs' },
  { label: 'Contact', href: '/contact' },
]

const Footer = () => {
  return (
    <footer className="bg-navy text-white pt-12 sm:pt-16 pb-6 sm:pb-8">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-10 sm:mb-12">

          {/* Brand */}
          <div className="xs:col-span-2 lg:col-span-1">
            <div className="mb-4">
              <Logo size="default" light />
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              {siteConfig.tagline} — providing visa consultation and
              application guidance from {siteConfig.location}.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold mb-4 text-sm sm:text-base">Services</h4>
            <ul className="space-y-2 text-sm text-white/70">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link to={s.route} className="hover:text-gold transition-colors">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold mb-4 text-sm sm:text-base">Quick Links</h4>
            <ul className="space-y-2 text-sm text-white/70">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="hover:text-gold transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold mb-4 text-sm sm:text-base">Contact</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2">
                <Phone size={13} className="mt-1 text-gold flex-shrink-0" />
                <span className="break-all">{siteConfig.phone}</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={13} className="mt-1 text-gold flex-shrink-0" />
                <span className="break-all">{siteConfig.email}</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={13} className="mt-1 text-gold flex-shrink-0" />
                <span>{siteConfig.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-5 sm:pt-6 flex flex-col sm:flex-row gap-3 sm:gap-0 items-center justify-between text-xs sm:text-sm text-white/50">
          <div className="text-center sm:text-left">
            © {new Date().getFullYear()} {siteConfig.agencyName}. Demo website —
            not affiliated with any government or embassy.
          </div>
          <div className="flex gap-4 sm:gap-6 flex-wrap justify-center">
            <Link to="/privacy-policy" className="hover:text-gold transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-gold transition-colors">Terms</Link>
            <Link to="/visa-disclaimer" className="hover:text-gold transition-colors">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer