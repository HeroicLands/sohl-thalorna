# sohl-thalorna

## 0.0.2

### Patch Changes

- b19d88f: **Content Changes**

  - Aelwyth becomes a place with politics: Its four realms get real populations
    and real societies, and the island gets twelve new regions and features, its
    settlements written out.
  - Grukar infest the uninhabited interior of Aelwyth.
  - The Kingdom of Aelwyth was an Elder Races reconciliation, and the
    _Battle of Three Sisters_ in 1984 BF is where it died with the Sinalë king.
  - Numerous named places, people, and lore that existed only as prose now have
    individual entries.
  - The deep prehistory has been enhanced, including:
    - **Khazártúrn** — the Khazári city also known as the _Valley of Seven Towers_.
    - The **Varkhad**, whose attacks initiated the _Pelwar Migrations_ to both Aelwyth
      and all across western Ankaris.
  - Ta'Kheperu massively enhanced, including all new regions and polities,
    characters, and lore notes regarding Ta'Kheperu society.
  - Rewrite of many religions to update correct hierarchies and beliefs, including
    10 new Itzáni gods and the First Gods, as well as spirit traditions for
    the Nyáluba, the Old Way, and Okháris.
  - Provènzia, Élavendre and other northwestern Ankaris places and institutions have
    expanded notes.

  **Asset Changes**

  - Shipped new original portrait images and icons

- 138cbf8: **Content tables are now written in SQL.**

  All 65 tables across 34 notes move from Dataview's query language to **SQL, run
  by DuckDB over the content index** — the language package-build is standardising
  on. Nothing about how a table is authored changes: it is still a fenced block in
  the note, answered at build time, rendered into the journal and the page.

  Most tables emit exactly what they emitted before. Four publish better material,
  because SQL refuses a field no note carries where Dataview quietly rendered an
  em-dash:

  | Table                                 | Before                             | After                                       |
  | ------------------------------------- | ---------------------------------- | ------------------------------------------- |
  | The six bestiary tables               | Weight and BodyScale were `—`      | the values the notes declare                |
  | Hex Hodai incantations                | Level was `—`, rows sorted by name | the incantation's level, sorted by it       |
  | Heroes and Knaves · Heroes of Asguard | Realm and Occupation were `—`      | Occupation; Realm dropped — no note has one |
  | Pantheons, on _The World of Thalorna_ | 32 rows, 15 of them rituals        | the 17 actual pantheons                     |

  The Pantheons table is the one place rows disappear. Dataview's `contains`
  matches a substring, so a note tagged `celestial-pantheon` — every _Ritual:_
  note — answered a query asking for `pantheon`. SQL matches the tag itself.

  Row order is unchanged. SQL collates binary where the old evaluator folded
  case, so a table sorted by a name asks for `COLLATE NOCASE` — which is what keeps
  `The Order of the Ashen Vow` ahead of `The Order of Týr's Justice`.

- 0123127: **Content Changes**

  - Bestiary notes now state a being's default combat group in one place rather
    than two. The compiled packs are unchanged.

- aff812c: **The emphatic k is written q, the way most romanisations write it**

  Two language notes spelled the emphatic/uvular k as `ḳ` — k with a dot below —
  once each, in the same list of emphatic consonants:

  | Note    | Was                                                     | Now                                                     |
  | ------- | ------------------------------------------------------- | ------------------------------------------------------- |
  | Kheperi | `Emphatic (pharyngealized): ṭ, ḍ, ḳ`                    | `Emphatic (pharyngealized): ṭ, ḍ, q`                    |
  | Bethuan | `**Emphatics** (ṭ, ḍ, ḳ) collapse into plain _t, d, k_` | `**Emphatics** (ṭ, ḍ, q) collapse into plain _t, d, k_` |

  Semitic romanisation writes this sound either way, and `q` is both the commoner
  choice and pure ASCII. It also agrees better with what the Kheperi note already
  says about it — `q` _is_ the uvular stop, and the line describes the sound as
  "marked acoustically by uvular constriction".

  `ṭ` and `ḍ`, its companions in both lists, are unchanged: they are carried by
  essentially every book face, and `ḳ` was carried by almost none. Of the
  thirty-nine OFL text faces probed over the whole corpus, this letter and the
  `ṁ` respelled alongside it were the only two characters standing between the
  tree and a wide choice of faces — together they take the number of faces that
  can set this corpus from **eleven to twenty-one**, adding Literata, Spectral,
  Vollkorn, Source Serif 4, Crimson Pro, Piazzolla, Bitter, Petrona, Alegreya and
  Cormorant Garamond.

  The phonology says what it said before, and the tree now contains no `ḳ`.

