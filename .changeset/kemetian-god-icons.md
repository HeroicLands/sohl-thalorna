---
"sohl-thalorna": patch
---

**The twelve Kemetían gods get their icons.**

The Twelve were all falling back to default art — `systems/sohl/assets/icons/noun/shield.svg` on the
faith affiliations, `systems/sohl/assets/icons/other/head-gear.svg` on the `Ritual:` skills — while
comparable cults elsewhere in the tree carry real artwork. Each of the twelve now declares
`img: icons/takheperu/<god>.svg`, which the build resolves to
**`modules/sohl-thalorna/assets/icons/takheperu/<god>.svg`**.

Applied on three surfaces per god, thirty-six notes in all: the **faith affiliation**, the **`Ritual:`
skill**, and the **deity lore note**.

Two things worth recording about that third one. The authored `img:` on a `type: lore` note **does not
reach the compiled document** — lore compiles to a JournalEntry, which carries no top-level `img`, and
`Parrot` (which has declared one since long before this work) compiles with `img: null` exactly the
same way. So the twelve lore-note entries are consistent with the forty-five totem notes that already
do this and presumably serve the knowledgebase, but they change nothing in Foundry. The twenty-four
that matter — affiliations and skills — resolve correctly.

Still on default art, for want of icons rather than for want of wiring:

- the **seven gods outside the Twelve** — Mentu, Sobek, Wadjit, Min, Anhur, Shesmu, Khet'Amun
- the **eight Houses of the Khemenu Hekau**, and its **forty-eight incantations**

The Houses could be pointed at the god icons of the cults that teach each domain — Má'át's for
Maat'ken, Thōth's for Ren'sesh, and so on. That is deliberately not done here: the design holds that
cults _claim_ domains rather than own them, and giving each House a god's icon would assert the
ownership in the one place a reader actually looks.
