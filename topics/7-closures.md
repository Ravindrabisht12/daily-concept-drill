
# Closures

## Overview
A closure is a function that retains access to its outer (enclosing) scope, even after that scope has finished executing.

## Why Use Closures?
- Data privacy (encapsulation)
- Factory functions
- Event handlers and callbacks

## Examples
```js
function makeCounter() {
  let count = 0;
  return function() {
    count++;
    return count;
  };
}
const counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2

// Example: private variable
function secretHolder(secret) {
  return {
    getSecret: function() { return secret; }
  };
}
const holder = secretHolder('JS Rocks');
console.log(holder.getSecret()); // 'JS Rocks'
```

## Explanation
- Closures allow functions to "remember" variables from their parent scope.
- Useful for creating private variables and functions.

## Further Reading
- [MDN Web Docs: Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
- [JavaScript Closures - W3Schools](https://www.w3schools.com/js/js_function_closures.asp)
