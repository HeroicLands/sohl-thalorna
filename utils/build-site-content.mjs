/*
 * This file is part of the Thalorna Setting module for Song of Heroic Lands.
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
 * Website content build — `assets/content/` → `site/content/` (#1451).
 *
 * This package owns exactly one path on heroiclands.org, `/thalorna`, and
 * nothing here writes outside it. The tree this script produces is the pages of
 * that path, and `site/` renders and deploys them: `npm run build:site` runs
 * this script and then Hugo over its output.
 *
 * Where the site is served is read from `site/hugo.toml`, not written here —
 * every address this build bakes into a page carries that prefix, so the two
 * halves cannot disagree and a relocation is one line (`utils/site-config.mjs`).
 *
 * The output is the same shape the site's vault exporter produced before this
 * repository owned its content — a flat section directory per published type,
 * a page per note, and a `_index.md` landing per section — but derived from the
 * tree that is now source here rather than from the vault (#1441/#1385).
 *
 * What the transformation does, in order:
 *
 * 1. **Route** each note to `<section>/<slug>.md`. The section is the note's
 *    `type`, except a `type: doc` routes by its `category`; the slug is derived
 *    from `name.full` by the shared rule in
 *    `@heroiclands/content-build/engine/content-slug` (#1278).
 *    A `category: collection` note *is* a section's landing and writes that
 *    section's `_index.md` instead.
 * 2. **Expand** the fenced `dataview` table directives against every published
 *    note (`@heroiclands/content-build/engine/content-tables`), so a collection
 *    page tabulates its
 *    section.
 * 3. **Resolve** the authored wikilinks to site-local hrefs
 *    (`utils/site-wikilinks.mjs`), the same links the pack compilers turn into
 *    Foundry `@UUID` enrichers.
 * 4. **Carry forward** each page's recorded history — the URLs it published at
 *    before, as Hugo `aliases`, and the name its CDN artwork was uploaded under,
 *    as `artwork` (`assets/legacy-urls.json`).
 *
 * Output is a build artifact, regenerated from source on every run and never
 * committed: `site/` holds the configuration, the layouts and the theme, and
 * the pages appear beneath it only at build time.
 *
 * Usage: node utils/build-site-content.mjs
 */

import fs from "node:fs";
import path from "node:path";
import yaml from "yaml";

import {
  contentSlug,
  findSlugCollisions,
} from "@heroiclands/content-build/engine/content-slug";
import { expandContentTables } from "@heroiclands/content-build/engine/content-tables";
import {
  resolveSiteWikilinks,
  frontmatterWikilinks,
} from "./site-wikilinks.mjs";
import {
  writeManifests,
  loadForeignManifests,
  manifestsComplete,
} from "@heroiclands/content-build/engine/kb-manifest";
import { sitePathPrefix, SITE_DIR } from "./site-config.mjs";
import { walkMarkdownTree } from "@heroiclands/content-build/engine/helpers";
import { hasDocEntry } from "@heroiclands/content-build/engine/item-docs";
import { contentPackage } from "@heroiclands/content-build/engine/content-package";

// Resolved once, here, rather than at each use. The package exports these as
// accessors so that *importing* a module never needs a consumer config; this is
// a build entry point, which always has one, so reading them at module scope is
// the same instant the script runs.
const CONTENT_PACKAGE = contentPackage();

const REPO = path.resolve(".");
const CONTENT_SRC = path.join(REPO, "assets/content");

/**
 * Where the pages go: the Hugo project's content root.
 *
 * Generated on every run and never committed, so `site/` in the repository is
 * the configuration, the layouts and the theme submodule — the parts a person
 * writes — and the pages appear beneath it only at build time.
 */
const OUT = path.join(REPO, SITE_DIR, "content");

/**
 * The path prefix this site is served under, read from `site/hugo.toml`.
 *
 * Every address written into a page carries it: an `href` Hugo will not
 * rewrite, and the base the link manifest records its entries relative to. See
 * `utils/site-config.mjs` for why the Hugo configuration is where it is
 * written down.
 */
const SITE_BASE = sitePathPrefix();

/**
 * The prefix the recorded URL history was captured under.
 *
 * `assets/legacy-urls.json` holds addresses this package published at on
 * www.heroiclands.org, where it sits at `/thalorna/`. They are rebased onto
 * {@link SITE_BASE} before becoming redirects, so relocating the site moves
 * its history with it instead of stranding it at an address the site no longer
 * owns.
 */
