---
"sohl-thalorna": minor
---

**This tree's folders are notes** (#151).

The three `assets/content/*-folders.yaml` files are gone. Each folder is a
`type: folder` note under `assets/content/Folders/`, and the 1,461 notes that
named a folder by its Foundry id name it by address instead:

```yaml
packFolder: nordheim # was: folder: tUOAFxX25mViDE7q
```

**Every folder keeps its authored `id`**, so a world already holding these
folders goes on resolving them — this is a build change, not a world migration.

**286 folder entries became 210 notes**, because a folder declared in two packs
was two entries and is one folder: 76 ids appeared in more than one file.

**46 folders are filed under a different parent in each pack**, and the notes
say so. That is deliberate and worth keeping: the items pack groups by document
kind and the journals pack by setting geography, so `Nordheim` sits under
`Polities` in one and `Nordlands` in the other. Those notes state `parent` per
pack.

**Empty `folder:` keys are gone too.** 52 notes carried a `folder:` with no
value, which parses as `null` and reads exactly as an absent key — so they said
"no folder" twice. Removing them changes no emitted document.

**The defect this fixes.** 57 of the 132 item folders were absent from
`journal-folders.yaml`, so documentation journals were emitted into folders the
journals pack never declared — dangling references, silently. Compiling the tree
before and after measures it: the journals pack now ships **29 folders it did
not before**, 20 of them referenced by a journal that had nowhere to land and 9
of them the ancestors those need. A folder materialises in every pack that
references it (HeroicLands/package-build#257), so there is no second folder file
left to disagree with the first.

**Three other folder changes**, all of them intended. 56 folders that nothing
referenced — directly or as an ancestor — are no longer shipped, since a folder
now materialises where something points at it. And 54 folders whose two YAML
files disagreed about the colour keep the stated one, a folder note holding one
colour. **No content document moves**: all 2,346 of them compile byte-identical.

Three being notes are **not** converted: they name a folder id no folder file
declares, so there is no note to address (#156).

Requires the folder-note support in `@heroiclands/package-build`
(HeroicLands/package-build#276).
