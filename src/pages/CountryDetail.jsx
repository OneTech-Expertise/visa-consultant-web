import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, MapPin, CheckCircle, ChevronLeft, Plane, Globe, Users, Award } from 'lucide-react'

import Button from '../components/Button'
import ProcessSection from '../components/ProcessSection'
import FAQsSection from '../components/FAQsSection'
import countries from '../data/countries'

const CountryDetail = () => {
  const { slug } = useParams()
  const country = countries.find(c => c.slug === slug)

  if (!country) {
    return (
      <section className="pt-32 pb-20 bg-bg min-h-screen">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-heading font-bold text-navy mb-4">Country Not Found</h1>
          <p className="text-muted-text mb-8">The country you're looking for doesn't exist in our destinations.</p>
          <Button as={Link} to="/countries">View All Countries</Button>
        </div>
      </section>
    )
  }

  const processSteps = [
    `Initial ${country.name} eligibility check`,
    'Documentation review and preparation',
    `Application submission for ${country.name}`,
    'Follow-up and next steps guidance',
  ]

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 bg-gradient-to-br from-navy via-navy-light to-navy text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={country.image}
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-navy/85 via-navy-light/80 to-navy/85" />
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <Link to="/countries" className="inline-flex items-center gap-2 text-white/70 hover:text-gold mb-6 text-sm">
            <ChevronLeft size={16} /> Back to Countries
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-2 gap-10 items-center"
          >
            <div>
              <div className="flex items-center gap-2 text-gold mb-4">
                <MapPin size={18} />
                <span className="text-sm font-medium uppercase tracking-wider">Destination</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-6">
                {country.name}
              </h1>
              <p className="text-lg text-white/80 mb-8 max-w-xl">
                {country.description}
              </p>
              <div className="flex flex-col xs:flex-row gap-3 sm:gap-4">
                <Button as={Link} to="/contact" size="lg" icon={<ArrowRight size={18} />} iconPosition="right" className="w-full xs:w-auto justify-center">
                  Book Consultation
                </Button>
                <Button as={Link} to="/services" variant="outlineWhite" size="lg" className="w-full xs:w-auto justify-center">
                  Our Services
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="rounded-3xl overflow-hidden shadow-xl border border-white/10">
                <img
                  src={country.image}
                  alt={country.name}
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Visa Categories */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-navy mb-4">
              Visa Pathways for {country.name}
            </h2>
            <p className="text-muted-text text-base sm:text-lg">
              We provide general guidance for the following visa categories. Requirements vary by visa type and individual circumstances.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {country.visaTypes.map((visa, idx) => (
              <motion.div
                key={visa}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-bg rounded-2xl p-6 border border-navy/5 hover:shadow-medium hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-royal/10 rounded-xl flex items-center justify-center text-royal mb-4">
                  <Plane size={22} />
                </div>
                <h3 className="font-heading font-bold text-navy text-lg mb-2">
                  {country.name} {visa} Visa
                </h3>
                <p className="text-muted-text text-sm leading-relaxed">
                  General consultation and application preparation for {visa.toLowerCase()} visa pathways to {country.name}.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Information */}
      <section className="py-16 sm:py-20 lg:py-24 bg-bg">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-navy mb-6">
                Why Choose {country.name}?
              </h2>
              <p className="text-muted-text mb-6 leading-relaxed">
                {country.name} is one of the most popular destinations for travelers, students, and professionals. We provide structured guidance to help you understand the application process and requirements.
              </p>
              <ul className="space-y-3">
                {[
                  'General consultation on eligibility',
                  'Documentation organization support',
                  'Application preparation guidance',
                  'Process explanation and next steps',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-gold flex-shrink-0 mt-0.5" />
                    <span className="text-dark-text">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button as={Link} to="/contact" size="lg" icon={<ArrowRight size={18} />} iconPosition="right">
                  Get Started Today
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { icon: <Globe size={28} />, label: 'Coverage', value: 'Full' },
                { icon: <Users size={28} />, label: 'Categories', value: country.visaTypes.length },
                { icon: <Award size={28} />, label: 'Success Rate', value: 'High' },
                { icon: <CheckCircle size={28} />, label: 'Support', value: '24/7' },
              ].map((stat) => (
                <div key={stat.label} className="bg-white rounded-2xl p-5 sm:p-6 shadow-soft border border-navy/5 text-center">
                  <div className="text-gold mb-3 flex justify-center">{stat.icon}</div>
                  <div className="text-xl sm:text-2xl font-heading font-bold text-navy mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-muted-text">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <ProcessSection />

      {/* FAQs */}
      <FAQsSection />

      {/* CTA */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-navy via-navy-light to-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-world-map opacity-20" />
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-4 sm:mb-6">
            Ready to Start Your {country.name} Journey?
          </h2>
          <p className="text-white/80 text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto">
            Book a consultation today and let us help you understand the process for your {country.name} visa application.
          </p>
          <Button as={Link} to="/contact" size="lg" icon={<ArrowRight size={18} />} iconPosition="right">
            Book Free Consultation
          </Button>
        </div>
      </section>
    </>
  )
}

export default CountryDetail