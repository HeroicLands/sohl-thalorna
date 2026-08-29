---
"sohl-thalorna": patch
---

**`Companies` is a section landing again, not a section called "Section".**
`assets/content/Companies/Companies.md` declared `category: section` — the only
note in the tree that did, against 14 that declare `category: collection`. This
package's address scheme is `publish.address.landing: collection`, so `section`
made the note not a landing at all: it routed by its category like any other
`doc` and minted a section named after the literal string, publishing
`/thalorna/section/` (a section titled "Section", holding one page) and
`/thalorna/section/companies/` — while the seven `category: company` notes got
only the auto-generated stub landing Hugo names "Company" (#90).

Nothing reported it. A section with one page looks to the build exactly like a
section that genuinely has one page, so it surfaced only as a card reading
"Section" in the list on `/thalorna/`.

The note now declares `category: collection` and `section: company`, and moves
to `assets/content/Collections/` alongside the other 14 — it was the only
landing filed outside that directory. It gains the `description` every other
landing carries, so its card on `/thalorna/` reads "Companies" with a summary
rather than a bare "Section".

**The old addresses redirect.** `/thalorna/section/companies/` and
`/thalorna/section/` were both live, so `assets/legacy-urls.json` records them
under `doc:companies` and Hugo emits a redirect at each to `/thalorna/company/`.
The second is the spurious section index rather than an address the note itself
published at; it is recorded here because the note is the only page that can own
the redirect, and a 404 was the alternative.

**The Iron Wolves Company joins the list.** The landing's authored list named
six of the seven company notes. That omission was invisible while the note was
not a landing; as one, the theme's gap-filler correctly flagged the seventh under
an "Orphaned Pages" heading on the page. Filing it into the list is the response
that heading asks for.

**Verified against the rendered site, not the source.** Building
`site/content` + Hugo before and after, 13 of 1,932 pages differ: the homepage
card list (loses "Section", gains "Companies" with its description), the company
landing, the seven company pages and `the-magnum-collegium` (whose
`[[doc-companies]]` link and backlinks now resolve to `/thalorna/company/`), the
two old addresses (now redirect stubs) and the sitemap, which loses exactly those
two URLs. `build/packs-json` differs in exactly one document — the `Companies`
journal, by the added Iron Wolves bullet; the frontmatter change compiles to
nothing, and the file move changes neither the note's `id` nor its `folder`. The
link manifest keeps its 2,345 entries, with `thalorna-doc-companies` moving from
`section/companies/` to `company/`. `lint:format` is clean, and
`lint:markdown` / `lint:addresses` / `lint:content-links` report the same
146 / 2 / 68 pre-existing findings as `main`.
