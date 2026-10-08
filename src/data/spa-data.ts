export const premiumServices = [
  { 
    name: "Traditional Thai", 
    duration60: 3500, duration90: 4500,
    process: "An ancient healing system combining acupressure, Indian Ayurvedic principles, and assisted yoga postures. Performed dry over loose clothing.",
    benefits: ["Enhances flexibility and range of motion", "Relieves joint and muscle stiffness", "Balances the body's energy pathways"]
  },
  { 
    name: "Aroma Therapy", 
    duration60: 2500, duration90: 3500,
    process: "A gentle, soothing massage utilizing a curated blend of highly concentrated plant oils (essential oils) inhaled and absorbed through the skin.",
    benefits: ["Calms the nervous system", "Uplifts mood and reduces anxiety", "Promotes deep, restful sleep"]
  },
  { 
    name: "Swedish", 
    duration60: 2500, duration90: 3500,
    process: "The classic Western massage using long gliding strokes, kneading, and friction techniques on the more superficial layers of muscles.",
    benefits: ["Significantly improves blood circulation", "Eases general muscle tension", "Promotes whole-body relaxation"]
  },
  { 
    name: "Deep Tissue", 
    duration60: 3000, duration90: 4000,
    process: "Employs slow, deliberate strokes and firm pressure designed to reach the deepest layers of muscle tissue and fascia.",
    benefits: ["Releases chronic muscle knots", "Aids in injury recovery and mobility", "Reduces inflammation and chronic pain"]
  },
  { 
    name: "Balinesse", 
    duration60: 3000, duration90: 4000,
    process: "A full-body, deep-tissue, holistic treatment combining gentle stretches, acupressure, reflexology, and aromatherapy.",
    benefits: ["Stimulates blood and oxygen flow", "Brings deep muscular relaxation", "Balances internal energy (Qi)"]
  },
  { 
    name: "Lomi Lomi", 
    duration60: 2500, duration90: 3500,
    process: "A traditional Hawaiian massage featuring continuous, flowing strokes using the therapist's forearms and hands in a fluid, rhythmic motion.",
    benefits: ["Clears energy blockages", "Simulates the comforting feeling of gentle waves", "Instills a profound sense of harmony"]
  },
  { 
    name: "Dry Massage", 
    duration60: 2000, duration90: 3000,
    process: "A technique performed without the use of oils or lotions, focusing heavily on compression, acupressure, and stretching.",
    benefits: ["Quick, mess-free revitalization", "Effectively relieves acute muscle stiffness", "Perfect for those with severe oil allergies"]
  },
  { 
    name: "Body Scrubbing", 
    duration60: 2500, duration90: 3500,
    process: "A physical exfoliation technique using abrasive natural ingredients massaged into the skin, followed by a warm rinse and hydrating cleanse.",
    benefits: ["Sloughs away dead skin cells", "Unclogs pores to prevent breakouts", "Leaves skin noticeably glowing and smooth"]
  },
];

export const luxuryServices = [
  { 
    name: "Hot Stone Massage", 
    duration60: 3000, duration90: 4000,
    process: "Smooth, flat, heated basalt stones are placed on specific parts of your body and used by the therapist to massage tight muscles.",
    benefits: ["Melts away severe tension rapidly", "Expands blood vessels for better flow", "Deeply soothing to the central nervous system"]
  },
  { 
    name: "Peppermint Oil Massage", 
    duration60: 3000, duration90: 4000,
    process: "An invigorating massage utilizing the natural cooling and anti-spasmodic properties of premium peppermint essential oil.",
    benefits: ["Rapidly relieves tension headaches", "Cools and numbs sore, overworked muscles", "Energizes and clarifies the mind"]
  },
  { 
    name: "Candle Massage", 
    duration60: 3000, duration90: 4000,
    process: "Warm, melted wax from specialized, skin-safe massage candles is gently poured over the body and massaged into the skin.",
    benefits: ["Intensely hydrates and softens dry skin", "Warms muscles to enhance relaxation", "Provides a highly luxurious sensory experience"]
  },
  { 
    name: "Chocolate Massage", 
    duration60: 3000, duration90: 4000,
    process: "A rich, heated cocoa-based cream or pure cacao oil is massaged into the body, acting as a powerful skin treatment.",
    benefits: ["Floods skin with anti-aging antioxidants", "Deeply nourishes and firms the skin", "Releases endorphins (the 'happy' hormone)"]
  },
  { 
    name: "Wine Massage", 
    duration60: 3000, duration90: 4000,
    process: "A highly specialized massage incorporating red wine extracts, which are exceptionally rich in resveratrol and polyphenols.",
    benefits: ["Offers powerful anti-aging properties", "Revitalizes and brightens skin tone", "Highly detoxifying for the skin cells"]
  },
  { 
    name: "Four Hands (Signature) Massage", 
    duration60: 4999, duration90: 5999, isSignature: true,
    process: "Two expert therapists work simultaneously, mirroring each other's movements in a synchronized choreography across your entire body.",
    benefits: ["The brain cannot predict the movements, forcing ultimate mental surrender", "Delivers double the relaxation in the same time", "The pinnacle of our luxury spa experiences"]
  },
];

