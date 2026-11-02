import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';
import SEO from '../components/SEO';
import OtherProductsSection from '../components/OtherProductsSection';
import {
  getCategory,
  getProductType,
  getTypeMaterials,
  getSeoSuffix,
  getSeoTitle,
  getSeoDescription,
  getCategoryUrl,
  getProductTypeUrl,
  getTypeMaterialUrl,
  hasSeoSuffix
} from '../data/productNavigationData';
import {
  CheckCircle2, ArrowRight, ShieldCheck, FileText,
  ChevronRight, Box, Compass, Factory, Layers,
  ArrowLeft, Award, HelpCircle
} from 'lucide-react';

export default function ProductCategory() {
  const { categorySlug, category, typeSlug, type } = useParams();
  const cSlug = categorySlug || category;
  const tSlug = typeSlug || type;

  const productCategory = getCategory(cSlug);

  // If category not found, return 404 / redirect
  if (!productCategory) return <Navigate to="/products" replace />;

  const productType = getProductType(cSlug, tSlug);

  // If type not found, redirect to category page
  if (!productType) return <Navigate to={getCategoryUrl(productCategory.id)} replace />;

  // Canonical SEO keyword sync: Ensure type route contains the rotated SEO keyword
  if (!hasSeoSuffix(tSlug)) {
    return <Navigate to={getProductTypeUrl(productCategory.id, productType.id)} replace />;
  }

  // Materials available for this specific product type
  const availableMaterials = getTypeMaterials(productCategory.id, productType.id);

  // Related types from the same category
  const relatedTypes = (productCategory.types || []).filter(t => t.id !== productType.id);

  // Technical specifications map
  const specs = productType.specs || productCategory.specs || {};

  // Applications
  const applications = productType.applications || productCategory.applications || [];

  // Key features
  const features = productType.features || productCategory.features || [];

  const [selectedImg, setSelectedImg] = useState(null);
  const activeImage = selectedImg || productType.image || productCategory.image;

  const breadcrumbItems = [
    { label: 'Products', to: '/products' },
    { label: productCategory.name, to: getCategoryUrl(productCategory.id) },
    { label: productType.name }
  ];

  const primaryStandard = specs.standards?.split(',')[0] || 'ASME / ASTM';
  const seoSuffix = getSeoSuffix(productType.id);
  const seoTitle = getSeoTitle(productType.name, productType.id, productCategory.name);
  const seoDesc = getSeoDescription(productType.name, productType.id, `Conforms to ${primaryStandard}.`);

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-left font-sans">
      <SEO
        title={seoTitle}
        description={seoDesc}
      />

      <Breadcrumb items={breadcrumbItems} />

      {/* Hero Header Section */}
      <section className="bg-white border-b border-slate-200 py-10 lg:py-14 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex flex-wrap items-center gap-2">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0055A4] bg-blue-50 px-3 py-1.5 rounded-full border border-blue-100 shadow-xs">
                  <Factory className="w-3.5 h-3.5 text-[#E3000F]" />
                  <Link to={`/products/${productCategory.id}`} className="hover:underline">
                    {productCategory.name}
                  </Link>
                  <span>/</span>
                  <span>Product Type</span>
                </div>
                <span className="inline-flex items-center text-xs font-semibold tracking-wider text-[#E3000F] bg-red-50 px-3 py-1.5 rounded-full border border-red-100">
                  {seoSuffix}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0055A4] tracking-tight leading-tight">
                {productType.name}
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed border-l-4 border-[#E3000F] pl-4">
                Precision-engineered {productType.name} compliant with {primaryStandard} specifications for critical industrial piping, pressure vessels, and processing facilities.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap gap-4">
                <Link
                  to={`/contact?product=${encodeURIComponent(productCategory.id)}&type=${encodeURIComponent(productType.id)}`}
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-bold text-white bg-[#E3000F] hover:bg-[#C2000D] transition-colors shadow-sm"
                >
                  Request a Quote <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <a
                  href="#specifications"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-bold text-[#0055A4] bg-white border-2 border-[#0055A4] hover:bg-blue-50 transition-colors"
                >
                  View Technical Specs
                </a>
              </div>
            </div>

            {/* Right Image Container - strict object-cover, fixed aspect ratio, overflow-hidden */}
            <div className="lg:col-span-5 flex flex-col items-center lg:items-end">
              <div className="w-full max-w-md aspect-[4/3] rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-lg relative group">
                <img
                  src={activeImage}
                  alt={`${productType.name} ${seoSuffix}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 bg-white"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-[#0055A4] text-white text-[11px] font-bold px-3 py-1 rounded-md shadow-sm">
                  CERTIFIED INDUSTRIAL GRADE
                </div>
              </div>

              {/* Dual Image Gallery: Type Image and Main Category Image */}
              {productType.image && productCategory.image && productType.image !== productCategory.image && (
                <div className="w-full max-w-md flex items-center gap-2.5 mt-3 pt-2">
                  <span className="text-[11px] text-slate-400 font-medium">Views:</span>
                  <button
                    type="button"
                    onClick={() => setSelectedImg(productType.image)}
                    className={`h-11 w-14 rounded-lg overflow-hidden border-2 transition-all shrink-0 ${activeImage === productType.image ? 'border-[#0055A4] shadow-sm ring-2 ring-[#0055A4]/20' : 'border-slate-200 opacity-60 hover:opacity-100'}`}
                    title="Product Type View"
                  >
                    <img src={productType.image} alt={productType.name} className="w-full h-full object-cover bg-white" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedImg(productCategory.image)}
                    className={`h-11 w-14 rounded-lg overflow-hidden border-2 transition-all shrink-0 ${activeImage === productCategory.image ? 'border-[#0055A4] shadow-sm ring-2 ring-[#0055A4]/20' : 'border-slate-200 opacity-60 hover:opacity-100'}`}
                    title="Category View (as shown on main page)"
                  >
                    <img src={productCategory.image} alt={productCategory.name} className="w-full h-full object-cover bg-white" />
                  </button>
                  <span className="text-[10px] text-slate-500 font-sans">
                    {activeImage === productCategory.image ? 'Category Reference' : 'Product Type'}
                  </span>
                </div>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* Available Materials Cards Section (Requirement 4) */}
      <section className="bg-slate-100/70 border-b border-slate-200 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-2">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#E3000F] mb-1">
                <Layers className="w-3.5 h-3.5" />
                Select Material Option
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#0055A4]">
                Available Materials for {productType.name}
              </h2>
            </div>
            <p className="text-xs text-slate-500 max-w-sm">
              Click any material card to view specific alloy grades, chemical tolerances, and technical data.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {availableMaterials.map((mat) => (
              <Link
                key={mat.id}
                to={getTypeMaterialUrl(productCategory.id, productType.id, mat.id)}
                className="group bg-white p-5 rounded-xl border border-slate-200 hover:border-[#0055A4] hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#0055A4] bg-blue-50 px-2.5 py-0.5 rounded border border-blue-100">
                      {mat.category}
                    </span>
                    <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-[#E3000F] group-hover:translate-x-1 transition-all" />
                  </div>
                  <h3 className="text-base font-bold text-slate-800 group-hover:text-[#0055A4] transition-colors mt-1">
                    {mat.name}
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2 mt-1.5 leading-relaxed">
                    {mat.tagline}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#E3000F]">
                  <span>Explore Combination</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Main Details & Sidebar */}
      <section className="py-12 sm:py-16" id="specifications">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

            {/* Left 8 Cols */}
            <div className="lg:col-span-8 space-y-8">
              
              {/* Technical Specifications Table */}
              <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                <div className="bg-[#0055A4] px-6 py-4 flex items-center justify-between">
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <FileText className="w-5 h-5" /> Technical Specifications
                  </h3>
                  <span className="text-xs font-mono text-white/80">
                    {primaryStandard}
                  </span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm text-left">
                    <tbody className="divide-y divide-slate-100">
                      {Object.entries(specs).map(([key, val], idx) => (
                        <tr key={key} className={idx % 2 === 0 ? 'bg-white hover:bg-slate-50' : 'bg-slate-50/50 hover:bg-slate-100'}>
                          <td className="px-6 py-4 font-bold text-slate-700 capitalize w-1/3 border-r border-slate-100">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </td>
                          <td className="px-6 py-4 text-slate-600 font-medium">
                            {val}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Key Features & Applications Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Applications */}
                {applications.length > 0 && (
                  <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
                    <h3 className="text-base font-bold text-[#0055A4] mb-4 flex items-center gap-2">
                      <Compass className="w-5 h-5 text-[#E3000F]" /> Recommended Applications
                    </h3>
                    <ul className="space-y-2.5 text-xs text-slate-700">
                      {applications.map((app, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#E3000F] shrink-0 mt-1.5"></span>
                          <span className="font-medium leading-relaxed">{app}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Features */}
                {features.length > 0 && (
                  <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
                    <h3 className="text-base font-bold text-[#0055A4] mb-4 flex items-center gap-2">
                      <ShieldCheck className="w-5 h-5 text-[#E3000F]" /> Performance Highlights
                    </h3>
                    <ul className="space-y-2.5 text-xs text-slate-700">
                      {features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#0055A4] shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Back to Category Navigation */}
              <div className="pt-2 flex items-center justify-between border-t border-slate-200">
                <Link
                  to={`/products/${productCategory.id}`}
                  className="inline-flex items-center text-sm font-bold text-[#0055A4] hover:text-[#E3000F] transition-colors"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to {productCategory.name} Overview
                </Link>

                <Link
                  to="/products"
                  className="text-xs font-semibold text-slate-500 hover:text-[#0055A4] transition-colors"
                >
                  View All Product Categories &rarr;
                </Link>
              </div>

            </div>

            {/* Right 4 Cols: Sticky Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-24 space-y-6">

                {/* RFQ Box */}
                <div className="bg-white rounded-2xl border border-slate-200 shadow-md overflow-hidden">
                  <div className="bg-[#E3000F] px-5 py-3.5 text-white">
                    <h3 className="font-bold text-sm uppercase tracking-wide flex items-center gap-2">
                      <FileText className="w-4 h-4" /> Request a Quotation
                    </h3>
                  </div>
                  <div className="p-5 space-y-3">
                    <p className="text-sm font-bold text-slate-900 leading-snug">
                      {productType.name}
                    </p>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Category: {productCategory.name}
                      <br />
                      MTC EN 10204 3.1 & 3.2 documentation available with every dispatch.
                    </p>
                    <Link
                      to={`/contact?product=${encodeURIComponent(productCategory.id)}&type=${encodeURIComponent(productType.id)}`}
                      className="mt-3 inline-flex items-center justify-center w-full px-4 py-3 rounded-lg text-sm font-bold text-white bg-[#0055A4] hover:bg-[#003d7a] transition-colors shadow-sm"
                    >
                      Inquire for this Type <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>

                {/* Related Types in this Category */}
                {relatedTypes.length > 0 && (
                  <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
                    <div className="bg-[#0055A4] px-5 py-3.5 shrink-0 text-white">
                      <h3 className="font-bold text-sm uppercase tracking-wide flex items-center gap-2">
                        <Box className="w-4 h-4" /> Other {productCategory.name}
                      </h3>
                    </div>
                    <div className="p-3 space-y-2 max-h-[400px] overflow-y-auto">
                      {relatedTypes.slice(0, 8).map(rt => (
                        <Link
                          key={rt.id}
                          to={getProductTypeUrl(productCategory.id, rt.id)}
                          className="flex items-center gap-3 p-2.5 rounded-lg border border-slate-100 hover:border-[#0055A4] hover:bg-blue-50 transition-colors group"
                        >
                          <div className="w-12 h-12 shrink-0 rounded-md bg-white overflow-hidden">
                            <img
                              src={rt.image || productCategory.image}
                              alt={rt.name}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform bg-white"
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="text-xs font-bold text-slate-800 group-hover:text-[#0055A4] truncate">
                              {rt.name}
                            </p>
                            <p className="text-[10px] text-slate-400 truncate">
                              {rt.specs?.standards || productCategory.tag}
                            </p>
                          </div>
                          <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-[#E3000F] shrink-0" />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Explore Other Product Categories */}
      <OtherProductsSection currentCategoryId={productCategory.id} />
    </div>
  );
}
