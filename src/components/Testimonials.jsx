import React from 'react'
import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import TestimonialCard from './TestimonialCard'
import testimonials from '../data/testimonials'

const Testimonials = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-bg relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-10 sm:opacity-20">
        <img
          src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&q=60"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-bg/95 to-bg" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeading
          badge="Client Feedback"
          title="What Our Clients Say"
          subtitle="Demo testimonials presented for illustration. Real client stories are shared with consent and never used for promotional claims."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {testimonials.map((t, idx) => (
            <TestimonialCard key={idx} testimonial={t} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials