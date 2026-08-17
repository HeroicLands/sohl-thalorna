---
aliases:
  - Characters
  - doc-characters
id: xTfvYG6qYHuI8qst
name:
  full: Characters
  aliases: []
type: doc
category: collection
package: thalorna
shortcode: characters
section: character
tags:
description: All characters across the lands of Thalorna and beyond.
banner: banners/character.webp
---

# Characters

All characters across the lands of Thalorna and beyond.

```dataview
TABLE WITHOUT ID link(file.path, name.full) AS "Name", description AS "Description"
WHERE type = "character" and package = "thalorna"
SORT name.full ASC
```
