---
"sohl-thalorna": minor
---

**This repository moves to `@heroiclands/package-build@^17.0.0`, whose major
implements the content format the package publishes.**

The declared range becomes `^17.0.0` and the lockfile resolves it; nothing
transitive moves.

`lint:addresses` goes from **2,001 findings to 20**, and none of the 1,981 was
a content defect. `docs/content-format.md` and the linter had drifted in both
directions, and this tree authors more of the format than any other, so it
carried nearly all of the consequence:

- `place`, `lore` and `scenario` reached no schema, so each of those 450 notes
  was reported as having no schema **and then skipped entirely** — its `data:`,
  `subType`, references and system block all went unexamined.
- `lore`, `epithet` and `symbol` reached no vocabulary, so 1,531 notes that
  followed the specification exactly were told their property did not exist,
  and the value was dropped from the closed `data:` container rather than
  reaching the page.

The 20 that remain are real: 18 embedded shortcode collisions (#144 fixes the
four gear ones) and two stale keys on one note, `birthsign` and
`bodyStructure` (#141).
