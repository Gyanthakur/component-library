export default function Badge({ 
  children, 
  variant = "default", 
  size = "md",
  dot = false,
  removable = false,
  onRemove
}) {
  const variants = {
    default: "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200",
    primary: "bg-indigo-100 dark:bg-indigo-900/50 text-indigo-800 dark:text-indigo-200",
    success: "bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-200",
    warning: "bg-yellow-100 dark:bg-yellow-900/50 text-yellow-800 dark:text-yellow-200",
    error: "bg-red-100 dark:bg-red-900/50 text-red-800 dark:text-red-200",
    info: "bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200"
  }

  const sizes = {
    sm: "px-2 py-0.5 text-xs",
    md: "px-2.5 py-0.5 text-sm",
    lg: "px-3 py-1 text-sm"
  }

  const dotColors = {
    default: "bg-gray-500 dark:bg-gray-400",
    primary: "bg-indigo-500 dark:bg-indigo-400",
    success: "bg-green-500 dark:bg-green-400",
    warning: "bg-yellow-500 dark:bg-yellow-400",
    error: "bg-red-500 dark:bg-red-400",
    info: "bg-blue-500 dark:bg-blue-400"
  }

  return (
    <span className={`
      inline-flex items-center font-medium rounded-full transition-all duration-200
      ${variants[variant] || variants.default}
      ${sizes[size] || sizes.md}
    `}>
      {dot && (
        <span className={`
          w-2 h-2 rounded-full mr-1.5
          ${dotColors[variant] || dotColors.default}
        `} />
      )}
      {children}
      {removable && (
        <button
          onClick={onRemove}
          className="ml-1 inline-flex items-center justify-center w-4 h-4 text-xs rounded-full hover:bg-black hover:bg-opacity-10 dark:hover:bg-white dark:hover:bg-opacity-10 focus-theme transition-all duration-200"
        >
          ×
        </button>
      )}
    </span>
  )
}