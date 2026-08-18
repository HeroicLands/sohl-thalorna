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

import { copyFileSync, existsSync, mkdirSync, readdirSync, statSync } from "fs";
import { join, dirname } from "path";

function copyFolder(src, dest) {
  mkdirSync(dest, { recursive: true });
  for (const file of readdirSync(src)) {
    const srcPath = join(src, file);
    const destPath = join(dest, file);
    if (statSync(srcPath).isDirectory()) copyFolder(srcPath, destPath);
    else {
      mkdirSync(dirname(destPath), { recursive: true });
      copyFileSync(srcPath, destPath);
    }
  }
}

function copyFile(src, dest) {
  mkdirSync(dirname(dest), { recursive: true });
  copyFileSync(src, dest);
}

/**
 * Everything this module ships, as [source, destination] pairs.
 *
 * This is an explicit manifest rather than the system repository's asset list,
 * because a content module ships almost none of what a system does — no audio,
 * icons, fonts, silhouettes, UI art or Handlebars templates. The compendium
 * packs are not listed: `build:compiledb` compiles them into `build/stage/packs`
 * directly from `assets/content`.
 *
 * A listed path that does not exist is a hard error, not a silent skip — a
 * missing `lang/` would otherwise ship a module with no localization and no
 * warning.
 */
const ASSETS = [
  ["lang", "build/stage/lang"],
  // Declared in module.json `styles`, so Foundry loads it whenever the module
  // is active — including under another system, where the system's stylesheet
  // is absent and this is the only thing marking an unresolved link.
  ["styles", "build/stage/styles"],
  ["README.md", "build/stage/README.md"],
  ["LICENSE", "build/stage/LICENSE"],
];

const missing = ASSETS.filter(([src]) => !existsSync(src)).map(([src]) => src);
if (missing.length) {
  console.error(
    `❌ Cannot copy static assets — these paths do not exist:\n` +
      missing.map((p) => `   ${p}`).join("\n"),
  );
  process.exit(1);
}

for (const [src, dest] of ASSETS) {
  if (statSync(src).isDirectory()) copyFolder(src, dest);
  else copyFile(src, dest);
}

console.log(`✅ Static assets copied (${ASSETS.length} entries).`);
