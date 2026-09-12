---
name:
  full: Worlds
  aliases: []
type: doc
subType: reference
shortcode: worlds
tags:
description: The worlds of the Heroic Lands multiverse.
banner: systems/sohl/assets/images/banners/world.webp
---

# Worlds

The worlds of the Heroic Lands multiverse.

```sql
SELECT address.slug AS _ref,
       name.full    AS "Name",
       description  AS "Description"
FROM notes
WHERE type = 'place'
  AND subType = 'world'
ORDER BY name.full COLLATE NOCASE
```
