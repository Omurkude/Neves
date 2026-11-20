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
        {/* Bold Blue Shield Badge matching the bottle label */}
        <div className="bg-[#1D4ED8] hover:bg-[#1e40af] transition-colors px-3 py-1 rounded-lg shadow-md border-2 border-blue-900 flex flex-col items-center justify-center">
          <span className="text-[8px] sm:text-[9px] font-bold uppercase tracking-widest text-blue-200 leading-none">
            SAHEB SULTAN'S
          </span>
          <span className="text-xl sm:text-2xl font-lilita tracking-wider text-white leading-tight">
            NEVE
          </span>
        </div>
        {/* Energetic "COOL" badge with Lilita One */}
        <div className="bg-[#E63946] px-2 py-1 rounded-md shadow-xs border border-red-700 flex items-center justify-center">
          <span className="font-lilita text-xs sm:text-sm uppercase tracking-wider text-white leading-none">
            COOL
          </span>
        </div>
      </div>
    );
  }

  if (type === 'certificate') {
    return (
      <div className={`relative w-full rounded-xl border-2 border-slate-300 bg-white p-3.5 sm:p-4 text-[10px] sm:text-[11px] text-slate-800 shadow-md overflow-hidden ${className}`}>
        {/* FSSAI Watermark Background */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.04]">
          <span className="text-6xl font-black italic tracking-widest text-slate-900 font-lilita">fssai</span>
        </div>

        {/* Certificate Header */}
        <div className="relative z-10 flex items-start justify-between border-b border-slate-200 pb-2 mb-2">
          {/* FSSAI Logo */}
          <div className="flex items-center gap-1 font-black text-xs tracking-tighter">
            <span className="text-orange-500 text-sm font-lilita">f</span>
            <span className="text-emerald-600 text-sm font-lilita">ss</span>
            <span className="text-blue-600 text-sm font-lilita">a</span>
            <span className="text-orange-600 text-sm font-lilita">i</span>
          </div>

          {/* Central Government Header */}
          <div className="text-center px-1">
            <p className="font-bold text-[9px] sm:text-[10px] leading-tight text-slate-900 font-baloo">
              Government of Maharashtra<br />Food And Drug Administration
            </p>
            <p className="text-[8px] sm:text-[9px] font-semibold text-slate-600 mt-0.5">
              Food Safety and Standards Authority of India (Form C)
            </p>
          </div>

          {/* FDA Emblem Crest Placeholder */}
          <div className="w-6 h-7 flex items-center justify-center text-slate-700">
            <svg viewBox="0 0 24 28" className="w-5 h-6" fill="currentColor">
              <path d="M12 2 L14 7 L19 7 L15 11 L17 16 L12 13 L7 16 L9 11 L5 7 L10 7 Z" />
              <rect x="6" y="18" width="12" height="2" rx="1" />
              <rect x="8" y="21" width="8" height="2" rx="1" />
            </svg>
          </div>
        </div>

        {/* Certificate Details Grid */}
        <div className="relative z-10 grid grid-cols-12 gap-2 my-2 font-dmsans">
          {/* Left Data Column */}
          <div className="col-span-8 space-y-1 text-[9px] sm:text-[10px] leading-snug">
            <div>
              <span className="text-slate-500">License Number:</span>
              <p className="font-mono font-bold text-slate-900 text-xs">11525058000154</p>
            </div>
            <div>
              <span className="text-slate-500">Name of Licensee:</span>
              <p className="font-bold text-slate-900">JAGESHVAR MAHADEV BANGAR</p>
              <p className="text-[9px] font-semibold text-blue-900">Saheb Sultan Industries</p>
            </div>
            <div>
              <span className="text-slate-500">Address of Premises:</span>
              <p className="text-slate-700 leading-tight">Plot No. 191/1/B/6, Ashok Nagar, T.D. Bhandara, Maharashtra - 441906</p>
            </div>
            <div>
              <span className="text-slate-500">Kind of Business:</span>
              <p className="text-slate-800 font-medium">Manufacturer - General Manufacturing</p>
            </div>
            <div className="flex gap-4 pt-0.5">
              <div>
                <span className="text-slate-500">Issued On:</span>
                <p className="text-slate-800 font-medium">10-11-2025</p>
              </div>
              <div>
                <span className="text-slate-500">Valid Upto:</span>
                <p className="text-emerald-700 font-bold">09-11-2028</p>
              </div>
            </div>
          </div>

          {/* Right Column: QR Code + Officer Signature */}
          <div className="col-span-4 flex flex-col items-center justify-between pl-1 border-l border-slate-100">
            {/* QR Code Graphic */}
            <div className="w-14 h-14 sm:w-16 sm:h-16 p-1 bg-white border border-slate-300 rounded shadow-xs flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-full h-full text-slate-900" fill="currentColor">
                <path d="M2 2h8v8H2V2zm2 2v4h4V4H4zm10-2h8v8h-8V2zm2 2v4h4V4h-4zM2 14h8v8H2v-8zm2 2v4h4v-4H4zm13-2h3v3h-3v-3zm0 5h3v3h-3v-3zm-3-5h2v2h-2v-2zm0 4h2v4h-2v-4zm5-2h2v4h-2v-4zM5 5h2v2H5V5zm12 0h2v2h-2V5zM5 17h2v2H5v-2z" />
              </svg>
            </div>

            {/* Signature Area */}
            <div className="text-center mt-2">
              <div className="inline-block text-emerald-600 font-bold text-[10px] leading-none mb-0.5">✓ Verified</div>
              <p className="text-[8px] font-bold text-slate-700 leading-tight">Designated Officer</p>
              <p className="text-[7px] text-slate-500">Bhandara (FDA MH)</p>
            </div>
          </div>
        </div>

        {/* Disclaimer Note at Bottom */}
        <div className="relative z-10 pt-1.5 border-t border-slate-200 text-[8px] text-slate-500 text-center">
          This is a computer generated license and does not require any signature or stamp by authority.
        </div>
      </div>
    );
  }

  return null;
}
