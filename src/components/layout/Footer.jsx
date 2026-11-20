import React from 'react';
import { MessageCircle, Phone, MapPin, ShieldCheck } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0B192C] text-white pt-10 pb-8 mt-14 border-t-4 border-[#E63946]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 pb-8 border-b border-white/10">
          <div className="sm:col-span-6 space-y-3">
            <div className="flex items-baseline gap-2">
              <span className="font-lilita text-2xl sm:text-3xl text-white tracking-wider">
                NEVE COOL
              </span>
              <span className="bg-[#E63946] text-white font-lilita text-xs px-2 py-0.5 rounded-sm uppercase">
                DESI SODA
              </span>
            </div>
            <p className="text-xs sm:text-sm font-dmsans text-slate-300 leading-relaxed max-w-sm">
              Authentic Indian sweetened carbonated beverages bottled fresh by <strong>Saheb Sultan Industries</strong>. High effervescence, balanced masala, ice cold refreshment at ₹10.
            </p>
            <div className="flex items-center gap-1.5 text-xs font-baloo text-emerald-400">
              <ShieldCheck className="w-4 h-4" />
              <span>FSSAI License No. 11525058000154 (FDA Maharashtra)</span>
            </div>
          </div>

          <div className="sm:col-span-6 space-y-3 sm:text-right">
            <p className="text-xs font-baloo font-bold uppercase tracking-widest text-slate-400">
              Direct Inquiries & Wholesale Supply
            </p>
            <div className="space-y-1 text-xs font-dmsans text-slate-300">
              <p className="flex sm:justify-end items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#E63946]" />
                <span>Plot No. 191/1/B/6, Ashok Nagar, T.D. Bhandara, Maharashtra - 441906</span>
              </p>
              <p className="flex sm:justify-end items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#E63946]" />
                <span>Customer Care: <strong>+91 70209 06373</strong></span>
              </p>
            </div>

            <div className="pt-2 sm:flex sm:justify-end">
              <a
                href="https://wa.me/917020906373?text=Hi%20NEVE%20Cool%2C%20I%20want%20to%20order%20soda%20bottles!"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-baloo font-bold text-xs uppercase tracking-wider shadow-md transition-transform active:scale-95 min-h-[44px]"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Order Direct on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Strip */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] font-dmsans text-slate-400 text-center sm:text-left">
          <p>© {new Date().getFullYear()} Saheb Sultan Industries (NEVE Cool). All rights reserved.</p>
          <p>Hand-crafted for mobile QR scan • Sourced & bottled in Bhandara, Maharashtra.</p>
        </div>
      </div>
    </footer>
  );
}
