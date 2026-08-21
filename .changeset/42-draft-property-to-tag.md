---
"sohl-thalorna": patch
---

**Publish the notes that other notes link to: `draft:` becomes a `draft` tag.**

The site content build skips a `draft: true` note, so a link to one resolves
nowhere and renders as bare text — the reader sees a name where the author wrote
a link, and nothing says so. Once the dead-link guard armed, those links stopped
being invisible and started failing the build instead: 19 of them, from eight
published notes.

A dropped link is the worse failure of the two. It is silent, it is invisible in
the rendered page, and finding it again means knowing it was ever there. An
unfinished page is at least honest about being unfinished, and the link into it
keeps working the day it is written.

So the flag that hid them is gone. All 267 notes that carried `draft: true` now
carry `draft` in `tags:` instead, and the 36 that carried a redundant
`draft: false` simply lose it. The tag is a source-side marker — it is not
emitted to Hugo and creates no taxonomy page — so a note is still identifiable as
unfinished while authoring, without that state deciding whether anything may link
to it.

Two addresses could not be resolved this way, because no note exists to publish:
`being-quetzal` (a bird named in Ba'alam Tza'ku's export list, beside an unlinked
"macaw") and `being-brunjarskathhel` (the only one of the six Blackpine Wolves
with no note). Both are unlinked here and recorded in #42 rather than left to
fail the build.

Two consequences of publishing the rest, both fixed here:

- `okharis-tribes-placeholder` named a `folder` id that was never declared, and
  its body was empty, so the journals compiler had nothing to build. The folder —
  Tribes, under Okháris, alongside City States — is declared, and the body reads
  `TBD`.
- The pack build was already failing on `main` for the two unresolvable
  addresses above, so unlinking them fixes `npm run build:db` as well.

The site now publishes 1,737 notes rather than 1,471, and every wikilink in them
resolves.

(Closes #42.)
