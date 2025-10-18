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
        "ui-px-6 ui-py-3 ui-rounded-lg ui-font-semibold ui-flex ui-items-center ui-justify-center ui-gap-2",
        "ui-bg-black ui-text-cyan-300 ui-border ui-border-cyan-400",
        "hover:ui-bg-cyan-950 hover:ui-border-cyan-300 hover:ui-scale-105",
        "ui-shadow-[0_0_12px_rgba(34,211,238,0.5)] hover:ui-shadow-[0_0_20px_rgba(34,211,238,0.8)]",
        "ui-transition-all ui-duration-300 ui-ease-in-out ui-m-2",
        "focus:ui-outline-none focus:ui-ring-2 focus:ui-ring-cyan-400",
        "disabled:ui-opacity-50 disabled:ui-cursor-not-allowed"
      )}
      style={{
        textShadow: "0 0 8px rgba(34,211,238,0.8)",
      }}
      {...props}
    >
      {isLoading && (
        <svg
          className="ui-animate-spin ui-h-4 ui-w-4 ui-text-cyan-300"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="ui-opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="ui-opacity-75"
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
