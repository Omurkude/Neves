import React from 'react';
import { Phone, Mail, MapPin, Clock, QrCode } from 'lucide-react';
import productDetails from '../../data/productDetails.js';

export default function SupportSection() {
  const { support } = productDetails;

  return (
    <div className="space-y-6">
      <div className="p-4 rounded-xl bg-white border border-slate-200">
        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
          {support.tagline}
        </p>
      </div>

      {/* Contact Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
        {/* Telephone Call Card */}
        <a
          href="tel:18002666383"
          className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-brand-red/40 hover:shadow-xs transition-all text-left group block"
          aria-label="Call consumer helpline"
        >
          <div className="w-10 h-10 rounded-xl bg-red-50 text-brand-red flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
            <Phone className="w-5 h-5" />
          </div>
          <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
            Toll-Free Helpline
          </p>
          <p className="text-sm font-bold text-brand-navy group-hover:text-brand-red transition-colors mt-0.5">
            1800-266-NEVE
          </p>
          <p className="text-[11px] text-slate-500 mt-1">
            Mon-Sat: 9:00 AM – 6:30 PM IST
          </p>
        </a>

        {/* Email Support Card */}
        <a
          href="mailto:care@nevebeverages.com"
          className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-brand-red/40 hover:shadow-xs transition-all text-left group block"
          aria-label="Send email to customer care"
        >
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
            <Mail className="w-5 h-5" />
          </div>
          <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
            Email Support
          </p>
          <p className="text-sm font-bold text-brand-navy group-hover:text-blue-700 transition-colors mt-0.5 truncate">
            care@nevebeverages.com
          </p>
          <p className="text-[11px] text-slate-500 mt-1">
            24 business hours response time
          </p>
        </a>

        {/* Corporate Desk Card */}
        <div className="p-4 rounded-2xl bg-white border border-slate-200 text-left">
          <div className="w-10 h-10 rounded-xl bg-slate-100 text-brand-navy flex items-center justify-center mb-3">
            <MapPin className="w-5 h-5" />
          </div>
          <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
            Grievance Officer
          </p>
          <p className="text-sm font-bold text-brand-navy mt-0.5">
            BKC, Mumbai - 400051
          </p>
          <p className="text-[11px] text-slate-500 mt-1">
            Postal redressal inquiries
          </p>
        </div>
      </div>

      {/* QR Notice Banner */}
      <div className="p-3.5 rounded-xl bg-slate-100/90 border border-slate-200 flex items-center gap-2.5 text-xs text-slate-600">
        <QrCode className="w-4 h-4 text-brand-navy shrink-0" />
        <p className="leading-relaxed">
          {support.qrNotice}
        </p>
      </div>
    </div>
  );
}
