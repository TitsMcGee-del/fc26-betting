## 2024-05-24 - [Input Event Optimization]
**Learning:** In vanilla JS apps without a virtual DOM, re-rendering entire lists (via `innerHTML`) on high-frequency events like `input` causes significant layout thrashing.
**Action:** Always decouple calculation logic from rendering logic. Ensure `oninput` handlers only update specific text nodes, not rebuild parent containers.

## 2024-05-25 - [Firebase Listener Optimization]
**Learning:** Firebase `on('value')` listeners trigger synchronously on every data update. Without debouncing, high-frequency updates (e.g., initial load or batch updates) cause repeated, expensive full DOM re-renders.
**Action:** Always wrap heavy rendering calls in Firebase listeners with `requestAnimationFrame` debouncing (using a `debounceRAF` utility) to batch updates into a single render per frame.
