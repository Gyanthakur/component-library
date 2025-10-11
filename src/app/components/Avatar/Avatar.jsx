"use client";

import React from "react";
import { cn } from "../utils/utils";

export function Avatar({ src, alt = "User Avatar", online = false, size = "md", className }) {
  const sizes = { sm: "w-8 h-8", md: "w-12 h-12", lg: "w-16 h-16" };
  return (
    <div className={cn("relative inline-block", className)}>
      <img src={src} alt={alt} className={cn("rounded-full object-cover", sizes[size])} />
      {online && (
        <span className={cn(
          "absolute bottom-0 right-0 block rounded-full border-2 border-white dark:border-gray-900 bg-green-500",
          size === "sm" ? "w-2 h-2" : size === "md" ? "w-3 h-3" : "w-4 h-4"
        )} />
      )}
    </div>
  );
}

export function AvatarGroup({ avatars = [], size = "md", max = 5 }) {
  const displayed = avatars.slice(0, max);
  const extraCount = avatars.length - max;

  return (
    <div className="flex -space-x-3">
      {displayed.map((user, index) => (
        <Avatar key={index} {...user} size={size} className="border-2 border-white dark:border-gray-900" />
      ))}
      {extraCount > 0 && (
        <div className={cn(
          "flex items-center justify-center rounded-full bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-medium border-2 border-white dark:border-gray-900",
          size === "sm" ? "w-8 h-8 text-xs" : size === "md" ? "w-12 h-12 text-sm" : "w-16 h-16 text-base"
        )}>
          +{extraCount}
        </div>
      )}
    </div>
  );
}
