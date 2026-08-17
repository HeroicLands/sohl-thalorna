---
aliases:
  - Affiliations
  - doc-affiliatns
id: 7mpaoQ3ZZYCum3Ex
name:
  full: Affiliations
  aliases: []
type: doc
category: collection
package: thalorna
shortcode: affiliatns
section: affiliation
tags:
description: Every organized body of Thalorna — religions, schools of magic, spirit traditions, and secular orders.
banner: banners/organization.webp
---

# Affiliations

An affiliation is any organized body a character can belong to, and belonging to
one is a standing within it rather than a label on the character. What kind of
body it is comes from its subtype.

A religion is an affiliation and nothing more than an affiliation. The
organization is recorded here; the practices of its rites are a **skill**, and
the powers it grants are **mystical abilities**. Those three are separate, and a
character may hold any of them without the others.

## Religions and Churches

Deity-facing traditions — pantheons, the cults of individual deities, and the
orders sworn to them.

```dataview
TABLE WITHOUT ID link(file.path, name.full) AS "Name", description AS "Description"
WHERE type = "affiliation" and sohl.subType = "divine" and package = "thalorna"
SORT name.full ASC
```

## Schools of Magic

Arcane traditions, including alchemical schools.

```dataview
TABLE WITHOUT ID link(file.path, name.full) AS "Name", description AS "Description"
WHERE type = "affiliation" and sohl.subType = "arcane" and package = "thalorna"
SORT name.full ASC
```

## Spirit Traditions

Shamanic and totemic traditions, ancestor cults, and the spirit courts.

```dataview
TABLE WITHOUT ID link(file.path, name.full) AS "Name", description AS "Description"
WHERE type = "affiliation" and sohl.subType = "spirit" and package = "thalorna"
SORT name.full ASC
```

## Secular Bodies

Guilds, banks, syndicates, noble houses, military units, and the other worldly
institutions.

```dataview
TABLE WITHOUT ID link(file.path, name.full) AS "Name", description AS "Description"
WHERE type = "affiliation" and sohl.subType = "social" and package = "thalorna"
SORT name.full ASC
```
