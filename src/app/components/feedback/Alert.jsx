"use client";
import { useTranslation } from '../../hooks/useTranslation';

export default function Alert({ 
  type = "info", 
  title, 
  message, 
  onClose, 
  dismissible = false,
  icon = true
}) {
  const { t } = useTranslation();
  
  const alertStyles = {
    success: {
      container: "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800 text-green-800 dark:text-green-200",
      icon: "✓",
      iconColor: "text-green-500 dark:text-green-400"
    },
    error: {
      container: "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800 text-red-800 dark:text-red-200",
      icon: "✕",
      iconColor: "text-red-500 dark:text-red-400"
    },
    warning: {
      container: "bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800 text-yellow-800 dark:text-yellow-200",
      icon: "⚠",
      iconColor: "text-yellow-500 dark:text-yellow-400"
    },
    info: {
      container: "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800 text-blue-800 dark:text-blue-200",
      icon: "ℹ",
      iconColor: "text-blue-500 dark:text-blue-400"
    }
  }

  const currentStyle = alertStyles[type] || alertStyles.info

  return (
    <div className={`border rounded-md p-4 transition-all duration-200 ${currentStyle.container}`}>
      <div className="flex">
        {icon && (
          <div className="flex-shrink-0">
            <span className={`text-xl ${currentStyle.iconColor}`}>
              {currentStyle.icon}
            </span>
          </div>
        )}
        <div className={`${icon ? 'ml-3' : ''} flex-1`}>
          {title && (
            <h3 className="text-sm font-medium">
              {title}
            </h3>
          )}
          {message && (
            <div className={`text-sm ${title ? 'mt-1' : ''}`}>
              {message}
            </div>
          )}
        </div>
        {dismissible && (
          <div className="ml-auto pl-3">
            <div className="-mx-1.5 -my-1.5">
              <button
                onClick={onClose}
                className={`inline-flex rounded-md p-1.5 focus-theme hover:bg-black hover:bg-opacity-10 dark:hover:bg-white dark:hover:bg-opacity-10 transition-all duration-200 ${currentStyle.iconColor}`}
              >
                <span className="sr-only">{t('components.alert.dismiss')}</span>
                <span className="text-lg">×</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}