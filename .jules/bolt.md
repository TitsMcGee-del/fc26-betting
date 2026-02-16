## 2024-05-24 - [Input Event Optimization]
**Learning:** In vanilla JS apps without a virtual DOM, re-rendering entire lists (via `innerHTML`) on high-frequency events like `input` causes significant layout thrashing.
**Action:** Always decouple calculation logic from rendering logic. Ensure `oninput` handlers only update specific text nodes, not rebuild parent containers.

## 2024-05-26 - [Debounced Rendering]
**Learning:** In Firebase `on('value')` listeners, decoupling data updates from UI rendering using `requestAnimationFrame` prevents layout thrashing during rapid updates.
**Action:** Always wrap heavy render calls in a `debounceRAF` utility when responding to real-time data streams.
