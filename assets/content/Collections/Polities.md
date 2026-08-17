---
aliases:
  - Polities
  - doc-polities
id: oG61RgHw1mC46eVc
name:
  full: Polities
  aliases: []
type: doc
category: collection
package: thalorna
shortcode: polities
section: polity
tags:
description: States, kingdoms, empires, and other political bodies.
banner: banners/polity.webp
---

# Polities

States, kingdoms, empires, and other political bodies.

```dataview
TABLE WITHOUT ID link(file.path, name.full) AS "Name", description AS "Description"
WHERE category = "polity" and package = "thalorna"
SORT name.full ASC
```
