export default function PrimaryButton({ children, ...props }) {
  return (
    <button
      {...props}
      className="px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105 active:scale-95"
    >
      {children}
    </button>
  )
}
