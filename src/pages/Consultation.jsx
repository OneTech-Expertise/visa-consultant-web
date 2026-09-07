import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Calendar, Clock, Video, FileText, CheckCircle, ArrowRight } from 'lucide-react'

import Navbar from '../components/Navbar'
import SectionHeading from '../components/SectionHeading'
import Footer from '../components/Footer'
import Button from '../components/Button'

const Consultation = () => {
  const [selectedService, setSelectedService] = useState('study-visa')

  const services = [
    { slug: 'study-visa', title: 'Study Visa', icon: '🎓' },
    { slug: 'visit-visa', title: 'Visit Visa', icon: '✈️' },
    { slug: 'work-visa', title: 'Work Visa', icon: '💼' },
    { slug: 'business-visa', title: 'Business Visa', icon: '🏢' },
    { slug: 'family-visa', title: 'Family Visa', icon: '👨‍👩‍👧' },
    { slug: 'immigration', title: 'Immigration', icon: '🌍' },
  ]

  return (
    <>
      <Navbar />

      <section id="consultation" className="py-24 bg-bg">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-navy mb-4">
              Book a Free Consultation
            </h2>
            <p className="text-muted-text text-base sm:text-lg">
              Schedule your consultation with our visa experts. Discuss your goals and explore your options with personalized guidance.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Service Selection */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <h3 className="text-2xl font-heading font-bold text-navy mb-6">Select Your Service</h3>
              <div className="space-y-3">
                {services.map((service, idx) => (
                  <motion.div
                    key={service.slug}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05, duration: 0.3 }}
                    onClick={() => setSelectedService(service.slug)}
                    className={`p-4 rounded-2xl border cursor-pointer transition-all duration-300 ${
                      selectedService === service.slug
                        ? 'border-royal bg-royal/5'
                        : 'border-navy/5 hover:border-navy/20'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{service.icon}</span>
                      <span className="font-medium text-navy">{service.title}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-navy/5 shadow-soft">
                <h3 className="text-2xl font-heading font-bold text-navy mb-4">
                  What You'll Get
                </h3>
                <ul className="space-y-4">
                  {[
                    { icon: <CheckCircle size={20} className="text-gold" />, text: 'Clear pathway assessment for your destination' },
                    { icon: <CheckCircle size={20} className="text-gold" />, text: 'Personalized documentation checklist' },
                    { icon: <CheckCircle size={20} className="text-gold" />, text: 'Timeline and next steps guidance' },
                    { icon: <CheckCircle size={20} className="text-gold" />, text: 'Questions answered by our experts' },
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-0.5">{item.icon}</div>
                      <p className="text-muted-text">{item.text}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-navy/5 shadow-soft">
                <h3 className="text-2xl font-heading font-bold text-navy mb-4">
                  Consultation Options
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-4 bg-bg rounded-2xl border border-navy/5">
                    <div className="w-10 h-10 bg-royal/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Calendar size={18} className="text-royal" />
                    </div>
                    <div>
                      <p className="font-medium text-navy">Video Call (30 min)</p>
                      <p className="text-sm text-muted-text">Free 30-minute online consultation</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-bg rounded-2xl border border-navy/5">
                    <div className="w-10 h-10 bg-navy/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock size={18} className="text-gold" />
                    </div>
                    <div>
                      <p className="font-medium text-navy">Priority Booking</p>
                      <p className="text-sm text-muted-text">Schedule next available slot (2-3 business days)</p>
                    </div>
                  </div>
                </div>
              </div>

              <Button as={Link} to="/contact" size="lg" icon={<ArrowRight size={18} />} iconPosition="right" className="w-full">
                Continue to Contact Form
              </Button>
              <p className="text-xs text-muted-text">
                Demo submission — connect to your booking/calendar system before production.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Consultation