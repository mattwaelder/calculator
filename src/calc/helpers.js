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
    return this.operations.includes(btn);
  },
};

export default helpers;
