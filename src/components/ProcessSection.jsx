import React from 'react'
import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'

const steps = [
  { number: '01', title: 'Consultation', description: 'Understand your goals and travel plans.' },
  { number: '02', title: 'Profile Review', description: 'Review your circumstances and potential options.' },
  { number: '03', title: 'Documentation', description: 'Organize relevant application documents.' },
  { number: '04', title: 'Application Prep', description: 'Prepare the application according to the relevant process.' },
  { number: '05', title: 'Submission', description: 'Proceed through the appropriate application channel.' },
  { number: '06', title: 'Next Steps', description: 'Understand what happens after submission.' },
]

const Process = () => {
  return (
    <section id="process" className="py-12 sm:py-16 lg:py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-5 sm:opacity-10">
        <img
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=60"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-white/95 to-transparent" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeading
          badge="Our Process"
          title="How the Consultation Works"
          subtitle="A simple, structured six-step process that takes you from initial consultation through application submission and beyond."
        />

        <div className="relative mt-8 sm:mt-12">
          {/* Desktop horizontal connecting line */}
          <div className="hidden lg:block absolute top-6 left-0 right-0 h-1 bg-gradient-to-r from-gold/30 via-gold/50 to-gold/30" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 sm:gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                className="relative flex flex-col sm:flex-row lg:flex-col items-start sm:items-center lg:items-center text-left sm:text-left lg:text-center group"
              >
                {/* Connector line (desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-6 left-[calc(50%+24px)] right-[calc(-50%-24px)] h-0.5 bg-gold/20" />
                )}

                {/* Step number bubble */}
                <motion.div
                  whileHover={{ scale: 1.12, y: -4 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="relative z-10 w-12 h-12 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-navy text-white rounded-full flex items-center justify-center font-heading font-bold text-sm shadow-lg cursor-pointer
                    group-hover:bg-royal group-hover:shadow-[0_0_20px_rgba(232,184,101,0.6)]
                    transition-all duration-300"
                >
                  <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300
                    shadow-[0_0_0_4px_rgba(232,184,101,0.25),0_0_20px_rgba(232,184,101,0.5)]" />
                  <span className="relative z-10">{step.number}</span>
                </motion.div>

                {/* Content */}
                <div className="sm:ml-4 lg:ml-0 lg:mt-4 flex-1 sm:flex-none lg:flex-auto">
                  <h4 className="font-heading font-bold text-navy text-sm sm:text-base lg:text-sm mt-2 sm:mt-0 lg:mt-3
                    group-hover:text-royal transition-colors duration-300">
                    {step.title}
                  </h4>
                  <p className="text-xs text-muted-text hidden sm:block lg:hidden mt-1">{step.description}</p>
                  <p className="text-xs text-muted-text hidden lg:block mt-1">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Process