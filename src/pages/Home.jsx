import React, { useState } from 'react';
import {
  QrCode,
  ShieldCheck,
  FileCheck2,
  Leaf,
  Activity,
  Factory,
  Award,
  PhoneCall,
  Sparkles,
  CheckCircle2,
  ChevronRight,
  Maximize2,
  Minimize2
} from 'lucide-react';

import Navbar from '../components/layout/Navbar.jsx';
import Footer from '../components/layout/Footer.jsx';
import FlavourSection from '../components/products/FlavourSection.jsx';
import Accordion from '../components/details/Accordion.jsx';
import FSSAISection from '../components/details/FSSAISection.jsx';
import IngredientsSection from '../components/details/IngredientsSection.jsx';
import NutritionSection from '../components/details/NutritionSection.jsx';
import ManufacturingSection from '../components/details/ManufacturingSection.jsx';
import QualitySection from '../components/details/QualitySection.jsx';
import SupportSection from '../components/details/SupportSection.jsx';
import SectionHeading from '../components/common/SectionHeading.jsx';

export default function Home() {
  // Accordion state: Set of open accordion IDs. 'fssai' is open by default.
  const [openSections, setOpenSections] = useState({
    fssai: true,
    ingredients: false,
    nutrition: false,
    manufacturing: false,
    quality: false,
    support: false,
  });

  const toggleSection = (sectionId) => {
    setOpenSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  const expandAll = () => {
    setOpenSections({
      fssai: true,
      ingredients: true,
      nutrition: true,
      manufacturing: true,
      quality: true,
      support: true,
    });
  };

  const collapseAll = () => {
    setOpenSections({
      fssai: false,
      ingredients: false,
      nutrition: false,
      manufacturing: false,
      quality: false,
      support: false,
    });
  };

  const allExpanded = Object.values(openSections).every(Boolean);

  const quickJumpChips = [
    { label: 'Flavours', href: '#flavours' },
    { label: 'FSSAI License', href: '#fssai-section' },
    { label: 'Ingredients', href: '#ingredients-section' },
    { label: 'Nutrition Facts', href: '#nutrition-section' },
    { label: 'Manufacturing', href: '#manufacturing-section' },
    { label: 'QA Reports', href: '#quality-section' },
    { label: 'Customer Care', href: '#support-section' },
  ];

  return (
    <div className="min-h-screen bg-white text-brand-navy flex flex-col font-sans selection:bg-brand-red selection:text-white">
      {/* 1. Responsive Navbar with NEVE branding and hamburger menu */}
      <Navbar />

      <main className="flex-1">
        {/* 2. Hero Section: "Your Product Details" */}
        <section className="relative overflow-hidden pt-8 pb-12 sm:pt-12 sm:pb-16 bg-gradient-to-b from-slate-50 via-white to-white border-b border-slate-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            {/* Top QR Scan Verification Pill */}
            <div className="flex justify-center mb-4 sm:mb-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 text-brand-red border border-red-200/80 text-xs font-semibold shadow-2xs">
                <QrCode className="w-4 h-4 shrink-0" />
                <span className="w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse" />
                <span>QR Verified Scan • Official NEVE Portal</span>
              </div>
            </div>

            {/* Main Hero Header */}
            <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-brand-navy tracking-tight leading-tight">
                Your Product Details
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto">
                Welcome to the authenticated <strong className="text-brand-navy font-semibold">NEVE</strong> transparency registry. You scanned the QR label on your beverage. Review real-time batch certifications, botanical ingredients, nutrition panels, and statutory disclosures below.
              </p>
            </div>

            {/* Mobile-Friendly Quick-Jump Chips (Horizontal scrollable on 320px-390px, wrap on desktop) */}
            <div className="mt-6 sm:mt-8 pt-6 border-t border-slate-200/60">
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 text-center mb-3">
                Quick Jump to Details
              </p>
              <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 sm:flex-wrap sm:justify-center no-scrollbar">
                {quickJumpChips.map((chip) => (
                  <a
                    key={chip.href}
                    href={chip.href}
                    className="shrink-0 px-3 py-1.5 rounded-xl text-xs font-semibold bg-white text-slate-700 hover:text-brand-red hover:border-red-200 border border-slate-200/80 shadow-2xs transition-all active:scale-95"
                  >
                    {chip.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Trust Assurance Pills */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 max-w-4xl mx-auto text-xs text-slate-700">
              <div className="p-2.5 sm:p-3 rounded-xl bg-white border border-slate-200/80 flex items-center gap-2 shadow-2xs">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="font-semibold truncate">FSSAI In Review</span>
              </div>
              <div className="p-2.5 sm:p-3 rounded-xl bg-white border border-slate-200/80 flex items-center gap-2 shadow-2xs">
                <Leaf className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="font-semibold truncate">100% Vegan Recipe</span>
              </div>
              <div className="p-2.5 sm:p-3 rounded-xl bg-white border border-slate-200/80 flex items-center gap-2 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span className="font-semibold truncate">Pure Botanical Kola</span>
              </div>
              <div className="p-2.5 sm:p-3 rounded-xl bg-white border border-slate-200/80 flex items-center gap-2 shadow-2xs">
                <Award className="w-4 h-4 text-amber-600 shrink-0" />
                <span className="font-semibold truncate">ISO 22000 Facility</span>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Our Flavours Section (Classic Cola, Lime Cola, Orange Cola) */}
        <FlavourSection />

        {/* 4 to 9. Detailed Product & Regulatory Accordions */}
        <section id="regulatory-details" className="py-12 sm:py-16 bg-slate-50/60 border-t border-slate-200/80">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <SectionHeading
              badge="Compliance & Transparency"
              badgeIcon={ShieldCheck}
              title="Statutory Disclosures & Specifications"
              subtitle="Mandatory regulatory data, laboratory specifications, batch coding standards, and customer care support channels."
            />

            {/* Global Expand / Collapse Control */}
            <div className="flex items-center justify-between mb-4 px-1 text-xs text-slate-500 font-medium">
              <span>Tap any section to expand or collapse details</span>
              <button
                type="button"
                onClick={allExpanded ? collapseAll : expandAll}
                className="inline-flex items-center gap-1 font-bold text-brand-red hover:underline focus:outline-hidden"
              >
                {allExpanded ? (
                  <>
                    <Minimize2 className="w-3.5 h-3.5" />
                    <span>Collapse All</span>
                  </>
                ) : (
                  <>
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>Expand All</span>
                  </>
                )}
              </button>
            </div>

            {/* Accordion List */}
            <div className="space-y-3.5 sm:space-y-4">
              {/* 4. FSSAI & Regulatory Details */}
              <div id="fssai-section" className="scroll-mt-24">
                <Accordion
                  id="fssai"
                  title="FSSAI & Regulatory Details"
                  subtitle="Statutory food authority registration and licensing status"
                  icon={FileCheck2}
                  badge="Statutory Disclosure"
                  badgeColor="bg-amber-100 text-amber-900 border-amber-300"
                  isOpen={openSections.fssai}
                  onToggle={() => toggleSection('fssai')}
                >
                  <FSSAISection />
                </Accordion>
              </div>

              {/* 5. Ingredients & Allergen Information */}
              <div id="ingredients-section" className="scroll-mt-24">
                <Accordion
                  id="ingredients"
                  title="Ingredients & Allergen Information"
                  subtitle="Botanical kola formulation, citrus essences, and allergen guarantees"
                  icon={Leaf}
                  badge="100% Vegan & Non-GMO"
                  badgeColor="bg-emerald-100 text-emerald-900 border-emerald-300"
                  isOpen={openSections.ingredients}
                  onToggle={() => toggleSection('ingredients')}
                >
                  <IngredientsSection />
                </Accordion>
              </div>

              {/* 6. Nutrition Facts & Calories */}
              <div id="nutrition-section" className="scroll-mt-24">
                <Accordion
                  id="nutrition"
                  title="Nutrition Facts & Calories"
                  subtitle="Energy metrics, sugar breakdown, and % Daily Values per 250ml can"
                  icon={Activity}
                  badge="105 kcal / 250ml"
                  badgeColor="bg-blue-100 text-blue-900 border-blue-300"
                  isOpen={openSections.nutrition}
                  onToggle={() => toggleSection('nutrition')}
                >
                  <NutritionSection />
                </Accordion>
              </div>

              {/* 7. Manufacturing Address */}
              <div id="manufacturing-section" className="scroll-mt-24">
                <Accordion
                  id="manufacturing"
                  title="Manufacturing & Facility Address"
                  subtitle="Certified bottling facility, brand marketer details, and can base batch coding"
                  icon={Factory}
                  badge="Unit 04 & BKC"
                  badgeColor="bg-purple-100 text-purple-900 border-purple-300"
                  isOpen={openSections.manufacturing}
                  onToggle={() => toggleSection('manufacturing')}
                >
                  <ManufacturingSection />
                </Accordion>
              </div>

              {/* 8. Quality Assurance Reports */}
              <div id="quality-section" className="scroll-mt-24">
                <Accordion
                  id="quality"
                  title="Quality Assurance Reports"
                  subtitle="7-stage water filtration, batch microbiology testing, and BPA-free packaging"
                  icon={Award}
                  badge="ISO 22000 Benchmark"
                  badgeColor="bg-rose-100 text-rose-900 border-rose-300"
                  isOpen={openSections.quality}
                  onToggle={() => toggleSection('quality')}
                >
                  <QualitySection />
                </Accordion>
              </div>

              {/* 9. Brand & Customer Support */}
              <div id="support-section" className="scroll-mt-24">
                <Accordion
                  id="support"
                  title="Brand & Customer Support"
                  subtitle="Toll-free consumer helpline, email support, and grievance redressal"
                  icon={PhoneCall}
                  badge="1800-266-NEVE"
                  badgeColor="bg-slate-200 text-slate-800 border-slate-300"
                  isOpen={openSections.support}
                  onToggle={() => toggleSection('support')}
                >
                  <SupportSection />
                </Accordion>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 10. Responsive Footer */}
      <Footer />
    </div>
  );
}
