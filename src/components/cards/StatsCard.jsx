import React from "react";

const StatsCard = ({ title, value, icon, trend }) => {
    return (
        <div className="p-4 rounded-lg shadow-md bg-white flex items-center justify-between">
            <div>
                <h3 className="text-sm font-medium text-gray-500">{title}</h3>
                <p className="text-2xl font-semibold text-gray-900">{value}</p>
            </div>
            <div className="text-3xl">{icon}</div>
            {trend && (
                <span className={`ml-4 text-sm font-medium ${trend > 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {trend > 0 ? `+${trend}%` : `${trend}%`}
                </span>
            )}
        </div>
    );
};

export default StatsCard;
