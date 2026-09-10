---
"sohl-thalorna": patch
---

**Content tables and section links compile again.** Twenty-four notes failed the
pack build on two long-standing faults, neither of which the link linter can
see: it checks that an address resolves, not that a query selects anything or
that a cited section is published.

**Content tables written against a retired vocabulary.** Notes no longer carry
`category`, `parent.continents` or `parent.regions`; classification is
`type`/`subType` with the old category values surviving as tags, and a place's
container is `data.parents`. Six continent "Regions" tables and the four
tables in _Thalorna_ are rewritten onto what notes actually carry. The
polity tables are retargeted onto `data.domains`, which is how a polity holds
territory — so _Áelendan Tribal Lands_ now lists the Áelendan Tribes and
_Peshtar Wilderness_ correctly lists nobody. Aldorath also claims `aelwyth`
among its domains, as its three peer realms already did, so the island's table
is complete.

**Fourteen mystical-ability predicates read `sohl.assocSkillCode`,** but the
field is `sohl.system.assocSkillCode`. Adding the missing segment restores 202
Héx Hodäi incantations to the seven skill tables that were silently empty.

**Tables that are meant to be empty now say so** on the fence, with
`dataview allow-empty` — nine mystical-ability subtypes with no notes authored,
and the Aurionis and Iseron region tables.

**Anchored links now cite the slug, not the heading text.** A section is
addressed by the slug its `{#…}` declaration publishes; citing the rendered
heading resolves only by accident, and fails outright on any heading carrying a
diacritic, a colon or a dash. All 111 remaining display-name anchors are
converted, which is the form `place-sixhillsvyl` already used.

_Kalihara Continent_ cited its anchor in a third form again, with underscores
for spaces (`#The_Ancient_Structures`). It resolved to no section and was not
reported, since the address itself was sound; it now names the published slug.
