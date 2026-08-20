/*
 * This file is part of the Thalorna Setting module for the Song of Heroic
 * Lands (SoHL) system for Foundry VTT.
 * Copyright (c) 2024-2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 *
 * This work is licensed under the GNU General Public License v3.0 (GPLv3).
 * You may copy, modify, and distribute it under the terms of that license.
 *
 * For full terms, see the LICENSE.md file in the project root or visit:
 * https://www.gnu.org/licenses/gpl-3.0.html
 *
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

/**
 * This repository's content-build configuration — everything about the pack
 * pipeline that is *this* repository's rather than the shared toolchain's
 * (#1508, #1512).
 *
 * The compilers themselves live in `@heroiclands/content-build`, installed as a
 * devDependency; this file is the whole of what used to be a vendored copy of
 * `utils/packs/`. Every value those compilers carried as a module-level
 * constant — which content package they select, which Foundry package ships the
 * result, where the content tree and the build outputs live, what each compiled
 * document's `_stats` block says, and which packs exist — is declared here.
 *
 * **Paths, not captured values.** `paths.packageManifest` says *where* the
 * shipped Foundry manifest is; the package-id guard and the compiled packs'
 * `_stats.coreVersion` both read it from there, so moving
 * `compatibility.minimum` moves the stamp without touching this file. Nothing
 * here may copy a value the manifest owns.
 *
 * @module
 */

import path from "node:path";
import { fileURLToPath } from "node:url";

// Both specifiers name the *leaf* contract module, never the package root
// barrel: the barrel pulls in the compilers, the compilers read the resolved
// configuration, and resolving it loads this file — so importing the barrel
// here would close a cycle around this file's own evaluation.
import { defineConfig } from "@heroiclands/content-build/config";
import { ITEM_BUILDERS } from "@heroiclands/content-build/sohl/item-builders";

export default defineConfig({
  // Anchors every configured path, so the build reads the same files whatever
  // directory it was launched from — the property the vendored pack helpers
  // used to get by resolving paths against the working directory, which breaks
  // the moment the toolchain is installed under `node_modules/`.
  rootDir: path.dirname(fileURLToPath(import.meta.url)),

  // The distribution unit a note declares in its `package:` frontmatter. The
  // pack compilers select their entries by it, and it is stable across
  // compilation targets. This is the value that made a shared toolchain
  // necessary: until #1502 the compilers filtered on the literal `"sohl"`, so
  // this repository would have compiled nothing at all (#1441).
  contentPackage: "thalorna",

  // The Foundry package the packs ship in — the `id` in
  // `assets/templates/module.template.json`, and the first segment of every
  // compendium UUID the compilers emit. Distinct from `contentPackage` above:
  // a note says `package: thalorna`, and the documents it compiles into are
  // addressed as `Compendium.sohl-thalorna.<pack>.<Type>.<id>` (#1498).
  foundryPackage: "sohl-thalorna",

  // Thalorna ships as a Foundry *module* — hence `module.template.json` rather
  // than a system manifest.
  packageKind: "modules",

  // Stamped into every compiled document's `_stats`. `systemId` names the game
  // system the content is *for*, which this module — shipping SoHL content —
  // declares as "sohl". `coreVersion` is deliberately absent: it is read from
  // the manifest's `compatibility.minimum`.
  stats: {
    systemId: "sohl",
    systemVersion: "0.6.0",
    lastModifiedBy: "sohlbuilder00000",
  },

  // Which content types compile into Items, and what builds each one's
  // `system` block. `itemTypes` and the doc-carrying-type set are derived from
  // these keys, so a type cannot be accepted without a builder behind it
  // (#1504). Thalorna's items are SoHL items, so it takes the toolchain's SoHL
  // builder table unchanged.
  itemBuilders: ITEM_BUILDERS,

  // The one pack list. `actors` is deliberately absent: a Thalorna character or
  // creature is authored as nested items addressed by shortcode
  // (`attribute:str`, `skill:awar`), and almost all of those are defined by the
  // **`sohl` package**, which this repository does not hold. A trial run
  // compiled 145 actors while reporting 14,087 unresolved items — a pack that
  // builds green and is empty where it matters. Nothing regresses by leaving it
  // out: the actors compendium has always shipped empty. Turning it on needs
  // the `sohl` package's compiled items available as a build-time catalog, at
  // which point re-enabling it is this list and nothing else (#1441).
  packs: [
    { name: "items", type: "Item", folders: "item-folders.yaml" },
    {
      name: "journals",
      type: "JournalEntry",
      folders: "journal-folders.yaml",
    },
  ],

  // This repository publishes a website (at `/thalorna/`) and a link manifest,
  // and consumes the manifest of the `sohl` package it links into — vendored at
  // `assets/manifests/sohl.json` (#1385/#1451).
  publish: {
    site: true,
    manifests: { publish: true, consume: true },
  },
});
