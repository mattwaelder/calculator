import React from "react";
import Button from "./button.jsx";

const ButtonsPanel = () => {
  const buttonList = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    ".",
    "+",
    "-",
    "x",
    "/",
    "^",
    "del",
    "c",
  ];

  return (
    <div>
      <h1>buttons</h1>
      {buttonList.map((button, i) => <Button btn={button} />) || null}
    </div>
  );
};

export default ButtonsPanel;
