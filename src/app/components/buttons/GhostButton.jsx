export default function GhostButton({ children, ...props }){
  return (
    <button 
      {...props} 
      className="border-2 border-gray-500 text-gray-800 px-3 py-2 rounded-md hover:bg-gray-100 focus-theme transition-all duration-300 transform hover:scale-105 active:scale-95"
    >
      {children}
    </button>
  )
}