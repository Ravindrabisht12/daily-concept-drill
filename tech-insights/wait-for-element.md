# waitForElement in JS/Testing

## What it is
A helper function that waits until an element appears in the DOM before interacting with it.

## Why it's useful
In async apps (SPA, React, etc.), elements may not be immediately available. `waitForElement` prevents flaky tests.

## Example
```js
function waitForLibrary(trigger) {
    var INTERVAL = 50;
    var TIMEOUT = 15000;
    var interval = setInterval(function() {
      if (typeof window["ilHelpers"] != "undefined") {
        clearInterval(interval);
        trigger(window["ilHelpers"]);
      }
    }, INTERVAL);
    setTimeout(function() {
      clearInterval(interval);
    }, TIMEOUT);
}
```
## JavaScript Learning Topics

### Modules (Full Topics)
- DOM Manipulation
- Event Handling
- Asynchronous JavaScript (Promises, async/await)
- Error Handling
- Fetch API & AJAX
- ES6+ Features
- Testing in JavaScript

### Basics
- Variables and Data Types
- Operators
- Control Structures (if, for, while)
- Functions
- Arrays and Objects
- Scope and Hoisting

### Intermediate
- Closures
- Prototypes and Inheritance
- Callbacks
- The Event Loop
- Module Systems (CommonJS, ES Modules)
- Error Handling Patterns

### Real World Uses: AB Testing
- Waiting for elements in DOM for test setup
- Using MutationObserver for dynamic content
- Integrating with analytics tools
- Simulating user interactions
- Validating experiment variants

---
Add more details and examples under each section as you progress.

- DOM Manipulation-:
What is DOM Manipulation?

DOM stands for Document Object Model – it’s the structure of your webpage (HTML turned into a tree of objects).
Manipulation means changing or interacting with that structure using JavaScript.

Common DOM Manipulation Tasks
1. Select Elements

```Example-:
// By ID
const heading = document.getElementById("main-title");

// By class
const items = document.getElementsByClassName("list-item");

// By tag
const paragraphs = document.getElementsByTagName("p");

// Modern way (querySelector)
const firstButton = document.querySelector("button"); // first match
const allButtons = document.querySelectorAll("button"); // all matches

2. Change Content
const heading = document.getElementById("main-title");

// Change text
heading.textContent = "New Title";

// Change HTML
heading.innerHTML = "<span style='color:red;'>New Title</span>";

3. Change Styles
heading.style.color = "blue";
heading.style.fontSize = "24px";

4. Add / Remove Classes
heading.classList.add("highlight");
heading.classList.remove("highlight");
heading.classList.toggle("highlight"); // adds if not present, removes if present

5. Create & Append Elements
const newDiv = document.createElement("div");
newDiv.textContent = "Hello, I’m new!";
document.body.appendChild(newDiv);

6. Remove Elements
newDiv.remove(); // removes element from DOM

7. Event Listeners
const button = document.querySelector("button");

button.addEventListener("click", function() {
  alert("Button was clicked!");
});
```

✅ In short: DOM manipulation is how you make your webpage interactive and dynamic.

Do you want me to also show you best practices (like when to use textContent vs innerHTML, or how to avoid performance issues)?

