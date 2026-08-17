---
aliases:
  - Mystical Abilities
  - doc-mystclblts2
id: sljSrCVNlGMCzI7j
name:
  full: Mystical Abilities
  aliases: []
type: doc
category: collection
package: thalorna
shortcode: mystclblts2
section: mysticalability
tags:
description: Magical and supernatural powers.
banner: banners/mysticalability.webp
---

# Mystical Abilities

## Arcane Incantation

Arcane incantations are divided by tradition.

- [[doc-hexhodai|Hex Hodai]]

## Arcane Talent

```dataview
TABLE WITHOUT ID link(file.path, name.full) AS "Name", description AS "Description"
WHERE type = "mysticalability" and sohl.subType = "arcanetalent" and package = "thalorna"
SORT name.full ASC
```

## Shamanic Rite

```dataview
TABLE WITHOUT ID link(file.path, name.full) AS "Name", description AS "Description"
WHERE type = "mysticalability" and sohl.subType = "shamanicrite" and package = "thalorna"
SORT name.full ASC
```

## Spirit Action

```dataview
TABLE WITHOUT ID link(file.path, name.full) AS "Name", description AS "Description"
WHERE type = "mysticalability" and SubType = "spiritaction" and package = "thalorna"
SORT name.full ASC
```

## Spirit Power

```dataview
TABLE WITHOUT ID link(file.path, name.full) AS "Name", description AS "Description"
WHERE type = "mysticalability" and sohl.subType = "spiritpower" and package = "thalorna"
SORT name.full ASC
```

## Benediction

```dataview
TABLE WITHOUT ID link(file.path, name.full) AS "Name", description AS "Description"
WHERE type = "mysticalability" and sohl.subType = "benediction" and package = "thalorna"
SORT name.full ASC
```

## Divine Devotion

```dataview
TABLE WITHOUT ID link(file.path, name.full) AS "Name", description AS "Description"
WHERE type = "mysticalability" and sohl.subType = "divinedevotion" and package = "thalorna"
SORT name.full ASC
```

## Divine Incantation

```dataview
TABLE WITHOUT ID link(file.path, name.full) AS "Name", description AS "Description"
WHERE type = "mysticalability" and sohl.subType = "divineincantation" and package = "thalorna"
SORT name.full ASC
```

## Spirit Talent

```dataview
TABLE WITHOUT ID link(file.path, name.full) AS "Name", description AS "Description"
WHERE type = "mysticalability" and sohl.subType = "spirittalent" and package = "thalorna"
SORT name.full ASC
```

## Alchemy

```dataview
TABLE WITHOUT ID link(file.path, name.full) AS "Name", description AS "Description"
WHERE type = "mysticalability" and sohl.subType = "alchemy" and package = "thalorna"
SORT name.full ASC
```

## Divination

```dataview
TABLE WITHOUT ID link(file.path, name.full) AS "Name", description AS "Description"
WHERE type = "mysticalability" and sohl.subType = "divination" and package = "thalorna"
SORT name.full ASC
```
