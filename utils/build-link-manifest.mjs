/*
 * This file is part of the Song of Heroic Lands (SoHL) system for Foundry VTT.
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
 * Emit this package's cross-package link manifest (#1446, #1441).
 *
 * Every package that publishes a web surface names the notes it publishes in one
 * file, keyed by the canonical `type/shortcode` address and valued `{ path, name }`.
 * Another package's build vendors the file and can then resolve a link into this
 * package instead of guessing whether an unknown address is a typo — see
 * `utils/kb-manifest.mjs` for the format and what turns on when it is complete.
 *
 * **The URLs must be real.** A manifest asserts that a page exists at the address
 * it gives; inventing one produces a link that passes the dead-link check and
 * 404s for the reader. So this does not invent a URL scheme — it reproduces the
 * one `heroiclands-site` already publishes these pages at, which is:
 *
 *     /{package}/{type-or-category}/{slug}/
 *
 * with `slug` derived from `name.full` by the shared rule in
 * `utils/content-slug.mjs` (#1278/#1389), `doc` notes routing by their
 * `category` rather than their type, and a `category: collection` note using its
 * authored `section` — the section it introduces — rather than a derived slug.
 * That is `export-hugo.ts`'s dispatch, restated against the tree that is now
 * source here rather than in the vault. The output was verified entry-for-entry
 * against the site's published `content/thalorna/` tree when it was written.
 *
 * **What is recorded is the part after `/{package}/`** (#1465). Where this
 * package is *mounted* is the consumer's business — it holds a base per package
 * and prefixes it at resolve time — so a manifest that recorded the mount point
 * would send every inbound link to a path that stops existing the day the
 * package moves. The full URL is still built here, because the rule above is
 * what makes the address checkable; `writeManifests` strips the leading
 * `/{package}/` and fails loudly on a URL that does not carry it.
 *
 * Output is `build/manifests/<package>.json`, a build artifact. Publishing it
 * means copying it into the consuming repository's `assets/manifests/`, where it
 * is committed — that copy is deliberate, so a contributor without every
 * repository still resolves the same links CI does.
 *
 * Usage: node utils/build-link-manifest.mjs
 */

import fs from "node:fs";
import path from "node:path";

import { contentSlug } from "./content-slug.mjs";
import { writeManifests } from "./kb-manifest.mjs";
import { walkMarkdownTree } from "./packs/helpers.mjs";
import { CONTENT_PACKAGE } from "./packs/content-package.mjs";

const CONTENT_BASE = path.resolve("./assets/content");
const MANIFEST_OUT = path.resolve("./build/manifests");

/**
 * The URL section a note routes to.
 *
 * A `doc` is narrative content whose only identity is its subtype label, so it
 * routes by `category`; every other type names its own section. This is the one
 * rule, and it is the same one the site and the knowledgebase apply.
 *
 * @param {object} fm - Parsed frontmatter.
 * @returns {string|undefined} The section, or `undefined` when the note has none
 *   (a `doc` with no category has no address at all, and is not published).
 */
function sectionOf(fm) {
  return fm.type === "doc" ? fm.category : fm.type;
}

/**
 * Every note this package publishes, as `{ fm, name, url }`.
 *
 * Drafts are excluded because the site does not publish them, and a manifest
 * entry for an unpublished page is exactly the dead link the manifest exists to
 * prevent.
 *
 * @param {string} contentBase - Absolute path to the content tree.
 * @returns {{ entries: Array<object>, skipped: Array<object> }}
 */
export function collectPublishedEntries(contentBase) {
  const entries = [];
  const skipped = [];
  for (const { frontmatter: fm, absPath } of walkMarkdownTree(contentBase)) {
    if (!fm || fm.package !== CONTENT_PACKAGE) continue;
    if (fm.draft === true) continue;
    if (!fm.type) continue;

    const rel = path.relative(contentBase, absPath);
    const section = sectionOf(fm);
    if (typeof section !== "string" || !section) {
      skipped.push({ file: rel, reason: `type "${fm.type}" has no section` });
      continue;
    }

    const name = fm.name?.full ?? path.basename(absPath, ".md");

    // A `category: collection` note *is* a section's landing page, not a
    // page within one: `Creatures.md` publishes at `/thalorna/creature/`,
    // and the segment is the section it introduces — authored as `section`,
    // because it is identity and is not derivable from the note's title.
    // It has no slug of its own, so it does not route through `sectionOf`
    // at all (whose answer here would be the literal word "collection").
    const isCollection = fm.type === "doc" && fm.category === "collection";
    if (isCollection) {
      const landing = fm.section || fm.slug;
      if (!landing) {
        skipped.push({
          file: rel,
          reason: "collection note declares no `section`, so it lands nowhere",
        });
        continue;
      }
      entries.push({
        fm,
        name,
        url: `/${CONTENT_PACKAGE}/${landing}/`,
      });
      continue;
    }

    let slug;
    try {
      slug = contentSlug(name);
    } catch (err) {
      skipped.push({ file: rel, reason: err.message });
      continue;
    }
    entries.push({
      fm,
      name,
      url: `/${CONTENT_PACKAGE}/${section}/${slug}/`,
    });
  }
  return { entries, skipped };
}

function main() {
  if (!fs.existsSync(CONTENT_BASE)) {
    console.error(`build-link-manifest: no content tree at ${CONTENT_BASE}`);
    process.exitCode = 1;
    return;
  }

  const { entries, skipped } = collectPublishedEntries(CONTENT_BASE);
  if (entries.length === 0) {
    console.error(
      `build-link-manifest: ${CONTENT_BASE} yielded no published notes, so ` +
        `the manifest would claim this package publishes nothing.`,
    );
    process.exitCode = 1;
    return;
  }

  const written = writeManifests(
    new Map([[CONTENT_PACKAGE, entries]]),
    MANIFEST_OUT,
    // The base the URLs above are built with, and therefore what each recorded
    // address is relative to (#1465).
    { [CONTENT_PACKAGE]: `/${CONTENT_PACKAGE}/` },
  );

  for (const { package: pkg, file, count } of written) {
    console.log(
      `build-link-manifest: ${pkg} → ${path.relative(process.cwd(), file)} (${count} entries, from ${entries.length} published note(s))`,
    );
  }
  if (skipped.length) {
    console.log(`\n  ${skipped.length} note(s) have no address:`);
    for (const s of skipped.slice(0, 20)) {
      console.log(`    ${s.reason}  (${s.file})`);
    }
    if (skipped.length > 20) {
      console.log(`    … and ${skipped.length - 20} more`);
    }
  }
}

main();
