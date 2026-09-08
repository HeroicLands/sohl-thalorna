---
"sohl-thalorna": patch
---

**The Khemenu Hekau gets icons — provisional ones — and the god icons move under `pantheon/`.**

⚠️ **The nine Khemenu Hekau SVGs are placeholders and will ship as such** until the real artwork
lands. Each carries an XML comment saying so. Replacing them is a pure file swap: no content note
changes, because every reference is already wired.

**Icons now sort by what they depict:**

```text
assets/icons/takheperu/pantheon/       12 god icons  (moved down one level)
assets/icons/takheperu/khemenu-hekau/   9 placeholders (8 Houses + the tradition)
```

**Sixty-five notes wired to the new set**, and the coverage is wider than the eight Houses. Each of
the **forty-eight incantations** takes its own House's icon, resolved from its `assocSkillCode` — so
they come off default art for no additional files. Alongside them, the eight House affiliations, the
eight `Hekau:` skills, and the tradition's lore note. Compiled output confirms **64 item documents**
on the Khemenu Hekau icons and **24** on the pantheon icons; the lore notes are journals and carry no
`img`, as established earlier.

**The placeholders are authored to the convention rather than drawn casually.** Filled shapes only,
with `fill` as an **attribute** — never inline `style`, which the shared rule declines, and never
`stroke`, which it does not rewrite at all. A stroked placeholder would have stayed black and
vanished on a dark compendium listing. All nine come out of `build:assets` themed, and their sources
stay pristine.

Each mark is distinct so the eight are tellable apart in a listing: a balance for **Maat'ken**, a
broken serpentine for **Sefút**, a rayed disk for **Aten'ré**, a gate for **Imnetáu**, water for
**Ankh'kemet**, dune and sun for **Deshr'ut**, ruled writing for **Ren'sesh**, a wrought frame for
**Khat'nu**, and eight points in a ring for the tradition itself.

One operational note found in passing: **`build:assets` copies without pruning.** After the god icons
moved into `pantheon/`, the stage still held the twelve at the old flat path — 33 SVGs where 21 were
expected. It is an incremental copy rather than a mirror, so a rename leaves orphans behind until the
stage is cleared.
