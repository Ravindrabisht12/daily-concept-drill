
# The Event Loop

## Overview
The event loop is the mechanism that allows JavaScript to perform non-blocking operations, despite being single-threaded.

## How It Works
- Executes code, collects and processes events, and executes queued sub-tasks.
- Handles callbacks from async operations (timers, network requests).

## Examples
```js
console.log("Start");
setTimeout(() => {
  console.log("Timeout");
}, 0);
Promise.resolve().then(() => console.log("Promise"));
console.log("End");
// Output: Start, End, Promise, Timeout
```

## Explanation
- JS is single-threaded but can handle async tasks via the event loop.
- Microtasks (Promises) run before macrotasks (setTimeout).

## Further Reading
- [MDN Web Docs: Event Loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop)
- [JavaScript Event Loop - W3Schools](https://www.w3schools.com/js/js_eventloop.asp)
