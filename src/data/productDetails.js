/**
 * NEVE Regulatory, Manufacturing & Customer Information
 * Closely matches the reference layout while preserving privacy standards.
 */
export const productDetails = {
  brand: {
    name: 'NEVE',
    legalName: 'NEVE Beverages Pvt. Ltd.',
    tagline: 'Pure Refreshment.'
  },

  fssai: {
    title: 'FSSAI & Regulatory Details',
    licenceNumber: '100XXXXXXXXXXXXXXXX',
    nameOfBusiness: 'NEVE Beverages Pvt. Ltd.',
    address: 'Plot No. 12, Industrial Area, Phase II, [City, State - PIN Placeholder]',
    foodCategory: '14.1.4 – Non-alcoholic beverages (Flavoured carbonated drinks)',
    kindOfBusiness: 'Manufacturer (Non-Alcoholic Beverages)',
    dateOfIssue: '[Issue Date Placeholder]',
    validUpto: '[Validity Date Placeholder]',
    disclaimer: 'This is a system generated licence and does not require signature.'
  },

  ingredientsInfo: {
    title: 'Ingredients & Allergen Information',
    items: [
      { name: 'Carbonated Water', role: 'Treated, purified sparkling water foundation' },
      { name: 'Sugar', role: 'Pure refined cane sugar for clean sweetness' },
      { name: 'Acidity Regulators (INS 338, INS 330)', role: 'Balanced tartness and crisp effervescence' },
      { name: 'Natural Colour (INS 150d)', role: 'Authentic rich caramel tone' },
      { name: 'Natural Flavouring Substances', role: 'Botanical kola nut extract and cold-pressed citrus essences' },
      { name: 'Caffeine', role: 'Natural mild stimulant (< 145 mg/kg)' }
    ],
    allergenNotice: 'Contains no common allergens (Gluten-free, Nut-free, Dairy-free, 100% Vegan).'
  },

  nutritionInfo: {
    title: 'Nutrition Facts & Calories',
    servingSize: '250 ml (1 bottle / can)',
    servingsPerContainer: '1',
    table: [
      { metric: 'Energy', per100ml: '42 kcal', perServing: '105 kcal' },
      { metric: 'Carbohydrates', per100ml: '10.5 g', perServing: '26.25 g' },
      { metric: 'Total Sugars', per100ml: '10.2 g', perServing: '25.5 g' },
      { metric: 'Added Sugars', per100ml: '9.8 g', perServing: '24.5 g' },
      { metric: 'Protein', per100ml: '0.0 g', perServing: '0.0 g' },
      { metric: 'Total Fat', per100ml: '0.0 g', perServing: '0.0 g' },
      { metric: 'Sodium', per100ml: '8.4 mg', perServing: '21.0 mg' }
    ],
    note: 'Approximate laboratory average values based on standard beverage batches.'
  },

  manufacturingInfo: {
    title: 'Manufacturing Address',
    manufacturedBy: 'NEVE Beverages Pvt. Ltd., Plot No. 12, Industrial Area, Phase II, [City, State - PIN Placeholder]',
    marketedBy: 'NEVE Beverages Pvt. Ltd., [Corporate Office Address Placeholder]',
    batchDetails: 'Batch Number, MFD Date, and Expiry Date are printed on the neck of the bottle or bottom of the can.',
    storageInstructions: 'Store in a clean, cool, and dry place away from direct sunlight. Best served chilled.'
  },

  qualityInfo: {
    title: 'Quality Assurance Reports',
    overview: 'NEVE products undergo rigorous quality controls across every production batch.',
    points: [
      { title: 'Water Purification', description: 'Multi-stage reverse osmosis and UV sterilization.' },
      { title: 'Microbiological Safety', description: 'Batch-wise incubation culture testing ensuring purity.' },
      { title: 'Quality Packaging', description: 'Certified food-grade glass and recyclable aluminium containers.' }
    ],
    note: 'Detailed batch quality and assay reports are archived and available on request.'
  },

  supportInfo: {
    title: 'Brand & Customer Support',
    helpline: '1800-XXX-NEVE',
    email: 'care@nevebeverages.com',
    address: 'NEVE Consumer Care Cell, Plot No. 12, Industrial Area, Phase II, [City, State - PIN Placeholder]',
    hours: 'Mon – Sat: 9:30 AM to 6:00 PM IST'
  }
};

export default productDetails;
