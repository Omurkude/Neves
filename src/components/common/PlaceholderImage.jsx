import React from 'react';

/**
 * High-fidelity vector illustrations crafted to closely match the reference screenshot.
 * Features realistic glass bottles, the NEVE logo, and an authentic FSSAI licence document.
 */
export default function PlaceholderImage({
  type = 'bottle',
  flavour = 'classic',
  className = '',
  title = ''
}) {
  if (type === 'logo') {
    return (
      <div className={`flex flex-col select-none ${className}`}>
        <div className="flex items-center">
          <span className="text-2xl sm:text-3xl font-black italic tracking-tighter text-[#E63946] leading-none">
            NEVE
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#0B192C] ml-0.5 mt-1" />
        </div>
        {/* Dynamic Curved Swoosh matching the beverage brand reference */}
        <svg className="w-14 sm:w-16 h-2 -mt-0.5 text-[#E63946]" viewBox="0 0 60 7" fill="none">
          <path d="M0 2 Q 18 7, 34 3 T 60 2" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
        </svg>
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
            {/* QR Code Placeholder */}
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

  // Realistic Glass Beverage Bottle Vector
  const bottleConfigs = {
    classic: {
      liquidColor: '#300C0C',
      liquidGradient: ['#4A1212', '#2A0808'],
      capColor: '#E63946',
      labelColor: '#E63946',
      labelTitle: 'NEVE',
      labelSubtitle: 'CLASSIC'
    },
    lime: {
      liquidColor: '#16A34A',
      liquidGradient: ['#22C55E', '#15803D'],
      capColor: '#16A34A',
      labelColor: '#15803D',
      labelTitle: 'NEVE',
      labelSubtitle: 'LIME'
    },
    orange: {
      liquidColor: '#EA580C',
      liquidGradient: ['#FB923C', '#C2410C'],
      capColor: '#EA580C',
      labelColor: '#C2410C',
      labelTitle: 'NEVE',
      labelSubtitle: 'ORANGE'
    }
  };

  const cfg = bottleConfigs[flavour] || bottleConfigs.classic;

  return (
    <div className={`relative flex items-center justify-center select-none ${className}`}>
      <svg
        viewBox="0 0 100 240"
        className="w-full h-full max-h-44 sm:max-h-52 object-contain drop-shadow-sm filter"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label={title || `${flavour} bottle`}
      >
        <defs>
          {/* Liquid Gradient */}
          <linearGradient id={`liquid-${flavour}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={cfg.liquidGradient[0]} />
            <stop offset="35%" stopColor={cfg.liquidGradient[0]} />
            <stop offset="70%" stopColor={cfg.liquidGradient[1]} />
            <stop offset="100%" stopColor={cfg.liquidColor} />
          </linearGradient>

          {/* Glass Highlight */}
          <linearGradient id={`shine-${flavour}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </linearGradient>

          {/* Cap Metallic Tone */}
          <linearGradient id={`cap-${flavour}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={cfg.capColor} />
            <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.4" />
            <stop offset="100%" stopColor={cfg.capColor} />
          </linearGradient>
        </defs>

        {/* Crown Bottle Cap with Fluting */}
        <path d="M41 12 L59 12 L58 22 L42 22 Z" fill={`url(#cap-${flavour})`} stroke="#1E293B" strokeWidth="0.8" />
        <line x1="44" y1="12" x2="44" y2="22" stroke="#FFFFFF" strokeWidth="0.5" strokeOpacity="0.6" />
        <line x1="48" y1="12" x2="48" y2="22" stroke="#FFFFFF" strokeWidth="0.5" strokeOpacity="0.6" />
        <line x1="52" y1="12" x2="52" y2="22" stroke="#FFFFFF" strokeWidth="0.5" strokeOpacity="0.6" />
        <line x1="56" y1="12" x2="56" y2="22" stroke="#FFFFFF" strokeWidth="0.5" strokeOpacity="0.6" />

        {/* Glass Bottle Lip & Ring */}
        <rect x="42" y="22" width="16" height="4" rx="2" fill="#E2E8F0" fillOpacity="0.8" stroke="#94A3B8" strokeWidth="0.5" />

        {/* Bottle Neck */}
        <path d="M43 26 L39 65 L61 65 L57 26 Z" fill={`url(#liquid-${flavour})`} />

        {/* Bottle Body & Curved Shoulder */}
        <path
          d="M39 65 C26 76 22 96 22 118 L22 208 C22 220 28 225 36 225 L64 225 C72 225 78 220 78 208 L78 118 C78 96 74 76 61 65 Z"
          fill={`url(#liquid-${flavour})`}
          stroke="#475569"
          strokeWidth="0.6"
        />

        {/* Glass Specular Reflection on Shoulder & Body */}
        <path d="M28 85 Q32 150 28 210" stroke={`url(#shine-${flavour})`} strokeWidth="3" strokeLinecap="round" />
        <path d="M45 32 L44 60" stroke="#FFFFFF" strokeWidth="1.5" strokeOpacity="0.35" strokeLinecap="round" />

        {/* Waist Label Band */}
        <rect x="22" y="112" width="56" height="48" rx="2" fill={cfg.labelColor} stroke="#FFFFFF" strokeWidth="0.8" />

        {/* NEVE Brand Label Typography */}
        <text
          x="50"
          y="132"
          textAnchor="middle"
          fill="#FFFFFF"
          fontSize="13"
          fontWeight="900"
          letterSpacing="0.8"
          fontStyle="italic"
          fontFamily="sans-serif"
        >
          {cfg.labelTitle}
        </text>

        {/* Flavour Subtitle on Label */}
        <text
          x="50"
          y="146"
          textAnchor="middle"
          fill="#FFFFFF"
          fontSize="7"
          fontWeight="800"
          letterSpacing="1"
          fontFamily="sans-serif"
        >
          {cfg.labelSubtitle}
        </text>

        {/* Glass Base */}
        <ellipse cx="50" cy="225" rx="20" ry="3.5" fill="#0F172A" fillOpacity="0.8" />
      </svg>
    </div>
  );
}
