# Event Handling

## Overview
Respond to user actions and browser events.

## Examples
```js
document.getElementById("btn").addEventListener("click", function() {
  alert("Clicked!");
});
```

## Explanation

# Event Handling

## Overview
Event handling is the process of responding to user actions (clicks, keypresses, etc.) or browser events (load, resize, etc.).

## Common Events
- Mouse events: `click`, `dblclick`, `mouseover`, `mouseout`
- Keyboard events: `keydown`, `keyup`, `keypress`
- Form events: `submit`, `change`, `input`
- Window events: `load`, `resize`, `scroll`

## Examples
```js
// Basic event listener
document.getElementById("btn").addEventListener("click", function() {
  alert("Clicked!");
});

// Remove event listener
function handler() { alert("Hi"); }
const el = document.getElementById("btn");
el.addEventListener("mouseover", handler);
el.removeEventListener("mouseover", handler);

// Event delegation
document.getElementById("list").addEventListener("click", function(e) {
  if (e.target.tagName === "LI") {
    alert("List item clicked: " + e.target.textContent);
  }
});
```

## Explanation
- Add or remove event listeners to respond to user actions.
- Use event delegation for dynamic or large lists of elements.

## Further Reading
- [MDN Web Docs: Introduction to events](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events)
- [JavaScript Events - W3Schools](https://www.w3schools.com/js/js_events.asp)
