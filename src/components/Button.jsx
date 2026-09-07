import React from 'react'

const Button = ({
  children,
  variant = 'primary',
  size = 'default',
  icon,
  iconPosition = 'left',
  as: Component = 'button',
  className = '',
  disabled = false,
  loading = false,
  ...props
}) => {
  const variants = {
    primary: 'bg-royal text-white hover:bg-royal-dark hover:shadow-medium',
    secondary: 'bg-white text-navy border border-navy/20 hover:border-navy/40 hover:shadow-soft',
    gold: 'bg-gold text-white hover:bg-gold-light hover:shadow-medium',
    outlineWhite: 'bg-transparent text-white border border-white/30 hover:bg-white/10 hover:border-white/50',
    ghost: 'text-royal hover:bg-royal/5',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    default: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    full: 'w-full px-6 py-3 text-base',
  }

  return (
    <Component
      className={`
        inline-flex items-center justify-center gap-2
        font-semibold rounded-xl
        transition-all duration-300
        focus:outline-none focus:ring-2 focus:ring-offset-2
        disabled:opacity-50 disabled:cursor-not-allowed
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
      )}
      {!loading && icon && iconPosition === 'left' && <span>{icon}</span>}
      {children}
      {!loading && icon && iconPosition === 'right' && <span>{icon}</span>}
    </Component>
  )
}

export default Button