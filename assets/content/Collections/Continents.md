---
aliases:
  - Continents
id: UwE0NrIry321IzYO
name:
  full: Continents
  aliases: []
type: doc
shortcode: continents
section: continent
tags:
description: Major landmasses of the world.
banner: banners/continent.webp
---

# Continents

Major landmasses of the world.

```dataview
TABLE WITHOUT ID link(file.path, name.full) AS "Name", description AS "Description"
WHERE category = "continent" and package = "thalorna"
SORT name.full ASC
```
