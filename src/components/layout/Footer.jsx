import React from 'react';
import { ArrowUp, QrCode, ShieldCheck, Heart } from 'lucide-react';
import PlaceholderImage from '../common/PlaceholderImage.jsx';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-navy text-slate-300 pt-12 pb-8 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-800">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-black text-white tracking-tight">
                NEVE
              </span>
              <span className="w-2.5 h-2.5 rounded-full bg-brand-red" />
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest pl-2 border-l border-slate-700">
                Beverages
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Artisan sparkling beverages crafted with natural botanical extracts, crisp effervescence, and uncompromising regulatory transparency for conscious consumers.
            </p>

            <div className="flex items-center gap-2 text-xs text-emerald-400 font-semibold bg-slate-800/80 px-3 py-1.5 rounded-lg w-fit border border-slate-700">
              <ShieldCheck className="w-4 h-4" />
              <span>QR Authentication & Verification Enabled</span>
            </div>
          </div>

          {/* Quick Section Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Product Information
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <a href="#flavours" className="hover:text-brand-red transition-colors">
                  Our Signature Flavours
                </a>
              </li>
              <li>
                <a href="#fssai" className="hover:text-brand-red transition-colors">
                  FSSAI & Regulatory Filings
                </a>
              </li>
              <li>
                <a href="#ingredients" className="hover:text-brand-red transition-colors">
                  Ingredients & Allergen Declarations
                </a>
              </li>
              <li>
                <a href="#nutrition" className="hover:text-brand-red transition-colors">
                  Nutrition Facts & Servings
                </a>
              </li>
              <li>
                <a href="#manufacturing" className="hover:text-brand-red transition-colors">
                  Manufacturing & Batch Coding
                </a>
              </li>
              <li>
                <a href="#quality" className="hover:text-brand-red transition-colors">
                  Quality Assurance Protocols
                </a>
              </li>
            </ul>
          </div>

          {/* Consumer Support & Helpline */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Consumer Grievance & Inquiries
            </h4>
            <p className="text-xs text-slate-400">
              Have questions regarding batch numbers, quality certificates, or distributor inquiries?
            </p>
            <div className="space-y-1.5 text-xs">
              <p className="text-slate-200">
                Helpline:{' '}
                <a href="tel:18002666383" className="font-bold text-white hover:text-brand-red">
                  1800-266-NEVE (6383)
                </a>
              </p>
              <p className="text-slate-200">
                Email:{' '}
                <a href="mailto:care@nevebeverages.com" className="font-bold text-white hover:text-brand-red">
                  care@nevebeverages.com
                </a>
              </p>
              <p className="text-slate-400">
                Hours: Mon – Sat, 9:00 AM – 6:30 PM IST
              </p>
            </div>
          </div>
        </div>

        {/* Regulatory & Disclaimer Strip */}
        <div className="py-6 border-b border-slate-800 text-[11px] text-slate-400 leading-relaxed space-y-2">
          <p>
            <strong className="text-slate-300">Regulatory Disclaimer:</strong> NEVE Beverages Private Limited adheres strictly to the statutory guidelines issued under the Food Safety and Standards Act. All nutritional facts and values represent laboratory averages. License certificate previews remain placeholder-governed pending central gazette synchronisation.
          </p>
          <p>
            Carbonated fruit & botanical beverage. Best served chilled. Consume responsibly.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} NEVE Beverages Pvt. Ltd. All rights reserved.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-brand-red"
            aria-label="Scroll back to top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span>Back to Top</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
