import React from 'react'
import { motion } from 'framer-motion'

const TestimonialCard = ({ testimonial }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-3xl p-6 shadow-soft transition-all duration-300 hover:shadow-medium border border-navy/5"
    >
      <p className="text-lg text-dark-text italic leading-relaxed mb-4">
        "{testimonial.text}"
      </p>

      <div className="flex items-center justify-between pt-4 border-t border-navy/5">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-royal/20 rounded-full flex items-center justify-center">
            <span className="text-navy font-heading font-bold">{testimonial.client[0]}</span>
          </div>
          <div>
            <h4 className="font-heading font-bold text-navy">{testimonial.client}</h4>
            <p className="text-xs text-muted-text">{testimonial.location}</p>
          </div>
        </div>

        {testimonial.isDemo && (
          <span className="badge-royal text-xs px-2 py-1 rounded-full">
            Demo Testimonial
          </span>
        )}
      </div>
    </motion.div>
  )
}

export default TestimonialCard