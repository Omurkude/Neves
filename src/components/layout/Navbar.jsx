import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { X, ChevronRight } from 'lucide-react';
import PlaceholderImage from '../common/PlaceholderImage.jsx';
import LanguageSwitcher from '../common/LanguageSwitcher.jsx';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const navLinks = [
    { label: t('nav.ourFlavours', 'Our Flavours'), href: '#flavours' },
    { label: t('nav.fssai', 'FSSAI & Regulatory Details'), href: '#fssai-section' },
    { label: t('nav.ingredients', 'Ingredients & Allergen Information'), href: '#ingredients-section' },
    { label: t('nav.nutrition', 'Nutrition Facts & Calories'), href: '#nutrition-section' },
    { label: t('nav.manufacturing', 'Manufacturing Address'), href: '#manufacturing-section' },
    { label: t('nav.quality', 'Quality Assurance Reports'), href: '#quality-section' },
    { label: t('nav.support', 'Brand & Customer Support'), href: '#support-section' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-100 shadow-2xs">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Brand Logo: NEVE */}
          <a href="#" className="flex items-center focus:outline-hidden" aria-label="NEVE Home">
            <PlaceholderImage type="logo" />
          </a>

          {/* Right Header Actions: Language Switcher + Hamburger Menu */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Language Switcher UI (English / हिन्दी) */}
            <LanguageSwitcher />

            {/* Hamburger Menu Toggle Button */}
            <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? t('nav.closeMenu', 'Close menu') : t('nav.openMenu', 'Open menu')}
              className="w-9 h-9 sm:w-10 sm:h-10 inline-flex items-center justify-center rounded-lg text-slate-900 hover:bg-slate-100 transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#E63946] cursor-pointer"
            >
              {isOpen ? (
                <X className="w-5 h-5 sm:w-6 sm:h-6 text-[#E63946]" />
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
      </div>

      {/* Clean Mobile / Desktop Drawer Menu */}
      {isOpen && (
        <div id="mobile-menu" className="bg-white border-b border-slate-200 px-4 py-3 shadow-lg animate-in slide-in-from-top-1">
          <div className="max-w-3xl mx-auto">
            <nav className="flex flex-col space-y-1">
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
