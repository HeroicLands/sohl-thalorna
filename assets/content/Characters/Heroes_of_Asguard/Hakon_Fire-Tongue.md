---
aliases:
  - Hakon Fire-Tongue
tags:
  - hero
  - heroes-of-asguard
name:
  full: Hakon Fire-Tongue
  title: null
  given: Hakon
  clan: null
  aliases:
    - Fire-Tongue
  home: null
id: 30golrnmNsRWhWcH
folder: Ka9XqaF27b0I3Gmq
shortcode: hakonfrtng
img: icons/person.svg
portrait: images/being/hakonfrtng-portrait.webp
type: being
social:
  occupation: Agitator and Orator
  station: underworld
  class: freeman
  society: Nordheimn
traits:
  gender: male
  age: 36
  birthday: 684/9/1
  height:
    m: 1.83
  weight:
    kg: 81
  build:
    frame: medium
  appearance:
    eye_color: blue
    hair_color: white
    skin_color: pale
    complexion: sun_kissed
    extra_features: []
sohl:
  archetype: null
  items:
    - { shortcode: str, type: attribute, system: { scoreBase: 11 } }
    - { shortcode: end, type: attribute, system: { scoreBase: 12 } }
    - { shortcode: dex, type: attribute, system: { scoreBase: 11 } }
    - { shortcode: agl, type: attribute, system: { scoreBase: 12 } }
    - { shortcode: per, type: attribute, system: { scoreBase: 14 } }
    - { shortcode: cml, type: attribute, system: { scoreBase: 13 } }
    - { shortcode: aur, type: attribute, system: { scoreBase: 12 } }
    - { shortcode: wil, type: attribute, system: { scoreBase: 14 } }
    - { shortcode: rea, type: attribute, system: { scoreBase: 15 } }
    - { shortcode: cre, type: attribute, system: { scoreBase: 16 } }
    - { shortcode: emp, type: attribute, system: { scoreBase: 13 } }
    - { shortcode: elo, type: attribute, system: { scoreBase: 18 } }
    - { shortcode: mor, type: attribute, system: { scoreBase: 8 } }
    - { shortcode: voi, type: attribute, system: { scoreBase: 17 } }
    - { shortcode: loki, type: affiliation }
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
      base: 179
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

Hakon stands 5'10" with a medium, energetic frame, weighing about 175 pounds. His fair skin is ruddy with health and frequent gesticulation, and his brown hair is worn in a fashionable style that he adjusts to match whatever audience he is playing to. His green eyes are bright and restless, sparking with the manic energy of a man who cannot stop thinking or talking. His features are mobile and expressive — a face built for performance, with an angular jaw, a sharp nose, an animated mouth, and brows that leap and furrow with every shift in his rhetoric. His most striking feature is his voice — rich, resonant, and capable of carrying across a crowded hall or dropping to an intimate whisper that draws listeners close. Hakon dresses well but not extravagantly, favoring traveling bard's garb that allows him to blend in at any social level. He carries a small hand drum and a sheaf of broadsheets tucked into his belt — the tools of his particular brand of chaos.

# Dossier {#dossier}

Hakon was born with a gift for words, a natural storyteller and orator whose speeches could rally the disheartened and inspire the downtrodden. But his talent for persuasion came with a darker side — he was just as adept at stirring up trouble and inciting chaos with his words. Hakon quickly realized that he could use his gift to manipulate those around him, turning friends against one another and causing unrest wherever he went. Under Lôki's guidance, Hakon embraced his role as a provocateur, using his fiery words to disrupt order and bring about change through chaos.

The saga of Hakon Fire-Tongue tells of how he brought the city of Skogholt to its knees with nothing but his voice. Skogholt was known for its strict laws and rigid social order. Hakon entered the city disguised as a traveling bard and began telling stories that questioned the city's laws, mocking the rulers and encouraging the people to think for themselves. As his influence grew, the people began to rebel, and soon the city was engulfed in riots. When the rulers realized what had happened, it was too late — Hakon had already moved on, leaving the city in ruins.

## Psyche

### Personality

Hakon is charismatic and provocative, a man who genuinely believes that the existing social order is rotten and that chaos is the necessary first step toward something better. He is witty, passionate, and dangerously persuasive, with an ability to articulate the grievances that ordinary people feel but cannot express. He is also deeply irresponsible, rarely staying to see the consequences of the revolutions he sparks. He tells himself this is because his work is to light the fire, not tend it, but the truth is that he fears what he would see if he looked back.

### Motivation

Hakon believes that rigid social structures are prisons that benefit only those at the top, and that the common people deserve the freedom to shape their own destiny. He uses Lôki's gifts to tear down oppressive systems, genuinely believing that what rises from the ashes will be better. His deeper motivation is a need to matter — to prove that words alone can change the world and that the pen (or tongue) truly is mightier than the sword.

### Strengths

Hakon's oratory is supernaturally persuasive; his words can stir emotions, change minds, and incite crowds to action. He is a master of rhetoric who can argue any position convincingly and identify the fault lines in any society. His ability to disguise himself and blend in allows him to operate in hostile environments with ease. His network of sympathizers and agents in various cities gives him intelligence about political conditions and potential targets for revolution.

## Social

## Companions

### Patrons

**The Free Speakers** — A loose network of revolutionary thinkers who share Hakon's belief that the current social order must be torn down. They provide him with safe houses, intelligence, and financial support.

**Lôki** — The god of chaos finds Hakon's work endlessly amusing and provides subtle supernatural assistance, ensuring that his words carry extra weight and that he always escapes just in time.

### Enemies

**The Rulers of Skogholt** — The city's governing council has placed the largest bounty in northern history on Hakon's head, dead or alive.

**The Order of Stability** — A secretive organization dedicated to maintaining the existing social order. They view Hakon as one of the most dangerous individuals in the north and employ agents specifically tasked with silencing him.

**Eiríkr Lawgiver** — The champion of law sees Hakon's work as destructive anarchy that leaves ordinary people worse off than before. Their philosophical opposition is deeply personal for both men.

## Plot Hooks

1. **The City That Burned** — A city that Hakon destabilized years ago has descended into warlord rule that is far worse than the government he helped overthrow. He must face the consequences of his actions and decide whether to help — or move on as he always does.

2. **The Silence Campaign** — The Order of Stability has developed a way to magically suppress Hakon's voice. Without his greatest weapon, he must find another way to survive and continue his work.

3. **The Tyrant's Fall** — A genuinely terrible tyrant rules a northern city, and the oppressed people have begged Hakon for help. For once, the revolution seems justified — but the tyrant's spymaster is one step ahead, and the city is a trap.
