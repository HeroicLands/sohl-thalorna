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

**The defect this fixes.** 57 of the 132 item folders were absent from
`journal-folders.yaml`, so documentation journals were emitted into folders the
journals pack never declared — dangling references, silently. A folder now
materialises in every pack that references it
(HeroicLands/package-build#257), so there is no second folder file left to
disagree with the first.

Three being notes are **not** converted: they name a folder id no folder file
declares, so there is no note to address (#156).

Requires the folder-note support in `@heroiclands/package-build`
(HeroicLands/package-build#276).
