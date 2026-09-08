---
"sohl-thalorna": patch
---

**The thirty-one roster nomes get their own notes, and the Sekhet'Neru turns out to be the working
instance of half the religion.**

Ta'Kheperu's thirty-nine nomes were three flagship notes per class and a table row for everyone else.
The rows are good seeds — each carries a seat, a patron, a population and a one-line character — so
each roster nome now has a nome note and its seat a settlement note: **sixty-two new notes**, wired to
the patron cult the table already named, parented to the nome-class, and carrying the standard Kheperi
nine-rank ladder from Outcast to Per-Aá. The three class notes now link every row, and their
_"the remaining eight are rostered here"_ sentences are updated.

**Sekhet'Neru is the answer to a question I raised and didn't follow.** When I built the Sobek cult I
invented an office called **Sanctioner of the Cull** from a tension in the prose: the crocodile is
sacred to the god and is also the beast that takes farmers along the river, so someone must license
the killing. The Sekhet'Neru note documents that arrangement in full, and it had been sitting there
the whole time:

- It is a **sacred hunt**, not a trade — nobles of the Medjay caste bound by obligation to cull the
  hippopotami and crocodiles that destroy crops and capsize boats.
- Its **Wab of the Hunt** carries the temple's own acolyte-title inside a hunting company, and reads
  the river gods' will before any expedition, _"without whose word it does not launch."_
- Its current crisis is precisely a licensing crisis: the scale of the cull exceeds what ritual
  permits, so the Steersman had to seek **a special dispensation from the temple**, granted grudgingly
  by a Hem'Netjer who is a political rival, with conditions amounting to surveillance.
- The kill is divided as an offering — _"prime cuts to the temple and the Haty'a, secondary cuts to
  the farming villages, bones and hides to the craftspeople"_ — which is Per'Nuw's **Temple supply**
  operation seen from the inside.

So it slots into three things at once: the **Sobek** cult (which licenses the cull), **Per'Nuw** (whose
note already describes the jurisdictional accommodation between guild licence and Medjay charter), and
the temple hierarchy (whose Hem'Netjer can revoke the charter). It is now wired to all of them.

**And it names an eighth god outside the Twelve.** The company _"appeases the river god Khet'Amun"_,
the river _"belong[s] nominally to the Haty'a but spiritually to Khet'Amun"_, and every beast taken is
_"commended to Khet'Amun for judgment."_ **Faith of Khet'Amun** now exists, and it is deliberately
unlike the valley cults: no great temple and no Wer'Hekau of its own, a four-rank structure carried by
the hunting companies that work the river rather than by a priesthood. Its **Reader of the Water** has
teeth — an unfavourable reading stops the hunt, which gives the office real power over a company whose
charter depends on hunting successfully, and makes a reader whose pronouncements have grown hard to
parse the party's most dangerous secret.

**One build note worth recording:** `packFolder` must address a **folder note that exists**. Pointing
the new notes at a per-nome folder raised compile errors from 95 to 188 — _"no folder note is
addressed 'wawat'"_ — cleared by using the nome-class folders (`bordernomes`, `deltanomes`,
`upperrivernomes`) that are already declared. Roster nomes living in the class folder also keeps the
flagship/roster distinction the tree already draws.

Link problems hold at 85 and compile errors at 95, both unchanged by the sixty-five new notes.
