/*
  The Dodechedron of Fortune — Question Data
  Transcribed from "The Dodechedron of Fortune; Or, the Exercise of a Quick Wit"
  (Englished by Sr W. B., Knight, from the French of John de Meun)

  Each house corresponds to one page of the original book (12 questions per house).
  `magicWord` is the decorative invented word printed at the top of each house's page.
  `theme` is a short modern summary of the house's subject matter (not in the original).
  `category` on each question is the marginal label printed beside that question/group
  in the original (where one was legible); some questions had no nearby label.

  NOTE: this is a first-pass transcription from a rough antique typeface. Spelling/
  punctuation is preserved as in the original as closely as could be read, but a few
  words (flagged below) were genuine best guesses. Meant to be proofread/corrected later.
*/

const HOUSES = [
  {
    number: 1,
    roman: "I",
    magicWord: "Baribariatas",
    theme: "Childhood & Nature",
    questions: [
      { num: 1, text: "Whether nature hath ordained, or no, that the childe shall be of a good complexion.", category: "Beginning of life." },
      { num: 2, text: "Whether or no the childe shall bee deliuered sound of bodie, and be withall of long life.", category: "Beginning of life." },
      { num: 3, text: "Whether or no it shall bee of a good quicke spirit, and haue a good memorie.", category: "Presages of youngnes." },
      { num: 4, text: "Whether or no it shall pronounce and speake plaine, and so prooue pleasing in speech.", category: "Presages of youngnes." },
      { num: 5, text: "Whether or no it shall be fit for studie or other waies to be disposed of.", category: null },
      { num: 6, text: "What science he shall be aptest to learne and fittest to comprehend.", category: "Naturall inclination." },
      { num: 7, text: "If in learning at the vniuersitie, then which of the arts he may best professe.", category: null },
      { num: 8, text: "If anie one studie in his minde, whether his thoughts shall be good or bad.", category: null },
      { num: 9, text: "Also whether the thoughts agree with the words, or be dissembled.", category: "Of thoughts & cogitations." },
      { num: 10, text: "Whether or no you shall obtaine your desire of what you wish, and in what space it will be had.", category: null },
      { num: 11, text: "If thou intend a worke, whether it bee a prosperous time to begin, or to stay yet.", category: "Workes begun." },
      { num: 12, text: "If things begunne shall haue a good successe and a prosperous end, or no.", category: "Workes begun." }
    ]
  },
  {
    number: 2,
    roman: "II",
    magicWord: "Roberparcorp",
    theme: "Wealth & Fortune",
    questions: [
      { num: 1, text: "Whether your life shal be prosperous or no.", category: "Of Inclination." },
      { num: 2, text: "Whether you shall bee rich or no.", category: "Of Inclination." },
      { num: 3, text: "By what meane or profession thou shalt bee rich and prosper best.", category: null },
      { num: 4, text: "Whether thou shalt get riches in thy youth or in thine age.", category: "Of Riches." },
      { num: 5, text: "Whether thy wealth shall bee by birth, by art, or aduenture.", category: "Of Riches." },
      { num: 6, text: "Whether thou shalt obtaine thy suite or hopes, or no.", category: "Of Hope." },
      { num: 7, text: "Whether, or no, thou shalt be enuied for thy riches.", category: "Of Hope." },
      { num: 8, text: "Whether the profession hee intends, or now vseth, shalbe profitable, or no.", category: null },
      { num: 9, text: "Whether, hauing lent thy money or other thing, thou shalt recouer it againe, or no.", category: "Of Debts and Recoueries." },
      { num: 10, text: "Whether a desperat debtor shall recouer and content his creditors, or no.", category: "Of Debts and Recoueries." },
      { num: 11, text: "Whether one that is, or shall bee rich, will proue liberall, or no.", category: "Of Liberalitie." },
      { num: 12, text: "What shall bee his most delight that is rich, and wherein he will spend most.", category: "Of Liberalitie." }
    ]
  },
  {
    number: 3,
    roman: "III",
    magicWord: "Aldebaram",
    theme: "Kinship & Society",
    questions: [
      { num: 1, text: "Whether Brethren shall loue or no.", category: "Of Brethren." },
      { num: 2, text: "Which of the brethren shall liue longest.", category: "Of Brethren." },
      { num: 3, text: "Which of the breethren shall bee most fortunate.", category: null },
      { num: 4, text: "Whether or no thy supposed friend & companion be a true friend.", category: "Of Societie & Company." },
      { num: 5, text: "Whether it shall prooue hurtfull to thee to keepe & frequent the company thou dost, or no.", category: "Of Societie & Company." },
      { num: 6, text: "Whether it be good now to part with company, or as yet to stay, or no.", category: "Of Societie & Company." },
      { num: 7, text: "Whether the Iudge be vpright to doe equall Iustice to all, or no.", category: "Of Iudges." },
      { num: 8, text: "Whether this Iudge being faultie shall be hated, or no.", category: "Of Iudges." },
      { num: 9, text: "Whether the prelate or church-man be worthie of his place and dignitie, or no.", category: "Of Prelates." },
      { num: 10, text: "Whether hee shall religiously gouerne the Church, or no.", category: "Of Prelates." },
      { num: 11, text: "Whether the nurse that giues the child sucke be a good nurse and haue a good brest, or no.", category: "Of sucking Children." },
      { num: 12, text: "When it shall bee best weaning the childe from the nurse.", category: "Of sucking Children." }
    ]
  },
  {
    number: 4,
    roman: "IV",
    magicWord: "Rocha-fascarios",
    theme: "Fathers, Fortune & Building",
    questions: [
      { num: 1, text: "What shall be the euent of good or ill to any one.", category: "Fortune." },
      { num: 2, text: "Whether the reputed father be the right father of the child, or no.", category: "Of Fathers and succession." },
      { num: 3, text: "Whether the father shall liue long to bring vp the childe, or no.", category: "Of Fathers and succession." },
      { num: 4, text: "Whether he shall haue great possessions by heireship or purchase, or no.", category: "Of Fathers and succession." },
      { num: 5, text: "Whether this yeere shall be prosperous for planting, or no.", category: "Of Fertillitie." },
      { num: 6, text: "Whether fruites of the earth shall bee good cheape or deere this yeere.", category: "Of Fertillitie." },
      { num: 7, text: "Whether the time be good to begin a building, or no.", category: "Of Building." },
      { num: 8, text: "Whether the building now ended bee well wrought and well founded, or no.", category: "Of Building." },
      { num: 9, text: "Whether thy pretended purposes are to bee followed, or for a time forborne, or no.", category: null },
      { num: 10, text: "Whether in the place where it is thought treasure is hid, it be there or no.", category: "Of treasure and secrets." },
      { num: 11, text: "Whether the treasure shall be found, and in what place it is.", category: "Of treasure and secrets." },
      { num: 12, text: "Whether a secret being kept close shall be reuealed and knowne, or no.", category: "Of treasure and secrets." }
    ]
  },
  {
    number: 5,
    roman: "V",
    magicWord: "Algafaraat",
    theme: "Children, Sport & Messages",
    questions: [
      { num: 1, text: "Whether the couple maried shall haue children together, or no.", category: "Of getting Children." },
      { num: 2, text: "Whether of them is in fault if they haue no children.", category: "Of getting Children." },
      { num: 3, text: "Whether the woman by her bignes be with childe, or no.", category: "Of getting Children." },
      { num: 4, text: "Whether being with child it bee a sonne or a daughter.", category: "Of getting Children." },
      { num: 5, text: "Whether your childe shall be giuen to vertue or vice, or his pleasure.", category: "The nature of children." },
      { num: 6, text: "Whether being a daughter shee shall be religious like a nunne, or to the world a wanton.", category: "The nature of children." },
      { num: 7, text: "What sport is best to vse for recreation.", category: "Of play." },
      { num: 8, text: "Whether the messenger to be imploid bee honest, or no.", category: "Of messengers." },
      { num: 9, text: "Whether the messenger shall discharge the errand giuen him in charge rightly, or no.", category: "Of messengers." },
      { num: 10, text: "Whether the newes reported be true, or no.", category: "Of newes." },
      { num: 11, text: "Whether the contents of the letter tend to good or ill.", category: "Of messages." },
      { num: 12, text: "Whether writing of loue, it shall bee best in prose or verse.", category: "Of messages." }
    ]
  },
  {
    number: 6,
    roman: "VI",
    magicWord: "Algrafer",
    theme: "Servants & Sickness",
    questions: [
      { num: 1, text: "Whether a banished man shall bee restored, or no.", category: "Of Banishment." },
      { num: 2, text: "Whether the childe growing to age shall be free, or liue seruilely, or no.", category: "Of Seruants." },
      { num: 3, text: "Whether thy seruant bee trustie and honest, or no.", category: "Of Seruants." },
      { num: 4, text: "Whether it bee good to take a seruant, and how to chuse.", category: "Of Seruants." },
      { num: 5, text: "Whether the seruant by being honest and carefull, shall at last be a master or no.", category: "Of Seruants." },
      { num: 6, text: "Whether the diseased shall recouer, or no.", category: "Of Sicknes & Phisick." },
      { num: 7, text: "Whether the disease or sicknesse shall bee long, or no.", category: "Of Sicknes & Phisick." },
      { num: 8, text: "Whether the Phisition be a sufficient skilfull practicioner, or no.", category: "Of Sicknes & Phisick." },
      { num: 9, text: "Whether it bee fitting thy complexion to take phisicke, or no.", category: "Of Sicknes & Phisick." },
      { num: 10, text: "Whether the potion giuen by the Phisition be good for the patient, or no.", category: "Of Sicknes & Phisick." },
      { num: 11, text: "Whether the suspected be a sorcerer, or no.", category: "Of Coniurers." },
      { num: 12, text: "Whether the witnesse speake truth, or no.", category: "Of Witnesses." }
    ]
  },
  {
    number: 7,
    roman: "VII",
    magicWord: "Hadigat",
    theme: "Marriage & War",
    questions: [
      { num: 1, text: "Whether it be good for thee to marie, or no.", category: "Of Mariages." },
      { num: 2, text: "Whether shall be thy best to marie a maide or a widow.", category: "Of Mariages." },
      { num: 3, text: "Whether being maried thou shalt continue to loue, or no.", category: "Of Mariages." },
      { num: 4, text: "Whether the maried couple be loyal the one to the other, or no.", category: "Of Mariages." },
      { num: 5, text: "Whether there be cause of Iealousie, or no.", category: "Of Mariages." },
      { num: 6, text: "Whether the child shal be addicted to armes and warres, or no.", category: "Of war and combats." },
      { num: 7, text: "Whether this yeere there shall bee peace or warre.", category: "Of war and combats." },
      { num: 8, text: "Whether the warres begunne shall bee short or long, or cruell and bloodie.", category: "Of war and combats." },
      { num: 9, text: "Whether of the two now in controuersie and to fight shall ouercome.", category: "Of war and combats." },
      { num: 10, text: "Whether it be good to buye or sell much now, or no.", category: "Of traffick." },
      { num: 11, text: "Whether the thing wanting shall bee had againe, or no.", category: "Of things lost." },
      { num: 12, text: "Whether the sport of hunting or hawking be best for thee.", category: "Of hunting." }
    ]
  },
  {
    number: 8,
    roman: "VIII",
    magicWord: "Algrasola",
    theme: "Death",
    questions: [
      { num: 1, text: "Whether the person you pretend or enquire for shall liue long, or die soone.", category: "Of death." },
      { num: 2, text: "Whether the partie you pretend shall die young, or old.", category: "Of death." },
      { num: 3, text: "Whether the partie you pretend shall liue long and die at home, or in a strange countrie.", category: "Of death." },
      { num: 4, text: "Whether he shall die by sicknesse, sword, or warre.", category: null },
      { num: 5, text: "Whether by excesse and misdemenor hee shall aduance his owne death, or no.", category: null },
      { num: 6, text: "Whether that anie absent or in exile, bee aliue, or no.", category: "Of absents." },
      { num: 7, text: "Whether his death being a souldier shall be in the fielde with honour, or no.", category: "Of absents." },
      { num: 8, text: "Whether of those that now are talking shall die first.", category: "Of death." },
      { num: 9, text: "Whether the threatned be affraide, and shalbe in suertie, or no.", category: "Of feare & poysoning." },
      { num: 10, text: "Whether fearing poysoning you may be safe, or no.", category: "Of feare & poysoning." },
      { num: 11, text: "Whether fearing thou art poysoned, thou art or no.", category: "Of feare & poysoning." },
      { num: 12, text: "If a man might chuse, then what death were best to die.", category: "Chuse of death." }
    ]
  },
  {
    number: 9,
    roman: "IX",
    magicWord: "Carbustaym",
    theme: "Voyages, Religion & Dreams",
    questions: [
      { num: 1, text: "Whether the iourney pretended shall safely be performed, or no.", category: "Of voyages." },
      { num: 2, text: "Whether the shippe enquired for shall come safe, or no.", category: "Of voyages." },
      { num: 3, text: "Whether one readie for a voyage by sea shall scape the pyrates, or returne without taking, or no.", category: "Of voyages." },
      { num: 4, text: "Whether he be fitte to bee made a religious Church man, or no.", category: "Religion." },
      { num: 5, text: "Whether the maiden, if shee might, would be a nunne, or no.", category: "Religion." },
      { num: 6, text: "Whether he bee religious or an Hypocrite, or no.", category: "Hypocrisie." },
      { num: 7, text: "Whether he bee capable and fit for learning, or no.", category: "Hypocrisie." },
      { num: 8, text: "Whether thy dreame be true, or no.", category: "Significatio of dreames." },
      { num: 9, text: "Whether thy dreame presage good or ill.", category: "Significatio of dreames." },
      { num: 10, text: "Whether the presages and signes signifie good or ill.", category: "Significatio of dreames." },
      { num: 11, text: "Whether by diuination thou shalt know the thing thou seekest, or no.", category: "Of diuination." },
      { num: 12, text: "Whether iustice or peace shall florish, or no.", category: "Of iustice." }
    ]
  },
  {
    number: 10,
    roman: "X",
    magicWord: "Tammoridich",
    theme: "Honour & Kings",
    questions: [
      { num: 1, text: "Whether, if thou desire credit and preferment, thou shalt obtaine it, or no.", category: "Of preferment and credit." },
      { num: 2, text: "Whether it be now good to seeke or sue for any office, or no.", category: "Of preferment and credit." },
      { num: 3, text: "Whether thou shalt get credit and riches at home, or in forraine countries.", category: "Of preferment and credit." },
      { num: 4, text: "Whether it shall bee long or soone ere thy preferment beginne.", category: "Of preferment and credit." },
      { num: 5, text: "Whether thy honour or credit beeing lost, thou mayst by deserts recouer againe, or no.", category: "Of preferment and credit." },
      { num: 6, text: "Whether it bee now good to vndertake the Princes seruice, or no.", category: "Of Princes seruice." },
      { num: 7, text: "Whether a Prince or a great man shall raigne long in honour, or no.", category: "Of Kings." },
      { num: 8, text: "Whether he shall raigne in equitie and good iustice, or no.", category: "Of Kings." },
      { num: 9, text: "Whether he shall be beloued of his subiects, or no.", category: "Of Kings." },
      { num: 10, text: "Whether he shall bee opprest with warre, or haue peace, or no.", category: "Of Kings." },
      { num: 11, text: "Whether hee shall bee liberall and valiant, or no.", category: null },
      { num: 12, text: "Whether a King by succession or election be best.", category: null }
    ]
  },
  {
    number: 11,
    roman: "XI",
    magicWord: "Escabot",
    theme: "Love & Friendship",
    questions: [
      { num: 1, text: "Whether this yeere to thee shall bee fortunate, or no.", category: "Of loue." },
      { num: 2, text: "Whether thy hopes and expectation shal be, or no.", category: "Of loue." },
      { num: 3, text: "Whether the louer shall enioy his loue, or no.", category: "Of loue." },
      { num: 4, text: "By what meanes hee may best worke to obtaine his loue.", category: "Of loue." },
      { num: 5, text: "Whether the louer be beloued of his friend and loue, or no.", category: "Of loue." },
      { num: 6, text: "Whether calling thee friend and loue, they dissemble, or no.", category: "Of loue." },
      { num: 7, text: "Whether loue begun shall last long, and what shall be the end.", category: "Of loue." },
      { num: 8, text: "Whether of the two loue best, the one, or the other.", category: "Of loue." },
      { num: 9, text: "Whether thy professed friend be so, or no.", category: "Of friendshippe." },
      { num: 10, text: "Whether in thy declining state thou shalt haue friends, or no.", category: "Of friendshippe." },
      { num: 11, text: "Whether the rich, or poore mans loue bee more best or constant.", category: "Of friendshippe." },
      { num: 12, text: "Whether it be thy time now of good fortune, or no.", category: "Of fortune." }
    ]
  },
  {
    number: 12,
    roman: "XII",
    magicWord: "Sartochi",
    theme: "Enemies & Misfortune",
    questions: [
      { num: 1, text: "Whether are most thy friends or thy foes.", category: "Of enemies." },
      { num: 2, text: "Whether he shall ouercome and get the better of his enemies, or no.", category: "Of enemies." },
      { num: 3, text: "Whether of thy law matter thou shalt haue a good end, or no.", category: "Of law." },
      { num: 4, text: "What is the best course to end the proces quickly.", category: "Of law." },
      { num: 5, text: "Whether the fort or castell beseeged shall be got, or no.", category: "Of siege." },
      { num: 6, text: "Whether it bee fit and good to reuenge a wrong, or no.", category: "Of reuenge." },
      { num: 7, text: "Whether a prisoner shall get his inlargement, or no.", category: "Of prisoners." },
      { num: 8, text: "Whether sorrow and griefe shall be asswaged by comfort, or no.", category: "Of sorrow." },
      { num: 9, text: "Whether he that faine would, and also hath a meanes to deceaue thee, shall or no.", category: "Of deceit & cosenage." },
      { num: 10, text: "Whether any neighbour or companion doe hate thee.", category: "Of ennie." },
      { num: 11, text: "Whether the horse that they would sell thee is good and fit to buy, or no.", category: "Buying of horses." },
      { num: 12, text: "Whether the last end of anie man shall bee good or euill.", category: "Mans end." }
    ]
  }
];
