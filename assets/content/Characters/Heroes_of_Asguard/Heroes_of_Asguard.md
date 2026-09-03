---
id: fNdEEVQMjIkyyIeG
description: "Variety of Asguardian Heroes."
name:
  full: Heroes of Asguard
type: doc
subType: collection
shortcode: heroessgrd
---

```dataview
TABLE WITHOUT ID link(file.link, name.full) AS "Name", thalorna.realm AS "Realm", social.occupation AS "Occupation"
WHERE type = "character" and file.name != "New_Character_Template" and contains(file.tags, "#heroes-of-asguard")
SORT thalorna.realm, name.full ASC
```
