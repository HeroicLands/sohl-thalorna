---
id: NVpsgvPxktTz7Mu0
description: "Variety of characters from several cultures and occupations."
name:
  full: Heroes and Knaves
  aliases: []
type: doc
subType: collection
shortcode: heroesknvs
---

```dataview
TABLE WITHOUT ID link(file.link, name.full) AS "Name", thalorna.realm AS "Realm", social.occupation AS "Occupation"
WHERE type = "character" and file.name != "New_Character_Template" and contains(file.tags, "#heroes-and-knaves")
SORT thalorna.realm, name.full ASC
```
