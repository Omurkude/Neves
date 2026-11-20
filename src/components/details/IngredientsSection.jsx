import React from 'react';
import productDetails from '../../data/productDetails.js';

export default function IngredientsSection() {
  const { ingredientsInfo } = productDetails;

  return (
    <div className="space-y-4 text-xs sm:text-sm">
      <p className="text-slate-600 leading-relaxed font-normal">
        {ingredientsInfo.description}
      </p>

      {/* Base Ingredients Table / List */}
      <div className="bg-white rounded-xl border border-slate-200 divide-y divide-slate-100 overflow-hidden">
        {ingredientsInfo.baseIngredients.map((item) => (
          <div key={item.name} className="p-3 sm:p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
            <span className="font-bold text-brand-navy">{item.name}</span>
            <span className="text-slate-500 sm:text-right">{item.purpose}</span>
          </div>
        ))}
      </div>

      {/* Allergen Notice */}
      <div className="p-3.5 rounded-xl bg-slate-100 border border-slate-200 text-xs text-slate-700">
        <strong className="text-slate-900">Allergen Information: </strong>
        {ingredientsInfo.allergenNotice}
      </div>
    </div>
  );
}
