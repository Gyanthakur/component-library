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
      className="relative p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 group shadow-sm hover:shadow-md"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <div className="relative w-5 h-5 overflow-hidden">
        {/* Sun Icon */}
        <Sun
          size={20}
          className={`absolute inset-0 text-yellow-500 dark:text-amber-400 transition-all duration-500 transform ${theme === 'light'
              ? 'rotate-0 scale-100 opacity-100'
              : 'rotate-180 scale-0 opacity-0'
            }`}
        />

        {/* Moon Icon */}
        <Moon
          size={20}
          className={`absolute inset-0 text-slate-600 dark:text-blue-400 transition-all duration-500 transform ${theme === 'dark'
              ? 'rotate-0 scale-100 opacity-100'
              : '-rotate-180 scale-0 opacity-0'
            }`}
        />
      </div>

      {/* Hover effect background */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-yellow-400/10 to-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Glow effect */}
      <div className={`absolute inset-0 rounded-xl transition-all duration-300 ${theme === 'dark'
          ? 'shadow-[0_0_15px_rgba(59,130,246,0.3)]'
          : 'shadow-[0_0_15px_rgba(251,191,36,0.3)]'
        } opacity-0 group-hover:opacity-100`} />
    </button>
  );
};

export default ThemeToggle;
