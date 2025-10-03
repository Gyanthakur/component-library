export default function SimpleCard({ title, description }){
  return (
    <div className="p-5 rounded-xl bg-theme-surface shadow-theme-sm border border-theme-light hover:shadow-theme-md transition-all duration-300 transform hover:scale-105 group">
      <h3 className="font-semibold text-lg text-theme-primary group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">{title}</h3>
      <p className="text-sm text-theme-secondary mt-2">{description}</p>
      <div className="mt-4 flex gap-2">
        <button className="text-sm px-3 py-1 rounded bg-indigo-50 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100 dark:hover:bg-indigo-900/70 focus-theme transition-all duration-300 transform hover:scale-105">Action</button>
        <button className="text-sm px-3 py-1 rounded bg-theme-surface-hover text-theme-secondary hover:text-theme-primary focus-theme transition-all duration-300 transform hover:scale-105">More</button>
      </div>
    </div>
  )
}
