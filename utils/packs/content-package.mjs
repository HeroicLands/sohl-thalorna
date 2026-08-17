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
