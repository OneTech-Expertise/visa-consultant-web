import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Button from './Button'

const FLAG_COLORS = {
  uk:       ['#012169', '#C8102E'],
  canada:   ['#FF0000', '#FFFFFF'],
  australia:['#00008B', '#FF0000'],
  usa:      ['#3C3B6E', '#B22234'],
  germany:  ['#000000', '#DD0000', '#FFCC00'],
  france:   ['#002395', '#FFFFFF', '#ED2939'],
  italy:    ['#009246', '#FFFFFF', '#CE2B37'],
  spain:    ['#AA151B', '#F1BF00'],
  ae:       ['#00732F', '#FFFFFF', '#000000', '#FF0000'],
  sa:       ['#006C35', '#FFFFFF'],
  turkey:   ['#E30A17', '#FFFFFF'],
  malaysia: ['#010066', '#CC0001', '#FFCC00'],
  'new-zealand': ['#00247D', '#FFFFFF', '#CC142B'],
}

const CountryCard = ({ country }) => {
  const [imgError, setImgError] = useState(false)
  const colors = FLAG_COLORS[country.slug] || ['#0E5C4A', '#C9A96E']

  return (
    <Link to={`/countries/${country.slug}`} className="block group">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-3xl overflow-hidden border border-navy/5 shadow-soft hover:shadow-medium transition-all duration-300 group-hover:-translate-y-1"
      >
        <div className="relative w-full h-36 overflow-hidden">
          {!imgError && country.image ? (
            <img
              src={country.image}
              alt={country.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              onError={() => setImgError(true)}
            />
          ) : (
            <div
              className="w-full h-full flex items-center justify-center text-white text-3xl font-heading font-bold"
              style={{
                background: colors.length === 2
                  ? `linear-gradient(135deg, ${colors[0]} 50%, ${colors[1]} 50%)`
                  : colors.length === 3
                  ? `linear-gradient(135deg, ${colors[0]} 33%, ${colors[1]} 33%, ${colors[1]} 66%, ${colors[2]} 66%)`
                  : colors[0],
              }}
            >
              {country.name.slice(0, 2).toUpperCase()}
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
          <div className="absolute bottom-3 left-3 z-10">
            <span className="badge bg-white/20 text-white text-xs px-2 py-1 rounded-full backdrop-blur">
              {country.visaTypes[0]}
            </span>
          </div>
        </div>

        <div className="p-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-heading font-bold text-navy text-base">{country.name}</h3>
            <div className="flex flex-wrap gap-1">
              {country.visaTypes.slice(0, 3).map((visaType, index) => (
                <span
                  key={index}
                  className="bg-navy/10 text-navy text-xs px-1.5 py-0.5 rounded-full"
                >
                  {visaType}
                </span>
              ))}
            </div>
          </div>

          <p className="text-sm text-muted-text line-clamp-2 mb-3">
            {country.description}
          </p>

          <Button variant="ghost" size="sm" className="text-royal font-semibold">
            View Details →
          </Button>
        </div>
      </motion.div>
    </Link>
  )
}

export default CountryCard
