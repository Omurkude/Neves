import React from 'react';
import productDetails from '../../data/productDetails.js';
import { Info } from 'lucide-react';

export default function NutritionSection({ selectedFlavour }) {
  const currentFlavour = selectedFlavour;
  const nutrition = currentFlavour?.nutrition;
  const tableData = nutrition?.table || productDetails.nutritionInfo.generalTable;
  const servingSize = currentFlavour?.specs?.volume || productDetails.nutritionInfo.servingSize;
  const mrp = currentFlavour?.specs?.mrp || productDetails.nutritionInfo.mrp;
  const approxText = nutrition?.rawApproxText || productDetails.nutritionInfo.rawApproxText;

  return (
    <div className="space-y-4">
      {/* Serving Size & Pack Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-600 p-3 bg-slate-50 rounded-xl border border-slate-200">
        <div>
          <span className="text-slate-500">Net Quantity: </span>
          <strong className="text-[#0B192C] font-extrabold">{servingSize}</strong>
          {currentFlavour && (
            <span className="ml-2 text-slate-500 font-medium">({currentFlavour.name})</span>
          )}
        </div>
        <div className="flex items-center gap-3">
          <span className="font-semibold text-slate-600">Servings: 1</span>
          <span className="px-2 py-0.5 rounded bg-red-50 text-[#E63946] font-bold text-xs border border-red-200/60">
            {mrp}
          </span>
        </div>
      </div>

      {/* Official Label Excerpt */}
      <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5 text-xs text-slate-700">
        <Info className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
        <div>
          <span className="font-bold text-slate-900 block mb-0.5">
            Label Declaration (Per 100ml Approx - {currentFlavour?.name || 'NEVE COOL'}):
          </span>
          <span className="font-mono text-slate-800 text-[11px] font-semibold">{approxText}</span>
        </div>
      </div>

      {/* Official Nutrition Table */}
      <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
        <table className="w-full text-xs text-left">
          <thead>
            <tr className="bg-slate-100/80 border-b border-slate-200 text-slate-700 font-bold">
              <th className="py-2.5 px-3 sm:px-4">Nutritional Parameter</th>
              <th className="py-2.5 px-3 sm:px-4 text-right">Per 100 ml (Approx)</th>
              <th className="py-2.5 px-3 sm:px-4 text-right font-extrabold text-[#0B192C]">
                Per Bottle (200 ml)
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-slate-700">
            {tableData.map((row) => (
              <tr key={row.nutrient || row.metric} className="hover:bg-slate-50/50">
                <td className="py-2.5 px-3 sm:px-4 font-semibold text-slate-900">
                  {row.nutrient || row.metric}
                </td>
                <td className="py-2.5 px-3 sm:px-4 text-right text-slate-600 font-medium">
                  {row.per100ml}
                </td>
                <td className="py-2.5 px-3 sm:px-4 text-right font-bold text-[#0B192C]">
                  {row.perServing}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-[11px] text-slate-500 italic">
        * Approximate laboratory values based on standard 200 ml product label declaration.
      </p>
    </div>
  );
}
