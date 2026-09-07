import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, MessageCircle, Facebook, Instagram, Linkedin, Youtube, Send } from 'lucide-react'
import SectionHeading from './SectionHeading'
import Button from './Button'
import siteConfig from '../data/siteConfig'
import services from '../data/services'

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [submitting, setSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitting(true)
    setTimeout(() => {
      setSubmitting(false)
      setShowSuccess(true)
      setForm({ name: '', email: '', phone: '', service: '', message: '' })
    }, 800)
  }

  return (
    <>
      <section id="contact" className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Get In Touch"
            title="Book a Consultation"
            subtitle="Tell us about your plans and we'll get back to you with the next steps."
          />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-10">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-4 sm:space-y-6">
              <div className="bg-gradient-to-br from-navy to-navy-light text-white rounded-2xl sm:rounded-3xl p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-heading font-bold mb-1">Contact Information</h3>
                <p className="text-white/70 text-sm mb-5 sm:mb-6">Reach out through any of the channels below.</p>

                <div className="space-y-4 text-sm">
                  <a href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`} className="flex items-start gap-3 hover:text-gold transition-colors">
                    <Phone size={17} className="mt-0.5 flex-shrink-0 text-gold" />
                    <div><div className="text-white/50 text-xs uppercase tracking-wider mb-0.5">Phone</div><div>{siteConfig.phone}</div></div>
                  </a>
                  <a href={`mailto:${siteConfig.email}`} className="flex items-start gap-3 hover:text-gold transition-colors">
                    <Mail size={17} className="mt-0.5 flex-shrink-0 text-gold" />
                    <div><div className="text-white/50 text-xs uppercase tracking-wider mb-0.5">Email</div><div className="break-all">{siteConfig.email}</div></div>
                  </a>
                  <div className="flex items-start gap-3">
                    <MapPin size={17} className="mt-0.5 flex-shrink-0 text-gold" />
                    <div><div className="text-white/50 text-xs uppercase tracking-wider mb-0.5">Office</div><div>{siteConfig.address}</div></div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock size={17} className="mt-0.5 flex-shrink-0 text-gold" />
                    <div><div className="text-white/50 text-xs uppercase tracking-wider mb-0.5">Hours</div><div>{siteConfig.officeHours}</div></div>
                  </div>
                </div>

                <div className="flex gap-2 sm:gap-3 mt-6 sm:mt-8">
                  {[{ icon: <Facebook size={17} />, href: siteConfig.socialLinks.facebook, label: 'Facebook' }, { icon: <Instagram size={17} />, href: siteConfig.socialLinks.instagram, label: 'Instagram' }, { icon: <Linkedin size={17} />, href: siteConfig.socialLinks.linkedin, label: 'LinkedIn' }, { icon: <Youtube size={17} />, href: siteConfig.socialLinks.youtube, label: 'YouTube' }].map(s => (
                    <a key={s.label} href={s.href} aria-label={s.label} className="w-9 h-9 sm:w-10 sm:h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">{s.icon}</a>
                  ))}
                </div>
              </div>

              <div className="bg-bg border border-navy/5 rounded-2xl p-5 sm:p-6 flex items-center gap-4">
                <div className="w-11 h-11 sm:w-12 sm:h-12 bg-[#25D366]/10 rounded-xl flex items-center justify-center text-[#25D366] flex-shrink-0">
                  <MessageCircle size={22} />
                </div>
                <div>
                  <div className="font-heading font-bold text-navy text-sm sm:text-base">Prefer WhatsApp?</div>
                  <div className="text-muted-text text-xs sm:text-sm">Tap the chat icon to start a conversation.</div>
                </div>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="lg:col-span-3 bg-white border border-navy/5 rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-soft space-y-4 sm:space-y-5">
              <div className="grid grid-cols-1 xs:grid-cols-2 gap-4 sm:gap-5">
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium text-navy mb-2">Full Name</label>
                  <input id="contact-name" type="text" name="name" value={form.name} onChange={handleChange} required className="w-full px-4 py-3 bg-bg border border-navy/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-royal/30 focus:border-royal transition-all" placeholder="Your full name" autoComplete="name" />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-sm font-medium text-navy mb-2">Email</label>
                  <input id="contact-email" type="email" name="email" value={form.email} onChange={handleChange} required className="w-full px-4 py-3 bg-bg border border-navy/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-royal/30 focus:border-royal transition-all" placeholder="you@example.com" autoComplete="email" />
                </div>
              </div>

              <div className="grid grid-cols-1 xs:grid-cols-2 gap-4 sm:gap-5">
                <div>
                  <label htmlFor="contact-phone" className="block text-sm font-medium text-navy mb-2">Phone</label>
                  <input id="contact-phone" type="tel" name="phone" value={form.phone} onChange={handleChange} required className="w-full px-4 py-3 bg-bg border border-navy/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-royal/30 focus:border-royal transition-all" placeholder="+92 300 0000000" autoComplete="tel" />
                </div>
                <div>
                  <label htmlFor="contact-service" className="block text-sm font-medium text-navy mb-2">Service</label>
                  <select id="contact-service" name="service" value={form.service} onChange={handleChange} required className="w-full px-4 py-3 bg-bg border border-navy/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-royal/30 focus:border-royal transition-all cursor-pointer appearance-none">
                    <option value="">Select a service</option>
                    {services.map(s => <option key={s.slug} value={s.slug}>{s.title}</option>)}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium text-navy mb-2">Message</label>
                <textarea id="contact-message" name="message" value={form.message} onChange={handleChange} required rows={4} className="w-full px-4 py-3 bg-bg border border-navy/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-royal/30 focus:border-royal transition-all resize-none" placeholder="Tell us about your destination, timeline, and any specific questions..." />
              </div>

              <Button type="submit" size="lg" loading={submitting} icon={<Send size={18} />} iconPosition="right" className="w-full xs:w-auto">
                Send Consultation Request
              </Button>

              <p className="text-xs text-muted-text leading-relaxed">By submitting this form you agree to be contacted about your enquiry.</p>
            </form>
          </div>
        </div>
      </section>

      {/* Success Modal */}
      {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setShowSuccess(false)} />
          <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 w-full max-w-sm shadow-xl text-center">
            <button onClick={() => setShowSuccess(false)} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-lg">✕</button>
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-7 h-7 sm:w-8 sm:h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
            </div>
            <h3 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-2">Thank You!</h3>
            <p className="text-muted-text text-sm mb-6">Your consultation request has been recorded as a demo submission.</p>
            <button onClick={() => setShowSuccess(false)} className="btn-primary w-full">Close</button>
          </motion.div>
        </div>
      )}
    </>
  )
}

export default Contact