"use client";
import { createContext, useContext, useState, useEffect, useCallback } from "react";

const AnalyticsContext = createContext();

export function AnalyticsProvider({ children }) {
  const [analytics, setAnalytics] = useState({
    componentViews: {},
    componentCopies: {},
    totalViews: 0,
    totalCopies: 0,
    sessionStart: Date.now(),
    dailyStats: {},
  });

  // Load analytics from localStorage
  useEffect(() => {
    try {
      const savedAnalytics = localStorage.getItem('componentAnalytics');
      if (savedAnalytics) {
        const parsed = JSON.parse(savedAnalytics);
        setAnalytics(prev => ({
          ...prev,
          ...parsed,
          sessionStart: Date.now() // Reset session start
        }));
      }
    } catch (error) {
      console.error('Error loading analytics:', error);
    }
  }, []);

  // Save analytics to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('componentAnalytics', JSON.stringify(analytics));
    } catch (error) {
      console.error('Error saving analytics:', error);
    }
  }, [analytics]);

  // Track component view - memoized to prevent infinite loops
  const trackComponentView = useCallback((componentName) => {
    const today = new Date().toISOString().split('T')[0];
    
    setAnalytics(prev => ({
      ...prev,
      componentViews: {
        ...prev.componentViews,
        [componentName]: (prev.componentViews[componentName] || 0) + 1
      },
      totalViews: prev.totalViews + 1,
      dailyStats: {
        ...prev.dailyStats,
        [today]: {
          ...prev.dailyStats[today],
          views: (prev.dailyStats[today]?.views || 0) + 1
        }
      }
    }));
  }, []);

  // Track component copy - memoized to prevent infinite loops
  const trackComponentCopy = useCallback((componentName) => {
    const today = new Date().toISOString().split('T')[0];
    
    setAnalytics(prev => ({
      ...prev,
      componentCopies: {
        ...prev.componentCopies,
        [componentName]: (prev.componentCopies[componentName] || 0) + 1
      },
      totalCopies: prev.totalCopies + 1,
      dailyStats: {
        ...prev.dailyStats,
        [today]: {
          ...prev.dailyStats[today],
          copies: (prev.dailyStats[today]?.copies || 0) + 1
        }
      }
    }));
  }, []);

  // Get popular components - memoized
  const getPopularComponents = useCallback((limit = 5) => {
    const components = Object.entries(analytics.componentViews)
      .map(([name, views]) => ({
        name,
        views,
        copies: analytics.componentCopies[name] || 0
      }))
      .sort((a, b) => b.views - a.views)
      .slice(0, limit);
    
    return components;
  }, [analytics.componentViews, analytics.componentCopies]);

  // Get recent stats (last 7 days) - memoized
  const getRecentStats = useCallback(() => {
    const last7Days = [];
    const today = new Date();
    
    for (let i = 6; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      const dateStr = date.toISOString().split('T')[0];
      
      last7Days.push({
        date: dateStr,
        views: analytics.dailyStats[dateStr]?.views || 0,
        copies: analytics.dailyStats[dateStr]?.copies || 0
      });
    }
    
    return last7Days;
  }, [analytics.dailyStats]);

  // Export analytics data - memoized
  const exportAnalytics = useCallback(() => {
    const exportData = {
      ...analytics,
      exportedAt: new Date().toISOString(),
      popularComponents: getPopularComponents(10),
      recentStats: getRecentStats()
    };
    
    const blob = new Blob([JSON.stringify(exportData, null, 2)], {
      type: 'application/json'
    });
    
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `component-analytics-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, [analytics, getPopularComponents, getRecentStats]);

  const value = {
    analytics,
    trackComponentView,
    trackComponentCopy,
    getPopularComponents,
    getRecentStats,
    exportAnalytics
  };

  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  );
}

export const useAnalytics = () => {
  const context = useContext(AnalyticsContext);
  if (!context) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  return context;
};