const LEGACY_BASE = `/${CONTENT_PACKAGE}/`;

/** Manifests for packages this build links into but does not publish (#1446). */
const MANIFEST_SRC = path.join(REPO, "assets/manifests");
/**
 * This package's own manifest, for the other packages to vendor.
 *
 * `utils/build-link-manifest.mjs` writes the same file, and the two must stay
 * byte-identical: a manifest asserts that a page exists at the URL it gives, so
 * one of them being wrong publishes a link that passes every check and 404s for
 * the reader. They agree because both route a note by the same two rules —
 * `sectionOf` and `contentSlug` — rather than because either defers to the
 * other. The standalone script exists so a contributor can regenerate the
 * manifest without building the website.
 */
const MANIFEST_OUT = path.join(REPO, "build/manifests");

/**
 * `type:shortcode` → the URL, or URLs, the page published at before.
 *
 * Deriving a page's URL from its name (#1278/#1389) moved pages that had
 * already been linked and bookmarked, and whose portraits had already been
 * uploaded to the CDN under the old segment. Two things depend on this record:
 * the Hugo `aliases` that keep the old address answering, and `artwork`, the
 * filename the being sidebar asks the CDN for.
 *
 * Entries are append-only history: never edit one, and only add a row when a
 * page's URL changes again. Absent → a page redirects from nothing and its
 * artwork name is its own slug, which is what it has always been.
 */
const legacyUrls = (() => {
  try {
    return JSON.parse(
      fs.readFileSync(path.join(REPO, "assets/legacy-urls.json"), "utf8"),
    );
  } catch {
    return {};
  }
})();

/**
 * The URL section a note routes to.
 *
 * A `doc` is narrative content whose only identity is its subtype label, so it
 * routes by `category`; every other type names its own section. This is the one
 * rule, and it is the same one `utils/build-link-manifest.mjs` applies — the
 * manifest and the pages it names cannot disagree about where a page is.
 *
 * @param {object} fm - Parsed frontmatter.
 * @returns {string|undefined} The section, or `undefined` when the note has none.
 */
function sectionOf(fm) {
  return fm.type === "doc" ? fm.category : fm.type;
}

/**
 * Mask fenced and inline code before a transform, and restore it after.
 *
 * NUL never occurs in Markdown source, so the sentinel cannot collide with
 * prose and survives the transforms unchanged before being restored.
 *
 * @param {string} body - The markdown body.
 * @param {(masked: string) => string} transform - Applied to the masked body.
 * @returns {string} The transformed body with code spans restored.
 */
