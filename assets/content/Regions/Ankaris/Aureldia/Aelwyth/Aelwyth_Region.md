---
description: "Great island off Élavendre's western coast — deeply legendary. The Peshtar Wilderness occupies the west, the kingdom-belt the east, joined at the misty north."
type: place
subType: region
data:
  demonym: null
  lore: []
  parents:
    - aureldirgn
    - ankrscntnnt
  population: 700000
name:
  full: Aelwyth
  aliases:
    - The Misty Isle
shortcode: aelwyth
terran_analog: "The British Isles, but with Ireland and Britain joined into a single landmass shaped like an inverted V (∧). The western arm is trackless deep forest (the Peshtar Wilderness); the eastern arm is the Scottish-and-English-analog kingdom belt (Stormveld in northeastern Scotland, the southern Aelwythan kingdoms in England-analog territory). The two arms meet at the misty northern apex."
packFolder: aelwyth
---

Off the western coast of [[place-ankrscntnnt|Ankaris Continent]], some hundred miles out across the cold sea from the [[place-elavendre|Élavendri]] coast, Aelwyth is a mist-shrouded island known for its great central bay, diverse kingdoms, and thin veil between the mortal and supernatural worlds. Often called "the Misty Isle," Aelwyth is a land of mystery where ancient ruins, lost temples, and forgotten cities stand as remnants of civilizations that have long since passed into legend.

## Geography

Aelwyth is a great island shaped like an inverted V (∧), with two long arms reaching southeast and south from a misty northern apex and a wide expanse of cold sea filling the open hollow between them. The geography is unmistakable from any seaward approach: two immense headlands rising out of the northern fog, joined at the top, with what looks like (but is not) a third strait between them — actually the great central **Mist Bay** that opens southward into the open sea and is rumored to be bottomless in places.

The **western arm** is the **[[place-pshtrwldrns|Peshtar Wilderness]]** — rugged highland country of bog, ancient forest, and craggy uplands, broken by deep glens and lakes that drain to the western sea. This is the country of the Peshtar tribes, ungoverned for as long as records have been kept, and it occupies the entirety of the western arm from its northern peak down to its southwestern coast.

The **eastern arm** is the kingdom-belt — the more populous and more politically organized half of the island. Its northeast coast (the upper part of the eastern arm) is the fjord-cut **[[affiliation-jrldmstrmvld|Stormveld]]** country, settled by Nordmen járldoms whose harbors face open ocean across the northern sea. The middle of the eastern arm holds the central feudal kingdoms — fertile rolling country sloping gently from the eastern coast up into the highland interior, well-suited to farming, market towns, and the elaborate manorial-and-courtly culture that the southern Aelwythan kingdoms have made into their distinguishing feature. The southern end of the eastern arm shades into the temperate lowlands and southern coast that face the Vylarian Sea, and is home to the wealthier southern kingdoms and the great trading port-cities.

The **northern apex** where the two arms meet is the wettest and mistiest part of the island — a country of constant low cloud, reliable summer rain, dense temperate rainforest, and the great peat-bog moorlands that no road has ever successfully crossed. Few people live there. The very northern coast is home to a handful of Nordmen and Peshtar settlements that find each other's neighbors more tolerable than the southern kingdoms below them, but the apex itself is largely empty.

The whole island is frequently shrouded in mist — particularly around the Mist Bay, in the highland valleys of both arms, and on the moorlands of the northern apex. This perpetual haze gives Aelwyth its dreamlike quality and has contributed to centuries of legends about hidden places that can only be found when the mist parts.

## Polities

```dataview
TABLE WITHOUT ID
    link(file.path, name.full) AS "Polity",
    description AS "Overview"
WHERE category = "polity" and contains(parent.regions, "aelwyth-region")
SORT name.full ASC
```

### Elder Race Enclaves

The southern forests shelter ancient communities of [[lore-flksinale|Sinalë]] (elves), who maintain a distant but real relationship with the crown of [[affiliation-kngdmldrth|Aldorath]]. The mountains northeast of Aldorath — the range separating the central lowlands from the [[affiliation-jrldmstrmvld|Stormveld]] coast — contain hidden holds of the [[lore-flkkhazar|Khazári]] (dwarves), among the most reclusive of their kind anywhere in [[place-ankrscntnnt|Ankaris Continent]].

### Minor Polities

Scattered between the major realms are smaller kingdoms, free cities, and independent lordships. The free city of Veldareth, on the southern coast between Dúnavarre and Tarvenne, is a neutral center of learning whose [[affiliation-panepistmm|Panepistemium]] chapterhouse is among the most respected on the island.

