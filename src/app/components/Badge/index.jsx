import React from "react";
import { cn } from "../utils/utils";
import PropTypes from 'prop-types';

// Variant and size classes (reusable for badge, tag, chip)
const variantClasses = {
  primary: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-200",
  success:
    "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-200",
  warning:
    "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-200",
  danger: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-200",
  neutral: "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-200",
};

const sizeClasses = {
  sm: "px-2 py-0.5 text-xs",
  md: "px-3 py-1 text-sm",
  lg: "px-4 py-1.5 text-base",
};

export const Badge = ({
  children,
  variant = "neutral",
  size = "md",
  pill = false,
  onClose,
  className,
  icon,
  count,
  ...props
}) => {
  return (
    <span
      role="status"
      aria-live="polite"
      className={cn(
        "inline-flex items-center font-medium relative",
        sizeClasses[size],
        variantClasses[variant],
        pill ? "rounded-full" : "rounded-md",
        "shadow-sm",
        className
      )}
      {...props}
    >
      {icon && <span className="mr-2 flex items-center">{icon}</span>}

      <span className="truncate">{children}</span>

      {onClose && (
        <button
          type="button"
          aria-label="Close badge"
          onClick={onClose}
          className={cn(
            "ml-2 inline-flex items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-offset-1",
            "p-0.5 hover:opacity-90"
          )}
        >
          <svg
            className="h-3.5 w-3.5"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      )}

      {/* Count badge */}
      {count !== undefined && (
        <span className="absolute -top-2 -right-2 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white bg-red-600 rounded-full">
          {count}
        </span>
      )}
    </span>
  );
};

// PropTypes for Badge component
Badge.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'success', 'warning', 'danger', 'neutral']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  pill: PropTypes.bool,
  onClose: PropTypes.func,
  className: PropTypes.string,
  icon: PropTypes.node,
  count: PropTypes.number,
};

// DefaultProps for Badge component
Badge.defaultProps = {
  variant: 'neutral',
  size: 'md',
  pill: false,
  onClose: undefined,
  className: '',
  icon: undefined,
  count: undefined,
};

export const Chip = ({
  children,
  variant = "neutral",
  icon,
  onRemove,
  className,
  ...props
}) => {
  return (
    <span
      className={cn(
        "inline-flex items-center text-sm font-medium px-3 py-1 rounded-full shadow-sm",
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {icon && <span className="mr-2 flex items-center">{icon}</span>}
      {children}
      {onRemove && (
        <button
          className="ml-2 inline-flex items-center justify-center rounded-full p-0.5 hover:opacity-80"
          onClick={onRemove}
        >
          &times;
        </button>
      )}
    </span>
  );
};

// PropTypes for Chip component
Chip.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'success', 'warning', 'danger', 'neutral']),
  icon: PropTypes.node,
  onRemove: PropTypes.func,
  className: PropTypes.string,
};

// DefaultProps for Chip component
Chip.defaultProps = {
  variant: 'neutral',
  icon: undefined,
  onRemove: undefined,
  className: '',
};