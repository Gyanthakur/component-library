export default function GhostButton({ children, ...props }){
  return (
    <button {...props} className="px-3 py-2 rounded-md text-theme-secondary hover:text-theme-primary hover:bg-theme-surface-hover focus-theme transition-all duration-300 transform hover:scale-105 active:scale-95">
      {children}
    </button>
  )
}
