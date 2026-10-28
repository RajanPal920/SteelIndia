import React from 'react';

export default function IndustryCard({ industry }) {
  return (
    <div className="group bg-white rounded-xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col text-left">
      {/* 16:10 Landscape Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
        <img
          src={industry.image}
          alt={`${industry.name} industrial infrastructure and applications`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {/* Subtle bottom shadow gradient to elevate the image */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
      </div>

      {/* Clean caption area containing ONLY the industry name */}
      <div className="p-4 sm:p-5 bg-white border-t border-slate-100 flex items-center justify-between">
        <h3 className="text-base sm:text-lg font-bold text-navy-950 group-hover:text-industrial-amber transition-colors tracking-tight">
          {industry.name}
        </h3>
        <span className="w-2 h-2 rounded-full bg-slate-300 group-hover:bg-industrial-amber transition-colors shrink-0" aria-hidden="true" />
      </div>
    </div>
  );
}
