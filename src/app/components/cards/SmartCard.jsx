import React from 'react';
import PropTypes from 'prop-types';

export default function SmartCard({
  title,
  description,
  imageSrc,
  footer,
  className = "",
  onClick,
}) {
  return (
    <div
      onClick={onClick}
      className={`
        bg-gradient-to-r from-blue-400 to-indigo-500 dark:from-blue-600 dark:to-indigo-700
        rounded-xl shadow-md hover:shadow-lg transition-all duration-300
        overflow-hidden cursor-pointer transform hover:scale-105
        text-white
        ${className}
      `}
    >
      {imageSrc && (
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-4">
        {title && <h3 className="text-lg font-semibold">{title}</h3>}
        {description && <p className="mt-2 text-sm">{description}</p>}
      </div>
      {footer && <div className="p-4 border-t border-white/30">{footer}</div>}
    </div>
  );
}

SmartCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  imageSrc: PropTypes.string,
  footer: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func,
};
