import React, { useState, useEffect } from 'react';
import { Menu, X, QrCode, ShieldCheck, ChevronRight } from 'lucide-react';
import PlaceholderImage from '../common/PlaceholderImage.jsx';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Flavours', href: '#flavours' },
    { label: 'FSSAI Details', href: '#fssai' },
    { label: 'Ingredients', href: '#ingredients' },
    { label: 'Nutrition', href: '#nutrition' },
    { label: 'Manufacturing', href: '#manufacturing' },
    { label: 'Quality QA', href: '#quality' },
    { label: 'Support', href: '#support' },
  ];

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-slate-200/80'
          : 'bg-white border-b border-slate-100'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Brand Logo */}
          <a
            href="#"
            className="flex items-center gap-2 group focus:outline-hidden focus-visible:ring-2 focus-visible:ring-brand-red rounded-lg py-1 px-1.5"
            aria-label="NEVE Home"
          >
            <PlaceholderImage type="logo" />
            <span className="hidden min-[400px]:inline-block text-[11px] font-bold text-slate-500 uppercase tracking-widest pl-2 border-l border-slate-300">
              Product Portal
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-700 hover:text-brand-red hover:bg-red-50/60 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Header Action & Mobile Menu Toggle */}
          <div className="flex items-center gap-2.5">
            <a
              href="#fssai"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-brand-navy text-white text-xs font-semibold hover:bg-brand-navy-light transition-colors shadow-xs"
              aria-label="Jump to verified certification details"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span className="hidden sm:inline">Verified Batch</span>
              <span className="sm:hidden">Verify</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-nav"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              className="lg:hidden w-10 h-10 inline-flex items-center justify-center rounded-xl border border-slate-200 text-brand-navy hover:bg-slate-100 transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-brand-red"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-brand-red" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation Menu */}
      {isMobileMenuOpen && (
        <div
          id="mobile-nav"
          className="lg:hidden bg-white/98 backdrop-blur-xl border-b border-slate-200 shadow-xl px-4 pt-3 pb-6 animate-in slide-in-from-top-2 duration-150"
        >
          <div className="flex items-center justify-between pb-3 mb-2 border-b border-slate-100">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Quick Navigation
            </span>
            <span className="text-[11px] font-semibold text-brand-red flex items-center gap-1">
              <QrCode className="w-3.5 h-3.5" />
              QR Scanned Portal
            </span>
          </div>

          <nav className="flex flex-col gap-1" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="flex items-center justify-between px-3.5 py-3 rounded-xl text-sm font-semibold text-brand-navy hover:bg-red-50 hover:text-brand-red transition-colors active:bg-red-100"
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>
            ))}
          </nav>

          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
            <span>Customer Hotline:</span>
            <a href="tel:18002666383" className="font-bold text-brand-navy hover:text-brand-red">
              1800-266-NEVE
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
