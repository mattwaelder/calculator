const helpers = {
  evaluate: (prev, curr, operation) => {
    switch (operation) {
      case "+": {
        return Number(prev) + Number(curr);
      }
      case "-": {
        return Number(prev) - Number(curr);
      }
      case "×": {
        return Number(prev) * Number(curr);
      }
      case "÷": {
        if (curr === "0") {
          return "easter";
        }
        return Number(prev) / Number(curr);
      }
      default:
        return curr;
    }
  },

  operations: ["+", "-", "×", "÷"],

  findOperation: (btn) => {
    return helpers.operations.includes(btn);
  },

  buttonList: [
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
  ],
};

export default helpers;
