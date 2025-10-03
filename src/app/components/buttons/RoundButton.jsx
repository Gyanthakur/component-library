import React from "react";

const RoundButton = ({ children, ...props }) => {
    return (
        <button
            className="w-10 h-10 rounded-full bg-theme-primary text-white flex items-center justify-center hover:bg-theme-primary-hover focus-theme shadow-theme-sm transition-all duration-300 transform hover:scale-110 active:scale-95"
            {...props}
        >
            {children}
        </button>
    );
};

export default RoundButton;
