
# Operators

## Overview
Operators are symbols that perform operations on operands (variables and values).

## Types of Operators
- **Arithmetic Operators**: `+`, `-`, `*`, `/`, `%`, `++`, `--`
- **Assignment Operators**: `=`, `+=`, `-=`, `*=`, `/=`, `%=`
- **Comparison Operators**: `==`, `===`, `!=`, `!==`, `>`, `<`, `>=`, `<=`
- **Logical Operators**: `&&`, `||`, `!`
- **Bitwise Operators**: `&`, `|`, `^`, `~`, `<<`, `>>`, `>>>`
- **String Operators**: `+` (concatenation)
- **Conditional (Ternary) Operator**: `condition ? expr1 : expr2`

## Examples
```js
let sum = 2 + 3; // Arithmetic
let product = 4 * 5;
let counter = 0;
counter++;
let name = "Alice" + " " + "Smith"; // String concatenation
let isEqual = (5 === 5); // Comparison
let isTrue = true && false; // Logical
let max = (a > b) ? a : b; // Ternary
let bit = 5 & 1; // Bitwise
```

## Explanation
- Arithmetic operators are used for math operations.
- Assignment operators assign values to variables.
- Comparison operators compare two values and return a boolean.
- Logical operators combine or invert boolean values.
- Bitwise operators work on binary representations.
- Ternary operator is a shortcut for `if-else`.

## Further Reading
- [MDN Web Docs: Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators)
- [JavaScript Operators - W3Schools](https://www.w3schools.com/js/js_operators.asp)
