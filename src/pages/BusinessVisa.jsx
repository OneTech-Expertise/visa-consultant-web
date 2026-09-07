import React from 'react'
import VisaServicePage from '../components/VisaServicePage'
import services from '../data/services'

const BusinessVisa = () => {
  const service = services.find(s => s.slug === 'business-visa')
  return <VisaServicePage service={{ ...service, heroImage: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&q=80' }} />
}

export default BusinessVisa