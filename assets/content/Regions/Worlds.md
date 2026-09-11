---
name:
  full: Worlds
  aliases: []
type: doc
subType: reference
shortcode: worlds
tags:
description: The worlds of the Heroic Lands multiverse.
banner: systems/sohl/assets/images/banners/world.webp
---

# Worlds

The worlds of the Heroic Lands multiverse.

```dataview
TABLE WITHOUT ID link(file.path, name.full) AS "Name", description AS "Description"
WHERE type = "place" and subType = "world" and package = "thalorna"
SORT name.full ASC
```
