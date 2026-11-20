import React from 'react';
import productDetails from '../../data/productDetails.js';

export default function NutritionSection() {
  const { nutritionInfo } = productDetails;

  return (
    <div className="space-y-4">
      {/* Serving Size Header */}
      <div className="flex items-center justify-between text-xs text-slate-600 p-2.5 bg-slate-50 rounded-xl border border-slate-200">
        <span>
          Net Serving Size: <strong className="text-[#0B192C]">{nutritionInfo.servingSize}</strong>
        </span>
        <span className="font-medium text-slate-500">Servings Per Bottle: 1</span>
      </div>

      {/* Official Nutrition Table */}
      <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
        <table className="w-full text-xs text-left">
          <thead>
            <tr className="bg-slate-100/70 border-b border-slate-200 text-slate-700 font-bold">
              <th className="py-2.5 px-3 sm:px-4">Nutrient</th>
              <th className="py-2.5 px-3 sm:px-4 text-right">Per 100 ml (Approx)</th>
              <th className="py-2.5 px-3 sm:px-4 text-right font-extrabold text-[#0B192C]">
                Per Bottle (200 ml)
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-slate-700">
            {nutritionInfo.generalTable.map((row) => (
              <tr key={row.nutrient} className="hover:bg-slate-50/50">
                <td className="py-2 px-3 sm:px-4 font-semibold text-slate-900">{row.nutrient}</td>
                <td className="py-2 px-3 sm:px-4 text-right text-slate-600">{row.per100ml}</td>
                <td className="py-2 px-3 sm:px-4 text-right font-bold text-[#0B192C]">{row.perServing}</td>
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
