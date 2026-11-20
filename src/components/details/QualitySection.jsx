import React from 'react';
import productDetails from '../../data/productDetails.js';

export default function QualitySection() {
  const { qualityInfo } = productDetails;

  return (
    <div className="space-y-4 text-xs sm:text-sm">
      <p className="text-slate-600 leading-relaxed">
        {qualityInfo.overview}
      </p>

      {/* Quality Points */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {qualityInfo.points.map((pt) => (
          <div key={pt.title} className="p-3.5 rounded-xl bg-white border border-slate-200">
            <h4 className="font-bold text-brand-navy text-xs mb-1">
              {pt.title}
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              {pt.detail}
            </p>
          </div>
        ))}
      </div>

      <p className="text-[11px] text-slate-500 italic">
        * {qualityInfo.reportNotice}
      </p>
    </div>
  );
}
