import React from 'react';
import { Leaf, ShieldCheck, Check, Sparkles } from 'lucide-react';
import productDetails from '../../data/productDetails.js';

export default function IngredientsSection() {
  const { ingredients } = productDetails;

  return (
    <div className="space-y-6">
      {/* Intro Summary */}
      <div className="p-4 rounded-xl bg-white border border-slate-200">
        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
          {ingredients.summary}
        </p>
      </div>

      {/* Ingredient Items List */}
      <div>
        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-1.5">
          <Leaf className="w-3.5 h-3.5 text-emerald-600" />
          <span>Formulation Components & Functional Roles</span>
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {ingredients.items.map((item, index) => (
            <div
              key={item.name}
              className="p-3.5 rounded-xl bg-white border border-slate-200/90 hover:border-slate-300 transition-colors"
            >
              <div className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-red-50 text-brand-red text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  {index + 1}
                </span>
                <div>
                  <h5 className="text-xs sm:text-sm font-bold text-brand-navy">
                    {item.name}
                  </h5>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    {item.purpose}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Allergen & Dietary Declarations */}
      <div className="p-4 sm:p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200/80">
        <div className="flex items-center gap-2 mb-2">
          <ShieldCheck className="w-5 h-5 text-emerald-700" />
          <h4 className="text-sm font-bold text-emerald-950">
            Allergen & Dietary Safety Guarantee
          </h4>
        </div>

        <p className="text-xs text-emerald-900 leading-relaxed mb-4">
          {ingredients.allergens.statement}
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs font-semibold text-emerald-800">
          <div className="flex items-center gap-1.5 bg-white/80 p-2 rounded-lg border border-emerald-200">
            <Check className="w-3.5 h-3.5 text-emerald-600" />
            <span>100% Vegan</span>
          </div>
          <div className="flex items-center gap-1.5 bg-white/80 p-2 rounded-lg border border-emerald-200">
            <Check className="w-3.5 h-3.5 text-emerald-600" />
            <span>Gluten Free</span>
          </div>
          <div className="flex items-center gap-1.5 bg-white/80 p-2 rounded-lg border border-emerald-200">
            <Check className="w-3.5 h-3.5 text-emerald-600" />
            <span>Nut Free</span>
          </div>
          <div className="flex items-center gap-1.5 bg-white/80 p-2 rounded-lg border border-emerald-200">
            <Check className="w-3.5 h-3.5 text-emerald-600" />
            <span>Non-GMO Cane</span>
          </div>
        </div>
      </div>
    </div>
  );
}
