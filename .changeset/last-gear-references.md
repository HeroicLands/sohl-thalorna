---
"sohl-thalorna": patch
---

**The last four unresolved gear references are settled, and the packs compile.**
Brànwâal Dôrgaar's family signet ring now names `ringgold`, and his battle
standard is defined inline under its own `system.shortcode`. Elýsè Skýrn's
healing elixir names the Physéran Balm (`ElxHeal`), and her portable
alchemist's workshop — a wagon and two horses, which is not gear — is dropped.

Two faults in the signet ring and battle standard entries are corrected. The
ring transposed its `shortcode` and `type`, naming an item called `miscgear` of
type `ringgold`. The battle standard carried flow-style commas after `name` and
`type` in a block mapping, which made Brànwâal's frontmatter unparseable —
worth noting because that failure mode removes the note from the build without
failing it.
