---
"sohl-thalorna": patch
---

**Resolve cross-package wikilinks again: the vendored manifest was being read with a key shape it stopped using.**

No `[[type-shortcode]]` addressing another package resolved anywhere in this
build — not one of the 2,683 entries the vendored `sohl` manifest publishes.

`loadForeignManifests` indexes by the **canonical** key, package included
(`sohl-skill-lang`), and has since manifest v3 made keys fully qualified: a
manifest has to survive two packages claiming the same `type-shortcode`. The site
build looked that index up with the **unqualified** address the v2 format used
(`skill/lang`). The two shapes never collide, so the lookup could not succeed on
any input.

A second instance of the same drift sat beside it. The foreign packages' content
types were seeded by splitting each key on `/`; a canonical key contains none, so
not one foreign type was seeded, and `readQualifier` did not recognise a
foreign-only type as an address at all — such a link was read as prose.

Neither was visible from the output. An unresolved address renders as its own
display text, so `[[skill-lang|Language]]` read correctly as the word "Language"
with no href: nothing missing on the page, just a link quietly gone. It surfaced
only when vendoring the `sohl` manifest completed the package set and turned on
the dead-link guard, which then failed the build on 54 links — 35 of them
correct content addressing published pages, reported as if they were typos.

The two shapes are now bridged once, at the call site that loads the manifests,
using the package's own `readCanonicalKey` rather than a second hand-rolled
parse. Wikilink resolution looks up one shape for local and foreign hits alike —
what its `{ url, name }` contract already promised — and the type seeding reads
the same re-keyed map, so the two cannot drift apart again.

A manifest that loads entries but yields no addressable key now fails the build
by name. That is the shape this defect took, and a lookup that cannot match
anything reports nothing, so nothing else would catch the next format change.

`[[skill-lang]]` resolves to `/sohl/kb/skill/language/` and `[[doc-brthsgn]]` to
`/sohl/kb/rules/birthsign/`; all 2,683 manifest entries are addressable. The 19
failures that remain are unrelated — published prose citing notes that are
`draft: true` or were never written.

(Closes #40.)
