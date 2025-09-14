# Server-Side vs Client-Side Rendering

## What is Server-Side Rendering (SSR)?
SSR means generating the HTML for a web page on the server and sending it to the browser. The browser displays the page immediately, and then JavaScript can add interactivity.

### Pros
- Faster initial load (good for SEO)
- Content is visible to search engines
- Better for static or content-heavy sites

### Cons
- More load on the server
- Slower page updates after initial load

## What is Client-Side Rendering (CSR)?
CSR means the server sends a minimal HTML page and JavaScript code. The browser runs the JS, fetches data, and builds the page dynamically.

### Pros
- Fast page updates and interactivity
- Less server load after initial request
- Good for web apps with lots of user interaction

### Cons
- Slower initial load (bad for SEO)
- Content may not be visible to search engines without extra setup

## When to Use Each
- Use SSR for blogs, news, e-commerce, or SEO-focused sites
- Use CSR for dashboards, single-page apps, or highly interactive tools

## Further Reading
- [MDN Web Docs: Rendering on the Web](https://developer.mozilla.org/en-US/docs/Web/Performance/Rendering_on_the_Web)
- [Server-side rendering vs client-side rendering - freeCodeCamp](https://www.freecodecamp.org/news/server-side-vs-client-side-rendering/)
- [Other](https://dev.to/teyim/a-deep-dive-into-csr-ssr-ssg-and-isr-3513)
