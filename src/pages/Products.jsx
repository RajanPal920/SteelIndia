import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';
import ProductCard from '../components/ProductCard';
import SEO from '../components/SEO';
import { products } from '../data/products';
import { Search, Filter, Box, ArrowRight, ShieldCheck, Factory } from 'lucide-react';

export default function Products() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('ALL');

  const tags = useMemo(() => {
    const set = new Set(products.map(p => p.tag));
    return ['ALL', ...Array.from(set)];
  }, []);

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchesSearch =
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.shortDesc.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.tag.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesTag = selectedTag === 'ALL' || p.tag === selectedTag;
      return matchesSearch && matchesTag;
    });
  }, [searchTerm, selectedTag]);

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-left font-sans">
      <SEO
        title="Industrial Steel Products | Complete 17 Categories Catalog"
        description="Browse all 17 product categories supplied by Steel India Co. (Chennai) Pvt. Ltd."
      />

      <Breadcrumb items={[{ label: 'Products' }]} />

      {/* Page Header */}
      <section className="bg-[#E3000F] text-white py-12 sm:py-16 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-[#0055A4]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#E3000F] bg-white px-4 py-1.5 rounded-full shadow-sm">
              <Factory className="w-4 h-4" />
              Industrial Product Catalog ({products.length} Categories)
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white drop-shadow-md">
              Steel & Alloy Industrial Products
            </h1>
            <p className="text-base sm:text-lg text-white/90 leading-relaxed">
              Explore our complete range of certified steel products designed for diverse industrial applications.
            </p>
          </div>
        </div>
      </section>

      {/* Search & Filter Section */}
      <section className="bg-white border-b border-slate-200 py-5 sticky top-0 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">

          {/* Top Row: Search Bar */}
          <div className="relative w-full max-w-2xl mx-auto md:mx-0">
            <div className="flex items-center w-full bg-slate-100/80 hover:bg-slate-100 transition-colors rounded-full px-5 py-3 border border-transparent focus-within:bg-white focus-within:border-[#0055A4] focus-within:ring-2 focus-within:ring-[#0055A4]/20">

              {/* Search Icon */}
              <Search className="w-5 h-5 text-slate-500 shrink-0 mr-3" />

              {/* Input */}
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search products by name, category, or description..."
                className="w-full bg-transparent text-sm text-slate-800 placeholder-slate-500 focus:outline-none"
              />

              {/* Clear Button (X) - Only shows when there is text */}
              {searchTerm && (
                <button
                  type="button"
                  onClick={() => setSearchTerm('')}
                  className="p-1 rounded-full hover:bg-slate-200 text-slate-500 transition-colors shrink-0 ml-2"
                  aria-label="Clear search"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
              )}
            </div>
          </div>

          {/* Bottom Row: Filter Pills */}
          <div className="flex items-center space-x-3 overflow-x-auto pb-2 scrollbar-none">
            {/* Filter Icon Pill */}
            <div className="flex items-center space-x-1.5 bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-xs font-bold shrink-0 border border-slate-200">
              <Filter className="w-3.5 h-3.5" />
              <span>Filters</span>
            </div>

            {/* Divider line */}
            <div className="h-6 w-px bg-slate-200 shrink-0 mx-1"></div>

            {/* Tags */}
            {tags.map((tag) => {
              const isActive = selectedTag === tag;
              return (
                <button
                  key={tag}
                  type="button"
                  onClick={() => setSelectedTag(tag)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-200 border shrink-0 ${isActive
                      ? 'bg-[#0055A4] text-white border-[#0055A4] shadow-sm'
                      : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                    }`}
                >
                  {/* Optional: Add small icons or colored dots for visual appeal */}
                  <span className={`w-2 h-2 rounded-full ${isActive ? 'bg-white' : 'bg-slate-300'}`}></span>
                  <span>{tag}</span>
                </button>
              );
            })}
          </div>

        </div>
      </section>

      {/* Product Grid */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 pb-3 border-b border-slate-200 gap-3">
            <div className="text-sm text-slate-600 font-medium bg-blue-50 px-3 py-1.5 rounded-lg border border-blue-100">
              Showing <span className="font-bold text-[#0055A4]">{filteredProducts.length}</span> of {products.length} categories
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-500 font-mono bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200">
              <ShieldCheck className="w-4 h-4 text-[#E3000F]" />
              Standards: ASME, ASTM, DIN, EN, IS
            </div>
          </div>

          {filteredProducts.length > 0 ? (
            // Grid updated for better responsiveness and compact spacing
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
              {filteredProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          ) : (
            <div className="py-16 text-center space-y-4 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto">
                <Box className="w-8 h-8 text-slate-400" />
              </div>
              <h3 className="text-lg font-bold text-[#0055A4]">No matching product categories found</h3>
              <p className="text-sm text-slate-500 max-w-md mx-auto">
                Try searching for a different keyword or reset the filter.
              </p>
              <button
                type="button"
                onClick={() => { setSearchTerm(''); setSelectedTag('ALL'); }}
                className="mt-2 inline-flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-bold text-white bg-[#E3000F] hover:bg-[#C2000D] transition-colors"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Inquiry CTA Section */}
      <section className="bg-white border-t border-slate-200 py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#0055A4 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5 relative z-10">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#E3000F] bg-red-50 px-3 py-1.5 rounded-full border border-red-100">
            Custom Requirements
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0055A4]">
            Need a Customized Product Specification?
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
            Send us your required dimensions, outer diameter, wall schedule, material grade, and testing criteria.
          </p>
          <div className="pt-4">
            <Link
              to="/contact"
              className="group inline-flex items-center space-x-2 px-8 py-3.5 rounded-lg text-sm font-bold text-white bg-[#E3000F] hover:bg-[#C2000D] shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
            >
              <span>Submit RFQ / Inquiry</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}