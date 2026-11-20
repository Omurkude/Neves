import React from 'react';
import productDetails from '../../data/productDetails.js';

export default function NutritionSection() {
  const { nutritionInfo } = productDetails;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between text-xs text-slate-600">
        <span>
          Serving Size: <strong className="text-brand-navy">{nutritionInfo.servingSize}</strong>
        </span>
        <span>Servings per can: {nutritionInfo.servingsPerContainer}</span>
      </div>

      {/* Clean Nutrition Table */}
      <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
        <table className="w-full text-xs text-left">
          <thead>
            <tr className="bg-slate-100/70 border-b border-slate-200 text-slate-700 font-bold">
              <th className="py-2.5 px-3 sm:px-4">Nutrient</th>
              <th className="py-2.5 px-3 sm:px-4 text-right">Per 100 ml</th>
              <th className="py-2.5 px-3 sm:px-4 text-right font-extrabold text-brand-navy">Per Serving (250 ml)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-slate-700">
            {nutritionInfo.generalTable.map((row) => (
              <tr key={row.nutrient} className="hover:bg-slate-50/50">
                <td className="py-2 px-3 sm:px-4 font-medium">{row.nutrient}</td>
                <td className="py-2 px-3 sm:px-4 text-right text-slate-500">{row.per100ml}</td>
                <td className="py-2 px-3 sm:px-4 text-right font-bold text-brand-navy">{row.perServing}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-[11px] text-slate-500 italic">
        * {nutritionInfo.note}
      </p>
    </div>
  );
}
