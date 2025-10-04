"use client";
 
import React, { useState } from 'react'
import { Search, X } from 'lucide-react' 
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
import PrimaryButton from "./buttons/PrimaryButton";
import SecondaryButton from "./buttons/SecondaryButton";
import GhostButton from "./buttons/GhostButton";
import IconButton from "./buttons/IconButton";

import OutlineButton from "./buttons/OutlineButton";
import DangerButton from "./buttons/DangerButton";
import SuccessButton from "./buttons/SuccessButton";
// Cards
import SimpleCard from "./cards/SimpleCard";
import ImageCard from "./cards/ImageCard";
import FeatureCard from "./cards/FeatureCard";
import PricingCard from "./cards/PricingCard";
import DataCard from "./cards/DataCard";
// Inputs
import TextInput from "./inputs/TextInput";
import Select from "./inputs/Select";
import Checkbox from "./inputs/Checkbox";
// Nav
import Tabs from "./navigation/Tabs";
import Breadcrumb from "./navigation/Breadcrumb";
import Pagination from "./navigation/Pagination";

export default function Page() {
  // Search and Filter State
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');

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
  const [inputValue, setInputValue] = React.useState("");
  const [selectValue, setSelectValue] = React.useState("");
  const [checkboxValue, setCheckboxValue] = React.useState(false);

  // Navigation
  const [activeTab, setActiveTab] = React.useState(0);
  const [currentPage, setCurrentPage] = React.useState(1);

  // Data
  const selectOptions = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  const tabsData = [
    {
      label: "Dashboard",
      content: <div className="p-4">Dashboard content goes here...</div>,
      badge: "3",
    },
    {
      label: "Analytics",
      content: <div className="p-4">Analytics content goes here...</div>,
    },
    {
      label: "Settings",
      content: <div className="p-4">Settings content goes here...</div>,
    },
  ];

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Components", href: "/components" },
    { label: "Navigation", href: "/components/navigation" },
    { label: "Breadcrumb" },
  ];

  // All components with search data
  const allComponents = {
    buttons: [
      { name: 'Primary Button', component: <PrimaryButton>Primary</PrimaryButton>, keywords: ['primary', 'main', 'action', 'cta'] , desc : "Used for Main Actions"},
      { name: 'Secondary Button', component: <SecondaryButton>Secondary</SecondaryButton>, keywords: ['secondary', 'alternate'] , desc: "Used for secondary Actions" },
      { name: 'Ghost Button', component: <GhostButton>Ghost</GhostButton>, keywords: ['ghost', 'transparent', 'subtle'] , desc : "Used for minimal actions"},
      { name: 'Outline Button', component: <OutlineButton>Outline</OutlineButton>, keywords: ['outline', 'border', 'stroke'] , desc : "Used for gives outline"},
      { name: 'Danger Button', component: <DangerButton>Danger</DangerButton>, keywords: ['danger', 'error', 'delete', 'warning', 'red'] , desc : "Used for destructive actions" },
      { name: 'Success Button', component: <SuccessButton>Success</SuccessButton>, keywords: ['success', 'confirm', 'done', 'green'] , desc : "Used for success actions"},
      { name: 'Icon Button', component: <IconButton aria-label="star">★</IconButton>, keywords: ['icon', 'star', 'symbol'] , desc : "Used for icons"}
    ],
    cards: [
      { name: 'Simple Card', component: <SimpleCard title="Simple Card" description="A minimal card with actions." />, keywords: ['simple', 'basic', 'minimal'] },
      { name: 'Image Card', component: <ImageCard title="Image Card" description="Card with SVG image." />, keywords: ['image', 'picture', 'visual'] },
      { name: 'Feature Card', component: <FeatureCard title="Feature Card" description="Highlight features and benefits." />, keywords: ['feature', 'highlight', 'benefit'] },
      { name: 'Pricing Card', component: <PricingCard plan="Pro" price="$9/mo" features={["10 projects", "Priority support", "Unlimited users"]} />, keywords: ['pricing', 'plan', 'subscription', 'price'] },
      { name: 'Data Card', component: <DataCard title="Active Projects" value="27" icon="📂" trend={8} />, keywords: ['data', 'stats', 'analytics', 'metrics'] }
    ],
    inputs: [
      { name: 'Text Input', component: <TextInput label="Sample Input" placeholder="Enter text" />, keywords: ['text', 'input', 'field', 'form'] },
      { name: 'Select', component: <Select label="Sample Select" options={selectOptions} />, keywords: ['select', 'dropdown', 'options', 'choice'] },
      { name: 'Checkbox', component: <Checkbox label="Sample Checkbox" description="Check this option" />, keywords: ['checkbox', 'check', 'toggle', 'boolean'] }
    ],
    navigation: [
      { name: 'Breadcrumb', component: <Breadcrumb items={breadcrumbItems} />, keywords: ['breadcrumb', 'navigation', 'path', 'hierarchy'] },
      { name: 'Tabs', component: <Tabs tabs={tabsData} defaultTab={0} />, keywords: ['tabs', 'navigation', 'switch', 'toggle'] },
      { name: 'Pagination', component: <Pagination currentPage={1} totalPages={5} maxVisiblePages={3} />, keywords: ['pagination', 'pages', 'navigation', 'paging'] }
    ]
  };

  // Filter logic
  const getFilteredComponents = () => {
    let components = {};
    
    // Apply type filter
    if (filterType === 'all') {
      components = allComponents;
    } else {
      components = { [filterType]: allComponents[filterType] };
    }
    
    // Apply search filter
    if (searchTerm) {
      const filtered = {};
      Object.keys(components).forEach(type => {
        const matchedComponents = components[type].filter(comp =>
          comp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          comp.keywords.some(keyword => keyword.toLowerCase().includes(searchTerm.toLowerCase()))
        );
        if (matchedComponents.length > 0) {
          filtered[type] = matchedComponents;
        }
      });
      return filtered;
    }
    
    return components;
  };

  const filteredComponents = getFilteredComponents();
  const totalResults = Object.values(filteredComponents).reduce((total, components) => total + components.length, 0);

  return (
    <div className="min-h-screen bg-gradient-to-r from-sky-50 via-indigo-50 to-pink-50 dark:from-[#1d1e26] dark:via-[#212936] dark:to-[#28243c] transition-colors duration-500">
      {/* <ThemeToggle theme={theme} setTheme={setTheme} /> */}

      {/* Glassmorphism Hero Header */}
      <section className="relative max-w-5xl mx-auto px-4 mt-8 mb-16">
        <div className="backdrop-blur-md bg-white/70 dark:bg-gray-900/70 rounded-2xl shadow-2xl py-12 px-8 flex flex-col items-center gap-6 border border-gray-50 dark:border-gray-800">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent">
            React UI Playground
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 text-center max-w-2xl">
            Beautiful, modern & responsive component demo – each below section
            is styled for clarity, vibrance, and accessibility.
          </p>
          
          {/* Search Bar */}
          <div className="flex flex-col sm:flex-row gap-3 max-w-2xl w-full">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search components (buttons, cards, primary, etc.)"
                className="w-full pl-9 pr-8 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-sm bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
            <div className="sm:w-48">
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="w-full py-3 px-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-sm"
              >
                <option value="all">All Components</option>
                <option value="buttons">Buttons</option>
                <option value="cards">Cards</option>
                <option value="inputs">Inputs</option>
                <option value="navigation">Navigation</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Search Results Info */}
      {(searchTerm || filterType !== 'all') && (
        <div className="max-w-5xl mx-auto px-4 mb-8">
          <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
            <p className="text-blue-800 dark:text-blue-200">
              Found <span className="font-semibold">{totalResults}</span> component{totalResults !== 1 ? 's' : ''}
              {searchTerm && ` matching "${searchTerm}"`}
              {filterType !== 'all' && ` in ${filterType}`}
            </p>
          </div>
        </div>
      )}

      {/* No Results */}
      {totalResults === 0 && (
        <div className="max-w-5xl mx-auto px-4 text-center py-12">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">No components found</h3>
        </div>
      )}

      {/* Content Sections */}
      <div className="max-w-5xl mx-auto px-4 space-y-16 pb-24">
        {/* Buttons Section */}
        {filteredComponents.buttons && (
          <section
            id="buttons"
            className="bg-white/90 dark:bg-gray-900/90 border border-blue-100 dark:border-blue-900 shadow-xl rounded-2xl p-10 transition-colors duration-300"
          >
            <h2 className="relative text-2xl font-semibold mb-6 flex justify-center items-center gap-2 text-blue-700 dark:text-blue-200">
              <span>Buttons ({filteredComponents.buttons.length})</span>
              <span className="absolute top-10 h-1 w-full bg-gradient-to-r from-blue-400 to-fuchsia-400 rounded-full block" />
            </h2>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredComponents.buttons.map((item, index) => (
                <div
                className={`${
                  theme === "dark"
                    ? "bg-gray-800 text-gray-200"
                    : "bg-gray-300 text-gray-900"
                } shadow-md rounded-2xl p-5 flex flex-col items-center text-center border border-gray-100 hover:shadow-lg transition w-60`}
              >
                <div key={index} title={item.name}>
                  {item.component}
                </div>
                <div>
                  <p className="text-sm mt-3">{item.desc}</p>
                </div>
              </div>
              ))} 
            </div>
          </section>
        )}

        {/* Cards Section */}
        {filteredComponents.cards && (
          <section
            id="cards"
            className="bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 dark:from-[#23293b] dark:via-[#1e142e] dark:to-[#222849] border border-purple-100 dark:border-purple-900 shadow-xl rounded-2xl p-10"
          >
            <h2 className="relative text-2xl font-semibold mb-6 flex justify-center items-center gap-2 text-purple-600 dark:text-fuchsia-200">
              <span>Cards ({filteredComponents.cards.length})</span>
              <span className="absolute top-10 h-1 w-full bg-gradient-to-r from-purple-300 to-fuchsia-300 rounded-full block" />
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredComponents.cards.map((item, index) => (
                <div key={index} title={item.name}>
                  {item.component}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Inputs Section */}
        {filteredComponents.inputs && (
          <section
            id="inputs"
            className="bg-white/90 w-full dark:bg-gray-900/90 border border-green-100 dark:border-green-900 shadow-xl rounded-2xl p-10"
          >
            <h2 className="relative text-2xl font-semibold mb-6 flex items-center justify-center gap-2 text-green-700 dark:text-green-200">
              <span>Input Components ({filteredComponents.inputs.length})</span>
              <span className="absolute top-10 h-1 w-full bg-gradient-to-r from-green-300 to-sky-300 rounded-full block" />
            </h2>
            <div className="max-w-lg space-y-6 flex flex-col justify-center">
              {filteredComponents.inputs.map((item, index) => (
                <div key={index} title={item.name}>
                  {item.component}
                </div>
              ))}
              {/* Show additional examples if all inputs are visible */}
              {filteredComponents.inputs.length === allComponents.inputs.length && (
                <>
                  <TextInput
                    label="Email Address"
                    placeholder="Enter your email"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    helperText="We'll never share your email"
                    required
                    className="text-gray-100 bg-gray-600 px-4 py-2"
                  />
                  <TextInput
                    label="Password"
                    type="password"
                    placeholder="Enter your password"
                    error="Password must be at least 8 characters"
                    className="text-gray-100 bg-gray-600 px-4 py-2"
                  />
                  <Select
                    label="Choose an option"
                    options={selectOptions}
                    value={selectValue}
                    onChange={(e) => setSelectValue(e.target.value)}
                    required
                    
                    className="text-gray-100 bg-gray-600 px-4 py-2"
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
                </>
              )}
            </div>
          </section>
        )} 

        {/* Navigation Section */}
        {filteredComponents.navigation && (
          <section
            id="navigation"
            className="bg-gradient-to-br from-yellow-50 via-orange-50 to-pink-50 dark:from-[#3a3020] dark:via-[#412920] dark:to-[#16101a] border border-yellow-100 dark:border-yellow-900 shadow-xl rounded-2xl p-10"
          >
            <h2 className="relative text-2xl font-semibold mb-6 flex items-center justify-center gap-2 text-yellow-600 dark:text-yellow-200">
              <span>Navigation Components ({filteredComponents.navigation.length})</span>
              <span className="absolute top-10 h-1 w-full bg-gradient-to-r from-yellow-300 to-pink-300 rounded-full block" />
            </h2>
            <div className="space-y-8">
              {filteredComponents.navigation.map((item, index) => (
                <div key={index}>
                  <h3 className="text-lg font-medium mb-3">{item.name}</h3>
                  <div title={item.name}>
                    {item.component}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Feedback Section - Always show when no specific filter is applied */}
        {(filterType === 'all' && !searchTerm) && (
          <section
            className="bg-white/90 dark:bg-gray-900/90 border border-blue-100 dark:border-blue-900 shadow-xl rounded-2xl p-10"
          >
            <h2 className="relative text-2xl font-semibold mb-6 flex items-center justify-center gap-2 text-blue-700 dark:text-blue-200">
              <span>Feedback Components</span>
              <span className="absolute top-10 h-1 w-full bg-gradient-to-r from-blue-300 to-violet-300 rounded-full block" />
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
        )}
        
      </div>
    </div>
  );
}
