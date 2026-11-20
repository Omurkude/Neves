/**
 * NEVE Product Flavours Data
 * Authentic products: Jeera Soda, Lime Soda, Orange Flavour
 * Sourced from official Saheb Sultan Industries product label
 */
export const flavours = [
  {
    id: 'jeera-soda',
    name: 'Jeera Soda',
    variant: "SAHEB SULTAN'S NEVE COOL Jeera Soda",
    tagline: 'Spiced. Crisp. Refreshing.',
    description: 'An authentic Indian spiced soda crafted with purified treated water, roasted cumin (jeera) essence, natural salt, and effervescent sparkling soda.',
    image: '/images/flavours/jeera-soda.png',
    theme: {
      id: 'jeera',
      pastelBg: 'bg-[#FEF2F2]',
      cardBorder: 'border-red-100',
      activeRing: 'ring-2 ring-[#E63946] border-red-300 shadow-sm',
      btnColor: 'bg-[#E63946] text-white hover:bg-red-700',
      accentColor: '#E63946'
    },
    specs: {
      volume: '200 ml',
      mrp: 'Rs. 10/-',
      packaging: '200 ml Food-Grade PET Bottle',
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
    tagline: 'Zesty. Fresh. Unique.',
    description: 'A vibrant, thirst-quenching soda infused with purified treated water, sparkling carbonation, and crisp key lime citrus refreshment.',
    image: '/images/flavours/lime-soda.png',
    theme: {
      id: 'lime',
      pastelBg: 'bg-[#F0FDF4]',
      cardBorder: 'border-emerald-100',
      activeRing: 'ring-2 ring-[#22C55E] border-emerald-300 shadow-sm',
      btnColor: 'bg-[#22C55E] text-white hover:bg-emerald-600',
      accentColor: '#22C55E'
    },
    specs: {
      volume: '200 ml',
      mrp: 'Rs. 10/-',
      packaging: '200 ml Food-Grade PET Bottle',
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
    tagline: 'Unleash the Power of Orange..!',
    description: 'Sun-drenched, juicy orange notes layered over a crisp, effervescent sparkling soda base. Delivers tangy, sweet refreshment in every chilled sip.',
    image: '/images/flavours/orange-flavour.png',
    theme: {
      id: 'orange',
      pastelBg: 'bg-[#FFF7ED]',
      cardBorder: 'border-orange-100',
      activeRing: 'ring-2 ring-[#F97316] border-orange-300 shadow-sm',
      btnColor: 'bg-[#F97316] text-white hover:bg-orange-600',
      accentColor: '#F97316'
    },
    specs: {
      volume: '200 ml',
      mrp: 'Rs. 10/-',
      packaging: '200 ml Food-Grade PET Bottle',
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
