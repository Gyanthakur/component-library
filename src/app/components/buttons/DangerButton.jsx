import React from "react";

const DangerButton = ({ children, ...props }) => {
    return (
        <button
            className="px-4 py-2 rounded-lg bg-red-600 dark:bg-red-500 text-white hover:bg-red-700 dark:hover:bg-red-600 focus-theme shadow-theme-sm transition-all duration-300 transform hover:scale-105 active:scale-95 border-2 border-red-900"
            {...props}
        >
            {children}
        </button>
    );
};

export default DangerButton;
