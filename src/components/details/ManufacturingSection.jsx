import React from 'react';
import productDetails from '../../data/productDetails.js';
import { MapPin, Phone, Building2 } from 'lucide-react';

export default function ManufacturingSection() {
  const { manufacturingInfo } = productDetails;

  return (
    <div className="space-y-4 text-xs sm:text-sm">
      {/* Facility & Marketer Details */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1.5">
          <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
            <Building2 className="w-3.5 h-3.5 text-slate-400" />
            <span>Manufactured & Packed By</span>
          </p>
          <p className="font-semibold text-slate-900 leading-relaxed text-xs">
            {manufacturingInfo.manufacturedBy}
          </p>
          <p className="pt-1 text-slate-600 text-xs flex items-center gap-1.5">
            <Phone className="w-3.5 h-3.5 text-slate-400" />
            <span>Mo.: </span>
            <a href={`tel:${manufacturingInfo.contactNumber.replace(/\s+/g, '')}`} className="font-semibold text-[#E63946] hover:underline">
              {manufacturingInfo.contactNumber}
            </a>
          </p>
        </div>

        <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1.5">
          <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-slate-400" />
            <span>Marketed By</span>
          </p>
          <p className="font-semibold text-slate-900 leading-relaxed text-xs">
            {manufacturingInfo.marketedBy}
          </p>
          <p className="pt-1 text-slate-600 text-xs flex items-center gap-1.5">
            <Phone className="w-3.5 h-3.5 text-slate-400" />
            <span>Customer Care: </span>
            <a href={`tel:${manufacturingInfo.contactNumber.replace(/\s+/g, '')}`} className="font-semibold text-[#E63946] hover:underline">
              {manufacturingInfo.contactNumber}
            </a>
          </p>
        </div>
      </div>

      {/* Batch Notice & Storage */}
      <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5 text-xs text-slate-700">
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
