import React from "react";
import Button from "./button.jsx";
import "./styles.css";

const ButtonsPanel = ({ handlePress }) => {
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
    "×",
    ".",
    0,
    "del",
    "÷",
    "C",
    "=",
  ];

  return (
    <div className="buttonPanelContainer">
      {buttonList.map((button, i) => (
        <Button
          btn={button}
          handlePress={handlePress}
          key={button}
          big={button === "=" || button === "C" ? true : false}
        />
      ))}
    </div>
  );
};

export default ButtonsPanel;
