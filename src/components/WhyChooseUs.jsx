import React from 'react'
import { ShieldCheck, Award, Users, Globe, Clock, Heart } from 'lucide-react'
import SectionHeading from './SectionHeading'
import FeatureCard from './FeatureCard'

const whyFeatures = [
  {
    icon: <ShieldCheck size={22} />,
    title: 'Honest Guidance',
    description: 'We are upfront about what we can and cannot do. We never promise visa approvals because that decision is made by the relevant embassy or immigration authority.',
  },
  {
    icon: <Award size={22} />,
    title: 'Structured Process',
    description: 'A clear step-by-step consultation process designed to help you understand each stage — from initial assessment to application submission.',
  },
  {
    icon: <Users size={22} />,
    title: 'Personalized Support',
    description: 'Every client situation is different. We listen to your goals and tailor our guidance based on your profile, destination, and visa category.',
  },
  {
    icon: <Globe size={22} />,
    title: 'Multiple Destinations',
    description: 'Guidance for popular study, work, business, and immigration destinations including UK, Canada, Australia, USA, and several European and Gulf countries.',
  },
  {
    icon: <Clock size={22} />,
    title: 'Online & In-Person',
    description: 'Consult with us remotely from anywhere, or visit our Lahore office by appointment. Choose whichever option is most convenient for you.',
  },
  {
    icon: <Heart size={22} />,
    title: 'Client-First Approach',
    description: 'We focus on making the consultation experience clear, organized, and pressure-free. Your understanding of the process matters to us.',
  },
]

const WhyChooseUs = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-bg relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-20 sm:opacity-30">
        <img
          src="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=1920&q=60"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-bg/95 to-bg" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeading
          badge="Why Choose Us"
          title="A Different Kind of Consultancy"
          subtitle="We focus on clarity, honesty, and structured guidance. Here is what you can expect when you work with us."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {whyFeatures.map((f) => (
            <FeatureCard key={f.title} title={f.title} description={f.description} icon={f.icon} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs