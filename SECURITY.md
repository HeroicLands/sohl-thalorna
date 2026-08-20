# Security Policy

## Reporting a vulnerability

Report suspected vulnerabilities privately via the "Report a vulnerability"
button on this repo's Security tab (Security → Advisories). Please do not
open a public issue for security problems — see
[§7 of the issue-reporting standard](.github/ISSUE_REPORTING.md#7-security-issues--special-handling).

I'll acknowledge the report, develop a fix in a private advisory, and credit
you on publication if you'd like.

## Supported versions

The latest released version receives security fixes; older versions do not.

## Scope

This repository ships a Foundry VTT content module — compendium packs of
journals, items, actors, and scenes — plus the `/thalorna` site built from the
same notes. The relevant concerns are therefore content-borne rather than
code-borne: text rendered into other users' clients (item names and
descriptions, journal bodies), any macro shipped in a pack, and HTML or links
emitted into the published site.

A weakness in the SoHL system that this content merely exercises belongs in the
[system repository's](https://github.com/HeroicLands/Song-of-Heroic-Lands-FoundryVTT/security/advisories/new)
advisories, not here.
