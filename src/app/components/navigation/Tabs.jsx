import { useState } from 'react'

export default function Tabs({ tabs = [], defaultTab = 0, onTabChange }) {
  const [activeTab, setActiveTab] = useState(defaultTab)

  const handleTabClick = (index) => {
    setActiveTab(index)
    if (onTabChange) {
      onTabChange(index, tabs[index])
    }
  }

  return (
    <div className="w-full">
      {/* Tab Headers */}
      <div className="border-b border-theme">
        <nav className="-mb-px flex space-x-8" aria-label="Tabs">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => handleTabClick(index)}
              className={`
                whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm transition-all duration-200
                ${activeTab === index
                  ? 'border-theme-primary text-theme-primary'
                  : 'border-transparent text-theme-secondary hover:text-theme-primary hover:border-theme-light'
                }
              `}
              aria-current={activeTab === index ? 'page' : undefined}
            >
              {tab.label}
              {tab.badge && (
                <span className={`
                  ml-2 py-0.5 px-2 rounded-full text-xs font-medium transition-all duration-200
                  ${activeTab === index 
                    ? 'bg-theme-primary text-white' 
                    : 'bg-theme-surface-hover text-theme-secondary'
                  }
                `}>
                  {tab.badge}
                </span>
              )}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      <div className="mt-4">
        {tabs[activeTab]?.content && (
          <div className="text-theme-primary">{tabs[activeTab].content}</div>
        )}
      </div>
    </div>
  )
}