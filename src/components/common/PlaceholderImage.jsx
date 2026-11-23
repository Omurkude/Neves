import React from 'react';

/**
 * Authentic brand logo component for NEVE.
 */
export default function PlaceholderImage({
  type = 'logo',
  className = '',
}) {
  if (type === 'logo') {
    return (
      <div className={`flex items-center gap-2 select-none ${className}`}>
        {/* Blue Shield Badge matching the bottle label */}
        <div className="bg-[#1D4ED8] px-2.5 py-1 rounded-md shadow-2xs border border-blue-800 flex items-center justify-center">
          <span className="text-xl sm:text-2xl font-black tracking-wider text-white leading-none font-sans">
            NEVE
          </span>
        </div>
        <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#E63946] border-l border-slate-300 pl-2">
          COOL
        </span>
      </div>
    );
  }

  return null;
}
