import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';
import SEO from '../components/SEO';
import { certificateCategories } from '../data/certificates';
import {
  ShieldCheck, FileCheck2, CheckCircle2, ArrowRight,
  HelpCircle, Eye, Download, AlertTriangle, Layers,
  Award, FileText, CheckSquare
} from 'lucide-react';

export default function Certificate() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-left font-sans">
      <SEO
        title="Quality & Test Documentation | Steel India Co."
        description="Review Steel India Co.'s quality documentation protocols including EN 10204 3.1 & 3.2 Mill Test Certificates, PMI testing, Third-Party Inspection, and NDT reports."
      />

      <Breadcrumb items={[{ label: 'Certificates & Documentation' }]} />

      {/* --- HERO SECTION (Red Theme with Blue Accent) --- */}
      <section className="bg-[#E3000F] text-white py-14 sm:py-20 relative overflow-hidden">
        {/* Blue Accent Line from Logo */}
        <div className="absolute top-0 left-0 w-full h-2 bg-[#0055A4]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#E3000F] bg-white px-4 py-1.5 rounded-full shadow-sm">
              <ShieldCheck className="w-4 h-4 text-[#0055A4]" />
              Traceability & Compliance
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white drop-shadow-md">
              Quality & Documentation
            </h1>
            <p className="text-base sm:text-lg text-white/90 leading-relaxed">
              In critical engineering and industrial piping, documentation is as vital as the steel itself. We provide transparent test dossiers aligned with international standards.
            </p>
          </div>
        </div>
      </section>

      {/* --- PHILOSOPHY & NOTICE SECTION --- */}
      <section className="py-10 sm:py-12 relative z-20 -mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-lg flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-xl bg-green-50 text-green-600 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <div className="text-lg font-bold text-[#0055A4]">
                  Verification Without Unsupported Claims
                </div>
                <div className="text-sm text-slate-600 max-w-2xl leading-relaxed">
                  In accordance with ethical commercial practices, Steel India Co. does not fabricate unverified accreditation logos or dummy certificate numbers. Official client-specific Mill Test Certificates (MTCs), Third-Party Inspection (TPI) endorsements, and testing dossiers are provided upon verified purchase order placement.
                </div>
              </div>
            </div>

            <Link
              to="/contact"
              className="px-6 py-3 rounded-lg bg-[#E3000F] hover:bg-[#C2000D] text-white text-sm font-bold whitespace-nowrap shadow-sm transition-colors"
            >
              Request Sample Test Dossier
            </Link>
          </div>
        </div>
      </section>

      {/* --- 6 DOCUMENTATION CATEGORIES GRID --- */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#E3000F] bg-red-50 px-3.5 py-1.5 rounded-full border border-red-100">
              <FileText className="w-3.5 h-3.5" />
              Documentation Matrix
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0055A4]">
              Supported Documentation & Testing Standards
            </h2>
            <p className="text-sm text-slate-600">
              Clients can request any of the following inspection documents during commercial inquiry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificateCategories.map((cert) => (
              <div
                key={cert.id}
                className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:border-[#0055A4] hover:shadow-lg transition-all duration-300 group space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#0055A4] bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100">
                      {cert.category}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-[#0055A4] transition-colors">
                      <FileCheck2 className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-slate-800 group-hover:text-[#0055A4] transition-colors">
                    {cert.name}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {cert.summary}
                  </p>

                  <div className="pt-3 border-t border-slate-100 space-y-2">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      Standard Inclusions:
                    </div>
                    {cert.details.map((detail, idx) => (
                      <div key={idx} className="flex items-start space-x-2 text-xs text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0055A4] shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px]">
                  <span className="text-slate-400 italic font-mono bg-slate-50 px-2 py-0.5 rounded border border-slate-100">
                    {cert.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 4-STEP VERIFICATION WORKFLOW --- */}
      <section className="py-16 bg-white border-t border-slate-200 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(#0055A4 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#0055A4] bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100">
              <CheckSquare className="w-3.5 h-3.5 text-[#E3000F]" />
              Quality Workflow
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0055A4]">
              Quality Assurance & Inspection Workflow
            </h2>
            <p className="text-sm text-slate-600">
              How quality compliance is verified across our supply cycle.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Stage 1 */}
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-3 hover:border-[#0055A4] transition-colors group">
              <div className="text-xs font-bold text-[#E3000F] bg-red-50 w-fit px-2 py-1 rounded uppercase tracking-wider">
                Stage 01
              </div>
              <h4 className="text-sm font-bold text-[#0055A4]">Raw Ingot & Heat Audit</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Verification of master melt chemical analysis and mill pedigree before forming or extrusion.
              </p>
            </div>

            {/* Stage 2 */}
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-3 hover:border-[#0055A4] transition-colors group">
              <div className="text-xs font-bold text-[#E3000F] bg-red-50 w-fit px-2 py-1 rounded uppercase tracking-wider">
                Stage 02
              </div>
              <h4 className="text-sm font-bold text-[#0055A4]">In-Process Testing</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Hydrostatic pressure testing, eddy-current scan, and dimensional ovality checks during production.
              </p>
            </div>

            {/* Stage 3 */}
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-3 hover:border-[#0055A4] transition-colors group">
              <div className="text-xs font-bold text-[#E3000F] bg-red-50 w-fit px-2 py-1 rounded uppercase tracking-wider">
                Stage 03
              </div>
              <h4 className="text-sm font-bold text-[#0055A4]">PMI & Third-Party Witness</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Positive Material Identification and witness inspection by client-appointed certifying agencies.
              </p>
            </div>

            {/* Stage 4 */}
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-3 hover:border-[#0055A4] transition-colors group">
              <div className="text-xs font-bold text-[#E3000F] bg-red-50 w-fit px-2 py-1 rounded uppercase tracking-wider">
                Stage 04
              </div>
              <h4 className="text-sm font-bold text-[#0055A4]">Test Dossier Dispatch</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Final physical stamping, export packaging verification, and compilation of the digital MTC binder.
              </p>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 text-center">
            <Link
              to="/contact"
              className="group inline-flex items-center space-x-2 px-8 py-3.5 rounded-lg text-sm font-bold text-white bg-[#E3000F] hover:bg-[#C2000D] shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
            >
              <span>Submit Specific Inspection Requirements</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}