import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';
import InquiryForm from '../components/InquiryForm';
import SEO from '../components/SEO';
import { materials } from '../data/materials';
import {
  CheckCircle2, ArrowRight, ShieldCheck, FileCheck2,
  Layers, Compass, AlertCircle, ChevronRight, Factory,
  PackageCheck, HelpCircle, Box, FlaskConical
} from 'lucide-react';

export default function MaterialCategory() {
  const { material: materialId } = useParams();

  const material = materials.find(m => m.id === materialId);

  if (!material) {
    return <Navigate to="/material" replace />;
  }

  const relatedMaterials = materials
    .filter(m => m.id !== material.id)
    .slice(0, 4);

  // Dummy chemical composition for demo purpose (PDF style)
  const chemicalComposition = [
    { grade: 'Grade 304', C: '0.08 max', Mn: '2.00 max', Si: '0.75 max', Cr: '18.0-20.0', Ni: '8.0-10.5' },
    { grade: 'Grade 316', C: '0.08 max', Mn: '2.00 max', Si: '0.75 max', Cr: '16.0-18.0', Ni: '10.0-14.0' },
    { grade: 'Grade 321', C: '0.08 max', Mn: '2.00 max', Si: '0.75 max', Cr: '17.0-19.0', Ni: '9.0-12.0' }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-left font-sans">
      <SEO
        title={`${material.name} Specifications & Applications | Steel India Co.`}
        description={material.tagline}
      />

      <Breadcrumb
        items={[
          { label: 'Materials', to: '/material' },
          { label: material.name }
        ]}
      />

      {/* --- HERO SECTION (Blue Theme for Materials) --- */}
      <section className="bg-[#0055A4] text-white py-10 sm:py-14 relative overflow-hidden">
        {/* Decorative Blueprint Pattern */}
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0055A4] bg-white px-3 py-1.5 rounded-full shadow-sm">
              <Layers className="w-3.5 h-3.5 text-[#E3000F]" />
              {material.category}
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white drop-shadow-md">
              {material.name}
            </h1>
            <p className="text-base sm:text-lg text-white/90 leading-relaxed max-w-2xl border-l-4 border-[#E3000F] pl-4">
              {material.tagline}
            </p>
          </div>
        </div>
      </section>

      {/* --- MAIN DETAILS SECTION --- */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

            {/* LEFT COLUMN: Technical Data (8 Cols) */}
            <div className="lg:col-span-8 space-y-8">

              {/* 1. Metallurgical Characteristics */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
                <h2 className="text-xl font-bold text-[#0055A4] mb-3 flex items-center gap-2">
                  <FlaskConical className="w-5 h-5 text-[#E3000F]" />
                  Metallurgical Characteristics
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed text-justify">
                  {material.characteristics}
                </p>
              </div>

              {/* 2. Commonly Supplied Grades */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
                <h3 className="text-lg font-bold text-[#0055A4] mb-4 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#E3000F]" />
                  Commonly Supplied Grades
                </h3>
                <div className="flex flex-wrap gap-2">
                  {material.grades.map((grade, idx) => (
                    <span
                      key={idx}
                      className="px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold bg-slate-50 text-slate-800 border border-slate-200 hover:border-[#0055A4] hover:text-[#0055A4] transition-colors cursor-default"
                    >
                      {grade}
                    </span>
                  ))}
                </div>
              </div>

              {/* 3. Chemical Composition Table (Naya Section - PDF Style) */}
              <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                <div className="bg-[#0055A4] px-6 py-4">
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <FileCheck2 className="w-5 h-5" />
                    Typical Chemical Composition (%)
                  </h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm text-left">
                    <thead className="bg-slate-100 text-slate-600 font-bold">
                      <tr>
                        <th className="px-4 py-3">Grade</th>
                        <th className="px-4 py-3">C</th>
                        <th className="px-4 py-3">Mn</th>
                        <th className="px-4 py-3">Si</th>
                        <th className="px-4 py-3">Cr</th>
                        <th className="px-4 py-3">Ni</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {chemicalComposition.map((row, idx) => (
                        <tr key={idx} className="hover:bg-slate-50 transition-colors">
                          <td className="px-4 py-3 font-bold text-slate-800">{row.grade}</td>
                          <td className="px-4 py-3 text-slate-600">{row.C}</td>
                          <td className="px-4 py-3 text-slate-600">{row.Mn}</td>
                          <td className="px-4 py-3 text-slate-600">{row.Si}</td>
                          <td className="px-4 py-3 text-slate-600 font-semibold">{row.Cr}</td>
                          <td className="px-4 py-3 text-slate-600 font-semibold">{row.Ni}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* 4. Supply Forms & Standards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Forms */}
                <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
                  <h3 className="text-base font-bold text-[#0055A4] mb-4 flex items-center gap-2">
                    <Box className="w-5 h-5 text-[#E3000F]" />
                    Available Forms
                  </h3>
                  <div className="space-y-2">
                    {material.typicalForms.map((form, idx) => (
                      <div key={idx} className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-xs font-semibold text-slate-800 flex items-center space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-[#0055A4] shrink-0" />
                        <span>{form}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Standards */}
                <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
                  <h3 className="text-base font-bold text-[#0055A4] mb-4 flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-[#E3000F]" />
                    Applicable Standards
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {material.standards.map((std, idx) => (
                      <span key={idx} className="px-3 py-1.5 rounded-lg text-xs font-mono bg-slate-100 text-slate-700 border border-slate-200">
                        {std}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* 5. Industry Applications */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
                <h3 className="text-lg font-bold text-[#0055A4] mb-4 flex items-center gap-2">
                  <Compass className="w-5 h-5 text-[#E3000F]" />
                  Industry Applications
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-600">
                  {material.applications.map((app, idx) => (
                    <div key={idx} className="p-3 bg-slate-50 rounded-lg border border-slate-100 flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E3000F]"></span>
                      <span className="font-medium text-slate-700">{app}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 6. Packaging & Documentation (Gap Filler) */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
                <h3 className="text-lg font-bold text-[#0055A4] mb-4 flex items-center gap-2">
                  <PackageCheck className="w-5 h-5 text-[#E3000F]" />
                  Packaging & Documentation
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-600">
                  <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg border border-slate-100">
                    <CheckCircle2 className="w-4 h-4 text-[#0055A4] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-slate-800 block mb-1">Standard Packing</span>
                      Sea-worthy wooden crates, hex-bundling, and VCI anti-corrosion wrapping.
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg border border-slate-100">
                    <CheckCircle2 className="w-4 h-4 text-[#0055A4] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-slate-800 block mb-1">Test Certificates</span>
                      EN 10204 3.1 Mill Test Certificates with full chemical & physical traceability.
                    </div>
                  </div>
                </div>
              </div>

              {/* 7. Disclaimer */}
              <div className="p-4 rounded-xl bg-blue-50 border border-blue-100 text-xs text-[#0055A4] flex items-start space-x-2.5">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                <p>
                  Exact grade availability, minimum order quantity, and mill test requirements for {material.name} will be validated upon submission of your detailed RFQ.
                </p>
              </div>

            </div>

            {/* RIGHT COLUMN: Sticky Sidebar (4 Cols) */}
            <div className="lg:col-span-4">
              <div className="sticky top-24 space-y-6">

                {/* Inquiry Form */}
                <div id="inquiry-form" className="scroll-mt-24 w-full">
                  <div className="bg-white rounded-2xl border border-slate-200 shadow-lg overflow-hidden">
                    <div className="bg-[#E3000F] px-6 py-4">
                      <h3 className="text-white font-bold text-lg">Request a Quote</h3>
                      <p className="text-white/80 text-xs mt-1">Inquire for {material.name}.</p>
                    </div>
                    <div className="p-5 sm:p-6">
                      <InquiryForm
                        defaultMaterial={material.name}
                        title=""
                      />
                    </div>
                  </div>
                </div>

                {/* Related Materials */}
                <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4 border-b border-slate-100 pb-2 flex items-center justify-between">
                    <span>Other Material Families</span>
                    <Link to="/material" className="text-[#0055A4] hover:text-[#E3000F] normal-case font-semibold">View All</Link>
                  </div>
                  <div className="space-y-2">
                    {relatedMaterials.map((rel) => (
                      <Link
                        key={rel.id}
                        to={`/material/${rel.id}`}
                        className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-[#0055A4] hover:bg-white text-xs font-bold text-slate-700 hover:text-[#0055A4] transition-all group"
                      >
                        <span>{rel.name}</span>
                        <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#E3000F] group-hover:translate-x-1 transition-all" />
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Support Box */}
                <div className="bg-[#0055A4] rounded-2xl p-5 text-white text-center shadow-md">
                  <HelpCircle className="w-8 h-8 mx-auto mb-2 text-white/80" />
                  <h4 className="font-bold text-sm">Need Material Advice?</h4>
                  <p className="text-xs text-white/80 mt-1 mb-3">Our metallurgists can help you select the right grade.</p>
                  <a href="tel:+914425228058" className="inline-block w-full py-2.5 bg-white text-[#0055A4] font-bold text-xs rounded-lg hover:bg-slate-100 transition-colors">
                    Call +91 44 2522 8058
                  </a>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}