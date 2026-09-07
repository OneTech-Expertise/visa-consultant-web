import React from 'react'
import VisaServicePage from '../components/VisaServicePage'
import services from '../data/services'

const StudyVisa = () => {
  const service = services.find(s => s.slug === 'study-visa')
  return <VisaServicePage service={{ ...service, heroImage: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&q=80' }} />
}

export default StudyVisa