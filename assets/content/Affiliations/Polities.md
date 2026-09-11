---
name:
  full: Polities
  aliases: []
type: doc
subType: reference
shortcode: polities
tags:
description: States, kingdoms, empires, and other political bodies.
banner: systems/sohl/assets/images/banners/polity.webp
---

# Polities

States, kingdoms, empires, and other political bodies.

```sql
SELECT address.slug AS _ref,
       name.full    AS "Name",
       description  AS "Description"
FROM notes
WHERE type = 'affiliation'
  AND subType = 'polity'
ORDER BY name.full
```
