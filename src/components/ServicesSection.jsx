import React from 'react'
import SectionHeading from './SectionHeading'
import ServiceCard from './ServiceCard'
import services from '../data/services'

const Services = () => {
  return (
    <section id="services" className="py-12 sm:py-16 lg:py-24 bg-bg">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="What We Do"
          title="Visa Consultation Services"
          subtitle="We provide structured guidance for the most common visa pathways. Each service focuses on documentation, application preparation, and clear process explanation."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services