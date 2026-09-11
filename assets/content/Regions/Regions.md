---
name:
  full: Regions
  aliases: []
type: doc
subType: reference
shortcode: regions
tags:
description: Geographic and cultural regions.
banner: banners/region.webp
---

# Regions

Geographic and cultural regions.

```sql
SELECT address.slug AS _ref,
       name.full    AS "Name",
       description  AS "Description"
FROM notes
WHERE type = 'place'
  AND subType = 'region'
ORDER BY name.full COLLATE NOCASE
```
