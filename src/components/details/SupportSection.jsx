import React from 'react';
import productDetails from '../../data/productDetails.js';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

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
          <span className="font-semibold text-slate-500 flex items-center gap-1.5">
            <Phone className="w-3.5 h-3.5 text-slate-400" />
            <span>Mobile / Helpline:</span>
          </span>
          <a href={`tel:${supportInfo.helpline.replace(/\s+/g, '')}`} className="font-bold text-[#E63946] hover:underline">
            {supportInfo.helpline}
          </a>
        </div>

        <div className="p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
          <span className="font-semibold text-slate-500 flex items-center gap-1.5">
            <Mail className="w-3.5 h-3.5 text-slate-400" />
            <span>Support Email:</span>
          </span>
          <a href={`mailto:${supportInfo.email}`} className="font-medium text-[#E63946] hover:underline">
            {supportInfo.email}
          </a>
        </div>

        <div className="p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
          <span className="font-semibold text-slate-500 flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-slate-400" />
            <span>Registered Address:</span>
          </span>
          <span className="text-slate-700 sm:text-right font-medium">{supportInfo.address}</span>
        </div>

        <div className="p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
          <span className="font-semibold text-slate-500 flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-slate-400" />
            <span>Operating Hours:</span>
          </span>
          <span className="text-slate-700 font-medium">{supportInfo.hours}</span>
        </div>
      </div>
    </div>
  );
}
