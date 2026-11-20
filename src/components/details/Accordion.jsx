import React from 'react';
import { ChevronDown } from 'lucide-react';

/**
 * Reusable, accessible Accordion component.
 * Follows WAI-ARIA accordion pattern with keyboard and touch accessibility.
 */
export default function Accordion({
  id,
  title,
  subtitle,
  icon: Icon,
  badge,
  badgeColor = 'bg-slate-100 text-slate-700 border-slate-200',
  isOpen = false,
  onToggle,
  children,
  className = '',
}) {
  const buttonId = `accordion-btn-${id}`;
  const panelId = `accordion-panel-${id}`;

  return (
    <div
      className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
        isOpen
          ? 'bg-white border-brand-red/30 shadow-md ring-1 ring-brand-red/10'
          : 'bg-white border-slate-200/90 hover:border-slate-300 shadow-2xs'
      } ${className}`}
    >
      {/* Accordion Trigger Header */}
      <button
        type="button"
        id={buttonId}
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={onToggle}
        className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-3 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-inset select-none cursor-pointer"
      >
        <div className="flex items-center gap-3 sm:gap-4 min-w-0">
          {Icon && (
            <div
              className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl shrink-0 flex items-center justify-center transition-colors ${
                isOpen
                  ? 'bg-brand-red text-white shadow-xs'
                  : 'bg-slate-100 text-brand-navy'
              }`}
            >
              <Icon className="w-5 h-5" />
            </div>
          )}

          <div className="min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="text-base sm:text-lg font-bold text-brand-navy tracking-tight truncate">
                {title}
              </h3>
              {badge && (
                <span
                  className={`px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-semibold border ${badgeColor}`}
                >
                  {badge}
                </span>
              )}
            </div>
            {subtitle && (
              <p className="text-xs sm:text-sm text-slate-500 mt-0.5 truncate">
                {subtitle}
              </p>
            )}
          </div>
        </div>

        {/* Chevron Indicator */}
        <div
          className={`w-8 h-8 rounded-full shrink-0 flex items-center justify-center transition-transform duration-200 ${
            isOpen ? 'rotate-180 bg-red-50 text-brand-red' : 'bg-slate-100 text-slate-500'
          }`}
        >
          <ChevronDown className="w-4 h-4" />
        </div>
      </button>

      {/* Accordion Panel Content */}
      {isOpen && (
        <div
          id={panelId}
          role="region"
          aria-labelledby={buttonId}
          className="border-t border-slate-100 p-4 sm:p-6 bg-slate-50/40 text-slate-700 animate-in fade-in-50 duration-150"
        >
          {children}
        </div>
      )}
    </div>
  );
}
