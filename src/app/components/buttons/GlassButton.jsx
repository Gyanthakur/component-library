import React from "react";

export default function GlassButton({
    children = "Click Me",
    onClick,
    size = "md",
    rounded = "md",
    className = "",
    disabled = false,
    ...rest
}) {
    const sizeMap = {
        sm: "px-3 py-1.5 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-6 py-3 text-lg",
    };

    const roundedMap = {
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        full: "rounded-full",
    };

    const base = `inline-flex items-center justify-center gap-2 font-medium focus:outline-none transition-all duration-200 select-none`;

    // Glassmorphism styles
    const glass = `backdrop-blur-sm bg-white/8 border border-white/20 shadow-lg`;

    // Hover / active variants
    const interactive = `hover:scale-[1.02] active:scale-[0.99] hover:bg-white/12`;

    // Focus accessibility
    const focus = `focus:ring-2 focus:ring-white/25 focus:ring-offset-1`;

    const disabledCls = disabled
        ? "opacity-50 cursor-not-allowed pointer-events-none"
        : "cursor-pointer";

    const composed = [
        base,
        glass,
        interactive,
        focus,
        sizeMap[size] ?? sizeMap.md,
        roundedMap[rounded] ?? roundedMap.md,
        disabledCls,
        className,
    ]
        .filter(Boolean)
        .join(" ");

    return (
        <button
            type="button"
            className={composed}
            onClick={disabled ? undefined : onClick}
            aria-disabled={disabled}
            {...rest}
        >
            <span className="absolute -inset-px rounded-md pointer-events-none" aria-hidden></span>
            <span className="relative z-10 flex items-center text-white">
        {children}
      </span>
        </button>
    );
}
