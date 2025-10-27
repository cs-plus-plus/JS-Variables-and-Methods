# Unit 8 – Temperature & Circle Area 

## 🧠 JavaScript Crash Course

Before starting this project, review a few key JavaScript basics.

### `var` vs `let`
| Keyword | Scope | Redeclaration | Typical Use |
|----------|--------|---------------|--------------|
| `var` | Function-scoped | Can be redeclared | Legacy code (older JavaScript) |
| `let` | Block-scoped | Cannot be redeclared in same block | Modern variable declaration |

**Example:**
```javascript
let x = 10;
x = x + 5;   // ✅ works
let x = 7;   // ❌ error: already declared
```

**Quick Tip:** Always use `let` for variables that change, and `const` for values that don’t.

---

### Simple Math in JavaScript
You can use math operators the same way you would on a calculator:

| Operator | Meaning | Example | Result |
|-----------|----------|----------|---------|
| `+` | Addition | `5 + 3` | `8` |
| `-` | Subtraction | `9 - 2` | `7` |
| `*` | Multiplication | `4 * 2` | `8` |
| `/` | Division | `9 / 3` | `3` |
| `**` | Exponent | `2 ** 3` | `8` |
| `%` | Remainder | `10 % 3` | `1` |

---

## 💡 Project Overview
You’ll build a **simple JavaScript page** that uses **`prompt()`** and **`alert()`** for user input and output.  
Students will complete two shell functions:

1. `convertTemp()` — Converts Fahrenheit to Celsius  
2. `circleArea()` — Calculates the area of a circle  

Each function is triggered by a button on the web page.

---

## 🧩 What to Build
You have **two buttons** in `index.html` that call functions in `script.js`:

### Buttons
- “Convert Temperature” → `convertTemp()`
- “Calculate Circle Area” → `circleArea()`

### Functions to Implement
```javascript
function convertTemp() {
  // Prompt: "Enter temperature in Fahrenheit"
  // Convert to Celsius: (fahrenheit - 32) * 5 / 9
  // Alert: "Temperature in Celsius: <value>" (2 decimals)
}

function circleArea() {
  // Prompt: "Enter circle radius"
  // Compute area: Math.PI * radius * radius
  // Alert: "Area of the circle: <value>" (2 decimals)
}
```

### ⚙️ Required Prompt & Alert Text (exact!)
| Function | Prompt Text | Alert Text |
|-----------|--------------|-------------|
| `convertTemp()` | `Enter temperature in Fahrenheit` | `Temperature in Celsius: <value>` |
| `circleArea()` | `Enter circle radius` | `Area of the circle: <value>` |

> The autograder checks for **exact string matches**.  
> Even capitalization matters!

---

## 🧱 File Structure
```
├── index.html
├── script.js
└── .github/
    └── workflows/
        └── classroom.yml
```

---

## 🧪 Autograding (GitHub Classroom)

The tests run automatically via **GitHub Actions** each time you push your code.

- ✅ **Test 1 (50 pts):**  
  `convertTemp()`  
  - Input: `212`  
  - Expected output: `Temperature in Celsius: 100.00`
  - Checks exact prompt text

- ✅ **Test 2 (50 pts):**  
  `circleArea()`  
  - Input: `5`  
  - Expected output: `Area of the circle: 78.54`
  - Checks exact prompt text

### ⚙️ Behind the Scenes
The workflow file in `.github/workflows/classroom.yml`:
- Creates the test configuration dynamically
- Runs Node to simulate `prompt()` and `alert()` in your script
- Reports your **score directly to GitHub Classroom**

---

## 🚀 How to Run Locally

1. Open `index.html` in your browser.  
2. Click **“Convert Temperature”** or **“Calculate Circle Area”**.  
3. Follow the `prompt()`s that appear and verify the results in `alert()` pop-ups.

---

## ✅ Tips for Success
- Use `parseFloat()` to convert text input to numbers.  
- Use `.toFixed(2)` to format decimals properly.  
- Always use the exact prompt/alert wording shown above.  
- Don’t use `console.log()` — this project only uses **`prompt()`** and **`alert()`**.

---

## 🎯 Example Output

### Example 1
```
Prompt: Enter temperature in Fahrenheit
User enters: 212
Alert: Temperature in Celsius: 100.00
```

### Example 2
```
Prompt: Enter circle radius
User enters: 5
Alert: Area of the circle: 78.54
```

---

### 🏁 Goal
When you push your completed `script.js`, GitHub Classroom will automatically:
1. Run both tests  
2. Award up to **100 points**  
3. Sync your results back to your assignment page
