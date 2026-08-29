---
"sohl-thalorna": patch
---

**`assets/content/README.md` documents the `draft` tag.** The paragraph telling
authors how to mark an unfinished note described a mechanism this repository
stopped using at #42, which converted all 267 such notes to a `draft` tag. The
README is not a note — no frontmatter of its own — so no build or lint read it,
and it went on describing the old shape.

It now shows the tag, and says what the tag does: nothing. No build reads
`tags`, so a tagged note compiles into its pack, appears in the link manifest,
publishes to the site, and may be linked to exactly as any other note does. It
marks the note as unfinished for the person reading the tree, and a generated
content table can select on it (`FROM #draft`).

Documentation only (#82). No note frontmatter, no `draft` tags, no build
behaviour, and nothing compiled changes.
