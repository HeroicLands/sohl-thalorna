---
tags: []
name:
  full: Elementals
  aliases:
    - Elemental
description: "Physical manifestations of astral spirits, each embodying a single elemental aspect."
shortcode: elemcrtr
type: lore
subType: bestiary
---

# Elementals

Physical manifestations of spirits from the astral realm that embody a single elemental aspect.

```dataview
TABLE WITHOUT ID
  link(file.path, name.full) AS "Name",
  shortcode AS "Shortcode",
  sohl.body.weight.base AS "Weight",
  sohl.body.bodyScaleBase AS "BodyScale",
  description AS "Description"
WHERE type = "being" AND sohl.kbcat = "elemental"
```
