import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX } from 'react-icons/fi';

export const Modal = ({ isOpen, onClose, children, title }) => {
  // Close on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 isolate"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative bg-black/95 border border-white/10 rounded-3xl max-w-3xl w-full max-h-[85vh] flex flex-col shadow-[0_0_50px_-12px_rgba(0,240,255,0.15)] ring-1 ring-white/5 backdrop-blur-xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex-shrink-0 bg-transparent border-b border-white/5 px-6 py-4 flex items-center justify-between rounded-t-3xl">
              <h2 className="text-xl font-syne font-bold text-white tracking-wide">{title}</h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-white/10 rounded-full transition-colors text-white/50 hover:text-white"
              >
                <FiX className="text-white text-xl" />
              </button>
            </div>

            {/* Body - Scrollable */}
            <div
              className="flex-1 p-6 overflow-y-auto overscroll-contain modal-scrollbar"
              onWheel={(e) => e.stopPropagation()}
            >
              {children}
            </div>

            <style>{`
              .modal-scrollbar {
                scrollbar-width: thin;
                scrollbar-color: rgba(0, 255, 255, 0.3) rgba(255, 255, 255, 0.05);
              }
              .modal-scrollbar::-webkit-scrollbar {
                width: 8px;
              }
              .modal-scrollbar::-webkit-scrollbar-track {
                background: rgba(255, 255, 255, 0.05);
                border-radius: 4px;
              }
              .modal-scrollbar::-webkit-scrollbar-thumb {
                background: rgba(0, 255, 255, 0.3);
                border-radius: 4px;
              }
              .modal-scrollbar::-webkit-scrollbar-thumb:hover {
                background: rgba(0, 255, 255, 0.5);
              }
            `}</style>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
