import React from "react";

const OutlineButton = ({ children,className="", ...props }) => {
    return (
        <button
           className={`px-4 py-2 rounded-lg border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300 transform hover:scale-105 active:scale-95 ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default OutlineButton;
