import React from "react";
import "./styles.css";
import Display from "./display.jsx";
import ButtonsPanel from "./buttons.jsx";

const Calculator = () => {
  return (
    <div className="calcBody">
      <Display />
      <ButtonsPanel />
    </div>
  );
};

export default Calculator;

// a calculator application
/*

screen
  screen shows accumulation of imputs
  screen refreshes with answer once = is pressed

buttons
  0-9 + - x / ^ = del . c

*/
