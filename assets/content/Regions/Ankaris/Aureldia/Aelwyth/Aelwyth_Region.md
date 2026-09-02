---
aliases:
  - Aelwyth
  - The Misty Isle
id: tCB67AMwzuba3Faw
description: "Great island off Élavendre's western coast — deeply legendary. The Peshtar Wilderness occupies the west, the kingdom-belt the east, joined at the misty north."
type: place
subType: region
name:
  full: Aelwyth
  aliases:
    - The Misty Isle
shortcode: aelwyth
terran_analog: "The British Isles, but with Ireland and Britain joined into a single landmass shaped like an inverted V (∧). The western arm is trackless deep forest (the Peshtar Wilderness); the eastern arm is the Scottish-and-English-analog kingdom belt (Stormveld in northeastern Scotland, the southern Aelwythan kingdoms in England-analog territory). The two arms meet at the misty northern apex."
parent:
  regions:
    - aureldirgn
  continents:
    - ankrscntnnt
folder: ZbE1NQo3ApZ26xon
---

Off the western coast of [[doc-ankrscntnnt|Ankaris Continent]], some hundred miles out across the cold sea from the [[doc-elavendre|Élavendri]] coast, Aelwyth is a mist-shrouded island known for its great central bay, diverse kingdoms, and thin veil between the mortal and supernatural worlds. Often called "the Misty Isle," Aelwyth is a land of mystery where ancient ruins, lost temples, and forgotten cities stand as remnants of civilizations that have long since passed into legend.

## Geography

Aelwyth is a great island shaped like an inverted V (∧), with two long arms reaching southeast and south from a misty northern apex and a wide expanse of cold sea filling the open hollow between them. The geography is unmistakable from any seaward approach: two immense headlands rising out of the northern fog, joined at the top, with what looks like (but is not) a third strait between them — actually the great central **Mist Bay** that opens southward into the open sea and is rumored to be bottomless in places.

The **western arm** is the **[[doc-pshtrwldrns|Peshtar Wilderness]]** — rugged highland country of bog, ancient forest, and craggy uplands, broken by deep glens and lakes that drain to the western sea. This is the country of the Peshtar tribes, ungoverned for as long as records have been kept, and it occupies the entirety of the western arm from its northern peak down to its southwestern coast.

The **eastern arm** is the kingdom-belt — the more populous and more politically organized half of the island. Its northeast coast (the upper part of the eastern arm) is the fjord-cut **[[doc-jrldmstrmvld|Stormveld]]** country, settled by Normen járldoms whose harbors face open ocean across the northern sea. The middle of the eastern arm holds the central feudal kingdoms — fertile rolling country sloping gently from the eastern coast up into the highland interior, well-suited to farming, market towns, and the elaborate manorial-and-courtly culture that the southern Aelwythan kingdoms have made into their distinguishing feature. The southern end of the eastern arm shades into the temperate lowlands and southern coast that face the Vylarian Sea, and is home to the wealthier southern kingdoms and the great trading port-cities.

The **northern apex** where the two arms meet is the wettest and mistiest part of the island — a country of constant low cloud, reliable summer rain, dense temperate rainforest, and the great peat-bog moorlands that no road has ever successfully crossed. Few people live there. The very northern coast is home to a handful of Normen and Peshtar settlements that find each other's neighbors more tolerable than the southern kingdoms below them, but the apex itself is largely empty.

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

The southern forests shelter ancient communities of [[doc-flksinale|Sinalë]] (elves), who maintain a distant but real relationship with the crown of [[doc-kngdmldrth|Aldorath]]. The mountains northeast of Aldorath — the range separating the central lowlands from the [[doc-jrldmstrmvld|Stormveld]] coast — contain hidden holds of the [[doc-flkkhazar|Khazári]] (dwarves), among the most reclusive of their kind anywhere in [[doc-ankrscntnnt|Ankaris Continent]].

### Minor Polities

Scattered between the major realms are smaller kingdoms, free cities, and independent lordships. The free city of Veldareth, on the southern coast between Dúnavarre and Tarvenne, is a neutral center of learning whose [[affiliation-panepistmm|Panepistemium]] chapterhouse is among the most respected on the island.

## Religion

The [[affiliation-arldnpnthn|Aurèldían Pantheon]] is dominant in the southern and eastern kingdoms, with [[affiliation-arldnpnthn|Æthería]], [[affiliation-arldnpnthn|Lúsinía]], and [[affiliation-arldnpnthn|Karnavos]] being particularly prominent. [[affiliation-arldnpnthn|Jánus]] holds special importance in Dúnavarre. The Normen of the Stormveld worship the [[affiliation-asguardian|Asguardian Pantheon]] gods. Local folk traditions — spirits of the lake, guardians of crossroads, ancestral ghosts — layer additional beliefs atop the formal pantheons.

## Magic

Aelwyth is one of the most magically active regions in the known world. The great central bay is believed to be a nexus of mystical energy, and the veil between the mortal world and other realms is thinner here than anywhere outside of Élavendre.

The [[affiliation-panepistmm|the Epistemium]] maintains chapterhouses in each of Aelwyth's five great cities, functioning as they do everywhere — as houses of knowledge and learning, teaching all subjects and hosting sages of every philosophical discipline. As on the mainland, the [[affiliation-ordoarcanis|Ordo Arcanis]] operates through these chapterhouses, using them to extend its influence over arcane practice. In [[doc-kingdmdnvr|Dúnavarre]], this influence has reached its logical extreme: the Ordo governs the kingdom outright through a Synod of mages, the only polity anywhere in [[doc-ankrscntnnt|Ankaris Continent]] where the Ordo holds direct political power.

Elsewhere on the island, the relationship between the local rulers and their Panepistemium chapterhouses varies — [[doc-kngdmldrth|Aldorath's]] feudal lords defer to their own seers on matters of prophecy, [[doc-repblctrvn|Tarvenne's]] senate insists on civic oversight, and the Normen of [[doc-jrldmstrmvld|Stormveld]] are culturally indifferent to scholarly institutions. But even where the Epistemium is viewed with suspicion, the chapterhouses are respected and their presence tolerated. The Epistemium's power is not military but intellectual: its scholars educate the gentry's children, its sages provide expertise no local tradition can match, and its libraries hold knowledge available nowhere else. A polity that earns the Epistemium's sanction — losing access to its teachers, its specialists, and its accumulated wisdom — finds life considerably harder for its ruling class. This quiet leverage ensures that chapterhouse doors remain open across the island, whatever the local rulers may think of the Ordo lurking behind them.

## Relations

Aelwyth's closest ties are with [[doc-elavendre|Élavendre]] on the nearby mainland. Dúnavarre's southeastern harbors maintain trading relationships across the [[doc-vylarianse|Vylarian Sea]]. The Normen of Stormveld maintain connections to [[doc-kngdmnrdhm|Kingdom of Nordheim]]. Tarvenne has cultivated diplomatic channels with the [[doc-vylarinmpr|Vylarian Empire]].

## See Also

- [[doc-elavendre|Élavendre]] — Nearest mainland region
- [[doc-kngdmnrdhm|Kingdom of Nordheim]] — Source of northern settlers
- [[affiliation-arldnpnthn|Aurèldían]] — Dominant pantheon
- [[affiliation-asguardian|Asguardian Pantheon]] — Northern pantheon influence
- [[doc-flksinale|Sinalë]] — Elder race with southern forest enclaves
- [[doc-flkkhazar|Khazári]] — Elder race with northeastern mountain holds
