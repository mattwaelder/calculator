import React from "react";
import Button from "./button.jsx";
import "./styles.css";

const ButtonsPanel = () => {
  //listing buttons in a strange way so thati dont need multiple grids
  const buttonList = [
    1,
    2,
    3,
    "+",
    4,
    5,
    6,
    "-",
    7,
    8,
    9,
    "x",
    ".",
    0,
    "=",
    "/",
    "^",
    "del",
    "c",
  ];

  return (
    <div className="buttonPanelContainer">
      {buttonList.map((button, i) => <Button btn={button} />) || null}
    </div>
  );
};

export default ButtonsPanel;
