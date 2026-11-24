import React from 'react';
import { useTranslation } from 'react-i18next';
import productDetails from '../../data/productDetails.js';
import { MapPin, Phone, Building2, Package, Calendar } from 'lucide-react';

export default function ManufacturingSection() {
  const { t } = useTranslation();
  const { manufacturingInfo } = productDetails;

  return (
    <div className="space-y-4 text-xs sm:text-sm">
      {/* Unit & Manufacturer Details */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1.5">
          <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
            <Building2 className="w-3.5 h-3.5 text-slate-400" />
            <span>{t('manufacturingSection.unitTitle', 'Manufacturing Unit')}</span>
          </p>
          <p className="font-extrabold text-[#0B192C] text-sm">
            {manufacturingInfo.unitName}
          </p>
          <p className="text-slate-600 text-xs">
            {t('manufacturingSection.mfgBy', 'MFG. BY:')} <strong className="text-slate-900">{manufacturingInfo.manufacturedBy}</strong>
          </p>
          <p className="text-slate-700 text-xs leading-relaxed pt-1">
            {manufacturingInfo.address}
          </p>
          <p className="pt-1.5 text-slate-600 text-xs flex items-center gap-1.5">
            <Phone className="w-3.5 h-3.5 text-slate-400" />
            <span>{t('manufacturingSection.customerCare', 'Customer Care:')} </span>
            <a href={`tel:${manufacturingInfo.customerCare}`} className="font-bold text-[#E63946] hover:underline">
              {manufacturingInfo.customerCare}
            </a>
          </p>
        </div>

        <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-2">
          <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
            <Package className="w-3.5 h-3.5 text-slate-400" />
            <span>{t('manufacturingSection.specsTitle', 'Product Specifications')}</span>
          </p>
          <div className="space-y-1 text-xs">
            <div className="flex justify-between py-1 border-b border-slate-100">
              <span className="text-slate-500">{t('manufacturingSection.netQuantity', 'Net Quantity:')}</span>
              <strong className="text-slate-900">{manufacturingInfo.netQuantity}</strong>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-100">
              <span className="text-slate-500">{t('manufacturingSection.shelfLife', 'Shelf Life:')}</span>
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
            <strong className="text-slate-900">{t('manufacturingSection.batchNoticeTitle', 'Batch & Mfg. Date:')} </strong>
            {t('manufacturingSection.batchNoticeValue', manufacturingInfo.batchNotice)}
          </span>
        </p>
        <p>
          <strong className="text-slate-900">{t('manufacturingSection.storageTitle', 'Storage Instructions:')} </strong>
          {t('manufacturingSection.storageValue', manufacturingInfo.storageInstructions)}
        </p>
      </div>
    </div>
  );
}
