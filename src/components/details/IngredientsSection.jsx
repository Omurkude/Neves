import React from 'react';
import productDetails from '../../data/productDetails.js';
import { CheckCircle2, Sparkles, Tag } from 'lucide-react';

export default function IngredientsSection({ selectedFlavour }) {
  const { ingredientsInfo } = productDetails;

  return (
    <div className="space-y-4 text-xs sm:text-sm">
      {/* Product Category & 100% Vegetarian Badge */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 bg-slate-50 rounded-xl border border-slate-200">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">Product Category</span>
          <span className="font-extrabold text-[#0B192C]">{ingredientsInfo.category}</span>
          {selectedFlavour && (
            <span className="text-[11px] text-slate-500 block font-medium mt-0.5">
              Selected Variant: <strong className="text-slate-800">{selectedFlavour.name}</strong> ({selectedFlavour.specs.volume})
            </span>
          )}
        </div>
        <div className="flex items-center gap-1.5 text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200 w-fit">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-600 border border-white" />
          <span className="text-[11px] font-bold">100% Vegetarian</span>
        </div>
      </div>

      {/* Official Label Ingredients Excerpt */}
      <div className="p-3.5 rounded-xl bg-orange-50/70 border border-orange-200/80 space-y-1.5">
        <div className="flex items-center gap-1.5 text-orange-900 font-bold text-xs uppercase tracking-wider">
          <Tag className="w-3.5 h-3.5 text-orange-600 shrink-0" />
          <span>Official Label Declaration</span>
        </div>
        <p className="font-mono text-xs text-slate-800 leading-relaxed font-semibold">
          {ingredientsInfo.rawLabelText}
        </p>
        <p className="text-[11px] text-orange-950 font-medium pt-0.5">
          {ingredientsInfo.rawDeclarationsText}
        </p>
      </div>

      {/* Structured Ingredients Breakdown */}
      <div>
        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-2">
          Ingredients Breakdown & Function
        </span>
        <div className="bg-white rounded-xl border border-slate-200 divide-y divide-slate-100 overflow-hidden text-xs">
          {ingredientsInfo.baseIngredients.map((item) => (
            <div key={item.name} className="p-3 sm:p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1 hover:bg-slate-50/50">
              <span className="font-bold text-[#0B192C]">{item.name}</span>
              <span className="text-slate-500 sm:text-right">{item.purpose}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Statutory Label Declarations */}
      <div className="p-3.5 rounded-xl bg-amber-50/60 border border-amber-200/80 space-y-2">
        <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 block">
          Statutory Declarations on Label
        </span>
        <ul className="space-y-1.5 text-xs text-amber-900">
          {ingredientsInfo.declarations.map((dec) => (
            <li key={dec} className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0" />
              <span>{dec}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Allergen Notice */}
      <div className="p-3.5 rounded-xl bg-slate-100 border border-slate-200 text-xs text-slate-700">
        <strong className="text-slate-900">Allergen Information: </strong>
        {ingredientsInfo.allergenNotice}
      </div>
    </div>
  );
}
