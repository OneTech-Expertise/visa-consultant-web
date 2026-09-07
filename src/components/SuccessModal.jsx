import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle, X } from 'lucide-react'

const SuccessModal = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Modal */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', damping: 20 }}
            className="relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 w-full max-w-sm sm:max-w-md shadow-xl text-center max-h-[90vh] overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-labelledby="success-title"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 text-gray-400 hover:text-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-royal/50 rounded-full p-1"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            {/* Icon */}
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle size={28} sm:size={32} className="text-gold" />
            </div>

            {/* Title */}
            <h3 id="success-title" className="text-xl sm:text-2xl font-heading font-bold text-navy mb-2">
              Thank You!
            </h3>

            <p className="text-muted-text text-sm sm:text-base mb-2">
              Your consultation request has been recorded as a demo submission.
            </p>

            <p className="text-xs sm:text-sm text-muted-text/70 mb-6 leading-relaxed">
              Demo form — connect this form to your preferred email or backend service before production.
            </p>

            <Button as="a" href="#contact" size="sm" className="w-full" onClick={() => setIsOpen(false)}>
              <span className="flex items-center justify-center gap-2">
                <CheckCircle size={16} className="text-white" />
                Close
              </span>
            </Button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

export default SuccessModal
