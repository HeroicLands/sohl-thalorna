---
"sohl-thalorna": patch
---

**Being portraits move to `data.portrait`, where they belong, and off `img`.**

A previous pass put each being's portrait on `img:`. That was wrong on both counts: `img` is the token
art and `portrait` is the sheet portrait, and a `*-portrait.webp` file belongs only to the latter. So:

- **341 `img:` values** come off the portrait files and back to the system's person icon.
- **341 `data.portrait:` values** are repointed from `images/being/…` — a directory that has never
  existed, singular — to the real `images/beings/{characters,creatures}/…`.

Every one of the 644 authored portraits had been pointing at that non-existent singular path, so none
of them resolved. They were invisible to the earlier audit because the field is indented under `data:`
and the sweep only matched an unindented `img:`/`portrait:`.

**Coverage now matches where the art was actually drawn:**

| Directory                      | have | missing |
| ------------------------------ | ---: | ------: |
| `Characters/Heroes_and_Knaves` |  209 |       4 |
| `Bestiary/*`                   |  132 |      13 |
| `Characters/Occupations`       |    0 |     257 |
| `Characters/Heroes_of_Asguard` |    0 |      28 |

Occupations and the Asguard heroes have no portrait art at all, and the Bestiary is complete but for
twelve Mythic creatures. Of the four remaining Heroes and Knaves, two — Bāthür Hürtzhük and Tëitjëk
Vëngyürt — are **duplicate notes**: the same character exists under `Regions/…/Tanvur/Threats/` with a
different shortcode, and the art matched that copy. Only one portrait file in the whole set
(`brunjarskathhel`) matches no being at all.

Also fixed: **four embedded-item `img:` values** inside being notes (`icons/quiver.svg`), which the
earlier sweep missed for the same indentation reason.

`nogit/missing-images.csv` lists every remaining unresolved reference — 349 rows, with the note, its
type and shortcode, and a same-named existing file where one exists.
