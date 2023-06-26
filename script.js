// JavaScript functions for calculator operations
function appendNumber(number) {
  console.log("appendNumber: " + number);
  document.getElementById("display").value += number;
}

function appendOperator(operator) {
  document.getElementById("display").value += operator;
}

function calculate() {
  var expression = document.getElementById("display").value;
  var result = eval(expression);
  document.getElementById("display").value = result;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

// Prevent form submission
document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission
  var form = document.getElementById("myForm");
  form.reset(); // Reset form fields
});
