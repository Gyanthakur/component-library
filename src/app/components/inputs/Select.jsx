export default function Select({ 
  label, 
  options = [], 
  placeholder = "Select an option...",
  error,
  required = false,
  ...props 
}) {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-theme-primary mb-1">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <select
        className={`
          w-full px-3 py-2 border rounded-md shadow-theme-sm bg-theme-surface text-theme-primary
          focus-theme transition-all duration-200
          ${error 
            ? 'border-red-400 focus:ring-red-500 focus:border-red-500' 
            : 'border-theme hover:border-theme-primary'
          }
        `}
        {...props}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option, index) => (
          <option key={index} value={option.value} className="bg-theme-surface text-theme-primary">
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <p className="mt-1 text-sm text-red-500">{error}</p>
      )}
    </div>
  )
}