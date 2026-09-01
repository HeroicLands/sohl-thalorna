---
"sohl-thalorna": patch
---

Fold `sohl.attributes` into `sohl.items`, and restyle every item entry.

`sohl.attributes` was a compact map the exporter expanded into `attribute`
documents, so a character's stats were the one part of a note spelled in a form
nothing else used. They are now ordinary entries at the top of `sohl.items`:

```yaml
items:
  - { shortcode: str, type: attribute, system: { scoreBase: 16 } }
```

Output-preserving by construction: `sohl/actors.mjs` builds each attribute as
`{system: {scoreBase: Number(value) || 0}}` with type `attribute` and the map key
as shortcode, and pushes them _before_ the `sohl.items` entries — so entries at
the head of the array emit the same documents in the same order.

This tree is also why the special case was worth removing: its attribute set is
**not fixed**, ranging from 3 to 14 per note and carrying a `pal` key that no
other tree has. A map is the wrong shape for a variable-length homogeneous
collection, and the compact form could express only `scoreBase` where
`Item.attribute` declares four fields.

Every entry in `sohl.items` is now flow style when it fits in 100 columns and
block style otherwise, which is what lets the compact form go without losing
reviewability — an attribute is still one line.

Also adopts `@heroiclands/package-build` 9.0.0, whose shared `printWidth` is 100.

**Verification.** Every file parsed before and after, with the whole frontmatter
compared against the intended result and any other difference refusing the write
— zero refusals. `content-build links` passes: 1,720 notes, every anchor landing
and every qualified address resolving. `content-build lint` reports the same 15
pre-existing findings as `main`, unchanged in kind and count.

**Bump**

_Patch._ Authoring form only. The compiled documents are identical.
