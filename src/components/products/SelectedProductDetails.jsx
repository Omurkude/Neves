import React from 'react';

export default function SelectedProductDetails({ flavour }) {
  if (!flavour) return null;

  const { name, variant, description, theme, specs, ingredients, allergens, nutrition, image, tagline } = flavour;

  return (
    <div id="selected-product" className="mb-6 sm:mb-8 scroll-mt-20">
      <div className="bg-white rounded-2xl border border-slate-200/90 shadow-2xs p-4 sm:p-6">
        {/* Active Flavour Indicator Header */}
        <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100 font-dmsans">
          <div className="flex items-center gap-2">
            <span
              className="w-2.5 h-2.5 rounded-full shrink-0"
              style={{ backgroundColor: theme.accentColor }}
            />
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-500 font-outfit">
              Selected Product Details
            </span>
          </div>
          <span className="text-sm font-lilita text-[#0B192C] tracking-wide truncate ml-2">
            {variant || name}
          </span>
        </div>

        {/* Product Meta: Centered Bottle Photo + Titan One Bubbly Bold Heading */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 sm:gap-6 items-center">
          {/* Bottle Visual Box - Perfectly centered, uncropped object-contain showing entire cap and splash */}
          <div className="sm:col-span-5 flex justify-center items-center">
            <div className="w-full max-w-[240px] sm:max-w-[270px] flex items-center justify-center p-2 rounded-2xl bg-gradient-to-b from-slate-50 to-slate-100/60 border border-slate-200/60 shadow-xs">
              <img
                src={image}
                alt={`${name} bottle`}
                className="w-auto h-auto max-h-[300px] sm:max-h-[350px] object-contain rounded-xl drop-shadow-md"
              />
            </div>
          </div>

          {/* Description & Quick Specs */}
          <div className="sm:col-span-7 space-y-3 text-center sm:text-left">
            <div>
              {/* Product Heading using Titan One - Rounded, Bubbly, and Bold */}
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-titan text-[#0B192C] tracking-wide leading-tight">
                {variant || name}
              </h3>
              
              {/* Tagline in Yellowtail slim retro script */}
              <p className="mt-1 font-yellowtail text-lg sm:text-xl text-[#E63946]">
                "{tagline}"
              </p>

              {/* Body text in DM Sans */}
              <p className="mt-2 text-xs sm:text-sm font-dmsans text-slate-600 leading-relaxed font-normal max-w-md mx-auto sm:mx-0">
                {description}
              </p>
            </div>

            {/* Quick Specs Chips */}
            <div className="grid grid-cols-2 gap-2 pt-1 text-xs max-w-xs sm:max-w-none mx-auto sm:mx-0">
              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200/70 text-center sm:text-left">
                <span className="block font-outfit font-bold text-slate-400 text-[10px] uppercase">Net Volume</span>
                <span className="font-inter font-bold text-[#0B192C]">{specs.volume}</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200/70 text-center sm:text-left">
                <span className="block font-outfit font-bold text-slate-400 text-[10px] uppercase">Packaging</span>
                <span className="font-inter font-bold text-[#0B192C]">{specs.packaging}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Ingredients & Nutrition Breakdown with Bowlby One / Lilita One Headers */}
        <div className="mt-6 pt-5 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Ingredients */}
          <div className="p-3.5 rounded-xl bg-slate-50/70 border border-slate-200/70 text-left font-inter">
            <h4 className="text-xs font-lilita text-[#0B192C] tracking-wider uppercase mb-2 flex items-center gap-1.5">
              <span>Key Ingredients</span>
            </h4>
            <ul className="space-y-1 text-xs text-slate-600 mb-3">
              {ingredients.map((item) => (
                <li key={item} className="flex items-start gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-slate-400 mt-1.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="pt-2 border-t border-slate-200/60 text-[11px] font-nunito text-slate-600">
              <strong className="text-slate-800">Allergen Notice: </strong>
              {allergens}
            </div>
          </div>

          {/* Nutrition Summary */}
          <div className="p-3.5 rounded-xl bg-slate-50/70 border border-slate-200/70 text-left font-inter">
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-xs font-lilita text-[#0B192C] tracking-wider uppercase">
                Nutrition Facts
              </h4>
              <span className="text-[10px] font-nunito text-slate-500 font-medium">Per 250ml</span>
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
