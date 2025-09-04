
# Module Systems

## Overview
Modules help organize code, manage dependencies, and avoid polluting the global scope.

## Types of Modules
- **ES Modules (ESM)**: Uses `import` and `export` (modern JS)
- **CommonJS**: Uses `require` and `module.exports` (Node.js)
- **AMD/UMD**: Older browser module systems

## Examples
```js
// ES Module
// math.js
export function add(a, b) { return a + b; }
// main.js
import { add } from './math.js';

// CommonJS
// math.js
module.exports = function(a, b) { return a + b; };
// main.js
const add = require('./math');
```

## Explanation
- ES Modules are standard for browsers and modern JS.
- CommonJS is standard for Node.js.
- Modules keep code organized and reusable.

## Further Reading
- [MDN Web Docs: Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
- [JavaScript Modules - W3Schools](https://www.w3schools.com/js/js_modules.asp)
