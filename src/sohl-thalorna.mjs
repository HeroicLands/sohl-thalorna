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
 * This module is almost entirely content: its Items, Actors and Journals are
 * compiled into compendium packs from `assets/content/` at build time, and
 * Foundry loads them from `module.json` without any code running. What little
 * code there is exists to configure that content against its host system.
 */

/** This module's Foundry id, as declared in `assets/templates/module.template.json`. */
const MODULE_ID = "sohl-thalorna";

/** The system this module's compendium content is authored against. */
const REQUIRED_SYSTEM_ID = "sohl";

Hooks.once("init", () => {
  const module = game.modules.get(MODULE_ID);
  console.log(
    `${MODULE_ID} | Thalorna Setting ${module?.version} initializing`,
  );

  // Every pack in module.json declares `"system": "sohl"`, so under any other
  // system this module's compendiums load as empty and nothing explains why.
  // Say so plainly instead.
  if (game.system.id !== REQUIRED_SYSTEM_ID) {
    const message = game.i18n.format("THALORNA.Notification.wrongSystem", {
      systemId: game.system.id,
    });
    console.warn(`${MODULE_ID} | ${message}`);
    ui.notifications?.warn(message);
  }
});
