
# Functions

## Overview
Functions are reusable blocks of code that perform specific tasks.

## Types of Functions
- **Function Declaration**: `function foo() {}`
- **Function Expression**: `const foo = function() {}`
- **Arrow Function**: `const foo = () => {}`
- **Anonymous Function**: Functions without a name
- **Callback Function**: Passed as argument to another function

## Examples
```js
function greet(name) {
  return `Hello, ${name}!`;
}

const add = (a, b) => a + b;

const multiply = function(a, b) {
  return a * b;
};

setTimeout(function() {
  console.log("Delayed!");
}, 1000); // Anonymous callback
```

## Explanation
- Functions can take parameters and return values.
- Arrow functions are concise and do not have their own `this`.
- Use callbacks for async operations.

## Further Reading
- [MDN Web Docs: Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)
- [JavaScript Functions - W3Schools](https://www.w3schools.com/js/js_functions.asp)
