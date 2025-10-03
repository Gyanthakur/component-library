"use client";
import React from 'react'
// Button Imports
// import PrimaryButton from '@/components/buttons/PrimaryButton'
// import SecondaryButton from '@/components/buttons/SecondaryButton'
// import GhostButton from '@/components/buttons/GhostButton'
// import IconButton from '@/components/buttons/IconButton'
// import OutlineButton from '@/components/buttons/OutlineButton'
// import DangerButton from '@/components/buttons/DangerButton'
// import SuccessButton from '@/components/buttons/SuccessButton'
// // Cards
// import SimpleCard from '@/components/cards/SimpleCard'
// import ImageCard from '@/components/cards/ImageCard'
// import FeatureCard from '@/components/cards/FeatureCard'
// import PricingCard from '@/components/cards/PricingCard'
// import DataCard from '@/components/cards/DataCard'
// // Inputs
// import TextInput from '@/components/inputs/TextInput'
// import Select from '@/components/inputs/Select'
// import Checkbox from '@/components/inputs/Checkbox'
// // Nav
// import Tabs from '@/components/navigation/Tabs'
// import Breadcrumb from '@/components/navigation/Breadcrumb'
// import Pagination from '@/components/navigation/Pagination'


// button Imports
import PrimaryButton from './buttons/PrimaryButton'
import SecondaryButton from './buttons/SecondaryButton'
import GhostButton from './buttons/GhostButton'
import IconButton from './buttons/IconButton'

import OutlineButton from './buttons/OutlineButton'
import DangerButton from './buttons/DangerButton'
import SuccessButton from './buttons/SuccessButton'
// Cards
import SimpleCard from './cards/SimpleCard'
import ImageCard from './cards/ImageCard'
import FeatureCard from './cards/FeatureCard'
import PricingCard from './cards/PricingCard'
import DataCard from './cards/DataCard'
// Inputs
import TextInput from './inputs/TextInput'
import Select from './inputs/Select'
import Checkbox from './inputs/Checkbox'
// Nav
import Tabs from './navigation/Tabs'
import Breadcrumb from './navigation/Breadcrumb'
import Pagination from './navigation/Pagination'
 





