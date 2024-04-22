const resultEl = document.querySelector("#result");
const formEl = document.querySelector("form");

formEl.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("Form submitted");
  const height = parseFloat(document.querySelector("#height").value);
  const weight = parseFloat(document.querySelector("#weight").value);

  if (height === "" || height <= 0 || isNaN(height)) {
    resultEl.textContent = `Please enter valid height: ${height}`;
  } else if (weight === "" || weight <= 0 || isNaN(weight)) {
    resultEl.textContent = `Please enter valid weight: ${weight}`;
  } else {
    const bmi = weight / ((height * height) / 10000);
    if (bmi < 18.5) {
      resultEl.textContent = `Your BMI is: ${bmi.toFixed(2)} (Underweight)`;
    } else if (bmi >= 18.5 && bmi < 24.9) {
      resultEl.textContent = `Your BMI is: ${bmi.toFixed(2)} (Normal)`;
    } else if (bmi >= 25 && bmi < 29.9) {
      resultEl.textContent = `Your BMI is: ${bmi.toFixed(2)} (Overweight)`;
    } else {
      resultEl.textContent = `Your BMI is: ${bmi.toFixed(2)} (Obese)`;
    }
  }
});
