import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

const languages = [
  { code: 'en', label: 'English', ariaLabel: 'Switch to English' },
  { code: 'hi', label: 'हिन्दी', ariaLabel: 'हिन्दी में बदलें' },
  { code: 'mr', label: 'मराठी', ariaLabel: 'मराठीत बदला' },
];

export default function LanguageSwitcher({ className = '' }) {
  const { i18n, t } = useTranslation();
  const currentLang = i18n.language || 'en';

  const changeLanguage = (lng) => {
    if (lng !== currentLang) {
      i18n.changeLanguage(lng);
    }
  };

  return (
    <div
      role="group"
      aria-label={t('nav.switchLanguage', 'Switch Language')}
      className={`inline-flex items-center bg-slate-100/90 p-0.5 rounded-full border border-slate-200/80 select-none ${className}`}
    >
      <div className="hidden sm:flex items-center pl-1.5 pr-0.5 text-slate-400">
        <Globe className="w-3.5 h-3.5" aria-hidden="true" />
      </div>

      {languages.map((lang) => {
        const isActive = currentLang.startsWith(lang.code);
        return (
          <button
            key={lang.code}
            type="button"
            onClick={() => changeLanguage(lang.code)}
            aria-pressed={isActive}
            aria-label={lang.ariaLabel}
            className={`px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full text-[11px] sm:text-xs font-bold transition-all duration-150 cursor-pointer focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#E63946] ${
              lang.code !== 'en' ? 'font-devanagari' : ''
            } ${
              isActive
                ? 'bg-white text-[#E63946] shadow-2xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
            }`}
          >
            {lang.label}
          </button>
        );
      })}
    </div>
  );
}
