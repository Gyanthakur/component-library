"use client";
import React from 'react';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

export default function PopularityChart({ data, isDarkTheme = false }) {
  if (!data || data.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-64 text-gray-500 dark:text-gray-400">
        <svg className="w-16 h-16 mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
        </svg>
        <p className="text-lg font-medium">No component data yet</p>
        <p className="text-sm">Start exploring components to see analytics</p>
      </div>
    );
  }

  // Generate colors for pie chart segments
  const generateColors = (count, isDark = false) => {
    const baseColors = isDark ? [
      'rgba(59, 130, 246, 0.8)',   // blue-500
      'rgba(34, 197, 94, 0.8)',    // green-500
      'rgba(168, 85, 247, 0.8)',   // purple-500
      'rgba(249, 115, 22, 0.8)',   // orange-500
      'rgba(236, 72, 153, 0.8)',   // pink-500
      'rgba(14, 165, 233, 0.8)',   // sky-500
      'rgba(217, 119, 6, 0.8)',    // amber-600
      'rgba(220, 38, 127, 0.8)',   // rose-600
      'rgba(99, 102, 241, 0.8)',   // indigo-500
      'rgba(16, 185, 129, 0.8)',   // emerald-500
    ] : [
      'rgba(37, 99, 235, 0.8)',    // blue-600
      'rgba(22, 163, 74, 0.8)',    // green-600
      'rgba(147, 51, 234, 0.8)',   // purple-600
      'rgba(234, 88, 12, 0.8)',    // orange-600
      'rgba(219, 39, 119, 0.8)',   // pink-600
      'rgba(2, 132, 199, 0.8)',    // sky-600
      'rgba(217, 119, 6, 0.8)',    // amber-600
      'rgba(190, 18, 60, 0.8)',    // rose-700
      'rgba(79, 70, 229, 0.8)',    // indigo-600
      'rgba(5, 150, 105, 0.8)',    // emerald-600
    ];
    
    const colors = [];
    const borderColors = [];
    
    for (let i = 0; i < count; i++) {
      const color = baseColors[i % baseColors.length];
      colors.push(color);
      borderColors.push(color.replace('0.8', '1'));
    }
    
    return { backgroundColor: colors, borderColor: borderColors };
  };

  const colors = generateColors(data.length, isDarkTheme);

  const chartData = {
    labels: data.map(item => item.name),
    datasets: [
      {
        label: 'Views',
        data: data.map(item => item.views),
        backgroundColor: colors.backgroundColor,
        borderColor: colors.borderColor,
        borderWidth: 2,
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          color: isDarkTheme ? '#E5E7EB' : '#374151', // gray-200 : gray-700
          font: {
            size: 12,
            weight: '500',
          },
          padding: 20,
          usePointStyle: true,
          pointStyle: 'circle',
        },
      },
      title: {
        display: false,
      },
      tooltip: {
        backgroundColor: isDarkTheme ? '#1F2937' : '#FFFFFF', // gray-800 : white
        titleColor: isDarkTheme ? '#F9FAFB' : '#111827', // gray-50 : gray-900
        bodyColor: isDarkTheme ? '#E5E7EB' : '#374151', // gray-200 : gray-700
        borderColor: isDarkTheme ? '#374151' : '#E5E7EB', // gray-700 : gray-200
        borderWidth: 1,
        cornerRadius: 8,
        padding: 12,
        displayColors: true,
        callbacks: {
          title: function(context) {
            return context[0].label;
          },
          label: function(context) {
            const value = context.parsed;
            const total = context.dataset.data.reduce((sum, val) => sum + val, 0);
            const percentage = ((value / total) * 100).toFixed(1);
            return `Views: ${value.toLocaleString()} (${percentage}%)`;
          },
          afterBody: function(context) {
            const componentData = data[context[0].dataIndex];
            const copyRate = componentData.views > 0 ? 
              Math.round((componentData.copies / componentData.views) * 100) : 0;
            return [`Copies: ${componentData.copies.toLocaleString()}`, `Copy Rate: ${copyRate}%`];
          }
        }
      },
    },
    interaction: {
      intersect: false,
      mode: 'index',
    },
    animation: {
      duration: 1000,
      easing: 'easeInOutQuart',
    },
  };

  return (
    <div className="h-64 md:h-80 lg:h-96">
      <Pie data={chartData} options={options} />
    </div>
  );
}