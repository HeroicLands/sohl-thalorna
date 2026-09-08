---
"sohl-thalorna": patch
---

**The Embassy from Dúnavarre to Tānvür becomes a folder, and its cast and geography become notes.**

The adventure moves to `Adventures/Embassy_from_Dunavarre_to_Tanvur/` and is joined there by **sixteen
being notes** — the whole retinue, each carrying the role, background and intrigue the adventure had
been holding in a bullet list: the Chamberlain who resents the Ambassador, the Scribe and the
Diplomatic Aide in a secret relationship neither the Faith of Jánus nor Vylaria would leave alone, the
Spymaster being fed falsehoods by the agent who has his measure, the Steward embezzling to pay a
thieves' guild that has threatened his daughter, and the Chief Cook who helped murder a Tarvennan
Senator in 717.

**Twenty-nine more notes** give the adventure's geography and institutions addresses: the Provènzian
sites and cities (two blood-fields, Batáren, Hárivren and Válaren, the Gulf, Lake Tiravel, Mount
Hýdraven, Ménavar Abbey, Lhénavren, the Maze of Echoes), the Necropolis of Magnápolis, the River
Vylaris, Grímvar and Hrafnvar under Lögnheim, the Kalihara Confederation, the Order of the Just Blade,
the Saelvri, Njörven and its cult, King Hákon III, and the lore notes for Ragnarok, the Per-Aás,
King Trédavar III, the Foreign Traditions Comparative and the Giochi Grandi.

The Heart of Dhiríkri is a `miscgear` note — `miscgear` is a note **type**, not a subType, so it
addresses as `miscgear-heartofdhirikri`.

Nineteen names in the adventure now link to the notes that hold them.

**Three things needed a decision:**

- **`place-laurelosse` was taken.** A destroyed Sinalëan enclave in Nordheim already holds it, and a
  Provènzian site is a different place, so the new one takes `laurelosse2` on the corpus's existing
  pattern (`calypsa2`, `athenikos2`).
- **The Umbral Court has no note**, and was not in the list, so the two references to it in the
  Steward's and his daughter's notes are plain emphasis rather than an invented address.
- **`dunvarre` is not an address** — the Kingdom of Dúnavarre is `kingdmdnvr`, which is what the
  Saelvri's `nemesis` relation and the retinue's affiliations point at.

Every lint step CI runs passes.
