/**
 * NEVE Product Flavours Data - Single Source of Truth
 * Authentic products: Classic Cola / Jeera, Orange Cola, Lime Cola
 * Sourced from official Saheb Sultan Industries product labels
 */
export const flavours = [
  {
    id: 'classic-cola',
    name: 'Classic Cola',
    variant: "SAHEB SULTAN'S NEVE COOL Classic Cola",
    category: 'SWEETENED CARBONATED BEVERAGES',
    tagline: 'Original taste, unchanged.',
    description: 'An authentic Indian spiced cola crafted with purified treated water, effervescent CO2, natural salt, and rich effervescent refreshment.',
    image: '/images/flavours/jeera-soda.png',
    theme: {
      id: 'cola',
      pastelBg: 'bg-[#FEF2F2]',
      cardBorder: 'border-red-100',
      activeRing: 'ring-2 ring-[#E63946] border-red-300 shadow-sm',
      btnColor: 'bg-[#E63946] text-white hover:bg-red-700',
      accentColor: '#E63946'
    },
    specs: {
      volume: '200 ml',
      packaging: '200 ml Food-Grade PET Bottle',
      shelfLife: 'Best Before 3 Months From Date of Mfg.'
    },
    // Extracted from the supplied NEVE product label
    ingredients: [
      { name: 'Treated Water', purpose: 'Purified sparkling water foundation' },
      { name: 'Sugar', purpose: 'Pure cane sweetness (9g per 100ml)' },
      { name: 'CO2', purpose: 'Effervescent carbonation & sparkling fizz' },
      { name: 'Natural Salt', purpose: 'Electrolyte balance & crisp refreshing taste' },
      { name: 'Malic-Fumaric Acid', purpose: 'Acidity regulators for balanced tartness' },
      { name: 'Stabilising Agents', purpose: 'Smooth emulsion & texture consistency' }
    ],
    rawIngredients: 'Treated Water, Sugar, CO2, Natural Salt, Malic-Fumaric Acid, Stabilising Agents.',
    preservatives: ['Class II Preservative (211)'],
    syntheticColours: ['E-150-D'],
    syntheticColoursDisplay: 'E-150-D',
    syntheticColoursDetail: 'Synthetic Food Colour (E-150-D)',
    hasSyntheticColours: true,
    declarations: [
      'Contains Class II Preservative (211)',
      'Contains Synthetic Food Colour (E-150-D)',
      'No Fruit Added'
    ],
    rawDeclarations: 'Contains : Class II Preservative (211), Synthetic Food Colour (E-150-D), No Fruit Added.',
    allergens: ['100% Vegetarian', 'Gluten-free', 'Vegan', 'Nut-free', 'Dairy-free'],
    allergenNotice: '100% Vegetarian. Contains no common allergens (Gluten-free, Vegan, Nut-free, Dairy-free).',
    nutrition: {
      servingSize: '200 ml (1 bottle)',
      servingsPerBottle: 1,
      rawApproxText: 'Energy: 32 Kcal, Carbohydrate: 8 g, Sugar: 9 g, Protein: 0 g, Fat: 0 g (per 100 ml)',
      table: [
        { metric: 'Energy', nutrient: 'Energy', per100ml: '32 Kcal', perServing: '64 Kcal' },
        { metric: 'Carbohydrate', nutrient: 'Carbohydrate', per100ml: '8 g', perServing: '16 g' },
        { metric: 'Sugar', nutrient: 'Sugar', per100ml: '9 g', perServing: '18 g' },
        { metric: 'Protein', nutrient: 'Protein', per100ml: '0 g', perServing: '0 g' },
        { metric: 'Fat', nutrient: 'Fat', per100ml: '0 g', perServing: '0 g' }
      ]
    }
  },
  {
    id: 'orange-cola',
    name: 'Orange Cola',
    variant: "SAHEB SULTAN'S NEVE COOL Orange Cola",
    category: 'SWEETENED CARBONATED BEVERAGES',
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
      packaging: '200 ml Food-Grade PET Bottle',
      shelfLife: 'Best Before 3 Months From Date of Mfg.'
    },
    // Preserved official Orange flavour label information
    ingredients: [
      { name: 'Treated Water', purpose: 'Multi-stage purified sparkling water foundation' },
      { name: 'Sugar', purpose: 'Pure cane sweetness (9g per 100ml)' },
      { name: 'Carbon Dioxide (Co2)', purpose: 'Effervescent carbonation & sparkling fizz' },
      { name: 'Natural Salt', purpose: 'Electrolyte balance & crisp refreshing taste' },
      { name: 'Malic-Fumaric Acid', purpose: 'Acidity regulators for balanced tartness' },
      { name: 'Stabilising Agents', purpose: 'Smooth emulsion & texture consistency' }
    ],
    rawIngredients: 'Treated Water, Sugar, Co2, Natural Salt, Malic-Fumaric Acid, Stabilising Agents.',
    preservatives: ['Class II Preservative (211)'],
    syntheticColours: ['E-102', 'E-110'],
    syntheticColoursDisplay: 'E-102, E-110',
    syntheticColoursDetail: 'Permitted food-grade colouring: Tartrazine and Sunset Yellow (E-102, E-110).',
    hasSyntheticColours: true,
    declarations: [
      'Contains Class II Preservative (211)',
      'Contains Synthetic Food Colors (E-102, E-110)',
      'Permitted food-grade colouring: Tartrazine and Sunset Yellow',
      'No Fruit Added'
    ],
    rawDeclarations: 'Contains : Class II Preservate (211), Synthetic Food Colors (E-102, D-110) No Fruit Added. Permitted food-grade colouring: Tartrazine and Sunset Yellow.',
    allergens: ['100% Vegetarian', 'Gluten-free', 'Vegan', 'Nut-free', 'Dairy-free'],
    allergenNotice: '100% Vegetarian. Contains no common allergens (Gluten-free, Vegan, Nut-free, Dairy-free). No Fruit Added.',
    nutrition: {
      servingSize: '200 ml (1 bottle)',
      servingsPerBottle: 1,
      rawApproxText: 'Energy: 32 Kcal, Carbohydrate: 8 g, Sugar: 9 g, Protein: 0 g, Fat: 0 g (per 100 ml Approx)',
      table: [
        { metric: 'Energy', nutrient: 'Energy', per100ml: '32 Kcal', perServing: '64 Kcal' },
        { metric: 'Carbohydrate', nutrient: 'Carbohydrate', per100ml: '8 g', perServing: '16 g' },
        { metric: 'Sugar', nutrient: 'Sugar', per100ml: '9 g', perServing: '18 g' },
        { metric: 'Protein', nutrient: 'Protein', per100ml: '0 g', perServing: '0 g' },
        { metric: 'Fat', nutrient: 'Fat', per100ml: '0 g', perServing: '0 g' }
      ]
    }
  },
  {
    id: 'lime-cola',
    name: 'Lime Cola',
    variant: "SAHEB SULTAN'S NEVE COOL Lime Cola",
    category: 'SWEETENED CARBONATED BEVERAGES',
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
      packaging: '200 ml Food-Grade PET Bottle',
      shelfLife: 'Best Before 3 Months From Date of Mfg.'
    },
    ingredients: [
      { name: 'Treated Water', purpose: 'Purified sparkling water foundation' },
      { name: 'Sugar', purpose: 'Pure cane sweetness (9g per 100ml)' },
      { name: 'Carbon Dioxide (Co2)', purpose: 'Effervescent carbonation & sparkling fizz' },
      { name: 'Natural Salt', purpose: 'Electrolyte balance & crisp refreshing taste' },
      { name: 'Malic-Fumaric Acid', purpose: 'Acidity regulators for balanced tartness' },
      { name: 'Stabilising Agents', purpose: 'Smooth emulsion & texture consistency' }
    ],
    rawIngredients: 'Treated Water, Sugar, Co2, Natural Salt, Malic-Fumaric Acid, Stabilising Agents.',
    preservatives: ['Class II Preservative (211)'],
    syntheticColours: [],
    syntheticColoursDisplay: 'No added colours.',
    syntheticColoursDetail: 'No added colours.',
    hasSyntheticColours: false,
    declarations: [
      'Contains Class II Preservative (211)',
      'No added colours.',
      'No Fruit Added'
    ],
    rawDeclarations: 'Contains : Class II Preservative (211), No added colours. No Fruit Added.',
    allergens: ['100% Vegetarian', 'Gluten-free', 'Vegan', 'Nut-free', 'Dairy-free'],
    allergenNotice: '100% Vegetarian. Contains no common allergens (Gluten-free, Vegan, Nut-free, Dairy-free).',
    nutrition: {
      servingSize: '200 ml (1 bottle)',
      servingsPerBottle: 1,
      rawApproxText: 'Energy: 32 Kcal, Carbohydrate: 8 g, Sugar: 9 g, Protein: 0 g, Fat: 0 g (per 100 ml)',
      table: [
        { metric: 'Energy', nutrient: 'Energy', per100ml: '32 Kcal', perServing: '64 Kcal' },
        { metric: 'Carbohydrate', nutrient: 'Carbohydrate', per100ml: '8 g', perServing: '16 g' },
        { metric: 'Sugar', nutrient: 'Sugar', per100ml: '9 g', perServing: '18 g' },
        { metric: 'Protein', nutrient: 'Protein', per100ml: '0 g', perServing: '0 g' },
        { metric: 'Fat', nutrient: 'Fat', per100ml: '0 g', perServing: '0 g' }
      ]
    }
  }
];

/**
 * Helper to retrieve a flavour by ID with backwards compatibility for legacy IDs
 */
export function getFlavourById(id) {
  if (id === 'jeera-soda') id = 'classic-cola';
  if (id === 'orange-flavour') id = 'orange-cola';
  if (id === 'lime-soda') id = 'lime-cola';
  return flavours.find((f) => f.id === id) || flavours[0];
}

export function getFlavourKey(id) {
  if (id === 'classic-cola' || id === 'jeera-soda') return 'classicCola';
  if (id === 'orange-cola' || id === 'orange-flavour') return 'orangeCola';
  if (id === 'lime-cola' || id === 'lime-soda') return 'limeCola';
  return 'classicCola';
}

export function getIngredientKey(name) {
  if (!name) return null;
  const lower = name.toLowerCase();
  if (lower.includes('water')) return 'treatedWater';
  if (lower.includes('sugar')) return 'sugar';
  if (lower.includes('co2') || lower.includes('carbon dioxide')) return 'co2';
  if (lower.includes('salt')) return 'naturalSalt';
  if (lower.includes('malic') || lower.includes('fumaric')) return 'malicFumaric';
  if (lower.includes('stabili')) return 'stabilising';
  return null;
}

export default flavours;
