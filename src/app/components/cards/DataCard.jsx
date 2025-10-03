// components/cards/DataCard.jsx
export default function DataCard({ title, value, icon, trend }) {
  return (
    <div className="p-5 rounded-xl bg-theme-surface shadow-theme-sm border border-theme-light flex items-center gap-4 hover:shadow-theme-md transition-all duration-300 transform hover:scale-105">
      {/* Icon */}
      <div className="h-12 w-12 rounded-lg flex items-center justify-center bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 text-2xl transition-colors duration-300">
        {icon || "📊"}
      </div>

      {/* Text Content */}
      <div className="flex-1">
        <h3 className="text-sm font-medium text-theme-secondary">{title}</h3>
        <p className="text-xl font-semibold text-theme-primary">{value}</p>
      </div>

      {/* Trend */}
      {trend && (
        <div
          className={`text-sm font-medium transition-colors duration-300 ${
            trend > 0 
              ? "text-green-600 dark:text-green-400" 
              : "text-red-600 dark:text-red-400"
          }`}
        >
          {trend > 0 ? `▲ ${trend}%` : `▼ ${Math.abs(trend)}%`}
        </div>
      )}
    </div>
  );
}
