---
name:
  full: References
  aliases: []
type: doc
subType: reference
shortcode: reference
tags:
description: Reference materials and source documents.
banner: systems/sohl/assets/images/banners/reference.webp
---

# References

Reference materials and source documents.

```dataview
TABLE WITHOUT ID link(file.path, name.full) AS "Name", description AS "Description"
WHERE type = "doc" and subType = "reference" and package = "thalorna"
SORT name.full ASC
```
