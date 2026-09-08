---
"sohl-thalorna": patch
---

**1,087 image paths repointed at art that actually exists.**

An audit of every `img:`/`portrait:` value in the content tree — 1,245 references across 168 distinct
paths — found that **only 22 resolved**. The rest addressed files that are in neither this package nor
the system. Now **422 distinct paths resolve, across 1,200 references**, leaving 45.

**686 references pointed at the system's art while claiming it was ours.** By the addressing rule —
`systems/` means another system, `modules/` another module, anything else this package — these were
authored package-relative but the files have always lived in SoHL. Two shapes:

- `icons/game-icons/<artist>/…` (50 distinct) needed only the `systems/sohl/assets/` prefix.
- 21 flat names needed the prefix **and** a subdirectory, because SoHL files them under `noun/`,
  `other/` or `game-icons/`: `icons/potion.svg` → `systems/sohl/assets/icons/other/potion.svg`,
  `icons/circle.svg` → `…/icons/noun/circle.svg`, and so on.

**341 beings gained their own portrait.** Every being in the tree carried `img: icons/person.svg` —
one generic silhouette, 500 times. Where art now exists at
`images/beings/{characters,creatures}/<shortcode>-portrait.webp` it is wired by shortcode; the
remaining beings fall back to the system's person icon at its real path.

**60 affiliation references follow the art into its pantheon subdirectory** —
`images/affiliation/taranon.webp` → `images/affiliation/aureldian/taranon.webp`, and likewise for the
Asguardian gods and the Hex Hodai Eídmata.

**Still unresolved — 45 references, no art in either repository:**

- `images/mystery/*` — 34 of the 44 totem archetypes. Ten of the forty-four (boar, crow, donkey,
  eagle, falcon, fox, jaguar, leopard, lion, stag) have an identically-named creature portrait under
  `images/beings/creatures/`, and were deliberately **not** repointed: wiring ten and leaving
  thirty-four would make the set inconsistent, and whether a totem archetype should wear a creature's
  portrait is an authoring decision rather than a path fix.
- `images/takoro-zanethar-headshot.webp` — one reference.

Two things the audit turned up in passing. **92 portrait files match no being note in this package** —
almost all creatures (aurochs, baboon, cobra, cheetah …), so presumably art for beings defined
elsewhere. And **`icons/person.svg` was 500 of the 1,132 broken references on its own**, which is why
the total moves so far on one change.
