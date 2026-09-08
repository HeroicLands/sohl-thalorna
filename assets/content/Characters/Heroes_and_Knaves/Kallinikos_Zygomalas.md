---
tags:
  - heroes-and-knaves
  - tradesfolk
name:
  full: Kallínikos Zygomálas
  title: ""
  given: Kallínikos
  clan: Zygomálas
  home: yesilhan2
  aliases: []
packFolder: helladbyzaria
shortcode: klnkszygmls
img: images/beings/characters/klnkszygmls-portrait.webp
type: being
data:
  portrait: images/being/klnkszygmls-portrait.webp
  templatePriority: null
  archetypes: []
  occupation: Cartographer/Artist
  stations: []
  lore:
    - commonerrnk
  homes:
    - byzariargn
  affiliations:
    - byzarianlg
  gender: male
  species: null
  age: 39
  birthday: 681/3/27
  height: 1.75
  weight: 70.8
  frame: medium
  appearance:
    eye_color: warm_brown
    hair_color: dark_brown
    skin_color: warm
    complexion: tanned
    extra_features:
      - a scar on the left thigh
sohl:
  templatePriority: null
  items:
    - { shortcode: str, type: attribute, system: { scoreBase: 11 } }
    - { shortcode: end, type: attribute, system: { scoreBase: 12 } }
    - { shortcode: dex, type: attribute, system: { scoreBase: 13 } }
    - { shortcode: agl, type: attribute, system: { scoreBase: 14 } }
    - { shortcode: per, type: attribute, system: { scoreBase: 15 } }
    - { shortcode: cml, type: attribute, system: { scoreBase: 13 } }
    - { shortcode: aur, type: attribute, system: { scoreBase: 12 } }
    - { shortcode: wil, type: attribute, system: { scoreBase: 14 } }
    - { shortcode: rea, type: attribute, system: { scoreBase: 15 } }
    - { shortcode: cre, type: attribute, system: { scoreBase: 16 } }
    - { shortcode: emp, type: attribute, system: { scoreBase: 12 } }
    - { shortcode: elo, type: attribute, system: { scoreBase: 14 } }
    - { shortcode: mor, type: attribute, system: { scoreBase: 13 } }
    - { shortcode: voi, type: attribute, system: { scoreBase: 14 } }
    - { shortcode: florania, type: affiliation }
    - { shortcode: brew, type: skill, system: { masteryLevelBase: 45 } }
    - { shortcode: cook, type: skill, system: { masteryLevelBase: 30 } }
    - { shortcode: folklr, type: skill, system: { masteryLevelBase: 60 } }
    - { shortcode: hrld, type: skill, system: { masteryLevelBase: 30 } }
    - { shortcode: math, type: skill, system: { masteryLevelBase: 60 } }
    - { shortcode: pysn, type: skill, system: { masteryLevelBase: 15 } }
    - { shortcode: helnkscrpt, type: skill, system: { masteryLevelBase: 75 } }
    - { shortcode: chrm, type: skill, system: { masteryLevelBase: 39 } }
    - { shortcode: cmd, type: skill, system: { masteryLevelBase: 28 } }
    - { shortcode: dscr, type: skill, system: { masteryLevelBase: 30 } }
    - { shortcode: guil, type: skill, system: { masteryLevelBase: 42 } }
    - { shortcode: intr, type: skill, system: { masteryLevelBase: 39 } }
    - { shortcode: sing, type: skill, system: { masteryLevelBase: 45 } }
    - { shortcode: thtcs, type: skill, system: { masteryLevelBase: 15 } }
    - { shortcode: mnrl, type: skill, system: { masteryLevelBase: 30 } }
    - { shortcode: srvl, type: skill, system: { masteryLevelBase: 14 } }
    - { shortcode: awar, type: skill, system: { masteryLevelBase: 60 } }
    - { shortcode: clmb, type: skill, system: { masteryLevelBase: 42 } }
    - { shortcode: dnce, type: skill, system: { masteryLevelBase: 30 } }
    - { shortcode: jump, type: skill, system: { masteryLevelBase: 39 } }
    - { shortcode: ridg, type: skill, system: { masteryLevelBase: 13 } }
    - { shortcode: stlth, type: skill, system: { masteryLevelBase: 56 } }
    - { shortcode: swim, type: skill, system: { masteryLevelBase: 13 } }
    - { shortcode: archery, type: skill, system: { masteryLevelBase: 14 } }
    - { shortcode: init, type: skill, system: { masteryLevelBase: 42 } }
    - { shortcode: melee, type: skill, system: { masteryLevelBase: 26 } }
    - { shortcode: thro, type: skill, system: { masteryLevelBase: 42 } }
    - { shortcode: draw, type: skill, system: { masteryLevelBase: 70 } }
    - { shortcode: hide, type: skill, system: { masteryLevelBase: 56 } }
    - { shortcode: txtl, type: skill, system: { masteryLevelBase: 14 } }
    - { shortcode: wood, type: skill, system: { masteryLevelBase: 24 } }
    - { shortcode: Stf, type: weapongear }
    - { shortcode: Dgr, type: weapongear }
    - { shortcode: PSht, type: armorgear }
    - { shortcode: WTrsr, type: armorgear }
    - { shortcode: LtKBoot, type: armorgear }
    - { shortcode: tndrbx, type: miscgear }
    - { shortcode: torch, type: miscgear, system: { quantity: 3 } }
    - { shortcode: StdRtns, type: miscgear, system: { quantity: 4 } }
    - name: Waterproof map case (leather-bound)
      type: miscgear
      system:
        weight: 0.8
        value: 100
        durability: 3
    - name: Surveying tools (compass, quadrant, measuring chains)
      type: miscgear
      system:
        weight: 2
        value: 100
        durability: 3
    - name: Magnifying glass for detailed work
      type: miscgear
      system:
        weight: 1
        value: 100
        durability: 3
    - name: Brass compass (precision navigational)
      type: miscgear
      system:
        value: 8
        weight: 1
        durability: 3
    - name: Ink bottles and drawing implements
      type: miscgear
      system:
        weight: 0.5
        value: 100
        durability: 3
    - name: Parchment and paper (sketching stock)
      type: miscgear
      system:
        weight: 1
        value: 100
        durability: 3
    - { shortcode: backpk, type: containergear }
    - { shortcode: wtrskin, type: containergear }
  system:
    body:
      structure:
        zones:
          - name: Head
            shortcode: headzone
            probWeight: 1
          - name: Arms
            shortcode: armszone
            probWeight: 4
          - name: Torso
            shortcode: torsozone
            probWeight: 4
          - name: Legs
            shortcode: legszone
            probWeight: 6
        parts:
          - name: Head
            shortcode: headpart
            bodyZoneCode: headzone
            roles:
              - vital
            canHoldItem: false
            probWeight: 1
          - name: Right Arm
            shortcode: rarmpart
            bodyZoneCode: armszone
            roles:
              - manipulator
            canHoldItem: true
            probWeight: 2
          - name: Left Arm
            shortcode: larmpart
            bodyZoneCode: armszone
            roles:
              - manipulator
            canHoldItem: true
            probWeight: 2
          - name: Torso
            shortcode: torsopart
            bodyZoneCode: torsozone
            roles:
              - core
            canHoldItem: false
            probWeight: 4
          - name: Right Leg
            shortcode: rlegpart
            bodyZoneCode: legszone
            roles:
              - locomotor
            canHoldItem: false
            probWeight: 3
          - name: Left Leg
            shortcode: llegpart
            bodyZoneCode: legszone
            roles:
              - locomotor
            canHoldItem: false
            probWeight: 3
        locations:
          - name: Skull
            shortcode: skullloc
            bodyPartCode: headpart
            bleedingSusceptibility: low
            amputability: none
            shockValue: 5
            probWeight: 500
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Left Eye
            shortcode: leyeloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 15
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Right Eye
            shortcode: reyeloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 15
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Nose
            shortcode: noseloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 30
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Left Cheek
            shortcode: lcheekloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 60
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Right Cheek
            shortcode: rcheekloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 60
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Left Ear
            shortcode: learloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 15
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Right Ear
            shortcode: rearloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 15
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Mouth
            shortcode: mouthloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 30
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Jaw
            shortcode: jawloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 60
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 200
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Right Shoulder
            shortcode: rshldloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 30
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Right Upper Arm
            shortcode: rupaloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Right Elbow
            shortcode: relbloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Right Forearm
            shortcode: rfraloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 20
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Right Hand
            shortcode: rhandloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 10
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Left Shoulder
            shortcode: lshldloc
            bodyPartCode: larmpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 30
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Left Upper Arm
            shortcode: lupaloc
            bodyPartCode: larmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Left Elbow
            shortcode: lelbloc
            bodyPartCode: larmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Left Forearm
            shortcode: lfraloc
            bodyPartCode: larmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 20
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Left Hand
            shortcode: lhandloc
            bodyPartCode: larmpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 10
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Thorax
            shortcode: thrxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 40
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Abdomen
            shortcode: abdmnloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 40
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Pelvis
            shortcode: plvisloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 20
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Right Thigh
            shortcode: rthghloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: medium
            amputability: low
            shockValue: 3
            probWeight: 40
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Right Knee
            shortcode: rkneeloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Right Calf
            shortcode: rcalfloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Right Foot
            shortcode: rfootloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: none
            amputability: medium
            shockValue: 2
            probWeight: 20
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Left Thigh
            shortcode: lthghloc
            bodyPartCode: llegpart
            bleedingSusceptibility: medium
            amputability: low
            shockValue: 3
            probWeight: 40
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Left Knee
            shortcode: lkneeloc
            bodyPartCode: llegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Left Calf
            shortcode: lcalfloc
            bodyPartCode: llegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Left Foot
            shortcode: lfootloc
            bodyPartCode: llegpart
            bleedingSusceptibility: none
            amputability: medium
            shockValue: 2
            probWeight: 20
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
      weight:
        base: null
        calc: "(9 * str) + 50"
      reachBase: 0
      bodyScaleBase: 1
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 50
        leaguesPerWatch: 5
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        disabled: false
    defaultCombatGroup: null
