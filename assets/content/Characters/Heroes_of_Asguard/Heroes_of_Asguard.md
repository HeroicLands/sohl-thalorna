---
id: fNdEEVQMjIkyyIeG
description: "Variety of Asguardian Heroes."
name:
  full: Heroes of Asguard
  aliases: []
type: doc
subType: reference
shortcode: heroessgrd
---

```dataview
TABLE WITHOUT ID link(file.link, name.full) AS "Name", thalorna.realm AS "Realm", social.occupation AS "Occupation"
WHERE type = "character" and file.name != "New_Character_Template" and contains(file.tags, "#heroes-of-asguard")
SORT thalorna.realm, name.full ASC
```
