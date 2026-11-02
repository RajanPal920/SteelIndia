import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Layers } from 'lucide-react';
import { getSeoSuffix, getMaterialUrl } from '../data/productNavigationData';

export default function MaterialCard({ material, className = '' }) {
  const seoSuffix = getSeoSuffix(material.id);

  return (
    <Link
      to={getMaterialUrl(material.id)}
      className={`group block bg-white rounded-xl border border-slate-200 hover:border-[#0055A4] hover:shadow-lg transition-all duration-300 text-left relative overflow-hidden flex flex-col justify-between ${className}`}
    >
      {/* Top Red Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-[#E3000F] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left z-10" />

      {/* Image Area - STRICT object-cover, overflow-hidden */}
      {material.image && (
        <div className="relative h-44 w-full bg-slate-100 overflow-hidden shrink-0">
          <img
            src={material.image}
            alt={`${material.name} ${seoSuffix}`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute top-3 left-3">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#0055A4] bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded shadow-xs border border-slate-200/80 flex items-center gap-1">
              <Layers className="w-3 h-3 text-[#E3000F]" />
              {material.category}
            </span>
          </div>
        </div>
      )}

      {/* Content Area */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          {!material.image && (
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#0055A4] bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100 flex items-center gap-1">
                <Layers className="w-3 h-3 text-[#E3000F]" />
                {material.category}
              </span>
              <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#E3000F] group-hover:translate-x-1 transition-all" />
            </div>
          )}

          <div className="flex items-start justify-between gap-1">
            <h3 className="text-base font-bold text-slate-800 group-hover:text-[#0055A4] transition-colors line-clamp-1">
              {material.name}
            </h3>
            <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#E3000F] group-hover:translate-x-1 transition-all shrink-0 mt-0.5" />
          </div>

          <div className="text-[11px] font-semibold text-[#E3000F] mt-0.5">
            {seoSuffix}
          </div>

          <p className="text-xs text-slate-500 line-clamp-2 mt-2 leading-relaxed">
            {material.tagline}
          </p>
        </div>

        {/* Bottom Row: Standards */}
        <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
          <span className="font-medium">Spec:</span>
          <span className="font-mono text-[#0055A4] font-bold truncate max-w-[170px]">
            {material.standards?.[0] || 'ASTM Standard'}
          </span>
        </div>
      </div>
    </Link>
  );
}
