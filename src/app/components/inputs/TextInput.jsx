export default function TextInput({ 
  label, 
  placeholder, 
  error, 
  helperText, 
  required = false,
  type = "text",
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
      <input
        type={type}
        placeholder={placeholder}
        className={`
          w-full px-3 py-2 border rounded-md shadow-theme-sm placeholder-theme-muted bg-theme-surface text-theme-primary
          focus-theme transition-all duration-200
          ${error 
            ? 'border-red-400 focus:ring-red-500 focus:border-red-500' 
            : 'border-theme hover:border-theme-primary'
          }
        `}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-red-500">{error}</p>
      )}
      {helperText && !error && (
        <p className="mt-1 text-sm text-theme-secondary">{helperText}</p>
      )}
    </div>
  )
}