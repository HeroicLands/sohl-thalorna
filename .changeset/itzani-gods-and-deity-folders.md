---
"sohl-thalorna": patch
---

**The ten Itzáni gods, their heterodoxy and their rites are documents in their
own right, and the deity lore notes are filed by pantheon.**

The Itzáni pantheon note carried all ten gods as sections of a single page, so
none of them had an address, a rank ladder, or a compendium document of its own.

- **Ten faith notes** under `Affiliations/Divine/Itzani/`, patterned on `Faith of
Taranon`, carrying the pantheon note's text expanded into _Worship_,
  _Organization_ and _Relations_. `The Ten` table gains a `Faith` column linking
  each one.
- **Ranks and offices are Itzáni**, not the generic theocracy ladder: the
  Blood-Denied → Water-Marked → Blood-Giver → Debt-Bearer → Tq'an'ik → Ch'ul'bal
  → K'ul → K'ul Tq'an → Presiding K'ul Tq'an ladder that the one priesthood
  shares, with each note's offices drawn from its own specialist branch. The
  pantheon note takes the same ladder with institution-wide offices.
- **Three heterodoxy notes** — `Pik'ul Tz'umaq` (`spirittradition`), `Tz'umaq
K'alanil` (`faithtradition`) and `Pik'ob` (`order`) — extracted from the
  pantheon's `Heterodoxy` section, which is now three links.
- **Ten `Ritual: <god>` skills** under `Skills/Mystical/Itzani/`, off the
  `Ritual: Taranon` template, with an `itzani` folder note under
  `mysticalskills`. Each faith names its rite in `commonSkills`.
- **Eleven draft deity lore notes**, referenced from each faith's `lore`.

**`Lore/Deities` is no longer a flat list.** All 83 deity notes now sit in a
per-pantheon subfolder beneath a new `Deities` folder (`Setting` → `Lore` →
`Deities`), each stamped with its `packFolder`. They previously carried no
`packFolder` at all and compiled loose at the root of the journals compendium.

The Itzáni pantheon's `packFolder` moves from `itzani` to `pantheonitzani`,
matching `pantheonsaureldian` and freeing `itzani` for the mystical-skills
folder. Two smaller fixes ride along: `Ixkul K'ul` linked
`[[K.in.ul_Tq.an|…]]`, a filename that was never an address and now resolves as
`affiliation-kinultqan`; and `K'ayik Ch'ul` and `Ātáröš` — unrelated gods that
share the epithet _The Sacred Flame_ — now point at each other.
