import React from "react";

const LinkButton = ({ children, ...props }) => {
    return (
        <button
            className="bg-blue-300 px-3 py-2 rounded-md text-gray-500 hover:text-blue-500 hover:bg-blue-400 text-theme-primary underline hover:text-theme-primary-hover focus-theme transition-all duration-300 hover:decoration-2 underline-offset-4"
            {...props}
        >
            {children}
        </button>
    );
};

export default LinkButton;
