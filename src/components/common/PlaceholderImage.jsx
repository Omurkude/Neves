import React from 'react';

/**
 * High-fidelity, responsive vector placeholders for NEVE.
 * Crisp at all screen densities, lightweight, no broken image URLs.
 */
export default function PlaceholderImage({
  type = 'bottle',
  flavour = 'classic',
  className = '',
  title = ''
}) {
  if (type === 'logo') {
    return (
      <div className={`inline-flex items-center gap-1.5 select-none ${className}`}>
        <span className="text-2xl font-black tracking-tight text-brand-navy">
          NEVE
        </span>
        <span className="w-2.5 h-2.5 rounded-full bg-brand-red animate-pulse" />
      </div>
    );
  }

  if (type === 'certificate') {
    return (
      <div className={`relative w-full aspect-[4/3] max-w-sm mx-auto rounded-xl border-2 border-dashed border-amber-300 bg-amber-50/60 p-4 sm:p-5 flex flex-col justify-between overflow-hidden shadow-xs ${className}`}>
        {/* Security Guilloche Pattern Emulation */}
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#d97706_1px,transparent_1px)] [background-size:12px_12px]" />
        
        {/* Certificate Header */}
        <div className="relative z-10 flex items-start justify-between border-b border-amber-200 pb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-full bg-amber-200/80 border border-amber-400 flex items-center justify-center text-amber-900 font-bold text-xs shadow-inner">
              FSSAI
            </div>
            <div>
              <p className="text-[10px] uppercase font-bold tracking-wider text-amber-800">
                Statutory Regulatory Record
              </p>
              <p className="text-xs font-semibold text-slate-800">
                Government Licence Certificate
              </p>
            </div>
          </div>
          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-200/90 text-amber-900 border border-amber-300">
            PREVIEW
          </span>
        </div>

        {/* Certificate Body */}
        <div className="relative z-10 my-3 text-center space-y-2">
          <div className="mx-auto w-12 h-12 rounded-full border border-amber-300 bg-white/80 flex items-center justify-center text-amber-700 shadow-xs">
            <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>
          </div>
          <p className="text-xs font-mono font-bold text-slate-800 tracking-wider">
            LIC. NO. [100XXXXXXXXXXXXXXXX]
          </p>
          <p className="text-[11px] text-slate-600 max-w-xs mx-auto leading-relaxed">
            Registered Entity: <strong className="text-slate-800">NEVE Beverages Pvt. Ltd.</strong>
          </p>
          <p className="text-[10px] text-amber-800 italic">
            Official certificate document pending central registry gazette sync.
          </p>
        </div>

        {/* Certificate Footer / Barcode */}
        <div className="relative z-10 pt-2 border-t border-amber-200 flex items-center justify-between text-[10px] text-slate-500 font-mono">
          <span>SEC-REG-2026</span>
          <div className="flex gap-0.5 items-center h-4">
            <span className="w-0.5 h-full bg-slate-700" />
            <span className="w-1 h-full bg-slate-700" />
            <span className="w-0.5 h-full bg-slate-400" />
            <span className="w-1.5 h-full bg-slate-700" />
            <span className="w-0.5 h-full bg-slate-700" />
            <span className="w-1 h-full bg-slate-700" />
            <span className="w-0.5 h-full bg-slate-400" />
          </div>
          <span>VERIFIED ID</span>
        </div>
      </div>
    );
  }

  // Bottle / Can Artwork Generator
  const palette = {
    classic: {
      canBody: '#220909',
      accent: '#E63946',
      lightAccent: '#FCA5A5',
      badge: 'CLASSIC COLA',
      tag: 'ORIGINAL'
    },
    lime: {
      canBody: '#0D2319',
      accent: '#059669',
      lightAccent: '#6EE7B7',
      badge: 'LIME COLA',
      tag: 'ZESTY'
    },
    orange: {
      canBody: '#2A170B',
      accent: '#EA580C',
      lightAccent: '#FDBA74',
      badge: 'ORANGE COLA',
      tag: 'CITRUS'
    }
  }[flavour] || {
    canBody: '#1E293B',
    accent: '#E63946',
    lightAccent: '#CBD5E1',
    badge: 'NEVE COLA',
    tag: 'SPARKLING'
  };

  return (
    <div className={`relative flex items-center justify-center p-3 select-none ${className}`}>
      <svg
        viewBox="0 0 160 300"
        className="w-full h-full max-h-60 sm:max-h-64 object-contain filter drop-shadow-md"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label={title || `${palette.badge} bottle illustration`}
      >
        <defs>
          <linearGradient id={`bodyGrad-${flavour}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={palette.canBody} />
            <stop offset="25%" stopColor="#3A1717" />
            <stop offset="50%" stopColor={palette.accent} stopOpacity="0.8" />
            <stop offset="70%" stopColor="#250B0B" />
            <stop offset="100%" stopColor={palette.canBody} />
          </linearGradient>

          <linearGradient id={`metallicCap-${flavour}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#CBD5E1" />
            <stop offset="50%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#94A3B8" />
          </linearGradient>

          <linearGradient id={`shine-${flavour}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Can / Bottle Crown Top */}
        <rect x="66" y="16" width="28" height="10" rx="3" fill={`url(#metallicCap-${flavour})`} stroke="#64748B" strokeWidth="1" />
        
        {/* Neck */}
        <path d="M68 26 L62 50 L98 50 L92 26 Z" fill={`url(#bodyGrad-${flavour})`} />

        {/* Can Main Body with Sleek Contours */}
        <rect x="42" y="50" width="76" height="215" rx="20" fill={`url(#bodyGrad-${flavour})`} stroke="#475569" strokeWidth="0.8" />

        {/* Glass / Metallic Specular Highlight */}
        <path d="M48 60 Q54 150 48 245" stroke={`url(#shine-${flavour})`} strokeWidth="4" strokeLinecap="round" />

        {/* Brand Label Background Band */}
        <rect x="42" y="95" width="76" height="120" rx="4" fill="#0B192C" fillOpacity="0.92" stroke={palette.accent} strokeWidth="1.5" />

        {/* Condensation Beads */}
        <circle cx="52" cy="75" r="2" fill="#FFFFFF" fillOpacity="0.5" />
        <circle cx="56" cy="79" r="1.5" fill="#FFFFFF" fillOpacity="0.6" />
        <circle cx="106" cy="115" r="2" fill="#FFFFFF" fillOpacity="0.5" />
        <circle cx="104" cy="120" r="1.5" fill="#FFFFFF" fillOpacity="0.6" />
        <circle cx="54" cy="225" r="2.2" fill="#FFFFFF" fillOpacity="0.5" />

        {/* Brand Text on Can */}
        <text x="80" y="125" textAnchor="middle" fill="#FFFFFF" fontSize="18" fontWeight="900" letterSpacing="2" fontFamily="sans-serif">
          NEVE
        </text>

        {/* Flavour Tagline on Can */}
        <rect x="52" y="135" width="56" height="16" rx="8" fill={palette.accent} />
        <text x="80" y="146" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontWeight="700" letterSpacing="0.8" fontFamily="sans-serif">
          {palette.tag}
        </text>

        {/* Sub-text */}
        <text x="80" y="170" textAnchor="middle" fill="#94A3B8" fontSize="8" fontWeight="600" letterSpacing="1" fontFamily="sans-serif">
          BOTANICAL
        </text>
        <text x="80" y="182" textAnchor="middle" fill="#E2E8F0" fontSize="9" fontWeight="800" letterSpacing="1" fontFamily="sans-serif">
          SPARKLING
        </text>
        <text x="80" y="198" textAnchor="middle" fill={palette.lightAccent} fontSize="7.5" fontWeight="600" fontFamily="sans-serif">
          250 ML
        </text>

        {/* Bottom Rim */}
        <ellipse cx="80" cy="265" rx="38" ry="8" fill={`url(#metallicCap-${flavour})`} stroke="#475569" strokeWidth="0.8" />
      </svg>
    </div>
  );
}
