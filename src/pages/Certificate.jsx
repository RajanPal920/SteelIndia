import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';
import SEO from '../components/SEO';
import { certificateCategories } from '../data/certificates';
import { 
  ShieldCheck, FileCheck2, CheckCircle2, ArrowRight, 
  HelpCircle, Eye, Download, AlertTriangle 
} from 'lucide-react';

export default function Certificate() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-left">
      <SEO 
        title="Quality & Test Documentation | SteelIndia"
        description="Review SteelIndia's quality documentation protocols including EN 10204 3.1 & 3.2 Mill Test Certificates, PMI testing, Third-Party Inspection, and NDT reports."
      />

      <Breadcrumb items={[{ label: 'Certificates & Documentation' }]} />

      {/* Page Hero */}
      <section className="bg-slate-50 border-b border-slate-200 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              TRACEABILITY & COMPLIANCE
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-navy-950 tracking-tight">
              Quality & Documentation
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              In critical engineering and industrial piping, documentation is as vital as the steel itself. We provide transparent test dossiers aligned with international standards.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy & Notice Section */}
      <section className="py-12 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-start space-x-3">
              <ShieldCheck className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <div className="text-sm font-bold text-navy-950">
                  Verification Without Unsupported Claims
                </div>
                <div className="text-xs text-slate-600 max-w-2xl leading-relaxed">
                  In accordance with ethical commercial practices, SteelIndia does not fabricate unverified accreditation logos or dummy certificate numbers. Official client-specific Mill Test Certificates (MTCs), Third-Party Inspection (TPI) endorsements, and testing dossiers are provided upon verified purchase order placement.
                </div>
              </div>
            </div>

            <Link
              to="/contact"
              className="px-5 py-2.5 rounded-lg bg-navy-950 hover:bg-slate-800 text-white text-xs font-bold whitespace-nowrap shadow transition-colors"
            >
              Request Sample Test Dossier
            </Link>
          </div>
        </div>
      </section>

      {/* 6 Documentation Categories Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950">
              Supported Documentation & Testing Standards
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Clients can request any of the following inspection documents during commercial inquiry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificateCategories.map((cert) => (
              <div
                key={cert.id}
                className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col justify-between hover:border-steel-400 hover:shadow-md transition-all duration-200 space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-steel-700 bg-steel-50 px-2 py-0.5 rounded border border-steel-100">
                      {cert.category}
                    </span>
                    <FileCheck2 className="w-5 h-5 text-slate-400" />
                  </div>

                  <h3 className="text-base font-bold text-navy-950">
                    {cert.name}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {cert.summary}
                  </p>

                  <div className="pt-2 border-t border-slate-100 space-y-1.5">
                    <div className="text-[11px] font-bold text-slate-700 uppercase tracking-wide">
                      Standard Inclusions:
                    </div>
                    {cert.details.map((detail, idx) => (
                      <div key={idx} className="flex items-start space-x-1.5 text-xs text-slate-500">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px]">
                  <span className="text-slate-400 italic font-mono">
                    {cert.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4-Step Verification Workflow */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-2 mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950">
              Quality Assurance & Inspection Workflow
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              How quality compliance is verified across our supply cycle.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 bg-white rounded-xl border border-slate-200 space-y-2">
              <div className="text-xs font-bold text-industrial-amber uppercase">Stage 01</div>
              <h4 className="text-sm font-bold text-navy-950">Raw Ingot & Heat Audit</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Verification of master melt chemical analysis and mill pedigree before forming or extrusion.
              </p>
            </div>

            <div className="p-5 bg-white rounded-xl border border-slate-200 space-y-2">
              <div className="text-xs font-bold text-industrial-amber uppercase">Stage 02</div>
              <h4 className="text-sm font-bold text-navy-950">In-Process Testing</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Hydrostatic pressure testing, eddy-current scan, and dimensional ovality checks during production.
              </p>
            </div>

            <div className="p-5 bg-white rounded-xl border border-slate-200 space-y-2">
              <div className="text-xs font-bold text-industrial-amber uppercase">Stage 03</div>
              <h4 className="text-sm font-bold text-navy-950">PMI & Third-Party Witness</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Positive Material Identification and witness inspection by client-appointed certifying agencies.
              </p>
            </div>

            <div className="p-5 bg-white rounded-xl border border-slate-200 space-y-2">
              <div className="text-xs font-bold text-industrial-amber uppercase">Stage 04</div>
              <h4 className="text-sm font-bold text-navy-950">Test Dossier Dispatch</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Final physical stamping, export packaging verification, and compilation of the digital MTC binder.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 px-7 py-3 rounded-lg text-sm font-bold text-white bg-industrial-amber hover:bg-industrial-hover shadow transition-colors"
            >
              <span>Submit Specific Inspection Requirements</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
