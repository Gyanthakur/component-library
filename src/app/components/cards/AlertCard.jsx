import React from "react";

const AlertCard = ({ title, description, type = "info" }) => {
    const typeClasses = {
        info: "bg-blue-100 text-blue-800",
        warning: "bg-yellow-100 text-yellow-800",
        error: "bg-red-100 text-red-800",
        success: "bg-green-100 text-green-800",
    };

    return (
        <div className={`p-4 rounded-lg shadow-md ${typeClasses[type]}`}>
            <h3 className="font-semibold">{title}</h3>
            <p className="mt-1">{description}</p>
        </div>
    );
};

export default AlertCard;
