import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import SectionHeading from './SectionHeading'
import CountryCard from './CountryCard'
import countries from '../data/countries'

const Countries = () => {
  const featured = countries.filter((c) => c.featured)
  return (
    <section id="countries" className="py-12 sm:py-16 lg:py-24 bg-white">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Destinations"
          title="Popular Destinations We Cover"
          subtitle="We provide general consultation guidance for these popular destinations. Each country has different requirements — talk to us about yours."
        />

        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-5">
          {featured.map((country) => (
            <CountryCard key={country.slug} country={country} />
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-10">
          <Link
            to="/countries"
            className="inline-flex items-center gap-2 text-royal font-semibold hover:gap-3 transition-all text-sm sm:text-base"
          >
            View all destinations <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Countries