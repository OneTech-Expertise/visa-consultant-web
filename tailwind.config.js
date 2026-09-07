/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#0A1628',
        'navy-light': '#1A2A4A',
        royal: '#154679',
        'royal-dark': '#0F2C54',
        gold: '#E8B865',
        'gold-light': '#F0D49F',
        white: '#FFFFFF',
        bg: '#F7FAFD',
        'dark-text': '#131F2B',
        'muted-text': '#64748B',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['Manrope', 'system-ui', '-apple-system', 'sans-serif'],
      },
      borderRadius: {
        'xl': '16px',
        '2xl': '20px',
        '3xl': '24px',
      },
      boxShadow: {
        'soft': '0 4px 24px rgba(10, 22, 40, 0.06)',
        'medium': '0 8px 40px rgba(10, 22, 40, 0.10)',
        'lg': '0 16px 56px rgba(10, 22, 40, 0.12)',
      },
      animation: {
        /* Entrance animations */
        'fade-in': 'fadeIn 0.6s ease-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'fade-in-down': 'fadeInDown 0.5s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
        /* Continuous animations */
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-gentle': 'pulse 2s ease-in-out infinite',
        'spin-slow': 'spin 3s linear infinite',
        /* Staggered children */
        'stagger': 'stagger 0.8s ease-out both',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        stagger: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.3' },
        },
      },
    },
  },
  plugins: [],
}
