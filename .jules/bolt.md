## 2024-05-24 - [Input Event Optimization]
**Learning:** In vanilla JS apps without a virtual DOM, re-rendering entire lists (via `innerHTML`) on high-frequency events like `input` causes significant layout thrashing.
**Action:** Always decouple calculation logic from rendering logic. Ensure `oninput` handlers only update specific text nodes, not rebuild parent containers.

## 2024-05-25 - [Real-time Render Batching]
**Learning:** When using Firebase `on('value')` listeners in a vanilla JS app, rapid data updates can trigger synchronous `innerHTML` rebuilds multiple times per frame, locking the UI.
**Action:** Wrap expensive render functions with a `requestAnimationFrame` debouncer to ensure DOM updates happen at most once per frame using the latest data.
