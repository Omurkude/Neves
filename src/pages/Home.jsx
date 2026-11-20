import React, { useState } from 'react';
import {
  FileText,
  Leaf,
  BarChart3,
  Factory,
  ShieldCheck,
  Headphones,
  Zap,
  Sparkles,
  Flame
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
  // State for selected flavour (defaults to Jeera Soda)
  const [selectedFlavourId, setSelectedFlavourId] = useState(flavours[0]?.id || 'jeera-soda');

  // State for accordions: FSSAI is open by default
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
    <div className="min-h-screen bg-[#FAF8F5] text-[#0B192C] flex flex-col font-dmsans selection:bg-[#E63946] selection:text-white">
      {/* 1. Header with authentic brand logo and WhatsApp order action */}
      <Navbar />

      <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 pt-6 sm:pt-10">
        {/* 2. Hero Section: Punchy, Human, Hand-crafted Beverage Headline */}
        <section className="mb-6 sm:mb-8 text-center sm:text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E63946]/10 border border-[#E63946]/30 text-[#E63946] text-xs font-baloo font-bold uppercase tracking-wider mb-2.5">
            <Zap className="w-3.5 h-3.5 fill-current" />
            <span>SAHEB SULTAN'S BHANDARA BOTTLING UNIT</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-lilita text-[#0B192C] tracking-tight leading-[1.02] uppercase">
            ICE COLD DESI SODA.
          </h1>

          <p className="mt-2 text-sm sm:text-base md:text-lg font-dmsans text-slate-700 leading-relaxed font-medium max-w-2xl">
            200ml of high-effervescence carbonated soda at just <strong>₹10</strong>. Sourced, licensed, and bottled fresh in Bhandara, Maharashtra.
          </p>

          {/* Quick Value Proof Chips */}
          <div className="mt-4 flex flex-wrap items-center justify-center sm:justify-start gap-2 text-xs font-baloo">
            <span className="px-3 py-1 rounded-lg bg-[#FACC15] text-[#0B192C] font-black shadow-xs">
              M.R.P. ₹10 ONLY
            </span>
            <span className="px-3 py-1 rounded-lg bg-emerald-100 text-emerald-900 border border-emerald-300 font-bold">
              100% VEGETARIAN
            </span>
            <span className="px-3 py-1 rounded-lg bg-blue-100 text-blue-900 border border-blue-300 font-bold">
              FSSAI LIC. 11525058000154
            </span>
            <span className="px-3 py-1 rounded-lg bg-orange-100 text-orange-900 border border-orange-300 font-bold">
              200 ML BOTTLE
            </span>
          </div>
        </section>

        {/* 3. Signature Slanted Brand Divider */}
        <div className="relative my-6 sm:my-8 -mx-4 sm:-mx-6 overflow-hidden">
          <div className="transform -rotate-1 bg-[#E63946] text-white py-2 px-4 shadow-md flex items-center justify-around font-lilita text-xs sm:text-sm tracking-widest uppercase select-none">
            <span>★ ICE COLD DESI SODA ★</span>
            <span className="hidden sm:inline">★ 200ML CHILLED BOTTLE ★</span>
            <span>★ ONLY ₹10 MRP ★</span>
            <span className="hidden sm:inline">★ ROASTED JEERA • LIME • ORANGE ★</span>
            <span>★ FDA MAHARASHTRA ★</span>
          </div>
        </div>

        {/* 4. Our Flavours Section: 3 Bold Saturated Flavor Cards */}
        <FlavourSection
          selectedFlavourId={selectedFlavourId}
          onSelectFlavour={setSelectedFlavourId}
        />

        {/* 5. Selected Product Details Section: Bold Heading, Taste Notes, WhatsApp CTA */}
        <SelectedProductDetails flavour={selectedFlavour} />

        {/* 6. Signature Slanted Divider before Statutory Documentation */}
        <div className="relative my-8 sm:my-10 -mx-4 sm:-mx-6 overflow-hidden">
          <div className="transform rotate-1 bg-[#0B192C] text-[#FACC15] py-2 px-4 shadow-md flex items-center justify-around font-lilita text-xs sm:text-sm tracking-widest uppercase select-none">
            <span>◆ OFFICIAL FSSAI COMPLIANCE ◆</span>
            <span className="hidden sm:inline">◆ SAHEB SULTAN INDUSTRIES ◆</span>
            <span>◆ 100% VERIFIED REGULATORY DETAILS ◆</span>
          </div>
        </div>

        {/* 7. Product Information Accordions List matching the reference order */}
        <section id="accordions" className="space-y-3 sm:space-y-3.5 mb-12">
          <div className="mb-4">
            <span className="text-[11px] font-baloo font-black uppercase tracking-wider text-[#E63946] block">
              CONSUMER PORTAL & VERIFICATION
            </span>
            <h2 className="text-2xl sm:text-3xl font-lilita text-[#0B192C] tracking-tight">
              REGULATORY & PRODUCT SPECIFICATIONS
            </h2>
          </div>

          {/* 7.1 FSSAI & Regulatory Details Accordion (Open by default) */}
          <div id="fssai-section" className="scroll-mt-20">
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

          {/* 7.2 Ingredients & Allergen Information Accordion */}
          <div id="ingredients-section" className="scroll-mt-20">
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

          {/* 7.3 Nutrition Facts & Calories Accordion */}
          <div id="nutrition-section" className="scroll-mt-20">
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

          {/* 7.4 Manufacturing Address */}
          <div id="manufacturing-section" className="scroll-mt-20">
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

          {/* 7.5 Quality Assurance Reports */}
          <div id="quality-section" className="scroll-mt-20">
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

          {/* 7.6 Brand & Customer Support */}
          <div id="support-section" className="scroll-mt-20">
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

      {/* 8. Footer: Hand-crafted beverage brand footer */}
      <Footer />
    </div>
  );
}
