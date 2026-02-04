## 2024-05-24 - [Input Event Optimization]
**Learning:** In vanilla JS apps without a virtual DOM, re-rendering entire lists (via `innerHTML`) on high-frequency events like `input` causes significant layout thrashing.
**Action:** Always decouple calculation logic from rendering logic. Ensure `oninput` handlers only update specific text nodes, not rebuild parent containers.

## 2024-05-25 - [Firebase Listener Debouncing]
**Learning:** Firebase `on('value')` listeners can fire rapidly, especially during initial load or bulk updates. Direct DOM manipulation inside these callbacks causes wasted render cycles and layout thrashing.
**Action:** Wrap rendering functions in a `debounceRAF` utility to batch multiple updates into a single `requestAnimationFrame` cycle.
