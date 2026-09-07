---
tags:
  - hero
  - silent-talon
  - unguilded
  - soldiery
name:
  full: Dôren Sýndalr
  title: ""
  given: Dôren
  clan: Sýndalr
  aliases: []
packFolder: aureldiaprovenzia
shortcode: dornsyndlr
img: icons/person.svg
type: being
data:
  portrait: images/being/dornsyndlr-portrait.webp
  templatePriority: null
  archetypes: []
  occupation: Mercenary
  stations: []
  lore:
    - commonerrnk
  homes:
    - provenzrgn
  affiliations:
    - slntlncmpny
    - kngdmprvnz
  gender: male
  species: null
  age: 28
  birthday: 692/6/8
  height: 1.93
  weight: 98
  frame: heavy
  appearance:
    eye_color: gray
    hair_color: black
    skin_color: olive
    complexion: battle_scarred
    extra_features:
      - Deep ragged scar diagonally across left cheek
sohl:
  templatePriority: null
  items:
    - { shortcode: str, type: attribute, system: { scoreBase: 17 } }
    - { shortcode: end, type: attribute, system: { scoreBase: 15 } }
    - { shortcode: dex, type: attribute, system: { scoreBase: 14 } }
    - { shortcode: agl, type: attribute, system: { scoreBase: 15 } }
    - { shortcode: per, type: attribute, system: { scoreBase: 11 } }
    - { shortcode: cml, type: attribute, system: { scoreBase: 9 } }
    - { shortcode: aur, type: attribute, system: { scoreBase: 8 } }
    - { shortcode: wil, type: attribute, system: { scoreBase: 12 } }
    - { shortcode: rea, type: attribute, system: { scoreBase: 10 } }
    - { shortcode: cre, type: attribute, system: { scoreBase: 8 } }
    - { shortcode: emp, type: attribute, system: { scoreBase: 10 } }
    - { shortcode: elo, type: attribute, system: { scoreBase: 9 } }
    - { shortcode: mor, type: attribute, system: { scoreBase: 11 } }
    - { shortcode: voi, type: attribute, system: { scoreBase: 10 } }
    - { shortcode: chrm, type: skill, system: { masteryLevelBase: 27 } }
    - { shortcode: cmd, type: skill, system: { masteryLevelBase: 22 } }
    - { shortcode: dscr, type: skill, system: { masteryLevelBase: 20 } }
    - { shortcode: guil, type: skill, system: { masteryLevelBase: 27 } }
    - { shortcode: intr, type: skill, system: { masteryLevelBase: 40 } }
    - { shortcode: sing, type: skill, system: { masteryLevelBase: 27 } }
    - { shortcode: thtcs, type: skill, system: { masteryLevelBase: 8 } }
    - { shortcode: cook, type: skill, system: { masteryLevelBase: 22 } }
    - { shortcode: folklr, type: skill, system: { masteryLevelBase: 33 } }
    - { shortcode: hrld, type: skill, system: { masteryLevelBase: 22 } }
    - { shortcode: pysn, type: skill, system: { masteryLevelBase: 20 } }
    - { shortcode: acro, type: skill, system: { masteryLevelBase: 45 } }
    - { shortcode: awar, type: skill, system: { masteryLevelBase: 33 } }
    - { shortcode: clmb, type: skill, system: { masteryLevelBase: 75 } }
    - { shortcode: dnce, type: skill, system: { masteryLevelBase: 24 } }
    - { shortcode: jump, type: skill, system: { masteryLevelBase: 64 } }
    - { shortcode: ridg, type: skill, system: { masteryLevelBase: 12 } }
    - { shortcode: stlth, type: skill, system: { masteryLevelBase: 56 } }
    - { shortcode: swim, type: skill, system: { masteryLevelBase: 30 } }
    - { shortcode: archery, type: skill, system: { masteryLevelBase: 24 } }
    - { shortcode: init, type: skill, system: { masteryLevelBase: 55 } }
    - { shortcode: shok, type: skill, system: { masteryLevelBase: 80 } }
    - { shortcode: melee, type: skill, system: { masteryLevelBase: 70 } }
    - { shortcode: dge, type: skill, system: { masteryLevelBase: 65 } }
    - { shortcode: thro, type: skill, system: { masteryLevelBase: 52 } }
    - { shortcode: draw, type: skill, system: { masteryLevelBase: 11 } }
    - { shortcode: wpnc, type: skill, system: { masteryLevelBase: 30 } }
    - { shortcode: agri, type: skill, system: { masteryLevelBase: 33 } }
    - { shortcode: anmcft, type: skill, system: { masteryLevelBase: 22 } }
    - { shortcode: smsh, type: skill, system: { masteryLevelBase: 12 } }
    - { shortcode: srvl, type: skill, system: { masteryLevelBase: 55 } }
    - { shortcode: sprt, type: mysticalability, system: { masteryLevelBase: 30 } }
    - { shortcode: BAxe, type: weapongear }
    - { shortcode: Dgr, type: weapongear }
    - { shortcode: RndSh, type: weapongear }
    - { shortcode: CTrsr, type: armorgear }
    - { shortcode: CSwd, type: armorgear }
    - { shortcode: CSTnc, type: armorgear }
    - { shortcode: LtKBoot, type: armorgear }
    - { shortcode: LtGlove, type: armorgear }
    - { shortcode: SByrn, type: armorgear }
    - { shortcode: PCap, type: armorgear }
    - { shortcode: PSTnc, type: armorgear }
    - { shortcode: PlHHelm, type: armorgear }
    - { shortcode: Leather satchel, type: miscgear }
    - { shortcode: Sharpening stone, type: miscgear }
    - { shortcode: Leather flask, type: miscgear }
    - { shortcode: backpk, type: containergear }
    - { shortcode: StdRtns, type: miscgear, system: { quantity: 3 } }
    - { shortcode: LiteBdrl, type: miscgear }
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

