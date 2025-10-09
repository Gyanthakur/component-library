import React, { useState } from "react";

export const DatePicker = ({ label = "Select Date", onChange }) => {
  const [date, setDate] = useState("");

  const handleChange = (e) => {
    setDate(e.target.value);
    if (onChange) onChange(e.target.value);
  };

  return (
    <div style={{ marginBottom: "1rem" }}>
      <label>{label}</label>
      <input
        type="date"
        value={date}
        onChange={handleChange}
        style={{ padding: "0.5rem", marginLeft: "0.5rem" }}
      />
      {date && <p>Selected Date: {date}</p>}
    </div>
  );
};
