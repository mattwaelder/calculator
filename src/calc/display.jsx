import React from "react";

const Display = ({ display, displayTop }) => {
  return (
    <>
      <div className="calcDisplayTop">{`${displayTop}`}</div>
      <div className="calcDisplay">{`${display}`}</div>
    </>
  );
};

export default Display;
