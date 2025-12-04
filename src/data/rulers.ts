export interface Ruler {
  id: string;
  name: string;
  period: string;
  era: "Ancient" | "Early Medieval" | "Medieval to Pre-Modern" | "Late Medieval-Colonial" | "Modern";
  type: "Kingdom" | "Dynasty" | "Empire" | "Foreign Rule" | "Princely State" | "Nation-State";
  image: string;
  intro: string;
  description: string;
  highlights: string[];
  legacy: string;
  culturalContribution: string;
}

export const rulers: Ruler[] = [
  {
    id: "kuninda",
    name: "Kuninda Kingdom",
    period: "200 BCE - 100 CE",
    era: "Ancient",
    type: "Kingdom",
    image: "attached_assets/generated_images/kuninda_kingdom_ancient_era.png",
    intro: "The first recorded kingdom of the Himalayan foothills, guardians of ancient trade routes.",
    description: "The Kuninda Kingdom ruled the lower Himalayan regions, establishing early settlements and trade networks. They were known for their coins and administrative structures that laid the foundation for future kingdoms.",
    highlights: [
      "First kingdom in Himalayan foothills with documented coinage",
      "Controlled key trade routes between plains and mountains",
      "Developed early administrative systems",
      "Cultural synthesis of Indo-Aryan and local traditions"
    ],
    legacy: "Established the tradition of mountain governance and trade networks that would persist for centuries.",
    culturalContribution: "Early coinage, trade networks, and administrative precedents."
  },
  {
    id: "naga",
    name: "Naga Dynasties",
    period: "100 BCE - 400 CE",
    era: "Ancient",
    type: "Dynasty",
    image: "attached_assets/generated_images/naga_dynasties_serpent_worship.png",
    intro: "Serpent worshippers who integrated nature worship into mountain spirituality.",
    description: "The Naga Dynasties represented a fusion of local tribal traditions with Hindu spiritual practices. They worshipped serpent deities and established sacred groves and water sources that became pilgrimage sites.",
    highlights: [
      "Integrated serpent worship with Hindu traditions",
      "Established sacred groves and pilgrim routes",
      "Developed temple architecture in mountain terrain",
      "Preserved oral traditions and folklore"
    ],
    legacy: "Created the spiritual foundation of Uttarakhand's temple culture.",
    culturalContribution: "Sacred site development, temple traditions, nature worship integration."
  },
  {
    id: "maurya",
    name: "Maurya Empire",
    period: "322 BCE - 185 BCE",
    era: "Ancient",
    type: "Empire",
    image: "attached_assets/generated_images/maurya_empire_ashoka_dharma.png",
    intro: "The great empire that brought dharma and administration to the mountains.",
    description: "The Mauryan Empire, under emperors like Ashoka, extended its reach to the Himalayan regions. Ashoka's conversion to Buddhism and propagation of dharma significantly influenced the spiritual landscape of Uttarakhand.",
    highlights: [
      "Ashoka's edicts influenced mountain communities",
      "Buddhist philosophy spread through the mountains",
      "Administrative efficiency and imperial roads connected regions",
      "Rock edicts promoted peace and ethical governance"
    ],
    legacy: "Introduced administrative systems and ethical governance principles.",
    culturalContribution: "Buddhism, imperial administration, ethical dharma, and architectural influence."
  },
  {
    id: "kushan",
    name: "Kushan Empire",
    period: "30 CE - 375 CE",
    era: "Ancient",
    type: "Empire",
    image: "attached_assets/generated_images/kushan_empire_silk_trade.png",
    intro: "Merchants of the Silk Road who brought cosmopolitan culture to the Himalayas.",
    description: "The Kushan Empire controlled major trade routes and brought cultural synthesis to the mountain regions. Their patronage of Buddhism and art created a golden age of cultural flourishing.",
    highlights: [
      "Connected Uttarakhand to Silk Road trade networks",
      "Patronage of Buddhist art and architecture",
      "Cultural synthesis of Greek, Persian, and Indian traditions",
      "Coinage and commerce expansion"
    ],
    legacy: "Established Uttarakhand as a cosmopolitan hub on ancient trade routes.",
    culturalContribution: "Buddhist art, coinage, trade networks, and cultural synthesis."
  },
  {
    id: "gupta",
    name: "Gupta Empire",
    period: "320 CE - 550 CE",
    era: "Ancient",
    type: "Empire",
    image: "attached_assets/generated_images/gupta_empire_golden_age.png",
    intro: "The classical empire that nurtured philosophy, art, and spiritual enlightenment.",
    description: "The Gupta era represented a golden age of Indian civilization. Their influence in the mountains brought classical Sanskrit learning, temple architecture, and philosophical traditions that shaped Himalayan culture.",
    highlights: [
      "Golden age of classical learning and philosophy",
      "Nalanda and other universities influenced mountain scholars",
      "Sanskrit literature and classical arts flourished",
      "Temple architecture reached new heights"
    ],
    legacy: "Brought classical Indian civilization and learning to mountain communities.",
    culturalContribution: "Classical Sanskrit culture, philosophy, temple architecture, and art traditions."
  },
  {
    id: "katyuri",
    name: "Katyuri Dynasty",
    period: "700 CE - 1100 CE",
    era: "Early Medieval",
    type: "Dynasty",
    image: "attached_assets/generated_images/katyuri_dynasty_medieval_kingdom.png",
    intro: "The first great mountain dynasty, builders of temples and keepers of Himalayan traditions.",
    description: "The Katyuri Dynasty ruled the central Himalayas for over 400 years, establishing Katyur in the Mandakini Valley as a cultural capital. They were prolific temple builders and patrons of arts and learning.",
    highlights: [
      "Founded Katyur valley capital with magnificent temples",
      "Extensive temple building across Uttarakhand",
      "Patronage of Sanskrit learning and literature",
      "Administrative systems adapted to mountain terrain"
    ],
    legacy: "Established Uttarakhand's temple culture and administrative traditions.",
    culturalContribution: "Temple architecture, Sanskrit literature, mountain administration, and spiritual culture."
  },
  {
    id: "chand",
    name: "Chand Dynasty",
    period: "1200 CE - 1791 CE",
    era: "Medieval to Pre-Modern",
    type: "Dynasty",
    image: "attached_assets/generated_images/chand_dynasty_kumaon_kingdom.png",
    intro: "The Kumaon rulers who transformed mountains into a prosperous kingdom spanning six centuries.",
    description: "The Chand Dynasty ruled Kumaon with remarkable stability for nearly 600 years. Known as the longest-reigning dynasty of the Himalayas, they developed sophisticated administrative systems, built magnificent temples, and fostered a unique mountain culture.",
    highlights: [
      "Longest-reigning dynasty in Himalayan history (six centuries)",
      "Established Almora as a cultural and administrative center",
      "Patronage of arts, architecture, and literature",
      "Sophisticated taxation and administrative systems",
      "Maintained independence and diplomatic relations"
    ],
    legacy: "Created Kumaon's stable, prosperous mountain kingdom with lasting cultural identity.",
    culturalContribution: "Temple architecture, administrative systems, literature, Kumaoni culture preservation, and arts."
  },
  {
    id: "panwar",
    name: "Panwar Dynasty (Garhwal Kingdom)",
    period: "1200 CE - 1803 CE",
    era: "Medieval to Pre-Modern",
    type: "Dynasty",
    image: "attached_assets/generated_images/panwar_garhwal_kingdom_rulers.png",
    intro: "The warrior kings of Garhwal who built one of India's most sacred temple kingdoms.",
    description: "The Panwar (Parmar) Dynasty ruled Garhwal with distinction, establishing Srinagar as their capital. They were known as warrior kings who patronized massive temple construction, including the Badrinath and Kedarnath temples.",
    highlights: [
      "Established Srinagar as a magnificent capital",
      "Patronage of major pilgrimage temples (Badrinath, Kedarnath)",
      "Warrior culture merged with spiritual devotion",
      "Extensive trade with Tibet and Nepal",
      "Temple construction on unprecedented scale"
    ],
    legacy: "Transformed Garhwal into the sacred temple kingdom it remains today.",
    culturalContribution: "Major temple patronage, sacred site development, warrior-spiritual culture, and Garhwali traditions."
  },
  {
    id: "gorkha",
    name: "Gorkha Rule",
    period: "1791 CE - 1815 CE",
    era: "Late Medieval-Colonial",
    type: "Foreign Rule",
    image: "attached_assets/generated_images/gorkha_rule_nepalese_conquest.png",
    intro: "The dramatic conquest that brought Nepal's warrior kingdom into the mountains.",
    description: "The Gorkha expansion under Prithvi Narayan Shah reached Uttarakhand, annexing the kingdoms of Kumaon and Garhwal. Though brief, this period witnessed intense military campaigns and administrative reorganization.",
    highlights: [
      "Conquest of independent Himalayan kingdoms",
      "Administrative restructuring under Gorkha systems",
      "Military campaigns and strategic fortifications",
      "Resistance from local rulers (Gulab Singh of Kumaon)",
      "Economic and military changes to the region"
    ],
    legacy: "Brief but transformative period that ended independent mountain kingdoms.",
    culturalContribution: "Military strategies, administrative reorganization, and cross-cultural interactions."
  },
  {
    id: "british",
    name: "British Rule",
    period: "1815 CE - 1947 CE",
    era: "Late Medieval-Colonial",
    type: "Foreign Rule",
    image: "attached_assets/generated_images/british_rule_colonial_uttarakhand.png",
    intro: "The colonial era that transformed mountains through administration, infrastructure, and modernization.",
    description: "Following the Anglo-Gorkha Wars, the British established control over Uttarakhand. They introduced modern administration, built hill stations and roads, and implemented revenue systems that fundamentally changed the region's economy and society.",
    highlights: [
      "Built hill stations (Nainital, Mussoorie, Ranikhet)",
      "Developed roads, railroads, and infrastructure",
      "Established modern administrative systems",
      "Commercial forestry and resource extraction",
      "Sparked Indian independence movements in the mountains"
    ],
    legacy: "Transformed Uttarakhand's landscape through infrastructure; catalyzed independence struggles.",
    culturalContribution: "Infrastructure development, modern education, tourism development, and independence movement leaders."
  },
  {
    id: "tehri",
    name: "Tehri Garhwal Princely State",
    period: "1815 CE - 1949 CE",
    era: "Late Medieval-Colonial",
    type: "Princely State",
    image: "attached_assets/generated_images/tehri_garhwal_princely_state.png",
    intro: "A princely state that maintained semi-independence within the British empire.",
    description: "While most of Garhwal came under direct British rule, the Tehri region maintained a semi-independent princely state under the local Garhwal dynasty. This unique political arrangement preserved some traditional governance structures.",
    highlights: [
      "Maintained semi-independence and local rule",
      "Preserved traditional governance structures",
      "Cultural continuity during colonial period",
      "Later integrated into independent India",
      "Unique political status within British India"
    ],
    legacy: "Preserved traditional governance and cultural continuity during colonial period.",
    culturalContribution: "Cultural preservation, traditional administration, and political autonomy maintenance."
  },
  {
    id: "india",
    name: "Republic of India",
    period: "1947 CE - Present",
    era: "Modern",
    type: "Nation-State",
    image: "attached_assets/generated_images/independent_india_modern_uttarakhand.png",
    intro: "Modern era where Uttarakhand became integral to independent India's democratic republic.",
    description: "After independence in 1947, Uttarakhand became part of the Indian Union. The region has evolved as a democratic state, contributing significantly to India's spiritual, cultural, and economic development. In 2000, Uttarakhand became a separate state.",
    highlights: [
      "Integration into Indian Union (1947)",
      "Democratic governance and constitutional framework",
      "Development of education, industry, and tourism",
      "Formation of Uttarakhand state (2000)",
      "Preservation of heritage with modern development"
    ],
    legacy: "Uttarakhand as a democratic state contributing to India's spiritual and cultural identity.",
    culturalContribution: "Democratic governance, tourism, spiritual preservation, environmental conservation, and cultural heritage management."
  }
];

export const eraGrouped = {
  "Ancient": rulers.filter(r => r.era === "Ancient"),
  "Early Medieval": rulers.filter(r => r.era === "Early Medieval"),
  "Medieval to Pre-Modern": rulers.filter(r => r.era === "Medieval to Pre-Modern"),
  "Late Medieval-Colonial": rulers.filter(r => r.era === "Late Medieval-Colonial"),
  "Modern": rulers.filter(r => r.era === "Modern")
};
