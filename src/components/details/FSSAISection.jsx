import React from 'react';
import PlaceholderImage from '../common/PlaceholderImage.jsx';
import productDetails from '../../data/productDetails.js';
import { Phone, MapPin, Calendar, Award } from 'lucide-react';

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
            <p className="text-slate-500 text-[11px] font-semibold flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-slate-400" />
              <span>FSSAI Licence No.</span>
            </p>
            <p className="font-mono font-bold text-sm text-[#0B192C]">{fssai.licenceNumber}</p>
          </div>

          <div>
            <p className="text-slate-500 text-[11px] font-semibold">Food Category</p>
            <p className="text-slate-700 leading-tight">{fssai.foodCategory}</p>
          </div>

          <div>
            <p className="text-slate-500 text-[11px] font-semibold">Licence Holder</p>
            <p className="font-semibold text-slate-900">{fssai.nameOfBusiness}</p>
          </div>

          <div>
            <p className="text-slate-500 text-[11px] font-semibold flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-slate-400" />
              <span>Premises Address</span>
            </p>
            <p className="text-slate-700 leading-tight">{fssai.shortAddress}</p>
          </div>

          <div>
            <p className="text-slate-500 text-[11px] font-semibold flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-slate-400" />
              <span>Contact / Mobile</span>
            </p>
            <a href={`tel:${fssai.contactNumber.replace(/\s+/g, '')}`} className="font-semibold text-[#E63946] hover:underline">
              {fssai.contactNumber}
            </a>
          </div>

          <div className="flex items-center justify-between pt-1 border-t border-slate-100">
            <div>
              <p className="text-slate-500 text-[10px] font-semibold flex items-center gap-1">
                <Calendar className="w-3 h-3 text-slate-400" />
                <span>Issued On</span>
              </p>
              <p className="font-medium text-slate-800 text-[11px]">{fssai.dateOfIssue}</p>
            </div>
            <div>
              <p className="text-slate-500 text-[10px] font-semibold">Valid Upto</p>
              <p className="font-bold text-emerald-700 text-[11px]">{fssai.validUpto}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
