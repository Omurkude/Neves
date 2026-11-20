import React, { useState } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import PlaceholderImage from '../common/PlaceholderImage.jsx';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'Our Flavours', href: '#flavours' },
    { label: 'Product Details', href: '#selected-product' },
    { label: 'FSSAI & Regulatory Details', href: '#fssai-section' },
    { label: 'Ingredients & Allergen Information', href: '#ingredients-section' },
    { label: 'Nutrition Facts & Calories', href: '#nutrition-section' },
    { label: 'Manufacturing Address', href: '#manufacturing-section' },
    { label: 'Quality Assurance Reports', href: '#quality-section' },
    { label: 'Brand & Customer Support', href: '#support-section' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-100 shadow-2xs">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Brand Logo: NEVE */}
          <a href="#" className="flex items-center focus:outline-hidden" aria-label="NEVE Home">
            <PlaceholderImage type="logo" />
          </a>

          {/* Hamburger Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            className="w-10 h-10 inline-flex items-center justify-center rounded-lg text-slate-900 hover:bg-slate-100 transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#E63946]"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-[#E63946]" />
            ) : (
              <div className="w-5 flex flex-col gap-1 items-end">
                <span className="w-5 h-0.5 bg-slate-900 rounded-full" />
                <span className="w-5 h-0.5 bg-slate-900 rounded-full" />
                <span className="w-5 h-0.5 bg-slate-900 rounded-full" />
              </div>
            )}
          </button>
        </div>
      </div>

      {/* Clean Mobile / Desktop Drawer Menu */}
      {isOpen && (
        <div id="mobile-menu" className="bg-white border-b border-slate-200 px-4 py-3 shadow-lg animate-in slide-in-from-top-1">
          <div className="max-w-3xl mx-auto">
            <nav className="flex flex-col space-y-1 font-outfit">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between py-2 px-3 rounded-lg text-sm font-semibold text-slate-700 hover:text-[#E63946] hover:bg-red-50/50 transition-colors"
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
