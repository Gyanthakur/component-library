import React from "react";
import PropTypes from 'prop-types';

const DangerButton = ({ children, className ="",...props }) => {
    return (
        <button
           className={`px-4 py-2 rounded-lg bg-red-600 dark:bg-red-500 text-white hover:bg-red-700 dark:hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105 active:scale-95 ${className}`}
            {...props}
        >
            
            {children}
        </button>
    );
};

DangerButton.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DangerButton;