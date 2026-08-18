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

import { defineConfig } from "vite";
import terser from "@rollup/plugin-terser";
import { fileURLToPath } from "url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const startYear = 2024;
const currentYear = new Date().getFullYear();
const licenseYears =
  currentYear > startYear ? `${startYear}-${currentYear}` : `${startYear}`;

const licenseBanner = `/*!
 * SPDX-License-Identifier: GPL-3.0-or-later
 * Copyright (c) ${licenseYears} by Tom Rodriguez
 */`;

const ENTRY = path.resolve(__dirname, "src/sohl-thalorna.mjs");
const OUTPUT = "sohl-thalorna.mjs";

export default defineConfig({
  root: ".",
  build: {
    outDir: path.resolve(__dirname, "build/stage"),

    // `build:prepare` has already written module.json, lang/, LICENSE, README
    // and the compiled LevelDB packs into build/stage. Emptying it here would
    // delete all of that and stage a module that is nothing but a script.
    emptyOutDir: false,

    target: "es2020",
    sourcemap: true,

    // Minification is done by the rollup plugin below, not here. Vite's own
    // `build.minify` is silently ignored in library mode with the `es` format —
    // it resolves the setting, reports no error, and emits an unminified
    // bundle. Setting it would only look like it was doing something.
    minify: false,

    lib: {
      entry: ENTRY,
      fileName: () => OUTPUT,

      // ESM — and module.json must load it as one, via `esmodules` (never
      // `scripts`). Loaded as a classic script, every top-level const/let/class
      // becomes a global lexical binding, and one colliding with a
      // non-configurable window property throws at parse time, killing the
      // module before a line runs.
      formats: ["es"],
    },

    rollupOptions: {
      input: ENTRY,
      output: {
        entryFileNames: OUTPUT,
        banner: licenseBanner,

        // The module ships minified. This runs as an output plugin so it
        // applies in library mode, where `build.minify` does not.
        //
        // `toplevel` is the setting that matters: terser leaves top-level
        // bindings alone by default, and in an ES module that is nearly every
        // name in the file — without it the output is stripped of comments and
        // otherwise untouched. `comments: /^!/` keeps the licence banner, which
        // terser would otherwise remove along with everything else.
        plugins: [
          terser({
            mangle: { toplevel: true },
            compress: { toplevel: true },
            format: { comments: /^!/ },
          }),
        ],
      },
    },
  },
});
