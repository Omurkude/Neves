# NEVE — Product Information Website

A mobile-first static product information website for **NEVE**, a premium beverage brand.

Visitors scan a QR code printed on NEVE beverage product stickers to access this verification and product information portal on their smartphones.

## Key Objectives

- **Brand Story & Values:** Showcase the NEVE beverage identity.
- **Flavour Showcase:** Present distinct beverage variants and taste profiles.
- **Transparency & Nutrition:** Clear breakdown of nutritional metrics and verified ingredients.
- **Regulatory Compliance:** Display verified FSSAI licence information, batch indicators, and manufacturing details.
- **Quality Assurance:** Highlights testing, purity standards, and certification.
- **Customer Care:** Contact, redressal, and feedback pathways.

---

## Technology Stack

- **Framework:** React 19
- **Build Tool:** Vite
- **Styling:** Tailwind CSS (configured with the official `@tailwindcss/vite` plugin)
- **Icons:** Lucide React
- **Design Philosophy:** Mobile-first, responsive, clean, modern premium beverage branding.

---

## Project Structure

```
neve-website (current workspace)
│
├── public/
│   └── images/
│       ├── flavours/         # Product variant photography
│       └── certificates/     # Verified regulatory certificates
│
├── src/
│   ├── assets/
│   │   └── images/           # Brand static assets and graphics
│   │
│   ├── components/
│   │   ├── layout/           # Global navigation and footer
│   │   │   ├── Navbar.jsx
│   │   │   └── Footer.jsx
│   │   │
│   │   ├── products/         # Product flavour cards and sections
│   │   │   ├── FlavourCard.jsx
│   │   │   └── FlavourSection.jsx
│   │   │
│   │   ├── details/          # Accordions and information sections
│   │   │   ├── Accordion.jsx
│   │   │   ├── FSSAISection.jsx
│   │   │   ├── IngredientsSection.jsx
│   │   │   ├── NutritionSection.jsx
│   │   │   ├── ManufacturingSection.jsx
│   │   │   └── QualitySection.jsx
│   │   │   └── SupportSection.jsx
│   │   │
│   │   └── common/           # Shared reusable presentation components
│   │       ├── SectionHeading.jsx
│   │       └── PlaceholderImage.jsx
│   │
│   ├── data/                 # Separated data stores for easy updates
│   │   ├── flavours.js
│   │   └── productDetails.js
│   │
│   ├── pages/                # Page views
│   │   └── Home.jsx
│   │
│   ├── App.jsx               # Application root
│   ├── main.jsx              # Entry point
│   └── index.css             # Tailwind CSS & design tokens
│
├── .gitignore
├── package.json
├── vite.config.js
└── README.md
```

---

## Design System Foundation

- **Primary Background:** `#FFFFFF` (Clean, crisp white)
- **Primary Text / Heading:** `#0B192C` (Deep premium navy)
- **Secondary Text:** `#1E3E62` (Subtle navy)
- **Accent Brand Color:** `#E63946` (Signature vibrant red)
- **Accent Hover:** `#D62828`
- **Pastel Card Surfaces:**
  - Blue: `#F0F4F8`
  - Mint: `#F2FBF7`
  - Peach: `#FFF6F0`
  - Citrus: `#FFFDF0`
  - Berry: `#FDF2F4`

---

## Regulatory and Privacy Guidelines

- All FSSAI licensing and certificate details are strictly placeholder-managed during initialization and development.
- No synthetic or fictional FSSAI numbers are used.
- Ingredients and nutritional panels remain separated in `src/data/productDetails.js` until certified lab data is verified.

---

## Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

### 3. Build for Production
```bash
npm run build
```

### 4. Preview Production Build
```bash
npm run preview
```

---

## Git Workflow

- **Branch:** `main` serves as the primary stable branch.
- **Commits:** Conventional Commits (`feat:`, `chore:`, `fix:`, `docs:`, `refactor:`).
