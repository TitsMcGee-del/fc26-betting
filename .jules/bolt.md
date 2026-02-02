## 2024-05-24 - [Input Event Optimization]
**Learning:** In vanilla JS apps without a virtual DOM, re-rendering entire lists (via `innerHTML`) on high-frequency events like `input` causes significant layout thrashing.
**Action:** Always decouple calculation logic from rendering logic. Ensure `oninput` handlers only update specific text nodes, not rebuild parent containers.

## 2024-05-24 - [Firebase Listener Optimization]
**Learning:** High-frequency Firebase realtime updates can flood the main thread with DOM operations if tied directly to render functions.
**Action:** Wrapped expensive render functions with `debounceRAF` to ensure UI updates only occur once per animation frame, regardless of data frequency.
