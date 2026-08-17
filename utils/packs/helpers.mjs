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
 * Shared helpers for pack compilers (utils/packs/*.mjs).
 *
 * The HeroicLands vault is authoritative for compendium item data. Pack
 * compilers walk the vault, read markdown files with YAML frontmatter, and
 * emit Foundry-compatible JSON. These helpers handle the common shape:
 * markdown parsing, frontmatter access (including the nested `sohl:` block),
 * filename generation, and slug normalization.
 */

import fs from "fs";
import crypto from "crypto";
import path from "path";
import yaml from "yaml";
import unidecode from "unidecode";
import markdownit from "markdown-it";
import log from "loglevel";

export const md = markdownit({ html: true });

/**
 * Parses a markdown file with YAML frontmatter.
 * Returns { frontmatter, body, description } where `body` is the trimmed
 * raw markdown after the frontmatter block, and `description` is `body`
 * rendered to HTML. If the file has no frontmatter block, returns
 * `{ frontmatter: null, body: "", description: "" }` with a warn log.
 */
export function parseMarkdownFile(filePath) {
    const content = fs.readFileSync(filePath, "utf8");
    const fmMatch = content.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
    if (!fmMatch) {
        return { frontmatter: null, body: "", description: "" };
    }
    let frontmatter;
    try {
        frontmatter = yaml.parse(fmMatch[1]) || {};
    } catch (err) {
        log.warn(`YAML parse error in ${filePath}: ${err.message}`);
        return { frontmatter: null, body: "", description: "" };
    }
    const body = fmMatch[2].trim();
    const description = body ? md.render(body) : "";
    return { frontmatter, body, description };
}

/**
 * Recursively yields every `.md` file under `rootDir`, parsed.
 * Yields { frontmatter, description, file, absPath } for each match.
 * Silently skips directories that don't exist. Skips any directory named
 * `Templates` (Obsidian templater scaffolding; never compendium content).
 */
export function* walkMarkdownTree(rootDir) {
    if (!fs.existsSync(rootDir)) return;
    const stack = [rootDir];
    while (stack.length > 0) {
        const dir = stack.pop();
        let entries;
        try {
            entries = fs.readdirSync(dir, { withFileTypes: true });
        } catch (err) {
            log.warn(`Cannot read directory ${dir}: ${err.message}`);
            continue;
        }
        for (const entry of entries) {
            const absPath = path.join(dir, entry.name);
            if (entry.isDirectory()) {
                if (entry.name === "Templates") continue;
                stack.push(absPath);
            } else if (entry.isFile() && entry.name.endsWith(".md")) {
                yield {
                    ...parseMarkdownFile(absPath),
                    file: entry.name,
                    absPath,
                };
            }
        }
    }
}

/**
 * Resolves a dotted frontmatter key (e.g., "name.full") into the nested
 * value. Returns `defaultValue` if any path segment is missing.
 */
export function getFrontmatter(fm, key, defaultValue = undefined) {
    if (fm == null || typeof fm !== "object") return defaultValue;
    if (key in fm) return fm[key];
    const parts = key.split(".");
    let current = fm;
    for (const part of parts) {
        if (current == null || typeof current !== "object") return defaultValue;
        current = current[part];
    }
    return current !== undefined ? current : defaultValue;
}

/**
 * Reads a key from `fm.sohl` (the vault's nested system-fields block).
 * Supports dotted notation, e.g. sohlField(fm, "charges.value", 0).
 * Falls back to top-level `fm[key]` if `sohl` doesn't carry the key.
 */
export function sohlField(fm, key, defaultValue = undefined) {
    if (fm == null || typeof fm !== "object") return defaultValue;
    const sohl = fm.sohl;
    if (sohl && typeof sohl === "object") {
        if (key in sohl) return sohl[key] ?? defaultValue;
        const fromNested = getFrontmatter(sohl, key, undefined);
        if (fromNested !== undefined) return fromNested;
    }
    return getFrontmatter(fm, key, defaultValue);
}

/**
 * The standings an affiliation may declare toward another, mirroring the
 * system's `AffiliationStandingChoices`. Held here rather than imported: the
 * exporter is a plain Node script with no access to the system's TypeScript,
 * and a value missing from this list is a build error rather than a silent
 * ship.
 */
const AFFILIATION_STANDINGS = ["aligned", "unaligned", "rival", "nemesis"];

/**
 * Resolve an affiliation's `relation` map — the shortcode of another
 * affiliation → this one's standing toward it.
 *
 * An unrecognized standing would fail the schema's `choices` validation at load
 * and be dropped silently, shipping an affiliation whose authored hostility had
 * quietly become neutrality — so it is a build error instead.
 *
 * @param {object} fm - The item frontmatter.
 * @param {string} [ctx] - Label for the error (defaults to "item").
 * @returns {Record<string, string>} The persisted relation map (empty when the
 *   affiliation authors none — neutral toward everyone).
 * @throws {Error} When the map is malformed or names an unknown standing.
 */
export function resolveRelation(fm, ctx = "item") {
    const raw = sohlField(fm, "relation", undefined);
    if (raw == null) return {};
    // An empty sequence is how Obsidian's property editor renders an empty
    // map, and it says exactly what `{}` says — neutral toward everyone. A
    // *populated* sequence is still an error: it carries standings in a shape
    // this cannot read, and silently dropping them would ship an affiliation
    // whose authored hostility had become neutrality.
    if (Array.isArray(raw) && raw.length === 0) return {};
    if (typeof raw !== "object" || Array.isArray(raw)) {
        throw new Error(
            `${ctx}: relation must be a map of shortcode → standing`,
        );
    }
    const out = {};
    for (const [code, value] of Object.entries(raw)) {
        const standing = String(value);
        if (!AFFILIATION_STANDINGS.includes(standing)) {
            throw new Error(
                `${ctx}: relation["${code}"] must be one of ${AFFILIATION_STANDINGS.join(", ")}, got "${value}"`,
            );
        }
        out[code] = standing;
    }
    return out;
}

/**
 * Read the mandatory `subType` from an item's frontmatter, throwing when it is
 * absent or blank.
 *
 * Every subType-bearing item type declares `subType` as `required` with **no**
 * default in its DataModel — a subtype must always be specified, and it is an
 * error to omit it. The builder therefore substitutes no fallback: a note
 * missing `subType` is a build error, surfaced here rather than shipped as an
 * invalid (typeless-fallback) item.
 *
 * @param {object} fm - The item frontmatter.
 * @param {string} [ctx] - Optional label for the error (defaults to the note's
 *   title/name, else "item").
 * @returns {string} The declared subType.
 * @throws {Error} When `subType` is missing or blank.
 */
export function requireSubType(fm, ctx) {
    const subType = sohlField(fm, "subType", undefined);
    if (subType == null || subType === "") {
        const label = ctx || fm?.title || fm?.name?.full || "item";
        throw new Error(
            `${label}: missing required 'subType' — every subType-bearing item must declare its kind (the builder substitutes no default).`,
        );
    }
    return String(subType);
}

/**
 * Generates a compendium-source filename: `Name_id.json` with non-
 * alphanumeric runs replaced by underscores.
 */
export function makeFilename(name, id) {
    return (
        `${unidecode(name)}_${id}`.replace(/[^0-9a-zA-Z]+/g, "_") + ".json"
    );
}

/**
 * Standardize a name into a slug: lowercase, apostrophes removed,
 * non-alphanumerics collapsed to single hyphens.
 */
export function slugify(name) {
    return String(name)
        .toLowerCase()
        .replace(/['’]/g, "")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");
}

/**
 * Build a documentation URL from an item type and slug:
 *   https://heroiclands.org/sohl/{type}/{slug}/
 * If the slug is absent, slugifies the display name.
 */
export function buildDocUrl(type, slug, fallbackName) {
    const finalSlug = (slug && String(slug).trim()) || slugify(fallbackName);
    return `https://heroiclands.org/sohl/${type}/${finalSlug}/`;
}

/**
 * Parses the valueDesc / threshold array format. Accepts either:
 *   - Array of "Label:MaxValue" strings, e.g. ["Ugly:4", "Plain:12"]
 *   - Array of objects, e.g. [{ label, maxValue }]
 * Returns a normalized array of `{ label, maxValue: number }`.
 */
export function parseValueDesc(raw) {
    if (!raw || !Array.isArray(raw)) return [];
    return raw.map((entry) => {
        if (typeof entry === "string") {
            const [label, maxStr] = entry.split(":");
            return {
                label: (label ?? "").trim(),
                maxValue: parseInt(maxStr, 10) || 0,
            };
        }
        if (typeof entry === "object" && entry?.label !== undefined) {
            return {
                label: String(entry.label),
                maxValue: Number(entry.maxValue) || 0,
            };
        }
        return { label: String(entry), maxValue: 0 };
    });
}

/**
 * Resolves the display name from frontmatter, preferring `name.full`,
 * falling back to `name` (if string), then `defaultValue`.
 */
export function resolveName(fm, defaultValue = "Unnamed") {
    const fullName = getFrontmatter(fm, "name.full", null);
    if (fullName) return String(fullName);
    if (typeof fm?.name === "string") return fm.name;
    return defaultValue;
}

/**
 * Default `_stats` block for compiled compendium entries. Reads the
 * current system version from `assets/templates/system.template.json`
 * if available, otherwise falls back to the supplied default.
 */
export function buildStats(systemVersion = "0.6.0") {
    return {
        systemId: "sohl",
        systemVersion,
        coreVersion: "14",
        createdTime: 0,
        modifiedTime: 0,
        lastModifiedBy: "sohlbuilder00000",
    };
}

/**
 * Stable 16-char hex id derived from `${namespace}:${value}`. Use for
 * deriving page ids from heading text when no explicit id is supplied.
 */
export function makeId(namespace, value) {
    return crypto
        .createHash("sha1")
        .update(`${namespace}:${value}`)
        .digest("hex")
        .slice(0, 16);
}

/* ------------------------------------------------------------------------ */
/*  Folder hierarchy: loading, resolution, emission                         */
/* ------------------------------------------------------------------------ */

/**
 * Loads a folders.yaml file as an array of folder entries. Returns []
 * when the file is missing (logging a warning) so packs without folders
 * can opt out simply by not committing the file.
 */
export function loadFolders(foldersFile) {
    if (!fs.existsSync(foldersFile)) {
        log.warn(
            `No folders.yaml at ${foldersFile}; no folders will be emitted`,
        );
        return [];
    }
    const raw = fs.readFileSync(foldersFile, "utf8");
    const parsed = yaml.parse(raw);
    if (parsed == null) return [];
    if (!Array.isArray(parsed)) {
        throw new Error(
            `folders.yaml must contain a YAML list; got ${typeof parsed}`,
        );
    }
    return parsed;
}

/**
 * Validates folder invariants and returns a resolver function that maps a
 * folder id to the same id (after verifying it exists). Returns `null` for
 * a null/empty input; throws for an unknown id.
 *
 * Invariants:
 *   - Every folder must have a non-empty id
 *   - Every folder must have a name
 *   - Sibling folders (same parentFolderId) must have unique names
 *   - Every parentFolderId must match an existing folder id (or be "")
 *
 * Returns { resolver, folders } where folders is the validated list.
 */
export function buildFolderResolver(folders) {
    const byId = new Map();
    for (const f of folders) {
        if (!f.id) {
            throw new Error(`Folder missing id: ${JSON.stringify(f)}`);
        }
        if (!f.name) {
            throw new Error(`Folder ${f.id} missing name`);
        }
        if (byId.has(f.id)) {
            throw new Error(`Duplicate folder id ${f.id}`);
        }
        byId.set(f.id, f);
    }

    const siblingsByParent = new Map();
    for (const f of folders) {
        const parentId = f.parentFolderId || "";
        if (parentId && !byId.has(parentId)) {
            throw new Error(
                `Folder ${f.id} (${f.name}) references unknown parentFolderId ${parentId}`,
            );
        }
        if (!siblingsByParent.has(parentId)) {
            siblingsByParent.set(parentId, new Set());
        }
        const siblings = siblingsByParent.get(parentId);
        if (siblings.has(f.name)) {
            throw new Error(
                `Sibling folders share name "${f.name}" under parent ${parentId || "(root)"} — names must be unique among siblings`,
            );
        }
        siblings.add(f.name);
    }

    function resolver(folderId) {
        if (folderId == null || folderId === "") return null;
        const id = String(folderId).trim();
        if (!id) return null;
        if (!byId.has(id)) {
            throw new Error(`Unknown folder id "${id}"`);
        }
        return id;
    }

    return { resolver, folders };
}

/**
 * Builds a compendium-source filename for a folder JSON document:
 * `folder_Name_id.json` with non-alphanumeric runs replaced by
 * underscores.
 */
export function folderFilename(name, id) {
    return (
        `folder_${unidecode(name)}_${id}`.replace(/[^0-9a-zA-Z]+/g, "_") +
        ".json"
    );
}

/**
 * Writes one JSON document per folder into `destDir`. `documentType`
 * determines the folder's Foundry `type` field — `"Item"` for the items
 * pack, `"JournalEntry"` for the journals pack.
 */
export function writeFolderDocs(folders, stats, destDir, documentType) {
    for (const folder of folders) {
        const doc = {
            name: folder.name,
            sorting: "a",
            folder: folder.parentFolderId || null,
            type: documentType,
            _id: folder.id,
            sort: 0,
            color: folder.color,
            flags: folder.flags || {},
            _stats: stats,
            _key: `!folders!${folder.id}`,
        };
        const outPath = path.join(destDir, folderFilename(folder.name, folder.id));
        fs.writeFileSync(outPath, JSON.stringify(doc, null, 2), "utf8");
    }
    log.info(`Emitted ${folders.length} folder document(s) to ${destDir}`);
}
