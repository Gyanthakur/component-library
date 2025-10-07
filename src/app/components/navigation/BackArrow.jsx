"use client";
import React, { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useTheme } from '../../context/ThemeContext';

const BackArrow = ({ 
  showOnHomePage = false, 
  customAction = null,
  position = 'fixed',
  className = ''
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const { darkMode } = useTheme();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show on all pages except home page (unless explicitly requested)
    if (pathname === '/' && !showOnHomePage) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  }, [pathname, showOnHomePage]);

  if (!isVisible) {
    return null;
  }

  const handleBack = () => {
    if (customAction) {
      customAction();
    } else {
      router.push('/'); // Always go to home page
    }
  };

  return (
    <button
      onClick={handleBack}
      style={{ 
        position: 'fixed',
        left: '16px',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 9999
      }}
      className={`
        w-16 h-16 rounded-full
        ${darkMode 
          ? 'bg-blue-600 hover:bg-blue-700 text-white border-2 border-blue-500' 
          : 'bg-blue-500 hover:bg-blue-600 text-white border-2 border-blue-400'
        }
        shadow-2xl hover:shadow-3xl
        transition-all duration-300 ease-in-out
        flex items-center justify-center
        group hover:scale-110
        backdrop-blur-sm
        ${className}
      `}
      title="Go to Home"
      aria-label="Go to Home"
    >
      <svg 
        className="w-8 h-8 transform group-hover:-translate-x-1 transition-transform duration-200" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={3} 
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" 
        />
      </svg>
    </button>
  );
};

export default BackArrow;