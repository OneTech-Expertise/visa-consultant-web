import React from 'react'
import VisaServicePage from '../components/VisaServicePage'
import services from '../data/services'

const FamilyVisa = () => {
  const service = services.find(s => s.slug === 'family-visa')
  return <VisaServicePage service={{ ...service, heroImage: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=1200&q=80' }} />
}

export default FamilyVisa