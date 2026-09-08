---
"sohl-thalorna": patch
---

**Goblins and Grukar move to `Lore/Folk` as `folk`, not `bestiary` — and a duplicate Grukar note is
removed.**

The format doc draws the line clearly: `bestiary` is _"a kind of creature that is not a people —
beasts, monsters, and the made things that were never born"_, while `folk` is _"related sapient beings
of a single or tightly related species"_. Goblins have a god and a society, and the Grukar note opens
by calling them _"a brutal and prolific folk"_. Both are folk.

- **Goblins** → `lore-goblinfolk`, `subType: folk`, at `Lore/Folk/Goblin_Folk.md`.
- **Grukar** → `lore-grukarfolk`, at `Lore/Folk/Grukar_Folk.md`.

**The Grukar half turned out to be a de-duplication.** `Lore/Folk/Grukar_Folk.md` already existed —
already `lore/folk`, already carrying the whole essay. Its body is **byte-identical** to the section
that was sitting in `Thalorna_Bestiary`, opening paragraph included, so the prose had been living in
two places and the extraction in the previous commit briefly made three.

So no new Grukar note was created. The existing one keeps the content and takes the requested
shortcode (`grukarflk` → `grukarfolk`), and the copy is deleted. Every reference now resolves to the
one note: the bestiary, the Grukar-ahk, and the citation that had pointed at the old code.

`Lore/Bestiary` keeps the four that genuinely are not peoples — Constructs, Dreadspawn, Elementals
and Helspawn.
