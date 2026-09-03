---
aliases:
  - Mörkvidr the Deathmage
  - Morkvidr the Deathmage
tags:
  - demigod
  - heroes-of-asguard
  - unguilded
  - mages
name:
  full: Mörkvidr the Deathmage
  title: null
  given: Mörkvidr
  clan: null
  aliases:
    - the Deathmage
  home: null
id: nuBxrco7vFWAzASM
folder: Ka9XqaF27b0I3Gmq
shortcode: mrkvdrdthmg
img: icons/person.svg
type: being
data:
  portrait: images/being/mrkvdrdthmg-portrait.webp
  templatePriority: null
  archetypes: []
  occupation: Necromancer
  stations: []
  lore:
    - nordheimnclt
    - commonerrnk
  homes:
    - nrdlndsrgn
  affiliations:
    - kngdmnrdhm
  gender: male
  species: null
  age: 67
  birthday: 653/7/6
  height: 1.84
  weight: 76
  frame: medium
  appearance:
    eye_color: black
    hair_color: black
    skin_color: pale
    complexion: sallow
    extra_features: []
sohl:
  archetype: null
  items:
    - { shortcode: str, type: attribute, system: { scoreBase: 12 } }
    - { shortcode: end, type: attribute, system: { scoreBase: 14 } }
    - { shortcode: dex, type: attribute, system: { scoreBase: 12 } }
    - { shortcode: agl, type: attribute, system: { scoreBase: 10 } }
    - { shortcode: per, type: attribute, system: { scoreBase: 15 } }
    - { shortcode: cml, type: attribute, system: { scoreBase: 5 } }
    - { shortcode: aur, type: attribute, system: { scoreBase: 19 } }
    - { shortcode: wil, type: attribute, system: { scoreBase: 18 } }
    - { shortcode: rea, type: attribute, system: { scoreBase: 17 } }
    - { shortcode: cre, type: attribute, system: { scoreBase: 16 } }
    - { shortcode: emp, type: attribute, system: { scoreBase: 3 } }
    - { shortcode: elo, type: attribute, system: { scoreBase: 14 } }
    - { shortcode: mor, type: attribute, system: { scoreBase: 2 } }
    - { shortcode: voi, type: attribute, system: { scoreBase: 13 } }
    - { shortcode: hel, type: affiliation }
  body:
    structure:
      parts:
        - name: Head
          shortcode: headpart
          roles:
            - vital
          canHoldItem: false
          combatArea: 1
          locations:
            - name: Skull
              shortcode: skullloc
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
              bleedingSusceptibility: high
              amputability: low
              shockValue: 5
              probWeight: 200
              protectionBase:
                blunt: 0
                edged: 0
                piercing: 0
                fire: 0
        - name: Right Arm
          shortcode: rarmpart
          roles:
            - manipulator
          canHoldItem: true
          combatArea: 2
          locations:
            - name: Right Shoulder
              shortcode: rshldloc
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
              bleedingSusceptibility: none
              amputability: high
              shockValue: 2
              probWeight: 10
              protectionBase:
                blunt: 0
                edged: 0
                piercing: 0
                fire: 0
        - name: Left Arm
          shortcode: larmpart
          roles:
            - manipulator
          canHoldItem: true
          combatArea: 2
          locations:
            - name: Left Shoulder
              shortcode: lshldloc
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
              bleedingSusceptibility: none
              amputability: high
              shockValue: 2
              probWeight: 10
              protectionBase:
                blunt: 0
                edged: 0
                piercing: 0
                fire: 0
        - name: Torso
          shortcode: torsopart
          roles:
            - core
          canHoldItem: false
          combatArea: 4
          locations:
            - name: Thorax
              shortcode: thrxloc
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
              bleedingSusceptibility: medium
              amputability: none
              shockValue: 4
              probWeight: 20
              protectionBase:
                blunt: 0
                edged: 0
                piercing: 0
                fire: 0
        - name: Right Leg
          shortcode: rlegpart
          roles:
            - locomotor
          canHoldItem: false
          combatArea: 3
          locations:
            - name: Right Thigh
              shortcode: rthghloc
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
              bleedingSusceptibility: none
              amputability: medium
              shockValue: 2
              probWeight: 20
              protectionBase:
                blunt: 0
                edged: 0
                piercing: 0
                fire: 0
        - name: Left Leg
          shortcode: llegpart
          roles:
            - locomotor
          canHoldItem: false
          combatArea: 3
          locations:
            - name: Left Thigh
              shortcode: lthghloc
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
              bleedingSusceptibility: none
              amputability: medium
              shockValue: 2
              probWeight: 20
              protectionBase:
                blunt: 0
                edged: 0
                piercing: 0
                fire: 0
      adjacent:
        - - headpart
          - torsopart
        - - headpart
          - rarmpart
        - - headpart
          - larmpart
        - - torsopart
          - rarmpart
        - - torsopart
          - larmpart
        - - torsopart
          - rlegpart
        - - torsopart
          - llegpart
        - - llegpart
          - rlegpart
    weight:
      base: 168
      calc: (9 * str) + 50
    reachBase: 0
    bodyScaleBase: 1.0
    personalFatigue: enc + 5
  currentMoveMedium: terrestrial
  movementProfiles:
    - medium: terrestrial
      feetPerRound: 50
      leaguesPerWatch: 5
      encumbrance: floor(wt/4)
      strMod: -5 * floor((str - 10) / 2)
      disabled: false
  defaultCombatGroup: null
