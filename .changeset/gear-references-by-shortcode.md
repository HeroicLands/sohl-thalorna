---
"sohl-thalorna": patch
---

**Thirty-two gear references on the Heroes and Knaves now name a `sohl` item by
its shortcode.** Each was written as free prose in the `shortcode:` position —
`Leather satchel`, `Seal Wax (Red)`, `srgtls`, `goldcrown` — which names no
predefined item, so the pack build refused every actor carrying one.

Each is now the shortcode of an item the `sohl` package already ships:
`bagleather15`, `waxsealing`, `surgkit`, `gldcrwn` and the rest. Four were
carried as `miscgear` but are containers in `sohl` — quivers, satchels and a
flask — so those entries move to `containergear`, which is the type the
referenced item actually is.

Two references resolved onto a key the actor already used. Dôren Syndálr's
leather flask would have become a second `wtrskin` beside the waterskin he
already carries, so it takes `flaskmetal`; Elýsè Skýrn's medical journal would
have become a second `booktrvl` beside her personal one, so it takes
`bookbase`. `(type, shortcode)` is a logical identity within an actor's items,
and two entries sharing one denote a single thing — the same rule that the four earlier collisions were fixed under.

Paryán Barmándán's "Metalworking supplies" and Hotep Ánu's "Metalworking tools
(hammer, tongs, small anvil)" were each defined inline rather than referenced,
two ad-hoc spellings of an item `sohl` already ships. Both now name
`metalwrktl`, and so take the shipped kit's weight rather than the lighter
figure each had invented.

Four references remain unresolved and are unchanged, awaiting the items
themselves: a healing elixir, a battle standard, a portable alchemist's
workshop and a family signet ring.
