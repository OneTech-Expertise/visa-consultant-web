import React from 'react'
import siteConfig from '../data/siteConfig'

const Logo = ({ variant = 'default', size = 'default', light = false }) => {
  const sizeClasses = {
    small: 'text-lg',
    default: 'text-xl',
    large: 'text-2xl',
    navbar: 'text-2xl md:text-3xl',
  }

  const textColor = light ? 'text-white' : 'text-navy'
  const taglineColor = light ? 'text-white/60' : 'text-royal'

  if (variant === 'icon') {
    return (
      <div className="flex items-center gap-2">
        <div className={`w-10 h-10 ${light ? 'bg-white/20 backdrop-blur' : 'bg-royal'} rounded-xl flex items-center justify-center`}>
          <span className={`${light ? 'text-white' : 'text-white'} font-heading font-bold text-sm`}>AS</span>
        </div>
      </div>
    )
  }

  return (
    <div className="flex items-center gap-3">
      <div className={`w-12 h-12 ${light ? 'bg-white/20 backdrop-blur border border-white/30' : 'bg-navy'} rounded-xl flex items-center justify-center shadow-md`}>
        <span className={`${light ? 'text-white' : 'text-white'} font-heading font-bold text-xl tracking-wide`}>AS</span>
      </div>
      <div className="flex flex-col leading-tight">
        <span className={`${sizeClasses[size]} font-heading font-bold ${textColor} tracking-wide`}>
          {siteConfig.agencyName}
        </span>
        <span className={`text-xs ${taglineColor} font-medium tracking-widest uppercase`}>
          {siteConfig.tagline.split('.')[0]}
        </span>
      </div>
    </div>
  )
}

export default Logo
