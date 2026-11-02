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
import { getGradeUrl } from '../data/gradesData';
import {
  CheckCircle2, ArrowRight, ShieldCheck,
  Layers, Box, FlaskConical
} from 'lucide-react';

export default function MaterialCategory() {
  const { material: materialParam, materialSlug } = useParams();
  const slug = materialSlug || materialParam;

  const material = getCanonicalMaterial(slug);

  if (!material) {
    return <Navigate to="/materials" replace />;
  }

  // Canonical SEO URL sync: Ensure URL in browser contains rotated SEO keyword
  if (!hasSeoSuffix(slug)) {
    return <Navigate to={getMaterialUrl(material.id)} replace />;
  }

  // ProductMaterials items filtered specifically for this material
  const productMaterialsList = getProductMaterialsForMaterial(material.id);

  // If this material has no productMaterials data, redirect to /materials per user requirement
  if (productMaterialsList.length === 0) {
    return <Navigate to="/materials" replace />;
  }

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

      {/* Hero Section with Same Material Image from Main Page */}
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
                  to={`/contact?material=${encodeURIComponent(material.id)}`}
                  className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg text-xs font-bold text-[#0055A4] bg-white hover:bg-slate-100 transition-colors shadow-sm"
                >
                  Inquire for {material.name} <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                </Link>
                <a
                  href="#products-list"
                  className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-xs font-bold text-white border border-white/40 hover:bg-white/10 transition-colors"
                >
                  Browse Available Products ({productMaterialsList.length})
                </a>
              </div>
            </div>

            {/* Right Column - Same Image as shown on Main Page */}
            {material.image && (
              <div className="lg:col-span-5 flex justify-center lg:justify-end">
                <div className="w-full max-w-md aspect-[4/3] rounded-2xl bg-white/10 backdrop-blur-xs border border-white/20 overflow-hidden shadow-2xl relative group">
                  <img
                    src={material.image}
                    alt={`${material.name} ${seoSuffix}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
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
                Supplying {productMaterialsList.length} certified industrial products with full EN 10204 3.1 mill certification.
              </div>
            </div>
          </div>

          {/* Commonly Supplied Grades */}
          {material.grades && material.grades.length > 0 && (
            <div className="pt-6 mt-6 border-t border-slate-100">
              <div className="flex items-center justify-between mb-2.5">
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#E3000F]" />
                  Commonly Supplied {material.name} Grades (Click for Technical Detail Page):
                </div>
                <span className="text-[11px] text-slate-400 font-medium hidden sm:inline">
                  Click any grade to view chemical specs & products
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {material.grades.map((grade, idx) => (
                  <Link
                    key={idx}
                    to={getGradeUrl(grade, material.id)}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-mono font-bold bg-slate-100 hover:bg-[#0055A4] text-slate-800 hover:text-white border border-slate-200 hover:border-[#0055A4] transition-all shadow-2xs group"
                    title={`View technical specifications for ${grade}`}
                  >
                    <span>{grade}</span>
                    <ArrowRight className="w-3 h-3 text-slate-400 group-hover:text-white group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* PRODUCT MATERIALS CATALOG SECTION (Showing data/productMaterials cards according to material) */}
      <section className="py-12 sm:py-16 bg-slate-50/70 border-b border-slate-200" id="products-list">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 pb-4 border-b border-slate-200">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#E3000F] mb-1.5 flex items-center gap-1.5">
                <span className="w-4 h-0.5 bg-[#E3000F] inline-block"></span>
                <span>MATERIALS</span>
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
                    <div className="relative h-52 bg-slate-100 overflow-hidden">
                      {item.image ? (
                        <img
                          src={item.image}
                          alt={`${item.title} in ${material.name}`}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center bg-slate-50 text-slate-400 p-4 text-center">
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

                    {/* Content Area - ProductCard Structure */}
                    <div className="p-5 flex-1 flex flex-col justify-between bg-white">
                      <div>
                        <h3 className="text-sm sm:text-base font-bold text-slate-800 group-hover:text-[#0055A4] transition-colors tracking-tight line-clamp-1">
                          {item.title}
                        </h3>
                        <div className="text-[11px] font-semibold text-[#E3000F] mb-1.5">
                          {seoSuffix}
                        </div>
                        <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed mb-4">
                          {item.shortDescription || item.overview || `Supplying certified ${item.title} conforming to ASME, ASTM & EN standards.`}
                        </p>
                      </div>

                      <div>
                        {/* Specs Line */}
                        <div className="bg-slate-50 border border-slate-100 p-2.5 rounded mb-4 flex items-center gap-1.5">
                          <Box className="w-3.5 h-3.5 text-[#0055A4] shrink-0" />
                          <div className="text-[10px] font-mono text-slate-600 truncate font-semibold" title={primarySpec}>
                            {primarySpec}
                          </div>
                        </div>

                        {/* Full Width View Details Button */}
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
              })}
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 p-8">
              <p className="text-slate-600 text-sm">Products for {material.name} are available upon request.</p>
              <Link to="/contact" className="inline-block mt-4 text-xs font-bold text-[#0055A4]">
                Inquire with our technical desk &rarr;
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
