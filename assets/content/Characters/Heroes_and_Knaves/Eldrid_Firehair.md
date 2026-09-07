---
tags:
  - heroes-and-knaves
  - hero
  - guilded
  - tradesfolk
name:
  full: Eldrid Firehair
  title: ""
  given: Eldrid
  clan: Hildenbaald
  home: steinmark
  aliases:
    - Firehair
    - the Shipwright's Son
packFolder: ankarisnordlands
shortcode: eldridfrhr
img: icons/person.svg
type: being
data:
  portrait: images/being/eldridfrhr-portrait.webp
  templatePriority: null
  archetypes: []
  occupation: Shipwright
  stations: []
  lore:
    - commonerrnk
  homes:
    - nrdlndsrgn
  affiliations:
    - kingdmnrgd
  gender: male
  species: null
  age: 28
  birthday: 692/4/3
  height: 1.85
  weight: 79.4
  frame: light
  appearance:
    eye_color: blue
    hair_color: red
    skin_color: fair
    complexion: weathered
    extra_features: []
sohl:
  templatePriority: null
  items:
    - { shortcode: str, type: attribute, system: { scoreBase: 13 } }
    - { shortcode: end, type: attribute, system: { scoreBase: 14 } }
    - { shortcode: dex, type: attribute, system: { scoreBase: 14 } }
    - { shortcode: agl, type: attribute, system: { scoreBase: 13 } }
    - { shortcode: per, type: attribute, system: { scoreBase: 13 } }
    - { shortcode: cml, type: attribute, system: { scoreBase: 12 } }
    - { shortcode: aur, type: attribute, system: { scoreBase: 15 } }
    - { shortcode: wil, type: attribute, system: { scoreBase: 15 } }
    - { shortcode: rea, type: attribute, system: { scoreBase: 14 } }
    - { shortcode: cre, type: attribute, system: { scoreBase: 14 } }
    - { shortcode: emp, type: attribute, system: { scoreBase: 12 } }
    - { shortcode: elo, type: attribute, system: { scoreBase: 12 } }
    - { shortcode: mor, type: attribute, system: { scoreBase: 11 } }
    - { shortcode: voi, type: attribute, system: { scoreBase: 8 } }
    - { shortcode: surtr, type: affiliation }
    - { shortcode: cook, type: skill, system: { masteryLevelBase: 26 } }
    - { shortcode: embl, type: skill, system: { masteryLevelBase: 14 } }
    - { shortcode: folklr, type: skill, system: { masteryLevelBase: 14 } }
    - { shortcode: math, type: skill, system: { masteryLevelBase: 42 } }
    - { shortcode: pysn, type: skill, system: { masteryLevelBase: 14 } }
    - { shortcode: thuravarkscript, type: skill, system: { masteryLevelBase: 42 } }
    - { shortcode: shpw, type: skill, system: { masteryLevelBase: 70 } }
    - { shortcode: chrm, type: skill, system: { masteryLevelBase: 36 } }
    - { shortcode: cmd, type: skill, system: { masteryLevelBase: 28 } }
    - { shortcode: dscr, type: skill, system: { masteryLevelBase: 26 } }
    - { shortcode: guil, type: skill, system: { masteryLevelBase: 39 } }
    - { shortcode: intr, type: skill, system: { masteryLevelBase: 39 } }
    - { shortcode: sing, type: skill, system: { masteryLevelBase: 33 } }
    - { shortcode: thtcs, type: skill, system: { masteryLevelBase: 13 } }
    - { shortcode: fish, type: skill, system: { masteryLevelBase: 28 } }
    - { shortcode: smsh, type: skill, system: { masteryLevelBase: 70 } }
    - { shortcode: srvl, type: skill, system: { masteryLevelBase: 15 } }
    - { shortcode: timb, type: skill, system: { masteryLevelBase: 65 } }
    - { shortcode: awar, type: skill, system: { masteryLevelBase: 42 } }
    - { shortcode: clmb, type: skill, system: { masteryLevelBase: 39 } }
    - { shortcode: dnce, type: skill, system: { masteryLevelBase: 26 } }
    - { shortcode: jump, type: skill, system: { masteryLevelBase: 39 } }
    - { shortcode: lgdm, type: skill, system: { masteryLevelBase: 28 } }
    - { shortcode: ridg, type: skill, system: { masteryLevelBase: 24 } }
    - { shortcode: stlth, type: skill, system: { masteryLevelBase: 42 } }
    - { shortcode: swim, type: skill, system: { masteryLevelBase: 13 } }
    - { shortcode: archery, type: skill, system: { masteryLevelBase: 13 } }
    - { shortcode: init, type: skill, system: { masteryLevelBase: 60 } }
    - { shortcode: melee, type: skill, system: { masteryLevelBase: 28 } }
    - { shortcode: thro, type: skill, system: { masteryLevelBase: 28 } }
    - { shortcode: draw, type: skill, system: { masteryLevelBase: 14 } }
    - { shortcode: mtlc, type: skill, system: { masteryLevelBase: 42 } }
    - { shortcode: wood, type: skill, system: { masteryLevelBase: 70 } }
    - { shortcode: HAxe, type: weapongear }
    - { shortcode: HsTunic, type: armorgear }
    - { shortcode: HsBrch, type: armorgear }
    - { shortcode: LtCBoot, type: armorgear }
    - name: Shipwright's leather tool belt
      type: miscgear
      system:
        weight: 1
        value: 100
        durability: 3
    - name: Specialized shipbuilding tools
      type: miscgear
      system:
        weight: 1
        value: 100
        durability: 3
    - name: Measuring scales and marking tools
      type: miscgear
      system:
        weight: 1
        value: 100
        durability: 3
    - name: Rope and cordage
      type: miscgear
      system:
        quantity: 2
        weight: 1
        value: 100
        durability: 3
    - { shortcode: tndrbx, type: miscgear }
    - { shortcode: StdRtns, type: miscgear, system: { quantity: 2 } }
    - { shortcode: torch, type: miscgear, system: { quantity: 2 } }
    - { shortcode: wtrskin, type: containergear }
    - { shortcode: backpk, type: containergear }
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

