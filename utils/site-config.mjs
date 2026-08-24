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
 * Where this package's website is served — read from `site/hugo.toml` (#1451).
 *
 * The content build bakes addresses into the pages it writes: a wikilink
 * becomes an `href`, and a page's retired addresses become Hugo `aliases`.
 * Hugo does not rewrite either, so both have to be spelled the way the
 * deployed site serves them, which means the content build and the Hugo build
 * must agree about where the site sits.
 *
 * They agree because there is only one place it is written down. `baseURL` in
 * `site/hugo.toml` is that place: change it and the pages, their links, their
 * redirects and the link manifest all follow, with nothing else to keep in
 * step. That is what makes relocating this package — to another prefix, or to
 * an origin of its own — a one-line edit rather than a search-and-replace
 * (#1444).
 *
 * @module
 */

import fs from "node:fs";
import path from "node:path";

/** The Hugo project this package renders, relative to the repository root. */
export const SITE_DIR = "site";

/** Its configuration file. */
export const SITE_CONFIG = path.join(SITE_DIR, "hugo.toml");

/**
 * Reads `baseURL` out of the Hugo configuration.
 *
 * A hand-rolled read of one key, rather than a TOML parser: the value is a
 * quoted scalar at the top level of the file, and the alternative is a
 * dependency the build otherwise has no use for. Anything it cannot find is an
 * error — a guessed base would publish links that resolve nowhere.
 *
 * @param {string} [repoRoot] - Repository root; defaults to the process cwd.
 * @returns {string} The configured `baseURL`.
 */
export function readBaseURL(repoRoot = process.cwd()) {
    const file = path.join(repoRoot, SITE_CONFIG);
    let text;
    try {
        text = fs.readFileSync(file, "utf8");
    } catch {
        throw new Error(`site-config: no Hugo configuration at ${SITE_CONFIG}`);
    }
    const m = text.match(/^\s*baseURL\s*=\s*["']([^"']+)["']/m);
    if (!m) {
        throw new Error(`site-config: ${SITE_CONFIG} declares no baseURL`);
    }
    return m[1];
}

/**
 * The path prefix the site is served under, as a slash-terminated string.
 *
 * `https://www.heroiclands.org/thalorna/` → `/thalorna/`, and an origin of the
 * package's own → `/`. This is the prefix every address the content build
 * writes carries, and the base the link manifest records its entries relative
 * to (#1465).
 *
 * @param {string} [baseURL] - The configured `baseURL`; read from disk if absent.
 * @returns {string} The path prefix, starting and ending with `/`.
 */
export function sitePathPrefix(baseURL = readBaseURL()) {
    let pathname;
    try {
        pathname = new URL(baseURL).pathname;
    } catch {
        throw new Error(
            `site-config: baseURL ${JSON.stringify(baseURL)} is not a URL`,
        );
    }
    if (!pathname.startsWith("/")) pathname = `/${pathname}`;
    if (!pathname.endsWith("/")) pathname = `${pathname}/`;
    return pathname;
}
