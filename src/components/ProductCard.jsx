import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Box, CheckCircle2 } from 'lucide-react';

export default function ProductCard({ product, variant = 'standard', index = null }) {
  const indexStr = index !== null ? String(index + 1).padStart(2, '0') : null;

  // Key specifications helper
  const primaryStandard = product.specs?.standards?.split(',')[0] || 'ASME / ASTM';
  const sizeRange = product.specs?.sizes?.split('(')[0] || product.specs?.sizes || 'Standard Sizes';

  // --- FEATURED CARD (Large Horizontal Card) ---
  if (variant === 'featured') {
    return (
      <Link
        to={`/product/${product.id}`}
        className="group relative bg-white rounded-xl border border-slate-300 hover:border-[#0055A4] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col lg:flex-row h-full text-left"
      >
        {/* Top Industrial Accent Bar (Blue to Red) */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#0055A4] to-[#E3000F] z-10" />

        {/* Left Image Section */}
        <div className="relative w-full lg:w-[42%] aspect-[4/3] lg:aspect-auto bg-slate-100 p-8 flex items-center justify-center border-b lg:border-b-0 lg:border-r border-slate-200 overflow-hidden shrink-0">

          {/* Blueprint Grid Pattern Background */}
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(#0055A4 1px, transparent 1px)', backgroundSize: '16px 16px' }}></div>

          <img
            src={product.image}
            alt={`${product.name} industrial steel supply`}
            className="relative z-10 w-full h-full max-h-[250px] object-contain transition-transform duration-500 group-hover:scale-105 mix-blend-multiply"
            loading="lazy"
          />

          {/* Index Badge */}
          {indexStr && (
            <div className="absolute top-4 left-4 z-10 bg-[#0055A4] text-white font-mono text-xs font-bold px-3 py-1.5 rounded shadow-sm flex items-center space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E3000F] animate-pulse" />
              <span>ITEM {indexStr}</span>
            </div>
          )}

          {/* Tag Badge */}
          {product.tag && (
            <div className="absolute bottom-4 right-4 z-10 bg-white text-[#0055A4] text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded border border-[#0055A4]/20 shadow-sm">
              {product.tag}
            </div>
          )}
        </div>

        {/* Right Content Section */}
        <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6 bg-white">
          <div className="space-y-4">

            {/* Header Badges */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#E3000F] bg-red-50 px-2.5 py-1 rounded border border-red-100 uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5" />
                Prime Quality
              </span>
              <span className="text-[11px] font-mono text-slate-600 bg-slate-100 px-2.5 py-1 rounded border border-slate-200">
                MTC EN 10204 3.1
              </span>
            </div>

            {/* Title & Description */}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#0055A4] group-hover:text-[#E3000F] transition-colors tracking-tight">
                {product.name}
              </h3>
              <p className="text-sm text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                {product.shortDesc}
              </p>
            </div>

            {/* Industrial Specifications Table */}
            <div className="grid grid-cols-2 gap-px bg-slate-200 border border-slate-200 rounded-lg overflow-hidden mt-4">
              <div className="bg-white p-3">
                <div className="text-[10px] uppercase font-bold text-slate-400 mb-0.5 flex items-center gap-1">
                  <Box className="w-3 h-3 text-[#0055A4]" /> Standard
                </div>
                <div className="text-xs font-bold text-slate-800 truncate" title={primaryStandard}>
                  {primaryStandard}
                </div>
              </div>

              <div className="bg-white p-3">
                <div className="text-[10px] uppercase font-bold text-slate-400 mb-0.5 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-[#0055A4]" /> Size Range
                </div>
                <div className="text-xs font-bold text-slate-800 truncate" title={sizeRange}>
                  {sizeRange}
                </div>
              </div>
            </div>
          </div>

          {/* Action Footer */}
          <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <span className="inline-flex items-center justify-center space-x-2 text-sm font-bold text-white bg-[#0055A4] hover:bg-[#003d7a] px-5 py-2.5 rounded w-full sm:w-auto transition-colors cursor-pointer">
              <span>View Details</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </span>
            <span className="text-xs text-slate-400 font-mono hidden sm:inline shrink-0">
              REF: {product.id.toUpperCase()}
            </span>
          </div>
        </div>
      </Link>
    );
  }

  // --- STANDARD CARD (Grid View) ---
  return (
    <Link
      to={`/product/${product.id}`}
      className="group relative bg-white rounded-xl border border-slate-300 hover:border-[#0055A4] overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col h-full text-left"
      aria-label={`View specifications for ${product.name}`}
    >
      {/* Top Accent Bar (On Hover) */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-[#E3000F] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left z-10" />

      {/* Image Area */}
      <div className="relative aspect-[4/3] bg-slate-50 border-b border-slate-200 overflow-hidden flex items-center justify-center p-6">

        {/* Blueprint Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#0055A4 1px, transparent 1px)', backgroundSize: '12px 12px' }}></div>

        <img
          src={product.image}
          alt={`${product.name} industrial steel supply`}
          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105 relative z-10 mix-blend-multiply"
          loading="lazy"
        />

        {/* Monospace Index Badge */}
        {indexStr && (
          <div className="absolute top-3 left-3 bg-white border border-slate-200 text-[#0055A4] font-mono text-[10px] font-bold px-2 py-1 rounded shadow-sm z-10">
            {indexStr}
          </div>
        )}

        {/* Tag Badge */}
        {product.tag && (
          <div className="absolute top-3 right-3 bg-[#0055A4] text-white px-2 py-1 rounded text-[9px] font-bold uppercase tracking-wider shadow-sm z-10">
            {product.tag}
          </div>
        )}
      </div>

      {/* Content Area */}
      <div className="p-5 flex-1 flex flex-col justify-between bg-white">
        <div>
          <h3 className="text-base font-bold text-[#0055A4] group-hover:text-[#E3000F] transition-colors tracking-tight line-clamp-1 mb-2">
            {product.name}
          </h3>
          <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-4">
            {product.shortDesc}
          </p>
        </div>

        <div>
          {/* Spec Line */}
          <div className="bg-slate-50 border border-slate-200 p-2.5 rounded mb-4">
            <div className="text-[9px] uppercase font-bold text-slate-400 mb-0.5">Specs</div>
            <div className="text-[11px] font-mono text-slate-700 truncate font-semibold" title={primaryStandard}>
              {primaryStandard}
            </div>
          </div>

          {/* Footer Action */}
          <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <span className="inline-flex items-center justify-center space-x-2 text-sm font-bold text-white bg-[#0055A4] hover:bg-[#003d7a] px-5 py-2.5 rounded w-full sm:w-auto transition-colors cursor-pointer">
              <span>View Details</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </span>
            <span className="text-xs text-slate-400 font-mono hidden sm:inline shrink-0">
              REF: {product.id.toUpperCase()}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}