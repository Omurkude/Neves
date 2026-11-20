import React from 'react';

export default function SelectedProductDetails({ flavour }) {
  if (!flavour) return null;

  const { name, variant, description, theme, specs, ingredients, allergens, nutrition, image } = flavour;

  return (
    <div id="selected-product" className="mb-6 sm:mb-8 scroll-mt-20">
      <div className="bg-white rounded-2xl border border-slate-200/90 shadow-2xs p-4 sm:p-6">
        {/* Active Flavour Indicator */}
        <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-100">
          <span
            className="w-2.5 h-2.5 rounded-full"
            style={{ backgroundColor: theme.accentColor }}
          />
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-500">
            Selected Product Details
          </span>
          <span className="ml-auto text-xs font-extrabold text-[#0B192C]">
            {variant || name}
          </span>
        </div>

        {/* Product Meta: Real Bottle Photo + Name & Description */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-6 items-center">
          {/* Bottle Visual Box */}
          <div className="sm:col-span-5 rounded-xl overflow-hidden shadow-2xs flex items-center justify-center bg-slate-900/5 aspect-[3/4] max-h-64 sm:max-h-72">
            <img
              src={image}
              alt={`${name} bottle`}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Description & Quick Specs */}
          <div className="sm:col-span-7 space-y-3">
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-[#0B192C] tracking-tight">
                {variant || name}
              </h3>
              <p className="mt-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                {description}
              </p>
            </div>

            {/* Quick Specs Chips */}
            <div className="grid grid-cols-2 gap-2 pt-1 text-xs">
              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200/70">
                <span className="block font-semibold text-slate-400 text-[10px] uppercase">Net Volume</span>
                <span className="font-bold text-[#0B192C]">{specs.volume}</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200/70">
                <span className="block font-semibold text-slate-400 text-[10px] uppercase">Packaging</span>
                <span className="font-bold text-[#0B192C]">{specs.packaging}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Ingredients & Nutrition Breakdown for Selected Product */}
        <div className="mt-5 pt-5 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Ingredients */}
          <div className="p-3.5 rounded-xl bg-slate-50/70 border border-slate-200/70">
            <h4 className="text-xs font-bold text-[#0B192C] uppercase tracking-wider mb-2">
              Key Ingredients
            </h4>
            <ul className="space-y-1 text-xs text-slate-600 mb-3">
              {ingredients.map((item) => (
                <li key={item} className="flex items-start gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-slate-400 mt-1.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="pt-2 border-t border-slate-200/60 text-[11px] text-slate-600">
              <strong className="text-slate-800">Allergen Notice: </strong>
              {allergens}
            </div>
          </div>

          {/* Nutrition Summary */}
          <div className="p-3.5 rounded-xl bg-slate-50/70 border border-slate-200/70">
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-xs font-bold text-[#0B192C] uppercase tracking-wider">
                Nutrition Facts
              </h4>
              <span className="text-[10px] text-slate-500 font-medium">Per 250ml</span>
            </div>

            <div className="overflow-x-auto rounded-lg border border-slate-200 bg-white">
              <table className="w-full text-[11px] text-left">
                <thead>
                  <tr className="bg-slate-100/70 text-slate-700 font-bold border-b border-slate-200">
                    <th className="py-1.5 px-2.5">Nutrient</th>
                    <th className="py-1.5 px-2.5 text-right">Per 100ml</th>
                    <th className="py-1.5 px-2.5 text-right font-extrabold text-[#0B192C]">Serving</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-600">
                  {nutrition.slice(0, 5).map((row) => (
                    <tr key={row.metric}>
                      <td className="py-1 px-2.5 font-medium text-slate-800">{row.metric}</td>
                      <td className="py-1 px-2.5 text-right text-slate-500">{row.per100ml}</td>
                      <td className="py-1 px-2.5 text-right font-bold text-[#0B192C]">{row.perServing}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
