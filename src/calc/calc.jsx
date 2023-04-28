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

    //splitting prev and curr to account for decimals
    let [prevNum, prevDec] = prev.split(".");
    let [currNum, currDec] = curr.split(".");
    console.log(prevNum, prevDec);
    console.log(currNum, currDec);

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
        if (curr === "0") {
          return "easter";
        }
        return Number(prev) / Number(curr);
      }
      default:
        return curr;
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
    if (Number(btn) >= 0 || btn === ".") {
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
      let result = evaluate(operandPrev, operandCurr, operation);
      let decimal = result.toString().split(".")[1];

      //accounting for floating point issues within js
      //8.2 - 0.2 = 7.999999999999
      //8.3 - 0.1 = 8.1000000000001
      if (decimal && decimal.length > 5) {
        let roundedResult = result.toFixed(1);
        let roundedResultDecimal = roundedResult.split(".")[1];

        setOperandPrev("");
        setOperation("");
        //if the decimal is 0, remove it, otherwise round to 1 place
        setOperandCurr(
          roundedResultDecimal === "0" ? Math.round(result) : result.toFixed(2)
        );
        return;
      }

      //easter egg
      if (result === "easter") {
        setOperandPrev("");
        setOperation("");
        setOperandCurr("ಠ_ಠ");
        return;
      }

      setOperandPrev("");
      setOperation("");
      console.log(result);
      setOperandCurr(result.toString() || "");
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
