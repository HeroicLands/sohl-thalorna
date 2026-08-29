---
aliases:
  - Regions
id: jbVHqLXPUnCyns3h
name:
  full: Regions
  aliases: []
type: doc
category: collection
shortcode: regions
section: region
tags:
description: Geographic and cultural regions.
banner: banners/region.webp
---

# Regions

Geographic and cultural regions.

```dataview
TABLE WITHOUT ID link(file.path, name.full) AS "Name", description AS "Description"
WHERE category = "region" and package = "thalorna"
SORT name.full ASC
```
