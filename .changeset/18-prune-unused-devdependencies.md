---
"sohl-thalorna": patch
---

**Drop 23 devDependencies this repository never loads, taking 737 packages out of the tree.**

The `devDependencies` block was copied from the system repository when this one
was scaffolded, and most of the toolchain it describes was never wired up here.
Every entry still gets resolved, audited and bumped, so each one costs a
Dependabot pull request, a review and a CI cycle for tooling nobody runs — two
such pull requests were open against `@babel/preset-env` and
`@vitest/coverage-v8` when this was written, neither package being reachable
from any tracked file.

The whole of this repository's tracked code imports four bare specifiers —
`@heroiclands/content-build`, `@rollup/plugin-terser`, `vite` and `yaml` — plus
Node builtins. Everything removed below is referenced by no source file, no
configuration file, no workflow and no `scripts` entry:

| Cluster        | Removed                                                                                                | Why it was never used                                                                                       |
| -------------- | ------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------- |
| Test stack     | `vitest`, `@vitest/coverage-v8`, `@vitest/ui`, `cypress`                                               | No test script, no vitest or cypress config, no test files                                                  |
| Docs plugins   | `typedoc-github-theme`, `typedoc-plugin-markdown`, `documentation`                                     | No typedoc config file exists for either plugin to be named in                                              |
| Transpilation  | `@babel/preset-env`                                                                                    | No babel config and no browserslist; `vite` targets es2020 directly                                         |
| TypeScript     | `@types/file-saver`, `@types/json-schema`                                                              | This repository ships no `.ts` file and has no `tsconfig.json`                                              |
| Styling        | `sass`                                                                                                 | No `.scss` source; `styles/sohl-thalorna.css` is copied verbatim                                            |
| Build helpers  | `archiver`, `@octokit/rest`, `vite-plugin-banner`, `madge`                                             | The banner is written inline in `vite.config.mjs`; the rest belong to scripts whose files do not exist (#9) |
| Misc utilities | `dotenv`, `glob`, `handlebars`, `ix`, `loglevel`, `loglevel-plugin-prefix`, `markdown-it`, `unidecode` | Imported nowhere; `utils/sync-labels.mjs` reads `process.env` directly, without `dotenv`                    |

Ten entries stay, each demonstrably reachable: `@heroiclands/content-build`,
`@rollup/plugin-terser`, `vite` and `yaml` are imported; `@changesets/cli`,
`npm-run-all` and `prettier` back `scripts` entries; and
`@heroiclands/hugo-theme` is consumed by Hugo through
`themesDir = "../node_modules/@heroiclands"` in `site/hugo.toml` — a reference
no dependency checker sees, and one that only the site build proves.

`typedoc` and `typescript` are also kept, deliberately. The `docs:*` scripts do
name the `typedoc` binary, so removing it would turn today's missing-config
failure into a missing-command one. Those scripts cannot run regardless — every
file they invoke is absent — and whether they get implemented or deleted is #9's
decision to make; the two packages should go with it.

The lockfile drops from 1125 entries to 388. `npm ci`, `npm run build:noci` and
`npm run build:site` are green, and the built module is byte-for-byte what it
was.

(Closes #18.)
