export default function ProgressBar({ 
  value = 0, 
  max = 100, 
  label, 
  showPercentage = true,
  size = "md",
  color = "indigo",
  animated = false
}) {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100))
  
  const sizes = {
    sm: "h-1",
    md: "h-2", 
    lg: "h-3"
  }

  const colors = {
    indigo: "bg-indigo-600 dark:bg-indigo-500",
    green: "bg-green-600 dark:bg-green-500",
    red: "bg-red-600 dark:bg-red-500",
    yellow: "bg-yellow-600 dark:bg-yellow-500",
    blue: "bg-blue-600 dark:bg-blue-500",
    gray: "bg-gray-600 dark:bg-gray-500"
  }

  return (
    <div className="w-full">
      {(label || showPercentage) && (
        <div className="flex justify-between items-center mb-1">
          {label && <span className="text-sm font-medium text-theme-primary">{label}</span>}
          {showPercentage && (
            <span className="text-sm text-theme-secondary">{Math.round(percentage)}%</span>
          )}
        </div>
      )}
      
      <div className={`
        w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden
        ${sizes[size] || sizes.md}
      `}>
        <div
          className={`
            ${colors[color] || colors.indigo}
            ${sizes[size] || sizes.md}
            rounded-full transition-all duration-300 ease-out
            ${animated ? 'animate-pulse' : ''}
          `}
          style={{ width: `${percentage}%` }}
          role="progressbar"
          aria-valuenow={value}
          aria-valuemin={0}
          aria-valuemax={max}
        />
      </div>
    </div>
  )
}