---

# Appearance {#appearance}

Kallínikos stands 5'9" tall with a medium build. He has warm tanned skin, dark brown hair, and warm brown eyes. His features include an oval face, a strong nose, an angular jawline, an expressive mouth, dark brows, prominent cheeks. A distinguishing mark is a scar on the left thigh.

# Dossier {#dossier}

Born into the Zygomálas family of minor nobility within the Byzarian League, Kallínikos was trained in the traditional scholarly arts—mathematics, heraldry, classical texts. He showed early aptitude for drawing, and his family eventually allowed him to apprentice with the renowned cartographer **Master Soren** rather than forcing him into administrative service. Under Soren's tutelage, he mastered both the technical precision required of military and merchant cartography and the artistic rendering that transforms maps into objects of beauty.

By his early thirties, Kallínikos had established himself as the League's finest cartographer, creating detailed maps commissioned by traders and military commanders. But charts of known territories no longer satisfied him. At thirty-five, he began funding his own expeditions into unmapped regions, often at significant personal expense. Each expedition brought him closer to the edges of the known world—and closer to genuine danger. The thigh scar came during an expedition to the Shadowpeak Mountains five years ago, when he was ambushed by something that should not exist according to any of his sources.

Now at thirty-nine, Kallínikos is something of a legend—part explorer, part artist, part reckless adventurer. He maintains a workshop in the Byzarian capital but spends at least a third of each year on expedition, mapping uncharted lands and returning with stories as intriguing as his maps.

