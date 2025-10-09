"use client";
import React from 'react';
import ComponentPlayground from '../components/interactive/ComponentPlayground';

export default function PlaygroundPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <ComponentPlayground />
    </div>
  );
}