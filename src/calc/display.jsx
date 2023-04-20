import React from "react";

const Display = ({ curr, prev, operation }) => {
  return (
    <>
      <div className="calcDisplayTop">{`${prev} ${operation}`}</div>
      <div className="calcDisplay">{`${curr}`}</div>
    </>
  );
};

export default Display;
