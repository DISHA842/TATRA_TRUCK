import React from "react";

function Button(props) {
  const buttonStyles = {
    display: "inline-block",
    backgroundColor: "#87CEEB",
    color: "#000000",
    fontWeight: "bold",
    padding: "0.5rem 1rem",
    borderRadius: "0.5rem",
    cursor: "pointer",
    margin: "10px",
    fontSize: "1.5rem"
  };

  return (
    <a href={props.hlink}>
      <button style={buttonStyles} data-text={props.text}>
        {" "}
        {props.text}{" "}
      </button>
    </a>
  );
}

export default Button;
