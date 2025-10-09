import React, { useState } from "react";

export const FileUpload = ({ onFileSelect }) => {
  const [file, setFile] = useState(null);

  const handleFile = (file) => {
    setFile(file);
    if (onFileSelect) onFileSelect(file);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    handleFile(e.dataTransfer.files[0]);
  };

  const handleChange = (e) => {
    handleFile(e.target.files[0]);
  };

  return (
    <div style={{ marginBottom: "1rem" }}>
      <label
        style={{
          display: "block",
          width: "300px",
          height: "100px",
          border: "2px dashed #aaa",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
        }}
      >
        {file ? file.name : "Drag & Drop file or click to upload"}
        <input
          type="file"
          style={{ display: "none" }}
          onChange={handleChange}
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
        />
      </label>
    </div>
  );
};
