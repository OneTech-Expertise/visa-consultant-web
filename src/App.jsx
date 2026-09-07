import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Layout from './components/Layout'
import Home from './pages/Home'
import Services from './pages/Services'
import Countries from './pages/Countries'
import CountryDetail from './pages/CountryDetail'
import About from './pages/About'
import FAQs from './pages/FAQs'
import Contact from './pages/Contact'
import Consultation from './pages/Consultation'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import VisaDisclaimer from './pages/VisaDisclaimer'
import StudyVisa from './pages/StudyVisa'
import VisitVisa from './pages/VisitVisa'
import WorkVisa from './pages/WorkVisa'
import BusinessVisa from './pages/BusinessVisa'
import FamilyVisa from './pages/FamilyVisa'
import Immigration from './pages/Immigration'

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/countries" element={<Countries />} />
        <Route path="/countries/:slug" element={<CountryDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/consultation" element={<Consultation />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/visa-disclaimer" element={<VisaDisclaimer />} />
        <Route path="/study-visa" element={<StudyVisa />} />
        <Route path="/visit-visa" element={<VisitVisa />} />
        <Route path="/work-visa" element={<WorkVisa />} />
        <Route path="/business-visa" element={<BusinessVisa />} />
        <Route path="/family-visa" element={<FamilyVisa />} />
        <Route path="/immigration" element={<Immigration />} />
      </Routes>
    </Layout>
  )
}

export default App