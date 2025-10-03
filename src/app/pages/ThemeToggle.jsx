"use client";
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, Loader2 } from 'lucide-react';

const ThemeToggle = () => {
  const { theme, toggleTheme, isLoading } = useTheme();

  if (isLoading) {
    return (
      <div className="p-2 rounded-lg bg-theme-surface border-theme border">
        <Loader2 size={20} className="animate-spin text-theme-secondary" />
      </div>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2 rounded-lg bg-theme-surface hover:bg-theme-surface-hover border-theme border transition-all duration-300 focus-theme group"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <div className="relative w-5 h-5 overflow-hidden">
        {/* Sun Icon */}
        <Sun
          size={20}
          className={`absolute inset-0 text-amber-500 transition-all duration-500 transform ${
            theme === 'light'
              ? 'rotate-0 scale-100 opacity-100'
              : 'rotate-180 scale-0 opacity-0'
          }`}
        />
        
        {/* Moon Icon */}
        <Moon
          size={20}
          className={`absolute inset-0 text-blue-400 transition-all duration-500 transform ${
            theme === 'dark'
              ? 'rotate-0 scale-100 opacity-100'
              : '-rotate-180 scale-0 opacity-0'
          }`}
        />
      </div>
      
      {/* Hover effect background */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-amber-400/20 to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Cool glow effect */}
      <div className={`absolute inset-0 rounded-lg transition-all duration-300 ${
        theme === 'dark' 
          ? 'shadow-[0_0_20px_rgba(96,165,250,0.3)]' 
          : 'shadow-[0_0_20px_rgba(245,158,11,0.3)]'
      } opacity-0 group-hover:opacity-100`} />
    </button>
  );
};

export default ThemeToggle;
