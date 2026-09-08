---
tags: []
name:
  full: Thalorna Bestiary
  aliases: []
description: "A categorized catalogue of the creatures inhabiting the world of Thalorna, from mundane animals to spirits, elementals, and mythic beasts."
shortcode: thlbestiary
type: doc
subType: reference
---

# Animals

Natural creatures of Thalorna.

```dataview
TABLE WITHOUT ID
  link(file.path, name.full) AS "Name",
  shortcode AS "Shortcode",
  sohl.body.weight.base AS "Weight",
  sohl.body.bodyScaleBase AS "BodyScale",
  description AS "Description"
WHERE type = "being" AND sohl.kbcat = "animal" AND package = "thalorna"
```

# Constructs

See [[lore-golemcrtr|Constructs]].

# Dreadspawn

See [[lore-dreadspawncrtr|Dreadspawn]].

# Elementals

See [[lore-elemcrtr|Elementals]].

# Grukar - A Blight Upon the Land

See [[lore-grukarcrtr|Grukar]].

# Goblins - The Cunning Tricksters

See [[lore-goblincrtr|Goblins]].

# Helspawn

See [[lore-helspawncrtr|Helspawn]].

# Mythic Creatures {#mythic}

Rare but fantastic creatures whose existence relies on arcane forces.

```dataview
TABLE WITHOUT ID
  link(file.path, name.full) AS "Name",
  shortcode AS "Shortcode",
  sohl.body.weight.base AS "Weight",
  sohl.body.bodyScaleBase AS "BodyScale",
  description AS "Description"
WHERE type = "being" AND sohl.kbcat = "mythic"
```

# Spirit Creatures {#spirit}

Physical manifestations of spirits from the astral realm

```dataview
TABLE WITHOUT ID
  link(file.path, name.full) AS "Name",
  shortcode AS "Shortcode",
  sohl.body.weight.base AS "Weight",
  sohl.body.bodyScaleBase AS "BodyScale",
  description AS "Description"
WHERE type = "being" AND sohl.kbcat = "spirit"
```
