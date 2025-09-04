
# Testing in JavaScript

## Overview
Testing ensures your code works as expected and helps prevent bugs.

## Types of Tests
- **Unit Tests**: Test individual functions/components
- **Integration Tests**: Test how components work together
- **End-to-End (E2E) Tests**: Test the whole application as a user would

## Tools
- **Assertions**: `console.assert`, `assert` module
- **Frameworks**: Jest, Mocha, Jasmine, Cypress

## Examples
```js
// Simple assertion
function add(a, b) { return a + b; }
console.assert(add(2, 3) === 5, "Test failed");

// Jest example
// test.js
test('adds numbers', () => {
	expect(add(2, 3)).toBe(5);
});
```

## Explanation
- Use assertions for quick checks.
- Use frameworks for robust, automated testing.
- Write tests for both expected and unexpected inputs.

## Further Reading
- [MDN Web Docs: Testing](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Testing)
- [JavaScript Testing - W3Schools](https://www.w3schools.com/js/js_testing.asp)
