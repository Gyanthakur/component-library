import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

const NeonButton = ({
  children,
  onClick,
  disabled = false,
  isLoading = false,
  ...props
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled || isLoading}
      className={clsx(
        "px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2",
        "bg-black text-cyan-300 border border-cyan-400",
        "hover:bg-cyan-950 hover:border-cyan-300 hover:scale-105",
        "shadow-[0_0_12px_rgba(34,211,238,0.5)] hover:shadow-[0_0_20px_rgba(34,211,238,0.8)]",
        "transition-all duration-300 ease-in-out m-2",
        "focus:outline-none focus:ring-2 focus:ring-cyan-400",
        "disabled:opacity-50 disabled:cursor-not-allowed"
      )}
      style={{
        textShadow: "0 0 8px rgba(34,211,238,0.8)",
      }}
      {...props}
    >
      {isLoading && (
        <svg
          className="animate-spin h-4 w-4 text-cyan-300"
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

NeonButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
};

export default NeonButton;
