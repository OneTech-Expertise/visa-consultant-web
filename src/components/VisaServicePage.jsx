import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, Clock, FileText, Users, Award, Sparkles, ShieldCheck, BookOpen, Plane, Briefcase, Building, Globe, Heart } from 'lucide-react'

import Button from './Button'
import ProcessSection from './ProcessSection'
import FAQsSection from './FAQsSection'

const ICONS = {
  GraduationCap: <BookOpen size={24} />,
  Plane: <Plane size={24} />,
  Briefcase: <Briefcase size={24} />,
  Building: <Building size={24} />,
  Users: <Users size={24} />,
  Globe: <Globe size={24} />,
  Heart: <Heart size={24} />,
}

const VisaServicePage = ({ service }) => {
  if (!service) return null

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 bg-gradient-to-br from-navy via-navy-light to-navy text-white overflow-hidden">
        <div className="absolute inset-0">
          <img src={service.heroImage} alt="" aria-hidden="true" className="w-full h-full object-cover opacity-20 sm:opacity-25" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-navy/90 via-navy-light/85 to-navy/90" />
        <div className="absolute inset-0 bg-world-map opacity-15" />
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white/90 text-sm font-medium mb-6 backdrop-blur">
                {ICONS[service.icon] || <Sparkles size={14} className="text-gold" />}
                <span>{service.title}</span>
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-6">
                {service.title} <span className="text-gold">Guidance</span>
              </h1>
              <p className="text-lg text-white/80 mb-8 max-w-xl">{service.description}</p>
              <div className="flex flex-col xs:flex-row gap-3 sm:gap-4">
                <Button as={Link} to="/contact" size="lg" icon={<ArrowRight size={18} />} iconPosition="right" className="w-full xs:w-auto justify-center">
                  Book Free Consultation
                </Button>
                <Button as={Link} to="/services" variant="outlineWhite" size="lg" className="w-full xs:w-auto justify-center">
                  All Services
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="rounded-3xl overflow-hidden shadow-xl border border-white/10">
                <img src={service.heroImage} alt={service.title} className="w-full h-[400px] object-cover" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-navy mb-4">
              What We Offer
            </h2>
            <p className="text-muted-text text-base sm:text-lg">
              Our {service.title.toLowerCase()} service includes comprehensive guidance and support.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {service.features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="bg-bg rounded-2xl p-6 border border-navy/5 hover:shadow-medium hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-royal/10 rounded-xl flex items-center justify-center text-royal mb-4">
                  <CheckCircle size={22} />
                </div>
                <h3 className="font-heading font-bold text-navy text-base sm:text-lg mb-2">{feature}</h3>
                <p className="text-muted-text text-sm leading-relaxed">
                  Professional guidance and support tailored to your {service.title.toLowerCase()} needs.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-16 sm:py-20 lg:py-24 bg-bg">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-navy mb-6">
                Why Choose Our {service.title} Service?
              </h2>
              <p className="text-muted-text mb-6 leading-relaxed">
                We provide structured, honest guidance for {service.title.toLowerCase()} applications. Our team stays updated on the latest requirements and procedures.
              </p>
              <ul className="space-y-3">
                {[
                  'Experienced consultants with up-to-date knowledge',
                  'Personalized guidance for your situation',
                  'Clear documentation checklists',
                  'Process explanation at every step',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-gold flex-shrink-0 mt-0.5" />
                    <span className="text-dark-text">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button as={Link} to="/contact" size="lg" icon={<ArrowRight size={18} />} iconPosition="right">
                  Get Started
                </Button>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="grid grid-cols-2 gap-4">
              {[
                { icon: <Clock size={28} />, label: 'Quick Response', value: '24h' },
                { icon: <FileText size={28} />, label: 'Documentation', value: 'Complete' },
                { icon: <Users size={28} />, label: 'Support', value: 'Dedicated' },
                { icon: <Award size={28} />, label: 'Guidance', value: 'Expert' },
              ].map(stat => (
                <div key={stat.label} className="bg-white rounded-2xl p-5 sm:p-6 shadow-soft border border-navy/5 text-center">
                  <div className="text-gold mb-3 flex justify-center">{stat.icon}</div>
                  <div className="text-xl sm:text-2xl font-heading font-bold text-navy mb-1">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-muted-text">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <ProcessSection />
      <FAQsSection />

      {/* CTA */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-navy via-navy-light to-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-world-map opacity-20" />
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-4 sm:mb-6">
            Ready to Begin Your {service.title} Journey?
          </h2>
          <p className="text-white/80 text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto">
            Book a free consultation today and let us guide you through the process.
          </p>
          <Button as={Link} to="/contact" size="lg" icon={<ArrowRight size={18} />} iconPosition="right">
            Book Free Consultation
          </Button>
        </div>
      </section>
    </>
  )
}

export default VisaServicePage