import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function FlavourCard({
  flavour,
  isSelected = false,
  onSelect
}) {
  const { id, name, tagline, theme, image } = flavour;

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => onSelect && onSelect(id)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect && onSelect(id);
        }
      }}
      aria-pressed={isSelected}
      aria-label={`Select ${name} to view details`}
      className={`group relative flex flex-col items-center justify-between rounded-2xl p-2.5 sm:p-3.5 transition-all duration-200 cursor-pointer text-center border ${
        theme.pastelBg
      } ${
        isSelected
          ? `${theme.activeRing}`
          : `${theme.cardBorder} hover:border-slate-300 shadow-2xs`
      }`}
    >
      {/* Real Product Bottle Image - Clean transparent cutout, perfectly centered & uncropped */}
      <div className="w-full flex items-center justify-center py-1 sm:py-2">
        <img
          src={image}
          alt={`${name} bottle`}
          loading="lazy"
          className="w-auto h-32 sm:h-40 md:h-44 object-contain drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Flavour Name - Default Text Style */}
      <h3 className="mt-2 text-xs sm:text-base font-extrabold text-[#0B192C] tracking-tight leading-snug">
        {name}
      </h3>

      {/* Flavour Tagline - Default Text Style */}
      <p className="mt-0.5 sm:mt-1 text-[10px] sm:text-xs text-slate-500 font-normal leading-tight min-h-[26px] sm:min-h-[30px] flex items-center justify-center text-center px-1">
        {tagline}
      </p>

      {/* Circular Arrow Button */}
      <div className="mt-2 sm:mt-2.5 mb-0.5">
        <button
          type="button"
          tabIndex={-1}
          aria-hidden="true"
          className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-transform duration-200 shadow-2xs group-hover:scale-110 ${theme.btnColor}`}
        >
          <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
        </button>
      </div>
    </div>
  );
}
