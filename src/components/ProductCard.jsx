import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export default function ProductCard({ product }) {
  return (
    <Link
      to={`/product/${product.id}`}
      className="group bg-white rounded-xl border border-slate-200/90 hover:border-steel-400 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col h-full text-left"
      aria-label={`View specifications for ${product.name}`}
    >
      {/* Product Image Frame with clean white background */}
      <div className="relative aspect-[4/3] bg-white border-b border-slate-100 overflow-hidden flex items-center justify-center p-4 sm:p-5">
        <img
          src={product.image}
          alt={`${product.name} industrial steel supply`}
          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {product.tag && (
          <div className="absolute top-3 left-3 bg-slate-50/90 backdrop-blur-xs px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider text-slate-700 border border-slate-200/80">
            {product.tag}
          </div>
        )}
      </div>

      {/* Card Body */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3 bg-white">
        <div>
          <h3 className="text-base sm:text-lg font-bold text-navy-950 group-hover:text-industrial-amber transition-colors tracking-tight line-clamp-1">
            {product.name}
          </h3>
          <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed font-normal">
            {product.shortDesc}
          </p>
        </div>

        {/* Explore Indicator */}
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
          <span className="text-xs font-bold text-steel-700 group-hover:text-industrial-amber inline-flex items-center space-x-1.5 transition-colors">
            <span>Explore Category</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
          <span className="text-[10px] font-mono font-medium text-slate-400">
            ASTM / ASME
          </span>
        </div>
      </div>
    </Link>
  );
}
