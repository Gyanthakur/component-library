export default function FeatureCard({ title, description }){
  return (
    <div className="p-5 rounded-2xl bg-gradient-to-br from-theme-surface to-theme-surface-hover border border-theme-light shadow-theme-sm hover:shadow-theme-md transition-all duration-300 transform hover:scale-105 group">
      <h3 className="font-semibold text-lg text-theme-primary group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">{title}</h3>
      <p className="text-sm text-theme-secondary mt-2">{description}</p>
      <ul className="mt-3 space-y-1 text-sm text-theme-secondary">
        <li className="flex items-center gap-2"><span className="text-green-500">✓</span> Fast to use</li>
        <li className="flex items-center gap-2"><span className="text-green-500">✓</span> Accessible</li>
        <li className="flex items-center gap-2"><span className="text-green-500">✓</span> Small bundle size</li>
      </ul>
    </div>
  )
}
