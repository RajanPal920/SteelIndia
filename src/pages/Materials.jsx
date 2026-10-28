import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';
import MaterialCard from '../components/MaterialCard';
import SEO from '../components/SEO';
import { materials } from '../data/materials';
import { Layers, ArrowRight, AlertCircle, Search } from 'lucide-react';

export default function Materials() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredMaterials = materials.filter(m => 
    m.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    m.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    m.grades.some(g => g.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="flex flex-col min-h-screen bg-white text-left">
      <SEO 
        title="Material Range & Steel Alloy Families | SteelIndia"
        description="Explore 15 industrial material families: Stainless Steel, Carbon Steel, Duplex, Super Duplex, Inconel, Monel, Hastelloy, Titanium, Copper Nickel and specialty alloys."
      />

      <Breadcrumb items={[{ label: 'Materials' }]} />

      {/* Page Header */}
      <section className="bg-slate-50 border-b border-slate-200 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-steel-700 bg-white px-3 py-1 rounded-full border border-slate-200">
              15 ALLOY & STEEL FAMILIES
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-navy-950 tracking-tight">
              Explore Our Material Families
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Industrial piping and fabrication demand precise metallurgy tailored to corrosion risks, mechanical loads, and working temperatures.
            </p>
          </div>

          {/* Search bar */}
          <div className="mt-8 max-w-xl">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by material family, grade (e.g. 316L, Inconel, 2205, Monel)..."
                className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm rounded-lg border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-steel-500 shadow-xs"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Material Grid */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Availability Notice */}
          <div className="mb-10 p-4 rounded-xl bg-amber-50/60 border border-amber-200 flex items-start space-x-3 text-xs sm:text-sm text-amber-900">
            <AlertCircle className="w-5 h-5 text-industrial-amber shrink-0 mt-0.5" />
            <div>
              <span className="font-bold">Material Availability Policy:</span> Material families shown on this website represent standard classifications supplied for industrial projects. Specific mill heat availability, delivery forms, and minimum commercial quantities are confirmed upon technical inquiry review.
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {filteredMaterials.map((material) => (
              <MaterialCard key={material.id} material={material} />
            ))}
          </div>

          {filteredMaterials.length === 0 && (
            <div className="py-12 text-center text-slate-500 text-sm">
              No material families matched your search. Try "Stainless", "Duplex", or "Inconel".
            </div>
          )}
        </div>
      </section>

      {/* Material Inquiry CTA */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Looking for a Non-Standard Grade or Special Alloy?
          </h2>
          <p className="text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            We review client specifications for hard-to-source titanium grades, high-nickel alloys, and special wall thickness schedules.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 px-7 py-3 rounded-lg text-sm font-bold text-white bg-industrial-amber hover:bg-industrial-hover shadow transition-colors"
            >
              <span>Discuss Alloy Specifications</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
