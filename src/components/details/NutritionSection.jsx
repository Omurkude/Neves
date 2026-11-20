import React from 'react';
import { Activity, Info } from 'lucide-react';
import productDetails from '../../data/productDetails.js';

export default function NutritionSection() {
  const { nutrition } = productDetails;

  return (
    <div className="space-y-6">
      {/* Key Metric Highlights Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {nutrition.highlights.map((h) => (
          <div
            key={h.label}
            className="p-3.5 rounded-xl bg-white border border-slate-200 text-center"
          >
            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
              {h.label}
            </p>
            <p className="text-xl sm:text-2xl font-black text-brand-navy my-1">
              {h.value}
            </p>
            <p className="text-[10px] sm:text-[11px] text-slate-500">
              {h.sub}
            </p>
          </div>
        ))}
      </div>

      {/* Serving Notice Header */}
      <div className="flex items-center justify-between text-xs text-slate-600 px-1">
        <span>
          Serving Size: <strong className="text-brand-navy">{nutrition.servingSize}</strong>
        </span>
        <span className="text-[11px] text-slate-500 italic">
          Servings per can: 1
        </span>
      </div>

      {/* Nutrition Table */}
      <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-2xs">
        <table className="w-full text-xs text-left border-collapse">
          <thead>
            <tr className="bg-slate-100/80 border-b border-slate-200 text-brand-navy font-bold">
              <th className="py-2.5 px-3 sm:px-4">Nutrient Metric</th>
              <th className="py-2.5 px-3 sm:px-4 text-right">Per 100 ml</th>
              <th className="py-2.5 px-3 sm:px-4 text-right">Per Serving (250 ml)</th>
              <th className="py-2.5 px-3 sm:px-4 text-right">% Daily Value*</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-slate-700">
            {nutrition.table.map((row) => (
              <tr
                key={row.nutrient}
                className={`hover:bg-slate-50/70 ${
                  row.nutrient === 'Energy' || row.nutrient === 'Added Sugars'
                    ? 'font-semibold text-brand-navy bg-slate-50/40'
                    : ''
                }`}
              >
                <td className="py-2.5 px-3 sm:px-4">{row.nutrient}</td>
                <td className="py-2.5 px-3 sm:px-4 text-right">{row.per100ml}</td>
                <td className="py-2.5 px-3 sm:px-4 text-right font-medium">{row.perServing}</td>
                <td className="py-2.5 px-3 sm:px-4 text-right text-slate-500">{row.rdaPercent}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footnote Disclaimer */}
      <div className="p-3 rounded-xl bg-slate-100/70 text-[11px] text-slate-500 flex items-start gap-2">
        <Info className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
        <p className="leading-relaxed">
          *Percent Daily Values (%DV) are based on a 2,000 calorie diet per ICMR / NIN guidelines. {nutrition.disclaimer}
        </p>
      </div>
    </div>
  );
}
