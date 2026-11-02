import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';
import SEO from '../components/SEO';
import OtherProductsSection from '../components/OtherProductsSection';
import {
  getCategory,
  getTypeMaterials,
  getSeoSuffix,
  getSeoTitle,
  getSeoDescription,
  getCategoryUrl,
  getProductTypeUrl,
  getMaterialUrl,
  hasSeoSuffix
} from '../data/productNavigationData';
import { ArrowRight, Factory, Box, Layers, ShieldCheck, ChevronRight } from 'lucide-react';

export default function ProductTypes() {
  const { categorySlug, category } = useParams();
  const slug = categorySlug || category;
  const product = getCategory(slug);

  if (!product) return <Navigate to="/products" replace />;

  // Canonical SEO URL sync: Ensure URL in browser contains rotated SEO keyword
  if (!hasSeoSuffix(slug)) {
    return <Navigate to={getCategoryUrl(product.id)} replace />;
  }

  const types = product.types || [];

  // Get all canonical materials associated with this category
  const categoryMaterials = getTypeMaterials(product.id, null);

  const seoSuffix = getSeoSuffix(product.id);
  const seoTitle = getSeoTitle(product.name, product.id);
  const seoDesc = getSeoDescription(product.name, product.id, product.shortDesc);

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-left font-sans">
      <SEO
        title={seoTitle}
        description={seoDesc}
      />

      <Breadcrumb
        items={[
          { label: 'Products', to: '/products' },
          { label: product.name }
        ]}
      />

      {/* Hero Section with Same Product Image from Main Page */}
      <section className="bg-[#E3000F] text-white py-12 sm:py-16 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-[#0055A4]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#E3000F] bg-white px-3.5 py-1.5 rounded-full shadow-sm">
                  <Factory className="w-3.5 h-3.5" />
                  {product.tag}
                </span>
                <span className="inline-flex items-center text-xs font-bold tracking-wider text-white bg-white/20 backdrop-blur-xs px-3 py-1.5 rounded-full border border-white/30">
                  {seoSuffix}
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white drop-shadow-md">
                {product.name}
              </h1>

              <p className="text-base sm:text-lg text-white/95 leading-relaxed max-w-2xl border-l-4 border-white/40 pl-4">
                {product.shortDesc || `Comprehensive range of industrial ${product.name} engineered for high pressure, temperature, and corrosive services.`}
              </p>

              <div className="pt-2 flex flex-wrap gap-3">
                <Link
                  to={`/contact?product=${encodeURIComponent(product.id)}`}
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-bold text-[#E3000F] bg-white hover:bg-slate-100 transition-colors shadow-md"
                >
                  Request a Quote <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <a
                  href="#types-grid"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-bold text-white border-2 border-white/50 hover:bg-white/10 transition-colors"
                >
                  Browse {types.length} Types
                </a>
              </div>
            </div>

            {/* Right: Same Image as Shown on Main Page */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="w-full max-w-md aspect-[4/3] rounded-2xl bg-white/10 backdrop-blur-xs border-2 border-white/20 overflow-hidden shadow-2xl relative group">
                <img
                  src={product.image}
                  alt={`${product.name} ${seoSuffix}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-white/95 text-[#0055A4] text-[11px] font-bold px-3 py-1 rounded shadow-sm">
                  OFFICIAL CATALOGUE SPECIFICATION
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Overview & Available Materials Strip */}
      <section className="bg-white border-b border-slate-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <h2 className="text-lg font-bold text-[#0055A4] flex items-center gap-2">
                <Box className="w-5 h-5 text-[#E3000F]" />
                Engineering Overview
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                {product.longDesc}
              </p>
            </div>
            <div className="lg:col-span-4 bg-slate-50 p-5 rounded-xl border border-slate-200 space-y-2">
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#0055A4]" />
                Primary Specifications
              </div>
              <div className="text-xs text-slate-800 font-mono font-semibold">
                {product.specs?.standards || 'ASME / ASTM Standard Specifications'}
              </div>
              <div className="text-[11px] text-slate-500">
                Sizes: {product.specs?.sizes || 'Custom & Standard Dimensions'}
              </div>
            </div>
          </div>

          {/* Available Materials Chips */}
          {categoryMaterials.length > 0 && (
            <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mr-2 flex items-center gap-1">
                <Layers className="w-3.5 h-3.5 text-[#E3000F]" />
                Available Materials:
              </span>
              {categoryMaterials.map(mat => (
                <Link
                  key={mat.id}
                  to={getMaterialUrl(mat.id)}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-[#0055A4] hover:bg-[#0055A4] hover:text-white transition-colors border border-blue-100"
                >
                  <span>{mat.name}</span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Product Types Grid */}
      <section className="py-12 sm:py-16" id="types-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-200">
            <div className="text-sm text-slate-600 font-medium bg-blue-50 px-3.5 py-1.5 rounded-lg border border-blue-100">
              Showing <span className="font-bold text-[#0055A4]">{types.length}</span> types in {product.name}
            </div>
            <Link
              to="/products"
              className="text-xs font-bold text-[#0055A4] hover:text-[#E3000F] flex items-center gap-1 transition-colors"
            >
              All Categories <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {types.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {types.map((type) => {
                const typeMats = getTypeMaterials(product.id, type.id);
                return (
                  <Link
                    key={type.id}
                    to={getProductTypeUrl(product.id, type.id)}
                    className="group relative bg-white rounded-2xl border border-slate-200 hover:border-[#0055A4] hover:shadow-lg transition-all duration-300 flex flex-col overflow-hidden min-h-[350px]"
                  >
                    {/* Top Red Accent */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-[#E3000F] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left z-10" />

                    {/* Image Area with strict object-cover and fixed container */}
                    <div className="relative h-48 bg-slate-100 overflow-hidden shrink-0">
                      <img
                        src={type.image || product.image}
                        alt={type.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs text-[#0055A4] p-1.5 rounded-lg shadow-sm">
                        <Box className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Content Area */}
                    <div className="p-5 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="text-base font-bold text-slate-900 group-hover:text-[#0055A4] transition-colors line-clamp-1 mb-1.5">
                          {type.name}
                        </h3>
                        <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed mb-3">
                          {type.specs?.standards || `Engineered to international industrial standards with mill test certification.`}
                        </p>

                        {/* Supported Materials Tags */}
                        {typeMats.length > 0 && (
                          <div className="flex flex-wrap gap-1 mt-2">
                            {typeMats.slice(0, 3).map(m => (
                              <span key={m.id} className="text-[10px] font-medium bg-slate-100 text-slate-700 px-2 py-0.5 rounded">
                                {m.name}
                              </span>
                            ))}
                            {typeMats.length > 3 && (
                              <span className="text-[10px] font-medium text-slate-400 px-1 py-0.5">
                                +{typeMats.length - 3} more
                              </span>
                            )}
                          </div>
                        )}
                      </div>

                      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                        <span className="text-xs font-bold text-[#0055A4] group-hover:text-[#E3000F] flex items-center gap-1 transition-colors">
                          View Specifications
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 p-8">
              <p className="text-slate-600 text-sm">Product types are currently being updated.</p>
              <Link to="/products" className="inline-block mt-4 text-xs font-bold text-[#0055A4]">
                Back to All Products &rarr;
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Explore Other Product Categories */}
      <OtherProductsSection currentCategoryId={product.id} />
    </div>
  );
}
