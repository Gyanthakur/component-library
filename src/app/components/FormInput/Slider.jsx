import React, { useState } from "react";

export const Slider = ({ min = 0, max = 100, step = 1, onChange }) => {
  const [value, setValue] = useState((min + max) / 2);

  const handleChange = (e) => {
    setValue(e.target.value);
    if (onChange) onChange(e.target.value);
  };

  return (
    <div style={{ marginBottom: "1rem" }}>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handleChange}
      />
      <p>Value: {value}</p>
    </div>
  );
};
