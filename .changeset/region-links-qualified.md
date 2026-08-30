---
"sohl-thalorna": patch
---

Point the three Northern Fertile Region links at the notes that already exist.

`[[Bethua_Region]]`, `[[Okharis_Region]]` and `[[Takheperu_Region]]` — 11 links
across five notes — resolved to nothing. All three notes exist:

| link target        | the note it meant                         |
| ------------------ | ----------------------------------------- |
| `Bethua_Region`    | `Bethua/Bethua_Region.md` (`doc`)         |
| `Okharis_Region`   | `Okharis/Okharis_Region.md` (`doc`)       |
| `Takheperu_Region` | `Ta.Kheperu/Ta.Kheperu_Region.md` (`doc`) |

**Two separate reasons they missed, and only the second is obvious.** The
filename alias a note carries is its basename with underscores turned into
spaces, so `Bethua_Region.md` registers as "Bethua Region" — and nothing turns
the underscores in a _link_ back into spaces, so the underscore spelling matched
nothing. `Takheperu_Region` missed for a plainer reason: the file is
`Ta.Kheperu_Region.md`, and the link dropped the stop.

**Fixed as qualified addresses, not as corrected names.** The proper-name form
(`[[Bethûa Region]]`, which each note declares as an alias and as its
`name.full`) resolves only from a note of the **same type** — that is what the
bare form means: _"it resolves against the aliases of the source's own type"_.
Four of the five citing notes are `type: affiliation` and the regions are
`type: doc`, so no spelling of the name could ever have reached them from there.
Measured rather than assumed: rewriting to the proper names first fixed 3 of the
11 — the three in `Vylarian_Currency.md`, the one citing note that is itself a
`doc`.

`type-shortcode` resolves from anywhere, and is already the house form in these
very sentences, which carry `[[affiliation-permesnu|Per'Mesnu]]` and
`[[doc-vylarinmpr|Vylaria]]` alongside. The three region links were the only ones
not written that way.

Display text is unchanged, so no rendered page moves: `[[doc-bethuargn|Bethûa]]`
still reads "Bethûa".

**Verified.** Placeholder links that resolve to nothing fall from 161 to 150 and
distinct unresolved targets from 99 to 96 — exactly these 11 uses and 3 targets,
with no other link affected. The 68 dead _anchors_ this tree also carries are a
separate defect and are untouched (#101).
