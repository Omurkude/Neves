import React from 'react';

/**
 * Reusable Section Heading component
 * Mobile-first typography with optional badge and centered/left alignment.
 */
export default function SectionHeading({
  badge,
  badgeIcon: BadgeIcon,
  title,
  subtitle,
  align = 'center',
  className = ''
}) {
  const isCenter = align === 'center';

  return (
    <div className={`mb-8 sm:mb-10 ${isCenter ? 'text-center max-w-2xl mx-auto' : 'text-left'} ${className}`}>
      {badge && (
        <div
          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase mb-3 ${
            isCenter ? 'mx-auto' : ''
          } bg-red-50 text-brand-red border border-red-200/60`}
        >
          {BadgeIcon && <BadgeIcon className="w-3.5 h-3.5" />}
          <span>{badge}</span>
        </div>
      )}

      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-navy tracking-tight leading-tight">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-2.5 sm:mt-3 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
          {subtitle}
        </p>
      )}
    </div>
  );
}
