import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { CheckCircle, Globe, Users, Award, Heart, Sparkles, ChevronDown, ArrowRight } from 'lucide-react'
import siteConfig from '../data/siteConfig'
import Button from './Button'

const Hero = () => {
  return (
    <section
      id="home"
      className="relative pt-24 pb-16 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-br from-navy via-navy-light to-navy text-white overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1556388158-158ea5ccacbd?w=1920&q=80"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover opacity-20 sm:opacity-25"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-navy/90 via-navy-light/85 to-navy/90" />
      <div className="absolute inset-0 bg-world-map opacity-20 sm:opacity-30 pointer-events-none" />
      <div className="absolute -top-20 -right-20 sm:top-0 sm:right-0 w-64 sm:w-80 h-64 sm:h-80 bg-gold/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 sm:bottom-0 sm:left-0 w-64 sm:w-96 h-64 sm:h-96 bg-royal/10 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-white/10 text-white/90 text-xs sm:text-sm font-medium mb-5 sm:mb-6 backdrop-blur">
              <Sparkles size={13} className="text-gold flex-shrink-0" />
              <span className="truncate">{siteConfig.businessType}</span>
            </span>

            <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-heading font-bold leading-tight tracking-tight mb-4 sm:mb-6">
              {siteConfig.tagline.split('.').filter(Boolean)[0]}{' '}
              <span className="text-gold">
                {siteConfig.tagline.split('.').filter(Boolean)[1] || 'Our Guidance.'}
              </span>
            </h1>

            <p className="text-base sm:text-lg text-white/80 mb-6 sm:mb-8 max-w-lg leading-relaxed">
              AS Consultant provides structured visa consultation and application
              guidance for study, visit, work, business, family, and immigration
              pathways from {siteConfig.location}.
            </p>

            <div className="flex flex-col xs:flex-row flex-wrap gap-3 sm:gap-4">
              <Button as={Link} to="/contact" size="lg" icon={<ArrowRight size={18} />} iconPosition="right" className="w-full xs:w-auto justify-center">
                Book a Free Consultation
              </Button>
              <Button as={Link} to="/services" variant="outlineWhite" size="lg" className="w-full xs:w-auto justify-center">
                Explore Services
              </Button>
            </div>

            <div className="mt-8 sm:mt-10 flex flex-col xs:flex-row flex-wrap gap-4 sm:gap-6 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <CheckCircle size={17} className="text-gold flex-shrink-0" />
                <span>Honest, transparent guidance</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={17} className="text-gold flex-shrink-0" />
                <span>Multiple destinations</span>
              </div>
            </div>
          </motion.div>

          {/* Right — Image with stats (desktop only) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="hidden lg:block relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1556388158-158ea5ccacbd?w=800&q=80"
                alt="Flight path and travel guidance"
                className="w-full h-[480px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/25 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 sm:p-5">
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: <Globe size={20} />, label: 'Destinations', value: '13+' },
                      { icon: <Users size={20} />, label: 'Visa Categories', value: '6' },
                      { icon: <Award size={20} />, label: 'Years Experience', value: '10+' },
                      { icon: <Heart size={20} />, label: 'Client Focus', value: '100%' },
                    ].map((stat) => (
                      <div key={stat.label} className="flex items-center gap-3">
                        <div className="text-gold flex-shrink-0">{stat.icon}</div>
                        <div>
                          <div className="text-base sm:text-lg font-heading font-bold text-white leading-none">
                            {stat.value}
                          </div>
                          <div className="text-xs text-white/60 mt-0.5">{stat.label}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -top-5 -right-5 w-24 h-24 bg-gold/20 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -bottom-5 -left-5 w-32 h-32 bg-royal/15 rounded-full blur-2xl pointer-events-none" />
          </motion.div>
        </div>

        {/* Mobile stats */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:hidden mt-10 sm:mt-12"
        >
          <div className="relative rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1556388158-158ea5ccacbd?w=800&q=80"
              alt="Flight path and travel guidance"
              className="w-full h-48 sm:h-56 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: <Globe size={16} />, label: 'Destinations', value: '13+' },
                  { icon: <Users size={16} />, label: 'Visa Categories', value: '6' },
                  { icon: <Award size={16} />, label: 'Years Experience', value: '10+' },
                  { icon: <Heart size={16} />, label: 'Client Focus', value: '100%' },
                ].map((stat) => (
                  <div key={stat.label} className="flex items-center gap-2">
                    <div className="text-gold flex-shrink-0">{stat.icon}</div>
                    <div>
                      <span className="text-sm font-heading font-bold text-white">{stat.value}</span>
                      <span className="text-xs text-white/60 ml-1">{stat.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <a
        href="#services"
        aria-label="Scroll to services"
        className="hidden sm:flex absolute bottom-5 sm:bottom-6 left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-white/10 text-white items-center justify-center backdrop-blur animate-bounce"
      >
        <ChevronDown size={18} />
      </a>
    </section>
  )
}

export default Hero