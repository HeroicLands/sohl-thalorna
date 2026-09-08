---
tags:
  - heroes-and-knaves
  - guilded
  - administration
name:
  full: Màdhurava Rudraṭa
  title: ""
  given: Màdhurava
  clan: Rudraṭa
  home: chandrapur2
  aliases: []
packFolder: ankarisvedyara
shortcode: madhurvrdr
img: systems/sohl/assets/icons/game-icons/delapouite/person.svg
type: being
data:
  portrait: images/beings/characters/madhurvrdr-portrait.webp
  templatePriority: null
  archetypes: []
  occupation: Herald
  stations: []
  lore:
    - commonerrnk
  homes:
    - vedyarargn
  affiliations:
    - chandrapur
  gender: male
  species: null
  age: 50
  birthday: 670/11/9
  height: 1.78
  weight: 76.2
  frame: medium
  appearance:
    eye_color: honey_brown
    hair_color: graying_brown
    skin_color: medium
    complexion: null
    extra_features:
      - a scar on the left foot
sohl:
  templatePriority: null
  items:
    - { shortcode: str, type: attribute, system: { scoreBase: 13 } }
    - { shortcode: end, type: attribute, system: { scoreBase: 14 } }
    - { shortcode: dex, type: attribute, system: { scoreBase: 13 } }
    - { shortcode: agl, type: attribute, system: { scoreBase: 11 } }
    - { shortcode: per, type: attribute, system: { scoreBase: 14 } }
    - { shortcode: cml, type: attribute, system: { scoreBase: 12 } }
    - { shortcode: aur, type: attribute, system: { scoreBase: 14 } }
    - { shortcode: wil, type: attribute, system: { scoreBase: 15 } }
    - { shortcode: rea, type: attribute, system: { scoreBase: 13 } }
    - { shortcode: cre, type: attribute, system: { scoreBase: 12 } }
    - { shortcode: emp, type: attribute, system: { scoreBase: 12 } }
    - { shortcode: elo, type: attribute, system: { scoreBase: 16 } }
    - { shortcode: mor, type: attribute, system: { scoreBase: 12 } }
    - { shortcode: voi, type: attribute, system: { scoreBase: 17 } }
    - { shortcode: varakpnthn, type: affiliation }
    - { shortcode: cook, type: skill, system: { masteryLevelBase: 28 } }
    - { shortcode: folklr, type: skill, system: { masteryLevelBase: 42 } }
    - { shortcode: hrld, type: skill, system: { masteryLevelBase: 70 } }
    - { shortcode: mrcn, type: skill, system: { masteryLevelBase: 13 } }
    - { shortcode: pysn, type: skill, system: { masteryLevelBase: 13 } }
    - { shortcode: vdykshrscrpt, type: skill, system: { masteryLevelBase: 65 } }
    - { shortcode: chrm, type: skill, system: { masteryLevelBase: 36 } }
    - { shortcode: cmd, type: skill, system: { masteryLevelBase: 30 } }
    - { shortcode: dscr, type: skill, system: { masteryLevelBase: 56 } }
    - { shortcode: guil, type: skill, system: { masteryLevelBase: 60 } }
    - { shortcode: intr, type: skill, system: { masteryLevelBase: 60 } }
    - { shortcode: sing, type: skill, system: { masteryLevelBase: 45 } }
    - { shortcode: thtcs, type: skill, system: { masteryLevelBase: 14 } }
    - { shortcode: anmcft, type: skill, system: { masteryLevelBase: 13 } }
    - { shortcode: pilt, type: skill, system: { masteryLevelBase: 26 } }
    - { shortcode: srvl, type: skill, system: { masteryLevelBase: 14 } }
    - { shortcode: timb, type: skill, system: { masteryLevelBase: 14 } }
    - { shortcode: awar, type: skill, system: { masteryLevelBase: 42 } }
    - { shortcode: clmb, type: skill, system: { masteryLevelBase: 36 } }
    - { shortcode: dnce, type: skill, system: { masteryLevelBase: 44 } }
    - { shortcode: jump, type: skill, system: { masteryLevelBase: 36 } }
    - { shortcode: ridg, type: skill, system: { masteryLevelBase: 12 } }
    - { shortcode: stlth, type: skill, system: { masteryLevelBase: 39 } }
    - { shortcode: swim, type: skill, system: { masteryLevelBase: 24 } }
    - { shortcode: archery, type: skill, system: { masteryLevelBase: 28 } }
    - { shortcode: init, type: skill, system: { masteryLevelBase: 42 } }
    - { shortcode: melee, type: skill, system: { masteryLevelBase: 48 } }
    - { shortcode: thro, type: skill, system: { masteryLevelBase: 26 } }
    - { shortcode: draw, type: skill, system: { masteryLevelBase: 52 } }
    - { shortcode: hide, type: skill, system: { masteryLevelBase: 13 } }
    - { shortcode: jewl, type: skill, system: { masteryLevelBase: 14 } }
    - { shortcode: masn, type: skill, system: { masteryLevelBase: 13 } }
    - { shortcode: ShrtSwd, type: weapongear }
    - { shortcode: PTnc, type: armorgear }
    - { shortcode: WBrch, type: armorgear }
    - { shortcode: WCap, type: armorgear }
    - { shortcode: LtShoe, type: armorgear }
    - { shortcode: CMntl, type: armorgear }
    - name: Leather satchel for scrolls (professional quality)
      type: miscgear
      system:
        weight: 1
        value: 100
        durability: 3
    - name: Scrolls of royal decrees and precedents
      type: miscgear
      system:
        weight: 1
        value: 100
        durability: 3
    - name: Genealogical records (personal copies)
      type: miscgear
      system:
        weight: 1
        value: 100
        durability: 3
    - name: Writing kit (ink, quills, parchment, wax seal)
      type: miscgear
      system:
        weight: 1
        value: 100
        durability: 3
    - name: Family crest medallion (brass, suspended)
      type: miscgear
      system:
        weight: 1
        value: 100
        durability: 3
    - { shortcode: tndrbx, type: miscgear }
    - { shortcode: backpk, type: containergear }
    - { shortcode: bpchmd, type: containergear }
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

