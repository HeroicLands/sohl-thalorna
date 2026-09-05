---
"sohl-thalorna": minor
---

**This repository moves to `@heroiclands/package-build@^16.0.0`, whose major
refuses two embedded items on one actor sharing `(type, shortcode)`.**

The declared range becomes `^16.0.0` and the lockfile resolves 16.0.0. That is
the only entry the lockfile moves; nothing transitive changes. A caret does not
cross a major, so Dependabot would never have offered it.

`(type, shortcode)` is a logical identity — two documents of one type bearing
one shortcode denote _the same entity_ — and it is unique within an actor's own
items. Nothing checked it before: the compiler resolves each entry
independently and distinguishes the two only when seeding `_id`, so a collision
compiled to two documents with distinct ids and shipped unremarked.

This tree carries **18 such collisions across 15 actors**, so
`lint:addresses` gains 18 findings — 1,983 to 2,001. Every one is pre-existing
content, now visible. Four are gear an author clearly meant to duplicate and
never gave distinct keys — `Skathilda Fródban`'s `Dagger 1` and `Dagger 2` are
the textbook case, needing `system.shortcode: Dgr1`/`Dgr2` — and the rest are
repeated skills, mostly `skill:script` two and three times over with identical
values.

The major also drops `contentAddress` in favour of `packageAddress` and
publishes a content index; neither is imported here.
