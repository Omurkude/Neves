import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
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
import CertificationMarquee from '../components/layout/CertificationMarquee.jsx';
import FlavourSection from '../components/products/FlavourSection.jsx';
import SelectedProductDetails from '../components/products/SelectedProductDetails.jsx';
import Accordion from '../components/details/Accordion.jsx';
import FSSAISection from '../components/details/FSSAISection.jsx';
import IngredientsSection from '../components/details/IngredientsSection.jsx';
import NutritionSection from '../components/details/NutritionSection.jsx';
import ManufacturingSection from '../components/details/ManufacturingSection.jsx';
import QualitySection from '../components/details/QualitySection.jsx';
import SupportSection from '../components/details/SupportSection.jsx';
import flavours, { getFlavourById } from '../data/flavours.js';

export default function Home() {
  const { t } = useTranslation();

  // State for selected flavour (defaults to Classic Cola)
  const [selectedFlavourId, setSelectedFlavourId] = useState(flavours[0]?.id || 'classic-cola');

  // State for accordions: FSSAI is open by default
  const [openSections, setOpenSections] = useState({
    fssai: true,
    ingredients: false,
    nutrition: false,
    manufacturing: false,
    quality: false,
    support: false,
  });

  // Current selected flavour object drives all product details
  const selectedFlavour = getFlavourById(selectedFlavourId);

  const toggleSection = (key) => {
    setOpenSections((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="min-h-screen bg-white text-[#0B192C] flex flex-col font-sans selection:bg-[#E63946] selection:text-white">
      {/* 1. Navbar with NEVE branding and hamburger menu */}
      <Navbar />

      <main className="flex-1 max-w-3xl w-full mx-auto px-4 sm:px-6 pt-6 sm:pt-8">
        {/* 2. Hero Section: Default clean text style */}
        <section className="mb-6 sm:mb-8 text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B192C] tracking-tight">
            {t('hero.title', 'Product Details')}
          </h1>
          <p className="mt-1 sm:mt-2 text-xs sm:text-sm md:text-base text-slate-500 leading-relaxed font-normal">
            {t('hero.subtitle', 'Discover everything about our products — ingredients, nutrition, manufacturing and regulatory details.')}
          </p>
        </section>

        {/* 3. Our Flavours Section (3 Interactive Product Cards) */}
        <FlavourSection
          selectedFlavourId={selectedFlavourId}
          onSelectFlavour={setSelectedFlavourId}
        />

        {/* 4. Active Selected Product Details (Dynamically updates on selection) */}
        <SelectedProductDetails flavour={selectedFlavour} />

        {/* 5. Product Information Accordions List */}
        <section id="accordions" className="space-y-2 sm:space-y-2.5 mb-8 sm:mb-12">
          {/* 5.1 FSSAI & Regulatory Details Accordion (Open by default) */}
          <div id="fssai-section" className="scroll-mt-16">
            <Accordion
              id="fssai"
              title={t('accordions.fssaiTitle', 'FSSAI & Regulatory Details')}
              icon={FileText}
              isOpen={openSections.fssai}
              onToggle={() => toggleSection('fssai')}
            >
              <FSSAISection />
            </Accordion>
          </div>

          {/* 5.2 Ingredients & Allergen Information Accordion */}
          <div id="ingredients-section" className="scroll-mt-16">
            <Accordion
              id="ingredients"
              title={t('accordions.ingredientsTitle', 'Ingredients & Allergen Information')}
              icon={Leaf}
              isOpen={openSections.ingredients}
              onToggle={() => toggleSection('ingredients')}
            >
              <IngredientsSection selectedFlavour={selectedFlavour} />
            </Accordion>
          </div>

          {/* 5.3 Nutrition Facts & Calories Accordion */}
          <div id="nutrition-section" className="scroll-mt-16">
            <Accordion
              id="nutrition"
              title={t('accordions.nutritionTitle', 'Nutrition Facts & Calories')}
              icon={BarChart3}
              isOpen={openSections.nutrition}
              onToggle={() => toggleSection('nutrition')}
            >
              <NutritionSection selectedFlavour={selectedFlavour} />
            </Accordion>
          </div>

          {/* 5.4 Manufacturing Address */}
          <div id="manufacturing-section" className="scroll-mt-16">
            <Accordion
              id="manufacturing"
              title={t('accordions.manufacturingTitle', 'Manufacturing Address')}
              icon={Factory}
              isOpen={openSections.manufacturing}
              onToggle={() => toggleSection('manufacturing')}
            >
              <ManufacturingSection />
            </Accordion>
          </div>

          {/* 5.5 Quality Assurance Reports */}
          <div id="quality-section" className="scroll-mt-16">
            <Accordion
              id="quality"
              title={t('accordions.qualityTitle', 'Quality Assurance Reports')}
              icon={ShieldCheck}
              isOpen={openSections.quality}
              onToggle={() => toggleSection('quality')}
            >
              <QualitySection />
            </Accordion>
          </div>

          {/* 5.6 Brand & Customer Support */}
          <div id="support-section" className="scroll-mt-16">
            <Accordion
              id="support"
              title={t('accordions.supportTitle', 'Brand & Customer Support')}
              icon={Headphones}
              isOpen={openSections.support}
              onToggle={() => toggleSection('support')}
            >
              <SupportSection />
            </Accordion>
          </div>
        </section>
      </main>

      {/* 6. We Are Certified By - Continuous Scrolling Logo Marquee Section */}
      <CertificationMarquee />

      {/* 7. Existing Red Footer (Unmodified) */}
      <Footer />
    </div>
  );
}
