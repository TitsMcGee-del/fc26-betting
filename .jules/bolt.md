## 2024-05-24 - [Debounced Rendering Missing]
**Learning:** The codebase documentation or memory implied `debounceRAF` was in use for rendering, but it was completely absent in the actual `index.html`. This led to synchronous rendering of all match updates, a potential bottleneck.
**Action:** Always verify the existence of "known" utilities in the actual code before assuming they are active. Added `debounceRAF` to decouple data ingestion from UI painting.