- c20adb0: **The romanisation rules stop breaking themselves**

  The table setting out which letters Nordmal never writes listed those letters by
  printing them, so the note stating that thorn, eth and ash have no place in the
  content was the one place they still appeared — and any check enforcing the rule
  would have failed on the rule. They are named now instead of shown, which also
  reads better for anyone who has never met the word _thorn_ as a letter. The same
  went for an o-ogonek used as an example in the lore note.

  No name or word changes. The tree now holds none of these letters at all.

- 49b92b3: **Saṃgha is spelled the way the transliteration standard spells it**

  The city-state of Saṃgha was written with `ṁ` — m with a dot _above_ — in the
  three places it appears. The IAST convention that the surrounding Vedyaran names
  already follow (Dhanurvedakīrtirāja, Ādānaśreṇī) renders anusvāra as `ṃ`, m with
  a dot _below_, so the name was the one word in its own neighbourhood using a
  different system.

  It also widens what the tree can be printed in. Of thirty-nine OFL text faces
  probed over the whole corpus, the dot-above `ṁ` is carried by **three**; the
  dot-below `ṃ` is carried by **every one of them**. Nine otherwise-complete book
  faces — among them Literata, Spectral, Vollkorn and Source Serif 4 — were
  disqualified by this one character and are now available. With `ḳ` respelled
  alongside it, the number of faces that can set this corpus goes from **eleven to
  twenty-one**.

  No other note used the letter. The name reads and sorts as it did.

- e63f648: **Every name can now be found by typing it**

  Names in Thalorna carried letters that no search box can reach. A search that
  folds accents normalises to NFD and drops combining marks, which quietly handles
  _â_ — it is an _a_ wearing a circumflex, so typing `harn` finds Hârn with nobody
  arranging it. Thorn, eth and ash are not accented letters. They are letters in
  their own right with no plain letter inside them to reduce to, so typing `thorr`
  could never reach a name spelled with a thorn, and position made it worse:
  _Skjaldmær_ at least answered a `skjaldm` prefix, while _Þórr_ failed on the
  first keystroke.

  Those letters are now written out. Accents stay throughout, because they cost a
  reader nothing:

  | sound                         | now           | was |
  | ----------------------------- | ------------- | --- |
  | voiceless dental fricative    | `th`          | þ   |
  | its merged voiced counterpart | `d`           | ð   |
  | the low front vowel           | `ae`          | æ   |
  | the rounded back vowel        | `ö`           | ǫ   |
  | long vowels                   | `á é í ó ú ý` | —   |

  So Óðinn is **Ódinn**, Þórr is **Thórr**, Skjaldmær is **Skjaldmaer**, and
  _seiðr_ is _seidr_. O-ogonek folds correctly but is missing from two of the three
  faces the system ships, so it becomes o-umlaut and stops falling back mid-word in
  sheet headers.

  The northern assembly is the one word that does not take `th`: spelled that way
  it becomes _thing_, an ordinary English noun with some 2,800 uses already in the
  tree, and the word would never be found again. It is the **ting**.

  Two names contradicted the tree rather than the rule, and follow it now —
  Asgarthul is **Asgardul**, since the element is `gard` in Asgard, Midgard,
  Valgard and Isgard; and Blóth is **Blód**, since blood is `blod` in Blodtusc and
  its own note calls it the Place of Blood-Sacrifice. Blóthöll keeps its `th`,
  which is a seam between two words rather than one sound, and Vithgard keeps its
  own — it was always plain ASCII and passes untouched.

  Filenames were reduced by the same broken rule, which deleted what it could not
  decompose: Óðinn sat on disk as `Oinn.md` and Æthería as `theria.md`, a file that
  sorted under _t_ and began mid-word. They transliterate now, along with 27 paths
  that had never been folded to ASCII at all.

  Nothing that identifies a document moved. Shortcodes, addresses, pack folders and
  `home:` references are unchanged, so saved data and cross-package links resolve
  exactly as before. The rule itself is written down, in a **Romanising Nordmal**
  section in the language note and a **Romanising Thalorna** section in the lore
  note, so the next name gets it right without anyone re-deriving it.
