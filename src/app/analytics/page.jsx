"use client";
import React, { useState, useEffect } from 'react';
import { useAnalytics } from '../context/AnalyticsContext';
import { BarChart3, TrendingUp, Eye, Copy, Download, Calendar, Award, Activity } from 'lucide-react';
import ConfirmationModal from '../components/ConfirmationModal';
import PopularityChart from '../components/PopularityChart';

export default function AnalyticsPage() {
  const { analytics, getPopularComponents, getRecentStats, exportAnalytics } = useAnalytics();
  const [showResetModal, setShowResetModal] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  
  const popularComponents = getPopularComponents();
  const recentStats = getRecentStats();

  // Detect dark theme
  useEffect(() => {
    const checkDarkTheme = () => {
      const isDark = document.documentElement.classList.contains('dark') ||
                    window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDarkTheme(isDark);
    };

    checkDarkTheme();

    // Listen for theme changes
    const observer = new MutationObserver(checkDarkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addListener(checkDarkTheme);

    return () => {
      observer.disconnect();
      mediaQuery.removeListener(checkDarkTheme);
    };
  }, []);
  
  // Calculate session duration
  const sessionDuration = Math.floor((Date.now() - analytics.sessionStart) / 1000 / 60); // minutes
  
  // Calculate total unique components
  const uniqueComponents = Object.keys(analytics.componentViews).length;
  
  // Calculate average views per component
  const avgViewsPerComponent = uniqueComponents > 0 ? 
    Math.round(analytics.totalViews / uniqueComponents) : 0;

  // Handle reset analytics data
  const handleResetData = () => {
    localStorage.removeItem('componentAnalytics');
    setShowResetModal(false);
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Component Analytics Dashboard
              </h1>
              <p className="text-gray-600 dark:text-gray-300">
                Track component usage, performance, and user engagement
              </p>
            </div>
            <button
              onClick={exportAnalytics}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Download size={16} />
              Export Data
            </button>
          </div>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Total Views</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {analytics.totalViews.toLocaleString()}
                </p>
              </div>
              <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                <Eye className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Total Copies</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {analytics.totalCopies.toLocaleString()}
                </p>
              </div>
              <div className="p-3 bg-green-100 dark:bg-green-900 rounded-lg">
                <Copy className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Components Used</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {uniqueComponents}
                </p>
              </div>
              <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-lg">
                <Award className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Session Time</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {sessionDuration}m
                </p>
              </div>
              <div className="p-3 bg-orange-100 dark:bg-orange-900 rounded-lg">
                <Activity className="w-6 h-6 text-orange-600 dark:text-orange-400" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Popular Components Chart */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border dark:border-gray-700">
            <div className="flex items-center gap-2 mb-6">
              <TrendingUp className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Most Popular Components
              </h2>
            </div>
            
            <PopularityChart data={popularComponents} isDarkTheme={isDarkTheme} />
          </div>

          {/* Recent Activity */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border dark:border-gray-700">
            <div className="flex items-center gap-2 mb-6">
              <Calendar className="w-5 h-5 text-green-600 dark:text-green-400" />
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Last 7 Days Activity
              </h2>
            </div>
            
            <div className="space-y-3">
              {recentStats.map((day, index) => {
                const date = new Date(day.date);
                const isToday = day.date === new Date().toISOString().split('T')[0];
                
                return (
                  <div key={day.date} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div>
                      <p className={`font-medium ${isToday ? 'text-blue-600 dark:text-blue-400' : 'text-gray-900 dark:text-white'}`}>
                        {isToday ? 'Today' : date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
                      </p>
                    </div>
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-1">
                        <Eye className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                        <span className="text-gray-600 dark:text-gray-400">{day.views}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Copy className="w-4 h-4 text-green-600 dark:text-green-400" />
                        <span className="text-gray-600 dark:text-gray-400">{day.copies}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Performance Insights */}
        <div className="mt-8 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border dark:border-gray-700">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
            Performance Insights
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                {avgViewsPerComponent}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Avg Views per Component
              </p>
            </div>
            
            <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <p className="text-2xl font-bold text-green-600 dark:text-green-400">
                {analytics.totalCopies > 0 ? Math.round((analytics.totalCopies / analytics.totalViews) * 100) : 0}%
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Copy Rate
              </p>
            </div>
            
            <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
              <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                {recentStats.reduce((sum, day) => sum + day.views, 0)}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Views This Week
              </p>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-lg border dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Quick Actions
          </h3>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => window.location.href = '/components'}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              View Components
            </button>
            <button
              onClick={exportAnalytics}
              className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
            >
              Export Analytics
            </button>
            <button
              onClick={() => setShowResetModal(true)}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              Reset Data
            </button>
          </div>
        </div>

        {/* Confirmation Modal */}
        <ConfirmationModal
          isOpen={showResetModal}
          onClose={() => setShowResetModal(false)}
          onConfirm={handleResetData}
          title="Reset Analytics Data"
          message="This will permanently delete all analytics data including views, copies, and session information. This action cannot be undone."
          confirmText="Reset Data"
          cancelText="Cancel"
          variant="danger"
        />
      </div>
    </div>
  );
}