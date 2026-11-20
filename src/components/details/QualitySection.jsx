import React from 'react';
import { Award, ShieldCheck, Microscope, Droplets, CheckCircle2 } from 'lucide-react';
import productDetails from '../../data/productDetails.js';

export default function QualitySection() {
  const { qualityAssurance } = productDetails;

  const pillarIcons = [Droplets, ShieldCheck, Microscope, Award];

  return (
    <div className="space-y-6">
      {/* Overview statement */}
      <div className="p-4 rounded-xl bg-white border border-slate-200">
        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
          {qualityAssurance.overview}
        </p>
      </div>

      {/* 4 Purity & Quality Pillars */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        {qualityAssurance.pillars.map((pillar, index) => {
          const Icon = pillarIcons[index % pillarIcons.length];
          return (
            <div
              key={pillar.title}
              className="p-4 rounded-xl bg-white border border-slate-200/90 hover:border-slate-300 transition-colors"
            >
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-red-50 text-brand-red flex items-center justify-center shrink-0 mt-0.5">
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <h5 className="text-xs sm:text-sm font-bold text-brand-navy">
                    {pillar.title}
                  </h5>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* QA Certification Note */}
      <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200/80 flex items-start gap-3 text-xs text-blue-950">
        <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
        <p className="leading-relaxed">
          {qualityAssurance.labNotice}
        </p>
      </div>
    </div>
  );
}
