---
id: XrNhDp75YDEKcxWD
name:
  full: Settlements
type: doc
subType: collection
shortcode: setlements
tags:
description: Cities, towns, villages, and other inhabited places.
banner: banners/settlement.webp
---

# Settlements

Cities, towns, villages, and other inhabited places.

```dataview
TABLE WITHOUT ID link(file.path, name.full) AS "Name", description AS "Description"
WHERE type = "place" and subType = "settlement" and package = "thalorna"
SORT name.full ASC
```
