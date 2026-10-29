import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';
import MaterialCard from '../components/MaterialCard';
import SEO from '../components/SEO';
import { materials } from '../data/materials';
import { Layers, ArrowRight, AlertCircle, Search, Filter, Box, ShieldCheck } from 'lucide-react';

export default function Materials() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredMaterials = materials.filter(m =>
    m.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    m.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    m.grades.some(g => g.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-left font-sans">
      <SEO
        title="Material Range & Steel Alloy Families | Steel India Co."
        description="Explore 15 industrial material families: Stainless Steel, Carbon Steel, Duplex, Super Duplex, Inconel, Monel, Hastelloy, Titanium, Copper Nickel and specialty alloys."
      />

      <Breadcrumb items={[{ label: 'Materials' }]} />

      {/* --- HERO HEADER (Same as Products Page) --- */}
      <section className="bg-[#E3000F] text-white py-14 sm:py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-[#0055A4]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#E3000F] bg-white px-4 py-1.5 rounded-full shadow-sm">
              <Layers className="w-4 h-4" />
              15 Alloy & Steel Families
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white drop-shadow-md">
              Explore Our Material Families
            </h1>
            <p className="text-base sm:text-lg text-white/90 leading-relaxed">
              Industrial piping and fabrication demand precise metallurgy tailored to corrosion risks, mechanical loads, and working temperatures. We supply across 15 material families.
            </p>
          </div>
        </div>
      </section>

      {/* --- SEARCH & FILTER SECTION (Same as Products Page) --- */}
      <section className="bg-white border-b border-slate-200 py-5 sticky top-0 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">

          <div className="relative w-full max-w-2xl mx-auto md:mx-0">
            <div className="flex items-center w-full bg-slate-100/80 hover:bg-slate-100 transition-colors rounded-full px-5 py-3 border border-transparent focus-within:bg-white focus-within:border-[#0055A4] focus-within:ring-2 focus-within:ring-[#0055A4]/20">
              <Search className="w-5 h-5 text-slate-500 shrink-0 mr-3" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by material family, grade (e.g. 316L, Inconel, 2205)..."
                className="w-full bg-transparent text-sm text-slate-800 placeholder-slate-500 focus:outline-none"
              />
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

          {/* Availability Notice inside Sticky Bar */}
          <div className="flex items-start space-x-2.5 text-xs text-slate-600 bg-blue-50/50 p-3 rounded-lg border border-blue-100">
            <AlertCircle className="w-4 h-4 text-[#E3000F] shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-[#0055A4]">Material Availability Policy:</span> Material families shown represent standard classifications supplied for industrial projects. Specific mill heat availability, delivery forms, and minimum commercial quantities are confirmed upon technical inquiry review.
            </div>
          </div>

        </div>
      </section>

      {/* --- MATERIAL GRID --- */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Results Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 pb-4 border-b border-slate-200 gap-3">
            <div className="text-sm text-slate-600 font-medium bg-blue-50 px-3 py-1.5 rounded-lg border border-blue-100">
              Showing <span className="font-bold text-[#0055A4]">{filteredMaterials.length}</span> of {materials.length} material families
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-500 font-mono bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200">
              <ShieldCheck className="w-4 h-4 text-[#E3000F]" />
              Standards: ASTM, ASME, DIN, EN, IS
            </div>
          </div>

          {filteredMaterials.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-5">
              {filteredMaterials.map((material) => (
                <MaterialCard key={material.id} material={material} />
              ))}
            </div>
          ) : (
            <div className="py-16 text-center space-y-4 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto">
                <Box className="w-8 h-8 text-slate-400" />
              </div>
              <h3 className="text-lg font-bold text-[#0055A4]">No material families found</h3>
              <p className="text-sm text-slate-500 max-w-md mx-auto">
                Try searching for a different keyword like "Stainless", "Duplex", or "Inconel".
              </p>
              <button
                type="button"
                onClick={() => setSearchTerm('')}
                className="mt-2 inline-flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-bold text-white bg-[#E3000F] hover:bg-[#C2000D] transition-colors"
              >
                Clear Search
              </button>
            </div>
          )}
        </div>
      </section>

      {/* --- MATERIAL INQUIRY CTA --- */}
      <section className="bg-white border-t border-slate-200 py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#0055A4 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5 relative z-10">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#E3000F] bg-red-50 px-3 py-1.5 rounded-full border border-red-100">
            Special Alloys
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0055A4]">
            Looking for a Non-Standard Grade or Special Alloy?
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
            We review client specifications for hard-to-source titanium grades, high-nickel alloys, and special wall thickness schedules.
          </p>
          <div className="pt-4">
            <Link
              to="/contact"
              className="group inline-flex items-center space-x-2 px-8 py-3.5 rounded-lg text-sm font-bold text-white bg-[#E3000F] hover:bg-[#C2000D] shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
            >
              <span>Discuss Alloy Specifications</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}