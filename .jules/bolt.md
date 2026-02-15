## 2024-05-24 - [Input Event Optimization]
**Learning:** In vanilla JS apps without a virtual DOM, re-rendering entire lists (via `innerHTML`) on high-frequency events like `input` causes significant layout thrashing.
**Action:** Always decouple calculation logic from rendering logic. Ensure `oninput` handlers only update specific text nodes, not rebuild parent containers.

## 2024-05-25 - [Realtime Data Rendering]
**Learning:** High-frequency Firebase `on('value')` updates can trigger redundant DOM rebuilds when multiple data sources update simultaneously (e.g., initial load or burst updates).
**Action:** Wrap expensive render functions in `debounceRAF` to batch updates into a single animation frame, especially when dependent on multiple global state variables.