Stands 6'1" tall with a light build. He has weather-roughened skin, fiery red hair, and blue eyes. His features include an oval face, a straight nose, a prominent chin, a firm-set mouth, prominent brows.

# Dossier {#dossier}

Eldrid is the son of a renowned shipwright family in the port town of Hrólfstead, one of the most vital coastal towns in Norgaad. From a young age, Eldrid was trained in the art of shipbuilding, mastering the craft of creating the sleek and deadly longships that Norgaad is famous for. However, despite his family’s pride in their trade, Eldrid felt a strong pull toward the arcane. As a child, he witnessed a mysterious fire spirit in the shipyard, sparking a lifelong fascination with magic and the spirit world.

Eldrid’s striking red hair and fiery temper earned him the nickname “Firehair,” but it was his latent magical talent—an affinity for fire magic—that truly set him apart. He met [[being-grosdrnrgd|Gróa the Seiðr of Norgaad]] when she sought passage across the fjords, and he was immediately intrigued by her connection to the spirit world. Over time, Eldrid became one of Gróa’s trusted companions, eager to learn more about his mystical inclinations and to explore the deeper mysteries of magic.

## Skills and Abilities

- **Strength**: Physically capable from shipbuilding and combat.
- **Endurance**: Accustomed to hard work and long hours.
- **Dexterity**: Skilled with tools and weapons alike.
- **Agility**: Moves well both on land and at sea.
- **Perception**: Attentive to details, important in crafting and navigation.
- **Comeliness**: Ruggedly handsome with a fiery presence.
- **Aura**: His latent magical abilities enhance his aura.
- **Will**: Strong-willed, driven to understand his powers.
- **Reasoning**: Intelligent and curious, quick to learn.
- **Creativity**: Inventive, both in shipbuilding and exploring magic.
- **Empathy**: Relates well to others despite his fiery temper.
- **Eloquence**: Communicates effectively, though not his primary strength.
- **Morality**: Eldrid follows his culture’s values of craftsmanship and strength but is willing to bend the rules for practical reasons, especially when it comes to survival.
- **Voice**: Eldrid’s voice is rugged, reflecting his life as a shipwright. While his singing isn’t unpleasant, it lacks the smoothness of a trained performer.
- **Shipbuilding and Navigation**: Eldrid is a master shipwright, skilled in constructing and maintaining longships. His deep knowledge of ships and the sea makes him invaluable when traveling across the fjords and open waters of Nordheim.
- **Fire Magic**: Eldrid has a latent talent for fire magic, though he is still learning to control it. Under Gróa’s guidance, he has begun to harness this power, using it in both combat and rituals.
- **Combat Skills**: Though not as battle-hardened as a warrior, Eldrid is capable in a fight, wielding a **short sword** and using his fire magic to enhance his strikes.

## Psyche

### Personality

Eldrid is bold, curious, and quick to action. His fiery temper can lead to rash decisions, but his heart is in the right place. He is deeply fascinated by magic and the unseen world, seeing Gróa as both a mentor and a gateway to unlocking his own potential. Eldrid’s natural curiosity makes him a constant student of the arcane, though his impetuous nature sometimes puts him at odds with Gróa’s more measured approach.

### Strengths

- **Shipbuilding**: Master shipwright and sailor.
- **Fire Magic**: Can sometimes summon and control flames (still learning).
- **Combat**: Skilled with sword and fire-enhanced attacks.

## Social

## Plot Hooks

1. **The Calling of the Flame**: During a village gathering, Eldrid witnesses a strange fire burning in the distance, but when others investigate, no one else sees it. Drawn to its location, he discovers an ancient cairn inscribed with runes that seem familiar. The discovery hints at a connection between his family and a forgotten guardian role tied to the region’s safety, forcing Eldrid to question his future as more than a craftsman.

2. **The Pact of the Drowned**: A local chieftain seeks Eldrid’s help in recovering artifacts from a recently unearthed shipwreck in a nearby fjord. The artifacts, said to belong to an ancient maritime cult, appear harmless at first but soon bring mistrust and fear among the villagers. As tensions rise, Eldrid finds himself caught between returning the items to the fjord or uncovering their true origin—and purpose.

3. **The Stranger with No Shadow**: While traveling with companions, Eldrid encounters a lone wanderer who claims to know the path to a hidden stronghold of lost knowledge. The stranger’s eerie knowledge of Eldrid’s past, and their refusal to cast a shadow, raise suspicions. Yet the promise of understanding his growing sense of destiny pushes Eldrid to follow—though the journey may cost him more than answers.

4. **The Fjord’s Silent Guardian**: Stories surface of travelers disappearing in a remote stretch of Norgaad’s fjords. When Eldrid and his companions pass through the region, they find a series of warning totems carved with unsettling precision. Investigating further reveals an ancient, unseen guardian bound to the fjord, one whose purpose seems tied to Eldrid’s journey—and whose intentions may not be benign.
