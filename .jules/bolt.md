## 2024-05-24 - [Input Event Optimization]
**Learning:** In vanilla JS apps without a virtual DOM, re-rendering entire lists (via `innerHTML`) on high-frequency events like `input` causes significant layout thrashing.
**Action:** Always decouple calculation logic from rendering logic. Ensure `oninput` handlers only update specific text nodes, not rebuild parent containers.

## 2024-05-24 - [Firebase Listener Debouncing]
**Learning:** High-frequency Firebase `on('value')` listeners trigger synchronous layout thrashing when directly calling render functions, especially for large datasets like `matches`.
**Action:** Decouple data ingestion from rendering. Update global state synchronously inside the listener, but wrap the render call in a `debounceRAF` utility to coalesce multiple updates into a single frame render.
