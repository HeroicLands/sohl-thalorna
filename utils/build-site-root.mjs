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
 * Write the files that belong to the deployment's **root** rather than to the
 * rendered site (`HeroicLands/Song-of-Heroic-Lands-FoundryVTT#1469`).
 *
 * Hugo renders into `build/site/thalorna/`, because the deployment carries the
 * `/thalorna/` prefix physically and the routing layer is a path-preserving
 * pass-through. The directory that is *uploaded* is its parent, `build/site/`,
 * and Cloudflare Pages reads `_headers` from there and nowhere else — a copy
 * inside `thalorna/` would be published as a text file and never applied. Hugo
 * owns everything under the prefix, so this step owns what sits beside it.
 *
 * Usage: node utils/build-site-root.mjs
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

/** The directory that is deployed. Its root is the site's origin. */
export const SITE_OUT = "build/site";

/** Where the package is mounted inside the deployment. Matches `baseURL`. */
export const PACKAGE_DIR = "thalorna";

/**
 * The deployment root's `_headers`, marking the hosting project's own
 * addresses `noindex`.
 *
 * A Cloudflare Pages project is reachable at a host-assigned address —
 * `<project>.pages.dev`, and `<deployment>.<project>.pages.dev` for every
 * deployment — as well as at the path it serves on `www.heroiclands.org`. That
 * address is not advertised, but it answers with the same pages, and left alone
 * it can be indexed and compete with the canonical URL in search results.
 *
 * The rules are **scoped to those hostnames**, which is what keeps this correct
 * for anyone who takes the repository elsewhere: deployed under its own domain
 * the site is indexable, and only the host-assigned addresses are not.
 *
 * The hosting cannot tell the routing layer's request apart from a reader's —
 * it is the same URL at the same address — so this header reaches
 * `www.heroiclands.org` too, and the router (`heroiclands-site`, `worker/`)
 * removes it there. That is the only place the two addresses are
 * distinguishable. A page that needs `noindex` at *every* address must say so
 * in the document (`<meta name="robots">`), which is passed through untouched.
 */
export const HEADERS = [
  "https://:project.pages.dev/*",
  "  X-Robots-Tag: noindex",
  "",
  "https://:version.:project.pages.dev/*",
  "  X-Robots-Tag: noindex",
  "",
].join("\n");

function main() {
  const root = path.resolve(SITE_OUT);
  const rendered = path.join(root, PACKAGE_DIR);

  if (!fs.existsSync(path.join(rendered, "index.html"))) {
    console.error(
      `build-site-root: ${SITE_OUT}/${PACKAGE_DIR}/ holds no rendered ` +
        `site — run \`npm run build:site\` first.`,
    );
    process.exit(1);
  }

  fs.writeFileSync(path.join(root, "_headers"), HEADERS);
  console.log(`build-site-root: wrote ${SITE_OUT}/_headers.`);
}

if (
  process.argv[1] &&
  path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)
) {
  main();
}
