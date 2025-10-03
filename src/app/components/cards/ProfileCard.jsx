export default function ProfileCard({ name, role }){
  return (
    <div className="p-5 rounded-xl bg-theme-surface shadow-theme-sm border border-theme-light flex items-center gap-4 hover:shadow-theme-md transition-all duration-300 transform hover:scale-105 group">
      <div className="h-14 w-14 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 font-bold transition-all duration-300 group-hover:scale-110">{(name||'U')[0]}</div>
      <div className="flex-1">
        <div className="font-semibold text-theme-primary group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">{name}</div>
        <div className="text-sm text-theme-secondary">{role}</div>
      </div>
      <div className="ml-auto">
        <button className="text-sm px-3 py-1 rounded bg-indigo-50 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100 dark:hover:bg-indigo-900/70 focus-theme transition-all duration-300 transform hover:scale-105">Follow</button>
      </div>
    </div>
  )
}
