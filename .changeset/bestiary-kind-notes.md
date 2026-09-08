---
"sohl-thalorna": patch
---

**Six creature kinds move out of the bestiary index into notes of their own.**

`Thalorna_Bestiary` is a `doc/reference` — a catalogue — but six of its sections had grown into real
prose about a kind of creature rather than an index of instances. Those are now `lore/bestiary` notes
under `Lore/Bestiary`, with the catalogue linking to each:

| Note                       | Address               |
| -------------------------- | --------------------- |
| Constructs _(alias Golem)_ | `lore-golemcrtr`      |
| Dreadspawn                 | `lore-dreadspawncrtr` |
| Elementals                 | `lore-elemcrtr`       |
| Grukar                     | `lore-grukarcrtr`     |
| Goblins                    | `lore-goblincrtr`     |
| Helspawn                   | `lore-helspawncrtr`   |

Grukar was the bulk of it at 94 lines — biology and reproduction, the inherited mind, the hive-like
society, the Ahk's quiet hand, the subspecies and the threat they pose — all of which reads as an
essay about a folk rather than as a catalogue entry. Helspawn brought 28, including the undead
hierarchy from Nightwights down to the degraded Helthraals.

Each note keeps its own `dataview` table, so it still lists its own creatures; the bestiary keeps the
heading and a link.

**Thirteen references had to move with them.** Twelve notes cited
`doc-thlbestiary#helspawn` and one cited `#grukar` — from the Nüszōk Rëit, the Thrall spell, Souls
and Spirits, the Grukar-ahk, the Ghost Ships adventure and the Tānvüri subversive threats. Those
anchors no longer exist, so every one is repointed at the note that now holds the content, which is
a better address anyway: it names the subject rather than a position in a catalogue.
