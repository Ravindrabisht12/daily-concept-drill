
# Control Structures

## Overview
Control structures determine the flow and logic of your program.

## Types of Control Structures
- **Conditional Statements**: `if`, `else`, `else if`, `switch`
- **Loops**: `for`, `while`, `do...while`, `for...of`, `for...in`
- **Jump Statements**: `break`, `continue`, `return`

## Examples
```js
if (age > 18) {
  console.log("Adult");
} else if (age > 12) {
  console.log("Teenager");
} else {
  console.log("Child");
}

switch(day) {
  case "Mon":
    console.log("Monday");
    break;
  case "Tue":
    console.log("Tuesday");
    break;
  default:
    console.log("Other day");
}

for (let i = 0; i < 5; i++) {
  console.log(i);
}

let j = 0;
while (j < 3) {
  console.log(j);
  j++;
}
```

## Explanation
- Use conditionals to make decisions in code.
- Loops repeat code blocks.
- `break` exits loops early, `continue` skips to next iteration.

## Further Reading
- [MDN Web Docs: Control Flow and Error Handling](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)
- [JavaScript Control Structures - W3Schools](https://www.w3schools.com/js/js_if_else.asp)
