---
aliases:
  - Peoples
id: Xzj2jYB2Bd8djJkY
name:
  full: Peoples
  aliases: []
type: doc
category: collection
package: thalorna
shortcode: peoples
section: people
tags:
description: Distinct peoples, races, and lineages.
banner: banners/people.webp
---

# Peoples

Distinct peoples, races, and lineages.

```dataview
TABLE WITHOUT ID link(file.path, name.full) AS "Name", description AS "Description"
WHERE category = "people" and package = "thalorna"
SORT name.full ASC
```
