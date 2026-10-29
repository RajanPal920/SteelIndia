import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function IndustryCard({
  industry,
  className = '',
  heightClass = 'h-[250px]' // Height slightly adjusted
}) {
  return (
    <div
      // Changed to w-full so it fits the grid cell perfectly
      className={`group relative w-full ${heightClass} rounded-xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-left select-none bg-slate-100 ${className}`}
      aria-label={`Steel solutions for ${industry.name}`}
    >
      <img
        src={industry.image}
        alt={`${industry.name} industrial infrastructure and applications`}
        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        loading="lazy"
      />

      {/* Clean Bottom Dock */}
      <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md py-2.5 px-4 rounded-xl border border-slate-200/90 shadow-md group-hover:border-[#0055A4] group-hover:bg-white transition-all duration-300 flex items-center justify-between gap-2">

        <h3 className="text-sm sm:text-base font-bold text-slate-800 group-hover:text-[#0055A4] transition-colors tracking-tight line-clamp-1">
          {industry.name}
        </h3>

        <div className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center shrink-0 group-hover:bg-[#E3000F] transition-colors duration-300">
          <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-white transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </div>
  );
}