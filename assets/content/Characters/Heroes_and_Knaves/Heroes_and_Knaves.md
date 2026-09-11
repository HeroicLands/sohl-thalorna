---
description: "Variety of characters from several cultures and occupations."
name:
  full: Heroes and Knaves
  aliases: []
type: doc
subType: reference
shortcode: heroesknvs
---

```sql
SELECT address.slug    AS _ref,
       name.full       AS "Name",
       data.occupation AS "Occupation"
FROM notes
WHERE type = 'being'
  AND file.name <> 'New_Character_Template'
  AND list_contains(tags, 'heroes-and-knaves')
ORDER BY name.full COLLATE NOCASE
```
