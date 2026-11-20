/**
 * NEVE Product Flavours Data
 * Exactly matches the reference design: Classic Cola, Lime Cola, Orange Cola
 */
export const flavours = [
  {
    id: 'classic-cola',
    name: 'Classic Cola',
    tagline: 'Original taste, unchanged.',
    description: 'Our signature classic cola recipe crafted with natural botanical essences and fine caramelized effervescence, delivering a crisp, timeless, balanced refreshment.',
    theme: {
      id: 'classic',
      pastelBg: 'bg-[#FFF1F2]',
      cardBorder: 'border-red-100',
      activeRing: 'ring-2 ring-red-500 border-red-300 shadow-sm',
      btnColor: 'bg-[#E63946] text-white hover:bg-red-700',
      accentColor: '#E63946'
    },
    specs: {
      volume: '250 ml',
      packaging: 'Glass Bottle / Aluminium Can',
      shelfLife: 'Best before 6 months from manufacture'
    },
    ingredients: [
      'Carbonated Water',
      'Sugar',
      'Acidity Regulators (INS 338, INS 330)',
      'Natural Colour (INS 150d)',
      'Natural & Nature-Identical Flavouring Substances',
      'Caffeine'
    ],
    allergens: 'Contains no common allergens (Gluten-free, Vegan, Nut-free, Dairy-free).',
    nutrition: [
      { metric: 'Energy', per100ml: '42 kcal', perServing: '105 kcal' },
      { metric: 'Carbohydrates', per100ml: '10.5 g', perServing: '26.25 g' },
      { metric: 'Total Sugars', per100ml: '10.2 g', perServing: '25.5 g' },
      { metric: 'Added Sugars', per100ml: '9.8 g', perServing: '24.5 g' },
      { metric: 'Protein', per100ml: '0.0 g', perServing: '0.0 g' },
      { metric: 'Total Fat', per100ml: '0.0 g', perServing: '0.0 g' },
      { metric: 'Sodium', per100ml: '8.4 mg', perServing: '21.0 mg' }
    ]
  },
  {
    id: 'lime-cola',
    name: 'Lime Cola',
    tagline: 'Zesty. Fresh. Unique.',
    description: 'An invigorating twist on classic cola, infused with cold-pressed natural key lime zest. Delivers an uplifting tart citrus sparkle that enlivens your palate.',
    theme: {
      id: 'lime',
      pastelBg: 'bg-[#F0FDF4]',
      cardBorder: 'border-emerald-100',
      activeRing: 'ring-2 ring-emerald-500 border-emerald-300 shadow-sm',
      btnColor: 'bg-[#22C55E] text-white hover:bg-emerald-600',
      accentColor: '#22C55E'
    },
    specs: {
      volume: '250 ml',
      packaging: 'Glass Bottle / Aluminium Can',
      shelfLife: 'Best before 6 months from manufacture'
    },
    ingredients: [
      'Carbonated Water',
      'Sugar',
      'Acidity Regulators (INS 330, INS 338)',
      'Natural Key Lime Flavouring',
      'Natural Colour (INS 150d)',
      'Natural Flavouring Substances',
      'Caffeine'
    ],
    allergens: 'Contains no common allergens (Gluten-free, Vegan, Nut-free, Dairy-free).',
    nutrition: [
      { metric: 'Energy', per100ml: '39 kcal', perServing: '97.5 kcal' },
      { metric: 'Carbohydrates', per100ml: '9.8 g', perServing: '24.5 g' },
      { metric: 'Total Sugars', per100ml: '9.5 g', perServing: '23.75 g' },
      { metric: 'Added Sugars', per100ml: '9.0 g', perServing: '22.5 g' },
      { metric: 'Protein', per100ml: '0.0 g', perServing: '0.0 g' },
      { metric: 'Total Fat', per100ml: '0.0 g', perServing: '0.0 g' },
      { metric: 'Sodium', per100ml: '8.0 mg', perServing: '20.0 mg' }
    ]
  },
  {
    id: 'orange-cola',
    name: 'Orange Cola',
    tagline: 'Citrusy. Bold. Refreshing.',
    description: 'Sun-ripened Mediterranean Valencia orange extracts combined with smooth caramel and spiced cola botanicals for a bright, sparkling beverage experience.',
    theme: {
      id: 'orange',
      pastelBg: 'bg-[#FFF7ED]',
      cardBorder: 'border-orange-100',
      activeRing: 'ring-2 ring-orange-500 border-orange-300 shadow-sm',
      btnColor: 'bg-[#F97316] text-white hover:bg-orange-600',
      accentColor: '#F97316'
    },
    specs: {
      volume: '250 ml',
      packaging: 'Glass Bottle / Aluminium Can',
      shelfLife: 'Best before 6 months from manufacture'
    },
    ingredients: [
      'Carbonated Water',
      'Sugar',
      'Acidity Regulators (INS 330, INS 338)',
      'Natural Valencia Orange Flavouring',
      'Natural Colour (INS 150d)',
      'Natural Flavouring Substances',
      'Caffeine'
    ],
    allergens: 'Contains no common allergens (Gluten-free, Vegan, Nut-free, Dairy-free).',
    nutrition: [
      { metric: 'Energy', per100ml: '40 kcal', perServing: '100 kcal' },
      { metric: 'Carbohydrates', per100ml: '10.0 g', perServing: '25.0 g' },
      { metric: 'Total Sugars', per100ml: '9.8 g', perServing: '24.5 g' },
      { metric: 'Added Sugars', per100ml: '9.2 g', perServing: '23.0 g' },
      { metric: 'Protein', per100ml: '0.0 g', perServing: '0.0 g' },
      { metric: 'Total Fat', per100ml: '0.0 g', perServing: '0.0 g' },
      { metric: 'Sodium', per100ml: '8.2 mg', perServing: '20.5 mg' }
    ]
  }
];

export default flavours;
