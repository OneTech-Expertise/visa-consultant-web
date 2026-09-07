import React from 'react'

const VisaDisclaimer = () => (
  <>
    <section className="pt-32 pb-24 bg-bg">
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl font-heading font-bold text-navy mb-6">Visa Disclaimer</h1>

        <div className="space-y-6 text-muted-text leading-relaxed">
          <p className="font-medium text-dark-text">Important information about our visa consultation services.</p>

          <div>
            <h2 className="text-2xl font-heading font-bold text-navy mb-3">No Guarantee of Visa Approval</h2>
            <p>AS Consultant provides visa consultation and application guidance only. We do not have the authority to approve or deny visa applications. All visa decisions are made solely by the relevant embassies, consulates, or immigration authorities.</p>
          </div>

          <div>
            <h2 className="text-2xl font-heading font-bold text-navy mb-3">General Information</h2>
            <p>Information provided on this website is for general guidance purposes only. Visa requirements, procedures, and regulations change frequently and vary by individual circumstances. Always verify current requirements with official sources.</p>
          </div>

          <div>
            <h2 className="text-2xl font-heading font-bold text-navy mb-3">No Government Affiliation</h2>
            <p>AS Consultant is an independent consultancy. We are not affiliated with, endorsed by, or representing any government agency, embassy, or immigration authority.</p>
          </div>
        </div>
      </div>
    </section>
  </>
)

export default VisaDisclaimer