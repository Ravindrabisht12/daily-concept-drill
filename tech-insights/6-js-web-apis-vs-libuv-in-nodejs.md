<span style="color:#0b5fff;font-weight:600">JavaScript</span> (the engine such as V8) implements the language and the call stack. It directly handles:

- Synchronous code on the call stack
- Microtasks (Promise callbacks / queueMicrotask / process.nextTick semantics)

Everything else — timers, file I/O, networking, DOM — is provided by the runtime environment around the engine.

## <span style="color:#037f4c">Web APIs (Browser)</span>

Browsers expose platform APIs that JavaScript running in the page can call. Common examples:

- Timers: <code>setTimeout</code>, <code>setInterval</code>
- DOM: <code>document.querySelector</code>, <code>addEventListener</code>
- Networking: <code>fetch</code>, <code>XMLHttpRequest</code>
- Storage: <code>localStorage</code>, <code>sessionStorage</code>, <code>IndexedDB</code>
- Other: Geolocation, WebSockets, Canvas, WebRTC

How it works (simplified): when you call <code>setTimeout</code> in the browser, the browser's timer subsystem starts the timer. When the timer expires the callback is enqueued in the event (macrotask) queue. The event loop will run that callback once the call stack and microtasks are clear.

## <span style="color:#b36b00">libuv and Node.js</span>

Node.js doesn't embed a browser; instead it uses <a href="https://libuv.org/">libuv</a> (a C library) plus Node's native modules to provide async primitives.

- Timers: <code>setTimeout</code> / <code>setInterval</code> are implemented on top of libuv's timer APIs.
- I/O: <code>fs</code>, <code>http</code>, <code>net</code> modules delegate to libuv. Some operations use libuv's thread pool (e.g. certain filesystem calls) while network I/O is mostly non-blocking on the event loop.
- Queues: Node has the usual microtask queue (Promises), plus a separate <code>process.nextTick</code> queue (runs before other microtasks) and <code>setImmediate</code> (a macrotask that runs after I/O callbacks in the poll phase).

When you call <code>setTimeout</code> in Node: libuv schedules the timer. When it fires, libuv moves the callback into the JavaScript task queue and the event loop will call it when appropriate.

## Small, practical differences

- DOM: only browsers provide it. Node has no DOM.
- File I/O: browsers restrict direct filesystem access; Node provides fs via libuv and native bindings.
- Timers and networking APIs have similar surface-level names (setTimeout, fetch vs http), but the implementations live in different layers (browser C++/JS glue vs libuv + Node native modules).

> Tip: if you want to visually scan this doc, look for the green badge for browser behavior and the amber badge for Node/libuv notes.

## Quick comparison

Feature | Browser (Web APIs) | Node.js (libuv + Node APIs)
---|---:|---
Timers | setTimeout, setInterval (browser timer subsystem) | setTimeout, setInterval (libuv timers)
DOM | Yes (document, window, events) | No
Network | fetch, XHR | http/https/net modules (libuv-backed)
File I/O | Limited (sandboxed) | fs module (libuv thread pool / native bindings)
Microtasks & extra queues | Promise microtasks | Promise microtasks + process.nextTick + setImmediate

## Example (behavioral note)

In Node:

1. process.nextTick callbacks run before Promise microtasks.
2. Promise microtasks run before macrotasks (like setTimeout callbacks).
3. setImmediate typically runs after I/O callbacks in the poll phase; it can be useful to schedule work after I/O.

In the browser, there is no process.nextTick or setImmediate, so ordering relies on Promise microtasks and task queues defined by the browser.

### Short, commented examples

Node (save as <code>node-event-order.js</code> and run with <code>node node-event-order.js</code>):

```js
// node-event-order.js
console.log('start');

process.nextTick(() => console.log('nextTick')); // runs before Promise microtasks

Promise.resolve().then(() => console.log('promise')); // Promise microtask

setTimeout(() => console.log('timeout'), 0); // macrotask (timers)

setImmediate(() => console.log('immediate')); // macrotask (runs after poll phase)

// Typical output (common Node ordering):
// start
// nextTick
// promise
// timeout
// immediate

// Note: ordering between setTimeout(..., 0) and setImmediate can vary depending on timing and whether the code runs inside an I/O callback.
```

Browser (drop into an HTML file or the console):

```html
<!-- browser-order.html -->
<script>
	console.log('start');
	setTimeout(() => console.log('timeout'), 0);
	Promise.resolve().then(() => console.log('promise'));
	// Expected output in most browsers:
	// start
	// promise
	// timeout
</script>
```

## Takeaway

"Web APIs" are the host-provided services that sit around the JS engine. In browsers those services are the browser's Web APIs. In Node.js the comparable layer is libuv together with Node's native modules and bindings. They provide similar capabilities (timers, networking, I/O), but the environment, scheduling details, and available APIs differ.

---

References / further reading:

- libuv: https://libuv.org/
- Node.js Event Loop: https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/
- WHATWG Fetch: https://fetch.spec.whatwg.org/