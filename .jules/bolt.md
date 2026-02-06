## 2024-05-24 - [Input Event Optimization]
**Learning:** In vanilla JS apps without a virtual DOM, re-rendering entire lists (via `innerHTML`) on high-frequency events like `input` causes significant layout thrashing.
**Action:** Always decouple calculation logic from rendering logic. Ensure `oninput` handlers only update specific text nodes, not rebuild parent containers.

## 2024-05-25 - [Firebase Listener Debouncing]
**Learning:** Direct coupling of Firebase `on('value')` listeners to DOM rendering functions causes redundant reflows when multiple updates occur in the same frame.
**Action:** Wrap render calls in a `debounceRAF` utility to batch updates into a single Animation Frame.
