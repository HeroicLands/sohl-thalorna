---
"sohl-thalorna": minor
---

**Thalorna builds and deploys its own website.** This repository now renders the
whole of `/thalorna` and publishes it itself, rather than handing content to
another repository to render. A checkout, the theme submodule, Node and Hugo are
the entire build, and the deploy uses credentials scoped to this package's own
hosting project — so a successor inheriting only this repository can still
publish it.

- `site/` is a Hugo project: its configuration, this site's own home-page
  layout, and the shared `heroiclands-hugo-theme` as a submodule. The pages are
  generated beneath it by `npm run build:site` and are not committed.
  `npm run serve:site` previews them.
- `.github/workflows/deploy-site.yml` builds the site on every push touching the
  content or the build deriving it, checks that it carries a `404.html` and a
  complete tree, and deploys it to Cloudflare Pages. The hosting project and the
  routing that puts it at `www.heroiclands.org/thalorna` are separate work; until
  its credentials are set the workflow still builds and verifies, and skips the
  upload.

**The site's address is written down once.** `baseURL` in `site/hugo.toml` is
the only place it appears: the content build reads it and spells every href,
redirect and link-manifest entry against it. Pointing that one line at another
prefix, or at an origin of this package's own, moves the site — verified by
rebuilding at `https://thalorna.example.org/` and
`https://example.org/setting/thalorna/`, each with all 28,201 internal links
resolving.

**Two addresses no longer assume where this package lives.** A note linked
`/thalorna/character/` and `/thalorna/creature/` by hand; both are now wikilinks
to the collection notes that own those landings. And the content build, which
previously wrote the manifest without a base, was left failing outright by the
package-relative manifest change — it now supplies the base it publishes at.

The published pages are unchanged: every page and every redirect the site
publishes today is reproduced, page for page, plus the tag pages the content's
own tag links point at.
