import React from 'react';
import { useTranslation } from 'react-i18next';
import productDetails from '../../data/productDetails.js';

export default function QualitySection() {
  const { t } = useTranslation();
  const { qualityInfo } = productDetails;

  const qualityPoints = [
    {
      title: t('qualitySection.point1Title', 'Treated Water Purification'),
      detail: t('qualitySection.point1Detail', 'Multi-stage filtration, reverse osmosis and UV sterilization.')
    },
    {
      title: t('qualitySection.point2Title', 'Quality Sealed Packaging'),
      detail: t('qualitySection.point2Detail', '200 ml food-grade PET bottles with tamper-evident seal maintaining carbonation.')
    },
    {
      title: t('qualitySection.point3Title', 'Regulatory Compliance'),
      detail: t('qualitySection.point3Detail', 'Manufactured under State License No. 11525058000154 (FDA Maharashtra).')
    }
  ];

  return (
    <div className="space-y-4 text-xs sm:text-sm">
      <p className="text-slate-600 leading-relaxed">
        {t('qualitySection.overview', qualityInfo.overview)}
      </p>

      {/* Quality Points */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {qualityPoints.map((pt) => (
          <div key={pt.title} className="p-3.5 rounded-xl bg-white border border-slate-200">
            <h4 className="font-bold text-[#0B192C] text-xs mb-1">
              {pt.title}
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              {pt.detail}
            </p>
          </div>
        ))}
      </div>

      <p className="text-[11px] text-slate-500 italic">
        * {t('qualitySection.footnote', qualityInfo.reportNotice)}
      </p>
    </div>
  );
}
