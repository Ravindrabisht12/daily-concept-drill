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