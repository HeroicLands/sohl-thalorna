---
aliases:
  - Languages
id: P5bCjJZ6CRTCDPjl
name:
  full: Languages
  aliases: []
type: doc
subType: collection
shortcode: languages
section: skill
tags:
description: Spoken and written languages.
banner: banners/language.webp
---

# Languages

Spoken and written languages.

```dataview
TABLE WITHOUT ID link(file.path, name.full) AS "Name", description AS "Description"
WHERE type = "skill" and subType = "language" and package = "thalorna"
SORT name.full ASC
```
