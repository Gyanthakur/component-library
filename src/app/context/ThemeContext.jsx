"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  const [mounted, setMounted] = useState(false);

  // Load theme from localStorage on mount
  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'dark' || savedTheme === 'light') {
        setTheme(savedTheme);
      } else {
        // Check system preference
        const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setTheme(systemDark ? 'dark' : 'light');
      }
    } catch (error) {
      console.warn('Failed to load theme:', error);
      setTheme('light');
    }
    setMounted(true);
  }, []);

  // Sync theme class with html root element and save to localStorage
  useEffect(() => {
    if (mounted) {
      try {
        if (theme === 'dark') {
          document.documentElement.classList.add("dark");
          localStorage.setItem('theme', 'dark');
        } else {
          document.documentElement.classList.remove("dark");
          localStorage.setItem('theme', 'light');
        }
      } catch (error) {
        console.warn('Failed to apply theme:', error);
      }
    }
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  const setThemeMode = (newTheme) => {
    if (newTheme === 'light' || newTheme === 'dark') {
      setTheme(newTheme);
    }
  };

  // Prevent hydration mismatch - show children but don't apply theme yet
  if (!mounted) {
    return (
      <ThemeContext.Provider value={{
        theme: 'light',
        darkMode: false,
        toggleTheme: () => { },
        setDarkMode: () => { },
        setTheme: () => { },
        isDark: false,
        isLight: true,
        isLoading: true
      }}>
        {children}
      </ThemeContext.Provider>
    );
  }

  const value = {
    theme,
    darkMode: theme === 'dark',
    toggleTheme,
    setDarkMode: (isDark) => setTheme(isDark ? 'dark' : 'light'),
    setTheme: setThemeMode,
    isDark: theme === 'dark',
    isLight: theme === 'light',
    isLoading: false
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export default ThemeContext;