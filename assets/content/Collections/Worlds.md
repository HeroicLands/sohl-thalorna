---
aliases:
  - Worlds
id: h7LJfloVQX6yJmtn
name:
  full: Worlds
  aliases: []
type: doc
category: collection
shortcode: worlds
section: world
tags:
description: The worlds of the Heroic Lands multiverse.
banner: banners/world.webp
---

# Worlds

The worlds of the Heroic Lands multiverse.

```dataview
TABLE WITHOUT ID link(file.path, name.full) AS "Name", description AS "Description"
WHERE category = "world" and package = "thalorna"
SORT name.full ASC
```
