"use client";

import { useState } from "react";
import { CheckCircle, AlertTriangle, XCircle, Info } from "lucide-react";

const alertStyles = {
  success: "bg-green-100 text-green-700 border-green-400",
  warning: "bg-yellow-100 text-yellow-700 border-yellow-400",
  error: "bg-red-100 text-red-700 border-red-400",
  info: "bg-blue-100 text-blue-700 border-blue-400",
};

const alertIcons = {
  success: <CheckCircle className="w-5 h-5" />,
  warning: <AlertTriangle className="w-5 h-5" />,
  error: <XCircle className="w-5 h-5" />,
  info: <Info className="w-5 h-5" />,
};

export default function Alert({ type = "info", children }) {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div
      className={`flex items-center justify-between border-l-4 p-4 rounded-md shadow-sm ${alertStyles[type]}`}
    >
      <div className="flex items-center gap-2">
        {alertIcons[type]}
        <span>{children}</span>
      </div>
      <button
        onClick={() => setVisible(false)}
        className="ml-4 text-xl font-bold text-gray-600 hover:text-gray-800"
      >
        &times;
      </button>
    </div>
  );
}
