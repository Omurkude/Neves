import React from 'react';
import { ArrowRight } from 'lucide-react';
import PlaceholderImage from '../common/PlaceholderImage.jsx';

export default function FlavourCard({
  flavour,
  isSelected = false,
  onSelect
}) {
  const { id, name, tagline, theme } = flavour;

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
      className={`group relative flex flex-col items-center justify-between rounded-2xl p-3 sm:p-4 transition-all duration-200 cursor-pointer text-center border ${
        theme.pastelBg
      } ${
        isSelected
          ? `${theme.activeRing}`
          : `${theme.cardBorder} hover:border-slate-300 shadow-2xs`
      }`}
    >
      {/* Bottle Illustration in Center */}
      <div className="w-full py-1 sm:py-2 flex items-center justify-center">
        <PlaceholderImage
          type="bottle"
          flavour={theme.id}
          className="transition-transform duration-300 group-hover:scale-105"
          title={`${name} bottle`}
        />
      </div>

      {/* Flavour Name */}
      <h3 className="mt-2 text-xs sm:text-base font-extrabold text-[#0B192C] tracking-tight leading-snug">
        {name}
      </h3>

      {/* Flavour Tagline */}
      <p className="mt-1 text-[10px] sm:text-xs text-slate-500 font-normal leading-tight min-h-[28px] sm:min-h-[32px] flex items-center justify-center">
        {tagline}
      </p>

      {/* Circular Arrow Button */}
      <div className="mt-2.5 sm:mt-3 mb-1">
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
