/*
 * This file is part of the Song of Heroic Lands (SoHL) system for Foundry VTT.
 * Copyright (c) 2024-2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.com>
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
 * Pack export CLI — vault → committed JSON tree.
 *
 * Reads the HeroicLands vault and writes per-entry JSON to each pack's
 * `assets/packs/<name>/_source/` tree. The compiled LevelDB packs are
 * produced later by `npm run build:compiledb`, which only needs the
 * committed JSON — contributors without the vault can build without
 * running export.
 *
 * Folder hierarchies are declared in each pack's `folders.yaml`. Vault
 * frontmatter references folders by id (e.g.
 * `sohl.folder: O9ilOMwjidmb04JY`); unknown ids fail the export.
 */

import fs from "fs";
import path from "path";
import log from "loglevel";
import prefix from "loglevel-plugin-prefix";

import { Items, ITEM_TYPES } from "./items.mjs";
import { Journals } from "./journals.mjs";
import {
    buildStats,
    loadFolders,
    buildFolderResolver,
    writeFolderDocs,
    walkMarkdownTree,
} from "./helpers.mjs";

// The vault is the sibling `../HeroicLands` checkout by default. `HEROICLANDS_VAULT`
// overrides it, so an export can be run against a worktree or a branch checkout
// without moving the maintainer's working copy.
const VAULT_BASE = path.resolve(process.env.HEROICLANDS_VAULT || "../HeroicLands");
const PACKS_ROOT = path.resolve("./assets/packs");
const STATS_VERSION = "0.6.0";

/**
 * Packs that source content from the vault. Each entry drives one
 * export pass: load folders.yaml, wipe and recreate `<packRoot>/_source/`,
 * write folder docs, then run the pack's compiler.
 */
const PACK_CONFIGS = [
    { name: "items", packClass: Items, documentType: "Item" },
    { name: "journals", packClass: Journals, documentType: "JournalEntry" },
];

log.setLevel("info");
prefix.reg(log);
prefix.apply(log, {
    format(level, _name, timestamp) {
        return `[${timestamp}] [${level.toUpperCase()}]:`;
    },
    timestampFormatter(date) {
        return date.toISOString();
    },
});

/* ------------------------------------------------------------------------ */
/*  Main                                                                    */
/* ------------------------------------------------------------------------ */

async function exportPack({ name, packClass, documentType }) {
    const packRoot = path.join(PACKS_ROOT, name);
    const sourceDir = path.join(packRoot, "_source");
    const foldersFile = path.join(packRoot, "folders.yaml");

    log.info(`Pack ${name}: → ${sourceDir}`);

    let folderList;
    let resolver;
    try {
        folderList = loadFolders(foldersFile);
        ({ resolver } = buildFolderResolver(folderList));
    } catch (err) {
        log.error(`${name} folders.yaml validation failed: ${err.message}`);
        return 1;
    }

    // Wipe and recreate _source/ so deleted vault notes don't leave stale JSON.
    fs.rmSync(sourceDir, { recursive: true, force: true });
    fs.mkdirSync(sourceDir, { recursive: true });

    writeFolderDocs(folderList, buildStats(STATS_VERSION), sourceDir, documentType);

    const pack = new packClass({
        vaultBase: VAULT_BASE,
        dest: sourceDir,
        folderResolver: resolver,
    });
    await pack.compile();
    return pack.errorCount;
}

/**
 * Types whose compiler reads the `sohl:` block. Items build their whole system
 * data from it; the actor types do the same in the actors pack, which the vault
 * feeds but this script does not yet drive — they are listed so their notes are
 * not mistaken for orphans.
 *
 * `doc` is deliberately absent: a journal is prose, and the journals compiler
 * reads no game data at all. That is the whole point of the audit below.
 */
const GAME_DATA_TYPES = new Set([...ITEM_TYPES, "character", "creature"]);

/**
 * Frontmatter keys that live under `sohl:` without being game data — they say
 * where a note files or how it is grouped, not what it *is*. A note carrying
 * only these is not claiming to compile into anything.
 */
const NON_GAME_SOHL_KEYS = new Set(["folder", "kbcat"]);

/**
 * Report any note that carries authored game data its `type` cannot compile.
 *
 * This is the failure #1429 was filed for: nineteen notes held a complete
 * `sohl:` affiliation block — subtype, offices, standings — but were typed
 * `doc`, so they compiled as journal prose and the game data was simply inert.
 * Nothing said so; each note published and read correctly, and only Foundry
 * knew the bodies could not be dropped on a character.
 *
 * A note is reported when its `type` has no compiler at all, or when it is
 * `doc` — whose compiler reads prose and nothing else. Either way the `sohl:`
 * block is authored into a void.
 *
 * This warns rather than fails: a new type gains a compiler in a later commit
 * than the notes that use it, and blocking the whole export on that ordering
 * would be worse than reporting it.
 *
 * @param {string} vaultBase - Absolute path to the vault root.
 * @returns {number} The number of notes reported.
 */
function auditUncompiledGameData(vaultBase) {
    const orphans = [];
    for (const { frontmatter: fm, absPath } of walkMarkdownTree(vaultBase)) {
        if (!fm || fm.package !== "thalorna" || fm.draft === true) continue;
        if (GAME_DATA_TYPES.has(fm.type)) continue;
        const sohl = fm.sohl;
        if (!sohl || typeof sohl !== "object" || Array.isArray(sohl)) continue;
        const gameKeys = Object.keys(sohl).filter(
            (k) => !NON_GAME_SOHL_KEYS.has(k),
        );
        if (!gameKeys.length) continue;
        orphans.push({ absPath, type: fm.type ?? "<none>", gameKeys });
    }

    if (orphans.length) {
        log.warn(
            `${orphans.length} note(s) carry a 'sohl:' game-data block that no compiler reads — ` +
                `their 'type' compiles prose, or nothing at all, so the data is inert:`,
        );
        for (const o of orphans) {
            log.warn(
                `  type: ${o.type}  [${o.gameKeys.join(", ")}]  ${o.absPath}`,
            );
        }
    }
    return orphans.length;
}

async function main() {
    if (!fs.existsSync(VAULT_BASE)) {
        log.error(
            `HeroicLands vault not found at ${VAULT_BASE}. The export step requires the vault as a sibling repo.`,
        );
        process.exit(1);
    }

    log.info(`Vault: ${VAULT_BASE}`);

    let totalErrors = 0;
    for (const config of PACK_CONFIGS) {
        totalErrors += await exportPack(config);
    }

    auditUncompiledGameData(VAULT_BASE);

    if (totalErrors > 0) {
        log.error(
            `Export completed with ${totalErrors} error(s). _source/ tree(s) may be partial.`,
        );
        process.exit(1);
    }

    log.info("Export complete.");
}

main().catch((err) => {
    log.error(err.stack || err.message);
    process.exit(1);
});
