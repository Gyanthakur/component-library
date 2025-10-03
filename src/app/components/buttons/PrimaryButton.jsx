export default function PrimaryButton({ children, ...props }){
  return (
    <button {...props} className="px-4 py-2 rounded-lg bg-theme-primary text-white font-medium hover:bg-theme-primary-hover focus-theme shadow-theme-sm transition-all duration-300 transform hover:scale-105 active:scale-95">
      {children}
    </button>
  )
}
