import React, { useState } from 'react';
import { Menu, X, ChevronRight, MessageCircle, Phone } from 'lucide-react';
import PlaceholderImage from '../common/PlaceholderImage.jsx';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'Our Flavours', href: '#flavours' },
    { label: 'Bottle Specifications', href: '#selected-product' },
    { label: 'FSSAI & Regulatory Details', href: '#fssai-section' },
    { label: 'Ingredients & Allergen Information', href: '#ingredients-section' },
    { label: 'Nutrition Facts & Calories', href: '#nutrition-section' },
    { label: 'Manufacturing Address', href: '#manufacturing-section' },
    { label: 'Quality Assurance Reports', href: '#quality-section' },
    { label: 'Brand & Customer Support', href: '#support-section' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#FAF8F5]/95 backdrop-blur-md border-b-2 border-slate-200 shadow-xs">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Brand Logo: SAHEB SULTAN'S NEVE COOL */}
          <a href="#" className="flex items-center focus:outline-hidden" aria-label="NEVE Cool Home">
            <PlaceholderImage type="logo" />
          </a>

          {/* Right Action: Quick WhatsApp Order Button + Hamburger */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="https://wa.me/917020906373?text=Hi%20NEVE%20Cool%2C%20I%20want%20to%20order%20soda%20bottles!"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#25D366] hover:bg-[#20ba59] active:scale-95 text-white font-baloo font-bold text-xs tracking-wider uppercase shadow-xs transition-all min-h-[44px]"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Order on WhatsApp</span>
            </a>

            {/* Hamburger Toggle Button (Minimum 44px tap target) */}
            <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              className="w-11 h-11 inline-flex items-center justify-center rounded-xl text-[#0B192C] bg-white border border-slate-200 hover:bg-slate-100 transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#E63946] min-w-[44px] min-h-[44px]"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-[#E63946]" />
              ) : (
                <div className="w-5 flex flex-col gap-1 items-end">
                  <span className="w-5 h-0.5 bg-[#0B192C] rounded-full" />
                  <span className="w-5 h-0.5 bg-[#E63946] rounded-full" />
                  <span className="w-3.5 h-0.5 bg-[#0B192C] rounded-full" />
                </div>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Clean Mobile / Desktop Drawer Menu */}
      {isOpen && (
        <div id="mobile-menu" className="bg-white border-b-2 border-slate-200 px-4 py-4 shadow-xl animate-in slide-in-from-top-1">
          <div className="max-w-4xl mx-auto">
            {/* Quick Contact Header inside mobile menu */}
            <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200 mb-3 text-xs font-baloo">
              <span className="text-slate-600 font-bold">Direct Helpline:</span>
              <a href="tel:7020906373" className="text-[#E63946] font-extrabold flex items-center gap-1">
                <Phone className="w-3.5 h-3.5" />
                <span>+91 70209 06373</span>
              </a>
            </div>

            <nav className="flex flex-col space-y-1 font-baloo">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between py-2.5 px-3 rounded-xl text-sm font-bold text-slate-800 hover:text-[#E63946] hover:bg-red-50/70 transition-colors min-h-[44px]"
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
