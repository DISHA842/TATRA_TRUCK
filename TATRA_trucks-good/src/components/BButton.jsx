import React from 'react'

export const BButton = ({ setModal, text }) => {
  const buttonStyles = {
    display: "inline-block",
    backgroundColor: "#87CEEB",
    color: "#000000",
    fontWeight: "bold",
    padding: "0.5rem 1rem",
    borderRadius: "0.5rem",
    cursor: "pointer",
    margin: "10px",
  };

  return (
    <button style={buttonStyles} onClick={() => setModal(true)} data-text={text}>
      {text}
    </button>
  );
};

export default BButton;
