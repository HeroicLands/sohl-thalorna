---
id: jbVHqLXPUnCyns3h
name:
  full: Regions
  aliases: []
type: doc
subType: reference
shortcode: regions
tags:
description: Geographic and cultural regions.
banner: banners/region.webp
---

# Regions

Geographic and cultural regions.

```dataview
TABLE WITHOUT ID link(file.path, name.full) AS "Name", description AS "Description"
WHERE type = "place" and subType = "region" and package = "thalorna"
SORT name.full ASC
```
