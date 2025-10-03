import React from "react";

const LoadingButton = ({ children, isLoading = true, ...props }) => {
    return (
        <button
            className="px-4 py-2 rounded-lg bg-amber-400 dark:bg-amber-500 text-gray-900 dark:text-gray-100 flex items-center justify-center gap-2 hover:bg-amber-500 dark:hover:bg-amber-600 focus-theme shadow-theme-sm transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isLoading}
            {...props}
        >
            {isLoading && (
                <svg
                    className="animate-spin h-4 w-4 text-gray-900 dark:text-gray-100"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                    ></circle>
                    <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    ></path>
                </svg>
            )}
            {children}
        </button>
    );
};

export default LoadingButton;