function protectCode(body, transform) {
  const stash = [];
  const masked = body.replace(
    /```[\s\S]*?```|~~~[\s\S]*?~~~|``[^`]*``|`[^`]*`/g,
    (m) => `\u0000${stash.push(m) - 1}\u0000`,
  );
  return transform(masked).replace(/\u0000(\d+)\u0000/g, (_m, i) =>
    String(stash[Number(i)]),
  );
}

/** Gear item `type` → the `sohl.gear` group key the equipment sidebar renders. */
const GEAR_TYPE_TO_KEY = {
  weapongear: "weapons",
  armorgear: "armor",
  projectilegear: "projectiles",
  miscgear: "misc",
  containergear: "containers",
  concoctiongear: "concoctions",
};

/**
 * Derive a being's sidebar fields from its raw `sohl.items[]`.
 *
 * A `being` note carries its embedded documents as `sohl.items` —
 * `{ shortcode, type, system? }` entries — but the shared theme's being
 * sidebar reads flattened, resolved shapes: a `skills` map, grouped
 * `gear`, and `spells` / `talents`. Each item's `shortcode` resolves against the
 * content-wide `index` (`"<type>:<shortcode>" → { name, url }`) for display
 * names and links. Attributes already match the sidebar shape and pass through
 * untouched.
 *
 * Only fields the author didn't already supply are derived (hand-authored
 * `sohl.skills` / `sohl.gear` / … win); an item's inline `name` beats the index,
 * and an unresolved shortcode falls back to itself rather than being dropped.
 * Returns a new `sohl` object; the input is not mutated.
 *
 * @param {object} sohl - The note's `sohl` frontmatter block.
 * @param {Map<string, {name: string, url: string}>} index - `type:shortcode` → page.
 * @returns {object} The `sohl` block with the sidebar fields filled in.
 */
function deriveBeingSohl(sohl, index) {
  if (!sohl || typeof sohl !== "object") return sohl;
  const out = { ...sohl };
  const items = Array.isArray(out.items) ? out.items : [];
  if (items.length === 0) return out;

  const isMap = (v) => v && typeof v === "object" && !Array.isArray(v);
  const nonEmpty = (v) => Array.isArray(v) && v.length > 0;
  const lookup = (type, shortcode) =>
    shortcode ? index.get(`${type}:${shortcode}`) : undefined;

  // Skills: { shortcode: masteryLevelBase }.
  if (!(isMap(out.skills) && Object.keys(out.skills).length > 0)) {
    const skills = {};
    for (const it of items) {
      if (!isMap(it) || it.type !== "skill") continue;
      const level = it.system?.masteryLevelBase;
      if (typeof it.shortcode === "string" && typeof level === "number") {
        skills[it.shortcode] = level;
      }
    }
    if (Object.keys(skills).length > 0) out.skills = skills;
  }

  // Gear: { weapons: [{name, shortcode?, url?}], armor: [...], … }.
  if (!isMap(out.gear)) {
    const gear = {};
    for (const it of items) {
      if (!isMap(it)) continue;
      const key = GEAR_TYPE_TO_KEY[it.type];
      if (!key) continue;
      const shortcode =
        typeof it.shortcode === "string" ? it.shortcode : undefined;
      const ref = lookup(it.type, shortcode);
      const name =
        (typeof it.name === "string" && it.name) || ref?.name || shortcode;
      if (!name) continue;
      const entry = { name };
      if (shortcode) entry.shortcode = shortcode;
      if (ref?.url) entry.url = ref.url;
      (gear[key] ??= []).push(entry);
    }
    if (Object.keys(gear).length > 0) out.gear = gear;
  }

  // Mystical abilities split by subType → spells / talents ({name, url?}).
  const spells = [];
  const talents = [];
  for (const it of items) {
    if (!isMap(it) || it.type !== "mysticalability") continue;
    const shortcode =
      typeof it.shortcode === "string" ? it.shortcode : undefined;
    const ref = lookup("mysticalability", shortcode);
    const name = (typeof it.name === "string" && it.name) || ref?.name;
    if (!name) continue;
    const entry = { name };
    if (ref?.url) entry.url = ref.url;
    if (it.subType === "arcaneincantation") spells.push(entry);
    else if (it.subType === "arcanetalent") talents.push(entry);
  }
  if (spells.length > 0 && !nonEmpty(out.spells)) out.spells = spells;
  if (talents.length > 0 && !nonEmpty(out.talents)) out.talents = talents;

  return out;
}

/**
 * A recorded address as the site-root-relative one Hugo redirects from.
 *
 * Hugo resolves an `aliases` entry against the site root — the directory
 * `baseURL` names — so a redirect is written without the package's own prefix
 * and lands under whatever prefix the site is built with. Stripping the prefix
 * it was recorded under is therefore what carries the history across a move.
 *
 * @param {string} recorded - An address from `assets/legacy-urls.json`.
 * @returns {string} The address relative to the site root, leading slash kept.
 */
function withinPackage(recorded) {
  if (!recorded.startsWith(LEGACY_BASE)) {
    throw new Error(
      `legacy-urls: ${JSON.stringify(recorded)} is not an address in this ` +
        `package (${LEGACY_BASE}), so it is not this site's to redirect`,
    );
  }
  return `/${recorded.slice(LEGACY_BASE.length)}`;
}

/**
 * Apply a page's recorded URL history: the redirects it owes and its artwork name.
 *
 * @param {object} data - Frontmatter about to be written (mutated).
 * @param {object} fm - The note's source frontmatter.
 * @param {string} slug - The page's derived slug.
 * @param {string} url - The page's derived URL.
 */
function applyHistory(data, fm, slug, url) {
  const key =
    typeof fm.type === "string" && typeof fm.shortcode === "string"
      ? `${fm.type.toLowerCase()}:${fm.shortcode}`
      : null;
  const recorded = key ? legacyUrls[key] : undefined;
  // A page may have published at more than one address over its life, so a
  // record is a string or a list of them. A page never redirects from where it
  // already is; that is a loop.
  const previous = (
    Array.isArray(recorded) ? recorded : recorded ? [recorded] : []
  )
    .filter(Boolean)
    .map(withinPackage)
    .filter((u) => `${SITE_BASE}${u.slice(1)}` !== url);

  if (previous.length > 0) data.aliases = previous;
  // The artwork name is the earliest address it was uploaded under: deriving a
  // new URL does not rename a file on the CDN.
  data.artwork =
    previous.length > 0
      ? (previous[0].split("/").filter(Boolean).pop() ?? slug)
      : slug;
}

/** Serialize a page as YAML front matter plus its body. */
function stringifyPage(data, body) {
  const fm = yaml.stringify(data, { lineWidth: 0 }).trimEnd();
  return `---\n${fm}\n---\n\n${body.trim()}\n`;
}

// --- Parse phase ---------------------------------------------------------
// Gather every published note before writing anything, so the wikilink index
// and the table universe are complete when the first page is rendered.

const entries = [];
const refIndex = new Map();
/** Notes whose slug cannot be derived — fatal; the page they name would vanish. */
const slugErrors = [];
/**
 * Notes that route nowhere, and so are not published.
 *
 * A `type` with no section — a `doc` carrying no `category` — has no address at
 * all, and `utils/build-link-manifest.mjs` already declines to name it. Reported
 * rather than fatal, so the two builds agree on what this package publishes and
 * one unaddressable note cannot block every other page from being published.
 */
const unaddressable = [];

/**
 * Notes with a wikilink in frontmatter (#35) — `{file, path, link}` each.
 *
 * Frontmatter is copied to the published page verbatim, so a link written in one
 * is never resolved and reaches the reader as literal `[[…]]`. Collected across
 * the walk and failed on before anything is written; see
 * {@link frontmatterWikilinks}.
 */
const frontmatterLinks = [];

for (const { frontmatter: fm, body, absPath } of walkMarkdownTree(
  CONTENT_SRC,
)) {
  if (!fm || fm.package !== CONTENT_PACKAGE) continue;
  // A draft is not published, and a link to an unpublished page is a dead link.
  if (fm.draft === true) continue;
  if (!fm.type) continue;

  const rel = path.relative(CONTENT_SRC, absPath).split(path.sep).join("/");
  for (const hit of frontmatterWikilinks(fm)) {
    frontmatterLinks.push({ file: rel, ...hit });
  }
  const name = fm.name?.full ?? path.basename(absPath, ".md");

  // A `category: collection` note *is* a section's landing page, not a page
  // within one: `Creatures.md` publishes at the site's `creature/`, and the
  // segment is the section it introduces — authored as `section`, because it is
  // identity and is not derivable from the note's title.
  const isLanding = fm.type === "doc" && fm.category === "collection";
  const section = isLanding ? (fm.section ?? fm.slug) : sectionOf(fm);
  if (typeof section !== "string" || !section) {
    unaddressable.push({
      file: rel,
      reason: isLanding
        ? "collection note declares no `section`, so it lands nowhere"
        : `type "${fm.type}" has no section`,
    });
    continue;
  }

  let slug;
  if (isLanding) {
    slug = section;
  } else {
    try {
      slug = contentSlug(name);
    } catch (err) {
      slugErrors.push({ file: rel, reason: err.message });
      continue;
    }
  }

  const url = isLanding
    ? `${SITE_BASE}${section}/`
    : `${SITE_BASE}${section}/${slug}/`;

  entries.push({
    fm,
    body,
    name,
    slug,
    sec: section,
    url,
    isLanding,
    rel,
    // Location below the content root — what a generated table reads as
    // `file.path` and scopes on with `FROM "…"`.
    relPath: rel,
    // Top-level content directory ("Bestiary", "Collections", …).
    tld: rel.split("/")[0],
    // Immediate source subfolder (Bestiary/Animal/Aurochs.md → "Animal").
    folder: path.basename(path.dirname(absPath)),
  });

  if (typeof fm.shortcode === "string") {
    refIndex.set(`${fm.type}:${fm.shortcode}`, { name, url });
  }
}

// --- Frontmatter integrity -----------------------------------------------
// Refused before a single page is written: a wikilink in frontmatter is copied
// through unresolved and publishes as literal `[[…]]` (#35).
if (frontmatterLinks.length) {
  console.error(
    `\n✖ ${frontmatterLinks.length} wikilink(s) authored in frontmatter:`,
  );
  for (const e of frontmatterLinks) {
    console.error(`  ${e.link}  (${e.file}: ${e.path})`);
  }
  console.error(
    "\nWikilinks are resolved in a note's body only — frontmatter is data, and this\n" +
      "build copies it to the page verbatim, so the reader gets the brackets. Move the\n" +
      "link into the prose the field summarises, or write the value as plain text.\n",
  );
  process.exit(1);
}

// --- URL integrity -------------------------------------------------------
// A note that cannot derive a URL, or two notes deriving the same one, would
// silently drop or overwrite a page — fail the build naming the files instead.
if (slugErrors.length) {
  console.error(`\n✖ ${slugErrors.length} note(s) cannot derive a URL:`);
  for (const e of slugErrors) console.error(`  ${e.reason}  (in ${e.file})`);
  process.exit(1);
}
if (unaddressable.length) {
  console.warn(
    `\n${unaddressable.length} note(s) route nowhere and are not published:`,
  );
  for (const e of unaddressable) console.warn(`  ${e.reason}  (in ${e.file})`);
}
const collisions = findSlugCollisions(
  entries.map((e) => ({ sec: e.sec, slug: e.slug, src: e.rel })),
);
if (collisions.length) {
  console.error(`\n✖ ${collisions.length} colliding page URL(s):`);
  for (const c of collisions) {
    console.error(`  ${c.url} claimed by ${c.sources.join(", ")}`);
  }
  process.exit(1);
}

// --- Wikilink index ------------------------------------------------------
// `section/slug` is unique by construction and always resolves. Name, filename,
// and bare slug are collision-aware fallbacks: a key mapping to two different
// pages is dropped and remembered as ambiguous, so `[[Name]]` on it fails the
// build (the author must disambiguate with `[[type-shortcode|Label]]`).
const wikiIndex = new Map(); // key → { url, name }
const wikiCollide = new Set();
const addFallback = (k, v) => {
  k = String(k).toLowerCase();
  if (wikiCollide.has(k)) return;
  const cur = wikiIndex.get(k);
  if (cur && cur.url !== v.url) {
    wikiIndex.delete(k);
    wikiCollide.add(k);
  } else if (!cur) {
    wikiIndex.set(k, v);
  }
};
for (const e of entries) {
  const v = { url: e.url, name: e.name };
  wikiIndex.set(`${e.sec}/${e.slug}`.toLowerCase(), v); // unique
  addFallback(e.name, v);
  addFallback(path.basename(e.rel, ".md"), v);
  addFallback(e.slug, v);
}

// Manifests for the packages this build links into but does not publish. Which
// packages are *local* is only known once the tree is walked, so this runs
// after the parse phase.
const localPackages = new Set(entries.map((e) => e.fm.package));
const foreign = loadForeignManifests(MANIFEST_SRC, localPackages);
if (foreign.stale.length) {
  console.error("\n✖ unusable link manifest(s):");
  for (const s of foreign.stale) console.error(`  ${s.package}: ${s.reason}`);
  process.exit(1);
}
const manifests = manifestsComplete(localPackages, foreign.packages);

// The authored form: `type-shortcode` — `(type, shortcode)` is the system's
// logical identity and is unique by rule, so this key is unique by construction,
// the same guarantee `section/slug` gives. Alongside it, every alias is indexed
// *scoped to its type*, which is what makes a bare `[[Text]]` resolvable even
// when the same name is used for another kind of document.
const typeAlias = new Map(); // `type|alias` → { url, name }
const typeCollide = new Set();
const contentTypes = new Set();
// A foreign package may use a type this build has never seen. Seeding those
// here is what lets `readQualifier` recognise the address as one at all —
// without it the link is read as prose and silently loses its href.
for (const k of foreign.index.keys()) {
  const slash = k.indexOf("/");
  if (slash > 0) contentTypes.add(k.slice(0, slash));
}
for (const e of entries) {
  const type = String(e.fm.type).toLowerCase();
  contentTypes.add(type);
  const v = { url: e.url, name: e.name };
  if (typeof e.fm.shortcode === "string" && e.fm.shortcode) {
    wikiIndex.set(`${type}/${e.fm.shortcode}`.toLowerCase(), v);
    // In Foundry an item and its documentation are two separate documents, so
    // `skill/wpnc` and `docskill/wpnc` resolve to two different UUIDs (#1362).
    // Here the item note renders as one page which *is* its documentation, so
    // the two qualifiers are aliases for the same URL. One authored link,
    // correct in both builds.
    if (hasDocEntry(type)) {
      contentTypes.add(`doc${type}`);
      wikiIndex.set(`doc${type}/${e.fm.shortcode}`.toLowerCase(), v);
    }
  }
  const aliases = [
    ...(Array.isArray(e.fm.aliases) ? e.fm.aliases : []),
    ...(Array.isArray(e.fm.name?.aliases) ? e.fm.name.aliases : []),
    e.name,
    path.basename(e.rel, ".md").replace(/_/g, " "),
  ].filter((a) => typeof a === "string" && a);
  for (const a of aliases) {
    const k = `${type}|${a}`.toLowerCase();
    if (typeCollide.has(k)) continue;
    const cur = typeAlias.get(k);
    if (cur && cur.url !== v.url) {
      typeAlias.delete(k);
      typeCollide.add(k);
    } else if (!cur) {
      typeAlias.set(k, v);
    }
  }
}

// --- Generated tables ----------------------------------------------------
// The universe a `dataview` table searches: every published note in this
// package. A page never tabulates another package's content.
const tableDocs = entries.map((e) => ({
  fm: e.fm,
  path: e.relPath,
  tld: e.tld,
  folder: e.folder,
}));
const tableErrors = [];
/** A cell can link to a note that has a shortcode to address it by. */
const tableLinkable = (d) => Boolean(d.fm.shortcode);

const knownSections = new Set(entries.map((e) => e.sec.toLowerCase()));
const wikiErrors = [];
const wikiCtx = (src, type = null) => ({
  index: wikiIndex,
  foreign: foreign.index,
  manifestsComplete: manifests.complete,
  collide: wikiCollide,
  sections: knownSections,
  typeAlias,
  typeCollide,
  contentTypes,
  type,
  errors: wikiErrors,
  src,
});

// --- Render phase --------------------------------------------------------
// Expand tables and resolve wikilinks for every page *before* writing any of
// them, because the `related` block below needs the whole link graph and a
// page's backlinks are only known once every other page has been resolved.

/** Published URL → the `{ title, url, type }` a `related` entry carries. */
const byUrl = new Map(
  entries.map((e) => [
    e.url,
    { title: e.name, url: e.url, type: String(e.fm.type) },
  ]),
);
/** url → outbound links, and url → inbound links. */
const mentions = new Map();
const backlinks = new Map();

for (const e of entries) {
  const { markdown: expanded, errors: tErrors } = expandContentTables(e.body, {
    docs: tableDocs,
    linkable: tableLinkable,
    source: e.rel,
    self: { fm: e.fm, path: e.relPath },
  });
  tableErrors.push(...tErrors);

  // One link to a page is one relation however many times it is written, and a
  // page is never related to itself.
  const seen = new Set([e.url]);
  const ctx = wikiCtx(e.rel, e.fm.type);
  ctx.onResolve = (hit) => {
    if (seen.has(hit.url)) return;
    seen.add(hit.url);
    // A cross-package hit resolves through a vendored manifest and names a page
    // this build does not publish, so it has no entry here and no relation.
    const target = byUrl.get(hit.url);
    if (!target) return;
    if (!mentions.has(e.url)) mentions.set(e.url, []);
    mentions.get(e.url).push(target);
    if (!backlinks.has(hit.url)) backlinks.set(hit.url, []);
    backlinks.get(hit.url).push({
      title: e.name,
      url: e.url,
      type: String(e.fm.type),
    });
  };

  // Tables expand before wikilinks resolve, so a generated cell may itself be a
  // wikilink — the same order the pack compilers use. Expansion also runs
  // *outside* protectCode: a table is authored as a fenced `dataview` block,
  // which protectCode would otherwise stash away before the expander saw it.
  e.rendered = protectCode(expanded, (t) => resolveSiteWikilinks(t, ctx));
}

// --- Write phase ---------------------------------------------------------
fs.rmSync(OUT, { recursive: true, force: true });
let written = 0;
const byTitle = (a, b) => a.title.localeCompare(b.title);

for (const e of entries) {
  const { fm, name, slug, sec, isLanding } = e;

  // An Obsidian `aliases` is a list of *names* the note answers to in the
  // vault — Hugo reads the same key as a list of *URLs* to redirect from
  // (#1389). Passing it through would emit a redirect from every alias, so it
  // is dropped here and reinstated below only from the recorded URL history.
  // `id` is the Foundry document id: identity for the packs, not presentation.
  const { aliases: _obsidianAliases, id: _foundryId, ...rest } = fm;
  // Most notes carry `title: ""` — a placeholder the Obsidian template writes,
  // not an authored title. It is *present*, so `??` would keep it and publish a
  // page with no heading; the name is the fallback whenever it is blank.
  const title =
    typeof fm.title === "string" && fm.title.trim() ? fm.title : name;
  const data = { ...rest, title, slug };

  // Three fields the shared theme reads at the top level, hoisted out of the
  // nested blocks the notes author them in. The theme's character sidebar has
  // always read them there, so hoisting is what keeps it rendering.
  if (fm.thalorna?.realm) data.realm = fm.thalorna.realm;
  if (fm.traits?.gender) data.gender = fm.traits.gender;
  if (fm.social?.occupation) data.occupation = fm.social.occupation;

  if (fm.type === "being") {
    data.sohl = deriveBeingSohl(fm.sohl, refIndex);
  }
  applyHistory(data, fm, slug, e.url);

  const rel = {};
  const back = backlinks.get(e.url);
  const ment = mentions.get(e.url);
  if (back?.length) rel.backlinks = [...back].sort(byTitle);
  if (ment?.length) rel.mentions = [...ment].sort(byTitle);
  if (rel.backlinks || rel.mentions) data.related = rel;

  const dest = isLanding
    ? path.join(OUT, sec, "_index.md")
    : path.join(OUT, sec, `${slug}.md`);
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.writeFileSync(dest, stringifyPage(data, e.rendered));
  written++;
}

// A section whose collection note does not exist still needs a landing, or Hugo
// auto-humanizes the directory name ("Mysticalabilities") and the section lists
// nothing. Emit a minimal one for any section no collection note claimed.
const landings = new Set(
  entries.filter((e) => e.isLanding).map((e) => e.sec.toLowerCase()),
);
let stubs = 0;
for (const sec of knownSections) {
  if (landings.has(sec)) continue;
  const dir = path.join(OUT, sec);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(
    path.join(dir, "_index.md"),
    stringifyPage(
      {
        title: sec.charAt(0).toUpperCase() + sec.slice(1),
        type: "doc",
        category: "collection",
        package: CONTENT_PACKAGE,
        slug: sec,
      },
      "",
    ),
  );
  stubs++;
}

// Emit this package's own manifest (#1446), so another package can resolve
// links into it without reading this repository.
for (const w of writeManifests(
  new Map([[CONTENT_PACKAGE, entries]]),
  MANIFEST_OUT,
  // Where *this* build serves the package, which each entry's address is
  // recorded relative to, so a consumer resolves it against its own base
  // rather than inheriting ours (#1465).
  { [CONTENT_PACKAGE]: SITE_BASE },
)) {
  console.log(
    `site-content: manifest ${w.package} — ${w.count} addressable note(s)`,
  );
}
if (!manifests.complete) {
  console.warn(
    `site-content: cross-package address checking is OFF — no manifest for ` +
      `${manifests.missing.join(", ")}. Unresolved addresses are tolerated ` +
      `until every package publishes one (#1446).`,
  );
}

// Fail the build on any table directive that could not be honoured.
if (tableErrors.length) {
  console.error(`\n✖ ${tableErrors.length} bad content table(s):`);
  for (const e of tableErrors) console.error(`  ${e.reason}  (in ${e.source})`);
  process.exit(1);
}

// Fail the build on any unresolved or ambiguous wikilink.
if (wikiErrors.length) {
  console.error(`\n✖ ${wikiErrors.length} bad wikilink(s):`);
  for (const e of wikiErrors) {
    console.error(`  [${e.reason}] [[${e.target}]]  (in ${e.file})`);
  }
  process.exit(1);
}

console.log(
  `site-content: wrote ${written} page(s) + ${stubs} generated landing(s) to ` +
    `${path.relative(REPO, OUT)}/`,
);
