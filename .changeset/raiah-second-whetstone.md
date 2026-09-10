---
"sohl-thalorna": patch
---

**Raiah Sekmet'â's two whetstones no longer share one identity.** Both were
written inline under the name `Whetstone`, so both derived the same key, and
`(type, shortcode)` is a logical identity unique within an actor's own items —
two entries sharing one denote a single thing, and every lookup by it is
ambiguous.

The second takes its own `system.shortcode`. Both items are kept, as with the
four earlier collisions; only the key is added.
