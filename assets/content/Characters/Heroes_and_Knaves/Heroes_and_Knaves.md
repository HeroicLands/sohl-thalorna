---
aliases:
  - doc-heroesknvs
id: NVpsgvPxktTz7Mu0
title: "Heroes and Knaves"
description: "Variety of characters from several cultures and occupations."
type: doc
category: lore
package: thalorna
shortcode: heroesknvs
---

```dataview
TABLE WITHOUT ID link(file.link, name.full) AS "Name", thalorna.realm AS "Realm", social.occupation AS "Occupation"
WHERE type = "character" and file.name != "New_Character_Template" and contains(file.tags, "#heroes-and-knaves")
SORT thalorna.realm, name.full ASC
```
