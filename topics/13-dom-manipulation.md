
# DOM Manipulation

## Overview
DOM (Document Object Model) manipulation means interacting with and changing the structure, content, or style of a web page using JavaScript.

## Common Operations
- Selecting elements: `getElementById`, `querySelector`, etc.
- Changing content: `textContent`, `innerHTML`
- Modifying styles: `style` property
- Creating/removing elements: `createElement`, `removeChild`

## Examples
```js
// Select and change text
document.getElementById("demo").textContent = "Hello!";

// Change style
document.querySelector("#demo").style.color = "red";

// Create and append element
const p = document.createElement("p");
p.textContent = "New paragraph!";
document.body.appendChild(p);
```

## Explanation
- Use selectors to find elements.
- Change content, styles, and attributes dynamically.
- Create, move, or remove elements as needed.

## Further Reading
- [MDN Web Docs: Introduction to the DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)
- [JavaScript HTML DOM - W3Schools](https://www.w3schools.com/js/js_htmldom.asp)
