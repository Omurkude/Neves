import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#E63946] py-3.5 sm:py-4 mt-8 sm:mt-12 text-center text-xs text-white font-medium select-none">
      <div className="max-w-3xl mx-auto px-4 space-y-1">
        <p>{t('footer.copyright', '© Neve Beverages. All rights reserved.')}</p>
        <p className="text-[11px] text-white/80">{t('footer.address', 'Ashoknagar, Bhandara, Maharashtra - 441906 | Mo: +91 70209 06373')}</p>
      </div>
    </footer>
  );
}
