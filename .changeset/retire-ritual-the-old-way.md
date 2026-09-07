---
"sohl-thalorna": patch
---

**`Ritual: The Old Way` is retired: a ritual skill is a priest's, and the Old Way has no priests.**

The Áelendan tradition is an affiliation of shamen and the villagers who live under their compacts
— its own note says the specialists are _"shamen, not priests"_ and that a shaman _"has no
institution behind them"_. A shaman's power comes from standing with a particular spirit, not from
a rite the tradition confers, so the skill described something the Old Way does not have.

An audit makes the point cleanly: of **88 faith-skills in the package, 87 belong to a
`faithtradition` with an actual priesthood, and exactly one belonged to a `spirittradition`** —
this one. It was already orphaned, since the Old Way's `commonSkills` now names the eight Spirit
Powers instead, no note linked it, and no character carried it.

Its now-empty `firstgods` mystical-skills folder note goes with it. The `First Gods` pantheon and
its `pantheonsfirstgods` folder are untouched.
