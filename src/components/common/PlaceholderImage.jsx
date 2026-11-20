import React from 'react';

/**
 * Authentic brand assets and statutory document mockups for NEVE.
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

  if (type === 'certificate') {
    return (
      <div className={`relative w-full rounded-sm border border-slate-300 bg-white p-3 sm:p-4 text-[10px] sm:text-[11px] text-slate-800 shadow-2xs overflow-hidden ${className}`}>
        {/* FSSAI Watermark Background */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.04]">
          <span className="text-6xl font-black italic tracking-widest text-slate-900">fssai</span>
        </div>

        {/* Certificate Header */}
        <div className="relative z-10 flex items-start justify-between border-b border-slate-200 pb-2 mb-2">
          {/* FSSAI Logo */}
          <div className="flex items-center gap-1 font-black text-xs tracking-tighter">
            <span className="text-orange-500 text-sm">f</span>
            <span className="text-emerald-600 text-sm">ss</span>
            <span className="text-blue-600 text-sm">a</span>
            <span className="text-orange-600 text-sm">i</span>
          </div>

          {/* Central Government Header */}
          <div className="text-center px-1">
            <p className="font-bold text-[9px] sm:text-[10px] leading-tight text-slate-900">
              Food Safety and Standards<br />Authority of India
            </p>
            <p className="text-[8px] sm:text-[9px] font-semibold text-slate-600 mt-0.5">
              Food Business Licence
            </p>
          </div>

          {/* National Emblem Crest Placeholder */}
          <div className="w-6 h-7 flex items-center justify-center text-slate-700">
            <svg viewBox="0 0 24 28" className="w-5 h-6" fill="currentColor">
              <path d="M12 2 L14 7 L19 7 L15 11 L17 16 L12 13 L7 16 L9 11 L5 7 L10 7 Z" />
              <rect x="6" y="18" width="12" height="2" rx="1" />
              <rect x="8" y="21" width="8" height="2" rx="1" />
            </svg>
          </div>
        </div>

        {/* Certificate Details Grid */}
        <div className="relative z-10 grid grid-cols-12 gap-2 my-2">
          {/* Left Data Column */}
          <div className="col-span-8 space-y-1 text-[9px] sm:text-[10px] leading-snug">
            <div>
              <span className="text-slate-500">Licence No.</span>
              <p className="font-mono font-bold text-slate-900">100XXXXXXXXXXXXXXXX</p>
            </div>
            <div>
              <span className="text-slate-500">Name of Business</span>
              <p className="font-semibold text-slate-900">NEVE Beverages Pvt. Ltd.</p>
            </div>
            <div>
              <span className="text-slate-500">Address</span>
              <p className="text-slate-700 leading-tight">Plot No. 12, Industrial Area, Phase II, [City, State - PIN Placeholder]</p>
            </div>
            <div>
              <span className="text-slate-500">Kind of Business</span>
              <p className="text-slate-800">Manufacturer (Non-Alcoholic Beverages)</p>
            </div>
            <div className="flex gap-4">
              <div>
                <span className="text-slate-500">Date of Issue</span>
                <p className="text-slate-800">[Issue Date]</p>
              </div>
              <div>
                <span className="text-slate-500">Valid Upto</span>
                <p className="text-slate-800 font-medium">[Validity Date]</p>
              </div>
            </div>
          </div>

          {/* Right Column: QR Code + Officer Signature */}
          <div className="col-span-4 flex flex-col items-center justify-between pl-1 border-l border-slate-100">
            {/* QR Code Graphic */}
            <div className="w-14 h-14 sm:w-16 sm:h-16 p-1 bg-white border border-slate-300 rounded shadow-2xs flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-full h-full text-slate-900" fill="currentColor">
                <path d="M2 2h8v8H2V2zm2 2v4h4V4H4zm10-2h8v8h-8V2zm2 2v4h4V4h-4zM2 14h8v8H2v-8zm2 2v4h4v-4H4zm13-2h3v3h-3v-3zm0 5h3v3h-3v-3zm-3-5h2v2h-2v-2zm0 4h2v4h-2v-4zm5-2h2v4h-2v-4zM5 5h2v2H5V5zm12 0h2v2h-2V5zM5 17h2v2H5v-2z" />
              </svg>
            </div>

            {/* Signature Area */}
            <div className="text-center mt-2">
              <svg viewBox="0 0 60 16" className="w-12 h-3 mx-auto text-slate-700" fill="none">
                <path d="M2 12 Q 15 2, 28 10 T 55 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
              <p className="text-[8px] font-bold text-slate-700 leading-tight">Designated Officer</p>
              <p className="text-[7px] text-slate-500">FSSAI</p>
            </div>
          </div>
        </div>

        {/* Disclaimer Note at Bottom */}
        <div className="relative z-10 pt-1.5 border-t border-slate-200 text-[8px] text-slate-500 text-center">
          This is a system generated licence and does not require signature.
        </div>
      </div>
    );
  }

  return null;
}
