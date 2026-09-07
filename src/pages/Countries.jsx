import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Search, MapPin, ArrowRight, Filter } from 'lucide-react'

import SectionHeading from '../components/SectionHeading'
import countries from '../data/countries'

const Countries = () => {
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('all')

  const allVisaTypes = ['all', ...new Set(countries.flatMap(c => c.visaTypes))]

  const filtered = countries.filter(c => {
    const matchesSearch = c.name.toLowerCase().includes(search.toLowerCase())
    const matchesFilter = filter === 'all' || c.visaTypes.includes(filter)
    return matchesSearch && matchesFilter
  })

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 bg-gradient-to-br from-navy via-navy-light to-navy text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1556388158-158ea5ccacbd?w=1920&q=80"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover opacity-20 sm:opacity-25"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-navy/90 via-navy-light/85 to-navy/90" />
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white/90 text-sm font-medium mb-6 backdrop-blur">
              Destinations
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-6">
              Countries We <span className="text-gold">Cover</span>
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Explore visa pathways for popular destinations around the world. We provide general consultation guidance for each country.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-8 sm:py-12 bg-white border-b border-navy/5">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-text" />
              <input
                type="text"
                placeholder="Search country..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-bg border border-navy/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-royal/30 focus:border-royal transition-all"
              />
            </div>
            <div className="relative">
              <Filter size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-text" />
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-bg border border-navy/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-royal/30 focus:border-royal transition-all appearance-none cursor-pointer"
              >
                {allVisaTypes.map(type => (
                  <option key={type} value={type}>{type === 'all' ? 'All Visa Types' : type}</option>
                ))}
              </select>
            </div>
          </div>
          <p className="text-sm text-muted-text mt-4">
            Showing {filtered.length} of {countries.length} countries
          </p>
        </div>
      </section>

      {/* Countries grid */}
      <section className="py-12 sm:py-16 lg:py-24 bg-bg">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filtered.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-muted-text text-lg">No countries match your search.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
              {filtered.map((country, idx) => (
                <motion.div
                  key={country.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                >
                  <Link to={`/countries/${country.slug}`} className="block group">
                    <div className="bg-white rounded-2xl overflow-hidden border border-navy/5 shadow-soft hover:shadow-medium hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                      <div className="relative aspect-[4/3] overflow-hidden bg-navy/5">
                        <img
                          src={country.image}
                          alt={country.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
                        <div className="absolute bottom-3 left-3 z-10">
                          <span className="badge bg-white/20 text-white text-xs px-2 py-1 rounded-full backdrop-blur">
                            {country.visaTypes[0]}
                          </span>
                        </div>
                      </div>
                      <div className="p-4 sm:p-5 flex-1 flex flex-col">
                        <h3 className="font-heading font-bold text-navy text-base sm:text-lg mb-1.5">
                          {country.name}
                        </h3>
                        <p className="text-xs sm:text-sm text-muted-text line-clamp-2 mb-3 flex-1">
                          {country.description}
                        </p>
                        <span className="text-royal text-sm font-semibold flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                          View Details <ArrowRight size={14} />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}

export default Countries