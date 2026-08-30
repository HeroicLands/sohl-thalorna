---
"sohl-thalorna": patch
---

**The `/thalorna/` deployment is no longer indexable at its `pkg` origin
address.** A Cloudflare Pages project answers at three families of host-assigned
address besides its canonical path, and the `_headers` this repository generates
covered only two: `<project>.pages.dev` and `<deployment>.<project>.pages.dev`.
The third, `thalorna.pkg.heroiclands.org`, is the custom domain the project
carries so `heroiclands-site`'s router has an origin to fetch — the newest of the
three, and the only one a reader is plausibly handed.
`utils/build-site-root.mjs` now emits a rule for it as well.

Measured at the edge on 2026-08-30, before the change:

| Address                                      | Status | `X-Robots-Tag` |
| -------------------------------------------- | ------ | -------------- |
| `sohl-thalorna.pages.dev/thalorna/`          | 200    | `noindex`      |
| `9d284709.sohl-thalorna.pages.dev/thalorna/` | 200    | `noindex`      |
| `thalorna.pkg.heroiclands.org/thalorna/`     | 200    | _absent_       |
| `www.heroiclands.org/thalorna/`              | 200    | _absent_       |

All four bodies hash identically
(`a128de53490f6f57b5803e83ffbc6a124a839e0cdad509f4641174d693e973e4`), so that was
one deployment answering on four addresses and setting the header on only two.

**The canonical site stays indexable, by two independent guards.** The new rule
is `https://:package.pkg.heroiclands.org/*`, and Cloudflare's `:name`
placeholders match exactly one label — the delimiter inside a host is the period
— so the pattern requires four labels with a literal `pkg` third from the end.
The three-label `www.heroiclands.org` cannot match it under any binding. That a
four-label pattern binds at all is measured rather than assumed: the existing
`:version.:project.pages.dev` rule is four labels with two placeholders, and
`9d284709.sohl-thalorna.pages.dev` carries the header today. On top of that, the
router strips `X-Robots-Tag` when it proxies (`canonicalHeaders` in
`heroiclands-site`, `worker/src/router.js`), which its suite asserts both as a
pure function and end to end through the handler.

**The negative is now asserted, not observed.** `utils/build-site-root.test.mjs`
models Cloudflare's single-label placeholder semantics rather than
pattern-matching the rule text, so two things become assertions: every
host-assigned address is covered by exactly one rule, and `www.heroiclands.org`
— with the bare apex, `api.`, `kb.` and `pkg.heroiclands.org` itself — is covered
by none. That second case passes against the old two-rule payload too; it is a
standing regression guard rather than a test of this change. The deploy workflow
runs it before it builds anything.

**The payload is this repository's, whatever workflow deploys it.** The reusable
workflow in `HeroicLands/.github` writes the same three rules as a default, but
only when the build produced none, and `utils/build-site-root.mjs` writes one
unconditionally — so migrating would not have inherited the rule. That is
recorded next to the check in `.github/workflows/deploy-site.yml`. Whether to
migrate the deploy later is a separate question and is not decided here.
