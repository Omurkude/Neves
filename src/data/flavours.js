/**
 * NEVE Product Flavours Data
 * Authentic products: Jeera Soda, Lime Soda, Orange Flavour
 * Sourced directly from Saheb Sultan Industries product packaging
 */
export const flavours = [
  {
    id: 'jeera-soda',
    name: 'Jeera Soda',
    variant: "SAHEB SULTAN'S NEVE COOL Jeera Soda",
    categoryBadge: 'DESI SPICE KICK',
    tagline: 'Jeera masala kick, ice cold.',
    punchline: 'Roasted cumin, rock salt & throat-clearing soda fizz.',
    description: 'Real roasted cumin extracts, black rock salt, and crisp effervescence that hits the throat cold and settles any heavy meal. The quintessential Indian roadside soda, bottled fresh at our Bhandara unit.',
    tasteNotes: [
      'Roasted Bhuna Jeera',
      'Kala Namak Zing',
      'Throat-Clearing Fizz'
    ],
    image: '/images/flavours/jeera-soda.png',
    theme: {
      id: 'jeera',
      // Bold, saturated flavor color (No pastels!)
      cardBg: 'bg-gradient-to-b from-[#8B3416] via-[#6D250C] to-[#421404]',
      cardBorder: 'border-[#A34220]',
      activeRing: 'ring-4 ring-[#FACC15] scale-[1.02] shadow-2xl shadow-orange-950/50',
      badgeBg: 'bg-[#FACC15] text-[#421404]',
      glowColor: 'rgba(180, 83, 9, 0.35)',
      accentColor: '#F59E0B',
      detailBg: 'from-[#2A1006] via-[#1F0B03] to-[#120501]',
      detailBorder: 'border-amber-600/40',
      ctaColor: 'bg-[#25D366] hover:bg-[#20ba59] text-white'
    },
    specs: {
      volume: '200 ml',
      mrp: '₹10/- (All Taxes Included)',
      packaging: 'Returnable Glass & Food-Grade PET Bottle',
      shelfLife: 'Best Before 3 Months From Date of Mfg.'
    },
    ingredients: [
      'Treated Water',
      'Sugar (9g / 100ml)',
      'Carbon Dioxide (Co2)',
      'Natural Salt',
      'Malic-Fumaric Acid',
      'Stabilising Agents',
      'Class II Preservative (211)',
      'Synthetic Food Colors (E-102, D-110)'
    ],
    allergens: '100% Vegetarian. Contains no common allergens (Gluten-free, Vegan, Nut-free, Dairy-free).',
    nutrition: [
      { metric: 'Energy', per100ml: '32 kcal', perServing: '64 kcal' },
      { metric: 'Carbohydrates', per100ml: '8.0 g', perServing: '16.0 g' },
      { metric: 'Sugar', per100ml: '9.0 g', perServing: '18.0 g' },
      { metric: 'Protein', per100ml: '0.0 g', perServing: '0.0 g' },
      { metric: 'Total Fat', per100ml: '0.0 g', perServing: '0.0 g' }
    ]
  },
  {
    id: 'lime-soda',
    name: 'Lime Soda',
    variant: "SAHEB SULTAN'S NEVE COOL Lime Soda",
    categoryBadge: 'CITRUS COOLER',
    tagline: 'Sharp desi nimbu, zero mercy.',
    punchline: 'Electric citrus punch that cuts through summer heat.',
    description: 'Crisp key-lime tang backed by high-pressure carbonation and a pinch of natural salt. Sharp, thirst-crushing, and built for blistering Indian afternoons.',
    tasteNotes: [
      'Fresh Key-Lime Tang',
      'Balanced Soda Salt',
      'Sharp Chilled Spark'
    ],
    image: '/images/flavours/lime-soda.png',
    theme: {
      id: 'lime',
      // Bold, saturated vivid green (No pastels!)
      cardBg: 'bg-gradient-to-b from-[#15803D] via-[#166534] to-[#052E16]',
      cardBorder: 'border-[#22C55E]',
      activeRing: 'ring-4 ring-[#FACC15] scale-[1.02] shadow-2xl shadow-emerald-950/50',
      badgeBg: 'bg-[#FACC15] text-[#052E16]',
      glowColor: 'rgba(34, 197, 94, 0.35)',
      accentColor: '#22C55E',
      detailBg: 'from-[#072412] via-[#051C0E] to-[#020D06]',
      detailBorder: 'border-emerald-500/40',
      ctaColor: 'bg-[#25D366] hover:bg-[#20ba59] text-white'
    },
    specs: {
      volume: '200 ml',
      mrp: '₹10/- (All Taxes Included)',
      packaging: 'Returnable Glass & Food-Grade PET Bottle',
      shelfLife: 'Best Before 3 Months From Date of Mfg.'
    },
    ingredients: [
      'Treated Water',
      'Sugar (9g / 100ml)',
      'Carbon Dioxide (Co2)',
      'Natural Salt',
      'Malic-Fumaric Acid',
      'Stabilising Agents',
      'Class II Preservative (211)',
      'Synthetic Food Colors (E-102, D-110)'
    ],
    allergens: '100% Vegetarian. Contains no common allergens (Gluten-free, Vegan, Nut-free, Dairy-free).',
    nutrition: [
      { metric: 'Energy', per100ml: '32 kcal', perServing: '64 kcal' },
      { metric: 'Carbohydrates', per100ml: '8.0 g', perServing: '16.0 g' },
      { metric: 'Sugar', per100ml: '9.0 g', perServing: '18.0 g' },
      { metric: 'Protein', per100ml: '0.0 g', perServing: '0.0 g' },
      { metric: 'Total Fat', per100ml: '0.0 g', perServing: '0.0 g' }
    ]
  },
  {
    id: 'orange-flavour',
    name: 'Orange Flavour',
    variant: "SAHEB SULTAN'S NEVE COOL Orange Flavour",
    categoryBadge: 'CITRUS RUSH',
    tagline: 'Sun-baked orange, heavy fizz.',
    punchline: 'Bold citrus punch that hits like chilled nostalgia.',
    description: 'Sweet and tangy orange citrus burst with deep sparkling bubbles. Made for long gulps straight from the ice chest at local dhabas and pan shops across Maharashtra.',
    tasteNotes: [
      'Sweet Nagpur Citrus',
      'Tangy Spark',
      'Heavy Soda Bubbles'
    ],
    image: '/images/flavours/orange-flavour.png',
    theme: {
      id: 'orange',
      // Bold, saturated bright orange (No pastels!)
      cardBg: 'bg-gradient-to-b from-[#EA580C] via-[#C2410C] to-[#7C2D12]',
      cardBorder: 'border-[#FB923C]',
      activeRing: 'ring-4 ring-[#FACC15] scale-[1.02] shadow-2xl shadow-orange-950/50',
      badgeBg: 'bg-[#FACC15] text-[#7C2D12]',
      glowColor: 'rgba(234, 88, 12, 0.35)',
      accentColor: '#F97316',
      detailBg: 'from-[#280E03] via-[#1E0901] to-[#100400]',
      detailBorder: 'border-orange-500/40',
      ctaColor: 'bg-[#25D366] hover:bg-[#20ba59] text-white'
    },
    specs: {
      volume: '200 ml',
      mrp: '₹10/- (All Taxes Included)',
      packaging: 'Returnable Glass & Food-Grade PET Bottle',
      shelfLife: 'Best Before 3 Months From Date of Mfg.'
    },
    ingredients: [
      'Treated Water',
      'Sugar (9g / 100ml)',
      'Carbon Dioxide (Co2)',
      'Natural Salt',
      'Malic-Fumaric Acid',
      'Stabilising Agents',
      'Class II Preservative (211)',
      'Synthetic Food Colors (E-102, D-110)'
    ],
    allergens: '100% Vegetarian. Contains no common allergens (Gluten-free, Vegan, Nut-free, Dairy-free). No Fruit Added.',
    nutrition: [
      { metric: 'Energy', per100ml: '32 kcal', perServing: '64 kcal' },
      { metric: 'Carbohydrates', per100ml: '8.0 g', perServing: '16.0 g' },
      { metric: 'Sugar', per100ml: '9.0 g', perServing: '18.0 g' },
      { metric: 'Protein', per100ml: '0.0 g', perServing: '0.0 g' },
      { metric: 'Total Fat', per100ml: '0.0 g', perServing: '0.0 g' }
    ]
  }
];

export default flavours;
