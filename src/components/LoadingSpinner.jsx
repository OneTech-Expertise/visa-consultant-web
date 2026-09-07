import React from 'react'

const LoadingSpinner = ({ size = 'md', text = 'Loading...' }) => {
  const sizeClasses = {
    sm: 'w-5 h-5',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  }

  return (
    <div className="flex flex-col items-center justify-center p-8" role="status" aria-live="polite">
      <div
        className={`${sizeClasses[size]} border-3 border-navy/10 border-t-gold rounded-full animate-spin`}
        style={{ borderWidth: '3px' }}
      />
      <span className="sr-only">{text}</span>
    </div>
  )
}

export default LoadingSpinner