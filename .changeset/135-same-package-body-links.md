---
"sohl-thalorna": patch
---

**Link same-package pages at the address they are served from (#135).**

Every wikilink rendered into a page body pointed one path segment too shallow —
`href=/affiliation-ordoarcanis/` for a page served at
`/thalorna/affiliation-ordoarcanis/` — so 8,814 links across 1,662 distinct
targets 404'd. Section landings and every cross-package inbound link were
unaffected, so the site's own navigation worked while the prose was dead end to
end.

The emitter wrote `site.base` into two quantities that need opposite framings:
Hugo's `url:` front matter, which Hugo already resolves under `baseURL`
(`.../thalorna/`), and the `href`s and manifest base, which are site-absolute and
must carry the prefix themselves. No single value was right for both — absent
(`/thalorna/`) published every page at `/thalorna/thalorna/<address>/` (#130), and
the `site.base: "/"` stopgap bought the addresses back at the cost of the body
links.

`@heroiclands/package-build` 15.0.0 stops writing `base` into `url:`
(package-build#217, #219), so the default is right for both halves; taking it and
deleting the stopgap is one change. `publish.address.prefix: ""` is untouched. All
2,125 rendered pages keep their address, all 2,585 link-manifest entries still
name a page that exists, and no `/thalorna/thalorna/` directory is produced. The
39 site-absolute links still unresolved in this tree are the ones it does not
build: 35 into `/sohl/`, at two retired section-style addresses this tree still
cites, and four `/thalorna/tags/` links Hugo emits no page for.

The release's other two majors are inert here. `resolveImg` now distinguishes an
unset art path from a deliberately blank one (package-build#218, #221) — #134
already swept the forty-five `img: ""` notes to `null`, and none is left. And a
note's own `title` no longer fills an `affiliation` item's `system.title`
(package-build#218, #222) — the fifteen affiliation notes that declare a top-level
`title` all declare it empty, which fed the field an empty string under the old
rule and takes the same empty default under the new one. Those fifteen blank
headings remain #129's, untouched here.
