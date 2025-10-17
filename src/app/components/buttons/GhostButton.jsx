export default function GhostButton({ children,className="", ...props }) {
  return (
    <button
      {...props}
     className={`border-2 border-gray-500 dark:border-gray-400 text-gray-800 dark:text-gray-200 px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition-all duration-300 transform hover:scale-105 active:scale-95 ${className}`}
    >
      {children}
    </button>
  )
}