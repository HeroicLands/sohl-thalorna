---
# The package landing at /thalorna/ — the front door to everything this
# repository publishes.
#
# The page is a card grid over the setting's own sections, and it is authored
# here rather than hand-built as a layout because the shape is shared: six
# packages publish a landing at their own prefix, so the arrangement lives in
# @heroiclands/hugo-theme's `layouts/partials/landing.html` and this note
# supplies only Thalorna's words and addresses. The contract is documented in
# that package's README under "A package landing page"
# (heroiclands-hugo-theme#33, #91).
#
# `cards.source: sections` is the whole of the grid, and deliberately so. This
# is a content package: its landing *is* its section index, one card per
# top-level section with that section's own title and description. Listing
# them here instead would mean re-writing this file every time the content
# build emits or retires a section — which is exactly the maintenance the
# hand-built layout it replaces already avoided, by reading the site's own
# section list. Deriving them keeps that property and gains the shared shape.
#
# There is no `install:` block. Every other package's landing carries one, but
# this repository has cut no release, so a
# `releases/latest/download/module.json` address would be a 404 on the page
# that exists to send readers somewhere. It belongs here the day there is
# something to install.
type: homepage
title: The World of Thalorna
description: >-
  A world of feuding realms, old faiths, and older powers — its peoples,
  places, creatures, and the lore that binds them.
banner: banners/tapestry-of-dreams.webp

landing:
  cards:
    source: sections
---
