import React from 'react';
import productDetails from '../../data/productDetails.js';

export default function ManufacturingSection() {
  const { manufacturingInfo } = productDetails;

  return (
    <div className="space-y-4 text-xs sm:text-sm">
      {/* Facility & Marketer Details */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="p-4 rounded-xl bg-white border border-slate-200">
          <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
            Manufactured & Packed By
          </p>
          <p className="font-semibold text-brand-navy leading-relaxed">
            {manufacturingInfo.manufacturedBy}
          </p>
        </div>

        <div className="p-4 rounded-xl bg-white border border-slate-200">
          <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
            Marketed By
          </p>
          <p className="font-semibold text-brand-navy leading-relaxed">
            {manufacturingInfo.marketedBy}
          </p>
        </div>
      </div>

      {/* Batch Notice & Storage */}
      <div className="p-4 rounded-xl bg-slate-100 border border-slate-200 space-y-2 text-xs text-slate-700">
        <p>
          <strong className="text-slate-900">Batch Information: </strong>
          {manufacturingInfo.batchNotice}
        </p>
        <p>
          <strong className="text-slate-900">Storage Instructions: </strong>
          {manufacturingInfo.storageInstructions}
        </p>
      </div>
    </div>
  );
}
