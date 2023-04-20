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

  const handlePress = (e) => {
    console.log("button pressed", e.target.id);
    console.log("test", operandCurr, typeof operandCurr);
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
        // setOperandPrev((operandPrev) => operandPrev);
        setOperandCurr(btn);
        return;
      } else {
        console.log("add");
        setOperandCurr((operandCurr) => (operandCurr += btn));
      }
      return;
    }

    //press operator
    if (operations.includes(btn)) {
      console.log("111");
      //if operation is being displayed currently (change operation)
      if ([...operandCurr].some(findOperation)) {
        console.log("operator already displayed");
        setOperation(btn);
        setOperandCurr(btn);
        return;
      } else {
        console.log("OI");
      }

      //if first operation
      if (!operation) {
        console.log("222");
        console.log("FIRST TIME", operandCurr);
        let curr = operandCurr;
        console.log(curr);
        setOperandPrev(curr);
        setOperandCurr(btn);
        setOperation(btn);
        return;
      }

      //if previous operand exists (evaluate)
      if (operation) {
        console.log("333");
        console.log("NOT FIRST");
        //evaluate the previous operation
        // set previous operation to be output of eval
        let result = evaluate(operandPrev, operandCurr, operation);
        console.log("eval: ", result);
        //set current operation to pressed operator
        setOperandPrev(result.toString());
        setOperandCurr(btn);
        setOperation("");
        return;
      }
    }

    //press =
    if (btn === "=") {
      console.log(operandCurr, typeof operandCurr);
      let result = evaluate(operandPrev, operandCurr, operation);
      setOperandPrev("");
      setOperation("");
      setOperandCurr(result.toString());
    }

    //press clear all
    if (btn === "c") {
      setOperandCurr("");
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

  remove pwr
  make it look nicer
  allow for continued calculations even after = is pressed

*/
