
# Asynchronous JavaScript

## Overview
Asynchronous JavaScript allows you to perform tasks (like fetching data) without blocking the main thread.

## Techniques
- **Callbacks**: Functions called after an async operation
- **Promises**: Objects representing future completion/failure
- **async/await**: Syntactic sugar for working with Promises

## Examples
```js
// Callback
setTimeout(() => {
  console.log("Timeout done");
}, 1000);

// Promise
fetch("/api/data")
  .then(res => res.json())
  .then(data => console.log(data));

// async/await
async function getData() {
  const res = await fetch("/api/data");
  const data = await res.json();
  console.log(data);
}
```

## Explanation
- Promises help avoid callback hell.
- async/await makes async code look synchronous and easier to read.

## Further Reading
- [MDN Web Docs: Asynchronous programming](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous)
- [JavaScript Promises - W3Schools](https://www.w3schools.com/js/js_promise.asp)