Dôren is a towering man of twenty-eight, standing six foot four with a heavy, muscular frame and olive-toned skin marked by battle scars. A deep, ragged scar runs diagonally across his left cheek. His short black hair and gray eyes give him a hard, uncompromising look. There is nothing subtle about him, and he would not want there to be.

# Dossier {#dossier}

Dôren hails from the rugged highlands of Provènzia, where he was once a farmer. That life ended when his village was raided and destroyed during a border skirmish. With nothing left—no home, no family, no reason to stay—he joined a local militia to seek vengeance. He quickly rose through the ranks on the strength of his raw physical power and his utter fearlessness in battle.

His reputation as a fighter drew the attention of Brànwâal, who recruited him into the [[affiliation-slntlncmpny|Silent Talon]] for his resilience and brute force. Dôren has been with the band ever since, finding in it the family he lost. He fights with an axe and shield in the old highland style—direct, brutal, and unrelenting.

Dôren is not a complicated man. He does not care for politics, subtlety, or the kind of scheming that occupies people like Tórnis. War is simple: protect those who fight with you, kill those who stand against you. He says what he means, does what he says, and asks nothing more of the world than a place to stand and someone worth standing beside.

### Skills and Abilities

- **Battle Prowess**: Dôren is the Silent Talon's frontline fighter. He wields his axe and shield with devastating effect, combining raw strength with the hard-won experience of years of combat.
- **Physical Strength**: Exceptionally strong, even by the standards of fighting men. His highland upbringing and years of manual labor gave him a powerful frame that his military career has only hardened.
- **Endurance**: Dôren can fight, march, and endure hardship longer than most men. He does not complain, does not slow down, and does not quit.
- **Loyalty**: Not a skill in the conventional sense, but Dôren's absolute reliability in battle makes him invaluable. He will hold a position, protect a flank, or stand over a fallen companion until he is physically unable to continue.

## Psyche

### Personality

Dôren is straightforward, loyal, and practical. He lacks patience for politics or subtlety, preferring to solve problems with his axe and shield. He speaks plainly and cares deeply for his comrades, often forming deep bonds with those he fights alongside. He is not unintelligent—he simply sees no reason to overcomplicate things that are, at their core, simple.

### Motivation

Dôren seeks stability after losing his family and home. He has little desire for wealth beyond what is needed to live comfortably. His true motivation is to find a new family in the Silent Talon and to protect them from the kind of destruction he once faced. As long as he is swinging his axe alongside people he trusts, he is where he needs to be.

### Strengths

- **Battle Prowess**
- **Physical Strength**
- **Endurance**

## Social

## Companions

- **[[being-branwldrgr|Brànwâal Dôrgaar]]**: Captain of the Silent Talon. Kôris respects Brànwâal's competence and follows his orders without question.
- **[[being-elyseskyrn|Elýsè Skýrn]]**: Fellow band member. Kôris is protective of her.
- **[[being-torniskbry|Tórnis Kúbrý]]**: Fellow band member. Kôris finds Tórnis's evasiveness mildly irritating but trusts him in the field.
- **[[being-chlbrhydyn|Chéleb Rhýddýn]]**: Fellow band member. A quiet mutual respect between two men who prefer actions to words.

### Patrons

None.

### Enemies

The raiders who destroyed his village.

## Plot Hooks

1. **The Burning Village**: The Silent Talon passes through a region where villages are being raided in a pattern disturbingly similar to the attack that destroyed Dôren's home. He becomes obsessed with finding the raiders, and the band must decide whether to pursue his personal vendetta or stick to their current contract.

2. **The Old Militia**: A former comrade from Dôren's militia days appears, asking for help with a desperate situation. The request is genuine, but fulfilling it would put the Silent Talon in direct conflict with a powerful lord who is one of their potential employers.

3. **The Shield Wall**: During a pitched battle, Dôren is faced with an impossible choice: hold the line and protect the band's retreat, or break formation to save a civilian caught in the fighting. Whatever he chooses, someone pays the price.
