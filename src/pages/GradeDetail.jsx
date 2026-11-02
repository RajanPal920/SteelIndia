import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';
import SEO from '../components/SEO';
import { getGradeBySlug, getGradeUrl, getProductsForGrade, getGradesForMaterial } from '../data/gradesData';
import { materials } from '../data/materials';
import { getProductMaterialUrl } from '../data/productMaterialRegistry';
import {
  getSeoSuffix,
  getSeoTitle,
  getSeoDescription,
  getMaterialUrl,
  getCategoryUrl,
  getTypeMaterialUrl
} from '../data/productNavigationData';
import {
  Layers, ArrowRight, ShieldCheck, Box, Factory,
  FileCheck2, Compass, ChevronRight, FlaskConical, Award,
  CheckCircle2, ArrowLeft, Mail, Phone
} from 'lucide-react';

export default function GradeDetail() {
  const { materialSlug, material: altMaterial, gradeSlug: paramGradeSlug, grade: altGradeParam, slug: routeSlug } = useParams();
  const mSlug = materialSlug || altMaterial;
  const slug = paramGradeSlug || altGradeParam || routeSlug;

  const grade = getGradeBySlug(slug, mSlug);

  // If grade not found, show proper Not Found page
  if (!grade) {
    const parentMat = materials.find(m => m.id === mSlug);
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-8 text-center bg-slate-50 font-sans">
        <div className="w-16 h-16 rounded-full bg-red-50 text-[#E3000F] flex items-center justify-center mb-4">
          <FlaskConical className="w-8 h-8" />
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-800 mb-2">Grade Specifications Not Found</h1>
        <p className="text-slate-600 mb-6 text-sm max-w-md">
          The material grade specification "{slug}" could not be located in our metallurgical registry.
        </p>
        <Link
          to={parentMat ? getMaterialUrl(parentMat.id) : '/materials'}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#0055A4] text-white font-bold text-sm hover:bg-[#003d7a] transition-colors shadow-sm"
        >
          <ArrowLeft className="w-4 h-4" /> Back to {parentMat?.name || 'Materials'}
        </Link>
      </div>
    );
  }

  // Find parent material
  const parentMaterial = materials.find(m => m.id === grade.materialId) || grade.parentMaterial || materials[0];

  // Sibling grades in same material family
  const siblingGrades = getGradesForMaterial(parentMaterial.id).filter(g => g.slug !== grade.slug);

  // Products available in this grade (matched from productMaterials and products.js)
  const { productMaterials: gradeProducts, productCategories: gradeCategories } = getProductsForGrade(grade.slug, parentMaterial.id);

  // Dynamic SEO Suffix & Titles
  const seoTitle = `${grade.grade} ${parentMaterial.name} Grade Specifications | SteelIndia`;
  const seoDesc = `${grade.grade} (${grade.uns || parentMaterial.name}) chemical composition, mechanical properties, ASTM/ASME standards, and available product forms at Steel India Co.`;

  // Breadcrumb items: Home > Materials > Material Name > Grade Name
  const breadcrumbItems = [
    { label: 'Materials', to: '/materials' },
    { label: parentMaterial.name, to: getMaterialUrl(parentMaterial.id) },
    { label: grade.grade }
  ];

  // Pick first available product image or parent material image
  const featuredImage = (gradeProducts.length > 0 && gradeProducts[0].image)
    ? gradeProducts[0].image
    : (parentMaterial.image || '/images/stock/stainless-steel.jpg');

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
            <div className="lg:col-span-7 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <Link
                  to={getMaterialUrl(parentMaterial.id)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0055A4] bg-blue-50 px-3 py-1.5 rounded-full border border-blue-100 hover:bg-blue-100 transition-colors shadow-2xs"
                >
                  <Layers className="w-3.5 h-3.5 text-[#E3000F]" />
                  {parentMaterial.name}
                </Link>
                {grade.uns && (
                  <span className="inline-flex items-center text-xs font-mono font-bold text-slate-700 bg-slate-100 px-3 py-1.5 rounded-full border border-slate-200">
                    {grade.uns}
                  </span>
                )}
                {grade.din && (
                  <span className="inline-flex items-center text-xs font-mono font-medium text-slate-500 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-200">
                    {grade.din}
                  </span>
                )}
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0055A4] tracking-tight leading-tight">
                {grade.name}
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed border-l-4 border-[#E3000F] pl-4">
                {grade.tagline || grade.overview}
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap gap-4">
                <Link
                  to={`/contact?material=${encodeURIComponent(parentMaterial.name)}&grade=${encodeURIComponent(grade.grade)}`}
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-bold text-white bg-[#E3000F] hover:bg-[#C2000D] transition-colors shadow-sm"
                >
                  Request a Quote for {grade.grade} <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <a
                  href="#chemical-composition"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-bold text-[#0055A4] bg-white border-2 border-[#0055A4] hover:bg-blue-50 transition-colors"
                >
                  Chemical & Mechanical Specs
                </a>
                <a
                  href="#available-products"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
                >
                  Available Products ({gradeProducts.length})
                </a>
              </div>
            </div>

            {/* Right Image Container - Strict object-cover, fixed aspect ratio */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="w-full max-w-md aspect-[4/3] rounded-2xl bg-slate-100 border border-slate-200 overflow-hidden shadow-xl relative group">
                <img
                  src={featuredImage}
                  alt={`${grade.name} - Steel India Co.`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-[#0055A4] text-white text-[11px] font-bold px-3 py-1 rounded-md shadow-sm">
                  {grade.grade.toUpperCase()}
                </div>
                <div className="absolute bottom-3 right-3 bg-white/95 text-slate-800 text-[10px] font-bold px-2.5 py-1 rounded shadow-xs border border-slate-200">
                  MILL TEST CERTIFIED
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Sibling Grades Switcher Strip (Quick Navigation to Other Grades in Same Material) */}
      {siblingGrades.length > 0 && (
        <section className="bg-slate-100/90 border-b border-slate-200 py-3.5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mr-2 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-[#E3000F]" />
              Other {parentMaterial.name} Grades:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {siblingGrades.map((g) => (
                <Link
                  key={g.slug}
                  to={getGradeUrl(g.grade, parentMaterial.id)}
                  className="px-3 py-1 rounded-lg text-xs font-mono font-bold bg-white text-slate-700 hover:bg-[#0055A4] hover:text-white border border-slate-200 hover:border-[#0055A4] transition-colors shadow-2xs"
                  title={`View specifications for ${g.grade}`}
                >
                  {g.grade}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Technical Overview Section */}
      <section className="bg-white border-b border-slate-200 py-10" id="chemical-composition">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8 space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-[#0055A4] flex items-center gap-2">
                <FlaskConical className="w-5 h-5 text-[#E3000F]" />
                Metallurgical Overview & Engineering Properties
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {grade.overview}
              </p>
              
              {/* International Standards */}
              {grade.standards && grade.standards.length > 0 && (
                <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 space-y-2 mt-4">
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-[#0055A4]" />
                    Applicable Manufacturing Specifications & Standards
                  </div>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {grade.standards.map((std, idx) => (
                      <span key={idx} className="text-xs font-mono font-semibold bg-white px-3 py-1 rounded-md border border-slate-200 text-[#0055A4]">
                        {std}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Quality & Inspection Card */}
            <div className="lg:col-span-4 bg-blue-50/50 p-6 rounded-2xl border border-blue-100 space-y-4">
              <div className="text-xs font-bold text-[#0055A4] uppercase tracking-wider flex items-center gap-1.5">
                <Award className="w-4 h-4 text-[#E3000F]" />
                Quality & Verification
              </div>
              <ul className="text-xs text-slate-600 space-y-2.5">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>100% Positive Material Identification (PMI) Spectro Testing</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>EN 10204 Type 3.1 & 3.2 Mill Test Certificates provided</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Third-Party Inspection (TPI) approved (Lloyds, DNV, TUV, BV)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Hydrostatic, ultrasonic, and radiographic testing per ASME</span>
                </li>
              </ul>
              <div className="pt-2">
                <Link
                  to={`/contact?material=${encodeURIComponent(parentMaterial.name)}&grade=${encodeURIComponent(grade.grade)}`}
                  className="w-full inline-flex items-center justify-center px-4 py-2 bg-[#0055A4] text-white text-xs font-bold rounded-lg hover:bg-[#E3000F] transition-colors"
                >
                  Request MTC & Inspection Report
                </Link>
              </div>
            </div>
          </div>

          {/* Chemical Composition Table */}
          {grade.chemicalComposition && grade.chemicalComposition.length > 0 ? (
            <div className="pt-6 border-t border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <FlaskConical className="w-4 h-4 text-[#0055A4]" />
                Chemical Composition of {grade.name}
              </h3>
              <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-2xs">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-slate-100 text-slate-700 font-bold uppercase text-[11px] tracking-wider border-b border-slate-200">
                    <tr>
                      <th className="py-3 px-4">Chemical Element</th>
                      <th className="py-3 px-4">Specified Percentage (%) / Limit</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 bg-white">
                    {grade.chemicalComposition.map((row, idx) => (
                      <tr key={idx} className="hover:bg-blue-50/30 transition-colors">
                        <td className="py-3 px-4 font-semibold text-slate-800">{row.element}</td>
                        <td className="py-3 px-4 font-mono font-medium text-[#0055A4]">{row.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            <div className="pt-4 border-t border-slate-200 text-xs text-slate-500 italic">
              Detailed chemical composition for {grade.grade} is available on request in accordance with relevant mill specifications.
            </div>
          )}

          {/* Mechanical Properties Table */}
          {grade.mechanicalProperties && grade.mechanicalProperties.length > 0 ? (
            <div className="pt-6 border-t border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#E3000F]" />
                Mechanical & Physical Properties
              </h3>
              <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-2xs">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-slate-100 text-slate-700 font-bold uppercase text-[11px] tracking-wider border-b border-slate-200">
                    <tr>
                      <th className="py-3 px-4">Mechanical Property</th>
                      <th className="py-3 px-4">Guaranteed Minimum / Certified Value</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 bg-white">
                    {grade.mechanicalProperties.map((row, idx) => (
                      <tr key={idx} className="hover:bg-red-50/20 transition-colors">
                        <td className="py-3 px-4 font-semibold text-slate-800">{row.property}</td>
                        <td className="py-3 px-4 font-mono font-medium text-slate-700">{row.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            <div className="pt-4 border-t border-slate-200 text-xs text-slate-500 italic">
              Mechanical property guarantees for {grade.grade} are provided with EN 10204 3.1 inspection certification.
            </div>
          )}

        </div>
      </section>

      {/* GRADE-WISE ASSOCIATED PRODUCTS (Cards from productMaterials with Real Images & object-cover) */}
      <section className="py-12 sm:py-16 bg-slate-50 border-b border-slate-200" id="available-products">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 border-b border-slate-200">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#E3000F] mb-1">
                <Box className="w-3.5 h-3.5" />
                Products Available in {grade.grade}
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0055A4]">
                Steel Products Supplied in {grade.grade}
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
                Displaying products available in {grade.name} with complete dimensional availability.
              </p>
            </div>
            <Link
              to={`/contact?material=${encodeURIComponent(parentMaterial.name)}&grade=${encodeURIComponent(grade.grade)}`}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold text-white bg-[#0055A4] hover:bg-[#003d7a] transition-colors shadow-2xs"
            >
              Request Custom Dimensions <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* 1. Real Product Materials Cards with object-cover */}
          {gradeProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {gradeProducts.map((pItem, idx) => {
                const detailUrl = getProductMaterialUrl(parentMaterial.id, pItem);
                const primarySpec = pItem.standards?.split(',')[0] || pItem.forms || 'ASTM Standard';

                return (
                  <Link
                    key={pItem.id || pItem.pureSlug || idx}
                    to={detailUrl}
                    className="group relative bg-white rounded-xl border border-slate-200 hover:border-[#0055A4] overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full text-left min-h-[360px]"
                  >
                    <div className="absolute top-0 left-0 right-0 h-1 bg-[#E3000F] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left z-10" />

                    {/* Image Area with strict object-cover */}
                    <div className="relative h-48 bg-slate-100 overflow-hidden">
                      {pItem.image ? (
                        <img
                          src={pItem.image}
                          alt={`${pItem.title} - ${grade.grade}`}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center bg-slate-50 text-slate-400 p-4 text-center">
                          <Box className="w-8 h-8 text-slate-300 mb-1" />
                          <span className="text-[11px] font-bold text-slate-500 line-clamp-1">{pItem.title}</span>
                        </div>
                      )}

                      <div className="absolute top-2 left-2 bg-white/95 border border-slate-200 text-[#0055A4] font-mono text-[10px] font-bold px-2 py-0.5 rounded shadow-sm z-10">
                        {grade.grade}
                      </div>

                      <div className="absolute top-2 right-2 bg-white/95 text-slate-800 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded shadow-xs z-10">
                        {parentMaterial.name}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                      <div>
                        <h3 className="font-bold text-slate-900 group-hover:text-[#0055A4] transition-colors text-sm leading-snug line-clamp-2">
                          {pItem.title}
                        </h3>
                        <p className="text-xs text-slate-500 line-clamp-2 mt-1.5 leading-relaxed">
                          {pItem.description}
                        </p>
                      </div>

                      <div className="space-y-2.5 pt-2 border-t border-slate-100">
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-50 border border-slate-200/80 text-[11px] font-mono text-slate-700">
                          <Box className="w-3 h-3 text-[#0055A4] shrink-0" />
                          <span className="line-clamp-1">{primarySpec}</span>
                        </div>

                        <div className="w-full inline-flex items-center justify-center px-4 py-2 rounded-lg text-xs font-bold text-white bg-[#0055A4] group-hover:bg-[#E3000F] shadow-sm transition-colors duration-200">
                          <span>View Product Details</span>
                          <ArrowRight className="w-3 h-3 ml-1.5 transition-transform group-hover:translate-x-1" />
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-xl border border-slate-200 p-8">
              <Box className="w-10 h-10 text-slate-300 mx-auto mb-2" />
              <p className="text-slate-700 text-sm font-bold">Standard products in {grade.name} supplied to custom requisition.</p>
              <p className="text-slate-500 text-xs mt-1">Contact our Chennai technical desk for custom fabrication dimensions.</p>
              <Link to="/contact" className="inline-block mt-3 text-xs font-bold text-[#0055A4] hover:underline">
                Contact Sales Desk &rarr;
              </Link>
            </div>
          )}

          {/* 2. Product Categories from products.js */}
          {gradeCategories.length > 0 && (
            <div className="pt-8 mt-8 border-t border-slate-200 space-y-6">
              <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                <Factory className="w-4 h-4 text-[#0055A4]" />
                Standard Manufacturing Categories Supplying {grade.grade}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {gradeCategories.slice(0, 6).map(({ category, types }) => (
                  <div key={category.id} className="bg-white rounded-xl border border-slate-200 p-5 shadow-2xs space-y-3">
                    <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                      <span className="text-xs font-bold text-slate-900 line-clamp-1">{category.name}</span>
                      <Link
                        to={getCategoryUrl(category.id)}
                        className="text-[11px] font-bold text-[#0055A4] hover:text-[#E3000F] flex items-center gap-0.5"
                      >
                        All Types &rarr;
                      </Link>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {types.slice(0, 6).map(t => (
                        <span key={t.id} className="text-[11px] font-medium bg-slate-50 px-2 py-0.5 rounded border border-slate-200 text-slate-700">
                          {t.name}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </section>

      {/* Industrial Applications Section */}
      {grade.applications && grade.applications.length > 0 && (
        <section className="bg-white py-12 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
              <Compass className="w-5 h-5 text-[#E3000F]" />
              Industrial Applications for {grade.name}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {grade.applications.map((app, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-left space-y-1 hover:border-[#0055A4] transition-colors">
                  <div className="w-2 h-2 rounded-full bg-[#0055A4]"></div>
                  <div className="text-xs font-bold text-slate-800">{app}</div>
                  <div className="text-[10px] text-slate-500">Certified for critical process service</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Bottom Inquiry CTA */}
      <section className="bg-[#0055A4] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold">
            Ready to Order {grade.grade} Materials?
          </h2>
          <p className="text-white/80 text-sm max-w-xl mx-auto">
            Submit your Bill of Materials or required dimensions. We stock and manufacture {grade.grade} with complete mill test certification.
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <Link
              to={`/contact?material=${encodeURIComponent(parentMaterial.name)}&grade=${encodeURIComponent(grade.grade)}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-xs font-bold text-[#0055A4] bg-white hover:bg-slate-100 shadow transition-colors"
            >
              <Mail className="w-4 h-4 text-[#E3000F]" />
              Inquire for {grade.grade}
            </Link>
            <a
              href="tel:+914425228058"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-xs font-bold text-white border border-white/40 hover:bg-white/10 transition-colors"
            >
              <Phone className="w-4 h-4" />
              Call Chennai Sales Desk
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
