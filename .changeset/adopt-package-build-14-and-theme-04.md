---
"sohl-thalorna": patch
---

**Take package-build 14.0.0 and hugo-theme 0.4.0**, the two halves of the fix
for empty section landings. package-build#212 added the `site.sections.<name>`
keys `listType` and `listSubType`; heroiclands-hugo-theme#50 made
`_default/list.html` read them. Neither does anything until this repository
declares them, which the following change does.

package-build's other major, #216, deletes `publish.address.landing` outright
and refuses the key. That is inert here: PR #127 already dropped it, and
`publish.address` still carries its `prefix: ""` — a stated decision rather than
a default, and the thing every address is derived from. Emitted content is
identical across the bump: the same 1,863 files, the same 2,125 rendered
addresses, and a byte-identical `sitemap.xml`.

**The theme bump is two minors and it does change rendering — correctly.** 0.3.0
added `data/banners.yaml` (heroiclands-hugo-theme#36), an allowlist of the
banner artwork that actually exists; a resolved name absent from it falls back
to `default.webp` and warns once. This repository resolves banners by content
type, and none of `being`, `affiliation`, `place`, `mysticalability`, `lore`,
`skill`, `concoctiongear`, `weapongear`, `scenario`, `mystery` or `reference`
has ever been drawn — every one of them answers 404 on `cdn.heroiclands.org`
today. So 1,750 pages were emitting a dead `background-image` in silence, which
is precisely what that allowlist exists to surface; they now render the default
band and the build says so. Drawing the artwork is separate work.

Nothing else moves. All eleven section landings render byte-identically across
the bump — the theme's new fallback fires only for a landing that declares a
`listType`, and none does yet. The three checks this tree is legitimately red on
are red line for line: `lint:markdown` 146 findings (#111), `lint:addresses`
1,983 findings across 1,852 notes, `lint:content-links` 122 link problems (#34,
#44); `lint:format` is clean.
