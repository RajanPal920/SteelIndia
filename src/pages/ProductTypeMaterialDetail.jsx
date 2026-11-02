import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';
import SEO from '../components/SEO';
import OtherProductsSection from '../components/OtherProductsSection';
import {
  getTypeMaterialCombination,
  getCategory,
  getProductType,
  getCanonicalMaterial,
  getSeoSuffix,
  getSeoTitle,
  getSeoDescription,
  getCategoryUrl,
  getProductTypeUrl,
  getMaterialUrl,
  getTypeMaterialUrl,
  hasSeoSuffix
} from '../data/productNavigationData';
import { getGradeUrl } from '../data/gradesData';
import {
  CheckCircle2, ArrowRight, ShieldCheck, FileText,
  ChevronRight, Box, Compass, Factory, Layers,
  ArrowLeft, Award, HelpCircle, AlertCircle
} from 'lucide-react';

export default function ProductTypeMaterialDetail() {
  const { categorySlug, category, typeSlug, type, materialSlug, material } = useParams();
  const cSlug = categorySlug || category;
  const tSlug = typeSlug || type;
  const mSlug = materialSlug || material;

  const data = getTypeMaterialCombination(cSlug, tSlug, mSlug);

  if (!data || !data.category || !data.type || !data.material) {
    const validCat = getCategory(cSlug);
    if (validCat) {
      return <Navigate to={getCategoryUrl(validCat.id)} replace />;
    }
    return <Navigate to="/products" replace />;
  }

  const {
    category: productCategory,
    type: productType,
    material: selectedMaterial,
    availableMaterials,
    grades,
    specs,
    standardsCompliance,
    image,
    applications,
    features,
    overview
  } = data;

  // Canonical SEO keyword sync: Ensure both type and material contain rotated SEO keywords in route
  if (!hasSeoSuffix(tSlug) || !hasSeoSuffix(mSlug)) {
    return (
      <Navigate
        to={getTypeMaterialUrl(productCategory.id, productType.id, selectedMaterial.id)}
        replace
      />
    );
  }

  const [selectedImg, setSelectedImg] = useState(null);
  const activeImage = selectedImg || image || productType.image || productCategory.image;

  const breadcrumbItems = [
    { label: 'Products', to: '/products' },
    { label: productCategory.name, to: getCategoryUrl(productCategory.id) },
    { label: productType.name, to: getProductTypeUrl(productCategory.id, productType.id) },
    { label: selectedMaterial.name }
  ];

  const combinationId = `${productType.id}-${selectedMaterial.id}`;
  const seoSuffix = getSeoSuffix(combinationId);
  const pageTitle = `${selectedMaterial.name} ${productType.name}`;
  const primaryStandard = specs.standards || standardsCompliance[0] || 'ASME / ASTM Standards';
  const seoTitle = getSeoTitle(pageTitle, combinationId, productCategory.name);
  const seoDesc = getSeoDescription(pageTitle, combinationId, `Verified grades: ${grades.slice(0, 4).join(', ')}. Conforms to ${primaryStandard}.`);

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-left font-sans">
      <SEO
        title={seoTitle}
        description={seoDesc}
      />

      <Breadcrumb items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="bg-white border-b border-slate-200 py-10 lg:py-14 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-wider">
                <span className="bg-blue-50 text-[#0055A4] px-3 py-1.5 rounded-full border border-blue-100 flex items-center gap-1.5">
                  <Factory className="w-3.5 h-3.5 text-[#E3000F]" />
                  {productCategory.name}
                </span>
                <span>/</span>
                <span className="bg-red-50 text-[#E3000F] px-3 py-1.5 rounded-full border border-red-100 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5" />
                  {selectedMaterial.name}
                </span>
                <span className="bg-slate-100 text-slate-700 px-3 py-1.5 rounded-full border border-slate-200 font-semibold normal-case">
                  {seoSuffix}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0055A4] tracking-tight leading-tight">
                {productType.name} <br />
                <span className="text-[#E3000F]">({selectedMaterial.name})</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed border-l-4 border-[#E3000F] pl-4">
                {selectedMaterial.tagline || `Certified ${selectedMaterial.name} ${productType.name} engineered for superior performance in critical piping and mechanical assemblies.`}
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap gap-4">
                <Link
                  to={`/contact?product=${encodeURIComponent(productCategory.id)}&type=${encodeURIComponent(productType.id)}&material=${encodeURIComponent(selectedMaterial.id)}`}
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-bold text-white bg-[#E3000F] hover:bg-[#C2000D] transition-colors shadow-sm"
                >
                  Request a Quote <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <Link
                  to={getMaterialUrl(selectedMaterial.id)}
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-bold text-[#0055A4] bg-white border-2 border-[#0055A4] hover:bg-blue-50 transition-colors"
                >
                  View Material Family Details
                </Link>
              </div>
            </div>

            {/* Right Image Container - strict object-cover, fixed aspect ratio, overflow-hidden */}
            <div className="lg:col-span-5 flex flex-col items-center lg:items-end">
              <div className="w-full max-w-md aspect-[4/3] rounded-2xl bg-slate-100 border border-slate-200 overflow-hidden shadow-lg relative group">
                <img
                  src={activeImage}
                  alt={`${pageTitle} ${seoSuffix}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-[#0055A4] text-white text-[11px] font-bold px-3 py-1 rounded-md shadow-sm">
                  {selectedMaterial.name.toUpperCase()}
                </div>
              </div>

              {/* Thumbnails to Switch Between Type Image and Main Category / Material Image */}
              <div className="w-full max-w-md flex items-center gap-2 mt-3 pt-2">
                <span className="text-[11px] text-slate-400 font-medium">Views:</span>
                {image && (
                  <button
                    type="button"
                    onClick={() => setSelectedImg(image)}
                    className={`h-11 w-14 rounded-lg overflow-hidden border-2 transition-all shrink-0 ${activeImage === image ? 'border-[#0055A4] ring-2 ring-[#0055A4]/20' : 'border-slate-200 opacity-60 hover:opacity-100'}`}
                    title="Specific Combination View"
                  >
                    <img src={image} alt="Combination" className="w-full h-full object-cover" />
                  </button>
                )}
                {productCategory.image && (
                  <button
                    type="button"
                    onClick={() => setSelectedImg(productCategory.image)}
                    className={`h-11 w-14 rounded-lg overflow-hidden border-2 transition-all shrink-0 ${activeImage === productCategory.image ? 'border-[#0055A4] ring-2 ring-[#0055A4]/20' : 'border-slate-200 opacity-60 hover:opacity-100'}`}
                    title="Main Category View (from main page)"
                  >
                    <img src={productCategory.image} alt={productCategory.name} className="w-full h-full object-cover" />
                  </button>
                )}
                {selectedMaterial.image && (
                  <button
                    type="button"
                    onClick={() => setSelectedImg(selectedMaterial.image)}
                    className={`h-11 w-14 rounded-lg overflow-hidden border-2 transition-all shrink-0 ${activeImage === selectedMaterial.image ? 'border-[#0055A4] ring-2 ring-[#0055A4]/20' : 'border-slate-200 opacity-60 hover:opacity-100'}`}
                    title="Material Family View (from main page)"
                  >
                    <img src={selectedMaterial.image} alt={selectedMaterial.name} className="w-full h-full object-cover" />
                  </button>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Material Switcher Strip */}
      <section className="bg-slate-100/70 border-b border-slate-200 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mr-2 flex items-center gap-1">
            <Layers className="w-3.5 h-3.5 text-[#E3000F]" />
            Switch Material for {productType.name}:
          </span>
          {availableMaterials.map(mat => {
            const isCurrent = mat.id === selectedMaterial.id;
            return (
              <Link
                key={mat.id}
                to={getTypeMaterialUrl(productCategory.id, productType.id, mat.id)}
                className={`inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  isCurrent
                    ? 'bg-[#0055A4] text-white shadow-xs'
                    : 'bg-white text-slate-700 hover:text-[#0055A4] hover:border-[#0055A4] border border-slate-200'
                }`}
              >
                <span>{mat.name}</span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Main Details & Technical Data */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

            {/* Left 8 Cols */}
            <div className="lg:col-span-8 space-y-8">
              
              {/* Available Grades Box */}
              {grades.length > 0 && (
                <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
                  <h2 className="text-lg font-bold text-[#0055A4] mb-3 flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-[#E3000F]" />
                    Available Grades in {selectedMaterial.name}
                  </h2>
                  <p className="text-xs text-slate-500 mb-4 leading-relaxed">
                    The following verified alloy grades are commonly supplied for {productType.name} with complete EN 10204 3.1 Mill Test Certificates.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {grades.map((grade, idx) => (
                      <Link
                        key={idx}
                        to={getGradeUrl(grade, selectedMaterial.id)}
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-mono font-bold bg-slate-50 hover:bg-[#0055A4] text-slate-800 hover:text-white border border-slate-200 hover:border-[#0055A4] transition-all shadow-2xs group"
                        title={`View technical specifications for ${grade}`}
                      >
                        <span>{grade}</span>
                        <ArrowRight className="w-3 h-3 text-slate-400 group-hover:text-white group-hover:translate-x-0.5 transition-transform" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}

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

              {/* Standards Compliance List */}
              {standardsCompliance.length > 0 && (
                <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
                  <h3 className="text-base font-bold text-[#0055A4] mb-3 flex items-center gap-2">
                    <Award className="w-5 h-5 text-[#E3000F]" />
                    Standards & Manufacturing Compliance
                  </h3>
                  <ul className="space-y-2 text-xs text-slate-700">
                    {standardsCompliance.map((std, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#0055A4] shrink-0 mt-0.5" />
                        <span className="leading-relaxed font-mono">{std}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Metallurgical Characteristics */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
                <h3 className="text-base font-bold text-[#0055A4] mb-3 flex items-center gap-2">
                  <Compass className="w-5 h-5 text-[#E3000F]" />
                  Metallurgical Characteristics of {selectedMaterial.name}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {selectedMaterial.characteristics}
                </p>
              </div>

              {/* Back Links */}
              <div className="pt-2 flex flex-wrap items-center justify-between gap-4 border-t border-slate-200">
                <Link
                  to={getProductTypeUrl(productCategory.id, productType.id)}
                  className="inline-flex items-center text-sm font-bold text-[#0055A4] hover:text-[#E3000F] transition-colors"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to {productType.name}
                </Link>

                <Link
                  to={getMaterialUrl(selectedMaterial.id)}
                  className="text-xs font-semibold text-slate-600 hover:text-[#0055A4] transition-colors"
                >
                  View All Products in {selectedMaterial.name} &rarr;
                </Link>
              </div>

            </div>

            {/* Right 4 Cols: Sticky Inquiry Box */}
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
                    <div className="p-3 bg-slate-50 rounded-lg border border-slate-100 text-xs space-y-1">
                      <div className="font-bold text-slate-900">{productType.name}</div>
                      <div className="text-slate-600">Category: {productCategory.name}</div>
                      <div className="font-semibold text-[#0055A4]">Material: {selectedMaterial.name}</div>
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Share your required sizes, wall thickness, quantities, and inspection criteria for prompt dispatch from Chennai.
                    </p>
                    <Link
                      to={`/contact?product=${encodeURIComponent(productCategory.id)}&type=${encodeURIComponent(productType.id)}&material=${encodeURIComponent(selectedMaterial.id)}`}
                      className="inline-flex items-center justify-center w-full px-4 py-3 rounded-lg text-sm font-bold text-white bg-[#0055A4] hover:bg-[#003d7a] transition-colors shadow-sm"
                    >
                      Inquire for this Combination <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>

                {/* Material Details Quick Card */}
                <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm space-y-3">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500 pb-2 border-b border-slate-100">
                    Material Family Details
                  </div>
                  <div className="text-xs text-slate-700 space-y-2">
                    <div>
                      <span className="font-bold text-slate-900">Family: </span>
                      {selectedMaterial.name}
                    </div>
                    <div>
                      <span className="font-bold text-slate-900">Category: </span>
                      {selectedMaterial.category}
                    </div>
                    <div>
                      <span className="font-bold text-slate-900">Primary Standard: </span>
                      <span className="font-mono">{selectedMaterial.standards?.[0] || 'ASTM'}</span>
                    </div>
                  </div>
                  <Link
                    to={getMaterialUrl(selectedMaterial.id)}
                    className="inline-block pt-1 text-xs font-bold text-[#0055A4] hover:text-[#E3000F] transition-colors"
                  >
                    View All {selectedMaterial.name} Products &rarr;
                  </Link>
                </div>

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

