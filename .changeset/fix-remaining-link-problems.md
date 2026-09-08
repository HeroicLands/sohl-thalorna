---
"sohl-thalorna": patch
---

**The last 85 link problems are gone: `lint:content-links` is clean.**

Two of the broken targets named notes that exist and were simply mis-addressed:

- `[[Dunhara_Tribes_Region|The Dunhara Tribes]]` → **`affiliation-dunhartrbs`**
- `[[Calypsa_Region|Calypsa]]` → **`affiliation-calypsa`**. Two notes share the name — a `place`
  subType `settlement` and an `affiliation` subType `polity` — and the sentence lists "the five
  Aurèldían kingdoms", so the polity is the one meant. Its siblings in that list are region places,
  but Calypsa has no region note; it is a city-state.

**The other 64 named nothing at all.** No note in this package or any dependency carries those names
or aliases, under any of the obvious variants — so there was nothing to point them at, and they are
unlinked to plain text, preserving the display text exactly. The bare `[[Name]]` form they mostly
used addressed an alias, and the alias namespace is retired.

One more was address-shaped but dead: `[[lore-giftofpyre|Gift of the Pyre]]` in The Black Flame,
naming a practice the note itself describes and no note publishes.

`nogit/unlinked-missing-notes.txt` lists all 67 targets with every file and line they appeared at, so
any of them can be re-linked by creating the note and writing `[[type-shortcode|Text]]`.

**Compile errors fall from 95 to 62** as a side effect — a third of them were these same dead links
reported from the pack builder.

All six lint steps CI runs now pass: `format`, `markdown`, `lang`, `labels`, `addresses` and
`content-links`.
