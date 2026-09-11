---
tags:
  - lore
  - arcane
  - hex-hodai
type: lore
subType: arcana
shortcode: hxhdncnttns
name:
  full: Héx Hodäi Incantations
  aliases: []
packFolder: affiliationshexhodai
---

# Pyréthos (Fire)

```sql
SELECT address.slug          AS _ref,
       name.full             AS "Name",
       sohl.system.levelBase AS "Level",
       description           AS "Description"
FROM notes
WHERE type = 'mysticalability'
  AND subType = 'arcaneincantation'
  AND sohl.system.assocSkillCode = 'pyrethos'
ORDER BY sohl.system.levelBase, name.full
```

# Zephäris (Air)

```sql
SELECT address.slug          AS _ref,
       name.full             AS "Name",
       sohl.system.levelBase AS "Level",
       description           AS "Description"
FROM notes
WHERE type = 'mysticalability'
  AND subType = 'arcaneincantation'
  AND sohl.system.assocSkillCode = 'zepharis'
ORDER BY sohl.system.levelBase, name.full
```

# Physéra (Earth/Life)

```sql
SELECT address.slug          AS _ref,
       name.full             AS "Name",
       sohl.system.levelBase AS "Level",
       description           AS "Description"
FROM notes
WHERE type = 'mysticalability'
  AND subType = 'arcaneincantation'
  AND sohl.system.assocSkillCode = 'physera'
ORDER BY sohl.system.levelBase, name.full
```

# Hydälis (Water)

```sql
SELECT address.slug          AS _ref,
       name.full             AS "Name",
       sohl.system.levelBase AS "Level",
       description           AS "Description"
FROM notes
WHERE type = 'mysticalability'
  AND subType = 'arcaneincantation'
  AND sohl.system.assocSkillCode = 'hydalis'
ORDER BY sohl.system.levelBase, name.full
```

# Sidéros (Metal)

```sql
SELECT address.slug          AS _ref,
       name.full             AS "Name",
       sohl.system.levelBase AS "Level",
       description           AS "Description"
FROM notes
WHERE type = 'mysticalability'
  AND subType = 'arcaneincantation'
  AND sohl.system.assocSkillCode = 'sideros'
ORDER BY sohl.system.levelBase, name.full
```

# Pneuménos (Spirit)

```sql
SELECT address.slug          AS _ref,
       name.full             AS "Name",
       sohl.system.levelBase AS "Level",
       description           AS "Description"
FROM notes
WHERE type = 'mysticalability'
  AND subType = 'arcaneincantation'
  AND sohl.system.assocSkillCode = 'pneumenos'
ORDER BY sohl.system.levelBase, name.full
```

# Kentra ( _The Center All_)

```sql
SELECT address.slug          AS _ref,
       name.full             AS "Name",
       sohl.system.levelBase AS "Level",
       description           AS "Description"
FROM notes
WHERE type = 'mysticalability'
  AND subType = 'arcaneincantation'
  AND sohl.system.assocSkillCode = 'kentra'
ORDER BY sohl.system.levelBase, name.full
```

# See Also

- [[lore-hexhodai|Héx Hodäi]]
