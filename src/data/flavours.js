/**
 * NEVE Product Flavours Data
 * Authentic products: Jeera Soda, Lime Soda, Orange Flavour
 */
export const flavours = [
  {
    id: 'jeera-soda',
    name: 'Jeera Soda',
    variant: 'NEVE Cool Jeera Soda',
    tagline: 'Spiced. Crisp. Refreshing.',
    description: 'An authentic Indian spiced soda crafted with roasted cumin (jeera) extracts, black salt, and effervescent sparkling soda. Delivers a bold, digestive, refreshing fizz with every sip.',
    image: '/images/flavours/jeera-soda.jpg',
    theme: {
      id: 'jeera',
      pastelBg: 'bg-[#FFFBEB]',
      cardBorder: 'border-amber-200/80',
      activeRing: 'ring-2 ring-amber-600 border-amber-400 shadow-md',
      btnColor: 'bg-[#B45309] text-white hover:bg-amber-800',
      accentColor: '#B45309'
    },
    specs: {
      volume: '250 ml / 300 ml',
      packaging: 'Food-Grade PET Bottle',
      shelfLife: 'Best before 6 months from manufacture'
    },
    ingredients: [
      'Carbonated Water',
      'Sugar',
      'Jeera (Cumin) Seed Extract',
      'Black Salt',
      'Acidity Regulators (INS 330, INS 338)',
      'Natural & Nature-Identical Flavouring Substances'
    ],
    allergens: 'Contains no common allergens (Gluten-free, Vegan, Nut-free, Dairy-free).',
    nutrition: [
      { metric: 'Energy', per100ml: '40 kcal', perServing: '100 kcal' },
      { metric: 'Carbohydrates', per100ml: '10.0 g', perServing: '25.0 g' },
      { metric: 'Total Sugars', per100ml: '9.8 g', perServing: '24.5 g' },
      { metric: 'Added Sugars', per100ml: '9.2 g', perServing: '23.0 g' },
      { metric: 'Protein', per100ml: '0.0 g', perServing: '0.0 g' },
      { metric: 'Total Fat', per100ml: '0.0 g', perServing: '0.0 g' },
      { metric: 'Sodium', per100ml: '24.0 mg', perServing: '60.0 mg' }
    ]
  },
  {
    id: 'lime-soda',
    name: 'Lime Soda',
    variant: 'NEVE Cool Lime Soda',
    tagline: 'Zesty. Fresh. Unique.',
    description: 'A vibrant, thirst-quenching soda infused with natural key lime extracts and sparkling effervescence for an instant burst of crisp, cooling citrus refreshment.',
    image: '/images/flavours/lime-soda.jpg',
    theme: {
      id: 'lime',
      pastelBg: 'bg-[#F0FDF4]',
      cardBorder: 'border-emerald-200/80',
      activeRing: 'ring-2 ring-emerald-500 border-emerald-400 shadow-md',
      btnColor: 'bg-[#16A34A] text-white hover:bg-emerald-700',
      accentColor: '#16A34A'
    },
    specs: {
      volume: '250 ml / 300 ml',
      packaging: 'Food-Grade PET Bottle',
      shelfLife: 'Best before 6 months from manufacture'
    },
    ingredients: [
      'Carbonated Water',
      'Sugar',
      'Natural Key Lime Flavouring Substances',
      'Acidity Regulators (INS 330)',
      'Common Salt',
      'Preservatives (INS 211)'
    ],
    allergens: 'Contains no common allergens (Gluten-free, Vegan, Nut-free, Dairy-free).',
    nutrition: [
      { metric: 'Energy', per100ml: '39 kcal', perServing: '97.5 kcal' },
      { metric: 'Carbohydrates', per100ml: '9.8 g', perServing: '24.5 g' },
      { metric: 'Total Sugars', per100ml: '9.5 g', perServing: '23.75 g' },
      { metric: 'Added Sugars', per100ml: '9.0 g', perServing: '22.5 g' },
      { metric: 'Protein', per100ml: '0.0 g', perServing: '0.0 g' },
      { metric: 'Total Fat', per100ml: '0.0 g', perServing: '0.0 g' },
      { metric: 'Sodium', per100ml: '12.0 mg', perServing: '30.0 mg' }
    ]
  },
  {
    id: 'orange-flavour',
    name: 'Orange Flavour',
    variant: 'NEVE Cool Orange Flavour',
    tagline: 'Citrusy. Bold. Refreshing.',
    description: 'Sun-drenched, juicy orange citrus notes layered over a smooth, sparkling soda base. Delivers sweet, tangy, sunny effervescence in every chilled sip.',
    image: '/images/flavours/orange-flavour.jpg',
    theme: {
      id: 'orange',
      pastelBg: 'bg-[#FFF7ED]',
      cardBorder: 'border-orange-200/80',
      activeRing: 'ring-2 ring-orange-500 border-orange-400 shadow-md',
      btnColor: 'bg-[#EA580C] text-white hover:bg-orange-700',
      accentColor: '#EA580C'
    },
    specs: {
      volume: '250 ml / 300 ml',
      packaging: 'Food-Grade PET Bottle',
      shelfLife: 'Best before 6 months from manufacture'
    },
    ingredients: [
      'Carbonated Water',
      'Sugar',
      'Acidity Regulators (INS 330)',
      'Natural & Nature-Identical Orange Flavouring Substances',
      'Food Colours (INS 110, INS 102)'
    ],
    allergens: 'Contains no common allergens (Gluten-free, Vegan, Nut-free, Dairy-free).',
    nutrition: [
      { metric: 'Energy', per100ml: '40 kcal', perServing: '100 kcal' },
      { metric: 'Carbohydrates', per100ml: '10.0 g', perServing: '25.0 g' },
      { metric: 'Total Sugars', per100ml: '9.8 g', perServing: '24.5 g' },
      { metric: 'Added Sugars', per100ml: '9.2 g', perServing: '23.0 g' },
      { metric: 'Protein', per100ml: '0.0 g', perServing: '0.0 g' },
      { metric: 'Total Fat', per100ml: '0.0 g', perServing: '0.0 g' },
      { metric: 'Sodium', per100ml: '10.0 mg', perServing: '25.0 mg' }
    ]
  }
];

export default flavours;
