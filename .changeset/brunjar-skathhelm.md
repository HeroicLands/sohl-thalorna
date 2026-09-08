---
"sohl-thalorna": patch
---

**Brunjár Skathhelm joins Heroes and Knaves, and the last orphan portrait finds its being.**

Copied from the SoHL system, where it sat among the pregens, and adapted to this package's shape
rather than transplanted whole:

- `packFolder: pregens` → **`ankarisvrystwald`**, the folder his cohort already lives in.
- The portrait moves from a top-level `portrait:` at `images/being/…` — the legacy spelling and a
  directory that never existed — to **`data.portrait`** at
  `images/beings/characters/brunjarskathhel-portrait.webp`.
- `img:` takes the `systems/sohl/assets/` prefix the addressing rule requires.
- The old `social:` block becomes the `data:` fields this package uses: `occupation`, `lore`, `homes`
  and `affiliations`, mapping `class: unfree` to `slavernk` and `organizations: blackpine-wolves` to
  `blckpnwlvs`, exactly as his fellow brigand **Dágulf Véthar** is authored two files away.

The `sohl:` block — his fourteen attributes, skills and gear — and the whole body are carried over
verbatim.

He is why one portrait was left behind when the ninety-one creature portraits went to SoHL: his art
was here and his note was not. **Unreferenced portraits in this package are now zero**, and all 342
resolve.
