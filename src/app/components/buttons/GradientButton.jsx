import PropTypes from 'prop-types';

export default function GradientButton({ 
  children, 
  className = "", 
  disabled = false,
  ariaLabel,
  ariaDescribedby,
  ...props 
}) {
  return (
    <button
      {...props}
      disabled={disabled}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedby}
      className={`
        px-4 py-2 rounded-lg font-medium shadow-sm transition-all duration-300
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800
        transform hover:scale-105 active:scale-95
        ${disabled 
          ? 'bg-gray-400 dark:bg-gray-600 text-gray-200 cursor-not-allowed' 
          : 'bg-gradient-to-r from-blue-500 to-red-500 hover:from-blue-600 hover:to-red-600 dark:from-yellow-600 dark:to-green-700 text-white hover:shadow-md'
        }
        ${className}
      `}
    >
      {children}
    </button>
  )
}

GradientButton.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  ariaLabel: PropTypes.string,
  ariaDescribedby: PropTypes.string,
};

GradientButton.defaultProps = {
  className: "",
  disabled: false,
  ariaLabel: undefined,
  ariaDescribedby: undefined,
};
