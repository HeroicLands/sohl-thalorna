---
id: oG61RgHw1mC46eVc
name:
  full: Polities
type: doc
subType: collection
shortcode: polities
tags:
description: States, kingdoms, empires, and other political bodies.
banner: banners/polity.webp
---

# Polities

States, kingdoms, empires, and other political bodies.

```dataview
TABLE WITHOUT ID link(file.path, name.full) AS "Name", description AS "Description"
WHERE type = "affiliation" and subType = "polity" and package = "thalorna"
SORT name.full ASC
```
