---
id: Xzj2jYB2Bd8djJkY
name:
  full: Peoples
  aliases: []
type: doc
subType: reference
shortcode: peoples
tags:
description: Distinct peoples, races, and lineages.
banner: banners/people.webp
---

# Peoples

Distinct peoples, races, and lineages.

```dataview
TABLE WITHOUT ID link(file.path, name.full) AS "Name", description AS "Description"
WHERE type = "lore" and subType = "folk" and package = "thalorna"
SORT name.full ASC
```
