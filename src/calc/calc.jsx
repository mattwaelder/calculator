import React, { useState } from "react";
import "./styles.css";
import Display from "./display.jsx";
import ButtonsPanel from "./buttons.jsx";

const Calculator = () => {
  const [operandCurr, setOperandCurr] = useState("");
  const [operandPrev, setOperandPrev] = useState("");
  const [operation, setOperation] = useState("");

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
    if (Number(btn) >= 0) {
      console.log("Number pressed");
      //if operation is being displayed currently (add it to prev display)
      if ([...operandCurr].some(findOperation)) {
        console.log("btn when operation on screen");
        setOperation(operandCurr);
        setOperandPrev((operandPrev) => operandPrev + operation);
        setOperandCurr(btn);
        return;
      } else {
        console.log("add");
        setOperandCurr((operandCurr) => (operandCurr += btn));
      }

      // setOperandCurr((operandCurr) => operandCurr);
    }

    //press operator
    if (operations.includes(btn)) {
      //if operation is being displayed currently (change operation)
      if ([...operandCurr].some(findOperation)) {
        console.log("operator already displayed");
        setOperation(btn);
        setOperandCurr(btn);
        return;
      }

      //if first operation
      if (!operation) {
        console.log("FIRST TIME", operandCurr);
        let curr = operandCurr;
        console.log(curr);
        setOperandPrev(curr);
        setOperandCurr(btn);
        // setOperation(btn);
        return;
      }

      //if previous operand exists (evaluate)
      if (operation) {
        console.log("NOT FIRST");
        //evaluate the previous operation
        // set previous operation to be output of eval
        let result = evaluate(operandPrev, operandCurr, operation);
        console.log("eval: ", result);
        //set current operation to pressed operator
        setOperandPrev(result);
        setOperandCurr("");
        setOperation(btn);
        return;
      }
      // console.log("set operation");
      // setOperation(btn);
      // setOperandPrev(operandCurr);
      // setOperandCurr(btn);
    }

    //press =
    if (btn === "=") {
      console.log({
        operandCurr: operandCurr,
        operandPrev: operandPrev,
        operation: operation,
      });
      let result = evaluate(operandPrev, operandCurr, operation);
      setOperandPrev("");
      setOperation("");
      setOperandCurr(result);
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

*/
