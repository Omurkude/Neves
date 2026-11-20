import React from 'react';
import productDetails from '../../data/productDetails.js';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function IngredientsSection() {
  const { ingredientsInfo } = productDetails;

  return (
    <div className="space-y-4 text-xs sm:text-sm">
      {/* Product Category Badge & Intro */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 bg-slate-50 rounded-xl border border-slate-200">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">Category</span>
          <span className="font-extrabold text-[#0B192C]">{ingredientsInfo.category}</span>
        </div>
        <div className="flex items-center gap-1.5 text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200 w-fit">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-600 border border-white" />
          <span className="text-[11px] font-bold">100% Vegetarian</span>
        </div>
      </div>

      <p className="text-slate-600 leading-relaxed font-normal">
        {ingredientsInfo.description}
      </p>

      {/* Official Ingredients List */}
      <div className="bg-white rounded-xl border border-slate-200 divide-y divide-slate-100 overflow-hidden text-xs">
        {ingredientsInfo.baseIngredients.map((item) => (
          <div key={item.name} className="p-3 sm:p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
            <span className="font-bold text-[#0B192C]">{item.name}</span>
            <span className="text-slate-500 sm:text-right">{item.purpose}</span>
          </div>
        ))}
      </div>

      {/* Statutory Label Declarations */}
      <div className="p-3.5 rounded-xl bg-amber-50/60 border border-amber-200/80 space-y-2">
        <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 block">
          Statutory Label Declarations
        </span>
        <ul className="space-y-1 text-xs text-amber-900">
          {ingredientsInfo.declarations.map((dec) => (
            <li key={dec} className="flex items-center gap-1.5">
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