export default function Page() {
  // Theme State
  const [theme, setTheme] = React.useState("light");
  React.useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  // Inputs
  const [inputValue, setInputValue] = React.useState('');
  const [selectValue, setSelectValue] = React.useState('');
  const [checkboxValue, setCheckboxValue] = React.useState(false);

  // Navigation
  const [activeTab, setActiveTab] = React.useState(0);
  const [currentPage, setCurrentPage] = React.useState(1);

  // Data
  const selectOptions = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' }
  ];

  const tabsData = [
    {
      label: 'Dashboard',
      content: <div className="p-4">Dashboard content goes here...</div>,
      badge: '3'
    },
    {
      label: 'Analytics',
      content: <div className="p-4">Analytics content goes here...</div>
    },
    {
      label: 'Settings',
      content: <div className="p-4">Settings content goes here...</div>
    }
  ];

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Components', href: '/components' },
    { label: 'Navigation', href: '/components/navigation' },
    { label: 'Breadcrumb' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-sky-50 via-indigo-50 to-pink-50 dark:from-[#1d1e26] dark:via-[#212936] dark:to-[#28243c] transition-colors duration-500">
      {/* <ThemeToggle theme={theme} setTheme={setTheme} /> */}

      {/* Glassmorphism Hero Header */}
      <section className="relative max-w-5xl mx-auto px-4 mt-8 mb-16">
        <div className="backdrop-blur-md bg-white/70 dark:bg-gray-900/70 rounded-2xl shadow-2xl py-12 px-8 flex flex-col items-center gap-4 border border-gray-50 dark:border-gray-800">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent">
            React UI Playground
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 text-center max-w-2xl">
            Beautiful, modern & responsive component demo – each below section is styled for clarity, vibrance, and accessibility.
          </p>
        </div>
      </section>

      {/* Content Sections */}
      <div className="max-w-5xl mx-auto px-4 space-y-16 pb-24">

        {/* Buttons Section */}
        <section 
          id="buttons"
          className="bg-white/90 dark:bg-gray-900/90 border border-blue-100 dark:border-blue-900 shadow-xl rounded-2xl p-10 transition-colors duration-300"
        >
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2 text-blue-700 dark:text-blue-200">
            <span>Buttons</span>
            <span className="h-1 w-16 bg-gradient-to-r from-blue-400 to-fuchsia-400 rounded-full block" />
          </h2>
          <div className="flex flex-wrap gap-4">
            <PrimaryButton>Primary</PrimaryButton>
            <SecondaryButton>Secondary</SecondaryButton>
            <GhostButton>Ghost</GhostButton>
            <OutlineButton>Outline</OutlineButton>
            <DangerButton>Danger</DangerButton>
            <SuccessButton>Success</SuccessButton>
            <IconButton aria-label="star">★</IconButton>
          </div>
        </section>

        {/* Cards Section */}
        <section 
          id="cards"
          className="bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 dark:from-[#23293b] dark:via-[#1e142e] dark:to-[#222849] border border-purple-100 dark:border-purple-900 shadow-xl rounded-2xl p-10"
        >
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2 text-purple-600 dark:text-fuchsia-200">
            <span>Cards</span>
            <span className="h-1 w-16 bg-gradient-to-r from-purple-300 to-fuchsia-300 rounded-full block" />
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <SimpleCard title="Simple Card" description="A minimal card with actions." />
            <ImageCard title="Image Card" description="Card with SVG image." />
            <FeatureCard title="Feature Card" description="Highlight features and benefits." />
            <PricingCard plan="Pro" price="$9/mo" features={["10 projects", "Priority support", "Unlimited users"]} />
            <DataCard title="Active Projects" value="27" icon="📂" trend={8} />
          </div>
        </section>

        {/* Inputs Section */}
        <section
          id="inputs"
          className="bg-white/90 dark:bg-gray-900/90 border border-green-100 dark:border-green-900 shadow-xl rounded-2xl p-10"
        >
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2 text-green-700 dark:text-green-200">
            <span>Input Components</span>
            <span className="h-1 w-16 bg-gradient-to-r from-green-300 to-sky-300 rounded-full block" />
          </h2>
          <div className="max-w-lg space-y-6">
            <TextInput
              label="Email Address"
              placeholder="Enter your email"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              helperText="We'll never share your email"
              required
            />
            <TextInput
              label="Password"
              type="password"
              placeholder="Enter your password"
              error="Password must be at least 8 characters"
            />
            <Select
              label="Choose an option"
              options={selectOptions}
              value={selectValue}
              onChange={(e) => setSelectValue(e.target.value)}
              required
            />
            <Checkbox
              label="Terms and Conditions"
              description="I agree to the terms and conditions"
              checked={checkboxValue}
              onChange={(e) => setCheckboxValue(e.target.checked)}
            />
            <Checkbox
              label="Disabled Option"
              description="This option is disabled"
              disabled
            />
          </div>
        </section>

        {/* Navigation Section */}
        <section
          id="navigation"
          className="bg-gradient-to-br from-yellow-50 via-orange-50 to-pink-50 dark:from-[#3a3020] dark:via-[#412920] dark:to-[#16101a] border border-yellow-100 dark:border-yellow-900 shadow-xl rounded-2xl p-10"
        >
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2 text-yellow-600 dark:text-yellow-200">
            <span>Navigation Components</span>
            <span className="h-1 w-16 bg-gradient-to-r from-yellow-300 to-pink-300 rounded-full block" />
          </h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-medium mb-3">Breadcrumb</h3>
              <Breadcrumb items={breadcrumbItems} />
            </div>
            <div>
              <h3 className="text-lg font-medium mb-3">Tabs</h3>
              <Tabs
                tabs={tabsData}
                defaultTab={activeTab}
                onTabChange={(index) => setActiveTab(index)}
              />
            </div>
            <div>
              <h3 className="text-lg font-medium mb-3">Pagination</h3>
              <Pagination
                currentPage={currentPage}
                totalPages={10}
                onPageChange={(page) => setCurrentPage(page)}
                maxVisiblePages={5}
              />
            </div>
          </div>
        </section>

        {/* Feedback Section */}
        <section
          className="bg-white/90 dark:bg-gray-900/90 border border-blue-100 dark:border-blue-900 shadow-xl rounded-2xl p-10"
        >
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2 text-blue-700 dark:text-blue-200">
            <span>Feedback Components</span>
            <span className="h-1 w-16 bg-gradient-to-r from-blue-300 to-violet-300 rounded-full block" />
          </h2>
          <div className="grid gap-4">
            <div className="flex items-center gap-2 p-5 bg-gradient-to-r from-green-50 to-green-100/80 dark:from-green-900 dark:to-green-700 text-green-800 dark:text-green-200 rounded-xl font-semibold shadow-sm border border-green-200 dark:border-green-800">
              <span className="text-2xl">✔</span>
              <span>Success! Your action was completed.</span>
            </div>
            <div className="flex items-center gap-2 p-5 bg-gradient-to-r from-red-50 to-red-100/80 dark:from-red-900 dark:to-red-700 text-red-800 dark:text-red-200 rounded-xl font-semibold shadow-sm border border-red-200 dark:border-red-800">
              <span className="text-2xl">⛔️</span>
              <span>Error! Something went wrong.</span>
            </div>
            <div className="flex items-center gap-2 p-5 bg-gradient-to-r from-yellow-50 to-yellow-100/80 dark:from-yellow-900 dark:to-yellow-700 text-yellow-900 dark:text-yellow-300 rounded-xl font-semibold shadow-sm border border-yellow-200 dark:border-yellow-800">
              <span className="text-2xl">⚠️</span>
              <span>Warning! Please check your input.</span>
            </div>
            <div className="flex items-center gap-2 p-5 bg-gradient-to-r from-blue-50 to-blue-100/80 dark:from-blue-900 dark:to-blue-700 text-blue-900 dark:text-blue-200 rounded-xl font-semibold shadow-sm border border-blue-200 dark:border-blue-800">
              <span className="text-2xl">ℹ️</span>
              <span>Info! Here is some important information.</span>
            </div>
          </div>
        </section>
        
      </div>
    </div>
  );
}
