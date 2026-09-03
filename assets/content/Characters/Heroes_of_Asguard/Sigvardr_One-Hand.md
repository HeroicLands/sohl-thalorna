---
aliases:
  - Sigvarðr One-Hand
  - Sigvardr One-Hand
tags:
  - paragon
  - heroes-of-asguard
  - soldiery
name:
  full: Sigvarðr One-Hand
  title: null
  given: Sigvarðr
  clan: null
  aliases:
    - One-Hand
  home: null
id: d19oZWzJXH9Soxub
folder: Ka9XqaF27b0I3Gmq
shortcode: sgvrdrnhnd
img: icons/person.svg
type: being
data:
  portrait: images/being/sgvrdrnhnd-portrait.webp
  templatePriority: null
  archetypes: []
  occupation: Warrior and Judge
  stations: []
  lore:
    - nordheimnclt
    - landedlordrnk
  homes:
    - nrdlndsrgn
  affiliations:
    - kngdmnrdhm
  gender: male
  species: null
  age: 48
  birthday: 672/5/26
  height: 1.87
  weight: 85
  frame: heavy
  appearance:
    eye_color: brown
    hair_color: red
    skin_color: fair
    complexion: rugged
    extra_features: []
sohl:
  archetype: null
  items:
    - { shortcode: str, type: attribute, system: { scoreBase: 14 } }
    - { shortcode: end, type: attribute, system: { scoreBase: 14 } }
    - { shortcode: dex, type: attribute, system: { scoreBase: 16 } }
    - { shortcode: agl, type: attribute, system: { scoreBase: 13 } }
    - { shortcode: per, type: attribute, system: { scoreBase: 15 } }
    - { shortcode: cml, type: attribute, system: { scoreBase: 12 } }
    - { shortcode: aur, type: attribute, system: { scoreBase: 14 } }
    - { shortcode: wil, type: attribute, system: { scoreBase: 17 } }
    - { shortcode: rea, type: attribute, system: { scoreBase: 15 } }
    - { shortcode: cre, type: attribute, system: { scoreBase: 11 } }
    - { shortcode: emp, type: attribute, system: { scoreBase: 12 } }
    - { shortcode: elo, type: attribute, system: { scoreBase: 14 } }
    - { shortcode: mor, type: attribute, system: { scoreBase: 18 } }
    - { shortcode: voi, type: attribute, system: { scoreBase: 13 } }
    - { shortcode: tyr, type: affiliation }
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
      base: 187
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

Sigvarðr stands 5'11" with a lean, disciplined frame, weighing about 185 pounds. His fair skin shows the wear of a hard life lived outdoors, and his brown hair is streaked with gray and tied back from a face marked by gravity and purpose. His gray eyes are steady and penetrating — the eyes of a man who weighs every soul he meets. His features are gaunt and angular, with a long nose, sunken cheeks, a strong jaw, and thin lips that tighten when he disapproves, which is often. The stump of his right hand is cleanly healed and wrapped in worn leather bindings, displayed openly as a badge of sacrifice rather than hidden as a mark of shame. Sigvarðr wears plain but well-made garments — a dark woolen tunic, leather breeches, and a heavy cloak — with a longsword worn on his left hip for cross-draw. A small iron pendant of Týr's rune hangs at his throat.

# Dossier {#dossier}

Sigvarðr was a renowned warrior known for his unyielding sense of justice and fairness. Born into a noble family, he was raised with a strong sense of duty and honor. His life took a dramatic turn when he lost his right hand in battle while defending a village from marauding raiders. Rather than seeing this as a defeat, Sigvarðr took it as a sign from Týr, the god who had sacrificed his hand to bind the great wolf Fenrir. Determined to continue his fight for justice, Sigvarðr trained himself to fight with his left hand, becoming even more skilled and disciplined than before.

The saga of Sigvarðr One-Hand tells of his confrontation with a corrupt jarl who oppressed his people with unjust laws and cruel punishments. Despite his injury, Sigvarðr challenged the jarl to single combat, invoking the right of trial by combat to decide the fate of the jarl's rule. Armed with his sword and shield, Sigvarðr fought with the precision and honor that Týr himself embodied. In a fierce battle that lasted until dusk, Sigvarðr defeated the jarl, sparing his life but demanding that he step down and restore justice to the land.

## Psyche

### Personality

Sigvarðr is grave and deliberate, a man who weighs every word and action against an internal standard of righteousness. He does not smile often, but when he does, it carries genuine warmth. He is scrupulously fair in all dealings and will not tolerate dishonesty, even from allies. The loss of his hand made him more contemplative, and he often speaks of sacrifice as the truest measure of a person's character. He can be rigid in his moral convictions, which sometimes alienates those who see the world in shades of gray.

### Motivation

Sigvarðr seeks to establish a code of justice that transcends the petty feuds and blood-vengeance cycles of the northern clans. He believes that law, fairly administered, is the only thing that separates civilization from barbarism. He is haunted by the raiders he could not stop in time and the village that paid the price for his absence, and he drives himself relentlessly to ensure no community is left unprotected.

### Strengths

Sigvarðr's left-handed fighting style is unorthodox and catches many opponents off guard. His reputation for absolute fairness makes him the most trusted arbiter in the northern lands, and his judgments carry weight even among rival clans. His missing hand, rather than being a weakness, has become a symbol of his devotion to Týr and inspires those who witness his resolve.

## Social

## Companions

### Patrons

**The Court of Justice at Viðarrholt** — The oldest seat of law in the northern territories, where Sigvarðr has been granted permanent standing as an itinerant judge with authority across clan boundaries.

**Eiríkr Lawgiver** — A fellow devotee of Týr who works alongside Sigvarðr, providing legal expertise to complement Sigvarðr's martial authority.

### Enemies

**The former Jarl Halvdan** — The corrupt lord Sigvarðr defeated in combat has never forgiven the humiliation. Though stripped of his title, Halvdan still commands loyal followers and plots revenge.

**The Blood Eagle Clan** — A raider clan that follows the old ways of blood-vengeance and views Sigvarðr's legal reforms as an attack on their traditions and honor.

## Plot Hooks

1. **The Unjust Execution** — A man condemned to death under Sigvarðr's judgment has been found innocent after new evidence emerged. The execution has already been carried out. Sigvarðr must face the consequences of his own fallibility and track down who planted the false evidence.

2. **The Blood Price** — The Blood Eagle Clan has kidnapped several villagers and demands the abolition of Sigvarðr's legal reforms as ransom. Negotiation may be impossible, but a frontal assault risks the hostages' lives.

3. **Týr's Test** — Sigvarðr is visited by a vision of Týr demanding that he sacrifice something even dearer than his hand. The nature of the sacrifice is unclear, but refusing may cost him his divine connection.
