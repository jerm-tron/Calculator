let num1 = "";
let num2 = "";
let operator = "";

const display = document.querySelector(".display-text");

const clear = document.querySelector(".clear-button");

const equals = document.querySelector(".equals-button");

const operators = document.querySelectorAll(".operator-button");

const numberButtons = document.querySelectorAll(".calculator-button");

numberButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    clickedNumber(e.target.textContent);
  });
});

function clickedNumber(number) {
  console.log(number);
}

