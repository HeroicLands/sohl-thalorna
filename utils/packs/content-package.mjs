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
 * Which package's notes this repository compiles.
 *
 * The pack compilers select their entries by frontmatter, and `package` is the
 * first thing they check: a note belongs to exactly one distribution unit, and
 * a repository ships exactly one. The compilers are otherwise identical to the
 * SoHL system repository's (see `utils/packs/README.md`), so the package name
 * is the single value that differs between the two copies — naming it here,
 * once, is what keeps the rest of the vendored tree a straight copy that can be
 * diffed against upstream.
 *
 * @see {@link https://github.com/HeroicLands/Song-of-Heroic-Lands-FoundryVTT/issues/1441}
 */
export const CONTENT_PACKAGE = "thalorna";

/**
 * The **Foundry package** this repository's packs are shipped in — the `id` in
 * `assets/templates/module.template.json`, and the first segment of every
 * compendium UUID the compilers emit.
 *
 * Distinct from {@link CONTENT_PACKAGE} above, which names the *content*
 * distribution unit a note declares in its frontmatter. A note says
 * `package: thalorna`; the documents it compiles into are addressed as
 * `Compendium.sohl-thalorna.<pack>.<Type>.<id>`. The two are different
 * namespaces and only coincide by accident in the system repository.
 *
 * Declared here rather than read from the manifest so the link resolver stays
 * filesystem-free and unit-testable. `assertPackageIdMatchesManifest` in
 * `build-compendiums.mjs` fails the build if the two ever drift.
 */
export const FOUNDRY_PACKAGE_ID = "sohl-thalorna";
