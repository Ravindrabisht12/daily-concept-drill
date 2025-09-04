
# Variables and Data Types

## Overview
Variables are containers for storing data values. Data types define the kind of data a variable can hold.

## Types of Variables
- **var**: Function-scoped, can be redeclared and updated. Hoisted to the top of its scope.
- **let**: Block-scoped, can be updated but not redeclared in the same scope. Not hoisted.
- **const**: Block-scoped, cannot be updated or redeclared. Must be initialized at declaration.

## Data Types
- **String**: Textual data (`"Hello"`)
- **Number**: Numeric values (`42`, `3.14`)
- **Boolean**: `true` or `false`
- **Object**: Key-value pairs (`{ name: "Bob" }`)
- **Array**: Ordered list of values (`[1, 2, 3]`)
- **Undefined**: Variable declared but not assigned a value
- **Null**: Explicitly no value
- **Symbol**: Unique and immutable primitive value (ES6)
- **BigInt**: Large integers (ES2020)

## Examples
```js
var city = "Delhi"; // String
let age = 25; // Number
const isActive = true; // Boolean
let user = { name: "Bob" }; // Object
let scores = [10, 20, 30]; // Array
let nothing = undefined; // Undefined
let empty = null; // Null
let id = Symbol("id"); // Symbol
let bigNumber = 12345678901234567890n; // BigInt
```

## Explanation
- Use `let` and `const` for modern JS code. Avoid `var` unless needed for legacy code.
- Strings, numbers, booleans, objects, and arrays are most common types.
- `undefined` and `null` are often used for missing or empty values.
- `Symbol` and `BigInt` are advanced types for special use cases.

## Further Reading
- [MDN Web Docs: JavaScript Data Types and Structures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)
- [JavaScript Variables - W3Schools](https://www.w3schools.com/js/js_variables.asp)
