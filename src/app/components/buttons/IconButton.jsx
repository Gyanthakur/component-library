export default function IconButton({ children, ...props }){
  return (
    <button {...props} className="p-2 rounded-md hover:bg-theme-surface-hover inline-flex items-center justify-center focus-theme transition-all duration-300 transform hover:scale-110 active:scale-95" >
      <span className="text-lg text-theme-primary">{children}</span>
    </button>
  )
}