Màdhurava stands 5'10" tall with a medium build. He has medium brown skin, graying dark brown hair, and honey brown eyes. His features include a diamond-shaped face, a narrow nose, a narrow chin, a wide mouth, medium brows, soft cheeks. A distinguishing mark is a scar on the left foot.

# Dossier {#dossier}

## Background

### The Scholar's Calling

Màdhurava was born into House Rudraṭa, a minor but respected family in the City-States of Vedyara known for their expertise in written records and genealogical study. His father, a scribe of some renown, taught young Màdhurava the sacred discipline of heraldry—not merely as the art of rendering arms and blazonry, but as a language of political authority, ancestral legitimacy, and divine right. Where other youths his age pursued martial glory or mercantile wealth, Màdhurava devoted himself to the study of lineages, precedences, and the elaborate ceremonial protocols that governed the complex relationships between the city's competing noble factions. By his twentieth year, he had begun to establish himself as an authority on matters of succession and genealogical claim.

### The Rise to Authority

His true ascension came at age twenty-two, when he successfully arbitrated a succession dispute that threatened to tear apart the northern districts of the city. Through meticulous genealogical research and masterful interpretation of obscure heraldic precedent, Màdhurava determined the legitimate heir to a disputed merchant-lord title. The case established his reputation as both scholar and diplomat, and the City Heralds' Guild recognized his genius by offering him full membership—an extraordinary honor rarely extended to one so young. Over the ensuing decades, his counsel was sought by increasingly powerful nobles, his interpretations of protocol became authority, and his voice shaped the very structure of succession and legitimacy within the city-states.

### The Keeper of Tradition

Now, at fifty, Màdhurava has become something of a living institution. He has served under four different Lord Mayors, advised the appointments of countless noble heirs, and witnessed the rise and fall of three major houses through carefully documented genealogical records. His chambers in the Herald's Archive contain records dating back two centuries, all meticulously maintained and cross-referenced by his own hand. Younger heralds regard him with a mixture of reverence and resentment—he is the keeper of the old ways, the guardian of tradition against the modernizing impulses that increasingly threaten to undermine the formal structures of noble governance. He has trained fewer than a dozen successors in his long career, preferring to maintain absolute control over the most sensitive genealogical records and precedential interpretations.

## Psyche

### Personality

Màdhurava is, above all, a man devoted to order and precedent. He speaks with deliberate formality, referencing historical precedent and documented protocol in virtually every utterance. His sense of humor is dry and often mystifying to those not deeply versed in heraldic subtlety. He approaches every situation as a potential establishment of legal precedent, viewing informal or spontaneous action as a dangerous threat to established order. Yet beneath this rigid exterior lies genuine intellectual passion—he delights in the elegant logic of genealogical problems, and will spend hours in discussion of the finer points of succession law with those who can keep pace with his thinking. He views younger heralds with a complex mixture of paternal interest and territorial suspicion, often testing them with obscure questions to determine whether they are worthy of the knowledge he guards. In private, particularly when discussing history and lineage, he can be surprisingly warm and even avuncular.

### Motivation

Màdhurava is driven by a conviction that the careful maintenance of heraldic tradition and genealogical record is essential to the preservation of civilization itself. He sees his role as guardian not merely of records, but of the very fabric of social order. He is also motivated by a deep concern that the rising generation of heralds lacks the rigor and dedication necessary to maintain these standards, and he fears that once his knowledge passes from the world, the city-states will lose touch with the historical understanding that has preserved stability through generations. Additionally, there is a personal element: Màdhurava has never married and has dedicated his entire life to his work, and he seeks a successor worthy enough to inherit not just his office but his absolute commitment to heraldic truth and historical accuracy.

### Strengths

