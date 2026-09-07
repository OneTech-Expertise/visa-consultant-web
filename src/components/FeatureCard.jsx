import React from 'react'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const FeatureCard = ({ title, description, icon }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="card flex flex-col items-start gap-4 group hover:shadow-medium"
    >
      <div className="w-12 h-12 bg-royal/10 rounded-xl flex items-center justify-center text-royal group-hover:bg-royal group-hover:text-white transition-colors duration-300">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-heading font-bold text-navy mb-2">{title}</h3>
        <p className="text-muted-text text-sm leading-relaxed">{description}</p>
      </div>
    </motion.div>
  )
}

export default FeatureCard