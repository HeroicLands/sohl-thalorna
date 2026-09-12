---
"sohl-thalorna": patch
---

**Content tables are now written in SQL.**

All 65 tables across 34 notes move from Dataview's query language to **SQL, run
by DuckDB over the content index** — the language package-build is standardising
on. Nothing about how a table is authored changes: it is still a fenced block in
the note, answered at build time, rendered into the journal and the page.

Most tables emit exactly what they emitted before. Four publish better material,
because SQL refuses a field no note carries where Dataview quietly rendered an
em-dash:

| Table                                 | Before                             | After                                       |
| ------------------------------------- | ---------------------------------- | ------------------------------------------- |
| The six bestiary tables               | Weight and BodyScale were `—`      | the values the notes declare                |
| Hex Hodai incantations                | Level was `—`, rows sorted by name | the incantation's level, sorted by it       |
| Heroes and Knaves · Heroes of Asguard | Realm and Occupation were `—`      | Occupation; Realm dropped — no note has one |
| Pantheons, on _The World of Thalorna_ | 32 rows, 15 of them rituals        | the 17 actual pantheons                     |

The Pantheons table is the one place rows disappear. Dataview's `contains`
matches a substring, so a note tagged `celestial-pantheon` — every _Ritual:_
note — answered a query asking for `pantheon`. SQL matches the tag itself.

Row order is unchanged. SQL collates binary where the old evaluator folded
case, so a table sorted by a name asks for `COLLATE NOCASE` — which is what keeps
`The Order of the Ashen Vow` ahead of `The Order of Týr's Justice`.
