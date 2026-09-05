---
"sohl-thalorna": patch
---

**Four actors no longer embed two gear items under one key.** Skathilda
Fródban's two daggers, Angelides Patrikios' two gambeson coats, Snorri
Járnskel's two homespun tunics and Ranthor Pardalen's two waterskins each
selected one template twice without overriding `system.shortcode`, so both
instances inherited the template's key.

`(type, shortcode)` is a logical identity, unique within an actor's own items,
so the two denoted one entity and every lookup resolving by that key —
compendium↔world reconciliation, archetype shadowing,
`fvttFindItemByShortcode`, cohort membership, expression and effect references
— was ambiguous.

Both items are kept in every case; only the key is added, so nothing an author
wrote is removed. Skathilda's already carried distinct names, `Dagger 1` and
`Dagger 2`, so both take matching keys (`Dgr1`, `Dgr2`) — the specification's
own worked example. The other three distinguish nothing but the repetition, so
the first keeps the template's key and the second takes its own.

Refused by `content-build lint` since `@heroiclands/package-build` 16.0.0. The
remaining fourteen findings from that rule are repeated _skills_ and are a
separate authoring question.
