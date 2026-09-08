---
"sohl-thalorna": patch
---

**This module now ships and themes its own icons, the way the SoHL system does.**

Committing the twelve Ta'Kheperu SVGs versioned them but shipped nothing: the `assets:` list copied
only `src`, `lang`, `styles`, the READMEs and `assets/LICENSE`, so `build:assets` staged **7 entries,
7 files** and `build/stage/assets/` held `LICENSE` alone. Every `modules/sohl-thalorna/assets/…` path
in the compiled packs was resolving against something this repository did not contain.

Three changes bring it to parity with the system:

- **`assets/icons` is staged.** One entry in `packageBuild.assets`, matching the system's own
  `- { from: assets/icons, to: assets/icons }`. `build:assets` now reports **8 entries, 19 files**.
- **`assetTransform: ./utils/svg-theme.mjs`.** `package-build` takes this as a _repository-local_
  module — its own documentation names that exact path — and ships no transform of its own, so this
  is a deliberate copy of the system's. The behaviour has to match exactly: a module icon and a
  system icon sit side by side in the same compendium listing, and one theming differently would be
  visibly wrong. The two ink constants must stay equal across both repositories; the file says so.
- **The twelve SVGs are normalised to the system's convention.** They arrived using inline
  `style='fill:#000000;stroke:none'`, and the shared rule **deliberately declines** such files —
  an inline style beats a `<style>` rule, so recolouring them would produce a half-recoloured icon.
  The system's own icons express fill as an attribute (`fill="#000000"`), so all 53 declarations were
  converted to `fill="#000000" stroke="none"`. Identical rendering, and now the shared rule applies.

Verified rather than assumed: the staged icons carry a `<style>` block **byte-identical** to the one
in the system's staged `sohl-dragon.svg`, all twelve are themed, and the sources stay pristine — the
`prefers-color-scheme` swap is injected at build time only, so the knowledgebase and website continue
to render the plain black-on-transparent art.
