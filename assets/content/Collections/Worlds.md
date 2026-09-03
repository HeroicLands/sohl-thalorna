---
aliases:
  - Worlds
id: h7LJfloVQX6yJmtn
name:
  full: Worlds
  aliases: []
type: doc
subType: collection
shortcode: worlds
tags:
description: The worlds of the Heroic Lands multiverse.
banner: banners/world.webp
---

# Worlds

The worlds of the Heroic Lands multiverse.

```dataview
TABLE WITHOUT ID link(file.path, name.full) AS "Name", description AS "Description"
WHERE type = "place" and subType = "world" and package = "thalorna"
SORT name.full ASC
```
