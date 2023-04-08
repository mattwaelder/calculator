import React from "react";

const Button = ({ btn, handlePress }) => {
  return (
    <div
      className="calcButton"
      id={`${btn}`}
      onClick={handlePress}
    >{`${btn}`}</div>
  );
};

export default Button;
