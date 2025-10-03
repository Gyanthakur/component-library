import React from "react";

const SuccessButton = ({ children, ...props }) => {
    return (
        <button
            className="px-4 py-2 rounded-lg bg-green-600 dark:bg-green-500 text-white hover:bg-green-700 dark:hover:bg-green-600 focus-theme shadow-theme-sm transition-all duration-300 transform hover:scale-105 active:scale-95"
            {...props}
        >
            {children}
        </button>
    );
};

export default SuccessButton;
