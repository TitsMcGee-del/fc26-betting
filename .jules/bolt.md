## 2024-05-24 - [Input Event Optimization]
**Learning:** In vanilla JS apps without a virtual DOM, re-rendering entire lists (via `innerHTML`) on high-frequency events like `input` causes significant layout thrashing.
**Action:** Always decouple calculation logic from rendering logic. Ensure `oninput` handlers only update specific text nodes, not rebuild parent containers.

## 2024-05-25 - [Firebase Listener Optimization]
**Learning:** High-frequency Firebase updates trigger synchronous `innerHTML` rebuilds, freezing the main thread.
**Action:** Decouple data updates (sync) from UI rendering (debounced via `requestAnimationFrame`). Use the `debounceRAF` utility to wrap render calls inside listeners.
