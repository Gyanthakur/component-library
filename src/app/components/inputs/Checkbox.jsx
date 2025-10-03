export default function Checkbox({ 
  label, 
  description,
  checked = false,
  onChange,
  disabled = false,
  ...props 
}) {
  return (
    <div className="relative flex items-start">
      <div className="flex items-center h-5">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          className={`
            w-4 h-4 bg-theme-surface border-theme rounded transition-all duration-200
            checked:bg-theme-primary checked:border-theme-primary
            focus-theme
            ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:border-theme-primary'}
          `}
          {...props}
        />
      </div>
      {(label || description) && (
        <div className="ml-3 text-sm">
          {label && (
            <label className={`font-medium text-theme-primary ${disabled ? 'opacity-50' : ''}`}>
              {label}
            </label>
          )}
          {description && (
            <p className={`text-theme-secondary ${disabled ? 'opacity-50' : ''}`}>
              {description}
            </p>
          )}
        </div>
      )}
    </div>
  )
}