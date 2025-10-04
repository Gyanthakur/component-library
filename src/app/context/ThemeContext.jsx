// "use client";
// import { createContext, useContext, useEffect, useState } from 'react';

// const ThemeContext = createContext();

// export const useTheme = () => {
//   const context = useContext(ThemeContext);
//   if (!context) {
//     throw new Error('useTheme must be used within a ThemeProvider');
//   }
//   return context;
// };

// export const ThemeProvider = ({ children }) => {
//   const [theme, setTheme] = useState('light');
//   const [isLoading, setIsLoading] = useState(true);

//   // Detect system preference
//   const getSystemTheme = () => {
//     if (typeof window !== 'undefined') {
//       try {
//         return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
//       } catch (error) {
//         console.warn('Failed to detect system theme preference:', error);
//         return 'light';
//       }
//     }
//     return 'light';
//   };

//   // Load theme from localStorage with error handling
//   const loadTheme = () => {
//     if (typeof window === 'undefined') return 'light';
    
//     try {
//       const savedTheme = localStorage.getItem('theme');
//       if (savedTheme && ['light', 'dark'].includes(savedTheme)) {
//         return savedTheme;
//       }
//       return getSystemTheme();
//     } catch (error) {
//       console.warn('Failed to load theme from localStorage:', error);
//       return getSystemTheme();
//     }
//   };

//   // Save theme to localStorage with error handling
//   const saveTheme = (newTheme) => {
//     if (typeof window === 'undefined') return;
    
//     try {
//       localStorage.setItem('theme', newTheme);
//     } catch (error) {
//       console.warn('Failed to save theme to localStorage:', error);
//     }
//   };

//   // Apply theme to document
//   const applyTheme = (newTheme) => {
//     if (typeof window === 'undefined') return;
    
//     try {
//       const root = document.documentElement;
//       if (newTheme === 'dark') {
//         root.classList.add('dark');
//       } else {
//         root.classList.remove('dark');
//       }
//     } catch (error) {
//       console.warn('Failed to apply theme to document:', error);
//     }
//   };

//   // Toggle theme function
//   const toggleTheme = () => {
//     const newTheme = theme === 'light' ? 'dark' : 'light';
//     setTheme(newTheme);
//     saveTheme(newTheme);
//     applyTheme(newTheme);
//   };

//   // Set specific theme function
//   const setThemeMode = (newTheme) => {
//     if (!['light', 'dark'].includes(newTheme)) {
//       console.warn('Invalid theme mode:', newTheme);
//       return;
//     }
    
//     setTheme(newTheme);
//     saveTheme(newTheme);
//     applyTheme(newTheme);
//   };

//   // Initialize theme on mount
//   useEffect(() => {
//     const initialTheme = loadTheme();
//     setTheme(initialTheme);
//     applyTheme(initialTheme);
//     setIsLoading(false);

//     // Listen for system theme changes
//     const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
//     const handleSystemThemeChange = (e) => {
//       const savedTheme = localStorage.getItem('theme');
//       if (!savedTheme) {
//         const systemTheme = e.matches ? 'dark' : 'light';
//         setTheme(systemTheme);
//         applyTheme(systemTheme);
//       }
//     };

//     try {
//       mediaQuery.addEventListener('change', handleSystemThemeChange);
//       return () => mediaQuery.removeEventListener('change', handleSystemThemeChange);
//     } catch (error) {
//       console.warn('Failed to listen for system theme changes:', error);
//     }
//   }, []);

//   const value = {
//     theme,
//     toggleTheme,
//     setTheme: setThemeMode,
//     isLoading,
//     isDark: theme === 'dark',
//     isLight: theme === 'light'
//   };

//   return (
//     <ThemeContext.Provider value={value}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

// export default ThemeContext;

"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  // Sync theme class with html root element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
export default ThemeContext;