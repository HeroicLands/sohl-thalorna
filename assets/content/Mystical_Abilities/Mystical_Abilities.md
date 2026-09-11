---
name:
  full: Mystical Abilities
  aliases: []
type: doc
subType: reference
shortcode: mysticalability
tags:
description: Magical and supernatural powers.
banner: systems/sohl/assets/images/banners/mysticalability.webp
---

# Mystical Abilities

## Arcane Incantation

Arcane incantations are divided by tradition.

- [[lore-hexhodai|Hex Hodai]]

### Incantus Hydälis

```sql
SELECT address.slug AS _ref,
       name.full    AS "Name",
       description  AS "Description"
FROM notes
WHERE type = 'mysticalability'
  AND subType = 'arcaneincantation'
  AND sohl.system.assocSkillCode = 'hydalis'
ORDER BY name.full
```

### Incantus Kentra

```sql
SELECT address.slug AS _ref,
       name.full    AS "Name",
       description  AS "Description"
FROM notes
WHERE type = 'mysticalability'
  AND subType = 'arcaneincantation'
  AND sohl.system.assocSkillCode = 'kentra'
ORDER BY name.full
```

### Incantus Physéra

```sql
SELECT address.slug AS _ref,
       name.full    AS "Name",
       description  AS "Description"
FROM notes
WHERE type = 'mysticalability'
  AND subType = 'arcaneincantation'
  AND sohl.system.assocSkillCode = 'physera'
ORDER BY name.full
```

### Incantus Pneuménos

```sql
SELECT address.slug AS _ref,
       name.full    AS "Name",
       description  AS "Description"
FROM notes
WHERE type = 'mysticalability'
  AND subType = 'arcaneincantation'
  AND sohl.system.assocSkillCode = 'pneumenos'
ORDER BY name.full
```

### Incantus Pyréthos

```sql
SELECT address.slug AS _ref,
       name.full    AS "Name",
       description  AS "Description"
FROM notes
WHERE type = 'mysticalability'
  AND subType = 'arcaneincantation'
  AND sohl.system.assocSkillCode = 'pyrethos'
ORDER BY name.full
```

### Incantus Sidéros

```sql
SELECT address.slug AS _ref,
       name.full    AS "Name",
       description  AS "Description"
FROM notes
WHERE type = 'mysticalability'
  AND subType = 'arcaneincantation'
  AND sohl.system.assocSkillCode = 'sideros'
ORDER BY name.full
```

### Incantus Zephäris

```sql
SELECT address.slug AS _ref,
       name.full    AS "Name",
       description  AS "Description"
FROM notes
WHERE type = 'mysticalability'
  AND subType = 'arcaneincantation'
  AND sohl.system.assocSkillCode = 'zepharis'
ORDER BY name.full
```

## Arcane Talent

```sql
SELECT address.slug AS _ref,
       name.full    AS "Name",
       description  AS "Description"
FROM notes
WHERE type = 'mysticalability'
  AND subType = 'arcanetalent'
ORDER BY name.full
```

## Shamanic Rite

```sql :allow-empty
SELECT address.slug AS _ref,
       name.full    AS "Name",
       description  AS "Description"
FROM notes
WHERE type = 'mysticalability'
  AND subType = 'shamanicrite'
ORDER BY name.full
```

## Spirit Action

```sql :allow-empty
SELECT address.slug AS _ref,
       name.full    AS "Name",
       description  AS "Description"
FROM notes
WHERE type = 'mysticalability'
  AND subType = 'spiritaction'
ORDER BY name.full
```

## Spirit Power

```sql :allow-empty
SELECT address.slug AS _ref,
       name.full    AS "Name",
       description  AS "Description"
FROM notes
WHERE type = 'mysticalability'
  AND subType = 'spiritpower'
ORDER BY name.full
```

## Benediction

```sql :allow-empty
SELECT address.slug AS _ref,
       name.full    AS "Name",
       description  AS "Description"
FROM notes
WHERE type = 'mysticalability'
  AND subType = 'benediction'
ORDER BY name.full
```

## Divine Devotion

```sql :allow-empty
SELECT address.slug AS _ref,
       name.full    AS "Name",
       description  AS "Description"
FROM notes
WHERE type = 'mysticalability'
  AND subType = 'divinedevotion'
ORDER BY name.full
```

## Divine Incantation

```sql :allow-empty
SELECT address.slug AS _ref,
       name.full    AS "Name",
       description  AS "Description"
FROM notes
WHERE type = 'mysticalability'
  AND subType = 'divineincantation'
ORDER BY name.full
```

## Spirit Talent

```sql :allow-empty
SELECT address.slug AS _ref,
       name.full    AS "Name",
       description  AS "Description"
FROM notes
WHERE type = 'mysticalability'
  AND subType = 'spirittalent'
ORDER BY name.full
```

## Alchemy

```sql :allow-empty
SELECT address.slug AS _ref,
       name.full    AS "Name",
       description  AS "Description"
FROM notes
WHERE type = 'mysticalability'
  AND subType = 'alchemy'
ORDER BY name.full
```

## Divination

```sql :allow-empty
SELECT address.slug AS _ref,
       name.full    AS "Name",
       description  AS "Description"
FROM notes
WHERE type = 'mysticalability'
  AND subType = 'divination'
ORDER BY name.full
```