---

# Appearance {#appearance}

Mörkvidr stands 5'10" with a gaunt, wasted frame that belies the terrible power coiled within. In undeath, his pale skin has become translucent, showing the dark veins that web beneath like cracks in old parchment. His black hair hangs lank and lifeless past his shoulders, and his black eyes are fathomless voids that seem to absorb the light around them. His features are sharp and cadaverous — sunken cheeks, a thin hooked nose, bloodless lips drawn tight over teeth, and brows like slashes of charcoal. A chill emanates from his presence that no cloak can ward against, and plants wilt visibly when he passes. Mörkvidr wears robes of black and deep violet, trimmed with silver thread that traces necromantic sigils. The corrupted Heart of Judgment hangs from a chain at his chest, pulsing with a sickly light. His hands, once a scholar's, are now tipped with nails grown long and dark as talons.

# Dossier {#dossier}

Mörkvidr was once a powerful and malevolent human sorcerer dedicated to Hél, feared across the lands for his mastery of dark magic. Obsessed with the secrets of death, he delved into forbidden rituals, sacrificing countless innocents in his quest for power. His cruelty knew no bounds, and his name became synonymous with terror. Mörkvidr's ultimate goal was to transcend mortality itself. Hél offered him a chance to become one of her favored servants — a Nightwight — in return for his immortal soul. Mörkvidr eagerly accepted, embracing his new existence as a Helspawn sorcerer with even greater powers.

The most infamous saga of Mörkvidr the Deathmage recounts his assault on a grand temple of Týr. Hél, desiring to undermine Týr's influence, tasked Mörkvidr with retrieving the Heart of Judgment, a relic said to discern and destroy evil. Mörkvidr created an army of Hélthralls — mindless Helspawn soldiers — and descended upon the temple under cover of night. The priests of Týr fought valiantly but were no match for Mörkvidr's necromantic powers. He confronted the High Priest, bound him in chains of shadow, desecrated the Heart of Judgment, and made the High Priest into the lowest of his Hélthralls, leaving the temple in ruins.

## Psyche

### Personality

Mörkvidr is cold, calculating, and utterly without remorse. He views living beings as raw materials and dead ones as tools, and this utilitarian cruelty extends to his own followers, whom he considers expendable. He is intellectually brilliant and takes genuine pleasure in the elegance of a well-executed plan, though his definition of elegance includes acts of staggering cruelty. The one vestige of his former humanity is a fascination with beautiful objects — he collects art, jewelry, and fine craftsmanship, perhaps the last echo of the man he once was.

### Motivation

Mörkvidr seeks complete dominion over death itself, answering to no one — not even Hél. His service to the goddess is a means to an end; he gathers power and knowledge with the ultimate goal of transcending even undeath and becoming something entirely new. He is driven by a bottomless hunger for power and the conviction that mortality was a prison he has escaped only partially.

### Strengths

Mörkvidr's necromantic powers are staggering: he can raise armies of the dead, bind spirits, drain life force, and project devastating shadow magic. As a Nightwight, he is immune to most physical attacks and conventional weapons. His intellect and centuries of accumulated knowledge make him a terrifyingly effective strategist. The Heart of Judgment, though corrupted, still retains some of its original power, which Mörkvidr has bent to his own purposes.

## Social

## Companions

### Patrons

**Hél herself** — The goddess of the underworld considers Mörkvidr her most effective mortal agent, though she is well aware of his ambitions. She provides him with dark power and commands while keeping a watchful eye on his loyalty.

**The Nightwight Council** — A cabal of Helspawn lords who serve Hél and recognize Mörkvidr as their most powerful member. They provide him with Helspawn servants and intelligence.

### Enemies

**The Temple of Týr** — The entire faith of Týr has sworn to destroy Mörkvidr for the desecration of their temple. Their finest warriors and most powerful blessings are dedicated to this purpose.

**The Sinalë of Laurelossë** — The Sinalë whose sanctuary was later devastated by Gríma under Mörkvidr's indirect influence seek to eliminate all of Hél's champions.

**Sigvarðr One-Hand** — The champion of Týr views Mörkvidr as his ultimate quarry and has sworn a personal oath to bring the necromancer to justice.

## Plot Hooks

1. **The Dark Resurrection** — Mörkvidr is attempting to raise an ancient dragon from death to serve as his ultimate weapon. The ritual requires components scattered across the northern lands, and agents of Týr race to destroy them before Mörkvidr can collect them all.

2. **The Heart of Judgment** — The corrupted relic still contains a spark of its original divine power. A vision suggests that if it can be reclaimed and purified, it could be the key to destroying Mörkvidr permanently.

3. **Nightwight Civil War** — Mörkvidr's ambition has drawn the suspicion of other Nightwight lords, who fear he plans to usurp Hél's authority. A power struggle among the Helspawn could be exploited — or could make things far worse.
