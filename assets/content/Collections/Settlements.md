---
aliases:
  - Settlements
id: XrNhDp75YDEKcxWD
name:
  full: Settlements
  aliases: []
type: doc
category: collection
package: thalorna
shortcode: setlements
section: settlement
tags:
description: Cities, towns, villages, and other inhabited places.
banner: banners/settlement.webp
---

# Settlements

Cities, towns, villages, and other inhabited places.

```dataview
TABLE WITHOUT ID link(file.path, name.full) AS "Name", description AS "Description"
WHERE category = "settlement" and package = "thalorna"
SORT name.full ASC
```