export const bodyPolishing = [
  { 
    name: "Chocolate Body Polishing", 
    price: 3999,
    process: "A full-body exfoliation using cocoa bean extracts, followed by a rich hydrating chocolate wrap.",
    benefits: ["Firms the skin", "Provides intense antioxidant protection", "Leaves a lingering, comforting aroma"]
  },
  { 
    name: "Coffee Body Polishing", 
    price: 3999,
    process: "Vigorous exfoliation utilizing finely ground coffee beans to stimulate the skin and underlying tissues.",
    benefits: ["Dramatically reduces the appearance of cellulite", "Stimulates lymphatic drainage", "Brightens dull skin"]
  },
  { 
    name: "Papaya Body Polishing", 
    price: 3999,
    process: "A tropical polish utilizing natural papain enzymes from fresh papaya to gently dissolve dead skin.",
    benefits: ["Naturally brightens the complexion", "Fades dark spots and pigmentation", "Extremely gentle on sensitive skin"]
  },
  { 
    name: "Aloevera Body Polishing", 
    price: 3999,
    process: "A soothing exfoliation process paired with pure aloe vera gel for maximum hydration and cooling.",
    benefits: ["Soothes sun-damaged or irritated skin", "Provides weightless, deep hydration", "Reduces skin inflammation"]
  },
  { 
    name: "Wine Body Polishing", 
    price: 3999,
    process: "A luxurious scrub infused with wine extracts and crushed grape seeds for a potent anti-aging treatment.",
    benefits: ["Promotes skin elasticity", "Delivers a massive dose of polyphenols", "Restores a youthful, radiant glow"]
  },
  { 
    name: "Ragha D’tan Polishing", 
    price: 4500,
    process: "Our specialized de-tanning polish using traditional Ayurvedic ingredients to safely lighten and even out the skin.",
    benefits: ["Effectively removes stubborn sun tan", "Evens out patchy skin tone", "Restores the skin's natural, bright complexion"]
  },
];

export const packages = [
  { price: 8000, hours: 8, validityMonths: 8, inclusions: [] },
  { price: 12000, hours: 12, validityMonths: 12, inclusions: [] },
  { 
    price: 15000, 
    hours: 15, 
    validityMonths: 15, 
    inclusions: [
      "5 hours any luxury service", 
      "10 hours any premium service", 
      "Body Scrubbing OR Head Massage with Navrathna Oil"
    ], 
    featured: true 
  },
];

export const articles = [
  {
    title: "The Alchemy of Warm Caramel Oils & Deep Muscular Release",
    category: "Therapeutic Science",
    readTime: "4 MIN READ",
    excerpt: "How precise oil temperature and nutrient-dense botanical lipids expand capillaries, allowing therapists to release chronic fascia knots with profound comfort.",
    date: "OCTOBER 2026",
  },
  {
    title: "Vinotherapy: The Cellular Science of Red Grape Resveratrol",
    category: "Skin Rituals",
    readTime: "5 MIN READ",
    excerpt: "Harnessing the exceptional antioxidant defense of polyphenols to neutralize environmental stressors, stimulate collagen, and restore a youthful glow.",
    date: "SEPTEMBER 2026",
  },
  {
    title: "Synchronized Four-Hands: The Neurological Route to Absolute Stillness",
    category: "Signature Experiences",
    readTime: "3 MIN READ",
    excerpt: "When two master therapists mirror movements simultaneously, the brain yields cognitive control, plunging the nervous system into restorative theta-state relaxation.",
    date: "AUGUST 2026",
  },
];
