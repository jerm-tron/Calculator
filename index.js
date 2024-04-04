let num1 = "";
let num2 = "";
let operator = "";

const display = document.querySelector(".display-text");

const clear = document.querySelector(".clear-button");
clear.addEventListener("click", clearDisplay);

const equals = document.querySelector(".equals-button");
equals.addEventListener("click", calculate);

const operators = document.querySelectorAll(".operator-button");

const numberButtons = document.querySelectorAll(".calculator-button");

numberButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    clickedNumber(e.target.innerText);
  });
});

function clickedNumber(number) {
  if (num1.length <= 11 && !operator) {
    num1 += number;
    updateDisplay();
  } else if (num2.length <= 11) {
    num2 += number;
    updateDisplay();
  }
}

operators.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    clickedOperator(e.target.innerText);
  });
});

function clickedOperator(op) {
  operator = op;
  updateDisplay();
}

function updateDisplay() {
  display.innerText = num1 + " " + operator + " " + num2;
}

function calculate() {
  num1 = Number(num1);
  num2 = Number(num2);
  if (operator == "+") {
    num1 = num1 + num2;
    num2 = "";
    operator = "";
  } else if (operator == "-") {
    num1 = num1 - num2;
    num2 = "";
    operator = "";
  } else if (operator == "*") {
    num1 = num1 * num2;
    num2 = "";
    operator = "";
  } else if (operator == "/") {
    if (num2 == 0) {
      num1 = "You know damn wellllll!";
    } else {
      num1 = num1 / num2;
    }
    num2 = "";
    operator = "";
  }
  updateDisplay();
}

function clearDisplay() {
  num1 = "";
  num2 = "";
  operator = "";
  updateDisplay();
}
