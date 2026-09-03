---
aliases:
  - Locations
id: 2OGPK8TItkzTYpQE
name:
  full: Locations
  aliases: []
type: doc
subType: collection
shortcode: locations
tags:
description: Notable places — ruins, landmarks, dungeons, and wonders.
banner: banners/site.webp
---

# Locations

Notable places — ruins, landmarks, dungeons, and wonders.

```dataview
TABLE WITHOUT ID link(file.path, name.full) AS "Name", description AS "Description"
WHERE type = "place" and (subType = "site" or subType = "structure" or subType = "feature") and package = "thalorna"
SORT name.full ASC
```