## Psyche

### Personality

Kallínikos is a man of genuine charm and infectious enthusiasm. In social settings, he is witty and engaging, his mind making unexpected connections between seemingly disparate subjects. He speaks eloquently about art, geography, history, and philosophy, and his passion for discovery is genuinely compelling. He cultivates relationships carefully, understanding that patronage and partnerships depend on goodwill.

However, beneath this polished exterior lies something more driven and potentially reckless. In the field, away from civilized society, he becomes almost feral in his focus—pushing beyond prudent limits, taking risks that seasoned explorers would consider suicidal. There is something almost compulsive about his need to see what lies beyond the next ridge, to chart what others have not. His colleagues sometimes wonder if he is seeking something specific rather than merely exploration for its own sake.

### Motivation

Kallínikos is driven by the deep human desire to know, to map the unmapped, to leave a legacy of discovery and artistic beauty. On the surface, he seeks to expand the League's knowledge and influence, to create maps so beautiful and comprehensive that they become treasured objects in their own right. Beneath this lies something darker—a conviction that something important awaits discovery on the edges of the known world, something that might change everything. He cannot articulate what he seeks, but he knows with absolute certainty that he will recognize it when he finds it.

### Strengths

- **Master Cartographer**: His Script, Drawing, and Mathematical skills all exceed 15, making him capable of creating maps of unprecedented accuracy and detail.
- **Artistic Vision**: With Creativity at 16, he sees maps not merely as functional documents but as works of art, which drives demand for his commissions among wealthy collectors.
- **Seasoned Explorer**: His high Survival, Awareness, and Stealth scores, combined with practical experience, make him one of the safest people to have on expedition—when he is being cautious, which is not always.
- **Persuasive Communicator**: His Eloquence and Command scores of 14 allow him to secure funding, gather followers, and talk his way out of dangerous situations.
- **Well-Rounded Outdoor Skills**: His Climbing, Riding, and Swimming scores are all solid, and his practical knowledge of dozens of environments is extensive.