## Religion

The [[affiliation-arldnpnthn|Aurèldían Pantheon]] is dominant in the southern and eastern kingdoms, with [[affiliation-arldnpnthn|Æthería]], [[affiliation-arldnpnthn|Lúsinía]], and [[affiliation-arldnpnthn|Karnavos]] being particularly prominent. [[affiliation-arldnpnthn|Jánus]] holds special importance in Dúnavarre. The Nordmen of the Stormveld worship the [[affiliation-asguardian|Asguardian Pantheon]] gods. Local folk traditions — spirits of the lake, guardians of crossroads, ancestral ghosts — layer additional beliefs atop the formal pantheons.

The **[[affiliation-repblctrvn|Republic of Tarvenne]]** in the west is the exception on the island and something of an exception in the Aurèldían world. The [[affiliation-blackflame|Black Flame]] — suppressed nearly everywhere else — carries enormous influence there, for the straightforward reason that suppression requires magistrates and Tarvenne's magistracies are for sale. So does [[affiliation-thanatos|Thánatos]], the Silent Judge, for the opposite reason: in a republic whose courts work for whoever pays them, a god who cannot be bought is the only judge most Tarvennese will ever meet on equal terms with their betters.

## Magic

Aelwyth is one of the most magically active regions in the known world. The great central bay is believed to be a nexus of mystical energy, and the veil between the mortal world and other realms is thinner here than anywhere outside of Élavendre.

The [[affiliation-panepistmm|the Epistemium]] maintains chapterhouses in each of Aelwyth's five great cities, functioning as they do everywhere — as houses of knowledge and learning, teaching all subjects and hosting sages of every philosophical discipline. As on the mainland, the [[affiliation-ordoarcanis|Ordo Arcanis]] operates through these chapterhouses, using them to extend its influence over arcane practice. In [[affiliation-kingdmdnvr|Dúnavarre]], this influence has reached its logical extreme: the Ordo governs the kingdom outright through a Synod of mages, the only polity anywhere in [[place-ankrscntnnt|Ankaris Continent]] where the Ordo holds direct political power.

Elsewhere on the island, the relationship between the local rulers and their Panepistemium chapterhouses varies — [[affiliation-kngdmldrth|Aldorath's]] feudal lords defer to their own seers on matters of prophecy, [[affiliation-repblctrvn|Tarvenne's]] senate insists on civic oversight, and the Nordmen of [[affiliation-jrldmstrmvld|Stormveld]] are culturally indifferent to scholarly institutions. But even where the Epistemium is viewed with suspicion, the chapterhouses are respected and their presence tolerated. The Epistemium's power is not military but intellectual: its scholars educate the gentry's children, its sages provide expertise no local tradition can match, and its libraries hold knowledge available nowhere else. A polity that earns the Epistemium's sanction — losing access to its teachers, its specialists, and its accumulated wisdom — finds life considerably harder for its ruling class. This quiet leverage ensures that chapterhouse doors remain open across the island, whatever the local rulers may think of the Ordo lurking behind them.

## Relations

Aelwyth's closest ties are with [[place-elavendre|Élavendre]] on the nearby mainland. Dúnavarre's southeastern harbors maintain trading relationships across the [[place-vylarianse|Vylarian Sea]]. The Nordmen of Stormveld maintain connections to [[affiliation-kngdmnrdhm|Kingdom of Nordheim]]. Tarvenne has cultivated diplomatic channels with the [[affiliation-vylarinmpr|Vylarian Empire]].

## The Island and the World

Two things are true about Aelwyth at once, and neither of the people concerned believes the other.

**Aelwythans think of themselves as the world.** Seven hundred thousand people on one island conduct
their affairs with the entire seriousness of continental powers: the rivalry between
[[affiliation-kngdmldrth|Aldorath]] and [[affiliation-kingdmdnvr|Dúnavarre]] is followed as great
politics, the standing of the realms is weighed and argued, and a good Aelwythan family knows its
position in an order it has never occurred to them is local. A single Vylarian province holds ten times
as many people as the whole island. Most Aelwythans have no functional idea of this, and those who are
told it tend to treat the figure as a traveller's exaggeration.

This is not a quirk of one realm. **Aelwyth is insular and parochial through and through**, and for a
plain reason: almost nobody leaves. The mainland is a long and dangerous sail; what news arrives is
second-hand, years old, and carried by people with an interest in telling their patrons what pleases
them. There is, on the whole island, almost nobody in a position to say _that is not how it is done
elsewhere_ — and there has not been for generations.

