---
aliases:
  - Creatures
  - doc-creatures2
id: S9zrHr78WeL3xDzZ
name:
  full: Creatures
  aliases: []
type: doc
category: collection
package: thalorna
shortcode: creatures2
section: creature
tags:
description: Beasts, monsters, and lesser folk of the world.
banner: banners/creature.webp
---

# Creatures

Beasts, monsters, and lesser folk of the world.

```dataview
TABLE WITHOUT ID link(file.path, name.full) AS "Name", description AS "Description"
WHERE type = "creature" and package = "thalorna"
SORT name.full ASC
```
