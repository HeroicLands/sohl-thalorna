---
"sohl-thalorna": patch
---

**Declare what each section landing lists.** package-build#204/#208 made a
content page emit flat — a page is addressed `(type, shortcode)` and written at
the root of the content mount — so a section directory holds nothing but its own
generated `_index.md`, Hugo's `.Pages` is empty, and every one of this
repository's eleven landings rendered _"Nothing here yet."_ The relationship
between a section and its members survived only in this file, and it cannot be
recovered from the section's name: a section name is a URL its owner chose, and
a type is what a note declares.

So each entry under `site.sections` now says what it lists, in the two keys
package-build#212 added and heroiclands-hugo-theme#50 reads —
`listType`, matched against the page's `type`, and `listSubType` alongside it
where one type holds several genres. The theme's query is site-wide
(`where site.RegularPages "Type" …`), so it asks what a page _is_ rather than
where its file sits, and is indifferent to flat emission.

**Every mapping was read off the notes' own front matter**, not inferred from
the directory name. Ten of the eleven coincide with their section name;
`reference` is the one that does not — its notes are `type: doc, subType:
reference`, and because every doc genre shares `type: doc`, `listType` alone
would sweep the whole tree into it.

**Evidence, before and after on the same worktree.** Rows per landing, against
the top-level `type:`/`subType:` counts in `assets/content/`, every one of them
0 before:

| Section           | Declares                                | Rows |
| ----------------- | --------------------------------------- | ---: |
| `being`           | `listType: being`                       |  646 |
| `affiliation`     | `listType: affiliation`                 |  295 |
| `place`           | `listType: place`                       |  249 |
| `mysticalability` | `listType: mysticalability`             |  221 |
| `lore`            | `listType: lore`                        |  180 |
| `skill`           | `listType: skill`                       |  110 |
| `concoctiongear`  | `listType: concoctiongear`              |   71 |
| `weapongear`      | `listType: weapongear`                  |   25 |
| `reference`       | `listType: doc, listSubType: reference` |   21 |
| `scenario`        | `listType: scenario`                    |   21 |
| `mystery`         | `listType: mystery`                     |   12 |

**No published address moved.** `build:site-content` writes the same 1,863
files, with exactly the eleven `_index.md` differing; rendering them gives the
same 2,125 addresses and a byte-identical `sitemap.xml`, with exactly the eleven
landing pages differing and no file added or removed. The three checks this tree
is legitimately red on are red line for line: `lint:markdown` 146 findings
(#111), `lint:addresses` 1,983 findings across 1,852 notes, `lint:content-links`
122 link problems (#34, #44); `lint:format` is clean.

**Fifteen rows render with a blank label**, all of them K'ich'chik polities
under `assets/content/Regions/K.ich.chik/` that author `title: ""` and carry
their real name only in `name.full` — `Ba'alam Ki'ahk`, `K'ixim Tzul`, and
thirteen more. They sort to the front of `/thalorna/affiliation/`. It was
invisible while that landing listed nothing; it is authoring debt, not a
consequence of this change, and is left for its own fix.