So every Aelwythan institution is conducted with total seriousness and no external measure. Aldorath's
lords hold court as though their precedence mattered beyond the next valley; Dúnavarre's Synod deliberates
as a great power; Stormveld's jarls reckon themselves conquerors of consequence. The most florid case is
[[affiliation-repblctrvn|Tarvenne]], which has built an entire imitation Vylarian republic — Senate,
senators, mantles, portico — out of hearsay, and cannot tell how it looks, because no one there has seen
the original.

**The rest of western Thalorna thinks of Aelwyth as somewhere to avoid.** Its reputation abroad is
uniformly bad and uniformly lurid: a wilderness of barbarians, fell creatures and mystical powers, where
the forests are not safe, the tribes take heads, and the ruling class of one kingdom are mages who
answer to nobody. Mainland factors quote higher for the crossing. Mainland mothers use it in
warnings.

Most inhabitants of Aelwyth would be astonished to hear any of it. Their lives are boring and normal in
the way lives generally are — market days, tithes, weather, the harvest, the neighbours — and the most
alarming thing the great majority will ever meet is a bad winter.

## What the Reputation Gets Right

The reputation is wrong about the people and **right about the land**.

There genuinely are places on Aelwyth where the fae are strong — sites of real and unpredictable power,
concentrated in the deep forest of the interior and in the wilder north, in country that the settled
realms have never brought under the plough and do not pretend to govern. These are not folklore. The
tribes of those regions organise their lives around them, the realms' borders bend to avoid them, and
the [[affiliation-ordoarcanis|Ordo]] presence in [[affiliation-kingdmdnvr|Dúnavarre]] is not
unconnected with the fact.

So the mainland is not simply wrong; it has heard true things about a third of the island and applied
them to all of it. And the Aelwythan farmer who has never in his life seen anything stranger than a
heron is also not wrong, because he has never had cause to go where such things are.

## Population

Aelwyth holds about **700,000** people, which is few for an island of its size, and the reason is that
most of Aelwyth is empty: **a third of it is dense forest** — old, deep and effectively unsettled — and
beyond that lie further large tracts of upland, moor and bog that support nobody at all.

About **a sixth of the island's people — some 125,000 — live outside every realm**, in the tribal
cultures of the [[place-pshtrwldrns|Peshtar Wilderness]] across the north-west and much of the northern
coast, and in isolated wooded communities scattered through the interior and the eastern and southern
forest. The lowland realms call all of them barbarians, which is convenient and uninformative; the
forest peoples are markedly more warlike than the northern tribes, and the settled realms treat the
forest margins as frontier rather than border.

The remaining **575,000** are divided between four settled realms, each holding a different part of the
coast:

| Realm                                              | People   | Where            |
| -------------------------------------------------- | -------- | ---------------- |
| [[affiliation-kngdmldrth\|Kingdom of Aldorath]]    | ~200,000 | eastern interior |
| [[affiliation-jrldmstrmvld\|Jarldom of Stormveld]] | ~150,000 | north-east       |
| [[affiliation-repblctrvn\|Republic of Tarvenne]]   | ~150,000 | western coast    |
| [[affiliation-kingdmdnvr\|Kingdom of Dúnavarre]]   | ~75,000  | south-east       |

Three things about that table matter more than the numbers.

**Stormveld is not an Aelwythan realm.** Nordmen took the north-east some sixty years ago and enslaved
the population; of its 150,000, around 30,000 are Nordmen and around 120,000 are native thralls. A
Nordmen holding a third of the island's settled people sits a hundred and twenty sea-miles from
[[place-elavendre|Élavendre]], which explains a good deal of Élavendren foreign policy.

**Aldorath is the largest**, with Stormveld and Tarvenne close behind, and the most conventionally feudal: four in five of its people are
serfs or peasants on manorial estates.

**Dúnavarre is the smallest and the most powerful.** Its weight comes from harbours, trade, the Synod
and the Order of the Just Blade rather than from numbers, and its long rivalry with Aldorath over the
interior is not a contest of size — Aldorath has nearly three times as many subjects, and even Tarvenne twice as many — but of kind.

## See Also

- [[place-elavendre|Élavendre]] — Nearest mainland region
- [[affiliation-kngdmnrdhm|Kingdom of Nordheim]] — Source of northern settlers
- [[affiliation-arldnpnthn|Aurèldían]] — Dominant pantheon
- [[affiliation-asguardian|Asguardian Pantheon]] — Northern pantheon influence
- [[lore-flksinale|Sinalë]] — Elder race with southern forest enclaves
- [[lore-flkkhazar|Khazári]] — Elder race with northeastern mountain holds
