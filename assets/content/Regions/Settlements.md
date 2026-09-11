---
name:
  full: Settlements
  aliases: []
type: doc
subType: reference
shortcode: setlements
tags:
description: Cities, towns, villages, and other inhabited places.
banner: banners/settlement.webp
---

# Settlements

Cities, towns, villages, and other inhabited places.

```sql
SELECT address.slug AS _ref,
       name.full    AS "Name",
       description  AS "Description"
FROM notes
WHERE type = 'place'
  AND subType = 'settlement'
ORDER BY name.full COLLATE NOCASE
```
