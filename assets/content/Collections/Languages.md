---
aliases:
  - Languages
  - doc-languages
id: P5bCjJZ6CRTCDPjl
name:
  full: Languages
  aliases: []
type: doc
category: collection
package: thalorna
shortcode: languages
section: language
tags:
description: Spoken and written languages.
banner: banners/language.webp
---

# Languages

Spoken and written languages.

```dataview
TABLE WITHOUT ID link(file.path, name.full) AS "Name", description AS "Description"
WHERE category = "language" and package = "thalorna"
SORT name.full ASC
```
