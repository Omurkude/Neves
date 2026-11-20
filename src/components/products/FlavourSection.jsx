import React from 'react';
import FlavourCard from './FlavourCard.jsx';
import flavours from '../../data/flavours.js';
import { Flame } from 'lucide-react';

export default function FlavourSection({ selectedFlavourId, onSelectFlavour }) {
  return (
    <section id="flavours" className="mb-10 sm:mb-14 scroll-mt-20">
      {/* Punchy Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-6 sm:mb-8">
        <div>
          <div className="flex items-center gap-1.5 text-[#E63946] mb-1">
            <Flame className="w-4 h-4 fill-current" />
            <span className="text-xs font-baloo font-black uppercase tracking-widest">
              COLD DESI BOTTLES • ₹10 MRP
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-lilita text-[#0B192C] tracking-tight leading-none">
            OUR BOTTLED FLAVOURS
          </h2>
        </div>
        <p className="text-xs sm:text-sm font-dmsans text-slate-600 max-w-xs font-medium">
          Tap any bottle to view ingredients, nutrition, and direct WhatsApp ordering.
        </p>
      </div>

      {/* 3 Bold Flavour Cards with top clearance for break-out bottles */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-6 pt-6 sm:pt-8">
        {flavours.map((item) => (
          <FlavourCard
            key={item.id}
            flavour={item}
            isSelected={item.id === selectedFlavourId}
            onSelect={onSelectFlavour}
          />
        ))}
      </div>
    </section>
  );
}
