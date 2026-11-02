import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';
import SEO from '../components/SEO';
import { getGradeBySlug, getGradeUrl, getProductsForGrade } from '../data/gradesData';
import { materials } from '../data/materials';
import {
  getSeoSuffix,
  getSeoTitle,
  getSeoDescription,
  getMaterialUrl,
  getCategoryUrl,
  getTypeMaterialUrl,
  hasSeoSuffix
} from '../data/productNavigationData';
import {
  Layers, ArrowRight, ShieldCheck, Box, Factory,
  FileCheck2, Compass, ChevronRight, FlaskConical, Award,
  CheckCircle2, ArrowLeft
} from 'lucide-react';

export default function GradeDetail() {
  const { materialSlug, gradeSlug: paramGradeSlug, grade: altGradeParam } = useParams();
  const slug = paramGradeSlug || altGradeParam;

  const grade = getGradeBySlug(slug, materialSlug);

  // If grade not found, redirect to materials
  if (!grade) {
    if (materialSlug) {
      return <Navigate to={`/materials/${materialSlug}`} replace />;
    }
    return <Navigate to="/materials" replace />;
  }

  // Find parent material
  const parentMaterial = materials.find(m => m.id === grade.materialId) || grade.parentMaterial || materials[0];

  // Canonical SEO keyword sync: Ensure grade route contains the rotated SEO keyword
  if (!hasSeoSuffix(slug)) {
    return <Navigate to={getGradeUrl(grade.grade, parentMaterial.id)} replace />;
  }

  // Sibling grades in same material family
  const siblingGrades = parentMaterial?.grades?.filter(g => g !== grade.grade) || [];

  // Products available in this grade
  const availableProductCategories = getProductsForGrade(grade.slug, parentMaterial?.id);

  // Dynamic SEO Suffix
  const seoSuffix = getSeoSuffix(grade.slug);
  const seoTitle = getSeoTitle(grade.name, grade.slug, parentMaterial?.name);
  const seoDesc = getSeoDescription(grade.name, grade.slug, `Chemical composition, mechanical properties, and ASTM/ASME standards.`);

  // Breadcrumb items
  const breadcrumbItems = [
    { label: 'Materials', to: '/materials' },
    { label: parentMaterial.name, to: getMaterialUrl(parentMaterial.id) },
    { label: grade.grade }
  ];

  const gradeImage = parentMaterial.image || '/images/stock/stainless-steel.jpg';

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
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0055A4] bg-blue-50 px-3 py-1.5 rounded-full border border-blue-100 hover:bg-blue-100 transition-colors shadow-xs"
                >
                  <Layers className="w-3.5 h-3.5 text-[#E3000F]" />
                  {parentMaterial.name}
                </Link>
                <span className="inline-flex items-center text-xs font-semibold tracking-wider text-[#E3000F] bg-red-50 px-3 py-1.5 rounded-full border border-red-100">
                  {seoSuffix}
                </span>
                {grade.uns && (
                  <span className="inline-flex items-center text-xs font-mono font-medium text-slate-600 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200">
                    {grade.uns}
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
                  to={`/contact?material=${encodeURIComponent(parentMaterial.id)}&grade=${encodeURIComponent(grade.grade)}`}
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-bold text-white bg-[#E3000F] hover:bg-[#C2000D] transition-colors shadow-sm"
                >
                  Inquire for {grade.grade} <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <a
                  href="#chemical-composition"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-bold text-[#0055A4] bg-white border-2 border-[#0055A4] hover:bg-blue-50 transition-colors"
                >
                  View Chemistry & Specs
                </a>
              </div>
            </div>

            {/* Right Image Container - Strict object-cover, fixed aspect ratio, overflow-hidden */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="w-full max-w-md aspect-[4/3] rounded-2xl bg-slate-100 border border-slate-200 overflow-hidden shadow-xl relative group">
                <img
                  src={gradeImage}
                  alt={`${grade.name} ${seoSuffix}`}
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

      {/* Sibling Grades Switcher Strip (Requirement: Switch grades with unique URLs) */}
      {siblingGrades.length > 0 && (
        <section className="bg-slate-100/80 border-b border-slate-200 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mr-2 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-[#E3000F]" />
              Other {parentMaterial.name} Grades:
            </span>
            {siblingGrades.map((g, idx) => {
              const url = getGradeUrl(g, parentMaterial.id);
              return (
                <Link
                  key={idx}
                  to={url}
                  className="px-3 py-1 rounded-lg text-xs font-mono font-bold bg-white text-slate-700 hover:bg-[#0055A4] hover:text-white border border-slate-200 transition-colors shadow-2xs"
                >
                  {g}
                </Link>
              );
            })}
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
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2 mt-4">
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
                  <span>Intergranular corrosion test (IGC Practice A/E) compliant</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Chemical Composition Table */}
          {grade.chemicalComposition && grade.chemicalComposition.length > 0 && (
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
          )}

          {/* Mechanical Properties Table */}
          {grade.mechanicalProperties && grade.mechanicalProperties.length > 0 && (
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
                      <th className="py-3 px-4">Guaranteed Minimum / Range</th>
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
          )}

        </div>
      </section>

      {/* Available Products in This Grade Section */}
      <section className="py-12 sm:py-16 bg-slate-100/70 border-b border-slate-200" id="products">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 border-b border-slate-200">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#E3000F] mb-1">
                <Box className="w-3.5 h-3.5" />
                Product Range Available in {grade.grade}
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0055A4]">
                Steel Products Supplied in {grade.name}
              </h2>
            </div>
            <Link
              to={`/contact?grade=${encodeURIComponent(grade.grade)}`}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold text-white bg-[#0055A4] hover:bg-[#003d7a] transition-colors shadow-2xs"
            >
              Request Custom Dimension Quote <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {availableProductCategories.length > 0 ? (
            <div className="space-y-10">
              {availableProductCategories.slice(0, 6).map(({ category, types }) => (
                <div key={category.id} className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                      <Factory className="w-4 h-4 text-[#0055A4]" />
                      {category.name} in {grade.grade}
                    </h3>
                    <Link
                      to={getCategoryUrl(category.id)}
                      className="text-xs font-bold text-[#0055A4] hover:text-[#E3000F] flex items-center gap-1 transition-colors"
                    >
                      View All {category.name} Types <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                    {types.slice(0, 8).map(type => (
                      <Link
                        key={type.id}
                        to={getTypeMaterialUrl(category.id, type.id, parentMaterial.id)}
                        className="p-3 rounded-lg border border-slate-100 bg-slate-50 hover:bg-white hover:border-[#0055A4] hover:shadow-xs transition-all text-left group"
                      >
                        <div className="text-xs font-bold text-slate-800 group-hover:text-[#0055A4] line-clamp-1">
                          {type.name}
                        </div>
                        <div className="text-[10px] text-slate-400 mt-1 flex items-center justify-between">
                          <span>{grade.grade}</span>
                          <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-10 bg-white rounded-xl border border-slate-200 p-6">
              <p className="text-slate-600 text-sm">Custom products in {grade.name} available on request.</p>
              <Link to="/contact" className="inline-block mt-3 text-xs font-bold text-[#0055A4]">
                Contact Engineering Sales &rarr;
              </Link>
            </div>
          )}

        </div>
      </section>

      {/* Applications Section */}
      {grade.applications && grade.applications.length > 0 && (
        <section className="bg-white py-12 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
              <Compass className="w-5 h-5 text-[#E3000F]" />
              Industrial Applications for {grade.name}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {grade.applications.map((app, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-left space-y-1">
                  <div className="w-2 h-2 rounded-full bg-[#0055A4]"></div>
                  <div className="text-xs font-bold text-slate-800">{app}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

