import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

export default function PasswordInput({
  value,
  onChange,
  placeholder = "Enter password",
  className = "",
  ariaLabel,
  ...props
}) {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => setShowPassword(prev => !prev);

  return (
    <div className={`relative w-full ${className}`}>
      <input
        type={showPassword ? "text" : "password"}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        aria-label={ariaLabel}
        className="
          w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600
          bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
          transition-all duration-300
        "
        {...props}
      />
      <button
        type="button"
        onClick={toggleShowPassword}
        className="
          absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-300
          hover:text-gray-700 dark:hover:text-gray-100
          focus:outline-none
        "
        aria-label={showPassword ? "Hide password" : "Show password"}
      >
        {showPassword ? <FaEyeSlash /> : <FaEye />}
      </button>
    </div>
  );
}

PasswordInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  ariaLabel: PropTypes.string,
};
