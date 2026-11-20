import React from 'react';
import { Sparkles, Check } from 'lucide-react';

export default function FlavourCard({
  flavour,
  isSelected = false,
  onSelect
}) {
  const { id, name, categoryBadge, punchline, theme, image, specs } = flavour;

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
      aria-label={`Select ${name} to view bottle details and ingredients`}
      className={`group relative flex flex-col justify-between rounded-3xl p-4 sm:p-5 pt-6 sm:pt-8 transition-all duration-300 cursor-pointer overflow-visible border-2 ${
        theme.cardBg
      } ${
        isSelected
          ? `${theme.activeRing}`
          : `${theme.cardBorder} hover:scale-[1.02] shadow-xl hover:shadow-2xl`
      }`}
    >
      {/* Top Header Row with Category Badge & Selection State */}
      <div className="flex items-center justify-between w-full relative z-20">
        <span className={`text-[10px] sm:text-xs font-baloo font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full shadow-xs ${theme.badgeBg}`}>
          {categoryBadge}
        </span>
        {isSelected ? (
          <span className="flex items-center gap-1 bg-[#FACC15] text-[#0B192C] text-[10px] sm:text-xs font-baloo font-black px-2 py-0.5 rounded-full shadow-xs">
            <Check className="w-3 h-3 stroke-[3]" />
            <span>ACTIVE</span>
          </span>
        ) : (
          <span className="text-[11px] font-baloo font-bold text-white/80 uppercase tracking-wider">
            ₹10 ONLY
          </span>
        )}
      </div>

      {/* Break-out Bottle Visual - Large, 3D overlapping, high-impact drop shadow */}
      <div className="w-full flex items-center justify-center -mt-6 sm:-mt-10 mb-2 relative z-10 py-1">
        {/* Subtle radial glow behind the bottle */}
        <div
          className="absolute w-32 h-32 rounded-full blur-2xl pointer-events-none opacity-60"
          style={{ backgroundColor: theme.accentColor }}
        />
        <img
          src={image}
          alt={`${name} 200ml bottle`}
          loading="lazy"
          className="h-44 sm:h-56 md:h-64 w-auto object-contain drop-shadow-[0_20px_25px_rgba(0,0,0,0.65)] transform transition-transform duration-300 group-hover:scale-108 group-hover:-translate-y-2"
        />
      </div>

      {/* Bottom Content: Bold Typography, Specific Punchline & Clean CTA Strip */}
      <div className="relative z-20 text-center sm:text-left mt-1">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-0.5">
          <h3 className="text-xl sm:text-2xl font-lilita text-white tracking-wide leading-tight">
            {name}
          </h3>
          <span className="text-xs font-baloo font-bold text-[#FACC15] shrink-0">
            200ml • ₹10
          </span>
        </div>

        <p className="mt-1 text-xs sm:text-[13px] font-dmsans text-white/90 leading-snug line-clamp-2">
          {punchline}
        </p>

        {/* Confident Interactive Action Strip (No generic circle arrow!) */}
        <div className="mt-3 pt-2.5 border-t border-white/15 flex items-center justify-between text-xs font-baloo">
          <span className="text-white/80 font-semibold group-hover:text-white transition-colors">
            {isSelected ? 'Viewing Recipe & Specs ↓' : 'Tap to Inspect Details'}
          </span>
          <span className="text-[#FACC15] font-black tracking-wider uppercase text-[11px] bg-black/25 px-2 py-0.5 rounded-md">
            {isSelected ? 'SELECTED' : 'VIEW →'}
          </span>
        </div>
      </div>
    </div>
  );
}
