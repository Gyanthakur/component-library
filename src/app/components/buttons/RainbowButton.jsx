import React from 'react';

const RainbowButton = ({ children, onClick, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`relative px-6 py-3 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-lg font-medium transition-all duration-200 border-4 ${className}`}
      style={{
        animation: 'rainbow-border 3s linear infinite',
      }}
    >
      <style jsx>{`
        @keyframes rainbow-border {
          0% { border-color: #ef4444; }
          14% { border-color: #f59e0b; }
          28% { border-color: #eab308; }
          42% { border-color: #22c55e; }
          57% { border-color: #06b6d4; }
          71% { border-color: #3b82f6; }
          85% { border-color: #8b5cf6; }
          100% { border-color: #ef4444; }
        }
      `}</style>
      {children}
    </button>
  );
};

export default RainbowButton;
