import React, { useState } from 'react';
import {
  FileText,
  Factory,
  ShieldCheck,
  Headphones
} from 'lucide-react';

import Navbar from '../components/layout/Navbar.jsx';
import Footer from '../components/layout/Footer.jsx';
import FlavourSection from '../components/products/FlavourSection.jsx';
import Accordion from '../components/details/Accordion.jsx';
import FSSAISection from '../components/details/FSSAISection.jsx';
import ManufacturingSection from '../components/details/ManufacturingSection.jsx';
import QualitySection from '../components/details/QualitySection.jsx';
import SupportSection from '../components/details/SupportSection.jsx';
import flavours from '../data/flavours.js';

export default function Home() {
  // State for selected flavour (defaults to the first flavour, Jeera Soda)
  const [selectedFlavourId, setSelectedFlavourId] = useState(flavours[0]?.id || 'jeera-soda');

  // State for accordions: FSSAI is open by default as in the reference layout
  const [openSections, setOpenSections] = useState({
    fssai: true,
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

  return (
    <div className="min-h-screen bg-white text-[#0B192C] flex flex-col font-sans selection:bg-[#E63946] selection:text-white">
      {/* 1. Navbar with NEVE branding and hamburger menu */}
      <Navbar />

      <main className="flex-1 max-w-3xl w-full mx-auto px-4 sm:px-6 pt-6 sm:pt-8">
        {/* 2. Hero Section: Default clean text style */}
        <section className="mb-6 sm:mb-8 text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B192C] tracking-tight">
            Your Product Details
          </h1>
          <p className="mt-1 sm:mt-2 text-xs sm:text-sm md:text-base text-slate-500 leading-relaxed font-normal">
            Discover everything about our products — manufacturing, regulatory approvals, and brand information.
          </p>
        </section>

        {/* 3. Our Flavours Section (All 3 Product Cards) */}
        <FlavourSection
          selectedFlavourId={selectedFlavourId}
          onSelectFlavour={setSelectedFlavourId}
        />

        {/* 4. Product Information Accordions List matching the reference order */}
        <section id="accordions" className="space-y-2 sm:space-y-2.5">
          {/* 4.1 FSSAI & Regulatory Details Accordion (Open by default) */}
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

          {/* 4.2 Manufacturing Address */}
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

          {/* 4.3 Quality Assurance Reports */}
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

          {/* 4.4 Brand & Customer Support */}
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

      {/* 5. Footer: Red bar matching reference */}
      <Footer />
    </div>
  );
}
