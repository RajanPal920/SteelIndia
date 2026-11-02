import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';
import SEO from '../components/SEO';
import {
  getProductMaterialsForMaterial,
  getProductMaterialUrl,
  getActiveMaterials
} from '../data/productMaterialRegistry';
import {
  getCanonicalMaterial,
  getSeoSuffix,
  getSeoTitle,
  getSeoDescription,
  getMaterialUrl,
  getCategoryUrl,
  getTypeMaterialUrl,
  hasSeoSuffix
} from '../data/productNavigationData';
import { materials } from '../data/materials';
import { getGradeUrl, getGradesForMaterial } from '../data/gradesData';
import {
  CheckCircle2, ArrowRight, ShieldCheck,
  Layers, Box, FlaskConical, Award, ChevronRight
} from 'lucide-react';

export default function MaterialCategory() {
  const { material: materialParam, materialSlug } = useParams();
  const slug = materialSlug || materialParam;

  const material = getCanonicalMaterial(slug);

  if (!material) {
    return <Navigate to="/materials" replace />;
  }

  // ProductMaterials items filtered specifically for this material
  const productMaterialsList = getProductMaterialsForMaterial(material.id);

  // If this material has no productMaterials data, redirect to /materials
  if (productMaterialsList.length === 0) {
    return <Navigate to="/materials" replace />;
  }

  // Grades available for this specific material
  const materialGradesList = getGradesForMaterial(material.id);

  const seoSuffix = getSeoSuffix(material.id);
  const seoTitle = getSeoTitle(material.name, material.id);
  const seoDesc = getSeoDescription(material.name, material.id, `Supplying ${productMaterialsList.length} certified industrial products in ${material.name}.`);

  return (
    <div key={material.id} className="flex flex-col min-h-screen bg-slate-50 text-left font-sans">
      <SEO
        title={seoTitle}
        description={seoDesc}
      />

      <Breadcrumb
        items={[
          { label: 'Materials', to: '/materials' },
          { label: material.name }
        ]}
      />

      {/* Hero Section */}
      <section className="bg-[#0055A4] text-white py-12 sm:py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0055A4] bg-white px-3.5 py-1.5 rounded-full shadow-sm">
                  <Layers className="w-3.5 h-3.5 text-[#E3000F]" />
                  {material.category}
                </div>
                <span className="inline-flex items-center text-xs font-bold tracking-wider text-white bg-white/20 backdrop-blur-xs px-3 py-1.5 rounded-full border border-white/30">
                  {seoSuffix}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white drop-shadow-md">
                {material.name}
              </h1>

              <p className="text-base sm:text-lg text-white/95 leading-relaxed max-w-2xl border-l-4 border-[#E3000F] pl-4">
                {material.tagline}
              </p>

              <div className="pt-2 flex flex-wrap gap-3">
                <Link
                  to={`/contact?material=${encodeURIComponent(material.name)}`}
                  className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg text-xs font-bold text-[#0055A4] bg-white hover:bg-slate-100 transition-colors shadow-sm"
                >
                  Inquire for {material.name} <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                </Link>
                <a
                  href="#grades-list"
                  className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-xs font-bold text-white border border-white/40 hover:bg-white/10 transition-colors"
                >
                  View Available Grades ({materialGradesList.length})
                </a>
                <a
                  href="#products-list"
                  className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-xs font-bold text-white border border-white/40 hover:bg-white/10 transition-colors"
                >
                  Browse Products ({productMaterialsList.length})
                </a>
              </div>
            </div>

            {/* Right Column Image */}
            {material.image && (
              <div className="lg:col-span-5 flex justify-center lg:justify-end">
                <div className="w-full max-w-md aspect-[4/3] rounded-2xl bg-white/10 backdrop-blur-xs border border-white/20 overflow-hidden shadow-2xl relative group">
                  <img
                    src={material.image}
                    alt={`${material.name} ${seoSuffix}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 bg-white"
                  />
                  <div className="absolute top-4 left-4 bg-white/95 text-[#0055A4] text-[11px] font-bold px-3 py-1 rounded shadow-sm">
                    CERTIFIED MATERIAL FAMILY
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>
      </section>

      {/* Material Overview & Quick Stats */}
      <section className="bg-white border-b border-slate-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <h2 className="text-lg font-bold text-[#0055A4] flex items-center gap-2">
                <FlaskConical className="w-5 h-5 text-[#E3000F]" />
                Metallurgical Characteristics
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                {material.characteristics}
              </p>
            </div>
            <div className="lg:col-span-4 bg-slate-50 p-5 rounded-xl border border-slate-200 space-y-2">
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#0055A4]" />
                Material Family Summary
              </div>
              <div className="text-xs text-slate-800 font-mono font-semibold">
                Standards: {material.standards?.slice(0, 3).join(', ') || 'ASTM / ASME'}
              </div>
              <div className="text-[11px] text-slate-500">
                Supplying {productMaterialsList.length} certified products across {materialGradesList.length} distinct engineering grades with full EN 10204 3.1 mill certification.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MATERIAL GRADES & SPECIFICATIONS SECTION (Every grade has its own unique clickable card) */}
      <section className="py-12 bg-white border-b border-slate-200" id="grades-list">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 pb-4 border-b border-slate-200">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#E3000F] mb-1.5 flex items-center gap-1.5">
                <span className="w-4 h-0.5 bg-[#E3000F] inline-block"></span>
                <span>METALLURGICAL GRADES</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0055A4] tracking-tight">
                {material.name} <span className="text-[#E3000F]">Grades & Specifications.</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
                Each grade features dedicated chemical composition, mechanical properties, and associated product ranges.
              </p>
            </div>
            <div className="bg-slate-100 text-xs font-bold text-slate-700 px-3.5 py-1.5 rounded-lg border border-slate-200">
              {materialGradesList.length} Available Grades
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {materialGradesList.map((gObj) => {
              const gradeUrl = getGradeUrl(gObj.grade, material.id);
              return (
                <Link
                  key={gObj.slug}
                  to={gradeUrl}
                  className="group relative bg-slate-50 hover:bg-white rounded-xl border border-slate-200 hover:border-[#0055A4] p-5 shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col justify-between text-left"
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-[#E3000F] uppercase tracking-wider">
                        {gObj.uns || material.name}
                      </span>
                      <span className="text-[10px] font-mono bg-white group-hover:bg-blue-50 text-[#0055A4] px-2 py-0.5 rounded border border-slate-200 group-hover:border-blue-200">
                        SPEC SHEET
                      </span>
                    </div>
                    <h3 className="text-base font-extrabold text-slate-900 group-hover:text-[#0055A4] transition-colors">
                      {gObj.grade}
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                      {gObj.tagline || gObj.overview}
                    </p>
                  </div>

                  <div className="pt-4 mt-3 border-t border-slate-200/60 flex items-center justify-between text-xs font-bold text-[#0055A4] group-hover:text-[#E3000F] transition-colors">
                    <span>View Grade Details</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* PRODUCT MATERIALS CATALOG SECTION (Strict material-wise products) */}
      <section className="py-12 sm:py-16 bg-slate-50/70 border-b border-slate-200" id="products-list">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 pb-4 border-b border-slate-200">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#E3000F] mb-1.5 flex items-center gap-1.5">
                <span className="w-4 h-0.5 bg-[#E3000F] inline-block"></span>
                <span>PRODUCTS CATALOG</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0055A4] tracking-tight">
                {material.name} <span className="text-[#E3000F]">Products.</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
                {productMaterialsList.length} products available in {material.name}
              </p>
            </div>
            <div className="bg-white text-xs font-bold text-[#0055A4] px-4 py-2 rounded-lg border border-slate-200 shadow-2xs">
              Showing All {productMaterialsList.length} Certified Products
            </div>
          </div>

          {productMaterialsList.length > 0 ? (
            <div key={`grid-${material.id}`} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {productMaterialsList.map((item, index) => {
                const detailUrl = getProductMaterialUrl(material.id, item);
                const indexStr = String(index + 1).padStart(2, '0');
                const primarySpec = item.standards?.split(',')[0] || item.forms || 'ASTM / ASME Standard';

                return (
                  <Link
                    key={`${material.id}-${item.id || item.pureSlug || index}`}
                    to={detailUrl}
                    className="group relative bg-white rounded-xl border border-slate-200 hover:border-[#0055A4] overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full text-left min-h-[380px]"
                  >
                    {/* Top Red Accent Bar */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-[#E3000F] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left z-10" />

                    {/* Image Area with object-cover */}
                    <div className="relative h-52 bg-white overflow-hidden">
                      {item.image ? (
                        <img
                          src={item.image}
                          alt={`${item.title} in ${material.name}`}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 bg-white"
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center bg-white text-slate-400 p-4 text-center">
                          <Box className="w-9 h-9 text-slate-300 mb-1.5 stroke-1" />
                          <span className="text-[11px] font-bold text-slate-500 line-clamp-1">{item.title}</span>
                          <span className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Image to be added</span>
                        </div>
                      )}

                      {/* Index Badge */}
                      <div className="absolute top-2 left-2 bg-white/90 border border-slate-200 text-[#0055A4] font-mono text-[10px] font-bold px-1.5 py-0.5 rounded shadow-sm z-10">
                        {indexStr}
                      </div>

                      {/* Material Badge */}
                      <div className="absolute top-2 right-2 bg-white/95 backdrop-blur-xs border border-slate-200 text-[#0055A4] text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded shadow-xs z-10">
                        {material.name}
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                      <div>
                        <h3 className="font-bold text-slate-900 group-hover:text-[#0055A4] transition-colors text-sm sm:text-base leading-snug line-clamp-2">
                          {item.title}
                        </h3>
                        <div className="text-[11px] font-bold text-[#E3000F] uppercase tracking-wider mt-1">
                          {item.manufacturer || 'Manufacturer & Supplier in India'}
                        </div>
                        <p className="text-xs text-slate-600 line-clamp-2 mt-2 leading-relaxed">
                          {item.description}
                        </p>
                      </div>

                      <div className="space-y-3 pt-2">
                        {/* Primary Standard Badge */}
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-50 border border-slate-200/80 text-[11px] font-mono font-medium text-slate-700">
                          <Box className="w-3 h-3 text-[#0055A4] shrink-0" />
                          <span className="line-clamp-1">{primarySpec}</span>
                        </div>

                        {/* View Details Action Button */}
                        <div className="w-full inline-flex items-center justify-center px-4 py-2.5 rounded-lg text-xs font-bold text-white bg-[#0055A4] group-hover:bg-[#E3000F] shadow-sm transition-colors duration-200">
                          <span>View Details</span>
                          <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform duration-200 group-hover:translate-x-1" />
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-xl border border-slate-200 p-8">
              <Box className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <h3 className="text-base font-bold text-slate-700">No products available for this material</h3>
              <p className="text-xs text-slate-500 mt-1 max-w-md mx-auto">
                Product specifications for {material.name} are currently being updated. Please contact our sales team directly for quotes.
              </p>
              <Link
                to="/contact"
                className="mt-4 inline-flex items-center gap-1.5 px-4 py-2 bg-[#0055A4] text-white text-xs font-bold rounded-lg hover:bg-[#E3000F] transition-colors"
              >
                Inquire Directly &rarr;
              </Link>
            </div>
          )}

        </div>
      </section>

      {/* Material Technical Specifications Detail Tables */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Typical Supply Forms */}
            {material.typicalForms && material.typicalForms.length > 0 && (
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4">
                <h3 className="text-sm font-bold text-[#0055A4] uppercase tracking-wider flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#E3000F]" />
                  Available Supply Forms in {material.name}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {material.typicalForms.map((form, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-700 bg-white p-2.5 rounded-lg border border-slate-200/80">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#E3000F] shrink-0" />
                      <span>{form}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Applicable Standards */}
            {material.standards && material.standards.length > 0 && (
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4">
                <h3 className="text-sm font-bold text-[#0055A4] uppercase tracking-wider flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#E3000F]" />
                  Manufacturing Standards & Specifications
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {material.standards.map((std, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-mono font-semibold text-slate-800 bg-white p-2.5 rounded-lg border border-slate-200/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0055A4] shrink-0" />
                      <span>{std}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>
        </div>
      </section>
    </div>
  );
}
