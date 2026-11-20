import React from 'react';
import { ShieldCheck, ExternalLink, AlertCircle, FileText, CheckCircle2 } from 'lucide-react';
import PlaceholderImage from '../common/PlaceholderImage.jsx';
import productDetails from '../../data/productDetails.js';

export default function FSSAISection() {
  const { fssai } = productDetails;

  return (
    <div className="space-y-6">
      {/* Responsive Layout: Stacks vertically on mobile, side-by-side on desktop (lg:grid-cols-12) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Certificate Visual Placeholder Column */}
        <div className="lg:col-span-5 flex flex-col items-center">
          <PlaceholderImage type="certificate" />
          <p className="mt-2 text-[11px] text-slate-500 text-center flex items-center justify-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Digital statutory certificate verification badge</span>
          </p>
        </div>

        {/* Regulatory Information Column */}
        <div className="lg:col-span-7 space-y-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200 mb-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>{fssai.licenseStatus}</span>
            </div>

            <h4 className="text-lg sm:text-xl font-bold text-brand-navy">
              {fssai.title}
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
              {fssai.subText}
            </p>
          </div>

          {/* License Data Grid */}
          <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-3 text-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-2 border-b border-slate-100">
              <span className="font-semibold text-slate-500">Central License Number:</span>
              <span className="font-mono font-bold text-brand-navy bg-slate-100 px-2.5 py-0.5 rounded text-[11px] w-fit break-all">
                {fssai.licensePlaceholder}
              </span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-2 border-b border-slate-100">
              <span className="font-semibold text-slate-500">Product Category:</span>
              <span className="font-medium text-slate-800 text-right">
                {fssai.category}
              </span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <span className="font-semibold text-slate-500">Compliance Standard:</span>
              <span className="font-medium text-slate-800 text-right">
                Food Safety & Standards (FSSR) 2011
              </span>
            </div>
          </div>

          {/* Compliance Notice */}
          <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200/80 flex items-start gap-2.5 text-xs text-amber-900">
            <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              {fssai.displayNotice}
            </p>
          </div>

          {/* External Verification Link */}
          <div className="pt-1 flex items-center justify-between text-xs">
            <span className="text-slate-500">Official Government Verification Portal:</span>
            <a
              href={fssai.verificationPortalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-bold text-brand-red hover:underline"
            >
              <span>FSSAI FoSCoS Portal</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
