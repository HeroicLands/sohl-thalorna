---
"sohl-thalorna": patch
---

**This module now carries the same dual license as the system, and says so.** The
repository's `LICENSE` stated Keléstia Productions' Hârn fan-material terms —
copied from `sohl-kethira-basic`, where they are correct, and wrong here.
Thalorna is original content and is licensed exactly as Song of Heroic Lands is:
**GPL-3.0-or-later** for code, **CC-BY-SA-4.0** for documentation and creative
content.

The layout matches the system repository's, so the two read identically:
`LICENSE.md` explains the split and reserves the Heroic Lands marks, `src/LICENSE`
carries the GPL text, and `assets/LICENSE` carries the CC-BY-SA text. All three
ship in the built module, at the paths `LICENSE.md` points at, and the module
manifest's `license` field names `LICENSE.md` rather than the deleted `LICENSE`.

`package.json` declares `GPL-3.0-or-later AND CC-BY-SA-4.0`, replacing a bare
`CC-BY-SA-4.0` that covered only half of what the repository holds.
