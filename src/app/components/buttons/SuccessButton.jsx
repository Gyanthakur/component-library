import React from "react";

const SuccessButton = ({ children, className="",...props }) => {
    return (
        <button
           className={`px-4 py-2 rounded-lg bg-green-600 dark:bg-green-500 text-white hover:bg-green-700 dark:hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105 active:scale-95 ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default SuccessButton;
