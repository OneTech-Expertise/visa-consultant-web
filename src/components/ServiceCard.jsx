import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Button from './Button'

const ServiceCard = ({ service }) => {
  return (
    <Link to={service.route} className="block">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="block group h-full"
      >
        <div className="bg-gradient-to-b from-navy via-navy/90 to-navy/80 rounded-2xl sm:rounded-3xl p-5 sm:p-6 text-white h-full flex flex-col">
          {/* Icon */}
          <div className="w-12 h-12 sm:w-14 sm:w-16 bg-royal/20 rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 flex-shrink-0">
            <span className="text-xl sm:text-2xl">
              {service.icon === 'GraduationCap' ? '🎓' :
               service.icon === 'Plane' ? '✈️' :
               service.icon === 'Briefcase' ? '💼' :
               service.icon === 'Building' ? '🏢' :
               service.icon === 'Users' ? '👥' :
               '🌍'}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-lg sm:text-xl font-heading font-bold text-white mb-2 sm:mb-3 leading-tight">
            {service.title}
          </h3>

          {/* Description */}
          <p className="text-sm sm:text-base text-white/80 mb-4 sm:mb-5 flex-grow leading-relaxed">
            {service.description}
          </p>

          {/* Features */}
          <ul className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-5">
            {service.features.slice(0, 3).map((feature, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-white/70">
                <span className="flex-shrink-0 mt-0.5 text-gold-light text-xs">•</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <Button
            variant="outlineWhite"
            size="sm"
            className="mt-auto w-full sm:w-auto justify-center"
          >
            Learn More
          </Button>
        </div>
      </motion.div>
    </Link>
  )
}

export default ServiceCard
