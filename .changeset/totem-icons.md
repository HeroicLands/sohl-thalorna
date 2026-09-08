---
"sohl-thalorna": patch
---

**The 44 totem archetypes get their artwork — at 4% of the size it arrived in.**

The masters are 512×512 PNGs averaging 326 KB, 15 MB for the set. Shipped as-is inside
`assets/icons/`, which the module now packages, that would have been 15 MB of art for images the
being sheet renders at **66 CSS pixels** (`img.sheet-header__portrait` in `scss/apps/_being.scss`;
100 px in the generic sheet layout).

Converted to 256×256 webp at quality 85 — generous even for a 3× display at that size — the whole set
is **540 KB**: 12 KB average, 21 KB at the largest. A 96% reduction with nothing visible lost, and no
alpha to lose, the masters being opaque.

They land at `images/mystery/<animal>.webp`, which is where the notes were already pointing, so **all
44 references resolve with no content change**. One name needed mapping: the reference `seabass`
against a master called `sea-bass`.

**The PNG masters are deliberately not committed.** `assets/icons` is in the module's asset list, so
committing them there would ship all 15 MB alongside the 540 KB actually used. They are source, not
product; they belong wherever the rest of the art masters live.

`bass-totem.png` is in the master set and referenced by nothing — 45 masters, 44 totems.

Unresolved `img`/`portrait` references fall from 349 to 305, and the remainder is now almost entirely
one thing: 303 being portraits that have no art (257 Occupations, 28 Heroes of Asguard, 12 Mythic
bestiary, 4 Heroes and Knaves, 2 elsewhere), plus `icons/scroll-case.svg` and one headshot.
