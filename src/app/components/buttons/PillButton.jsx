export default function PillButton({ children, ...props }){
  return (
    <button {...props} className="px-5 py-2 rounded-full bg-teal-500 dark:bg-teal-400 text-white font-semibold hover:bg-teal-600 dark:hover:bg-teal-500 focus-theme shadow-theme-sm transition-all duration-300 transform hover:scale-105 active:scale-95">
      {children}
    </button>
  )
}
