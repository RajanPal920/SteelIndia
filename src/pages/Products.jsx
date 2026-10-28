import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';
import ProductCard from '../components/ProductCard';
import SEO from '../components/SEO';
import { products } from '../data/products';
import { Search, Filter, Box, ArrowRight, ShieldCheck } from 'lucide-react';

export default function Products() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('ALL');

  // Extract unique tags
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
    <div className="flex flex-col min-h-screen bg-white text-left">
      <SEO 
        title="Industrial Steel Products | Complete 17 Categories Catalog"
        description="Browse all 17 product categories supplied by SteelIndia: Butt weld fittings, forged fittings, pipes, tubes, sheets, plates, flanges, fasteners, wires, coils and rings."
      />

      <Breadcrumb items={[{ label: 'Products' }]} />

      {/* Page Header */}
      <section className="bg-slate-50 border-b border-slate-200 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-industrial-amber bg-white px-3 py-1 rounded-full border border-slate-200 shadow-2xs">
              INDUSTRIAL PRODUCT CATALOG ({products.length} CATEGORIES)
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-navy-950 tracking-tight">
              Steel & Alloy Industrial Products
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Explore our complete range of certified steel products designed for oil & gas, petrochemical, power generation, infrastructure, and heavy engineering applications.
            </p>
          </div>

          {/* Search & Tag Filter Bar */}
          <div className="mt-8 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search products by name, tag, or description (e.g. flanges, seamless pipe, mesh)..."
                className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-steel-500"
              />
            </div>

            {/* Tag Pills */}
            <div className="flex items-center space-x-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
              <span className="text-xs text-slate-400 font-semibold px-2 flex items-center shrink-0">
                <Filter className="w-3.5 h-3.5 mr-1" /> Filter:
              </span>
              {tags.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => setSelectedTag(tag)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                    selectedTag === tag
                      ? 'bg-navy-900 text-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8 pb-3 border-b border-slate-200">
            <div className="text-sm text-slate-600">
              Showing <span className="font-bold text-navy-950">{filteredProducts.length}</span> of {products.length} categories
            </div>
            <div className="text-xs text-slate-400">
              Dimensional standards: ASME, ASTM, DIN, EN, IS
            </div>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="py-16 text-center space-y-3 bg-slate-50 rounded-xl border border-slate-200">
              <Box className="w-10 h-10 text-slate-400 mx-auto" />
              <h3 className="text-base font-bold text-slate-800">No matching product categories found</h3>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                Try searching for a different keyword or reset the filter to view all categories.
              </p>
              <button
                type="button"
                onClick={() => { setSearchTerm(''); setSelectedTag('ALL'); }}
                className="mt-2 text-xs font-semibold text-steel-700 hover:underline"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Inquiry CTA Section */}
      <section className="bg-slate-50 border-t border-slate-200 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950">
            Need a Customized Product Specification?
          </h2>
          <p className="text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
            Send us your required dimensions, outer diameter, wall schedule, and testing criteria. Our team reviews custom requirements and engineering drawings.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 px-7 py-3 rounded-lg text-sm font-bold text-white bg-industrial-amber hover:bg-industrial-hover shadow transition-colors"
            >
              <span>Submit RFQ / Inquiry</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
