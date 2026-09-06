---
"sohl-thalorna": minor
---

**Every SoHL system field this tree authors now sits under `sohl.system`** (#159).

A note used to write its system fields directly under `sohl:`, at names of its
own — `weight`, `flexloc`, `quality`. They are now written under `sohl.system`,
at the paths the compiled document actually stores, so a note states what the
document holds and a key the system does not declare is an error rather than a
silent drop.

**1,083 notes, 4,051 key moves.** Three shapes occur:

| shape                                                             | example                                           |
| ----------------------------------------------------------------- | ------------------------------------------------- |
| the name already matches                                          | `sohl.material` → `sohl.system.material`          |
| the note wrote the plain name, the document stores the base value | `sohl.weight` → `sohl.system.weightBase`          |
| the destination is nested                                         | `sohl.flexloc` → `sohl.system.locations.flexible` |

Beings move `body`, `currentMoveMedium` and `movementProfiles`. `items` and
`attributes` stay outside the block — they are generators that produce embedded
documents rather than fields — as do `archetype`, `subType` and the toolchain
key `kbcat`.

**The compiled packs are byte-identical**, all 2,605 documents, proven by a
`diff -r` of `build/packs-json` before and after. This changes where a field is
written, not what compiles.

**644 keys authored as `null` are dropped rather than moved**, all of them
`sohl.defaultCombatGroup` on beings. At the old position the compiler read
`value ?? default`, so a `null` never reached a document; at the new position
the value arrives as authored. Dropping them lands on exactly what the note
compiles to today.

**193 values are restated in the form the document stores**, because
`sohl.system` is a verbatim passthrough. Both are pre-existing authoring defects
this surfaces rather than creates:

- `body.weight.calc` on 54 notes was authored as a number where the document
  stores a string — `calc: 1000` becomes `calc: "1000"`;
- `movementProfiles[].factors` on 139 notes is a key no field declares and the
  compiler has always dropped, so it is gone from the note too.

**Three content-table notes name the moved fields and are rewritten with
them** — a Dataview column naming an old path renders em-dashes and a `WHERE`
clause naming one silently matches no rows, and nothing reports either.
`Thalorna_Bestiary` moves to `sohl.system.body.weight.base` and
`sohl.system.body.bodyScaleBase`; `Mystical_Abilities` and
`Hex_Hodai_Incantations` move to `sohl.system.assocSkillCode`.

Requires the `<system>.system` passthrough in `@heroiclands/package-build`, and
in particular HeroicLands/package-build#308 — five fields resolved their value
by re-reading the note rather than taking the one they were handed, so they
could not see `sohl.system`. Without it a migrated tree compiles `charges` as
unset, an affiliation's relations as `{}`, and a projectile's derived `numDice`
as `0`.
