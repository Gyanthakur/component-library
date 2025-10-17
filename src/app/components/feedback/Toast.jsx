import React, { useState, useEffect } from 'react';
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from 'lucide-react';

const Toast = ({
  message,
  type = 'info',
  duration = 3000,
  onClose,
  position = 'top-right'
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(100);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    // Progress bar animation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev - (100 / (duration / 50));
        return newProgress <= 0 ? 0 : newProgress;
      });
    }, 50);

    // Auto dismiss timer
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => onClose && onClose(), 300);
    }, duration);

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, [duration, onClose, isPaused]);

  const getIcon = () => {
    switch (type) {
      case 'success':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'error':
        return <AlertCircle className="w-5 h-5 text-red-500" />;
      case 'warning':
        return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
      default:
        return <Info className="w-5 h-5 text-blue-500" />;
    }
  };

  const getStyles = () => {
    const baseStyles = "flex items-center gap-3 p-4 rounded-lg shadow-lg border transition-all duration-300 max-w-sm";
    const typeStyles = {
      success: "bg-green-50 border-green-200 text-green-800",
      error: "bg-red-50 border-red-200 text-red-800",
      warning: "bg-yellow-50 border-yellow-200 text-yellow-800",
      info: "bg-blue-50 border-blue-200 text-blue-800"
    };

    const positionStyles = {
      'top-right': 'fixed top-4 right-4 z-50',
      'top-left': 'fixed top-4 left-4 z-50',
      'bottom-right': 'fixed bottom-4 right-4 z-50',
      'bottom-left': 'fixed bottom-4 left-4 z-50'
    };

    return `${baseStyles} ${typeStyles[type]} ${positionStyles[position]} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
      }`;
  };

  if (!isVisible && duration === 0) return null;

  return (
    <div
      className={getStyles()}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {getIcon()}
      <div className="flex-1">
        <span className="text-sm font-medium block">{message}</span>
        {/* Progress bar */}
        <div className="w-full bg-gray-200 rounded-full h-1 mt-2">
          <div
            className={`h-1 rounded-full transition-all duration-75 ${type === 'success' ? 'bg-green-500' :
              type === 'error' ? 'bg-red-500' :
                type === 'warning' ? 'bg-yellow-500' :
                  'bg-blue-500'
              } ${isPaused ? 'animate-pulse' : ''}`}
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
      <button
        onClick={() => {
          setIsVisible(false);
          setTimeout(() => onClose && onClose(), 300);
        }}
        className="text-gray-400 hover:text-gray-600 transition-colors ml-2"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};

// Toast Manager Hook
export const useToast = () => {
  const [toasts, setToasts] = useState([]);

  const addToast = (message, type = 'info', duration = 3000) => {
    const id = Date.now();
    const newToast = { id, message, type, duration };

    setToasts(prev => [...prev, newToast]);

    return id;
  };

  const removeToast = (id) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };

  const ToastContainer = () => (
    <div className="fixed top-4 right-4 z-50 space-y-2">
      {toasts.map(toast => (
        <Toast
          key={toast.id}
          message={toast.message}
          type={toast.type}
          duration={toast.duration}
          onClose={() => removeToast(toast.id)}
        />
      ))}
    </div>
  );

  return { addToast, removeToast, ToastContainer };
};

export default Toast;