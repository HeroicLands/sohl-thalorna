---
aliases:
  - doc-heroessgrd
id: fNdEEVQMjIkyyIeG
title: "Heroes of Asguard"
description: "Variety of Asguardian Heroes."
type: doc
category: lore
package: thalorna
shortcode: heroessgrd
---

```dataview
TABLE WITHOUT ID link(file.link, name.full) AS "Name", thalorna.realm AS "Realm", social.occupation AS "Occupation"
WHERE type = "character" and file.name != "New_Character_Template" and contains(file.tags, "#heroes-of-asguard")
SORT thalorna.realm, name.full ASC
```
