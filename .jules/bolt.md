## 2024-05-24 - [Input Event Optimization]
**Learning:** In vanilla JS apps without a virtual DOM, re-rendering entire lists (via `innerHTML`) on high-frequency events like `input` causes significant layout thrashing.
**Action:** Always decouple calculation logic from rendering logic. Ensure `oninput` handlers only update specific text nodes, not rebuild parent containers.

## 2026-02-03 - [Realtime Database Rendering Optimization]
**Learning:** Firebase `on('value')` listeners can fire frequently. Direct DOM manipulation inside these listeners causes layout thrashing and freezes the main thread.
**Action:** Wrap heavy render functions with `requestAnimationFrame` debouncing to batch updates into a single frame, ensuring 60fps performance.
