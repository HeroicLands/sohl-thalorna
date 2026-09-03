---
tags:
  - demigod
  - heroes-of-asguard
  - unguilded
  - soldiery
name:
  full: Astrid the Forsaken
  title: null
  given: Astrid
  clan: null
  aliases:
    - the Forsaken
  home: null
id: EhZ7oubLCClWzgDt
folder: Nu7AgLZEmR26u2pk
shortcode: astrdfrskn
img: icons/person.svg
type: being
data:
  portrait: images/being/astrdfrskn-portrait.webp
  templatePriority: null
  archetypes: []
  occupation: Wanderer and Warrior
  stations: []
  lore:
    - nordheimnclt
    - commonerrnk
  homes:
    - vrystwald
  affiliations:
    - vrystwldtrbs
  gender: female
  species: null
  age: 27
  birthday: 693/9/7
  height: 1.69
  weight: 60
  frame: medium
  appearance:
    eye_color: amber
    hair_color: dark_brown
    skin_color: fair
    complexion: smooth
    extra_features: []
sohl:
  archetype: null
  items:
    - { shortcode: str, type: attribute, system: { scoreBase: 17 } }
    - { shortcode: end, type: attribute, system: { scoreBase: 18 } }
    - { shortcode: dex, type: attribute, system: { scoreBase: 16 } }
    - { shortcode: agl, type: attribute, system: { scoreBase: 17 } }
    - { shortcode: per, type: attribute, system: { scoreBase: 18 } }
    - { shortcode: cml, type: attribute, system: { scoreBase: 14 } }
    - { shortcode: aur, type: attribute, system: { scoreBase: 16 } }
    - { shortcode: wil, type: attribute, system: { scoreBase: 15 } }
    - { shortcode: rea, type: attribute, system: { scoreBase: 12 } }
    - { shortcode: cre, type: attribute, system: { scoreBase: 11 } }
    - { shortcode: emp, type: attribute, system: { scoreBase: 13 } }
    - { shortcode: elo, type: attribute, system: { scoreBase: 9 } }
    - { shortcode: mor, type: attribute, system: { scoreBase: 12 } }
    - { shortcode: voi, type: attribute, system: { scoreBase: 10 } }
    - { shortcode: ymir, type: affiliation }
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
      base: 132
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

Astrid stands 5'5" with a lithe, predatory frame, weighing about 130 pounds. Her fair skin is smooth and unblemished in a way that seems slightly wrong — too perfect, as though sculpted rather than grown. Her auburn hair is bound in warrior's braids, and her amber eyes are striking and unsettling, with pupils that occasionally catch the light like a cat's. Her features are sharp and beautiful, with high cheekbones, a narrow nose, full lips, and a pointed chin — but subtle signs of her hybrid nature are visible to careful observers. Her canine teeth are slightly too pronounced, her movements too fluid, her reflexes faster than any human's should be. She wears dark leather armor fitted close to her body, allowing maximum freedom of movement, and carries no visible weapons, relying on the inhuman strength that Ymir's transformation has given her.

# Dossier {#dossier}

Astrid was one of Ymir's early creations, a being of both human and monstrous traits. She was born in one of Ymir's laboratories, a fusion of different beings, but was quickly abandoned by her creator when he deemed her unworthy of his attention. Left to wander the world, Astrid struggled with her identity, torn between her human emotions and her monstrous nature. Despite the rejection, she never lost faith in Ymir, believing that her existence had a purpose, even if Ymir had not yet seen it. Astrid became known as the Forsaken, a title she wore with pride as she sought to prove her worth to her creator.

The saga of Astrid the Forsaken tells of her journey to reclaim her place in Ymir's creation. She heard rumors of the Heart of the Firstborn, hidden deep within one of Ymir's oldest and most dangerous laboratories. This relic was said to hold the essence of Ymir's first and most beloved creation. The journey was perilous, filled with traps and hostile Dreadspawn, but Astrid's determination drove her forward. In the heart of the laboratory, she faced a guardian created by Ymir himself. In a fierce battle, Astrid defeated the guardian, claiming the Heart of the Firstborn. Rather than offering it to Ymir, she absorbed its essence into herself, transforming into a being of immense power and beauty — a champion of Ymir's path.

## Psyche

### Personality

Astrid is defiant and proud, carrying her abandonment not as a wound but as armor. She is suspicious of kindness, having learned that most people who approach her do so out of curiosity about her monstrous traits or desire to exploit her power. Beneath her guarded exterior, she craves acceptance and connection, though she would die before admitting it. She has a fierce, almost savage joy in combat that hints at the non-human aspects of her nature, and she sometimes displays uncanny instincts and inhuman reflexes that unsettle even her allies.

### Motivation

Astrid seeks to define herself on her own terms rather than be defined by her creator's rejection. She wants to prove that she is not a failed experiment but a complete being worthy of existence. The Heart of the Firstborn has given her power but also visions of other forsaken creations scattered across the world, and she feels a growing responsibility to find and protect them.

### Strengths

Since absorbing the Heart of the Firstborn, Astrid possesses strength and resilience far beyond mortal limits. Her hybrid nature gives her senses that no human could match — she can see in total darkness, track by scent, and sense magical energy. She is a ferocious combatant who blends human martial skill with inhuman speed and power. Her unique nature makes her resistant to many forms of magic that would affect ordinary humans.

## Social

## Companions

### Patrons

**Valdrik the Shaper** — The only person who has ever treated Astrid as a fellow being rather than a curiosity or monster. Their relationship is complicated by Valdrik's scientific interest in her unique nature, but his respect is genuine.

**The Forsaken Ones** — A loose community of Ymir's abandoned creations who recognize Astrid as a champion since she absorbed the Heart of the Firstborn.

### Enemies

**The Purity Crusade** — A fanatical movement that views all of Ymir's creations as abominations that must be destroyed. They consider Astrid an especially dangerous target and have mobilized significant resources to hunt her.

**Ymir's Warden** — A powerful entity left behind to guard Ymir's laboratories. It views Astrid's theft of the Heart of the Firstborn as an unforgivable transgression and relentlessly pursues her.

## Plot Hooks

1. **The Forsaken Children** — Astrid's visions have led her to a settlement where Ymir's abandoned creations are being enslaved and used as forced labor. She must liberate them while confronting her own feelings about belonging and identity.

2. **The Heart's Price** — The power of the Heart of the Firstborn is slowly transforming Astrid, making her more powerful but also more monstrous. She must find a way to control the transformation or risk losing her humanity entirely.

3. **The Creator's Return** — Signs suggest that Ymir may be stirring from his indifference, drawn by the power Astrid has claimed. Whether the god's attention is a blessing or a curse remains to be seen.
