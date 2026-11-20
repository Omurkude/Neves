import React from 'react';

export default function SelectedProductDetails({ flavour }) {
  if (!flavour) return null;

  const { name, variant, description, theme, specs, ingredients, allergens, nutrition, image, tagline } = flavour;

  return (
    <div id="selected-product" className="mb-6 sm:mb-8 scroll-mt-20">
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-2xs p-4 sm:p-6 transition-all duration-200">
        {/* Header bar */}
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
          <span className="text-xs sm:text-sm font-poppins font-bold text-[#0B192C] tracking-tight truncate ml-2">
            {variant || name}
          </span>
        </div>

        {/* Product Visual & Details */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 sm:gap-6 items-center">
          {/* Centered Transparent Bottle on soft pastel card */}
          <div className="sm:col-span-5 flex justify-center items-center py-1">
            <div className={`w-full max-w-[210px] sm:max-w-[240px] flex items-center justify-center p-3 rounded-2xl ${theme.pastelBg} border ${theme.cardBorder}`}>
              <img
                src={image}
                alt={`${name} bottle`}
                className="w-auto h-auto max-h-[240px] sm:max-h-[280px] object-contain drop-shadow-md"
              />
            </div>
          </div>

          {/* Meta & Descriptions */}
          <div className="sm:col-span-7 space-y-3 text-center sm:text-left">
            <div>
              <h3 className="text-2xl sm:text-3xl font-poppins font-bold text-[#0B192C] tracking-tight leading-tight">
                {variant || name}
              </h3>
              <p className="mt-1 font-dmsans font-semibold text-xs sm:text-sm" style={{ color: theme.accentColor }}>
                "{tagline}"
              </p>
              <p className="mt-2 text-xs sm:text-sm font-dmsans text-slate-600 leading-relaxed font-normal max-w-md mx-auto sm:mx-0">
                {description}
              </p>
            </div>

            {/* Quick Specs Chips */}
            <div className="grid grid-cols-2 gap-2 pt-1 text-xs max-w-xs sm:max-w-none mx-auto sm:mx-0">
              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/70 text-center sm:text-left">
                <span className="block font-outfit font-bold text-slate-400 text-[10px] uppercase">Net Volume</span>
                <span className="font-poppins font-semibold text-[#0B192C] text-xs sm:text-sm">{specs.volume}</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/70 text-center sm:text-left">
                <span className="block font-outfit font-bold text-slate-400 text-[10px] uppercase">Packaging</span>
                <span className="font-poppins font-semibold text-[#0B192C] text-xs sm:text-sm">{specs.packaging}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Key Ingredients & Nutrition Overview */}
        <div className="mt-5 pt-4 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {/* Key Ingredients */}
          <div className="p-3.5 rounded-xl bg-slate-50/70 border border-slate-200/70 text-left font-dmsans">
            <h4 className="text-xs font-poppins font-bold text-[#0B192C] tracking-wider uppercase mb-2">
              Key Ingredients
            </h4>
            <ul className="space-y-1 text-xs text-slate-600 mb-2.5">
              {ingredients.map((item) => (
                <li key={item} className="flex items-start gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="pt-2 border-t border-slate-200/60 text-[11px] text-slate-500">
              <strong className="text-slate-700">Allergens: </strong>
              {allergens}
            </div>
          </div>

          {/* Quick Nutrition */}
          <div className="p-3.5 rounded-xl bg-slate-50/70 border border-slate-200/70 text-left font-dmsans">
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-xs font-poppins font-bold text-[#0B192C] tracking-wider uppercase">
                Nutrition Summary
              </h4>
              <span className="text-[10px] font-outfit text-slate-500 font-semibold">Per Serving</span>
            </div>

            <div className="overflow-x-auto rounded-lg border border-slate-200 bg-white">
              <table className="w-full text-[11px] text-left">
                <thead>
                  <tr className="bg-slate-50 text-slate-600 font-semibold border-b border-slate-200">
                    <th className="py-1 px-2.5">Nutrient</th>
                    <th className="py-1 px-2.5 text-right font-bold text-[#0B192C]">Amount</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-600">
                  {nutrition.slice(0, 4).map((row) => (
                    <tr key={row.metric}>
                      <td className="py-1 px-2.5 font-medium text-slate-800">{row.metric}</td>
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
