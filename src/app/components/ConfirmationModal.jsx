"use client";
import React, { useEffect } from 'react';
import { AlertTriangle, X } from 'lucide-react';

const ConfirmationModal = ({ 
  isOpen, 
  onClose, 
  onConfirm, 
  title = "Confirm Action",
  message = "Are you sure you want to proceed?",
  confirmText = "Confirm",
  cancelText = "Cancel",
  variant = "warning" // warning, danger, info
}) => {
  // Handle ESC key press
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  // Handle backdrop click
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  const variantStyles = {
    warning: {
      iconColor: "text-amber-500",
      iconBg: "bg-amber-100 dark:bg-amber-900/20",
      confirmButton: "bg-amber-600 hover:bg-amber-700 focus:ring-amber-500"
    },
    danger: {
      iconColor: "text-red-500",
      iconBg: "bg-red-100 dark:bg-red-900/20",
      confirmButton: "bg-red-600 hover:bg-red-700 focus:ring-red-500"
    },
    info: {
      iconColor: "text-blue-500",
      iconBg: "bg-blue-100 dark:bg-blue-900/20",
      confirmButton: "bg-blue-600 hover:bg-blue-700 focus:ring-blue-500"
    }
  };

  const currentVariant = variantStyles[variant] || variantStyles.warning;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <div 
        className="relative w-full max-w-md bg-white dark:bg-gray-800 rounded-xl shadow-xl animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {/* Modal content */}
        <div className="p-6">
          {/* Icon */}
          <div className={`mx-auto flex h-12 w-12 items-center justify-center rounded-full ${currentVariant.iconBg} mb-4`}>
            <AlertTriangle className={`h-6 w-6 ${currentVariant.iconColor}`} />
          </div>

          {/* Title */}
          <h3 
            id="modal-title"
            className="text-lg font-semibold text-gray-900 dark:text-white text-center mb-2"
          >
            {title}
          </h3>

          {/* Message */}
          <p 
            id="modal-description"
            className="text-sm text-gray-600 dark:text-gray-300 text-center mb-6"
          >
            {message}
          </p>

          {/* Buttons */}
          <div className="flex gap-3">
            <button
              onClick={onClose}
              className="flex-1 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            >
              {cancelText}
            </button>
            <button
              onClick={onConfirm}
              className={`flex-1 px-4 py-2 text-sm font-medium text-white rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ${currentVariant.confirmButton}`}
            >
              {confirmText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;