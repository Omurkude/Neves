/**
 * NEVE Regulatory, Nutritional & Corporate Information
 * 
 * COMPLIANCE & PRIVACY NOTICE:
 * This data file stores product specifications for transparency.
 * Regulatory identifiers use strict placeholder syntax per privacy rules.
 * No synthetic or unverified regulatory licenses are utilized.
 */
export const productDetails = {
  brand: {
    name: 'NEVE',
    legalName: 'NEVE Beverages Private Limited',
    tagline: 'Pure Refreshment. Verified Transparency.',
    about: 'NEVE is an artisanal sparkling beverage brand dedicated to uncompromised ingredient integrity, bold botanical flavour profiles, and complete product transparency for consumers.',
    customerPortal: 'https://neve-beverages.com',
    batchQueryHelp: 'Scan the QR on your container to verify real-time batch testing records.'
  },

  fssai: {
    title: 'Food Safety & Standards Authority of India (FSSAI)',
    licenseStatus: 'Regulatory Review / Pending Publication',
    licensePlaceholder: 'Lic. No. [100XXXXXXXXXXXXXXXX]',
    subText: 'Official State & Central FSSAI License IDs will be published upon regulatory certification issuance.',
    category: 'Carbonated Fruit Beverage / Non-Alcoholic Flavoured Carbonated Drink',
    actCompliance: 'Manufactured and bottled in compliance with the Food Safety and Standards (Food Products Standards and Food Additives) Regulations.',
    verificationPortalUrl: 'https://foscos.fssai.gov.in',
    displayNotice: 'Per regulatory privacy safeguards, direct operational license certificates will be accessible upon government portal public listing.',
    disclaimer: 'The QR code on the can directly points to this public consumer transparency portal.'
  },

  ingredients: {
    summary: 'Crafted with premium carbonated treated water, refined cane sweetness, nature-identical flavouring essences, and botanical kola extract.',
    items: [
      {
        name: 'Treated Carbonated Water',
        purpose: 'Multi-stage reverse osmosis purified sparkling water with natural mineral replenishment'
      },
      {
        name: 'Refined Cane Sweetener',
        purpose: 'Non-GMO refined sugar providing clean sweetness without metallic aftertaste'
      },
      {
        name: 'Acidity Regulators (INS 330, INS 338)',
        purpose: 'Food-grade citric and phosphoric acid for the signature crisp tart balance'
      },
      {
        name: 'Natural Colour (INS 150d)',
        purpose: 'Sulphite ammonia caramel delivering rich, authentic cola tone'
      },
      {
        name: 'Natural & Nature-Identical Flavours',
        purpose: 'Cold-pressed citrus oils (Lime / Orange) and botanical kola nut extracts'
      },
      {
        name: 'Natural Caffeine (< 145 mg/kg)',
        purpose: 'Mild uplifting tonic extracted from green coffee beans'
      }
    ],
    allergens: {
      hasAllergens: false,
      statement: 'Contains NO major allergens. Free from gluten, dairy, tree nuts, peanuts, soy, and eggs.',
      veganCertified: true,
      gmoFree: true
    }
  },

  nutrition: {
    servingSize: '250 ml (1 Can / Cup)',
    per100ml: 'Per 100 ml',
    disclaimer: 'Values are indicative laboratory averages based on standard beverage formulation batches.',
    table: [
      { nutrient: 'Energy', per100ml: '42 kcal', perServing: '105 kcal', rdaPercent: '5.25%' },
      { nutrient: 'Carbohydrates', per100ml: '10.5 g', perServing: '26.25 g', rdaPercent: '-' },
      { nutrient: 'Total Sugars', per100ml: '10.2 g', perServing: '25.5 g', rdaPercent: '-' },
      { nutrient: 'Added Sugars', per100ml: '9.8 g', perServing: '24.5 g', rdaPercent: '49%' },
      { nutrient: 'Dietary Fibre', per100ml: '0.0 g', perServing: '0.0 g', rdaPercent: '0%' },
      { nutrient: 'Protein', per100ml: '0.0 g', perServing: '0.0 g', rdaPercent: '0%' },
      { nutrient: 'Total Fat', per100ml: '0.0 g', perServing: '0.0 g', rdaPercent: '0%' },
      { nutrient: 'Saturated Fat', per100ml: '0.0 g', perServing: '0.0 g', rdaPercent: '0%' },
      { nutrient: 'Trans Fat', per100ml: '0.0 g', perServing: '0.0 g', rdaPercent: '0%' },
      { nutrient: 'Sodium', per100ml: '8.4 mg', perServing: '21.0 mg', rdaPercent: '1.05%' }
    ],
    highlights: [
      { label: 'Energy', value: '105 kcal', sub: 'per 250ml serving' },
      { label: 'Fat', value: '0.0 g', sub: '100% Fat Free' },
      { label: 'Sodium', value: '21 mg', sub: 'Low Sodium' },
      { label: 'Preservatives', value: '0%', sub: 'No Artificial Benzoates' }
    ]
  },

  manufacturing: {
    manufacturedBy: {
      title: 'Bottling & Packaging Facility',
      facilityName: '[Certified Contract Packaging Unit - Unit 04]',
      industrialZone: 'Mega Food Park Industrial Corridor',
      cityState: 'Sector 18, Phase III, Pune, Maharashtra - 411001',
      country: 'India',
      facilityCertifications: ['ISO 22000:2018', 'HACCP Facility Certified', 'GMP Standard']
    },
    marketedBy: {
      title: 'Brand Owner & Marketing Office',
      company: 'NEVE Beverages Private Limited',
      address: 'Skyline Business Tower, 5th Floor, Bandra-Kurla Complex',
      cityState: 'Mumbai, Maharashtra - 400051',
      country: 'India'
    },
    batchCodingGuide: {
      location: 'Printed on the base of the aluminium can or neck of the PET bottle',
      formatExample: 'B.No: NV-2611A | MFD: 15/11/26 | EXP: 14/05/27',
      shelfLife: 'Best before 6 months from the date of manufacture when stored in cool, dry conditions away from direct sunlight.',
      storageAdvice: 'Store clean, dry and away from heat. Serve chilled for optimal effervescence.'
    }
  },

  qualityAssurance: {
    title: 'Quality Assurance & Purity Standards',
    overview: 'Every single batch of NEVE undergoes rigorous in-line sensory, chemical, and microbiological checks before packaging release.',
    pillars: [
      {
        title: '7-Stage Water Purification',
        description: 'Treated through dual sediment filtration, activated granular carbon, dual-pass reverse osmosis, and ultraviolet sterilization.'
      },
      {
        title: 'Batch Traceability',
        description: 'Every production lot is assigned a traceable internal batch code linked to raw ingredient origins and laboratory assays.'
      },
      {
        title: 'Microbiological Testing',
        description: 'Zero tolerance for pathogens with 48-hour incubation cultures performed in independent NABL-accredited test facilities.'
      },
      {
        title: 'BPA-Free Food Grade Packaging',
        description: '100% recyclable aluminium cans with certified food-grade water-based internal protective liner coatings.'
      }
    ],
    labNotice: 'Third-party certified laboratory analysis sheets are archived per batch. Consumers may request specific batch assay certificates via support.'
  },

  support: {
    title: 'Customer Care & Grievance Redressal',
    tagline: 'We are committed to delivering the highest beverage quality. Reach out with queries, feedback, or batch verification checks.',
    contactChannels: [
      {
        type: 'Consumer Care Toll-Free',
        value: '1800-266-NEVE (6383)',
        note: 'Mon - Sat: 9:00 AM - 6:30 PM IST',
        href: 'tel:18002666383'
      },
      {
        type: 'Email Support',
        value: 'care@nevebeverages.com',
        note: 'Response within 24 business hours',
        href: 'mailto:care@nevebeverages.com'
      },
      {
        type: 'Registered Grievance Desk',
        value: 'Executive Consumer Affairs, NEVE Beverages Pvt Ltd',
        note: 'BKC, Bandra East, Mumbai - 400051',
        href: null
      }
    ],
    qrNotice: 'Scanning the QR code on your NEVE can directly connects you to this authenticated product info registry.'
  }
};

export default productDetails;
