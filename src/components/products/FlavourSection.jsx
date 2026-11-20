import React, { useState } from 'react';
import { Sparkles, SlidersHorizontal, CheckCircle2 } from 'lucide-react';
import SectionHeading from '../common/SectionHeading.jsx';
import FlavourCard from './FlavourCard.jsx';
import flavours from '../../data/flavours.js';

export default function FlavourSection() {
  const [selectedId, setSelectedId] = useState('classic-cola');

  const activeFlavour = flavours.find((f) => f.id === selectedId) || flavours[0];

  return (
    <section id="flavours" className="py-12 sm:py-16 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          badge="Signature Formulations"
          badgeIcon={Sparkles}
          title="Our Flavours"
          subtitle="Explore our trio of artisan-crafted sparkling colas. Tap any flavour to inspect its sensory formulation and nutritional profile."
        />

        {/* 3-Column Responsive Grid (stacks on mobile, 3-cols on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {flavours.map((item) => (
            <FlavourCard
              key={item.id}
              flavour={item}
              isSelected={item.id === selectedId}
              onSelect={setSelectedId}
            />
          ))}
        </div>

        {/* Active Variant Sensory Spotlight Bar */}
        {activeFlavour && (
          <div className="mt-8 sm:mt-10 p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
              <div className="flex items-center gap-3">
                <span
                  className="w-3.5 h-3.5 rounded-full shrink-0"
                  style={{ backgroundColor: activeFlavour.theme.accentColor }}
                />
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-base sm:text-lg font-black text-brand-navy">
                      {activeFlavour.name}
                    </h4>
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-slate-200/80 text-slate-700">
                      Active Spotlight
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 mt-0.5">
                    {activeFlavour.tagline}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-xs font-semibold text-slate-600">
                <span className="flex items-center gap-1.5 text-emerald-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  In Stock & Verified
                </span>
                <span className="text-slate-400">|</span>
                <span>{activeFlavour.specs.caloriesPerServing}</span>
              </div>
            </div>

            {/* Sensory Characteristic Meters */}
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {activeFlavour.sensoryProfile.map((trait) => (
                <div key={trait.label} className="bg-white p-3.5 rounded-xl border border-slate-200/70">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-700 mb-1.5">
                    <span>{trait.label}</span>
                    <span className="text-brand-navy">{trait.value}%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-500"
                      style={{
                        width: `${trait.value}%`,
                        backgroundColor: activeFlavour.theme.accentColor
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
