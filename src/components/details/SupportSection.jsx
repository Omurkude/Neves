import React from 'react';
import productDetails from '../../data/productDetails.js';

export default function SupportSection() {
  const { supportInfo } = productDetails;

  return (
    <div className="space-y-4 text-xs sm:text-sm">
      <p className="text-slate-600 leading-relaxed">
        {supportInfo.description}
      </p>

      {/* Support Details List */}
      <div className="bg-white rounded-xl border border-slate-200 divide-y divide-slate-100 overflow-hidden text-xs">
        <div className="p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
          <span className="font-semibold text-slate-500">Consumer Helpline:</span>
          <span className="font-mono text-slate-800 font-medium">{supportInfo.helpline}</span>
        </div>

        <div className="p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
          <span className="font-semibold text-slate-500">Customer Support Email:</span>
          <a href={`mailto:${supportInfo.email}`} className="font-medium text-brand-red hover:underline">
            {supportInfo.email}
          </a>
        </div>

        <div className="p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
          <span className="font-semibold text-slate-500">Postal Address:</span>
          <span className="text-slate-700 sm:text-right font-medium">{supportInfo.address}</span>
        </div>

        <div className="p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
          <span className="font-semibold text-slate-500">Operating Hours:</span>
          <span className="text-slate-700 font-medium">{supportInfo.hours}</span>
        </div>
      </div>
    </div>
  );
}
