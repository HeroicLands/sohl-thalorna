---
"sohl-thalorna": patch
---

**Being portraits resized to what the sheet renders, and SoHL's bestiary art returned to SoHL.**

The portraits arrived at 896×1152 (and 1152×896 for landscape creatures) — roughly five times the
largest size anything displays them at. `img.facade__image` renders 180×260 CSS px with
`object-fit: cover`; the header stamp is 66×66 and the print record about 144 px wide.

Resized to **512×658**, and **658×512** for landscape sources — the same pixel budget turned to match
the image rather than the panel. **34.2 MB → 18.1 MB**, averaging 41 KB a file, in a single encode
from the committed originals rather than a second lossy pass.

The first attempt sized everything by height, on the reasoning that a portrait-shaped panel with
`cover` scales to the height. True, but it left landscape sources 846 px wide with **46% of that width
cropped away and never displayed** — bytes for pixels nobody sees. Orienting the box to the image
gives the same visible result and 40% fewer pixels.

**91 creature portraits move to the SoHL system**, where the beings they belong to are defined. Every
one matched a `Bestiary/` note there by shortcode — `aurochs`, `baboon`, `bctrncml`, `cavebear`,
`cheetah`, `yak` and the rest — so this module had been shipping art for another package's bestiary
while 257 of its own Occupations have no portrait at all. They are placed at
`assets/images/beings/creatures/` in that repository, unstaged: it sits on `main`, which refuses
commits.

One unreferenced portrait stays behind — `brunjarskathhel`, whose being is a SoHL character rather
than a creature.

Shipped assets fall from 36.1 MB to **16.5 MB**. All 341 being-portrait references still resolve.
