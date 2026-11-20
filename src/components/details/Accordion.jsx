import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

/**
 * Hand-crafted Accordion Component with bold beverage styling.
 * Tap target is 52px+ for effortless one-handed mobile tapping.
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
      className={`rounded-2xl border-2 transition-all duration-200 overflow-hidden bg-white ${
        isOpen
          ? 'border-[#0B192C] shadow-lg'
          : 'border-slate-200 hover:border-slate-400 shadow-xs'
      } ${className}`}
    >
      <button
        type="button"
        id={buttonId}
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={onToggle}
        className="w-full text-left p-4 sm:p-4.5 flex items-center justify-between gap-3 select-none cursor-pointer min-h-[52px] focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#E63946]"
      >
        <div className="flex items-center gap-3 min-w-0">
          {Icon && (
            <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 border transition-colors ${
              isOpen
                ? 'bg-[#0B192C] text-white border-[#0B192C]'
                : 'bg-slate-100 text-[#0B192C] border-slate-200'
            }`}>
              <Icon className="w-4.5 h-4.5" strokeWidth={2.2} />
            </div>
          )}
          <h3 className="text-sm sm:text-base font-baloo font-bold text-[#0B192C] tracking-tight truncate">
            {title}
          </h3>
        </div>

        <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
          isOpen ? 'bg-slate-100 text-[#0B192C]' : 'text-slate-500'
        }`}>
          {isOpen ? (
            <ChevronUp className="w-5 h-5 text-[#0B192C]" strokeWidth={2.5} />
          ) : (
            <ChevronDown className="w-5 h-5 text-slate-700" strokeWidth={2.5} />
          )}
        </div>
      </button>

      {isOpen && (
        <div
          id={panelId}
          role="region"
          aria-labelledby={buttonId}
          className="border-t-2 border-slate-100 p-4 sm:p-5 bg-[#FAF8F5] text-slate-800 font-dmsans"
        >
          {children}
        </div>
      )}
    </div>
  );
}
