import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Privacy = () => (
  <>
    <Navbar />
    <section className="py-24 bg-bg">
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl font-heading font-bold text-navy mb-6">Privacy Policy</h1>
        <p className="text-muted-text mb-8">Last updated: September 2026</p>

        <div className="space-y-6 text-muted-text leading-relaxed">
          <div>
            <h2 className="text-2xl font-heading font-bold text-navy mb-3">1. Introduction</h2>
            <p>AS Consultant respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you visit our website or use our services.</p>
          </div>

          <div>
            <h2 className="text-2xl font-heading font-bold text-navy mb-3">2. Information We Collect</h2>
            <p>We may collect information that you provide directly to us, such as your name, email address, phone number, and any other information you enter on our contact forms or during consultations.</p>
          </div>

          <div>
            <h2 className="text-2xl font-heading font-bold text-navy mb-3">3. How We Use Your Information</h2>
            <p>We use your information to respond to your inquiries, provide consultation services, send you updates about our services, and improve our website and services.</p>
          </div>

          <div>
            <h2 className="text-2xl font-heading font-bold text-navy mb-3">4. Data Protection</h2>
            <p>We implement appropriate security measures to protect your personal information from unauthorized access, disclosure, or misuse.</p>
          </div>

          <div>
            <h2 className="text-2xl font-heading font-bold text-navy mb-3">5. Contact Us</h2>
            <p>If you have questions about this Privacy Policy, please contact us at hello@asconsultant-demo.com.</p>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </>
)

export default Privacy