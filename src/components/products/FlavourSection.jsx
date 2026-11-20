import React from 'react';
import FlavourCard from './FlavourCard.jsx';
import flavours from '../../data/flavours.js';

export default function FlavourSection({ selectedFlavourId, onSelectFlavour }) {
  return (
    <section id="flavours" className="mb-6 sm:mb-8 scroll-mt-20">
      <div className="mb-3 sm:mb-4">
        {/* Clean, Bold Heading matching reference screenshot */}
        <h2 className="text-2xl sm:text-3xl font-poppins font-bold text-[#0B192C] tracking-tight">
          Our Flavours
        </h2>
        {/* Subtitle in clean regular sans */}
        <p className="mt-0.5 sm:mt-1 text-xs sm:text-sm font-dmsans text-slate-500 font-normal">
          Choose a flavour to view its details below.
        </p>
      </div>

      {/* 3 Flavour Cards in 1 Row */}
      <div className="grid grid-cols-3 gap-2 sm:gap-3.5 md:gap-4">
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
