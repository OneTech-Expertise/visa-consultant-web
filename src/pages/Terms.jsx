import React from 'react'

const Terms = () => (
  <>
    <section className="pt-32 pb-24 bg-bg">
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl font-heading font-bold text-navy mb-6">Terms of Service</h1>
        <p className="text-muted-text mb-8">Last updated: September 2026</p>

        <div className="space-y-6 text-muted-text leading-relaxed">
          <div>
            <h2 className="text-2xl font-heading font-bold text-navy mb-3">1. Acceptance of Terms</h2>
            <p>By accessing and using this website, you accept and agree to be bound by the terms and conditions of this agreement.</p>
          </div>

          <div>
            <h2 className="text-2xl font-heading font-bold text-navy mb-3">2. Services</h2>
            <p>AS Consultant provides visa consultation and application guidance services. We do not guarantee visa approvals, as decisions are made by relevant embassies and immigration authorities.</p>
          </div>

          <div>
            <h2 className="text-2xl font-heading font-bold text-navy mb-3">3. User Responsibilities</h2>
            <p>You agree to provide accurate and complete information when using our services, and to update such information as necessary to keep it accurate.</p>
          </div>

          <div>
            <h2 className="text-2xl font-heading font-bold text-navy mb-3">4. Limitation of Liability</h2>
            <p>AS Consultant is not liable for any visa application decisions made by embassies or immigration authorities. Our services are limited to consultation and application preparation guidance.</p>
          </div>
        </div>
      </div>
    </section>
  </>
)

export default Terms