import React from 'react';
import productDetails from '../../data/productDetails.js';
import { MapPin, Phone, Building2, Package, Calendar } from 'lucide-react';

export default function ManufacturingSection() {
  const { manufacturingInfo } = productDetails;

  return (
    <div className="space-y-4 text-xs sm:text-sm">
      {/* Unit & Manufacturer Details */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1.5">
          <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
            <Building2 className="w-3.5 h-3.5 text-slate-400" />
            <span>Manufacturing Unit</span>
          </p>
          <p className="font-extrabold text-[#0B192C] text-sm">
            {manufacturingInfo.unitName}
          </p>
          <p className="text-slate-600 text-xs">
            MFG. BY: <strong className="text-slate-900">{manufacturingInfo.manufacturedBy}</strong>
          </p>
          <p className="text-slate-700 text-xs leading-relaxed pt-1">
            {manufacturingInfo.address}
          </p>
          <p className="pt-1.5 text-slate-600 text-xs flex items-center gap-1.5">
            <Phone className="w-3.5 h-3.5 text-slate-400" />
            <span>Customer Care: </span>
            <a href={`tel:${manufacturingInfo.customerCare}`} className="font-bold text-[#E63946] hover:underline">
              {manufacturingInfo.customerCare}
            </a>
          </p>
        </div>

        <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-2">
          <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
            <Package className="w-3.5 h-3.5 text-slate-400" />
            <span>Product Specifications</span>
          </p>
          <div className="space-y-1 text-xs">
            <div className="flex justify-between py-1 border-b border-slate-100">
              <span className="text-slate-500">Net Quantity:</span>
              <strong className="text-slate-900">{manufacturingInfo.netQuantity}</strong>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-100">
              <span className="text-slate-500">M.R.P.:</span>
              <strong className="text-[#E63946] font-extrabold">{manufacturingInfo.mrp}</strong>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-100">
              <span className="text-slate-500">Shelf Life:</span>
              <span className="text-slate-800 font-medium">{manufacturingInfo.shelfLife}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Batch Notice & Storage */}
      <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5 text-xs text-slate-700">
        <p className="flex items-center gap-1.5">
          <Calendar className="w-3.5 h-3.5 text-slate-500 shrink-0" />
          <span>
            <strong className="text-slate-900">Batch & Mfg. Date: </strong>
            {manufacturingInfo.batchNotice}
          </span>
        </p>
        <p>
          <strong className="text-slate-900">Storage Instructions: </strong>
          {manufacturingInfo.storageInstructions}
        </p>
      </div>
    </div>
  );
}
