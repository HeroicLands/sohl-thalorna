---
name:
  full: Polities
  aliases: []
type: doc
subType: reference
shortcode: polities
tags:
description: States, kingdoms, empires, and other political bodies.
banner: banners/politybnr.webp
---

States, kingdoms, empires, and other political bodies.

```sql
SELECT address.slug AS _ref,
       name.full    AS "Name",
       description  AS "Description"
FROM notes
WHERE type = 'affiliation'
  AND subType = 'polity'
ORDER BY name.full COLLATE NOCASE
```
