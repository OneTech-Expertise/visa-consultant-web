import React from 'react'
import Hero from '../components/Hero'
import ServicesSection from '../components/ServicesSection'
import CountriesSection from '../components/CountriesSection'
import WhyChooseUs from '../components/WhyChooseUs'
import ProcessSection from '../components/ProcessSection'
import Testimonials from '../components/Testimonials'
import Team from '../components/Team'
import FAQsSection from '../components/FAQsSection'
import ContactSection from '../components/ContactSection'

const Home = () => {
  return (
    <>
      <Hero />
      <ServicesSection />
      <CountriesSection />
      <WhyChooseUs />
      <ProcessSection />
      <Testimonials />
      <Team />
      <FAQsSection />
      <ContactSection />
    </>
  )
}

export default Home