'use client';

import React, { useState, useId } from "react";
import PropTypes from 'prop-types';

export const DatePicker = ({ 
  label = "Select Date", 
  onChange,
  id,
  required = false,
  disabled = false,
  min,
  max,
  ...props 
}) => {
  const [date, setDate] = useState("");
  const uniqueId = useId(); // React's stable ID generation

  const handleChange = (e) => {
    setDate(e.target.value);
    if (onChange) onChange(e.target.value);
  };

  // Use provided ID or generate a stable one using useId
  const inputId = id || `date-picker-${uniqueId}`;

  return (
    <div className="mb-4">
      <label 
        htmlFor={inputId}
        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
      >
        {label}
        {required && <span aria-label="required" className="text-red-500 ml-1">*</span>}
      </label>
      <input
        type="date"
        id={inputId}
        value={date}
        onChange={handleChange}
        required={required}
        disabled={disabled}
        min={min}
        max={max}
        className={`
          px-3 py-2 border rounded-md shadow-sm
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
          disabled:opacity-50 disabled:cursor-not-allowed
          ${disabled ? 'bg-gray-100 dark:bg-gray-700' : 'bg-white dark:bg-gray-800'}
        `}
        aria-describedby={required ? `${inputId}-required` : undefined}
        {...props}
      />
      {date && (
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          Selected Date: <time dateTime={date}>{new Date(date).toLocaleDateString()}</time>
        </p>
      )}
      {required && (
        <p id={`${inputId}-required`} className="sr-only">
          This field is required
        </p>
      )}
    </div>
  );
};

DatePicker.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func,
  id: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  min: PropTypes.string,
  max: PropTypes.string,
};

DatePicker.defaultProps = {
  label: "Select Date",
  onChange: undefined,
  id: undefined,
  required: false,
  disabled: false,
  min: undefined,
  max: undefined,
};