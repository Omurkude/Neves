import React from 'react';
import { Check, Sparkles, Flame, Droplets } from 'lucide-react';
import PlaceholderImage from '../common/PlaceholderImage.jsx';

export default function FlavourCard({
  flavour,
  isSelected = false,
  onSelect,
}) {
  const { id, name, variant, tagline, description, theme, specs, tastingNotes } = flavour;

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
      aria-label={`View details for ${name}`}
      className={`group relative flex flex-col justify-between rounded-3xl p-5 sm:p-6 transition-all duration-200 cursor-pointer text-left border-2 ${
        flavour.theme.pastelBg
      } ${
        isSelected
          ? `${theme.activeBorder} shadow-lg ring-2 ring-red-500/20 scale-[1.01]`
          : 'border-slate-200/80 hover:border-slate-300 shadow-xs hover:shadow-md'
      }`}
    >
      {/* Top Badges: Variant Name & Selection State */}
      <div className="flex items-center justify-between gap-2 mb-3">
        <span
          className={`px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase ${theme.badgeBg} ${theme.badgeText}`}
        >
          {variant}
        </span>

        {isSelected ? (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-brand-navy text-white shadow-xs">
            <Check className="w-3.5 h-3.5 text-emerald-400" />
            Selected
          </span>
        ) : (
          <span className="text-[11px] font-medium text-slate-500 group-hover:text-brand-navy transition-colors">
            Tap to view
          </span>
        )}
      </div>

      {/* Beverage Bottle Illustration Placeholder */}
      <div className="my-2 py-2 flex items-center justify-center">
        <PlaceholderImage
          type="bottle"
          flavour={theme.id}
          className="transition-transform duration-300 group-hover:scale-105"
          title={`${name} bottle`}
        />
      </div>

      {/* Flavour Title & Description */}
      <div className="mt-3">
        <div className="flex items-baseline justify-between gap-2">
          <h3 className="text-xl sm:text-2xl font-black text-brand-navy tracking-tight">
            {name}
          </h3>
          <span className="text-xs font-bold text-slate-500">
            {specs.volume.split('/')[0].trim()}
          </span>
        </div>

        <p className="mt-1 text-xs font-semibold text-brand-navy-light/90">
          {tagline}
        </p>

        <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
          {description}
        </p>
      </div>

      {/* Tasting Notes Tags */}
      <div className="mt-4 pt-3 border-t border-slate-200/60">
        <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
          Tasting Notes
        </p>
        <div className="flex flex-wrap gap-1.5">
          {tastingNotes.map((note) => (
            <span
              key={note}
              className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-white/80 text-slate-700 border border-slate-200/60"
            >
              {note}
            </span>
          ))}
        </div>
      </div>

      {/* Quick Specs Chips */}
      <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs text-slate-600">
        <span className="inline-flex items-center gap-1 font-medium">
          <Droplets className="w-3.5 h-3.5 text-blue-500" />
          {specs.carbonation}
        </span>
        <span className="inline-flex items-center gap-1 font-medium">
          <Flame className="w-3.5 h-3.5 text-amber-500" />
          {specs.caloriesPerServing.split('/')[0].trim()}
        </span>
      </div>

      {/* Action Prompt */}
      <div className="mt-4">
        <div
          className={`w-full py-2.5 rounded-xl text-xs font-bold text-center transition-colors flex items-center justify-center gap-1.5 ${
            isSelected
              ? 'bg-brand-navy text-white shadow-xs'
              : 'bg-white/90 text-brand-navy border border-slate-300 group-hover:bg-brand-navy group-hover:text-white'
          }`}
        >
          {isSelected ? (
            <>
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Current Flavour Focus</span>
            </>
          ) : (
            <span>Inspect Nutritional Profile</span>
          )}
        </div>
      </div>
    </div>
  );
}
