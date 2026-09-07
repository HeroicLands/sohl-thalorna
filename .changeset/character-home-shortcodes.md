---
"sohl-thalorna": patch
---

**`name.home` on a character is a place shortcode, not a place name.**

Of 436 populated `home` values, 435 were prose names — `Liranel`, `Wasetkara`, `Magnápolis` —
which address nothing and cannot be resolved to the settlement they mean.

- **410 values** are replaced with the shortcode of the `place` note they name, matched on name,
  alias, or shortcode. The last of those caught `Magnápolis`, whose note is titled
  _Magnápolis City_.
- **Nine more** resolve once two missing notes exist. Heliónis already pairs each city-state with
  a settlement — `kalydria` with `kalydria2`, and the same for Pelagora, Theradon and Thyrenae —
  but **Athenikos** and **Korinthea** had no settlement, so each gains one on that template and
  the polity's `seat` now points at it. A city-state is both a polity and a settlement.
- **Eight characters from Tamavar and Varoshan** point at those states' existing seats, `qadhirun`
  and `kashmuret`.
- **Nine remain `null`**, each with the old value preserved in a comment. Eskárath is a highland
  territory whose own note records that its council _"has no permanent seat"_, and The South
  Marches is an organization's name; neither has a settlement to point at.

Every populated `home` in the package now resolves to a real `place`.
