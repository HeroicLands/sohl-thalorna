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

import { mkdir, readFile, writeFile } from "fs/promises";
import { resolve } from "path";

// This repository ships a Foundry *module*, not a system, so it builds a
// `module.json` from `module.template.json`. Every address below points at this
// module's own repository: a manifest that advertised the system's URLs would
// send Foundry to the wrong release on every update check.
const REPO = "https://github.com/HeroicLands/sohl-thalorna";

const STAGE_DIR = resolve("build/stage");
const moduleTemplatePath = resolve("assets/templates/module.template.json");
const moduleJsonPath = resolve(STAGE_DIR, "module.json");
const packageJsonPath = resolve("package.json");

await mkdir(STAGE_DIR, { recursive: true });

// --- Load files ---
const [templateRaw, packageRaw] = await Promise.all([
  readFile(moduleTemplatePath, "utf-8"),
  readFile(packageJsonPath, "utf-8"),
]);

const template = JSON.parse(templateRaw);
const pkg = JSON.parse(packageRaw);

// --- Modify fields ---
template.version = pkg.version;
template.url = REPO;
template.bugs = `${REPO}/issues`;
template.manifest = `${REPO}/releases/latest/download/module.json`;
template.download = `${REPO}/releases/download/v${pkg.version}/module.zip`;

// --- Write final module.json ---
await writeFile(moduleJsonPath, JSON.stringify(template, null, 2), "utf-8");

console.log(`✅ Wrote ${moduleJsonPath}`);
