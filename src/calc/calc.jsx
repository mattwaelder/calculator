import React, { useState } from "react";
import "./styles.css";
import Display from "./display.jsx";
import ButtonsPanel from "./buttons.jsx";
import helpers from "./helpers.js";

const Calculator = () => {
  //states for 1 operator and 2 operands
  const [operandCurr, setOperandCurr] = useState("");
  const [operandPrev, setOperandPrev] = useState("");
  const [operation, setOperation] = useState("");

  //any button pressed
  const handlePress = (e) => {
    let btn = e.target.id;

    //press operand
    if (Number(btn) >= 0 || btn === ".") {
      //if operation is being displayed currently (add it to prev display)
      if ([...operandCurr].some(helpers.findOperation)) {
        setOperation(operandCurr);
        setOperandCurr(btn);
        return;
      } else {
        setOperandCurr((operandCurr) => (operandCurr += btn));
      }
      return;
    }

    //press operator
    if (helpers.operations.includes(btn)) {
      //if operation is being displayed currently (change operation)
      if ([...operandCurr].some(helpers.findOperation)) {
        setOperation(btn);
        setOperandCurr(btn);
        return;
      }

      //if first operation
      if (!operation) {
        let curr = operandCurr;
        setOperandPrev(curr);
        setOperandCurr(btn);
        setOperation(btn);
        return;
      }

      //if previous operand exists (evaluate)
      if (operation) {
        //evaluate the previous operation
        let result = helpers.evaluate(operandPrev, operandCurr, operation);
        // set previous operation to be output of eval
        setOperandPrev(result.toString());
        setOperandCurr(btn);
        setOperation("");
        return;
      }
    }

    //press =
    if (btn === "=") {
      let result = helpers.evaluate(operandPrev, operandCurr, operation);
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
      setOperandCurr(result.toString() || "");
    }

    //press clear all
    if (btn === "C") {
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
