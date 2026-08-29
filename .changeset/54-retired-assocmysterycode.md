---
"sohl-thalorna": patch
---

**The retired `assocMysteryCode` is gone from every mystical ability.** All 221
`mysticalability` notes authored it, and all 221 authored the same value — the
empty string. No SoHL DataModel has received the field since
HeroicLands/Song-of-Heroic-Lands-FoundryVTT#973 removed it, so Foundry discarded
the key when the document was constructed and nothing at compile or at load time
said so (#54).

_It was retired, not renamed._ It is **not** the earlier spelling of
`assocAffiliationCode`: SoHL#973 deleted `assocMysteryCode` as dead plumbing —
it resolved to an `assocMystery` getter production never read — and SoHL#1012
added `assocAffiliationCode` later and separately, as the credential seam #1000
needed. Rewriting these notes to the newer field would assert an affiliation none
of them claims, so the key is deleted rather than migrated.

**Nothing compiled changes.** `build/packs-json` was built before and after the
sweep and the two trees are byte-identical across all 2,555 documents. The
installed `@heroiclands/package-build` still declares the field on the
`mysticalability` builder with `default: ""`, so an authored `""` and an absent
key emit the same document. What the sweep buys is the next dependency bump:
HeroicLands/package-build#63 drops the declaration, and from that release on a
note authoring the field is an `npm run lint:addresses` finding — 221 of them,
had they stayed.

_Two neighbouring fields in the same report are deliberately left alone._
`affiliation.relation` and `mystery.skillAptitudes` are defined on the system's
`main` and merely unreleased; this package pins `verified: 0.8.2`. They are
version skew, not authoring debt, and removing them would delete data the next
system release reads.
