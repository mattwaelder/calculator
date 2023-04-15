import React, { useState } from "react";
import "./styles.css";
import Display from "./display.jsx";
import ButtonsPanel from "./buttons.jsx";

const Calculator = () => {
  const [operandCurr, setOperandCurr] = useState("");
  const [operandPrev, setOperandPrev] = useState("");
  const [operation, setOperation] = useState();

  const evaluate = (prev, curr, operation) => {
    console.log("now evaluating: ", prev, curr, operation);
    switch (operation) {
      case "+": {
        return Number(prev) + Number(curr);
      }
      case "-": {
        return Number(prev) - Number(curr);
      }
      case "x": {
        return Number(prev) * Number(curr);
      }
      case "/": {
        return Number(prev) / Number(curr);
      }
      default:
        return undefined;
    }
  };

  const handleSubmit = () => {};

  const handlePress = (e) => {
    console.log("button pressed", e.target.id);
    let btn = e.target.id;
    const operations = ["+", "-", "x", "/"];
    const findOperation = (btn) => {
      return operations.includes(btn);
    };

    //press operand
    if (btn >= 0) {
      //if operation is being displayed currently (add it to prev display)
      if ([...operandCurr].some(findOperation)) {
        // setOperandPrev((operandPrev) => operandPrev + operation);

        setOperandCurr(btn);
        return;
      }
      setOperandCurr((operandCurr) => (operandCurr += btn));
    }
    //press operator
    if (operations.includes(btn)) {
      //if operation is being displayed currently (change operation)
      if ([...operandCurr].some(findOperation)) {
        setOperandCurr(btn);
        setOperation(btn);
        return;
      }

      //if previous operand exists (evaluate)
      if (operandPrev && operation) {
        //evaluate the previous operation
        // set previous operation to be output of eval
        let result = evaluate(operandPrev, operandCurr, operation);
        console.log("eval: ", result);
        //set current operation to pressed operator
        setOperandPrev(result);
        setOperation(btn);
        return;
      }

      setOperation(btn);
      setOperandPrev(operandCurr);
      setOperandCurr(btn);
    }
    //press =
    if (btn === "=") {
      console.log({
        operandCurr: operandCurr,
        operandPrev: operandPrev,
        operation: operation,
      });
    }
    //press clear all
    if (btn === "c") {
      setOperandCurr("0");
      setOperandPrev("");
      setOperation("");
    }
    //press delete
    if (btn === "del") {
      setOperandCurr((operandCurr) =>
        operandCurr.slice(0, operandCurr.length - 1)
      );
    }
  };

  return (
    <div className="calcBody">
      <Display curr={operandCurr} prev={operandPrev} operation={operation} />
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
