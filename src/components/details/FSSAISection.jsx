import React from 'react';
import PlaceholderImage from '../common/PlaceholderImage.jsx';
import productDetails from '../../data/productDetails.js';

export default function FSSAISection() {
  const { fssai } = productDetails;

  return (
    <div className="border border-slate-200 rounded-xl p-3 sm:p-4 bg-white">
      {/* Desktop: side by side; Mobile: stack vertically */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 items-center">
        {/* Certificate Mockup Preview */}
        <div className="md:col-span-7 flex flex-col items-center">
          <PlaceholderImage type="certificate" />
        </div>

        {/* Regulatory Details List exactly matching the screenshot */}
        <div className="md:col-span-5 space-y-3 text-xs leading-snug">
          <div>
            <p className="text-slate-500 text-[11px]">FSSAI Licence No.</p>
            <p className="font-mono font-bold text-sm text-[#0B192C]">{fssai.licenceNumber}</p>
          </div>

          <div>
            <p className="text-slate-500 text-[11px]">Food Category</p>
            <p className="text-slate-700 leading-tight">{fssai.foodCategory}</p>
          </div>

          <div>
            <p className="text-slate-500 text-[11px]">Licence Holder</p>
            <p className="font-semibold text-slate-900">{fssai.nameOfBusiness}</p>
          </div>

          <div>
            <p className="text-slate-500 text-[11px]">Address</p>
            <p className="text-slate-700 leading-tight">{fssai.address}</p>
          </div>

          <div>
            <p className="text-slate-500 text-[11px]">Valid Upto</p>
            <p className="font-medium text-slate-900">{fssai.validUpto}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
