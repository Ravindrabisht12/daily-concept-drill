
# ES6+ Features

## Overview
ES6 (ECMAScript 2015) and later versions introduced many new features for writing cleaner, more powerful JavaScript.

## Key Features
- **let & const**: Block-scoped variable declarations
- **Arrow Functions**: Shorter function syntax
- **Template Literals**: String interpolation with backticks
- **Destructuring**: Unpack values from arrays/objects
- **Default Parameters**: Set default values for function parameters
- **Rest/Spread Operators**: `...` for variable arguments or copying
- **Classes**: Cleaner syntax for prototypes/inheritance
- **Modules**: `import`/`export` syntax
- **Promises**: Native support for async code

## Examples
```js
// let & const
let a = 1;
const b = 2;

// Arrow function
const add = (a, b) => a + b;

// Template literals
let name = "Alice";
console.log(`Hello, ${name}!`);

// Destructuring
const [x, y] = [1, 2];
const { age } = { age: 30 };

// Default parameters
function greet(msg = "Hi") { console.log(msg); }

// Rest/Spread
function sum(...nums) { return nums.reduce((a, b) => a + b, 0); }
let arr = [1, 2];
let arr2 = [...arr, 3];

// Classes
class Person {
  constructor(name) {
    this.name = name;
  }
}

// Promises
let p = new Promise((resolve) => resolve(42));
p.then(console.log);
```

## Explanation
- Use ES6+ features for modern, maintainable code.
- Many features simplify common patterns and improve readability.

## Further Reading
- [MDN Web Docs: ES6 Features](https://developer.mozilla.org/en-US/docs/Web/JavaScript/New_in_JavaScript/ECMAScript_2015_support_in_Mozilla)
- [JavaScript ES6 - W3Schools](https://www.w3schools.com/js/js_es6.asp)
