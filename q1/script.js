// script.js
function calculate() {
  let firstNumber = parseFloat(document.getElementById("n1").value);
  let secondNumber = parseFloat(document.getElementById("n2").value);
  let operator = document.getElementById("operator").value;
  let result = document.getElementById("result");

  if (operator === "+") {
    result.value = addition(firstNumber, secondNumber);
  } else if (operator === "-") {
    result.value = subtraction(firstNumber, secondNumber);
  } else if (operator === "*") {
    result.value = multiplication(firstNumber, secondNumber);
  } else if (operator === "/") {
    if (secondNumber !== 0) {
      result.value = division(firstNumber, secondNumber);
    } else {
      result.value = "Cannot divide by zero";
    }
  }
}

let addition = (firstNumber, secondNumber) => {
  return firstNumber + secondNumber;
};

let subtraction = (firstNumber, secondNumber) => {
  return firstNumber - secondNumber;
};

let multiplication = (firstNumber, secondNumber) => {
  return firstNumber * secondNumber;
};

let division = (firstNumber, secondNumber) => {
  return firstNumber / secondNumber;
};
