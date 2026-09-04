---
"sohl-thalorna": patch
---

**Publish every content page at the address the link manifest advertises (#130).**

`site.base` was absent, which meant `/<contentPackage>/`, and the site emitter
writes that value into each page's Hugo `url:` front matter. Hugo reads `url` as
site-root-relative, and this site's root already _is_ `/thalorna/` —
`site/hugo.toml` sets `baseURL` to `https://www.heroiclands.org/thalorna/` and
`publishDir` to `../build/site/thalorna`, which the deployment serves at
`/thalorna/`. The prefix was therefore written twice, and all 1,852 content
pages plus the package homepage published at `/thalorna/thalorna/<address>/`
while every link addressing them said `/thalorna/<address>/`.

Setting `site.base: "/"` leaves the prefix to Hugo alone. Every content page,
the homepage, `sitemap.xml`, the section-landing listings and every inbound
cross-package link now resolve; the 2,585 entries the published link manifest
carries all name a page that exists.

The eleven section landings were never affected and are unchanged — they take
their address from their path rather than from front matter, which is why the
site's own navigation worked while every address anyone else held was dead.
