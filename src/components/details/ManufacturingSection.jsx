import React from 'react';
import { Factory, Building2, Calendar, HelpCircle, PackageCheck } from 'lucide-react';
import productDetails from '../../data/productDetails.js';

export default function ManufacturingSection() {
  const { manufacturing } = productDetails;
  const { manufacturedBy, marketedBy, batchCodingGuide } = manufacturing;

  return (
    <div className="space-y-6">
      {/* Bottler vs Marketer Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Manufactured By Card */}
        <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-lg bg-red-50 text-brand-red flex items-center justify-center">
              <Factory className="w-4 h-4" />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Manufactured & Packed By
              </p>
              <h4 className="text-sm font-bold text-brand-navy">
                {manufacturedBy.facilityName}
              </h4>
            </div>
          </div>

          <p className="text-xs text-slate-600 leading-relaxed mb-3">
            {manufacturedBy.industrialZone},<br />
            {manufacturedBy.cityState}, {manufacturedBy.country}
          </p>

          <div className="pt-2 border-t border-slate-100 flex flex-wrap gap-1.5">
            {manufacturedBy.facilityCertifications.map((cert) => (
              <span
                key={cert}
                className="px-2 py-0.5 rounded text-[10px] font-semibold bg-slate-100 text-slate-700"
              >
                {cert}
              </span>
            ))}
          </div>
        </div>

        {/* Marketed By Card */}
        <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center">
              <Building2 className="w-4 h-4" />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Brand Owner & Marketed By
              </p>
              <h4 className="text-sm font-bold text-brand-navy">
                {marketedBy.company}
              </h4>
            </div>
          </div>

          <p className="text-xs text-slate-600 leading-relaxed mb-3">
            {marketedBy.address},<br />
            {marketedBy.cityState}, {marketedBy.country}
          </p>

          <div className="pt-2 border-t border-slate-100 text-xs text-slate-500 font-medium">
            Contact Support for Corporate B2B Inquiries
          </div>
        </div>
      </div>

      {/* How to Read Batch Code Visual Guide */}
      <div className="p-4 sm:p-5 rounded-2xl bg-slate-100/80 border border-slate-200/90">
        <div className="flex items-center gap-2 mb-2">
          <PackageCheck className="w-4 h-4 text-brand-navy" />
          <h4 className="text-xs sm:text-sm font-bold text-brand-navy">
            How to Read Your Product Batch Details
          </h4>
        </div>

        <p className="text-xs text-slate-600 mb-3">
          {batchCodingGuide.location}.
        </p>

        {/* Mock Can Base Stamp */}
        <div className="p-3 sm:p-3.5 rounded-xl bg-slate-900 text-emerald-400 font-mono text-[11px] sm:text-xs text-center shadow-inner tracking-wider break-words">
          {batchCodingGuide.formatExample}
        </div>

        <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-600">
          <div className="p-2.5 rounded-lg bg-white border border-slate-200">
            <span className="font-bold text-slate-800">Shelf Life: </span>
            <span>{batchCodingGuide.shelfLife}</span>
          </div>
          <div className="p-2.5 rounded-lg bg-white border border-slate-200">
            <span className="font-bold text-slate-800">Storage Advice: </span>
            <span>{batchCodingGuide.storageAdvice}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
