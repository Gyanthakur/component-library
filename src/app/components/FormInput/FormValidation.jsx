import React, { useState } from "react";

export const FormValidation = ({ minLength = 3, onSubmit }) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim() === "") {
      setError("Field cannot be empty");
    } else if (value.length < minLength) {
      setError(`Minimum ${minLength} characters required`);
    } else {
      setError("");
      if (onSubmit) onSubmit(value);
      alert("Form submitted: " + value);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "1rem" }}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        style={{ padding: "0.5rem", marginRight: "0.5rem" }}
        placeholder="Enter text"
      />
      <button type="submit">Submit</button>
      {error && <p style={{ color: "red", marginTop: "0.5rem" }}>{error}</p>}
    </form>
  );
};
