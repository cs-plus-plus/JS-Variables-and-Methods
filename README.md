# Unit 8 – Temperature and Circle Area Conversion   
### Topics: 8.1 – Variables | 8.2 – Methods

---

## 🧠 Overview

In this project, you will apply your understanding of **variables** and **methods (functions)** in JavaScript to create a small program that performs two tasks:

1. Ask the user for a **temperature in Fahrenheit** and convert it to **Celsius**.  
2. Ask the user for the **radius of a circle** and display its **area**.

You will use **text input fields** in an HTML page to collect values and use `console.log()` to display your results.

---

## 📘 Learning Objectives

By the end of this assignment, you should be able to:
- Declare and initialize **variables** to store user input.
- Use **document.getElementById()** to access text fields in the DOM.
- Apply **arithmetic operators** to perform calculations.
- Define and call **functions (methods)** to organize and reuse code.
- Output results to the console using `console.log()`.

---

## 🧩 Background: Variables and Methods in JavaScript

### Variables
Variables are containers used to store data values. In JavaScript, you can declare variables using `let`, `const`, or `var`.  
- Use `let` when the value can change.  
- Use `const` for values that should not change.  

Example:
```javascript
let tempF = 212;
const PI = 3.14159;
```

### Methods (Functions)
Functions (also called methods when defined inside objects) are reusable blocks of code designed to perform a specific task.  
They are defined using the `function` keyword and called by name.

Example:
```javascript
function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}
```

---

## 🧱 Project Requirements

1. Create an `index.html` file with **two text fields**:
   - `<input id="temp">` for the Fahrenheit temperature  
   - `<input id="radius">` for the circle radius  

2. Create a `script.js` file that:
   - Retrieves both values using `document.getElementById()`.
   - Converts Fahrenheit to Celsius.
   - Calculates the area of a circle using `Math.PI * Math.pow(radius, 2)`.
   - Logs both results using `console.log()`.

---

## 💡 Example Output

```text
Temperature in Celsius: 100
Area of the circle: 78.53981633974483
```

---

## 🧪 Autograding

This assignment includes an autograder configured in `.github/classroom.yml` that:
- Checks if you used the correct element IDs (`temp` and `radius`).
- Verifies that your script logs the correct Celsius and area values.
- Runs tests using **Jest** and **jsdom**.

Make sure your `script.js`:
- Uses `console.log()` for output.
- Does not rename the input IDs.
- Defines your logic inside functions where possible.

---

## ✅ Tips for Success

- Remember that all values from text fields are **strings**. Convert them using `parseFloat()` before doing math.
- Double-check your variable names and function calls for typos.
- Test your program in the browser console before pushing to GitHub.

---

## 📂 File Structure

```
├── index.html
├── script.js
└── .github/
    └── classroom.yml
```

---

## 🧾 Example Starter Code

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Temperature and Circle Area</title>
    <script src="script.js" defer></script>
  </head>
  <body>
    <h1>Unit 8: Variables and Methods</h1>

    <label>Enter temperature (°F):</label>
    <input id="temp" type="text"><br><br>

    <label>Enter radius of circle:</label>
    <input id="radius" type="text"><br><br>

    <button onclick="calculate()">Calculate</button>
  </body>
</html>
```

```javascript
// script.js
function calculate() {
  let tempF = parseFloat(document.getElementById("temp").value);
  let radius = parseFloat(document.getElementById("radius").value);

  let celsius = (tempF - 32) * 5 / 9;
  let area = Math.PI * Math.pow(radius, 2);

  console.log("Temperature in Celsius:", celsius);
  console.log("Area of the circle:", area);
}
```

---

## 🧭 Reflection

After completing the project, answer the following in a brief reflection:
1. What did you learn about using variables in JavaScript?
2. How do functions help make your code more organized and reusable?
3. What debugging steps did you take to ensure your output was correct?

---

**CS++**
**Author:** Kevin Hare  
**Course:** Intro to Programming using JavaScript  
**Unit:** 8 – Variables and Methods
