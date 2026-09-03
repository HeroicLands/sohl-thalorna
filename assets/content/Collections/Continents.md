---
id: UwE0NrIry321IzYO
name:
  full: Continents
type: doc
subType: collection
shortcode: continents
tags:
description: Major landmasses of the world.
banner: banners/continent.webp
---

# Continents

Major landmasses of the world.

```dataview
TABLE WITHOUT ID link(file.path, name.full) AS "Name", description AS "Description"
WHERE type = "place" and contains(tags, "continent") and package = "thalorna"
SORT name.full ASC
```
