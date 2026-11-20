import React from 'react';
import { MessageCircle, CheckCircle2, ShieldCheck, Sparkles, MapPin } from 'lucide-react';

export default function SelectedProductDetails({ flavour }) {
  if (!flavour) return null;

  const { name, variant, tagline, description, tasteNotes, specs, theme, image } = flavour;

  // WhatsApp order link with pre-filled message
  const whatsappUrl = `https://wa.me/917020906373?text=${encodeURIComponent(
    `Hi NEVE Cool, I want to order ${name} (200ml bottles) from Saheb Sultan Industries Bhandara.`
  )}`;

  return (
    <div id="selected-product" className="mb-12 sm:mb-16 scroll-mt-20">
      <div
        className={`relative rounded-3xl p-6 sm:p-8 md:p-10 text-white overflow-hidden shadow-2xl border-2 ${theme.detailBorder} bg-gradient-to-br ${theme.detailBg}`}
      >
        {/* Subtle Background Radial Ambient Glow */}
        <div
          className="absolute -top-24 -right-24 w-80 h-80 rounded-full blur-3xl pointer-events-none opacity-40"
          style={{ backgroundColor: theme.accentColor }}
        />
        <div
          className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full blur-3xl pointer-events-none opacity-30"
          style={{ backgroundColor: theme.accentColor }}
        />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Bottle Column: Grand uncropped bottle with dramatic drop shadow & price badge */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative w-full flex items-center justify-center py-2">
              {/* Bottle Halo */}
              <div
                className="absolute w-44 h-44 sm:w-56 sm:h-56 rounded-full blur-3xl opacity-50"
                style={{ backgroundColor: theme.accentColor }}
              />
              <img
                src={image}
                alt={`${name} 200ml bottle`}
                className="relative z-10 h-64 sm:h-80 md:h-96 w-auto object-contain drop-shadow-[0_25px_30px_rgba(0,0,0,0.8)] transform hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Price & Authenticity Stamp */}
            <div className="mt-2 flex items-center gap-2 bg-black/40 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15 text-xs font-baloo">
              <span className="text-[#FACC15] font-black text-sm">₹10 ONLY</span>
              <span className="text-white/40">•</span>
              <span className="text-white/90 font-bold">200ml Bottle</span>
              <span className="text-white/40">•</span>
              <span className="text-emerald-400 font-bold">100% Veg</span>
            </div>
          </div>

          {/* Details Column: Fills all empty space beside bottle */}
          <div className="lg:col-span-7 space-y-4 text-center lg:text-left">
            {/* Brand Sub-Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/15 text-xs font-baloo font-bold text-amber-300 uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>SAHEB SULTAN'S NEVE COOL</span>
            </div>

            {/* Bold Product Heading in Lilita One */}
            <div>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-lilita text-white tracking-wide leading-none">
                {name}
              </h3>
              <p className="mt-1.5 font-baloo text-lg sm:text-xl text-[#FACC15] font-bold">
                "{tagline}"
              </p>
            </div>

            {/* Human, Grounded Description in DM Sans */}
            <p className="text-sm sm:text-base font-dmsans text-white/90 leading-relaxed max-w-xl mx-auto lg:mx-0">
              {description}
            </p>

            {/* 3 Short Taste Notes Chips */}
            <div className="space-y-1.5 pt-1">
              <span className="text-[11px] font-baloo font-black uppercase tracking-wider text-white/70 block">
                Taste Profile & Desi Masala Notes
              </span>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
                {tasteNotes.map((note) => (
                  <span
                    key={note}
                    className="px-3 py-1.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white font-baloo font-bold text-xs sm:text-sm flex items-center gap-1.5 shadow-xs"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#FACC15]" />
                    <span>{note}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Available Sizes & Price Badges */}
            <div className="grid grid-cols-2 gap-3 pt-2 max-w-md mx-auto lg:mx-0">
              <div className="p-3 rounded-2xl bg-white/5 border border-white/15 text-left">
                <span className="text-[10px] font-baloo font-bold uppercase tracking-wider text-white/60 block">
                  Net Serving Size
                </span>
                <span className="font-baloo font-black text-white text-sm sm:text-base">
                  {specs.volume} PET Bottle
                </span>
              </div>
              <div className="p-3 rounded-2xl bg-white/5 border border-white/15 text-left">
                <span className="text-[10px] font-baloo font-bold uppercase tracking-wider text-white/60 block">
                  Max Retail Price
                </span>
                <span className="font-baloo font-black text-[#FACC15] text-sm sm:text-base">
                  {specs.mrp}
                </span>
              </div>
            </div>

            {/* ONE STRONG CTA BUTTON: Order on WhatsApp */}
            <div className="pt-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] active:scale-98 text-white font-baloo font-black text-base sm:text-lg shadow-xl hover:shadow-2xl transition-all duration-200 cursor-pointer min-h-[52px]"
              >
                <MessageCircle className="w-6 h-6 fill-current" />
                <span>Order {name} on WhatsApp →</span>
              </a>

              <p className="mt-2 text-[11px] font-dmsans text-white/60 flex items-center justify-center lg:justify-start gap-1.5">
                <MapPin className="w-3 h-3 text-white/50" />
                <span>Direct wholesale & retail crate delivery from Bhandara unit: <strong>+91 70209 06373</strong></span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
