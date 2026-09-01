---
aliases:
  - Torvald Greenshield
tags:
  - paragon
  - heroes-of-asguard
name:
  full: Torvald Greenshield
  title: null
  given: Torvald
  clan: null
  aliases:
    - Greenshield
  home: null
id: pTeGY4ZF40gbIFT7
folder: Ka9XqaF27b0I3Gmq
shortcode: trvldgrnshld
img: icons/person.svg
portrait: images/being/trvldgrnshld-portrait.webp
type: being
social:
  occupation: Farmer and Protector
  station: soldiery
  class: freeman
  society: Nordheimn
traits:
  gender: male
  age: 43
  birthday: 677/3/7
  height:
    m: 1.84
  weight:
    kg: 87
  build:
    frame: heavy
  appearance:
    eye_color: gray
    hair_color: brown
    skin_color: fair
    complexion: ruddy
    extra_features: []
sohl:
  archetype: null
  items:
    - { shortcode: str, type: attribute, system: { scoreBase: 14 } }
    - { shortcode: end, type: attribute, system: { scoreBase: 15 } }
    - { shortcode: dex, type: attribute, system: { scoreBase: 11 } }
    - { shortcode: agl, type: attribute, system: { scoreBase: 12 } }
    - { shortcode: per, type: attribute, system: { scoreBase: 15 } }
    - { shortcode: cml, type: attribute, system: { scoreBase: 12 } }
    - { shortcode: aur, type: attribute, system: { scoreBase: 14 } }
    - { shortcode: wil, type: attribute, system: { scoreBase: 14 } }
    - { shortcode: rea, type: attribute, system: { scoreBase: 12 } }
    - { shortcode: cre, type: attribute, system: { scoreBase: 11 } }
    - { shortcode: emp, type: attribute, system: { scoreBase: 16 } }
    - { shortcode: elo, type: attribute, system: { scoreBase: 13 } }
    - { shortcode: mor, type: attribute, system: { scoreBase: 16 } }
    - { shortcode: voi, type: attribute, system: { scoreBase: 13 } }
    - { shortcode: freyr, type: affiliation }
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
      base: 192
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
thalorna:
  realm: kngdmnrdhm
  region: nrdlndsrgn
harnworld:
  realm: Orbaal
  ritual: []
---

# Appearance {#appearance}

Torvald stands 6'0" with a heavy, broad-shouldered frame, weighing about 210 pounds. His fair skin is deeply tanned from a lifetime working outdoors in all seasons, and his brown hair is thick and unruly, kept back with a simple leather cord. His green eyes are warm and steady, crinkling at the corners when he smiles, which is often. His features are broad and open, with a wide face, a blunt nose, full lips, and heavy brows above honest, uncomplicated eyes. Earth is always under his fingernails and worked into the creases of his weathered hands. Torvald wears practical farmer's clothing — a heavy linen tunic, leather breeches, and sturdy boots — with a green-painted wooden shield slung across his back and a worn oak staff in hand. Sprigs of fresh herbs are tucked into his belt, and the scent of turned earth follows him wherever he goes.

# Dossier {#dossier}

Torvald was born into a family of farmers who lived in harmony with the land. From an early age, he showed an innate connection to nature, able to coax life from even the most barren soil. As he grew, he became known as Greenshield, a protector of the fields and forests, ensuring that the land remained fertile and that his people prospered. Torvald's dedication to Fréyr, the god of fertility, agriculture, peace, and healing, was evident in all he did. He became a leader in his community, teaching others to respect the earth and to live in harmony with it.

The saga of Torvald Greenshield tells of his battle against a terrible drought that threatened to starve his people. For months, no rain fell, and the crops withered. Torvald journeyed deep into the ancient forest to find the Heart of the Wild, a sacred grove where Fréyr himself had once walked. He found the grove guarded by a fearsome beast — a manifestation of the drought's anger. Unarmed, Torvald faced the beast with nothing but his faith in Fréyr, calming its rage with words of peace. In a final act of devotion, Torvald offered his own life in exchange for the return of the rains. Moved by his selflessness, Fréyr granted him the power to heal the land without sacrifice.

## Psyche

### Personality

Torvald is warm, patient, and deeply connected to the rhythms of the natural world. He speaks with the measured cadence of a man who has spent years observing the slow growth of crops and the patient turning of seasons. He is generous to a fault, often giving away more than he can afford to those in need. He avoids violence whenever possible but will fight with surprising ferocity when the land or its people are threatened. He has a deep, booming laugh and a talent for putting anxious people at ease.

### Motivation

Torvald seeks to ensure that the balance between humanity and nature is maintained, believing that the northern peoples have grown too focused on war and conquest and have forgotten their duty to the land that sustains them. He dreams of establishing a network of sacred groves throughout the north where Fréyr's blessings can protect the harvests and heal the wounded earth.

### Strengths

Torvald's connection to the earth gives him an intuitive understanding of agriculture, weather patterns, and natural cycles that borders on the supernatural. He can sense blight, drought, and corruption in the land and knows how to address each. His willingness to sacrifice himself for others inspires fierce loyalty in those who know him. In combat, he fights with a staff and shield, using a defensive style that channels the patience and endurance of the earth itself.

## Social

## Companions

### Patrons

**The Grove-Keepers of Fréyr** — A network of priests and druids who tend sacred groves throughout the northern lands. They recognize Torvald's special connection to Fréyr and provide him with knowledge, supplies, and ritual support.

**Jarl Astrid of Greenhollow** — A wise ruler who values Torvald's counsel on agricultural matters and has given him authority over the management of her lands' harvests.

### Enemies

**The Ash Reavers** — Raiders who practice scorched earth tactics, burning fields and salting the land as they go. Torvald has sworn to stop them.

**Brynhildr Ashenmaiden** — Though Brynhildr serves Súrtr with nobler intentions than most, her belief in purifying fire is antithetical to Torvald's dedication to growth and nurture. Their philosophical conflict has led to tense confrontations.

## Plot Hooks

1. **The Dying Grove** — One of Fréyr's sacred groves is withering for no apparent reason. Torvald must discover the source of the corruption before it spreads to the surrounding farmland.

2. **The Harvest War** — Two settlements are fighting over a disputed tract of fertile land. Both claim Fréyr's blessing, and both are willing to kill to keep it. Torvald must find a way to resolve the dispute peacefully or choose a side.

3. **The Seed of Life** — Torvald has learned of a legendary seed said to have been planted by Fréyr himself, capable of restoring life to any dead land. It is hidden in a place of great danger, and many forces seek it for their own purposes.
