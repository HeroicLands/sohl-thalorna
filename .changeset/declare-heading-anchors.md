---
"sohl-thalorna": patch
---

Declare the heading anchors 68 links were addressing (#101).

`content-build links` reported **68 dead anchors**, and the tree's link check has
been red on them. They were not 68 mistakes: sixteen notes were authored as
though a heading's text were addressable on its own.

**The links were already correct.** `auditLinks` compares `slugify(anchor)`, so
an author may write the heading's prose and it is slugified for them. An anchor
is only _addressable_, though, when its heading declares one — `anchorsOf`
matches `{#slug}` and nothing else. Across the sixteen destination files there
were **229 headings and not one `{#slug}` between them**.

**Not solved by deriving a slug for every heading.** A slugged heading starts its
own JournalEntryPage, whose id is derived from the note id and the slug so that
link and page agree without shared state — Foundry UUIDs cannot address a
position _inside_ a page. Marking a heading is a decision about page boundaries,
so auto-deriving 229 of them would silently split sixteen notes into dozens of
pages. 27 headings are marked here: exactly those something links to.

**The two that named no heading at all.** `#Northern Fertile Crescent` and
`#Southern Savannahs` are **bold phrases** inside `## Geography` in
`Xerathia_Continent.md`, not headings. Each also has a note of its own, already
cited that way elsewhere in the tree, so both links now address the note instead
of a section of the continent overview:

```diff
-[[doc-xerathia#Northern Fertile Crescent|Northern Fertile Crescent]]
+[[doc-nrthrnfrtlrgn|Northern Fertile Crescent]]
-[[doc-xerathia#Southern Savannahs|Southern Savannahs]]
+[[doc-sthrnsvnhs|Southern Savannahs]]
```

That is better than inventing an anchor on `Xerathia_Continent.md`: the reader
lands on the page about the place rather than on a paragraph mentioning it.

**Verified.**

```text
before: 68 link problem(s) across 1716 note(s)
after:  1720 notes: every anchor link lands and every qualified address resolves
        (2 cross-package reference(s) via manifest), no wikilink in frontmatter,
        every homepage address resolvable.
```

`content-build lint` reports the same **15** findings before and after — all of
them the pre-existing `birthsign`/`bodyStructure` class
(HeroicLands/package-build#60), neither introduced nor fixed here.

**No prose moves.** 29 insertions and 29 deletions across 16 files: 27 headings
gain a slug on the end, and two link targets change. Every heading's text is
untouched.
