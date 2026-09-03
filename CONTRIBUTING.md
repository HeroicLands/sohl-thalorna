# Contributing to the Thalorna setting package

Thank you for your interest in contributing to _Thalorna_, the original setting
package for [Song of Heroic Lands](https://github.com/HeroicLands/Song-of-Heroic-Lands-FoundryVTT).

## Filing an issue

**This repository tracks its own work.** File Thalorna issues here, not in the
system repository — [§9 of the issue-reporting standard](.github/ISSUE_REPORTING.md#9-which-repository-does-an-issue-belong-in)
says which repository a given piece of work belongs in.

Every issue is classified on four axes — **type**, **priority**, **labels**, and
**milestone**. The standard defines each one, and the issue forms pre-fill the
body shape for the type you pick:

- [Issue Reporting standard](.github/ISSUE_REPORTING.md)
- [Open an issue](https://github.com/HeroicLands/sohl-thalorna/issues/new/choose)

Exploitable weaknesses go to a **private advisory**, never a public issue — see
[SECURITY.md](SECURITY.md).

## Making a change

`main` is protected: it takes no direct pushes. Every change lands through a pull
request.

1. **Find or file the tracking issue.** Pure repo housekeeping (`chore/*`) may skip
   this; anything else gets an issue first, so you have its number for the branch.
2. **Branch off current `main`**, named `<type>/<issue_#>_<short-kebab-summary>` —
   e.g. `feat/12_hegovyn-bestiary`, `bug/19_dead-region-wikilink`. Issue-free
   housekeeping is `chore/<slug>`.

   **Git refuses a commit on `main`.** Hooks in `.githooks/` — `pre-commit`
   and `pre-merge-commit` — decline it, so the mistake surfaces before the
   commit exists rather than at push time. `npm install` activates them. To
   commit on `main` anyway, `git commit --no-verify`; to opt this checkout out
   entirely, `git config hooks.allowCommitOnMain true`.

3. **Make the change**, keeping it small and focused — one feature, one fix, or one
   documentation improvement per pull request.
4. **Verify it.** At minimum `npm run build` must succeed, which compiles every note
   into its pack and validates the link manifest. Site changes should additionally
   build: `npm run build:site`.
5. **Format**: `npm run format:check` must be clean for the files you touched.
6. **Commit** in Conventional-Commits style, and **open a pull request** with
   `Closes #<n>` and a what/why description.

**No AI/assistant attribution** in commit messages, pull-request titles or bodies,
or issues — no `Co-Authored-By:` trailer naming an assistant, and no "Generated
with Claude Code"-style signature. A committed `commit-msg` hook (activated by
`npm install`) rejects such commits locally, and the **No Attribution** GitHub
Actions check fails any pull request carrying it.

## What belongs here

Thalorna is **original content**, licensed CC-BY-SA-4.0. Material derived from
Kelestia Productions' Hârn properties never enters this repository — it lives in
[`sohl-kethira-basic`](https://github.com/HeroicLands/sohl-kethira-basic) under a
separate licence. Under no circumstances commit copyrighted text, art, maps, or
trade dress belonging to a third party.
