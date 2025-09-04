
# Callbacks

## Overview
A callback is a function passed as an argument to another function and executed after some operation has completed.

## Why Use Callbacks?
- Handle asynchronous operations (e.g., timers, network requests)
- Event handling

## Examples
```js
function fetchData(callback) {
  setTimeout(() => {
    callback("data loaded");
  }, 1000);
}
fetchData(function(data) {
  console.log(data); // "data loaded"
});

// Array method with callback
[1, 2, 3].forEach(function(item) {
  console.log(item);
});
```

## Callback Hell
Nested callbacks can make code hard to read and maintain. Use Promises or async/await to avoid this.

## Further Reading
- [MDN Web Docs: Callback functions](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function)
- [JavaScript Callbacks - W3Schools](https://www.w3schools.com/js/js_callback.asp)
