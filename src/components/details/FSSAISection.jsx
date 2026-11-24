import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import productDetails from '../../data/productDetails.js';
import {
  Award,
  Calendar,
  MapPin,
  Phone,
  ExternalLink,
  Maximize2,
  X,
  FileDown,
  CheckCircle2,
  ShieldCheck,
  Building2,
  QrCode
} from 'lucide-react';

export default function FSSAISection() {
  const { t } = useTranslation();
  const { fssai } = productDetails;
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsModalOpen(false);
      }
    };
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalOpen]);

  return (
    <>
      <div className="border border-slate-200 rounded-xl p-3 sm:p-5 bg-white shadow-2xs">
        {/* Desktop: side-by-side; Mobile: stacked vertically */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-7 items-start">
          
          {/* LEFT: Authentic Certificate Preview Container */}
          <div className="md:col-span-6 flex flex-col items-center">
            {/* Certificate Header Bar with Authentic Government Logos */}
            <div className="w-full flex items-center justify-between pb-2.5 mb-2.5 border-b border-slate-200 text-xs">
              <div className="flex items-center gap-2">
                <img
                  src="/images/certificates/fssai-official.png"
                  alt="Official FSSAI Logo"
                  className="h-7 sm:h-8 w-auto object-contain"
                />
                <div>
                  <span className="block font-bold text-[#0B192C] text-[11px] leading-tight">
                    {t('fssaiSection.govtOfMaharashtra', 'Government of Maharashtra')}
                  </span>
                  <span className="text-[10px] text-slate-500 font-medium">
                    {t('fssaiSection.fda', 'Food And Drug Administration')}
                  </span>
                </div>
              </div>
              <img
                src="/images/certificates/fda-maharashtra.png"
                alt="FDA Maharashtra Official Emblem"
                className="h-7 sm:h-8 w-auto object-contain"
              />
            </div>

            {/* Clickable Certificate Card with Authentic Image & Scannable QR */}
            <div
              role="button"
              tabIndex={0}
              onClick={() => setIsModalOpen(true)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setIsModalOpen(true);
                }
              }}
              aria-label="Click to enlarge official FSSAI License Certificate"
              className="group relative w-full rounded-xl border border-slate-200/90 bg-slate-50 p-1.5 sm:p-2 cursor-pointer transition-all duration-200 hover:border-slate-300 hover:shadow-md focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#E63946]"
            >
              <div className="relative overflow-hidden rounded-lg bg-white border border-slate-200/60 shadow-xs">
                {/* Full Original Certificate Image (Page 1 with authentic QR Code, seals, text) */}
                <img
                  src={fssai.certificateImage || '/images/certificates/fssai-certificate.png'}
                  alt="Official Government of Maharashtra Food And Drug Administration FSSAI Form C License Certificate - License Number 11525058000154"
                  loading="lazy"
                  className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-[1.01]"
                />

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-slate-900/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/80 text-white font-semibold text-xs shadow-md">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>{t('fssaiSection.tapToEnlarge', 'Tap to Enlarge')}</span>
                  </span>
                </div>
              </div>

              {/* Bottom bar inside card */}
              <div className="flex items-center justify-between pt-2 px-1 text-[11px] text-slate-600">
                <span className="flex items-center gap-1 font-semibold text-emerald-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{t('fssaiSection.scannableQr', 'Authentic Scannable QR Code')}</span>
                </span>
                <span className="flex items-center gap-1 font-bold text-slate-700 group-hover:text-[#E63946] transition-colors">
                  <Maximize2 className="w-3 h-3" />
                  <span>{t('fssaiSection.enlarge', 'Enlarge')}</span>
                </span>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="w-full flex items-center justify-between gap-2 mt-3 pt-2 text-xs">
              <a
                href={fssai.certificatePdf || '/images/certificates/fssai-license-certificate.pdf'}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-slate-100 hover:bg-slate-200/80 text-slate-800 font-semibold transition-colors border border-slate-200"
              >
                <FileDown className="w-3.5 h-3.5 text-slate-600" />
                <span>{t('fssaiSection.downloadPdf', 'Download PDF (7 Pgs)')}</span>
              </a>
              <a
                href={fssai.verificationUrl || 'https://foscos.fssai.gov.in'}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-emerald-50 hover:bg-emerald-100/80 text-emerald-800 font-semibold transition-colors border border-emerald-200"
              >
                <ExternalLink className="w-3.5 h-3.5 text-emerald-700" />
                <span>{t('fssaiSection.verifyOnFoscos', 'Verify on FoSCoS')}</span>
              </a>
            </div>
          </div>

          {/* RIGHT: Extracted Official Regulatory Details */}
          <div className="md:col-span-6 space-y-3.5 text-xs leading-snug">
            
            {/* License Number Header */}
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80">
              <div className="flex items-center justify-between mb-1">
                <p className="text-slate-500 text-[11px] font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-[#E63946]" />
                  <span>{t('fssaiSection.licenceNumber', 'FSSAI Licence Number')}</span>
                </p>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-100/90 text-emerald-800 text-[10px] font-bold border border-emerald-300">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>{t('fssaiSection.stateLicenseVerified', 'State License Verified')}</span>
                </span>
              </div>
              <p className="font-mono font-black text-lg text-[#0B192C] tracking-wide">
                {fssai.licenceNumber}
              </p>
              <p className="text-[10px] text-slate-500 mt-0.5 font-medium">
                {fssai.formType || t('fssaiSection.formC', 'Form C (License under FSS Act, 2006)')} — {fssai.authority}
              </p>
            </div>

            {/* Food Category */}
            <div className="border-b border-slate-100 pb-2.5">
              <p className="text-slate-500 text-[11px] font-semibold">{t('fssaiSection.foodCategory', 'Food Category & Sub-Category')}</p>
              <p className="text-slate-800 font-semibold leading-snug mt-0.5">
                {fssai.foodCategory}
              </p>
            </div>

            {/* Kind of Business */}
            <div className="border-b border-slate-100 pb-2.5">
              <p className="text-slate-500 text-[11px] font-semibold">{t('fssaiSection.kindOfBusiness', 'Kind of Business')}</p>
              <p className="text-slate-800 font-bold mt-0.5">
                {fssai.kindOfBusiness}
              </p>
            </div>

            {/* Licence Holder / Name of Business */}
            <div className="border-b border-slate-100 pb-2.5">
              <p className="text-slate-500 text-[11px] font-semibold flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-slate-400" />
                <span>{t('fssaiSection.nameOfBusiness', 'Name & Registered Licensee')}</span>
              </p>
              <p className="font-bold text-slate-900 text-xs sm:text-sm mt-0.5">
                {fssai.nameOfBusiness}
              </p>
            </div>

            {/* Address of Authorized Premises */}
            <div className="border-b border-slate-100 pb-2.5">
              <p className="text-slate-500 text-[11px] font-semibold flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                <span>{t('fssaiSection.addressOfPremises', 'Address of Authorized Premises')}</span>
              </p>
              <p className="text-slate-800 font-medium leading-relaxed mt-0.5">
                {fssai.address}
              </p>
            </div>

            {/* Contact Details */}
            <div className="border-b border-slate-100 pb-2.5">
              <p className="text-slate-500 text-[11px] font-semibold flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-slate-400" />
                <span>{t('fssaiSection.contact', 'Contact / Mobile')}</span>
              </p>
              <a
                href={`tel:${fssai.contactNumber.replace(/\s+/g, '')}`}
                className="font-bold text-[#E63946] hover:underline inline-block mt-0.5 text-xs"
              >
                {fssai.contactNumber}
              </a>
            </div>

            {/* Validity Dates Box */}
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between">
              <div>
                <p className="text-slate-500 text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-slate-400" />
                  <span>{t('fssaiSection.issuedOn', 'Issued On')}</span>
                </p>
                <p className="font-bold text-slate-900 text-xs mt-0.5">{fssai.dateOfIssue}</p>
              </div>
              <div className="text-right">
                <p className="text-slate-500 text-[10px] font-bold uppercase tracking-wider">{t('fssaiSection.validUpto', 'Valid Upto')}</p>
                <p className="font-extrabold text-emerald-700 text-xs sm:text-sm mt-0.5">
                  {fssai.validUpto}
                </p>
              </div>
            </div>

            {/* Designated Officer & Statutory Disclaimer */}
            <div className="pt-1 text-[10px] text-slate-500 leading-normal">
              <p className="text-slate-600 font-medium">
                <strong>{t('fssaiSection.officerVerification', 'Officer Verification:')} </strong>{fssai.designatedOfficer}
              </p>
              <p className="italic mt-1 text-slate-400">
                * {fssai.disclaimer}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FULLSCREEN LIGHTBOX MODAL FOR ENLARGED CERTIFICATE INSPECTION */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-slate-200 bg-slate-50">
              <div className="flex items-center gap-2">
                <img
                  src="/images/certificates/fssai-official.png"
                  alt="FSSAI"
                  className="h-6 w-auto object-contain"
                />
                <div>
                  <h3 className="font-extrabold text-sm sm:text-base text-slate-900 leading-tight">
                    {t('fssaiSection.modalTitle', 'Government of Maharashtra — Form C License')}
                  </h3>
                  <p className="text-xs text-slate-500 font-mono">
                    {t('fssaiSection.modalLicenseNo', 'License No:')} {fssai.licenceNumber}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={fssai.certificatePdf || '/images/certificates/fssai-license-certificate.pdf'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold transition-colors"
                >
                  <FileDown className="w-3.5 h-3.5" />
                  <span>{t('fssaiSection.downloadPdf', 'Download PDF')}</span>
                </a>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  aria-label={t('fssaiSection.close', 'Close modal')}
                  className="w-8 h-8 rounded-full flex items-center justify-center text-slate-500 hover:text-slate-900 hover:bg-slate-200/80 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Scrollable Certificate Viewer */}
            <div className="flex-1 overflow-auto p-3 sm:p-6 bg-slate-100 flex justify-center items-start">
              <div className="bg-white p-2 rounded-xl shadow-md max-w-3xl border border-slate-200">
                <img
                  src={fssai.certificateHdImage || fssai.certificateImage || '/images/certificates/fssai-certificate-hd.png'}
                  alt="Official Government of Maharashtra FSSAI License Form C - Original Document"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex flex-wrap items-center justify-between gap-2 px-4 sm:px-6 py-3 border-t border-slate-200 bg-white text-xs text-slate-600">
              <div className="flex items-center gap-2 text-emerald-800 font-medium">
                <QrCode className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{t('fssaiSection.modalQrNote', 'The QR code on the certificate can be scanned directly to view the live FoSCoS record.')}</span>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={fssai.verificationUrl || 'https://foscos.fssai.gov.in'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#E63946] hover:underline font-bold"
                >
                  <span>{t('fssaiSection.modalVerifyBtn', 'Verify on FoSCoS Portal')}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
