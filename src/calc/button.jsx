import React from "react";

const Button = ({ btn, handlePress, big }) => {
  return (
    <div
      className={`${big ? "calcButtonBig" : "calcButton"}`}
      id={`${btn}`}
      onClick={handlePress}
    >{`${btn}`}</div>
  );
};

export default Button;
