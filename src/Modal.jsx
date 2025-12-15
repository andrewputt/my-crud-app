import React from "react";

const modalOverlayStyle = {
  position: "fixed",
  inset: 0,
  backgroundColor: "rgba(0,0,0,0.4)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
};

const modalBoxStyle = {
  backgroundColor: "white",
  padding: "1rem 1.5rem",
  borderRadius: "4px",
  boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
  minWidth: "220px",
};

const modalButtonsRowStyle = {
  marginTop: "1rem",
  display: "flex",
  justifyContent: "space-between",
  gap: "0.5rem",
};

const TextModal = ({ isOpen, id, text, onTextChange, onClose, onUpdate }) => {
  if (!isOpen) return null;

  return (
    <div style={modalOverlayStyle}>
      <div style={modalBoxStyle}>
        <div>
          <div>Text:</div>
          <input value={text} onChange={(e) => onTextChange(e.target.value)} />
        </div>
        <div style={modalButtonsRowStyle}>
          <button onClick={onClose}>Close Me</button>
          <button onClick={() => onUpdate(id, text)}>Update</button>
        </div>
      </div>
    </div>
  );
};

export default TextModal;
