---
"sohl-thalorna": patch
---

**`/thalorna/` is authored content rendered by the shared landing layout, not a
hand-built layout override.** `site/layouts/index.html` was 47 lines shadowing
the theme's own `layouts/index.html` to render a hero band and a list of the
site's sections. Building that page here meant it could only resemble the other
five package landings by being kept in step with them by hand, which is the
divergence the shared layout was added to prevent. The whole file is deleted.

The page is now `assets/content/homepage.md` — a `type: homepage` note — rendered
by `@heroiclands/hugo-theme`'s `layouts/partials/landing.html`. Its front matter
is four values: `title`, `description` and `banner` for the hero band, and
`landing.cards.source: sections` for the grid. The theme moves to `^0.2.0`, the
release that ships that layout and the landing classes; the pin has to be
widened by hand, since on `0.x` a caret range never crosses a minor and
Dependabot will never offer the bump.

**The cards are derived, not listed.** `source: sections` builds one card per
top-level section from the site's own `.Site.Sections.ByTitle` — the same list,
in the same order, with the same descriptions the deleted layout read. So this
package's landing still gains and loses a card as its content build emits and
retires a section, and nothing here has to be remembered.

**What the reader gets is the same page.** The site was built three times — at
theme 0.1.2, at 0.2.0 with nothing else changed, and with the port — so the
minor bump and the port could be told apart. The bare bump changes **no rendered
page at all**: across all 2,510 built files its only effect is `css/style.css`,
purely additive at 163 lines added and none removed. The port then changes
exactly one file, `thalorna/index.html`. The hero band is byte-identical, and
all 21 cards carry the same title, address and description as the list items
they replace.

Two differences are real and deliberate:

- The section list is a card grid. `<ul class="page-list">` becomes the theme's
  `.doors` / `.door` cards — the same shape every other package landing renders.
- The page supplies its own `description`, so `<meta name="description">` is the
  hero standfirst rather than the site-wide default from `params.description`.

No install block was authored. Every other package landing carries one, but this
repository has cut no release, so a `releases/latest/download/module.json`
address would be a dead link on the page whose job is to send readers somewhere.

`utils/build-site-content.mjs` gained the routing a homepage note needs: it is
addressed by the **package** rather than by its own name, so it takes no section
and no slug and writes the site root's `_index.md`, reusing package-build's
`engine/homepage.mjs`. `build/packs-json` and `build/manifests/thalorna.json` are
byte-identical with and without the note — a `type: homepage` note compiles to a
page and to no compendium document and no manifest entry.
