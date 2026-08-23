---
aliases:
  - References
id: QddBTHgnLAzYbXo5
name:
  full: References
  aliases: []
type: doc
category: collection
package: thalorna
shortcode: references
section: reference
tags:
description: Reference materials and source documents.
banner: banners/reference.webp
---

# References

Reference materials and source documents.

```dataview
TABLE WITHOUT ID link(file.path, name.full) AS "Name", description AS "Description"
WHERE category = "reference" and package = "thalorna"
SORT name.full ASC
```
