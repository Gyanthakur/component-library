export default function PricingCard({ plan, price, features=[] }){
  return (
    <div className="p-6 rounded-2xl bg-theme-surface shadow-theme-md border border-theme-light hover:shadow-theme-lg transition-all duration-300 transform hover:scale-105 group">
      <div className="flex items-baseline gap-3">
        <h3 className="text-xl font-semibold text-theme-primary">{plan}</h3>
        <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-400 dark:to-violet-400 bg-clip-text text-transparent">{price}</div>
      </div>
      <ul className="mt-4 space-y-2 text-sm text-theme-secondary">
        {features.map((f, i) => <li key={i} className="flex items-center gap-2"><span className="text-green-500">✓</span> {f}</li>)}
      </ul>
      <div className="mt-5">
        <button className="w-full rounded-lg py-2 bg-theme-primary hover:bg-theme-primary-hover text-white font-medium focus-theme shadow-theme-sm transition-all duration-300 transform group-hover:scale-105">Choose {plan}</button>
      </div>
    </div>
  )
}
