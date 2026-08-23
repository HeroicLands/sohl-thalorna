---
aliases:
  - Lore
id: 1fHs8nlTNP5mbbXv
name:
  full: Lore
  aliases: []
type: doc
category: collection
package: thalorna
shortcode: lore
section: lore
tags:
description: Myths, legends, and background lore.
banner: banners/lore.webp
---

# Lore

Myths, legends, and background lore.

```dataview
TABLE WITHOUT ID link(file.path, name.full) AS "Name", description AS "Description"
WHERE category = "lore" and package = "thalorna"
SORT name.full ASC
```
