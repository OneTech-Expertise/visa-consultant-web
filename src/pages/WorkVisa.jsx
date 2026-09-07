import React from 'react'
import VisaServicePage from '../components/VisaServicePage'
import services from '../data/services'

const WorkVisa = () => {
  const service = services.find(s => s.slug === 'work-visa')
  return <VisaServicePage service={{ ...service, heroImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80' }} />
}

export default WorkVisa