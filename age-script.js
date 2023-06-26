var daySelect = document.getElementById("birth-day");
// to-day

const toDaySelect = document.getElementById("target-day");

// Add event listener to the "Year" input fields
document
  .getElementById("target-year")
  .addEventListener("input", handleYearInput);
document
  .getElementById("birth-year")
  .addEventListener("input", handleYearInput);

// result-sticker

// Function to generate day options
function generateDayOptions() {
  for (var i = 1; i <= 31; i++) {
    var option = document.createElement("option");
    option.text = i;
    option.value = i;
    daySelect.appendChild(option);
  }
}

// Function to generate to-day options
function generateToDayOptions() {
  var today = new Date(); // Get today's date
  var currentDay = today.getDate(); // Get the current day

  for (let i = 1; i <= 31; i++) {
    var option = document.createElement("option");
    option.text = i;
    option.value = i;
    if (i === currentDay) {
      option.selected = true; // Set the option as selected
    }
    toDaySelect.appendChild(option);
  }
}

generateToDayOptions();
generateDayOptions();

// Function to handle input in the "Year" fields
function handleYearInput() {
  var yearInput = this;
  var yearValue = yearInput.value;
  var numericValue = parseInt(yearValue);

  if (yearValue.length > 4) {
    // If the entered value has more than 4 digits, set it to zero
    yearInput.value = "0000";
  } else if (!isNaN(numericValue) && yearValue !== "0000") {
    // If the entered value is a valid number and not "0000", update the numeric value
    yearInput.value = numericValue;
  } else {
    // For any other invalid input, set it to empty
    yearInput.value = "";
  }
}

// calculate age
function calculateAge() {
  // Get input values
  var birthMonth = parseInt(document.getElementById("birth-month").value);
  var birthDay = parseInt(document.getElementById("birth-day").value);
  var birthYear = parseInt(document.getElementById("birth-year").value);
  var targetMonth = parseInt(document.getElementById("target-month").value);
  var targetDay = parseInt(document.getElementById("target-day").value);
  var targetYear = parseInt(document.getElementById("target-year").value);

  // Calculate age
  var currentDate = new Date();
  var birthDate = new Date(birthYear, birthMonth - 1, birthDay);
  var targetDate = new Date(targetYear, targetMonth - 1, targetDay);

  var ageInMilliseconds = currentDate - birthDate;
  var ageInSeconds = Math.floor(ageInMilliseconds / 1000);
  var ageInMinutes = Math.floor(ageInSeconds / 60);
  var ageInHours = Math.floor(ageInMinutes / 60);
  var ageInDays = Math.floor(ageInHours / 24);
  var ageInWeeks = Math.floor(ageInDays / 7);
  var ageInMonths =
    (currentDate.getFullYear() - birthDate.getFullYear()) * 12 +
    currentDate.getMonth() -
    birthDate.getMonth();
  var ageInYears = Math.floor(ageInMonths / 12);

  // Update result text
  var resultElement = document.getElementById("result");
  resultElement.innerHTML = `Age:<br>
    ${ageInYears} years ${ageInMonths % 12} months ${ageInDays % 30} days<br>
    or ${ageInMonths} months ${ageInDays % 30} days<br>
    or ${ageInWeeks} weeks ${ageInDays % 7} days<br>
    or ${ageInDays} days<br>
    or ${ageInHours} hours<br>
    or ${ageInMinutes} minutes<br>
    or ${ageInSeconds} seconds`;
}
