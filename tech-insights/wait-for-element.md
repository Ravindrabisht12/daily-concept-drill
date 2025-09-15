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


- Event Handling

1. What is an Event?

An event is any interaction or occurrence in the browser.
Examples:
- User clicks a button
- User types in a text box
- Page loads fully
- Mouse moves over an element
- JavaScript lets you listen for events and react with code → this is called event handling.

2. Anatomy of an Event

Every event has:
1.Target → the element that triggered the event.
2.Type → the kind of event (click, keydown, etc.).
3.Event object → extra info about the event (like mouse position, key pressed, etc.).

Example:
```
document.addEventListener("click", function(event) {
    console.log("Event type:", event.type);       // click
    console.log("Target element:", event.target); // the clicked element
    console.log("X,Y position:", event.clientX, event.clientY);
});
```

3. Ways to Attach Event Handlers
✅ Inline HTML (Not recommended)
```
<button onclick="alert('Clicked!')">Click Me</button>
```
❌ Problems: mixes HTML & JS, hard to maintain.

✅ DOM Property
```
<button id="btn">Click</button>
<script>
document.getElementById("btn").onclick = () => alert("Clicked!");
</script>
```

⚠️ Limitation: Only one handler allowed. If you reassign, old one is lost.


✅ addEventListener (Best Practice)
```
<button id="btn">Click</button>
<script>
const btn = document.getElementById("btn");

btn.addEventListener("click", () => console.log("Handler 1"));
btn.addEventListener("click", () => console.log("Handler 2"));
</script>

```
✔ Multiple handlers allowed
✔ Cleaner separation of concerns
✔ Works with advanced options (capture, once, passive)


🔥 4. Event Object in Detail

Every event passes an event object (e or event).

Example:
```
document.querySelector("input").addEventListener("keydown", function(e) {
    console.log("Key pressed:", e.key); // shows which key
    console.log("Code:", e.code);       // physical key code
    console.log("Ctrl pressed?", e.ctrlKey);
});
```

🔥 5. Event Flow: Capturing vs Bubbling

When you click an element, the event flows in 3 phases:

Capturing phase: from <html> → down to target element

Target phase: actual target is reached

Bubbling phase: bubbles back up from target → <html>
```
Example:
<div id="parent">
  <button id="child">Click Me</button>
</div>

<script>
document.getElementById("parent").addEventListener("click", () => console.log("Parent Bubbling"));
document.getElementById("child").addEventListener("click", () => console.log("Child"));
document.getElementById("parent").addEventListener("click", () => console.log("Parent Capturing"), true);
</script>
```
👉 Output when clicking button:
Parent Capturing
Child
Parent Bubbling

🔥 6. Event Delegation
Instead of adding events to each child, attach it to the parent and check which child triggered it. Saves memory & improves performance.
Example:
```
<ul id="menu">
  <li>Home</li>
  <li>About</li>
  <li>Contact</li>
</ul>

<script>
document.getElementById("menu").addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        console.log("Clicked:", e.target.textContent);
    }
});
</script>

```
✔ Efficient when handling dynamic elements (added later by JS).


🔥 7. Prevent Default & Stop Propagation
Prevent Default-
Stops the default behavior (like form submission, link navigation).
```
document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault(); // stops page reload
    console.log("Form submission stopped!");
});
```
Stop Propagation
Stops event from bubbling to parent.
```
document.querySelector("button").addEventListener("click", function(e) {
    e.stopPropagation();
    console.log("Only button handled");
});
```
🔥 8. Advanced Options in addEventListener
```
element.addEventListener("click", handler, {
    once: true,      // runs only once
    capture: true,   // runs in capturing phase
    passive: true    // hints that handler won’t call preventDefault()
});
```
🔥 9. Real-World Examples
✅ Button click
```
btn.addEventListener("click", () => alert("Button Clicked!"));
```
✅ Detect Enter key in input
```
input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        console.log("You pressed Enter");
    }
});
```
✅ Image hover effect
```
img.addEventListener("mouseover", () => img.style.opacity = "0.5");
img.addEventListener("mouseout", () => img.style.opacity = "1");
```

🔥 10. Best Practices

✔ Use addEventListener, not inline handlers
✔ Use event delegation for dynamic/many elements
✔ Always clean up events (e.g., removeEventListener) when removing elements
✔ Use passive listeners for scroll/touch events for better performance
✔ Don’t overuse stopPropagation unless necessary