### Weaknesses

- **Reckless Adventurer**: His drive to explore often overrides prudent judgment. He will venture into clearly dangerous territory against the advice of companions, sometimes with tragic consequences.
- **Obsessive Tendencies**: Once fixated on a particular expedition or mystery, he becomes nearly impossible to dissuade from pursuing it, sometimes abandoning commissioned work.
- **Poor Physical Durability**: His Endurance score of only 12 means extended hardship can break him down; he is surprisingly vulnerable despite his toughness of spirit.
- **Limited Combat Training**: Though he can handle himself adequately, his Melee score of 13 is underwhelming, leaving him dependent on companions in true combat situations.
- **Divided Loyalties**: His commitment to exploration sometimes conflicts with his commercial obligations, making him an unreliable partner when expeditions take longer than anticipated.

## Social

### Patrons

- **The Royal Cartographers' Society**: Official patron organization that grants him access to resources, archive materials, and occasionally funding for expeditions of strategic importance.
- **Lord Commander Hieronymus**: A military leader who has commissioned numerous military maps and occasionally funds expeditions specifically to gather information on potential threats or expansion opportunities.
- **Lady Investress Calyndra**: A wealthy collector of fine maps and geographical art who has become increasingly invested in funding his expeditions, ostensibly for the beauty of his work.

### Enemies

- **The Orthodox Cartographers' Alliance**: Conservative practitioners who view Kallínikos's artistic approach as compromising precision and his expeditions as wasteful spending on unnecessary discovery.
- **The Faceless Warden**: An entity or individual Kallínikos encountered during his Shadowpeak expedition, something that clearly does not want him—or anyone—mapping the deep mountain regions. They have tried multiple times to kill him.

### Affiliations

- **The Royal Cartographers' Society**: Official membership providing resources and legitimacy, though his maverick approach creates occasional friction.
- **The Explorers' Fellowship**: An informal network of adventurers and naturalists dedicated to expanding geographical knowledge.

## Plot Hooks

1. **The Disappearing Expedition**: Kallínikos's latest expedition to the western wastes simply vanishes—no contact, no return, no bodies. Three months overdue, sponsors demand answers. When another group sent to investigate reports finds evidence that Kallínikos deliberately eluded them and continued deeper into unmapped territory, the question becomes urgent: did he discover something so important he was willing to fake his expedition's disappearance? Is he alive, dead, or transformed into something else entirely?

2. **Maps That Shouldn't Exist**: Kallínikos discovers in an old archive a collection of extraordinarily detailed maps of regions he has never seen, drawn in a style that predates the current age by centuries. The territories depicted no longer exist—or have been lost to time. Among them is a map of his beloved Shadowpeak Mountains, showing a structure or location marked only as "The Forbidden Archive." He must decide whether to attempt to locate the archive, knowing it may be the source of these mysterious maps and possibly the lair of the entity that attacked him.

3. **Rival Mapmakers**: A wealthy merchant house begins employing expeditions specifically to beat Kallínikos to unexplored territory, creating rival maps they plan to publish simultaneously. What appears as simple commercial rivalry slowly reveals darker elements—the merchants' expeditions are searching for something specific, and they don't care who dies in the process. Kallínikos must either collaborate with his commercial rivals or race against them toward a discovery he doesn't fully understand.

4. **The Princess's Commission**: The heir to the Byzarian throne commissions Kallínikos to create a map of a region explicitly declared forbidden by the ruling council—supposedly to understand what the council is hiding. She claims it is for her education in statecraft, but hints that political factions within the League have compelling reasons to want that territory mapped, reasons that might challenge the current balance of power. Kallínikos must decide whether to serve a princess or maintain his independence.

5. **The Cartographer's Curse**: Kallínikos meets a dying explorer who claims that everyone who has attempted to map beyond certain boundaries is doomed—that something actively prevents the full knowledge of the world's true geography. The explorer bequeaths him a partial map hinting at vast territories that should exist but don't appear on any current charts. Kallínikos must choose whether to pursue this mystery, knowing it may validate a hypothesis about reality itself that most would consider insane.
