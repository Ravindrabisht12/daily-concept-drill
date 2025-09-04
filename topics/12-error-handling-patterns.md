
# Error Handling Patterns

## Overview
Error handling is the process of responding to and recovering from errors in your code.

## Common Patterns
- **try/catch**: Handle exceptions in synchronous code
- **try/catch/finally**: Run cleanup code after try/catch
- **Error objects**: Create custom errors
- **Graceful fallback**: Provide default values or alternative logic
- **Retry logic**: Attempt failed operations again

## Examples
```js
try {
  throw new Error("Oops!");
} catch (e) {
  console.error(e.message);
} finally {
  console.log("Cleanup");
}

// Custom error
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

// Retry logic
function fetchWithRetry(url, retries = 3) {
  return fetch(url).catch(err => {
    if (retries > 0) return fetchWithRetry(url, retries - 1);
    throw err;
  });
}
```

## Explanation
- Use try/catch for synchronous errors.
- Use custom error classes for specific error types.
- Implement retry logic for robustness in async code.

## Further Reading
- [MDN Web Docs: Error Handling](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)
- [JavaScript Errors - W3Schools](https://www.w3schools.com/js/js_errors.asp)
