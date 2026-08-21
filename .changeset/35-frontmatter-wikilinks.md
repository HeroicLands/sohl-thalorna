---
"sohl-thalorna": patch
---

**Refuse a wikilink authored inside a frontmatter value, and fix the one there was.**

The site content build walks a note's **body** and copies its frontmatter through
verbatim, so a `[[…]]` written in a `description`, a `government.summary`, or any
other prose-bearing field is never resolved. It reaches the reader as literal
brackets, in whatever the theme renders that field as, and nothing downstream
notices — the value is a perfectly good string, so the page builds and the defect
is visible only to someone who looks at the rendered field.

Grukarhölm's polity infobox showed its Government row as
`[[being-grkrahk|Grukar-ahk]]` at `/thalorna/polity/grukarholm/`, while the same
link twice in the note's body resolved correctly. The row now reads as prose. It
was the only occurrence in the tree.

`build-site-content` now reports every wikilink it finds in frontmatter — naming
the file, the dotted key path, and the link as written — and fails before it
writes a single page.

The form is refused rather than resolved on purpose. Resolving it would mean
choosing an output syntax for a field whose renderer this build does not know — a
markdown link is inert in a Hugo template that prints the value as text, and an
`<a>` is unusable in one that escapes it — and it would bless an authoring habit
the pack compilers have no way to honour at all. Frontmatter carries data; a link
belongs in the prose the field summarises.

Values are read from the _parsed_ frontmatter, so a `[[` inside a YAML comment is
not a hit, and nested maps and lists are walked.

The SoHL system repository guards its own knowledgebase export the same way
(HeroicLands/Song-of-Heroic-Lands-FoundryVTT#1428), where the rule is written down
for content authors.

(Closes #35.)
