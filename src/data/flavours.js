/**
 * NEVE Product Flavours Data
 * Three signature varieties: Classic Cola, Lime Cola, Orange Cola
 */
export const flavours = [
  {
    id: 'classic-cola',
    name: 'Classic Cola',
    variant: 'Signature Blend',
    tagline: 'Bold, Effervescent & Distinctly Refreshing',
    description: 'Our foundational cola recipe brewed with selected botanical essences and rich caramelized notes for an unmistakably crisp, timeless finish.',
    theme: {
      id: 'classic',
      pastelBg: 'bg-[#FFF5F5]',
      borderHover: 'hover:border-red-300',
      activeBorder: 'border-red-500',
      badgeBg: 'bg-red-100',
      badgeText: 'text-red-700',
      accentColor: '#E63946',
      accentBg: 'bg-[#E63946]',
      bottleGradient: {
        cap: '#991B1B',
        neck: '#B91C1C',
        bodyStart: '#2A0808',
        bodyEnd: '#130404',
        accentGlow: '#E63946',
        label: '#991B1B'
      }
    },
    specs: {
      volume: '250 ml / 330 ml',
      carbonation: 'High Crisp',
      caffeine: 'Natural (< 32mg)',
      caloriesPerServing: '42 kcal / 100ml'
    },
    tastingNotes: ['Madagascar Vanilla', 'Kola Nut Extract', 'Warm Spices', 'Subtle Citrus'],
    sensoryProfile: [
      { label: 'Fizz Level', value: 92 },
      { label: 'Sweetness', value: 68 },
      { label: 'Crispness', value: 95 }
    ]
  },
  {
    id: 'lime-cola',
    name: 'Lime Cola',
    variant: 'Zesty Twist',
    tagline: 'Sun-Drenched Citrus Infused with Sparkling Cola',
    description: 'An invigorating fusion of cold-pressed Key lime zest and sparkling cola botanicals. Balanced tartness that awakens your palate with every sip.',
    theme: {
      id: 'lime',
      pastelBg: 'bg-[#F2FBF7]',
      borderHover: 'hover:border-emerald-300',
      activeBorder: 'border-emerald-500',
      badgeBg: 'bg-emerald-100',
      badgeText: 'text-emerald-800',
      accentColor: '#059669',
      accentBg: 'bg-emerald-600',
      bottleGradient: {
        cap: '#065F46',
        neck: '#047857',
        bodyStart: '#13281E',
        bodyEnd: '#091510',
        accentGlow: '#10B981',
        label: '#047857'
      }
    },
    specs: {
      volume: '250 ml / 330 ml',
      carbonation: 'Ultra Effervescent',
      caffeine: 'Natural (< 30mg)',
      caloriesPerServing: '39 kcal / 100ml'
    },
    tastingNotes: ['Cold-Pressed Key Lime', 'Citrus Blossom', 'Caramelized Kola', 'Herbal Hint'],
    sensoryProfile: [
      { label: 'Fizz Level', value: 96 },
      { label: 'Sweetness', value: 60 },
      { label: 'Zestiness', value: 94 }
    ]
  },
  {
    id: 'orange-cola',
    name: 'Orange Cola',
    variant: 'Citrus Fusion',
    tagline: 'Vibrant Valencia Orange Harmonized with Rich Cola',
    description: 'Juicy Mediterranean Valencia orange oils harmonized with smooth caramel notes, offering a lush, sun-soaked burst of effervescence.',
    theme: {
      id: 'orange',
      pastelBg: 'bg-[#FFF8F0]',
      borderHover: 'hover:border-amber-300',
      activeBorder: 'border-orange-500',
      badgeBg: 'bg-orange-100',
      badgeText: 'text-orange-800',
      accentColor: '#EA580C',
      accentBg: 'bg-orange-600',
      bottleGradient: {
        cap: '#9A3412',
        neck: '#C2410C',
        bodyStart: '#2F1A0E',
        bodyEnd: '#170B05',
        accentGlow: '#F97316',
        label: '#C2410C'
      }
    },
    specs: {
      volume: '250 ml / 330 ml',
      carbonation: 'Crisp Balanced',
      caffeine: 'Natural (< 30mg)',
      caloriesPerServing: '40 kcal / 100ml'
    },
    tastingNotes: ['Valencia Orange Peel', 'Sweet Mandarin', 'Spiced Caramel', 'Warm Clove'],
    sensoryProfile: [
      { label: 'Fizz Level', value: 89 },
      { label: 'Sweetness', value: 72 },
      { label: 'Citrus Burst', value: 91 }
    ]
  }
];

export default flavours;