- **Encyclopedic Heraldic Knowledge**: Màdhurava's understanding of precedent, protocol, and genealogical law is virtually unmatched across the city-states. He can cite obscure rulings from a century prior without consulting records.
- **Diplomatic Acumen**: Though rigid in matters of formal protocol, he is extraordinarily skilled at navigating complex political situations when they involve matters of precedence and legitimacy.
- **Scholarly Authority**: His voice carries weight in matters of law and custom; other scholars and judges defer to his interpretations almost reflexively.
- **Master Orator**: His eloquence and vocal control are exceptional; he can deliver formal pronouncements, genealogical recitations, and ceremonial speeches with compelling authority.
- **Record-Keeping Excellence**: His personal archives are models of organization and accuracy; he possesses instantaneous recall of genealogical connections and historical precedent.

### Weaknesses

- **Rigidity in Crisis**: When situations demand flexibility or improvisation outside formal protocols, Màdhurava becomes uncertain and potentially paralyzed by concern for precedent.
- **Dismissiveness of Innovation**: He regards new methods of record-keeping, new interpretations of law, or departures from traditional ceremony as threats rather than potential improvements.
- **Emotional Distance**: His devotion to order has made him distant from genuine human emotion; he struggles to empathize with personal crises that do not fit neatly into his conceptual frameworks.
- **Isolation and Insularity**: He has limited experience of the common people or the realities of life outside formal noble circles, making his judgments sometimes naive regarding practical human concerns.
- **Physical Vulnerability**: Despite his authority, he is physically unimposing and has never trained in combat; any direct physical confrontation would overwhelm him.

## Social

### Patrons

- **Lady Maharani Sávia of the Central House**: The most powerful noble in the city-states, who has relied on Màdhurava's counsel for thirty years to maintain her family's dominance and resolve succession questions in her favor.
- **The Council of Lord Mayors**: The executive body of the city collectively seeks his counsel on matters affecting the governance and legitimacy of their collective rule.

### Enemies

- **Herald Kárvesh the Modernizer**: A younger herald of considerable talent who advocates for streamlined heraldic processes and argues that many of Màdhurava's "sacred traditions" are merely outdated bureaucratic theater, directly challenging his authority.
- **House Vákhara**: An ambitious merchant family whose genealogical claims Màdhurava has repeatedly denied in favor of more established houses; they are rumored to be sponsoring forged genealogical documents to discredit him.

### Affiliations

- **The City Heralds' Guild**: Senior member and de facto keeper of the archive; wields enormous influence over the guild's direction and standards.
- **The Council of Historical Scholars**: Founding member of an elite academic circle devoted to the preservation and study of the city-states' historical records.
- **House Rudraṭa**: His family house, for whom he serves as primary genealogical advisor and keeper of family records.

## Plot Hooks

1. **The Forged Heir**: A scandal erupts when evidence appears suggesting that a document in Màdhurava's own archive—one establishing the legitimacy of the current Lord Mayor's line—is a forgery dating back forty years. The discovery threatens not merely one political figure but the stability of the entire city governance structure. Màdhurava becomes both investigator and defendant as competing factions use the scandal to advance their positions. The party might be hired to discover who forged the document, when, and to what purpose—or to help Màdhurava manage the political aftermath while preserving what remains of the legal order he has maintained.

2. **The Herald's Succession**: Màdhurava finally selects an heir: a brilliant but headstrong younger herald named Sarita who possesses the knowledge but lacks the reverence for tradition that Màdhurava considers essential. When Sarita begins immediately implementing reforms and reinterpreting precedents, Màdhurava finds himself facing opposition from his own chosen successor. The party becomes caught between the old herald's attempt to reassert authority and the new generation's desire to reshape the office for a changing age. The resolution will determine whether heraldic tradition survives in recognizable form.

3. **The Secret Archives**: Màdhurava discovers that his predecessor maintained a hidden archive—records of genealogical secrets, illegitimate children, falsified claims, and scandals deliberately omitted from the official record. The knowledge contained within could dismantle half the noble families currently in power. He must decide whether to preserve secrecy and tradition or expose truths that demand justice. The party may become his agents in either covering up the scandal or carefully releasing information to destabilize the corrupt power structures the false records have protected.

4. **A Matter of Legitimacy**: A mysterious woman appears in the city claiming to be the true heir to the High Seat through a genealogical line that Màdhurava had presumed extinct. Her documentation is impeccable; her claim appears legitimate. Yet he suspects that she may be an impostor—and her revelation would overturn the current ruling structure. The party is hired to investigate her genealogy, travel to distant lands to verify family records, and determine whether she is genuine or an elaborate deception. In the process, they discover far deeper conspiracies involving forged documents, hidden marriages, and political assassination.

5. **The Ritual of Succession**: A great noble of ancient family approaches death, and an elaborate ceremonial succession must be conducted according to traditions so archaic that only Màdhurava fully understands them. The ceremony requires the participation of various warring factions within the city, and maintaining order and propriety while honoring the dead becomes a complex diplomatic challenge. The party serves as ceremonial guards or investigators as various factions move to manipulate the succession through ritual interruption, revelation of damaging genealogical truths, or outright assassination. The success or failure of the ceremony will determine the power balance within the city-states for the next generation.
