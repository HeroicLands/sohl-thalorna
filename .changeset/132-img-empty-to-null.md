---
"sohl-thalorna": patch
---

Say "no art authored" as `img: null` in the forty-five notes that said `""`.

`resolveImg` tests its raw argument for falsiness — `if (!raw) return ""` — and
every caller applies its own default to that result
(`resolveImg(fm.img) || itemArt(type)`). So `""`, `null` and an absent key are
indistinguishable today, and all three land on the type's default art. These
forty-five notes were authored under that reading.

They are about to stop meaning the same thing. `title` and `img` are moving to the
convention the project already holds for an optional "not specified" string —
`nullable, initial: null`, so "unset" is one honest value rather than two — under
which **`null` falls back and `""` is a deliberate blank**. Left as they are, these
notes would quietly stop asking for their default art: nineteen `affiliation`
items, which today compile with `systems/sohl/assets/icons/noun/shield.svg`, would
ship iconless, with no error and no warning, because a blank `img` is a legal
document field. So the corpus moves first, while the two spellings still mean the
same thing and the sweep can be proven inert.

**Nothing here wants a deliberate blank**, and the corpus says so rather than the
author. Of the forty-six `place/region` notes, twenty omit `img:` and twenty-six
write `""`; of the 295 `affiliation` notes, 202 omit it, seventy-four give a path,
and nineteen write `""`. No note of either type ships blank art on purpose — `""`
and absent are used interchangeably for "none authored yet".

The other twenty-six are `place` notes, which compile into journals, and the
journal builder never reads `img` at all. They are inert whichever spelling they
carry, but they are the same authoring mistake and are swept with the rest rather
than left as a second reading of the field.

**Verified inert on the current toolchain.** Compiled packs (2,364 files) are
byte-identical before and after, and so is the rendered site HTML — `img` reaches
the site only as pass-through Hugo front matter, and the one layout that reads it
(`partials/infobox/affiliation.html`) guards with `with`, which declines `''` and
`nil` alike. Lint is unmoved, line for line: 1,983 address findings across 1,852
notes, 122 link problems, 146 markdown findings, formatting clean.

**Merge before** the `package-build` change that makes `""` meaningful. Reversing
the order is what these notes would have been the regression of.
