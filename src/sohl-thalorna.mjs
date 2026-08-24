/*
 * This file is part of the Song of Heroic Lands (SoHL) system for Foundry VTT.
 * Copyright (c) 2024-2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.com>
 *
 * This work is licensed under the GNU General Public License v3.0 (GPLv3).
 * You may copy, modify, and distribute it under the terms of that license.
 *
 * For full terms, see the LICENSE file in the project root or visit:
 * https://www.gnu.org/licenses/gpl-3.0.html
 *
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

/**
 * Entry point for the Thalorna Setting module.
 *
 * This module is almost entirely content: its packs are compiled from
 * `assets/content/` at build time and Foundry loads them from `module.json`
 * without any code running.
 *
 * It is deliberately usable **without** Song of Heroic Lands. The Item and
 * Actor packs are system-specific and Foundry hides them outside SoHL, but the
 * Journal, Macro and Scene packs are setting material that any system can use,
 * so they carry no system of their own. Running under another system is a
 * supported configuration, not an error — nothing here warns about it.
 */

/** This module's Foundry id — the `name` of `package.json`, which the generated
 * `module.json` takes its `id` from. */
const MODULE_ID = "sohl-thalorna";

Hooks.once("init", () => {
    const module = game.modules.get(MODULE_ID);
    console.log(
        `${MODULE_ID} | Thalorna Setting ${module?.version} initializing`,
    );
});
