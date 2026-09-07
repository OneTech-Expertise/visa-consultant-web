import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import ScrollToTop from './ScrollToTop'
import WhatsAppButton from './WhatsAppButton'

const Layout = ({ children }) => (
  <div className="min-h-screen bg-bg text-dark-text overflow-x-hidden">
    <Navbar />
    <main>{children}</main>
    <Footer />
    <ScrollToTop />
    <WhatsAppButton />
  </div>
)

export default Layout