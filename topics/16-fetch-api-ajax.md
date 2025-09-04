# Fetch API & AJAX

## Overview
Make HTTP requests from JS.

## Examples
```js
fetch("https://api.example.com/data")
  .then(response => response.json())
  .then(data => console.log(data));
```

## Explanation

# Fetch API & AJAX

## Overview
The Fetch API and AJAX are used to make HTTP requests from JavaScript to load or send data without reloading the page.

## Fetch API
- Modern way to make HTTP requests
- Returns Promises

## AJAX (Asynchronous JavaScript and XML)
- Older technique using `XMLHttpRequest`

## Examples
```js
// Fetch API
fetch("https://api.example.com/data")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

// XMLHttpRequest (AJAX)
const xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.example.com/data");
xhr.onload = function() {
  if (xhr.status === 200) {
    console.log(JSON.parse(xhr.responseText));
  }
};
xhr.send();
```

## Explanation
- Use Fetch API for modern web apps.
- Handle errors with `.catch()` or `try/catch` in async functions.

## Further Reading
- [MDN Web Docs: Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [AJAX Introduction - W3Schools](https://www.w3schools.com/js/js_ajax_intro.asp)
