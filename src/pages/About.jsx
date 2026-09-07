import React from 'react'
import SectionHeading from '../components/SectionHeading'
import siteConfig from '../data/siteConfig'
import { Phone, Mail, MapPin } from 'lucide-react'

const About = () => {
  return (
    <>
      <section id="about" className="py-24 bg-bg">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="About Us"
            title="AS Consultant"
            subtitle="Premier Visa & Immigration Consultancy Based in Lahore, Pakistan"
          />

          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            {/* Content */}
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-navy mb-6">
                Your Trusted Partner in International Education and Migration
              </h2>

              <p className="text-muted-text mb-6 leading-relaxed">
                AS Consultant is a Lahore-based visa consultancy dedicated to providing professional guidance for students, families, and individuals seeking to explore international opportunities. We specialize in study visas, visitor visas, work permits, business visas, family reunification, and immigration pathways.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-navy/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone size={18} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-text uppercase tracking-wider mb-1">Phone</p>
                    <p className="font-semibold">{siteConfig.phone}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-navy/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail size={18} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-text uppercase tracking-wider mb-1">Email</p>
                    <p className="font-semibold break-all">{siteConfig.email}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-navy/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-text uppercase tracking-wider mb-1">Location</p>
                    <p className="font-semibold break-all">{siteConfig.address}</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-heading font-bold text-navy mb-4">Our Mission</h3>
                <p className="text-muted-text leading-relaxed">
                  Our mission is to make the visa and immigration process clear, organized, and accessible for everyone. We believe in honest guidance, transparent processes, and helping you make informed decisions about your international journey.
                </p>
              </div>

              <h3 className="text-xl font-heading font-bold text-navy mb-4 mt-8">Team Expertise</h3>
              <p className="text-muted-text">
                Our team consists of experienced consultants who stay updated with the latest immigration policies and procedural changes across major destinations. We are committed to providing current, accurate information and personalized advice for your unique situation.
              </p>
            </div>

            {/* Facts */}
            <div>
              <h3 className="text-xl font-heading font-bold text-navy mb-4 mt-2">Quick Facts</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-text uppercase tracking-wider mb-1">Established</p>
                  <p className="font-bold">2024</p>
                </div>
                <div>
                  <p className="text-sm text-muted-text uppercase tracking-wider mb-1">Locations</p>
                  <p className="font-bold">Lahore, Pakistan</p>
                </div>
                <div>
                  <p className="text-sm text-muted-text uppercase tracking-wider mb-1">Destinations</p>
                  <p className="font-bold">13+ Countries</p>
                </div>
                <div>
                  <p className="text-sm text-muted-text uppercase tracking-wider mb-1">Satisfaction</p>
                  <p className="font-bold">100% Demo</p>
                </div>
              </div>
              <p className="mt-4 text-sm text-muted-text italic">
                All information presented is for demo purposes and should be verified with official sources.
              </p>
            </div>
          </div>

          {/* Vision Statement */}
          <div className="mt-16 pt-12 border-t border-navy/5">
            <h3 className="text-xl font-heading font-bold text-navy mb-4">Our Vision</h3>
            <blockquote className="text-lg text-muted-text leading-relaxed">
              'To be the most trusted visa consultancy in Pakistan, empowering individuals to achieve their international dreams through honest guidance and professional support.'
            </blockquote>
          </div>
        </div>
      </section>
    </>
  )
}

export default About