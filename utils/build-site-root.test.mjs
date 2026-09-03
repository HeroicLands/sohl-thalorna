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
 * The `_headers` and `_redirects` payloads this repository generates, asserted
 * rather than eyeballed (#96, package-build#182).
 *
 * Written for `node --test`, which needs no dependency and no configuration —
 * this repository has no test harness, and the payload under test is a string
 * constant, so introducing one would be the larger change. The deploy workflow
 * runs this before it builds anything.
 *
 * The interesting assertions are not "the rule text is what I typed". They are
 * the two facts the payload is *for*: every address the hosting project answers
 * on is covered, and the canonical address — `www.heroiclands.org`, which this
 * same deployment serves through the router — is covered by nothing. The second
 * is the failure mode to design against: a `noindex` reaching it would de-index
 * the canonical site, which is far worse than the duplicate address this file
 * exists to close.
 *
 * Usage: node --test utils/
 */

import { describe, it } from "node:test";
import assert from "node:assert/strict";

import {
    HEADERS,
    NOINDEX_HEADERS,
    CACHE_HEADERS,
    REDIRECTS,
    ORIGIN_SUFFIX,
    PACKAGE_DIR,
} from "./build-site-root.mjs";

/**
 * The `_headers` payload as `[match, ...header lines]` tuples.
 *
 * Cloudflare's format is a match line in column 0 followed by indented header
 * lines, with blank lines separating rules.
 *
 * @param {string} headers - The payload.
 * @returns {Array<string[]>} One tuple per rule.
 */
function rules(headers) {
    const out = [];
    for (const line of headers.split("\n")) {
        if (!line.trim()) continue;
        if (/^\s/.test(line)) out.at(-1)?.push(line.trim());
        else out.push([line.trim()]);
    }
    return out;
}

/** The hostname part of a rule's match, without scheme or path. */
const hostOf = (match) => match.replace(/^https:\/\//, "").replace(/\/\*$/, "");

/**
 * A rule's host pattern as a regular expression over whole hostnames.
 *
 * Cloudflare's `:name` placeholders are **single-label** wildcards — they match
 * every character except the delimiter, which inside a host is the period — so
 * a placeholder can never swallow a dot. That is the whole reason a four-label
 * pattern cannot match a three-label hostname, and modelling it here is what
 * turns "cannot match `www`" from a claim into an assertion.
 *
 * @param {string} match - A rule's match line, e.g. `https://:project.pages.dev/*`.
 * @returns {RegExp} A regular expression anchored to a whole hostname.
 */
function hostMatcher(match) {
    const source = hostOf(match)
        .split(".")
        .map((label) =>
            label.startsWith(":") ? "[^.]+" : label.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
        )
        .join("\\.");
    return new RegExp(`^${source}$`);
}

/**
 * The rules whose host pattern matches `host`.
 *
 * Read from the whole payload rather than from {@link NOINDEX_HEADERS}, because
 * the fact under test is what a *request* to that host is served: a cache rule
 * that accidentally matched a hostname would be as much of a finding here as a
 * `noindex` one. The path-scoped rules simply match no hostname.
 */
const rulesMatching = (host) => rules(HEADERS).filter(([match]) => hostMatcher(match).test(host));

describe("the /thalorna/ deployment's host-assigned addresses", () => {
    it("marks the hosting project's own address noindex", () => {
        assert.deepEqual(rulesMatching("sohl-thalorna.pages.dev"), [
            ["https://:project.pages.dev/*", "X-Robots-Tag: noindex"],
        ]);
    });

    it("marks every deployment's own address noindex", () => {
        // A real one, from the deploy that published the tree measured below.
        assert.deepEqual(rulesMatching("9d284709.sohl-thalorna.pages.dev"), [
            ["https://:version.:project.pages.dev/*", "X-Robots-Tag: noindex"],
        ]);
    });

    it("marks the pkg origin address noindex too (#96)", () => {
        // The newest of the three host-assigned addresses, and the only one a
        // reader is plausibly handed: `thalorna.pkg.heroiclands.org` is the
        // custom domain the hosting project carries so `heroiclands-site`'s
        // router has an origin to fetch. Measured on 2026-08-30 before this
        // rule existed, it answered 200 with no `X-Robots-Tag` while the *same
        // deployment* — byte-identical body — set it at `*.pages.dev`.
        assert.deepEqual(rulesMatching(`thalorna.${ORIGIN_SUFFIX}`), [
            [`https://:package.${ORIGIN_SUFFIX}/*`, "X-Robots-Tag: noindex"],
        ]);
    });

    it("scopes every rule to a host-assigned address", () => {
        // An unscoped `/*` would noindex the canonical path as well — and, for
        // anyone who takes this repository elsewhere, their own domain with it.
        const hosted = new RegExp(`\\.(pages\\.dev|${ORIGIN_SUFFIX.replace(/\./g, "\\.")})$`);
        for (const [match] of rules(NOINDEX_HEADERS.join("\n"))) {
            assert.match(match, /^https:\/\/[^/]+\/\*$/);
            assert.match(hostOf(match), hosted);
        }
    });

    it("adds nothing host-scoped beyond those three rules", () => {
        // The scoping assertion above reads `NOINDEX_HEADERS`, so on its own it
        // would not notice an unscoped `/*` added to the *other* section. This
        // says the payload holds exactly the three host-scoped rules and no
        // fourth: every remaining rule is a path, which by construction cannot
        // carry `noindex` to a host it was not written for.
        const scoped = rules(HEADERS).filter(([match]) => match.startsWith("https://"));
        assert.equal(scoped.length, 3);
    });

    it("cannot match the canonical host, which must stay indexable", () => {
        // THE failure mode to design against. `www.heroiclands.org/thalorna/`
        // is served from this very deployment: the router fetches
        // `thalorna.pkg.heroiclands.org` as its origin, so anything set there
        // rides on the canonical response unless something removes it.
        //
        // Two independent guards say it cannot. First, this one: the pkg rule
        // needs FOUR labels with a literal `pkg` third from the end, and a
        // single-label placeholder cannot span the dot that would be needed to
        // fold the three-label `www.heroiclands.org` into it. The two
        // `.pages.dev` rules need a literal `pages.dev` suffix.
        //
        // Second, the router strips `X-Robots-Tag` on the way through
        // (`heroiclands-site`, `worker/src/router.js`, `canonicalHeaders`),
        // which that repository's suite asserts both as a pure function and end
        // to end through the handler with a stubbed origin.
        //
        // This case passes against the two-rule payload too. It is a standing
        // regression guard, not a test of the rule added for #96.
        for (const host of [
            "www.heroiclands.org",
            "heroiclands.org",
            "api.heroiclands.org",
            "kb.heroiclands.org",
            ORIGIN_SUFFIX,
        ]) {
            assert.deepEqual(rulesMatching(host), []);
        }
    });
});

describe("the /thalorna/ landing redirect (package-build#182)", () => {
    // The homepage is an addressed note now: it publishes at
    // `/thalorna/homepage-root/` rather than at the package prefix, so the
    // prefix serves nothing of its own and has to point at it.
    const redirectLines = REDIRECTS.split("\n").filter((l) => l.trim());

    it("redirects both raw forms of the package prefix", () => {
        // Cloudflare Pages matches the raw path — redirect matching runs before
        // any trailing-slash handling — so `/thalorna` and `/thalorna/` are
        // distinct keys and a rule on one does not catch the other.
        assert.deepEqual(
            redirectLines.map((l) => l.split(/\s+/)),
            [
                [`/${PACKAGE_DIR}/`, `/${PACKAGE_DIR}/homepage-root/`, "301"],
                [`/${PACKAGE_DIR}`, `/${PACKAGE_DIR}/homepage-root/`, "301"],
            ],
        );
    });

    it("never redirects the landing to itself", () => {
        // A destination inside the matched prefix would loop if the match were
        // ever widened to `/thalorna/*`. It is not, but the target is the one
        // thing that makes widening safe, so it is asserted rather than assumed.
        for (const line of redirectLines) {
            const [from, to] = line.split(/\s+/);
            assert.notEqual(from, to);
        }
    });

    it("pins a lifetime on the 301", () => {
        // Cloudflare Pages sets no `Cache-Control` on a redirect it generates,
        // and an unpinned 301 is cacheable indefinitely under RFC 9111 — a
        // browser persists it to disk and stops asking. Both redirected paths
        // need the rule, since `_headers` matches the same raw paths.
        const cache = rules(CACHE_HEADERS.join("\n"));
        assert.deepEqual(cache, [
            [`/${PACKAGE_DIR}/`, "Cache-Control: max-age=3600"],
            [`/${PACKAGE_DIR}`, "Cache-Control: max-age=3600"],
        ]);
        assert.deepEqual(
            cache.map(([match]) => match),
            redirectLines.map((l) => l.split(/\s+/)[0]),
        );
    });
});
