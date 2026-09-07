import React from 'react'
import SectionHeading from '../components/SectionHeading'
import ServiceCard from '../components/ServiceCard'

const Services = () => {
  return (
    <>
      <section id="services" className="py-24 bg-bg">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="What We Do"
            title="Visa Consultation Services"
            subtitle="We provide structured guidance for the most common visa pathways. Each service focuses on documentation, application preparation, and clear process explanation."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12">
            <ServiceCard service={{ title: "Study Visa", slug: "study-visa", description: "Guidance for students planning international education and visa applications.", icon: "GraduationCap", route: "/study-visa", features: ["Destination guidance", "Documentation guidance", "Application preparation", "Visa documentation support", "Interview preparation", "Pre-departure guidance"] }} />
            <ServiceCard service={{ title: "Visit Visa", slug: "visit-visa", description: "Professional guidance for tourism, family visits, and short-term international travel.", icon: "Plane", route: "/visit-visa", features: ["Tourism guidance", "Family visit support", "Short-term travel planning", "Documentation assistance", "Application submission"] }} />
            <ServiceCard service={{ title: "Work Visa", slug: "work-visa", description: "General guidance for employment-related visa pathways and application preparation.", icon: "Briefcase", route: "/work-visa", features: ["Employment pathway guidance", "Documentation support", "Application preparation", "Interview coaching"] }} />
            <ServiceCard service={{ title: "Business Visa", slug: "business-visa", description: "Support for business meetings, conferences, professional events, and international travel.", icon: "Building", route: "/business-visa", features: ["Business meeting support", "Conference guidance", "Professional event planning", "Travel arrangements"] }} />
            <ServiceCard service={{ title: "Family Visa", slug: "family-visa", description: "General guidance for eligible family and dependent visa pathways.", icon: "Users", route: "/family-visa", features: ["Family pathway guidance", "Dependent application support", "Spouse/family documentation", "Eligibility assessment"] }} />
            <ServiceCard service={{ title: "Immigration", slug: "immigration", description: "Explore potential long-term relocation and immigration pathways.", icon: "Globe", route: "/immigration", features: ["Skilled migration consultation", "Family migration guidance", "Business migration advice", "Long-term relocation planning"] }} />
          </div>
        </div>
      </section>
    </>
  )
}

export default Services