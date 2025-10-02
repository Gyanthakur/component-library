import React from "react";

const TestimonialCard = ({ name, role, quote }) => {
    return (
        <div className="p-6 rounded-lg shadow-lg bg-white">
            <p className="text-gray-700 italic">"{quote}"</p>
            <div className="mt-4">
                <h4 className="text-lg font-semibold text-gray-900">{name}</h4>
                <p className="text-sm text-gray-500">{role}</p>
            </div>
        </div>
    );
};

export default TestimonialCard;
