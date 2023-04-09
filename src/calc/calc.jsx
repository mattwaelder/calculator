import React, { useState } from "react";
import "./styles.css";
import Display from "./display.jsx";
import ButtonsPanel from "./buttons.jsx";

const Calculator = () => {
  //functions and states
  const [display, setDisplay] = useState("0");
  const [displayTop, setDisplayTop] = useState("");
  //lists for operands and operators to help with order of ops
  const [operands, setOperands] = useState([]);
  const [operators, setOperators] = useState([]);
  //may not need to do that, maybe js can handle it all
  const [problem, setProblem] = useState("");

  const evaluate = (operands, operators) => {};

  const handleSubmit = () => {
    let result = problem;
    result += display;
    setDisplayTop("");
    setDisplay(eval(result));
  };

  const handlePress = (e) => {
    console.log("button pressed", e.target.id);
    let btn = e.target.id;

    //logic
    //operand
    if (btn >= 0 || btn === ".") {
      setDisplay((display) => Number(display + btn));
    }
    //operator
    if (["+", "-", "x", "/", "^"].includes(btn)) {
      console.log("operator");

      let currOperands = operands;
      currOperands.push(display);
      setOperands(currOperands);

      let currOperators = operators;
      currOperators.push(btn);
      setOperators(currOperators);

      let currProblem = problem;
      currProblem += display + btn;
      setProblem(currProblem);
      setDisplayTop(currProblem);
      setDisplay("");
    }
    //execute
    if (btn === "=") {
      // alert(operands, operators);

      let currOperands = operands;
      currOperands.push(display);
      setOperands(currOperands);

      let currProblem = problem;
      currProblem += display;
      setProblem(currProblem);

      handleSubmit();
    }
    //reset
    if (btn === "c") {
      setDisplay("");
      setDisplayTop("");
      setOperands([]);
      setOperators([]);
      setProblem("");
    }
    //backspace
    if (btn === "del") {
      setDisplay((display) => display.slice(0, display.length - 1));
    }
  };

  return (
    <div className="calcBody">
      <Display display={display} displayTop={displayTop} />
      <ButtonsPanel handlePress={handlePress} />
    </div>
  );
};

export default Calculator;

// a calculator application
/*

do i need to use Math() for anything here or can Js handle it all?
i feel like im overcomplicating this


screen has 2 things displayed
top bit is previous number plus the operation
bottom is whats currently being typed up
if user hits another operation the calculator evaluates the top operation when the next operation is pressed and displays the result in place.
1+2 if user hits *
then 1+2 changes to 3


*/
