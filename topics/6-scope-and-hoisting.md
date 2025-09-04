
# Scope and Hoisting

## Overview
Scope determines where variables and functions are accessible. Hoisting is JavaScript's default behavior of moving declarations to the top.

## Types of Scope
- **Global Scope**: Accessible everywhere
- **Function Scope**: Accessible within a function
- **Block Scope**: Accessible within `{}` (with `let` and `const`)

## Hoisting
- Variable and function declarations are moved to the top of their scope before code execution.
- Only declarations are hoisted, not initializations.

## Examples
```js
function test() {
  console.log(a); // undefined (hoisted)
  var a = 5;
}

if (true) {
  let b = 10;
  console.log(b); // 10
}
// console.log(b); // Error: b is not defined

console.log(c); // Error: Cannot access 'c' before initialization
let c = 20;
```

## Explanation
- `var` is function-scoped and hoisted.
- `let` and `const` are block-scoped and not hoisted in the same way.
- Hoisting can lead to unexpected bugs if not understood.

## Further Reading
- [MDN Web Docs: Scope](https://developer.mozilla.org/en-US/docs/Glossary/Scope)
- [MDN Web Docs: Hoisting](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting)
