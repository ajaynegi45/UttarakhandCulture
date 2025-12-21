import kedarnathTemple from "@/assets/kedarnath_sacred_temple.png"
import badrinath from "@/assets/badrinath_temple_uttarakhand_culture.webp"


export interface Temple {
    id: string;
    name: string;
    district: string;
    region: "Kumaon" | "Garhwal";
    deity: string;
    architecture: string;
    establishedYear: string;
    altitude: string;
    significance: string;
    description: string;
    history: string;
    architecture_details: {
        style: string;
        materials: string;
        features: string[];
        period: string;
    };
    spiritual_significance: string;
    festivals: string[];
    trekking_route?: string;
    nearby_attractions: string[];
    best_visit_time: string;
    image: string;
    story: string;
}

export const temples: Temple[] = [
    {
        id: "kedarnath",
        name: "Kedarnath Temple",
        district: "Rudraprayag",
        region: "Garhwal",
        deity: "Lord Shiva",
        architecture: "Ancient Himalayan Temple Architecture",
        establishedYear: "8th Century (Reconstructed multiple times)",
        altitude: "3,583 meters",
        significance: "One of the twelve Jyotirlingas of India, Gateway to Kedarnath Valley",
        description: "Kedarnath Temple stands as a testament to ancient Hindu architectural prowess and spiritual devotion. Nestled in the heart of the Himalayas, this sacred shrine has witnessed centuries of devotion from pilgrims seeking the blessings of Lord Shiva. The temple's pyramid-shaped structure rises majestically against the snow-capped Kedarnath peak, creating a breathtaking silhouette that speaks of timeless spirituality.",
        history: "According to legend, this temple was discovered by Adi Shankaracharya in the 8th century, though the temple you see today has been rebuilt multiple times following devastating earthquakes and natural calamities. The 2013 flash floods tested its resilience, yet its ancient stone foundation survived, symbolizing the indomitable spirit of the Himalayan land.",
        architecture_details: {
            style: "Ancient Himalayan Stone Construction with Pyramid-shaped roof",
            materials: "Local river stones with intricate carvings and ancient mortarless joints",
            features: [
                "Narrow stone passageways symbolizing the spiritual journey",
                "Ancient stone carvings depicting Shiva and celestial beings",
                "Underground water channels using ancient hydraulic systems",
                "Walls constructed without mortar - a marvel of ancient engineering"
            ],
            period: "8th Century onwards, with continuous restoration"
        },
        spiritual_significance: "Home to one of the twelve Jyotirlingas (manifestations of Lord Shiva), representing cosmic energy. Pilgrims believe that worshipping at Kedarnath absolves one of all karmic debts. The temple represents the divine mountain sanctuary where Lord Shiva is said to have revealed the secrets of spiritual transformation.",
        festivals: ["Makar Sankranti", "Summer Opening (May)", "Winter Closure (November)"],
        trekking_route: "Gaurikund to Kedarnath (16 km trek, 4-6 hours)",
        nearby_attractions: [
            "Chorabari Glacier",
            "Kedarnath Peak",
            "Bhairav Temple",
            "Sahasradhara Waterfall"
        ],
        best_visit_time: "June to September",
        image: kedarnathTemple.src,
        story: "As dawn breaks over the Himalayas, the first rays of sunlight illuminate Kedarnath Temple, casting long shadows of ancient stone walls. Centuries ago, pilgrims would make this arduous journey to seek Lord Shiva's blessings, and today, thousands still climb these sacred paths. Each step echoes with the footsteps of millions throughout history, and the temple stands as an eternal witness to faith that transcends time. The freezing waters of Mandakini River flow nearby, believed to cleanse the soul of all impurities, making Kedarnath not just a temple, but a sanctuary where earth meets heaven."
    },
    {
        id: "badrinath",
        name: "Badrinath Temple",
        district: "Chamoli",
        region: "Garhwal",
        deity: "Lord Vishnu (Narayan)",
        architecture: "Ancient Hindu Temple with Gopuram",
        establishedYear: "8th Century",
        altitude: "3,300 meters",
        significance: "One of the four cardinal Dhams (pilgrimage sites), Gateway to Spiritual Salvation",
        description: "Badrinath Temple, standing majestically in the Valley of Gods, is one of the most sacred shrines in Hindu pilgrimage circuits. Dedicated to Lord Vishnu in his Narayan form, this temple represents the cosmic energy of protection and sustenance. The temple's distinctive architectural style, featuring intricate wood carvings and stone work, reflects the synthesis of Himalayan culture and Vedic traditions.",
        history: "According to mythology, this temple marks the spot where Lord Vishnu meditated in the form of Badrinarayan. The temple was restored by Adi Shankaracharya in the 8th century, though the current structure reflects continuous renovations. The temple has survived centuries of harsh Himalayan winters and natural calamities, standing as a symbol of eternal spiritual presence.",
        architecture_details: {
            style: "Ancient Hindu Gopuram style with pagoda roof, intricate wood and stone carving",
            materials: "Local stone with ornately carved wooden details, brass-plated spire",
            features: [
                "Ornate wooden pillars with religious carvings",
                "Central sanctum with brass idol of Lord Narayan",
                "Stone walls carved with religious iconography",
                "Natural hot springs integrated into temple complex (Tapt Kund)"
            ],
            period: "8th Century with continuous preservation and restoration"
        },
        spiritual_significance: "Badrinath is believed to be the cosmic gateway to spiritual salvation. Visiting the four cardinal Dhams (Badrinath, Dwarka, Rameswaram, Kedarnath) is considered the ultimate pilgrimage goal in Hindu tradition. The temple represents the protective and nurturing form of Lord Vishnu.",
        festivals: ["Makar Sankranti (Opening)", "Diwali", "Dussehra", "Closing Ceremony (November)"],
        nearby_attractions: [
            "Tapt Kund (Hot Springs)",
            "Auli Ski Resort",
            "Valley of Flowers",
            "Mana Village",
            "Alaknanda River"
        ],
        best_visit_time: "May to October",
        image: badrinath.src,
        story: "In the ethereal Valley of Gods, where clouds caress mountain peaks and the Alaknanda River sings ancient hymns, stands Badrinath Temple. Pilgrims arrive with hearts full of devotion, seeking the blessings of Lord Narayan. The natural hot springs near the temple are believed to possess healing powers, and thousands have experienced spiritual transformation in their waters. As sunset paints the peaks in golden hues, the temple's brass spire glimmers like a beacon of hope, reminding all who see it that the divine is not distant but intimately present in the Himalayan wilderness."
    },
    {
        id: "nanda-devi",
        name: "Nanda Devi Temple",
        district: "Almora",
        region: "Kumaon",
        deity: "Goddess Nanda Devi",
        architecture: "Traditional Kumaoni Temple Architecture",
        establishedYear: "Ancient (Pre-Vedic traditions)",
        altitude: "1,640 meters",
        significance: "Manifestation of Goddess Parvati, Supreme Protector of Kumaon",
        description: "Nanda Devi Temple in Almora is a sacred sanctuary dedicated to the supreme mother goddess. Unlike the grand temples of Garhwal, this temple embodies the subtle spiritual power of Kumaoni tradition. The temple is not about elaborate architecture but about the profound connection between the goddess and her land - every stone, every corner whispers ancient mantras and spiritual wisdom.",
        history: "The temple's origins are lost in the mists of time, predating written records. Local legends speak of divine manifestations in this sacred space for thousands of years. The current structure was built in the 18th century, though the spiritual energy of the site is believed to be eternal. Nanda Devi is the patron goddess of Uttarakhand, protecting all her children.",
        architecture_details: {
            style: "Kumaoni traditional architecture with stone construction and wooden interiors",
            materials: "Local slate stone with detailed wooden carvings of religious motifs",
            features: [
                "Narrow entrance symbolizing passage from material to spiritual world",
                "Brass and copper engraved walls with goddess imagery",
                "Simple altar with powerful spiritual presence",
                "Scenic courtyard with panoramic Himalayan views"
            ],
            period: "Ancient spiritual site with 18th century temple structure"
        },
        spiritual_significance: "Nanda Devi represents Shakti (divine feminine power) and is revered as the protecting mother of Uttarakhand. She symbolizes courage, compassion, and the nurturing strength of mountains. Worshipping here connects devotees to the primordial feminine energy that sustains all creation.",
        festivals: ["Nanda Devi Rajjatra (September)", "Navratri", "Local harvest festivals"],
        nearby_attractions: [
            "Almora Market",
            "Kasar Devi Temple",
            "Bright End Corner",
            "Binsar Mahadev Temple"
        ],
        best_visit_time: "April to June, September to November",
        image: kedarnathTemple.src,
        story: "In the heart of Almora, surrounded by whispering pine forests and misty mountains, stands the ancient Nanda Devi Temple. Here, the goddess is not represented by towering sculptures but by the living presence that devotees feel in their hearts. Local women come to seek blessings for their families, ancient ceremonies are performed with rituals unchanged for centuries, and the temple remains a living link to Kumaon's spiritual heritage. The Nanda Devi Rajjatra festival, where the goddess's palanquin is carried through the streets, is a spectacle of faith that has inspired generations. In this sacred space, the boundary between divine and mortal dissolves."
    },
    {
        id: "auli-devray",
        name: "Devray Temple",
        district: "Chamoli",
        region: "Garhwal",
        deity: "Lord Devrai (Form of Shiva)",
        architecture: "Ancient Hill-top Temple",
        establishedYear: "12th Century",
        altitude: "3,000 meters",
        significance: "Sacred abode of Lord Shiva, Highest inhabited temple of Uttarakhand",
        description: "Perched at the highest inhabited altitude in Uttarakhand, Devray Temple offers a unique spiritual experience where devotion meets dramatic natural beauty. The temple is not just a place of worship but a gateway to spiritual awakening, where the thinning air seems to bring one closer to the divine. The panoramic views of the Himalayan peaks create a sense of being suspended between earth and heaven.",
        history: "Built by local chieftains in the 12th century, this temple has been maintained by generations of mountain priests. The temple survived wars, invasions, and harsh weather, standing as a testament to the eternal presence of Lord Shiva in the mountains. Ancient manuscripts describe pilgrimages to this temple dating back over a thousand years.",
        architecture_details: {
            style: "Mountain temple with minimalist architectural design, adapted to high-altitude environment",
            materials: "Stone walls with slate roof, decorated with traditional Garhwali wooden carvings",
            features: [
                "Main shrine carved into rock face",
                "Prayer bells that chime with mountain winds",
                "Ancient stone inscriptions with Shiva mantras",
                "Natural rock formations integrated into worship space"
            ],
            period: "12th Century with continuous preservation"
        },
        spiritual_significance: "Devray Temple represents the manifestation of Lord Shiva in his most sublime form - the cosmic dancer who creates and destroys the universe. At this altitude, devotees experience a profound sense of transcendence, feeling directly connected to the cosmic consciousness.",
        festivals: ["Maha Shivaratri", "Local mountain festivals"],
        trekking_route: "Auli to Devray Temple (5 km trek)",
        nearby_attractions: [
            "Auli Ski Resort",
            "Chopta",
            "Tunga Temple",
            "Joshi Mutt Meadow"
        ],
        best_visit_time: "June to September",
        image: kedarnathTemple.src,
        story: "As you climb towards Devray Temple, each step takes you closer to the thin veil between material and spiritual realms. At 3,000 meters, the air becomes sacred, the silence profound. Reaching the temple, you find yourself standing amidst clouds and peaks, with panoramic views of the Himalayan range stretching endlessly. Ancient prayers carved into stones seem to echo through centuries. Pilgrims meditate here, and many report profound spiritual experiences - the universe feels closer, the divine feels accessible. In this space where earth touches sky, Shiva's eternal dance continues, inviting seekers to lose themselves in cosmic consciousness."
    },
    {
        id: "munsiyari-temple",
        name: "Munsiyari Nanda Devi Temple",
        district: "Pithoragarh",
        region: "Kumaon",
        deity: "Goddess Nanda Devi",
        architecture: "Remote Mountain Sanctuary Temple",
        establishedYear: "Ancient (Pre-Vedic)",
        altitude: "2,200 meters",
        significance: "Sacred Gateway to Trans-Himalayan Pilgrimage, Nanda Devi's Eastern Gateway",
        description: "Munsiyari Nanda Devi Temple stands at the threshold of the mystical trans-Himalayan region, serving as a spiritual gateway for pilgrims undertaking sacred journeys to Mount Kailash and Lake Mansarovar. This remote sanctuary is where the goddess is believed to bestow blessings for safe passage through treacherous mountain passes. The temple embodies the courage and devotion of the mountain people.",
        history: "According to ancient texts, this temple marks the eastern gateway of goddess Nanda Devi's protective domain. Pilgrims have been visiting this sacred site for millennia, seeking the goddess's blessings before undertaking dangerous trans-Himalayan journeys. The temple has been destroyed and rebuilt multiple times, yet the spiritual energy remains undiminished.",
        architecture_details: {
            style: "Simple yet elegant mountain sanctuary design blending with natural landscape",
            materials: "Local stone with minimal ornamentation, natural cave elements",
            features: [
                "Shrine integrated into natural rock formation",
                "Ancient prayer stones carved with mantras",
                "Natural water spring believed to be holy",
                "Simple wooden door with traditional Kumaoni designs"
            ],
            period: "Ancient spiritual site with ongoing preservation"
        },
        spiritual_significance: "This temple represents the goddess as Protector of the Himalayan passes and guardian of pilgrims undertaking spiritual journeys. It embodies the feminine principle of compassion combined with the fierce protective power needed to survive in the harsh mountain environment.",
        festivals: ["Nanda Devi Jatra", "Local mountain festivals", "Trekking season ceremonies"],
        trekking_route: "Gateway to trans-Himalayan treks",
        nearby_attractions: [
            "Milam Glacier",
            "Ralam Glacier",
            "Nanda Devi Base Camp",
            "Patal Bhuvaneshwar Cave"
        ],
        best_visit_time: "June to September (Trekking season)",
        image: kedarnathTemple.src,
        story: "In the remote region of Munsiyari, at the edge of civilization where only the bravest venture, stands an ancient temple dedicated to Nanda Devi. This is where the goddess becomes the protector of pilgrims embarking on sacred journeys to the world's holiest mountains. Inside the simple sanctuary, prayers have been whispered for thousands of years by countless seekers. The goddess here is not adorned with gold or marble, but with the pure essence of mountain spirituality. Every year, adventurers and spiritual seekers visit to seek her blessings before crossing high passes and venturing into trans-Himalayan territories. Here, faith and courage merge into one transformative force."
    }
];
