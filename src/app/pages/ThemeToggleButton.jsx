import React from 'react';

const ThemeToggleButton = ({ onClick, isDark }) => {
  return (
    <button
      onClick={onClick}
      style={{
        background: isDark ? '#222' : '#fff',
        color: isDark ? '#fff' : '#222',
        border: '1px solid #ccc',
        borderRadius: '999px',
        padding: '0.5rem 1.5rem',
        fontWeight: 600,
        marginLeft: '1rem',
        boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
        cursor: 'pointer',
        transition: 'all 0.2s',
      }}
      aria-label="Toggle theme"
    >
      {isDark ? '🌙 Dark' : '☀️ Light'}
    </button>
  );
};

export default ThemeToggleButton;
