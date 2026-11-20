/**
 * NEVE Regulatory, Manufacturing & Product Label Information
 * Sourced directly from official Saheb Sultan Industries Product Label
 * and FSSAI License No. 11525058000154 (FDA Maharashtra)
 */
export const productDetails = {
  brand: {
    name: 'NEVE COOL',
    fullName: "SAHEB SULTAN'S NEVE COOL",
    unitName: 'Saheb Sultan Industries',
    manufacturer: 'J M BANGAR',
    tagline: 'Unleash the power of Refreshment..!'
  },

  fssai: {
    title: 'FSSAI & Regulatory Details',
    licenceNumber: '11525058000154',
    nameOfBusiness: 'JAGESHVAR MAHADEV BANGAR',
    unitName: 'Saheb Sultan Industries',
    tradeName: "SAHEB SULTAN'S NEVE COOL",
    address: 'GAT NO.191/1/B/6 ASHOK NAGAR TAH. DIST. BHANDARA MH-441906, Bhandara, Maharashtra - 441906',
    shortAddress: 'Plot No. 191/1/B/6, Ashok Nagar, T.D. Bhandara, Maharashtra',
    foodCategory: '14 - Beverages, excluding dairy products (14.1 - Non-alcoholic ("soft") beverages / Carbonated Water [14.1.4.1])',
    productCategory: 'Sweetened Carbonated Beverages',
    kindOfBusiness: 'Manufacturer - General Manufacturing',
    categoryOfLicense: 'State License (Government of Maharashtra - FDA)',
    dateOfIssue: '10-11-2025',
    validUpto: '09-11-2028',
    place: 'Bhandara',
    state: 'Maharashtra',
    contactNumber: '+91 70209 06373',
    email: 'pariwartan74@gmail.com',
    disclaimer: 'This is a computer generated license and does not require any signature or stamp by authority.'
  },

  ingredientsInfo: {
    title: 'Ingredients & Allergen Information',
    category: 'SWEETENED CARBONATED BEVERAGES',
    description: 'Crafted with purified treated water, pure cane sugar, effervescent sparkling carbonation, natural salt, and balanced acidity regulators.',
    rawLabelText: 'Treated Water, Sugar, Co2, Natural Salt, Malic-Fumaric Acid, Stabilising Agents.',
    rawDeclarationsText: 'Contains : Class II Preservate (211), Synthetic Food Colors (E-102, D-110) No Fruit Added.',
    baseIngredients: [
      { name: 'Treated Water', purpose: 'Multi-stage purified sparkling water foundation' },
      { name: 'Sugar', purpose: 'Pure cane sweetness (9g per 100ml)' },
      { name: 'Carbon Dioxide (Co2)', purpose: 'Effervescent fizz & sparkling carbonation' },
      { name: 'Natural Salt', purpose: 'Electrolyte balance & crisp refreshing taste' },
      { name: 'Malic-Fumaric Acid', purpose: 'Acidity regulators for balanced tartness' },
      { name: 'Stabilising Agents', purpose: 'Smooth emulsion & texture consistency' },
      { name: 'Class II Preservative (211)', purpose: 'Sodium Benzoate for freshness preservation' },
      { name: 'Synthetic Food Colors (E-102, D-110)', purpose: 'Permitted food-grade coloring (Tartrazine & Sunset Yellow)' }
    ],
    declarations: [
      'Contains Class II Preservative (211)',
      'Contains Synthetic Food Colors (E-102, D-110)',
      'No Fruit Added'
    ],
    allergenNotice: '100% Vegetarian. Contains no common allergens (Gluten-free, Vegan, Nut-free, Dairy-free).'
  },

  nutritionInfo: {
    title: 'Nutrition Facts & Calories',
    servingSize: '200 ml (1 bottle)',
    servingsPerContainer: '1',
    netQuantity: '200 ml',
    mrp: 'Rs. 10/-',
    rawApproxText: 'Energy: 32 Kcal, Carbohydrate: 8g, Sugar: 9g, Protein: 0g, Fat: 0g (Per 100ml Approx)',
    generalTable: [
      { nutrient: 'Energy', per100ml: '32 Kcal', perServing: '64 Kcal' },
      { nutrient: 'Carbohydrate', per100ml: '8 g', perServing: '16 g' },
      { nutrient: 'Sugar', per100ml: '9 g', perServing: '18 g' },
      { nutrient: 'Protein', per100ml: '0 g', perServing: '0 g' },
      { nutrient: 'Fat', per100ml: '0 g', perServing: '0 g' }
    ],
    note: 'Values are approximate (Per 100ml) as declared on the official SAHEB SULTAN\'S NEVE COOL product label.'
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
    overview: 'NEVE COOL beverages are manufactured under strict sanitary standards in compliance with FSSAI Food Safety regulations (Schedule-4).',
    points: [
      { title: 'Treated Water Purification', detail: 'Multi-stage filtration, reverse osmosis and UV sterilization.' },
      { title: 'Quality Sealed Packaging', detail: '200 ml food-grade PET bottles with tamper-evident seal maintaining carbonation.' },
      { title: 'Regulatory Compliance', detail: 'Manufactured under State License No. 11525058000154 (FDA Maharashtra).' }
    ],
    certifications: ['FSSAI State Licensed', 'Make in India', 'Recyclable PET', '100% Vegetarian'],
    reportNotice: 'Manufactured by Saheb Sultan Industries under FSSAI License No. 11525058000154.'
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
