import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Box, CheckCircle2 } from 'lucide-react';

export default function ProductCard({ product, variant = 'standard', index = null }) {
  const indexStr = index !== null ? String(index + 1).padStart(2, '0') : null;

  const primaryStandard = product.specs?.standards?.split(',')[0] || 'ASME / ASTM';

  // Agar featured variant use ho raha hai toh use yahan handle kiya gaya hai
  if (variant === 'featured') {
    return (
      <Link
        to={`/product/${product.id}`}
        className="group relative bg-white rounded-xl border border-slate-300 hover:border-[#0055A4] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col lg:flex-row h-full text-left"
      >
        <div className="relative w-full lg:w-[42%] aspect-[4/3] lg:aspect-auto bg-slate-100 p-8 flex items-center justify-center border-b lg:border-b-0 lg:border-r border-slate-200 overflow-hidden shrink-0">
          <img src={product.image} alt={product.name} className="relative z-10 w-full h-full max-h-[250px] object-contain transition-transform duration-500 group-hover:scale-105 mix-blend-multiply" loading="lazy" />
        </div>
        <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-4 bg-white">
          <div className="space-y-3">
            <h3 className="text-xl sm:text-2xl font-bold text-[#0055A4] group-hover:text-[#E3000F] transition-colors tracking-tight">{product.name}</h3>
            <p className="text-sm text-slate-600 line-clamp-2 leading-relaxed">{product.shortDesc}</p>
            <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
              <div className="text-[10px] uppercase font-bold text-slate-400 mb-0.5">Standard</div>
              <div className="text-xs font-bold text-slate-800">{primaryStandard}</div>
            </div>
          </div>
          <div className="pt-4 border-t border-slate-100">
            <span className="inline-flex items-center justify-center w-full space-x-2 text-sm font-bold text-white bg-[#0055A4] hover:bg-[#003d7a] px-4 py-2.5 rounded transition-colors">
              <span>View Specifications</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </span>
          </div>
        </div>
      </Link>
    );
  }

  // Standard Compact Card (Grid ke liye)
  return (
    <Link
      to={`/product/${product.id}`}
      className="group relative bg-white rounded-xl border border-slate-200 hover:border-[#0055A4] overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full text-left min-h-[380px]"
    // ^ min-h-[380px] add kiya gaya hai height increase karne ke liye
    >
      {/* Top Red Accent Bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-[#E3000F] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left z-10" />

      {/* Image Area - Height Increased */}
      <div className="relative h-48 bg-slate-50 border-b border-slate-100 overflow-hidden flex items-center justify-center p-4">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#0055A4 1px, transparent 1px)', backgroundSize: '10px 10px' }}></div>

        {/* Changed object-cover to object-contain so images don't get cut off */}
        <img
          src={product.image}
          alt={`${product.name} industrial steel supply`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 relative z-10 mix-blend-multiply"
          loading="lazy"
        />

        {/* Index Badge */}
        {indexStr && (
          <div className="absolute top-2 left-2 bg-white/90 border border-slate-200 text-[#0055A4] font-mono text-[10px] font-bold px-1.5 py-0.5 rounded shadow-sm z-10">
            {indexStr}
          </div>
        )}
      </div>

      {/* Content Area - Padding Increased */}
      <div className="p-5 flex-1 flex flex-col justify-between bg-white">
        <div>
          <h3 className="text-sm sm:text-base font-bold text-slate-800 group-hover:text-[#0055A4] transition-colors tracking-tight line-clamp-1 mb-2">
            {product.name}
          </h3>
          <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed mb-4">
            {product.shortDesc}
          </p>
        </div>

        <div>
          {/* Specs Line */}
          <div className="bg-slate-50 border border-slate-100 p-2.5 rounded mb-4 flex items-center gap-1.5">
            <Box className="w-3.5 h-3.5 text-[#0055A4] shrink-0" />
            <div className="text-[10px] font-mono text-slate-600 truncate font-semibold" title={primaryStandard}>
              {primaryStandard}
            </div>
          </div>

          {/* FULL WIDTH View Details Button */}
          <div className="w-full">
            <div className="flex items-center justify-center w-full bg-[#0055A4] group-hover:bg-[#E3000F] text-white py-2.5 rounded-md transition-colors duration-300">
              <span className="text-xs font-bold">View Details</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}