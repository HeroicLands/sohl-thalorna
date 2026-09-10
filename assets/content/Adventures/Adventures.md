---
name:
  full: Adventures
  aliases: []
type: doc
subType: reference
shortcode: scenario
tags:
description: Playable adventures and modules.
banner: systems/sohl/assets/images/banners/adventure.webp
---

# Adventures

Playable adventures and modules.

```dataview
TABLE WITHOUT ID link(file.path, name.full) AS "Name", description AS "Description"
WHERE type = "scenario" and subType = "adventure" and package = "thalorna"
SORT name.full ASC
```
