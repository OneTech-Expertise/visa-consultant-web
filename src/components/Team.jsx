import React from 'react'
import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import team from '../data/team'

const Team = () => {
  return (
    <section id="team" className="py-12 sm:py-16 lg:py-24 bg-white">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Our Team"
          title="Meet the Consultants"
          subtitle="Demo team profile section. Real names, qualifications, and licenses are not claimed. Replace with verified team information before production use."
        />

        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {team.map((member, idx) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-navy/5 shadow-soft hover:shadow-medium hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="relative aspect-square overflow-hidden bg-navy/5">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent" />
              </div>
              <div className="p-4 sm:p-5">
                <h3 className="font-heading font-bold text-navy text-base sm:text-lg leading-tight">
                  {member.name}
                </h3>
                <p className="text-royal text-xs sm:text-sm font-medium mt-1 mb-2">
                  {member.role}
                </p>
                <p className="text-muted-text text-xs sm:text-sm leading-relaxed line-clamp-3">
                  {member.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team