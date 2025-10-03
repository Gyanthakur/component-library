export default function SecondaryButton({ children, ...props }){
  return (
    <button {...props} className="px-4 py-2 rounded-lg bg-theme-surface border border-theme text-theme-primary hover:bg-theme-surface-hover hover:shadow-theme-md focus-theme transition-all duration-300 transform hover:scale-105 active:scale-95">
      {children}
    </button>
  )
}
