/**
 * NEVE Regulatory, Manufacturing & Product Label Information
 * Extracted directly from official FSSAI License & Product Label
 */
export const productDetails = {
  brand: {
    name: 'NEVE COOL',
    fullName: "SAHEB SULTAN'S NEVE COOL",
    unitName: 'Saheb Sultan Industries',
    manufacturer: 'J M BANGAR',
    tagline: 'Unleash the Power of Refreshment..!'
  },

  fssai: {
    title: 'FSSAI & Regulatory Details',
    licenceNumber: '11525058000154',
    nameOfBusiness: 'JAGESHVAR MAHADEV BANGAR',
    unitName: 'Saheb Sultan Industries',
    tradeName: "SAHEB SULTAN'S NEVE COOL",
    address: 'Plot No. 191/1/B/6, Ashok Nagar, T.D. Bhandara, Maharashtra - 441906',
    shortAddress: 'Plot No. 191/1/B/6, Ashok Nagar, T.D. Bhandara, Maharashtra',
    foodCategory: '14 - Beverages, excluding dairy products (14.1 Non-alcoholic "soft" beverages / Carbonated Water [14.1.4.1])',
    productCategory: 'Sweetened Carbonated Beverages',
    kindOfBusiness: 'Manufacturer - General Manufacturing',
    categoryOfLicense: 'State License (Government of Maharashtra - FDA)',
    dateOfIssue: '10-11-2025',
    validUpto: '09-11-2028',
    place: 'Bhandara',
    state: 'Maharashtra',
    contactNumber: '7020906373',
    email: 'pariwartan74@gmail.com',
    disclaimer: 'This is a computer generated license and does not require any signature or stamp by authority.'
  },

  ingredientsInfo: {
    title: 'Ingredients & Allergen Information',
    category: 'Sweetened Carbonated Beverages',
    description: 'Crafted with purified treated water, pure cane sugar, natural salt, and effervescent sparkling carbonation.',
    baseIngredients: [
      { name: 'Treated Water', purpose: 'Foundation purified sparkling water' },
      { name: 'Sugar', purpose: 'Pure cane sweetness (9g / 100ml)' },
      { name: 'Carbon Dioxide (Co2)', purpose: 'Effervescent fizz & carbonation' },
      { name: 'Natural Salt', purpose: 'Electrolyte balance & crisp flavor profile' },
      { name: 'Malic-Fumaric Acid', purpose: 'Acidity regulators for balanced tartness' },
      { name: 'Stabilising Agents', purpose: 'Smooth emulsion & texture consistency' },
      { name: 'Class II Preservative (211)', purpose: 'Sodium Benzoate for freshness preservation' },
      { name: 'Synthetic Food Colors (E-102, D-110)', purpose: 'Permitted food-grade coloring' }
    ],
    declarations: [
      'Contains Class II Preservative (211)',
      'Contains Permitted Synthetic Food Colors (E-102, D-110)',
      'No Fruit Added'
    ],
    allergenNotice: '100% Vegetarian. Contains no common allergens (Gluten-free, Nut-free, Dairy-free, Vegan).'
  },

  nutritionInfo: {
    title: 'Nutrition Facts & Calories',
    servingSize: '200 ml (1 bottle)',
    servingsPerContainer: '1',
    generalTable: [
      { nutrient: 'Energy', per100ml: '32 Kcal', perServing: '64 Kcal' },
      { nutrient: 'Carbohydrate', per100ml: '8 g', perServing: '16 g' },
      { nutrient: 'Sugar', per100ml: '9 g', perServing: '18 g' },
      { nutrient: 'Protein', per100ml: '0 g', perServing: '0 g' },
      { nutrient: 'Fat', per100ml: '0 g', perServing: '0 g' }
    ],
    note: 'Values are approximate (Per 100ml) as declared on the official product label.'
  },

  manufacturingInfo: {
    title: 'Manufacturing Address',
    manufacturedBy: 'J M BANGAR',
    unitName: 'Saheb Sultan Industries',
    address: 'Plot No. 191/1/B/6, Ashok Nagar, T.D. Bhandara, Maharashtra.',
    customerCare: '7020906373',
    email: 'pariwartan74@gmail.com',
    netQuantity: '200 ml',
    mrp: 'Rs. 10/- (Incl. of all taxes)',
    batchNotice: 'Batch No. and Mfg. Date: SEE ON NECK / CAP',
    shelfLife: 'Best Before 3 Months From The Date of Mfg.',
    storageInstructions: 'Store in Cool & Dry Place. Keep Away From Direct Sun Light. Do not use if Seal is Broken. Serve Chilled.'
  },

  qualityInfo: {
    title: 'Quality Assurance Reports',
    overview: 'NEVE products are manufactured under strict FSSAI sanitary and hygienic guidelines (Schedule-4).',
    points: [
      { title: 'Treated Water Purification', description: 'Multi-stage reverse osmosis filtration and purification.' },
      { title: 'Quality Sealed Packaging', description: '200 ml food-grade PET bottles with tamper-evident seal.' },
      { title: 'Regulatory Compliance', description: 'State License No. 11525058000154 (FDA Maharashtra).' }
    ],
    certifications: ['FSSAI State Licensed', 'Make in India', 'Recyclable Container', '100% Vegetarian'],
    note: 'Manufactured by Saheb Sultan Industries under FSSAI License No. 11525058000154.'
  },

  supportInfo: {
    title: 'Brand & Customer Support',
    description: 'For consumer feedback, queries, or distributor inquiries, get in touch with our customer care:',
    helpline: '+91 70209 06373',
    email: 'pariwartan74@gmail.com',
    unitName: 'Saheb Sultan Industries',
    address: 'Plot No. 191/1/B/6, Ashok Nagar, T.D. Bhandara, Maharashtra.',
    hours: 'Mon – Sat: 9:30 AM to 6:30 PM IST'
  }
};

export default productDetails;
