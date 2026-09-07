import React from 'react'

const SectionHeading = ({ title, subtitle, badge, children }) => {
  return (
    <div className="text-center max-w-3xl mx-auto mb-12">
      {badge && (
        <span className="badge-royal inline-block mb-3 text-sm font-medium uppercase tracking-wider">
          {badge}
        </span>
      )}
      {title && <h2 className="section-heading">{title}</h2>}
      {subtitle && <p className="section-subheading">{subtitle}</p>}
      {children && <div className="mt-6">{children}</div>}
    </div>
  )
}

export default SectionHeading