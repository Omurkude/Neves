import React from 'react';

/**
 * Clean, minimal section heading matching beverage brand product layout.
 * No SaaS dashboard badges or promo pills.
 */
export default function SectionHeading({
  title,
  subtitle,
  align = 'center',
  className = ''
}) {
  const isCenter = align === 'center';

  return (
    <div className={`mb-6 sm:mb-8 ${isCenter ? 'text-center max-w-2xl mx-auto' : 'text-left'} ${className}`}>
      <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy tracking-tight">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-2 text-sm sm:text-base text-slate-500 leading-relaxed font-normal">
          {subtitle}
        </p>
      )}
    </div>
  );
}
