---
tags: []
name:
  full: Dreadspawn
  aliases: []
description: "Creatures that were not born but made — the deliberate experiments of the gods of creation, unable to reproduce and recreated from favoured templates."
shortcode: dreadspawncrtr
type: lore
subType: bestiary
---

# Dreadspawn

Dreadspawn are unique creatures presumably formed as experiments by the gods of creation. Generally speaking, they cannot reproduce naturally, although for some reason known only to the gods some of them seem to be favored templates and are recreated over and over again.

```dataview
TABLE WITHOUT ID
  link(file.path, name.full) AS "Name",
  shortcode AS "Shortcode",
  sohl.body.weight.base AS "Weight",
  sohl.body.bodyScaleBase AS "BodyScale",
  description AS "Description"
WHERE type = "being" AND sohl.kbcat = "dreadspawn"
```
