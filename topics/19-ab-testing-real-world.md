
# AB Testing & Real World Uses

## Overview
AB testing is a method of comparing two versions of a web page or feature to determine which performs better. JavaScript is often used to implement and measure AB tests.

## Common Use Cases
- Wait for elements to appear before running test code
- Use MutationObserver for dynamic content
- Integrate with analytics tools to track user behavior
- Simulate user interactions (clicks, form fills)
- Validate experiment variants

## Examples
```js
// Wait for element
function waitForElement(selector, callback) {
  const interval = setInterval(() => {
    const el = document.querySelector(selector);
    if (el) {
      clearInterval(interval);
      callback(el);
    }
  }, 100);
}

// MutationObserver
const observer = new MutationObserver((mutations) => {
  mutations.forEach(mutation => {
    if (mutation.addedNodes.length) {
      console.log('Node added:', mutation.addedNodes[0]);
    }
  });
});
observer.observe(document.body, { childList: true, subtree: true });

// Simulate click
document.querySelector('#myBtn').click();
```

## Explanation
- Use `waitForElement` to ensure DOM is ready before running test code.
- `MutationObserver` helps detect changes in dynamic apps.
- Simulate user actions to automate tests.

## Further Reading
- [Optimizely: What is A/B Testing?](https://www.optimizely.com/optimization-glossary/ab-testing/)
- [MDN Web Docs: MutationObserver](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver)
