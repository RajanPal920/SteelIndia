// src/pages/ProductMaterialDetail.jsx
import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';
import SEO from '../components/SEO';
import OtherProductsSection from '../components/OtherProductsSection';
import { materials } from '../data/materials';
import {
  getProductMaterialBySlug,
  getProductMaterialUrl,
  getProductMaterialsForMaterial
} from '../data/productMaterialRegistry';
import {
  getCanonicalMaterial,
  getMaterialUrl,
  getCategoryUrl,
  getSeoSuffix,
  getSeoTitle,
  getSeoDescription,
  hasSeoSuffix
} from '../data/productNavigationData';
import { getGradeUrl } from '../data/gradesData';
import {
  CheckCircle2, ArrowRight, ShieldCheck, FileText,
  ChevronRight, Box, Compass, Factory, Layers,
  ArrowLeft, Award, HelpCircle, AlertCircle, Phone, Mail, FileCheck2
} from 'lucide-react';

export default function ProductMaterialDetail() {
  const { materialSlug, productSlug, slug, categorySlug } = useParams();
  const rawProductSlug = productSlug || slug || categorySlug;

  // Resolve item and material
  const item = getProductMaterialBySlug(rawProductSlug, materialSlug);

  // If item not found, redirect to materials
  if (!item) {
    if (materialSlug) {
      const validMat = getCanonicalMaterial(materialSlug);
      if (validMat) {
        return <Navigate to={getMaterialUrl(validMat.id)} replace />;
      }
    }
    return <Navigate to="/materials" replace />;
  }

  // Material data
  const material = materials.find(m => m.id === item.materialId) || getCanonicalMaterial(materialSlug) || materials[0];

  // Canonical SEO keyword sync: Ensure route URL contains rotated SEO keyword
  if (rawProductSlug && !hasSeoSuffix(rawProductSlug)) {
    return <Navigate to={getProductMaterialUrl(material.id, item)} replace />;
  }

  // Related products in the same material family
  const relatedProducts = getProductMaterialsForMaterial(material.id)
    .filter(p => p.id !== item.id && p.pureSlug !== item.pureSlug)
    .slice(0, 4);

  const seoSuffix = getSeoSuffix(item.pureSlug || item.title);
  const pageTitle = `${item.title} - ${seoSuffix}`;
  const seoTitle = getSeoTitle(item.title, item.pureSlug || item.title, material.name);
  const seoDesc = getSeoDescription(
    item.title,
    item.pureSlug || item.title,
    item.shortDescription || `Certified ${item.title} in ${material.name} per ASME & ASTM standards.`
  );

  const breadcrumbItems = [
    { label: 'Materials', to: '/materials' },
    { label: material.name, to: getMaterialUrl(material.id) },
    { label: item.title }
  ];

  return (
    <div key={`${material.id}-${item.id || item.pureSlug}`} className="flex flex-col min-h-screen bg-slate-50 text-left font-sans">
      <SEO
        title={seoTitle}
        description={seoDesc}
      />

      <Breadcrumb items={breadcrumbItems} />

      {/* Hero Header */}
      <section className="bg-white border-b border-slate-200 py-10 lg:py-14 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-wider">
                <Link
                  to={getMaterialUrl(material.id)}
                  className="bg-blue-50 text-[#0055A4] px-3 py-1.5 rounded-full border border-blue-100 flex items-center gap-1.5 hover:bg-blue-100 transition-colors shadow-2xs"
                >
                  <Layers className="w-3.5 h-3.5 text-[#E3000F]" />
                  {material.name}
                </Link>
                <span>/</span>
                <span className="bg-red-50 text-[#E3000F] px-3 py-1.5 rounded-full border border-red-100 flex items-center gap-1.5">
                  <Factory className="w-3.5 h-3.5" />
                  {item.categoryName || 'Industrial Product'}
                </span>
                <span className="bg-slate-100 text-slate-700 px-3 py-1.5 rounded-full border border-slate-200 font-semibold normal-case">
                  {seoSuffix}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0055A4] tracking-tight leading-tight">
                {item.title}
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed border-l-4 border-[#E3000F] pl-4">
                {item.shortDescription || item.overview || `Supplying verified ${item.title} engineered to international ASTM, ASME, DIN, and IS specifications.`}
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap gap-4">
                <Link
                  to={`/contact?product=${encodeURIComponent(item.categoryName || item.title)}&material=${encodeURIComponent(material.name)}`}
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-bold text-white bg-[#E3000F] hover:bg-[#C2000D] transition-colors shadow-sm"
                >
                  Request a Quote <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <Link
                  to={getMaterialUrl(material.id)}
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-bold text-[#0055A4] bg-white border-2 border-[#0055A4] hover:bg-blue-50 transition-colors"
                >
                  View All {material.name} Products
                </Link>
              </div>
            </div>

            {/* Right Image Container - strict object-cover, overflow-hidden */}
            <div className="lg:col-span-5 flex flex-col items-center lg:items-end">
              <div className="w-full max-w-md aspect-[4/3] rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-lg relative group">
                {item.image ? (
                  <img
                    src={item.image}
                    alt={`${item.title} in ${material.name}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 bg-white"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-white text-slate-400 p-6 text-center">
                    <Box className="w-12 h-12 text-slate-300 mb-2 stroke-1" />
                    <span className="text-xs font-bold text-slate-600 line-clamp-1">{item.title}</span>
                    <span className="text-[11px] text-slate-400 mt-1 uppercase tracking-wider font-semibold">Image to be added</span>
                  </div>
                )}
                <div className="absolute top-4 left-4 bg-[#0055A4] text-white text-[11px] font-bold px-3 py-1 rounded-md shadow-sm">
                  {material.name.toUpperCase()}
                </div>
                <div className="absolute bottom-4 right-4 bg-white/95 text-slate-800 text-[10px] font-bold px-2.5 py-1 rounded shadow-xs border border-slate-200">
                  EN 10204 3.1 CERTIFIED
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Main Details & Specs */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

            {/* Left 8 Cols: Overview, Types/Forms, Specs & Grades */}
            <div className="lg:col-span-8 space-y-8">

              {/* Product Overview */}
              {item.overview && (
                <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-3">
                  <h2 className="text-lg font-bold text-[#0055A4] flex items-center gap-2">
                    <FileText className="w-5 h-5 text-[#E3000F]" />
                    Product Overview & Metallurgy
                  </h2>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {item.overview}
                  </p>
                </div>
              )}

              {/* Available Supply Forms / Product Types */}
              {item.supplyForms && item.supplyForms.length > 0 && (
                <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-4">
                  <h3 className="text-lg font-bold text-[#0055A4] flex items-center gap-2">
                    <Box className="w-5 h-5 text-[#E3000F]" />
                    Available Types & Supply Forms
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {item.supplyForms.map((form, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-blue-50/50 hover:border-blue-200 transition-colors"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#0055A4] shrink-0" />
                        <span className="text-xs sm:text-sm font-semibold text-slate-800">{form}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Available Grades with clickable detail links */}
              {item.grades && item.grades.length > 0 && (
                <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-3">
                  <h3 className="text-lg font-bold text-[#0055A4] flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-[#E3000F]" />
                    Available Alloy Grades in {material.name}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Click any grade below to view its complete chemical composition, mechanical yield strength, and testing standards.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {item.grades.map((grade, idx) => (
                      <Link
                        key={idx}
                        to={getGradeUrl(grade, material.id)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-bold bg-slate-100 hover:bg-[#0055A4] text-slate-800 hover:text-white border border-slate-200 hover:border-[#0055A4] transition-all shadow-2xs group"
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
              {item.technicalSpecs && Object.keys(item.technicalSpecs).length > 0 && (
                <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                  <div className="bg-[#0055A4] px-6 py-4 flex items-center justify-between">
                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                      <FileText className="w-5 h-5" /> Technical Specifications
                    </h3>
                    <span className="text-xs font-mono text-white/80">
                      {item.standards || 'ASME / ASTM / IS'}
                    </span>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs sm:text-sm text-left">
                      <tbody className="divide-y divide-slate-100">
                        {Object.entries(item.technicalSpecs).map(([key, val], idx) => (
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
              )}

              {/* Chemical Composition Table */}
              {item.chemicalComposition && item.chemicalComposition.length > 0 && (
                <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                  <div className="bg-[#0055A4] px-6 py-4 flex items-center justify-between">
                    <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                      <FileCheck2 className="w-5 h-5 text-white" /> Typical Chemical Composition (%) Reference
                    </h3>
                    <span className="text-xs font-mono text-white/80">ASTM / ASME Standards</span>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs sm:text-sm text-left">
                      <thead className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                        <tr>
                          <th className="px-5 py-3">Grade</th>
                          {Array.from(new Set(item.chemicalComposition.flatMap(row => Object.keys(row)))).filter(k => k !== 'grade').map(el => (
                            <th key={el} className="px-4 py-3">{el}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {item.chemicalComposition.map((row, idx) => {
                          const elements = Array.from(new Set(item.chemicalComposition.flatMap(r => Object.keys(r)))).filter(k => k !== 'grade');
                          return (
                            <tr key={idx} className={idx % 2 === 0 ? 'bg-white hover:bg-slate-50' : 'bg-slate-50/50 hover:bg-slate-100'}>
                              <td className="px-5 py-3 font-bold text-slate-900 border-r border-slate-100 whitespace-nowrap">
                                {row.grade}
                              </td>
                              {elements.map(el => (
                                <td key={el} className="px-4 py-3 font-mono text-slate-600 whitespace-nowrap">
                                  {row[el] || '—'}
                                </td>
                              ))}
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Mechanical Properties Table */}
              {item.mechanicalProperties && item.mechanicalProperties.length > 0 && (
                <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                  <div className="bg-[#E3000F] px-6 py-4 flex items-center justify-between">
                    <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                      <Award className="w-5 h-5 text-white" /> Mechanical & Tensile Strength Properties
                    </h3>
                    <span className="text-xs font-mono text-white/80">Room Temp (20°C)</span>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs sm:text-sm text-left">
                      <thead className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                        <tr>
                          <th className="px-5 py-3">Grade</th>
                          {Array.from(new Set(item.mechanicalProperties.flatMap(row => Object.keys(row)))).filter(k => k !== 'grade').map(prop => (
                            <th key={prop} className="px-4 py-3 capitalize">
                              {prop === 'tensile' ? 'Tensile (MPa)' : prop === 'yield' ? 'Yield (MPa)' : prop === 'elongation' ? 'Elongation (%)' : prop === 'hardness' ? 'Hardness' : prop}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {item.mechanicalProperties.map((row, idx) => {
                          const props = Array.from(new Set(item.mechanicalProperties.flatMap(r => Object.keys(r)))).filter(k => k !== 'grade');
                          return (
                            <tr key={idx} className={idx % 2 === 0 ? 'bg-white hover:bg-slate-50' : 'bg-slate-50/50 hover:bg-slate-100'}>
                              <td className="px-5 py-3 font-bold text-slate-900 border-r border-slate-100 whitespace-nowrap">
                                {row.grade}
                              </td>
                              {props.map(prop => (
                                <td key={prop} className="px-4 py-3 font-mono text-slate-600 whitespace-nowrap">
                                  {row[prop] || '—'}
                                </td>
                              ))}
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Standards Compliance List */}
              {item.standardsCompliance && item.standardsCompliance.length > 0 && (
                <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-4">
                  <h3 className="text-lg font-bold text-[#0055A4] flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    Applicable Standards & Design Codes
                  </h3>
                  <div className="grid grid-cols-1 gap-2.5">
                    {item.standardsCompliance.map((std, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-xs sm:text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="font-semibold text-slate-800">{std}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Manufacturing & Engineering Specifications */}
              {(item.manufacturingType || item.tolerance || item.certifications || item.pressureRating || item.forms) && (
                <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-4">
                  <h3 className="text-lg font-bold text-[#0055A4] flex items-center gap-2">
                    <Factory className="w-5 h-5 text-[#E3000F]" />
                    Manufacturing & Quality Parameters
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                    {item.manufacturingType && (
                      <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/80">
                        <div className="text-[11px] uppercase tracking-wider text-slate-400 font-bold mb-1">Manufacturing Type</div>
                        <div className="text-xs sm:text-sm font-bold text-slate-800">{item.manufacturingType}</div>
                      </div>
                    )}
                    {item.tolerance && (
                      <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/80">
                        <div className="text-[11px] uppercase tracking-wider text-slate-400 font-bold mb-1">Dimensional Tolerance</div>
                        <div className="text-xs sm:text-sm font-bold text-slate-800">{item.tolerance}</div>
                      </div>
                    )}
                    {item.certifications && (
                      <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/80">
                        <div className="text-[11px] uppercase tracking-wider text-slate-400 font-bold mb-1">Test Certifications</div>
                        <div className="text-xs sm:text-sm font-bold text-slate-800">{item.certifications}</div>
                      </div>
                    )}
                    {item.pressureRating && (
                      <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/80">
                        <div className="text-[11px] uppercase tracking-wider text-slate-400 font-bold mb-1">Pressure Rating</div>
                        <div className="text-xs sm:text-sm font-bold text-slate-800">{item.pressureRating}</div>
                      </div>
                    )}
                    {item.forms && (
                      <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/80">
                        <div className="text-[11px] uppercase tracking-wider text-slate-400 font-bold mb-1">Available Forms</div>
                        <div className="text-xs sm:text-sm font-bold text-slate-800">{item.forms}</div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Quality & Inspection Standards */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-4">
                <h3 className="text-lg font-bold text-[#0055A4] flex items-center gap-2">
                  <Award className="w-5 h-5 text-[#E3000F]" />
                  Quality & Inspection Standards
                </h3>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>EN 10204 Type 3.1 & 3.2 Mill Test Certificates (MTC) provided with full heat traceability.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>100% Positive Material Identification (PMI) Spectro Testing performed prior to dispatch.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Hydrostatic, Eddy Current, and Ultrasonic NDT inspection in compliance with international codes.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Third-Party Inspection (TPI) approved: Bureau Veritas, DNV, TUV, Lloyds, SGS, and EIL.</span>
                  </li>
                </ul>
              </div>

              {/* Industry Applications Section */}
              {((item.industryApplications && item.industryApplications.length > 0) || (item.applications && item.applications.length > 0)) && (
                <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-4">
                  <h3 className="text-lg font-bold text-[#0055A4] flex items-center gap-2">
                    <Compass className="w-5 h-5 text-[#E3000F]" />
                    Target Industrial Applications for {item.title}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {(item.industryApplications || item.applications).map((app, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-800 hover:border-[#0055A4] transition-colors">
                        <div className="w-2 h-2 rounded-full bg-[#E3000F] shrink-0" />
                        <span>{app}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Back to Material Link */}
              <div className="pt-2 flex flex-wrap items-center justify-between gap-4 border-t border-slate-200">
                <Link
                  to={getMaterialUrl(material.id)}
                  className="inline-flex items-center text-sm font-bold text-[#0055A4] hover:text-[#E3000F] transition-colors"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to All {material.name} Products
                </Link>
                <Link
                  to="/contact"
                  className="text-xs font-semibold text-slate-600 hover:text-[#0055A4] transition-colors"
                >
                  Need Custom Fabrication or Cutting? Contact Us &rarr;
                </Link>
              </div>

            </div>

            {/* Right 4 Cols: Sticky Inquiry Box & Related Products */}
            <div className="lg:col-span-4">
              <div className="sticky top-24 space-y-6">

                {/* RFQ Box */}
                <div className="bg-white rounded-2xl border border-slate-200 shadow-md overflow-hidden">
                  <div className="bg-[#E3000F] px-5 py-3.5 text-white">
                    <h3 className="font-bold text-sm uppercase tracking-wide flex items-center gap-2">
                      <FileText className="w-4 h-4" /> Request a Quotation
                    </h3>
                  </div>
                  <div className="p-5 space-y-4">
                    <div className="p-3 bg-slate-50 rounded-lg border border-slate-100 text-xs space-y-1">
                      <div className="font-bold text-slate-900">{item.title}</div>
                      <div className="text-slate-600">Family: {material.name}</div>
                      <div className="font-semibold text-[#0055A4]">Standard: {item.standards || 'ASTM / ASME'}</div>
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Send your dimensions, wall thickness, quantities, and destination port for an immediate proforma quote from Chennai.
                    </p>
                    <Link
                      to={`/contact?product=${encodeURIComponent(item.title)}&material=${encodeURIComponent(material.name)}`}
                      className="inline-flex items-center justify-center w-full px-4 py-3 rounded-lg text-sm font-bold text-white bg-[#0055A4] hover:bg-[#003d7a] transition-colors shadow-sm"
                    >
                      Inquire for this Product <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                    <div className="pt-2 border-t border-slate-100 flex items-center justify-around text-xs text-slate-600">
                      <a href="tel:+914425228058" className="flex items-center gap-1 hover:text-[#E3000F]">
                        <Phone className="w-3.5 h-3.5 text-[#0055A4]" /> +91 44 2522 8058
                      </a>
                    </div>
                  </div>
                </div>

                {/* Related Products in this Material */}
                {relatedProducts.length > 0 && (
                  <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm space-y-3">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-500 pb-2 border-b border-slate-100 flex items-center justify-between">
                      <span>Other {material.name} Products</span>
                      <Link to={getMaterialUrl(material.id)} className="text-[#0055A4] hover:underline text-[11px]">View All</Link>
                    </div>
                    <div className="space-y-2.5">
                      {relatedProducts.map(rel => (
                        <Link
                          key={rel.id}
                          to={getProductMaterialUrl(material.id, rel)}
                          className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all group"
                        >
                          <div className="w-12 h-12 rounded-lg bg-white overflow-hidden shrink-0 border border-slate-200 flex items-center justify-center">
                            {rel.image ? (
                              <img src={rel.image} alt={rel.title} className="w-full h-full object-cover bg-white" />
                            ) : (
                              <Box className="w-5 h-5 text-slate-300 stroke-1" />
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-xs font-bold text-slate-800 group-hover:text-[#0055A4] truncate">
                              {rel.title}
                            </div>
                            <div className="text-[11px] text-slate-400 truncate">
                              {rel.standards || rel.categoryName}
                            </div>
                          </div>
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
      <OtherProductsSection currentCategoryId={item?.categoryKey} />
    </div>
  );
}

