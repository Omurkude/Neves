import React from 'react';
import { ShieldCheck } from 'lucide-react';

const certificates = [
  {
    name: 'FSSAI',
    src: '/images/certificates/fssai.png',
    alt: 'FSSAI Food Safety and Standards Authority of India'
  },
  {
    name: 'HACCP',
    src: '/images/certificates/haccp.png',
    alt: 'HACCP Hazard Analysis Critical Control Point'
  },
  {
    name: 'ISO 22000',
    src: '/images/certificates/iso-22000.png',
    alt: 'ISO 22000 Certified Food Safety Management System'
  },
  {
    name: 'UKSAF',
    src: '/images/certificates/uksaf.png',
    alt: 'UKSAF UK Scotland Accreditation Forum UKSAF-CB-009'
  },
  {
    name: 'FDA',
    src: '/images/certificates/fda.png',
    alt: 'FDA Food Safety Standards Regulatory Authority'
  }
];

// Repeat 3 times per half to ensure seamless coverage across all screens (ultrawide, desktop, tablet, mobile)
const sequenceItems = [...certificates, ...certificates, ...certificates];

export default function CertificationMarquee() {
  return (
    <section
      aria-label="Food Safety Certifications"
      className="w-full bg-slate-50/90 border-t border-slate-200/80 py-4 sm:py-5 overflow-hidden select-none"
    >
      <div className="max-w-4xl mx-auto px-4 mb-3 text-center">
        {/* Centered Heading with Shield Check Icon */}
        <div className="inline-flex items-center justify-center gap-1.5 text-slate-800">
          <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" strokeWidth={2.2} />
          <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-800">
            We Are Certified By
          </h3>
        </div>
      </div>

      {/* Marquee Wrapper with soft fade gradients on edges */}
      <div className="relative w-full overflow-hidden marquee-container">
        {/* Edge Fade Gradients for smooth entrance/exit */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-slate-50 to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-slate-50 to-transparent z-10" />

        {/* Scrolling Track with duplicate sequence for seamless loop */}
        <div className="animate-marquee-infinite flex items-center">
          {/* Half 1 */}
          <div className="flex items-center shrink-0 gap-4 sm:gap-6 pr-4 sm:pr-6">
            {sequenceItems.map((cert, index) => (
              <div
                key={`c1-${cert.name}-${index}`}
                className="flex items-center justify-center h-13 sm:h-15 px-3.5 sm:px-4 py-2 rounded-xl bg-white border border-slate-200/70 shadow-2xs transition-transform duration-200 hover:scale-105 shrink-0"
              >
                <img
                  src={cert.src}
                  alt={cert.alt}
                  loading="lazy"
                  className="h-8 sm:h-10 w-auto max-w-[105px] sm:max-w-[125px] object-contain"
                />
              </div>
            ))}
          </div>

          {/* Half 2 (Duplicated for seamless infinite loop) */}
          <div className="flex items-center shrink-0 gap-4 sm:gap-6 pr-4 sm:pr-6" aria-hidden="true">
            {sequenceItems.map((cert, index) => (
              <div
                key={`c2-${cert.name}-${index}`}
                className="flex items-center justify-center h-13 sm:h-15 px-3.5 sm:px-4 py-2 rounded-xl bg-white border border-slate-200/70 shadow-2xs transition-transform duration-200 hover:scale-105 shrink-0"
              >
                <img
                  src={cert.src}
                  alt=""
                  loading="lazy"
                  className="h-8 sm:h-10 w-auto max-w-[105px] sm:max-w-[125px] object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
