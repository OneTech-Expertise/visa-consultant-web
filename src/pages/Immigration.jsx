import React from 'react'
import VisaServicePage from '../components/VisaServicePage'
import services from '../data/services'

const Immigration = () => {
  const service = services.find(s => s.slug === 'immigration')
  return <VisaServicePage service={{ ...service, heroImage: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=1200&q=80' }} />
}

export default Immigration