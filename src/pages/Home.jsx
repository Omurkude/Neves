import React, { useState } from 'react';
import {
  FileText,
  Leaf,
  BarChart3,
  Factory,
  ShieldCheck,
  Headphones
} from 'lucide-react';

import Navbar from '../components/layout/Navbar.jsx';
import Footer from '../components/layout/Footer.jsx';
import FlavourSection from '../components/products/FlavourSection.jsx';
import SelectedProductDetails from '../components/products/SelectedProductDetails.jsx';
import Accordion from '../components/details/Accordion.jsx';
import FSSAISection from '../components/details/FSSAISection.jsx';
import IngredientsSection from '../components/details/IngredientsSection.jsx';
import NutritionSection from '../components/details/NutritionSection.jsx';
import ManufacturingSection from '../components/details/ManufacturingSection.jsx';
import QualitySection from '../components/details/QualitySection.jsx';
import SupportSection from '../components/details/SupportSection.jsx';
import flavours from '../data/flavours.js';

export default function Home() {
  // State for selected flavour (defaults to the first flavour, Jeera Soda)
  const [selectedFlavourId, setSelectedFlavourId] = useState(flavours[0]?.id || 'jeera-soda');

  // State for accordions: FSSAI is open by default as in the reference screenshot
  const [openSections, setOpenSections] = useState({
    fssai: true,
    ingredients: false,
    nutrition: false,
    manufacturing: false,
    quality: false,
    support: false,
  });

  const toggleSection = (key) => {
    setOpenSections((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const selectedFlavour = flavours.find((f) => f.id === selectedFlavourId) || flavours[0];

  return (
    <div className="min-h-screen bg-white text-[#0B192C] flex flex-col font-dmsans selection:bg-[#E63946] selection:text-white">
      {/* 1. Navbar with NEVE branding and hamburger menu */}
      <Navbar />

      <main className="flex-1 max-w-3xl w-full mx-auto px-4 sm:px-6 pt-6 sm:pt-8">
        {/* 2. Hero Section: Uses Lilita One / Bebas Neue for the hero banner */}
        <section className="mb-6 sm:mb-8 text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-lilita text-[#0B192C] tracking-wide">
            Your Product Details
          </h1>
          <p className="mt-1 sm:mt-2 text-xs sm:text-sm md:text-base font-dmsans text-slate-500 leading-relaxed font-normal">
            Discover everything about our products — ingredients, nutrition, manufacturing details and more.
          </p>
        </section>

        {/* 3. Our Flavours Section (All 3 Product Cards) */}
        <FlavourSection
          selectedFlavourId={selectedFlavourId}
          onSelectFlavour={setSelectedFlavourId}
        />

        {/* 4. Selected Product Details (Interactive updates below the flavour cards) */}
        <SelectedProductDetails flavour={selectedFlavour} />

        {/* 5 & 6. Product Information Accordions List matching the screenshot order */}
        <section id="accordions" className="space-y-2 sm:space-y-2.5">
          {/* 5. FSSAI & Regulatory Details Accordion (Open by default) */}
          <div id="fssai-section" className="scroll-mt-16">
            <Accordion
              id="fssai"
              title="FSSAI & Regulatory Details"
              icon={FileText}
              isOpen={openSections.fssai}
              onToggle={() => toggleSection('fssai')}
            >
              <FSSAISection />
            </Accordion>
          </div>

          {/* 6.1 Ingredients & Allergen Information */}
          <div id="ingredients-section" className="scroll-mt-16">
            <Accordion
              id="ingredients"
              title="Ingredients & Allergen Information"
              icon={Leaf}
              isOpen={openSections.ingredients}
              onToggle={() => toggleSection('ingredients')}
            >
              <IngredientsSection />
            </Accordion>
          </div>

          {/* 6.2 Nutrition Facts & Calories */}
          <div id="nutrition-section" className="scroll-mt-16">
            <Accordion
              id="nutrition"
              title="Nutrition Facts & Calories"
              icon={BarChart3}
              isOpen={openSections.nutrition}
              onToggle={() => toggleSection('nutrition')}
            >
              <NutritionSection />
            </Accordion>
          </div>

          {/* 6.3 Manufacturing Address */}
          <div id="manufacturing-section" className="scroll-mt-16">
            <Accordion
              id="manufacturing"
              title="Manufacturing Address"
              icon={Factory}
              isOpen={openSections.manufacturing}
              onToggle={() => toggleSection('manufacturing')}
            >
              <ManufacturingSection />
            </Accordion>
          </div>

          {/* 6.4 Quality Assurance Reports */}
          <div id="quality-section" className="scroll-mt-16">
            <Accordion
              id="quality"
              title="Quality Assurance Reports"
              icon={ShieldCheck}
              isOpen={openSections.quality}
              onToggle={() => toggleSection('quality')}
            >
              <QualitySection />
            </Accordion>
          </div>

          {/* 6.5 Brand & Customer Support */}
          <div id="support-section" className="scroll-mt-16">
            <Accordion
              id="support"
              title="Brand & Customer Support"
              icon={Headphones}
              isOpen={openSections.support}
              onToggle={() => toggleSection('support')}
            >
              <SupportSection />
            </Accordion>
          </div>
        </section>
      </main>

      {/* 7. Footer: Red bar matching screenshot */}
      <Footer />
    </div>
  );
}
