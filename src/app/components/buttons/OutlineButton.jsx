import React from "react";

const OutlineButton = ({ children, ...props }) => {
    return (
        <button
            className="px-4 py-2 rounded-lg border-2 border-theme-primary text-theme-primary hover:bg-theme-primary hover:text-white focus-theme transition-all duration-300 transform hover:scale-105 active:scale-95"
            {...props}
        >
            {children}
        </button>
    );
};

export default OutlineButton;
