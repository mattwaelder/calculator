import React from "react";
import Button from "./button.jsx";
import helpers from "./helpers.js";
import "./styles.css";

const ButtonsPanel = ({ handlePress }) => {
  //all buttons in an arr in helpers file

  return (
    <div className="buttonPanelContainer">
      {helpers.buttonList.map((button, i) => (
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
