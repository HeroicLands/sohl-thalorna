---
id: xTfvYG6qYHuI8qst
name:
  full: Beings
type: doc
subType: collection
shortcode: beings
section: being
tags:
description: Every being across the lands of Thalorna and beyond — people, beasts, spirits, and monsters.
banner: banners/character.webp
---

# Beings

Every being across the lands of Thalorna and beyond: the people whose choices shape the world's ongoing history, and the beasts, spirits, and monsters that share it with them.

```dataview
TABLE WITHOUT ID link(file.path, name.full) AS "Name", description AS "Description"
WHERE type = "being" and package = "thalorna"
SORT name.full ASC
```
