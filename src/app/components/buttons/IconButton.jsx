export default function IconButton({ children, ...props }){
  return (
    <button
      {...props}
      className="p-2 rounded-md hover:bg-theme-surface-hover inline-flex items-center justify-center focus-theme transition-all duration-300 transform hover:scale-110 active:scale-95 text-gray-800 dark:text-gray-200"
    >
      {children}
    </button>
  )
}