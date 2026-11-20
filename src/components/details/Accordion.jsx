import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

/**
 * Clean accordion component matching the COLLA reference screenshot.
 * Features icon on the left, bold title, and chevron toggle on the right.
 */
export default function Accordion({
  id,
  title,
  icon: Icon,
  isOpen = false,
  onToggle,
  children,
  className = '',
}) {
  const buttonId = `acc-btn-${id}`;
  const panelId = `acc-panel-${id}`;

  return (
    <div
      className={`rounded-xl border border-slate-200 bg-white transition-all duration-150 overflow-hidden ${
        isOpen ? 'shadow-2xs' : 'hover:border-slate-300'
      } ${className}`}
    >
      <button
        type="button"
        id={buttonId}
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={onToggle}
        className="w-full text-left p-3.5 sm:p-4 flex items-center justify-between gap-3 select-none cursor-pointer focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#E63946]"
      >
        <div className="flex items-center gap-3 min-w-0">
          {Icon && (
            <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-200/60 text-slate-800 flex items-center justify-center shrink-0">
              <Icon className="w-4 h-4 text-slate-800" strokeWidth={1.8} />
            </div>
          )}
          <h3 className="text-sm sm:text-base font-bold text-[#0B192C] tracking-tight truncate">
            {title}
          </h3>
        </div>

        <div className="w-6 h-6 flex items-center justify-center text-slate-700 shrink-0">
          {isOpen ? (
            <ChevronUp className="w-5 h-5 text-slate-800" strokeWidth={2} />
          ) : (
            <ChevronDown className="w-5 h-5 text-slate-700" strokeWidth={2} />
          )}
        </div>
      </button>

      {isOpen && (
        <div
          id={panelId}
          role="region"
          aria-labelledby={buttonId}
          className="border-t border-slate-100 p-3 sm:p-4 bg-slate-50/40 text-slate-700"
        >
          {children}
        </div>
      )}
    </div>
  );
}
