---
name:
  full: Peoples
  aliases: []
type: doc
subType: reference
shortcode: peoples
tags:
description: Distinct peoples, races, and lineages.
banner: banners/people.webp
---

# Peoples

Distinct peoples, races, and lineages.

```sql
SELECT address.slug AS _ref,
       name.full    AS "Name",
       description  AS "Description"
FROM notes
WHERE type = 'lore'
  AND subType = 'folk'
ORDER BY name.full
```
