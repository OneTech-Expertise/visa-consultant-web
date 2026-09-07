import React from 'react'
import VisaServicePage from '../components/VisaServicePage'
import services from '../data/services'

const VisitVisa = () => {
  const service = services.find(s => s.slug === 'visit-visa')
  return <VisaServicePage service={{ ...service, heroImage: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&q=80' }} />
}

export default VisitVisa