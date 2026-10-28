import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';
import SEO from '../components/SEO';
import { 
  ShieldCheck, CheckCircle2, ArrowRight, Target, 
  Compass, FileCheck2, Users2, Layers, Boxes, Clock, HelpCircle 
} from 'lucide-react';

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-left">
      <SEO 
        title="About SteelIndia | Industrial Steel Sourcing & Solutions"
        description="Learn about SteelIndia's commitment to precision steel product selection, specification matching, and international standard compliance."
      />

      <Breadcrumb items={[{ label: 'About SteelIndia' }]} />

      {/* Page Hero */}
      <section className="bg-slate-50 border-b border-slate-200 py-14 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-industrial-amber bg-white px-3 py-1 rounded-full border border-slate-200 shadow-2xs">
              COMPANY INTRODUCTION (DEMO TEMPLATE)
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-navy-950 tracking-tight">
              About SteelIndia
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Connecting engineering, infrastructure, and manufacturing industries with tailored steel products and high-performance alloy solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content: Split Section */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Image Showcase */}
            <div className="lg:col-span-6 relative">
              <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200 aspect-[4/3] bg-slate-100">
                <img
                  src="/images/about-showcase.jpg"
                  alt="SteelIndia industrial storage and precision piping components facility"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-3 text-[11px] text-slate-400 italic text-center">
                Organized components inventory and precision fitting inspection
              </div>
            </div>

            {/* Right Text Introduction */}
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-bold uppercase tracking-widest text-steel-700">
                OUR APPROACH
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-navy-950 tracking-tight leading-snug">
                Specification-First Steel Sourcing
              </h2>
              
              <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                <p>
                  Industrial piping, structural fabrication, and chemical process equipment operate under stringent pressure, temperature, and corrosive factors. At SteelIndia, our philosophy begins with understanding the application: whether your system demands high tensile strength, chloride pitting resistance, or precise dimensional tolerances.
                </p>
                <p>
                  We facilitate access to a wide catalog of steel categories—from standard stainless steel and carbon steel to specialized nickel superalloys and duplex families—ensuring that every quotation aligns with client project requirements and applicable international standards.
                </p>
              </div>

              {/* Demo Notice Alert */}
              <div className="p-4 rounded-lg bg-amber-50/70 border border-amber-200 text-xs text-amber-900 flex items-start space-x-2.5">
                <HelpCircle className="w-4 h-4 text-industrial-amber shrink-0 mt-0.5" />
                <p>
                  <span className="font-semibold">Note for client:</span> Company history, establishment details, operational locations, and facility certifications shown on this website use clearly editable demo copy and will be tailored upon receipt of official company records.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-lg bg-steel-100 text-steel-700 flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-navy-950">Our Mission</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                To simplify the procurement of industrial steel and specialty alloys by providing accurate technical specification matching, prompt customer communication, and reliable documentation support for critical engineering projects.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-lg bg-amber-100 text-industrial-amber flex items-center justify-center">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-navy-950">Our Vision</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                To emerge as a trusted, globally recognized steel supply partner renowned for transparency in grade verification, dependable project coordination, and customer-focused service across international borders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Inquiry Process (4-Step Visual Flow) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-3 mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-steel-700 bg-steel-50 px-3.5 py-1 rounded-full border border-steel-200">
              TRANSPARENT WORKFLOW
            </span>
            <h2 className="text-3xl font-extrabold text-navy-950">
              Customer Inquiry & Supply Process
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              A structured, step-by-step approach ensuring clear specifications from initial RFQ to final documentation dispatch.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {/* Step 1 */}
            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 space-y-3 relative group hover:border-steel-400 transition-colors">
              <div className="text-3xl font-extrabold text-slate-300 font-mono group-hover:text-industrial-amber transition-colors">
                01
              </div>
              <h4 className="text-base font-bold text-navy-950">Inquiry Submission</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Submit product specifications, dimensions, required material grades, quantities, and applicable ASTM/ASME standards.
              </p>
            </div>

            {/* Step 2 */}
            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 space-y-3 relative group hover:border-steel-400 transition-colors">
              <div className="text-3xl font-extrabold text-slate-300 font-mono group-hover:text-industrial-amber transition-colors">
                02
              </div>
              <h4 className="text-base font-bold text-navy-950">Technical Evaluation</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Our team reviews dimensional tolerances, chemistry criteria, test requirements (e.g. PMI, NDT), and production lead times.
              </p>
            </div>

            {/* Step 3 */}
            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 space-y-3 relative group hover:border-steel-400 transition-colors">
              <div className="text-3xl font-extrabold text-slate-300 font-mono group-hover:text-industrial-amber transition-colors">
                03
              </div>
              <h4 className="text-base font-bold text-navy-950">Quotation & Alignment</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Receive commercial terms, packaging details, and verification of Mill Test Certificate (MTC) availability.
              </p>
            </div>

            {/* Step 4 */}
            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 space-y-3 relative group hover:border-steel-400 transition-colors">
              <div className="text-3xl font-extrabold text-slate-300 font-mono group-hover:text-industrial-amber transition-colors">
                04
              </div>
              <h4 className="text-base font-bold text-navy-950">Fulfillment & Dossiers</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Orders are packed with heat number stenciling and dispatched accompanied by full quality test dossiers and documentation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-navy-950 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Ready to Discuss Your Project Specifications?
          </h2>
          <p className="text-sm text-slate-300 max-w-xl mx-auto">
            Contact our inquiry desk today for responsive technical review of your steel product and material requirements.
          </p>
          <div className="flex justify-center gap-4 pt-2">
            <Link
              to="/contact"
              className="px-6 py-3 rounded-lg text-sm font-bold text-white bg-industrial-amber hover:bg-industrial-hover shadow transition-colors"
            >
              Get in Touch with Our Team
            </Link>
            <Link
              to="/product"
              className="px-6 py-3 rounded-lg text-sm font-bold text-slate-800 bg-white hover:bg-slate-100 transition-colors"
            >
              Explore Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
