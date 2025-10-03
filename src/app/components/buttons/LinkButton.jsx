import React from "react";

const LinkButton = ({ children, ...props }) => {
    return (
        <button
            className="text-theme-primary underline hover:text-theme-primary-hover focus-theme transition-all duration-300 hover:decoration-2 underline-offset-4"
            {...props}
        >
            {children}
        </button>
    );
};

export default LinkButton;
