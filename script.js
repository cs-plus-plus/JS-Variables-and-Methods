// script.js
// Unit 8 – Alerts + Prompts (Final version, no exports)

function convertTemp() {
  // Ask for temperature in Fahrenheit
  const fStr = prompt("Enter temperature in Fahrenheit");
  const fVal = parseFloat(fStr);

  // Convert to Celsius
  const cVal = (fVal - 32) * 5 / 9;

  // Display result rounded to two decimals
  alert("Temperature in Celsius: " + cVal.toFixed(2));
}

function circleArea() {
  // Ask for circle radius
  const rStr = prompt("Enter circle radius");
  const rVal = parseFloat(rStr);

  // Calculate area
  const area = Math.PI * rVal * rVal;

  // Display result rounded to two decimals
  alert("Area of the circle: " + area.toFixed(2));
}
