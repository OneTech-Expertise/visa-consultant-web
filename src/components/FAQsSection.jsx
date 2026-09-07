import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import SectionHeading from './SectionHeading'
import faqs from '../data/faqs'

const FAQItem = ({ faq, isOpen, onToggle }) => (
  <div className="bg-white rounded-2xl border border-navy/5 shadow-soft overflow-hidden">
    <button
      onClick={onToggle}
      className="w-full px-5 sm:px-6 py-4 sm:py-5 flex items-start sm:items-center justify-between gap-3 text-left"
      aria-expanded={isOpen}
    >
      <span className="font-heading font-semibold text-navy text-sm sm:text-base leading-snug">{faq.question}</span>
      <ChevronDown
        size={18}
        className={`text-gold flex-shrink-0 mt-0.5 sm:mt-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
      />
    </button>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: 'auto' }}
        transition={{ duration: 0.3 }}
        className="px-5 sm:px-6 pb-5 sm:pb-6 text-muted-text text-sm sm:text-base leading-relaxed"
      >
        {faq.answer}
      </motion.div>
    )}
  </div>
)

const FAQs = () => {
  const [openIdx, setOpenIdx] = useState(0)
  return (
    <section id="faqs" className="py-12 sm:py-16 lg:py-24 bg-bg">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="FAQs"
          title="Frequently Asked Questions"
          subtitle="Common questions about our consultation services, visa pathways, and how we work."
        />

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, idx) => (
            <FAQItem
              key={idx}
              faq={faq}
              isOpen={openIdx === idx}
              onToggle={() => setOpenIdx(openIdx === idx ? -1 : idx)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQs