---
"sohl-thalorna": patch
---

**The site emitter is deleted. `content-build site` is the whole of it (#85).**
`utils/build-site-content.mjs` (907 lines) and `utils/site-wikilinks.mjs` (281
lines) were a copy of `@heroiclands/package-build`'s `engine/site-build.mjs` and
`engine/web-wikilinks.mjs`, and `utils/site-config.mjs` (89 lines) existed only
to feed them. All three are gone, along with `assets/legacy-urls.json`. There is
no local site code left and no seam for any: a gap in the emitter is fixed in
`@heroiclands/package-build`, where every package gets the fix.

**Four upstream fixes had failed to reach this repository through that copy**, in
four months. One made the site emit zero pages and exit 0 (#78). One left every
generated collection table empty (#79). One broke the breadcrumb on all 1,715
pages (package-build#65). And one — recorded on #85 rather than as its own issue
— stripped the published link manifest: both `content-build manifest` and the
local emitter wrote `build/manifests/thalorna.json` through the same
`writeManifests`, but the copy passed three arguments where upstream passes four,
so `foundryPackage` arrived `undefined` and two guards fired. Whichever ran last
decided what the file contained.

| `build/manifests/thalorna.json` | `foundryPackage` | entries with `uuid` | size   |
| ------------------------------- | ---------------- | ------------------- | ------ |
| after the old `build:site`      | absent           | 0 of 1,851          | 204 KB |
| after `build:link-manifest`     | `sohl-thalorna`  | 2,585 of 2,585      | 627 KB |
| now, after either               | `sohl-thalorna`  | 2,585 of 2,585      | 627 KB |

The second writer is gone, not corrected: `content-build site` writes no manifest
at all, so there is one writer and nothing to disagree with.

**What replaces it is configuration.** `package-build.config.yaml` gains a
`site:` block — `out: site/content`, and the eleven sections this package
publishes. Since package-build#204 a section is a Hugo directory the note format
does not carry, so pages emit **flat** and `site.sections` is the only thing that
makes `/thalorna/<section>/` exist at all. `publish.address` keeps only
`prefix: ""`, which is a declared decision rather than a default; `landing` went
with the `README` convention package-build 13.0.0 retired (#127).

**No page moved.** The published address set is identical, note for note: 1,852
`url:` values, zero differences, and every one of the 2,125 rendered pages
resolves at the address it did before. What changed is where the _file_ sits —
`site/content/being/being-xyz.md` is now `site/content/being-xyz.md` — which
Hugo does not publish by, because each page states its own `url`.

**What no longer publishes.** `assets/legacy-urls.json` recorded the addresses
each page had published at before, and became 446 Hugo `aliases` — redirect stubs
at `/thalorna/character/…`, `/thalorna/creature/…`, `/thalorna/section/…` and the
rest. Those addresses stop answering. Its second job, `artwork`, was already dead:
the shared theme composes a portrait URL as
`images/being/<shortcode>-portrait.webp` from the page's own `shortcode`, and
reads no `artwork` key — a filename follows identity, and `(type, shortcode)`
never moved.

**Where the pages read differently**, all of it the engine doing what the copy had
stopped doing: 51 pages render a wikilink as an unresolved-link span, because the
copy still honoured the bare `[[Name]]` alias form that package-build#180 retired
— the same 122 findings `npm run lint:content-links` already reports, so the site
build is now red for exactly the content gap the linter is. 20 pages mark a link
to a draft note. 4 correct a heading anchor the copy mangled. 2 fill in a link
label the copy emitted empty.
