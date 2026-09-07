import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import Navbar from '../components/Navbar'
import SectionHeading from '../components/SectionHeading'
import Footer from '../components/Footer'
import faqs from '../data/faqs'

const FAQItem = ({ faq, isOpen, onToggle }) => (
  <div className="bg-white rounded-2xl border border-navy/5 shadow-soft overflow-hidden">
    <button onClick={onToggle} className="w-full px-5 sm:px-6 py-4 sm:py-5 flex items-start sm:items-center justify-between gap-3 text-left" aria-expanded={isOpen}>
      <span className="font-heading font-semibold text-navy text-sm sm:text-base leading-snug">{faq.question}</span>
      <ChevronDown size={18} className={`text-gold flex-shrink-0 mt-0.5 sm:mt-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
    </button>
    {isOpen && (
      <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} transition={{ duration: 0.3 }} className="px-5 sm:px-6 pb-5 sm:pb-6 text-muted-text text-sm sm:text-base leading-relaxed">
        {faq.answer}
      </motion.div>
    )}
  </div>
)

const FAQs = () => {
  const [openIdx, setOpenIdx] = useState(0)

  return (
    <>
      <Navbar />
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-20 bg-gradient-to-br from-navy via-navy-light to-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-world-map opacity-20" />
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white/90 text-sm font-medium mb-6 backdrop-blur">FAQs</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-6">Frequently Asked Questions</h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">Find answers to common questions about our visa consultation services.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24 bg-bg">
        <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <FAQItem key={idx} faq={faq} isOpen={openIdx === idx} onToggle={() => setOpenIdx(openIdx === idx ? -1 : idx)} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white">
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-navy mb-4">Still Have Questions?</h2>
          <p className="text-muted-text mb-6">Can't find the answer you're looking for? Reach out to our team.</p>
          <Button as={Link} to="/contact" size="lg" className="inline-flex">Contact Us</Button>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default FAQs