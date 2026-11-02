// src/components/OtherProductsSection.jsx
import React, { useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { products } from '../data/products';
import { getCategoryUrl, getSeoSuffix } from '../data/productNavigationData';
import { Box, ArrowRight, Layers, ShieldCheck } from 'lucide-react';

/**
 * Deterministic pseudo-random card selector based on page route / seed.
 * Produces a unique combination of 4 products for each page while remaining
 * stable across renders of the same page.
 */
function getSeededProducts(items, seedStr, count = 4) {
  if (!items || items.length <= count) return items || [];

  let hash = 0;
  const str = String(seedStr || 'steelindia');
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  hash = Math.abs(hash);

  // Linear Congruential Generator seeded by the hash
  let currentSeed = hash || 1337;
  const nextRand = () => {
    currentSeed = (currentSeed * 1664525 + 1013904223) % 4294967296;
    return currentSeed / 4294967296;
  };

  const pool = [...items];
  const result = [];
  for (let i = 0; i < count && pool.length > 0; i++) {
    const idx = Math.floor(nextRand() * pool.length);
    result.push(pool[idx]);
    pool.splice(idx, 1);
  }

  return result;
}

export default function OtherProductsSection({
  currentCategoryId = null,
  seed = null,
  limit = 4,
  title = "Explore Other Industrial Piping & Steel Products",
  subtitle = "Browse certified flanges, pipes, tubes, wires, fasteners, valves, and forged components manufactured to international ASTM / ASME standards."
}) {
  const location = useLocation();
  const effectiveSeed = seed || location.pathname || 'default';

  // Compute 4 unique cards specific to this page
  const displayProducts = useMemo(() => {
    // Exclude currently viewed category so we don't recommend what the user is already on
    const filtered = currentCategoryId
      ? products.filter(p => p.id !== currentCategoryId)
      : products;

    return getSeededProducts(filtered, effectiveSeed, limit);
  }, [currentCategoryId, effectiveSeed, limit]);

  return (
    <section className="border-t border-slate-200 bg-white py-14 sm:py-18 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-slate-100 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#E3000F] mb-2 bg-red-50 border border-red-100 px-3 py-1 rounded-full">
              <Layers className="w-3.5 h-3.5" />
              Related Industrial Range
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0055A4] tracking-tight">
              {title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 max-w-2xl mt-1.5 leading-relaxed">
              {subtitle}
            </p>
          </div>

          <Link
            to="/products"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#0055A4] hover:text-[#E3000F] transition-colors whitespace-nowrap self-start md:self-end"
          >
            <span>View All {products.length} Categories</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Exactly 4 Cards in 1 Row on Desktop, 2 on Tablet, 1 on Mobile - Zero Empty Gaps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayProducts.map((p, idx) => {
            const seoSuffix = getSeoSuffix(p.id);
            const primaryStandard = p.specs?.standards?.split(',')[0] || 'ASME / ASTM';
            const typesCount = p.types?.length || 0;
            const indexStr = String(idx + 1).padStart(2, '0');

            return (
              <Link
                key={p.id}
                to={getCategoryUrl(p.id)}
                className="group relative bg-white rounded-2xl border border-slate-200 hover:border-[#0055A4] overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col h-full text-left"
              >
                {/* Top Animated Red Accent Bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#E3000F] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left z-20" />

                {/* Fixed Aspect Ratio Image Area (16:10) with strict object-cover */}
                <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden shrink-0">
                  <img
                    src={p.image}
                    alt={`${p.name} ${seoSuffix}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Index Pill */}
                  <div className="absolute top-2.5 left-2.5 bg-white/95 backdrop-blur-xs text-[#0055A4] font-mono text-[10px] font-bold px-1.5 py-0.5 rounded shadow-xs z-10 border border-slate-100">
                    {indexStr}
                  </div>

                  {/* Category Tag Badge */}
                  {p.tag && (
                    <div className="absolute top-2.5 right-2.5 bg-slate-900/80 backdrop-blur-xs text-white text-[10px] font-medium px-2 py-0.5 rounded shadow-xs z-10 max-w-[130px] truncate">
                      {p.tag}
                    </div>
                  )}

                  {/* Type Count Pill */}
                  {typesCount > 0 && (
                    <div className="absolute bottom-2.5 left-2.5 bg-white/95 backdrop-blur-xs text-[#0055A4] text-[10px] font-bold px-2 py-0.5 rounded shadow-xs border border-slate-100 flex items-center gap-1 z-10">
                      <Box className="w-3 h-3 text-[#E3000F]" />
                      <span>{typesCount} Types</span>
                    </div>
                  )}
                </div>

                {/* Content Area - Uniform heights & spacing across all 4 cards */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-1">
                    <h3 className="text-base font-bold text-slate-800 group-hover:text-[#0055A4] transition-colors tracking-tight line-clamp-1">
                      {p.name}
                    </h3>
                    <div className="text-[11px] font-semibold text-[#E3000F] truncate">
                      {seoSuffix}
                    </div>
                    <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed min-h-[32px] mt-1">
                      {p.shortDesc}
                    </p>
                  </div>

                  <div className="space-y-3 pt-2">
                    {/* Standard / Specification pill */}
                    <div className="bg-slate-50 border border-slate-100 px-2.5 py-1.5 rounded-lg flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#0055A4] shrink-0" />
                      <span className="text-[10px] font-mono text-slate-600 truncate font-semibold" title={primaryStandard}>
                        {primaryStandard}
                      </span>
                    </div>

                    {/* Action Button */}
                    <div className="flex items-center justify-center w-full bg-[#0055A4] group-hover:bg-[#E3000F] text-white py-2.5 px-3 rounded-lg text-xs font-bold transition-colors duration-300 shadow-xs">
                      <span>Explore {p.name}</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}
