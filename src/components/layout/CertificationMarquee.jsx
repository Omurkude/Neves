import React from 'react';
import { useTranslation } from 'react-i18next';
import { ShieldCheck } from 'lucide-react';

const certificates = [
  {
    name: 'FSSAI',
    src: '/images/certificates/fssai-official.png',
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
    name: 'FDA Maharashtra',
    src: '/images/certificates/fda-maharashtra.png',
    alt: 'Government of Maharashtra Food And Drug Administration'
  }
];

// Repeat 3 times per half to ensure seamless coverage across all screens (ultrawide, desktop, tablet, mobile)
const sequenceItems = [...certificates, ...certificates, ...certificates];

export default function CertificationMarquee() {
  const { t } = useTranslation();

  return (
    <section
      aria-label="Food Safety Certifications"
      className="w-full bg-white py-5 sm:py-7 overflow-hidden select-none"
    >
      <div className="max-w-4xl mx-auto px-4 mb-4 text-center">
        {/* Centered Heading with Shield Check Icon */}
        <div className="inline-flex items-center justify-center gap-1.5 text-slate-800">
          <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" strokeWidth={2.2} />
          <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-800">
            {t('marquee.title', 'We Are Certified By')}
          </h3>
        </div>
      </div>

      {/* Marquee Wrapper with soft fade gradients on edges */}
      <div className="relative w-full overflow-hidden marquee-container">
        {/* Edge Fade Gradients for smooth entrance/exit (matching pure white background) */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-10 sm:w-20 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-10 sm:w-20 bg-gradient-to-l from-white to-transparent z-10" />

        {/* Scrolling Track with duplicate sequence for seamless loop */}
        <div className="animate-marquee-infinite flex items-center">
          {/* Half 1 */}
          <div className="flex items-center shrink-0 gap-8 sm:gap-12 pr-8 sm:pr-12">
            {sequenceItems.map((cert, index) => (
              <div
                key={`c1-${cert.name}-${index}`}
                className="flex items-center justify-center shrink-0 h-10 sm:h-12 px-2 transition-transform duration-200 hover:scale-105"
              >
                <img
                  src={cert.src}
                  alt={cert.alt}
                  loading="lazy"
                  className="h-8 sm:h-10 w-auto max-w-[110px] sm:max-w-[130px] object-contain"
                />
              </div>
            ))}
          </div>

          {/* Half 2 (Duplicated for seamless infinite loop) */}
          <div className="flex items-center shrink-0 gap-8 sm:gap-12 pr-8 sm:pr-12" aria-hidden="true">
            {sequenceItems.map((cert, index) => (
              <div
                key={`c2-${cert.name}-${index}`}
                className="flex items-center justify-center shrink-0 h-10 sm:h-12 px-2 transition-transform duration-200 hover:scale-105"
              >
                <img
                  src={cert.src}
                  alt=""
                  loading="lazy"
                  className="h-8 sm:h-10 w-auto max-w-[110px] sm:max-w-[130px] object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
