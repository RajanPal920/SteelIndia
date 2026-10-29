import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';
import InquiryForm from '../components/InquiryForm';
import SEO from '../components/SEO';
import { products } from '../data/products';
import {
  CheckCircle2, ArrowRight, ShieldCheck, FileText,
  ChevronRight, Box, Compass, Factory, Layers,
  Download, HelpCircle, PackageCheck // Naye icons import kiye hain
} from 'lucide-react';

export default function ProductCategory() {
  const { category } = useParams();

  const product = products.find(p => p.id === category);

  if (!product) {
    return <Navigate to="/product" replace />;
  }

  // Related products (next 3)
  const relatedProducts = products
    .filter(p => p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-left font-sans">
      <SEO
        title={`${product.name} Specifications | Steel India Co.`}
        description={product.shortDesc}
      />

      <Breadcrumb
        items={[
          { label: 'Products', to: '/product' },
          { label: product.name }
        ]}
      />

      {/* --- HERO SECTION --- */}
      <section className="bg-white border-b border-slate-200 py-10 sm:py-14 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(#0055A4 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

            {/* Left: Text Content */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0055A4] bg-blue-50 px-3 py-1.5 rounded-full border border-blue-100 shadow-sm">
                <Factory className="w-3.5 h-3.5 text-[#E3000F]" />
                {product.tag}
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0055A4] tracking-tight leading-tight">
                {product.name}
              </h1>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl border-l-4 border-[#E3000F] pl-4">
                {product.shortDesc}
              </p>

              <div className="pt-4 flex flex-wrap gap-4">
                <a
                  href="#inquiry-form"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-bold text-white bg-[#E3000F] hover:bg-[#C2000D] transition-colors shadow-sm"
                >
                  Request a Quote
                </a>
                <a
                  href="#tech-specs"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-bold text-[#0055A4] bg-white border-2 border-[#0055A4] hover:bg-blue-50 transition-colors"
                >
                  View Specifications
                </a>
              </div>
            </div>

            {/* Right: Image Showcase */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="w-full max-w-md aspect-[4/3] rounded-2xl bg-white border border-slate-200 p-6 shadow-lg relative group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-red-50 rounded-bl-full opacity-50 -mr-2 -mt-2 pointer-events-none" />
                <img
                  src={product.image}
                  alt={`${product.name} visual showcase`}
                  className="w-full h-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-4 left-4 bg-[#0055A4] text-white text-[10px] font-bold px-2.5 py-1 rounded shadow-sm">
                  PRIME QUALITY
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- MAIN DETAILS SECTION --- */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

            {/* LEFT COLUMN: Technical Data (7 Cols) */}
            <div className="lg:col-span-7 space-y-8">

              {/* 1. Engineering Overview */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
                <h2 className="text-xl font-bold text-[#0055A4] mb-3 flex items-center gap-2">
                  <Box className="w-5 h-5 text-[#E3000F]" />
                  Engineering Overview
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed text-justify">
                  {product.longDesc}
                </p>
              </div>

              {/* 2. Technical Specifications */}
              <div id="tech-specs" className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm scroll-mt-24">
                <div className="bg-[#0055A4] px-6 py-4">
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <FileText className="w-5 h-5" />
                    Technical Specifications
                  </h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm text-left">
                    <tbody className="divide-y divide-slate-100">
                      {Object.entries(product.specs).map(([key, val], idx) => (
                        <tr key={key} className={idx % 2 === 0 ? 'bg-white hover:bg-slate-50 transition-colors' : 'bg-slate-50/50 hover:bg-slate-100 transition-colors'}>
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

              {/* 3. Supported Materials */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
                <h3 className="text-lg font-bold text-[#0055A4] mb-2 flex items-center gap-2">
                  <Layers className="w-5 h-5 text-[#E3000F]" />
                  Supported Material Grades
                </h3>
                <p className="text-xs text-slate-500 mb-4">
                  Available across the following alloy classifications (subject to inquiry confirmation):
                </p>
                <div className="flex flex-wrap gap-2">
                  {product.materials.map((mat, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-lg text-xs font-bold bg-slate-50 text-slate-700 border border-slate-200 hover:border-[#0055A4] hover:text-[#0055A4] transition-colors cursor-default"
                    >
                      {mat}
                    </span>
                  ))}
                </div>
              </div>

              {/* 4. Features & Applications Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
                  <h3 className="text-base font-bold text-[#0055A4] mb-4 flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-[#E3000F]" />
                    Key Features
                  </h3>
                  <ul className="space-y-3">
                    {product.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-xs sm:text-sm text-slate-600">
                        <CheckCircle2 className="w-4 h-4 text-[#0055A4] shrink-0 mt-0.5" />
                        <span className="leading-snug">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
                  <h3 className="text-base font-bold text-[#0055A4] mb-4 flex items-center gap-2">
                    <Compass className="w-5 h-5 text-[#E3000F]" />
                    Applications
                  </h3>
                  <div className="space-y-2 text-xs text-slate-700">
                    {product.applications.map((app, idx) => (
                      <div key={idx} className="p-2.5 bg-slate-50 rounded-lg border border-slate-100 flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#E3000F]"></span>
                        <span className="font-medium">{app}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* --- NAYA SECTION: GAP FILLER (Packaging & Delivery) --- */}
              {/* Ye section left side ki height badhayega aur space bharega */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
                <h3 className="text-lg font-bold text-[#0055A4] mb-4 flex items-center gap-2">
                  <PackageCheck className="w-5 h-5 text-[#E3000F]" />
                  Packaging & Delivery Information
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-600">
                  <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg border border-slate-100">
                    <CheckCircle2 className="w-4 h-4 text-[#0055A4] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-slate-800 block mb-1">Standard Packing</span>
                      Sea-worthy wooden crates, hex-bundling, and plastic end caps to prevent transit damage.
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg border border-slate-100">
                    <CheckCircle2 className="w-4 h-4 text-[#0055A4] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-slate-800 block mb-1">Documentation</span>
                      Mill Test Certificates (EN 10204 3.1), Certificate of Origin, and packing lists included.
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg border border-slate-100">
                    <CheckCircle2 className="w-4 h-4 text-[#0055A4] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-slate-800 block mb-1">Logistics Support</span>
                      Domestic transport via road, and international sea freight (FOB/CIF) from Chennai port.
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg border border-slate-100">
                    <CheckCircle2 className="w-4 h-4 text-[#0055A4] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-slate-800 block mb-1">Custom Sizes</span>
                      Cut-to-length and custom dimensional fabrication available on special request.
                    </div>
                  </div>
                </div>
              </div>

              {/* --- NAYA SECTION: FAQ / HELP (Gap Filler 2) --- */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
                <h3 className="text-lg font-bold text-[#0055A4] mb-4 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-[#E3000F]" />
                  Common Questions About This Product
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="p-3 rounded-lg bg-slate-50 border border-slate-100">
                    <div className="font-bold text-slate-800 mb-1">What is the minimum order quantity?</div>
                    <div className="text-xs text-slate-600">We cater to both small-scale procurement and bulk industrial projects. Please submit your exact requirement for a tailored quote.</div>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-50 border border-slate-100">
                    <div className="font-bold text-slate-800 mb-1">Do you provide third-party inspection?</div>
                    <div className="text-xs text-slate-600">Yes, we coordinate with agencies like SGS, TUV, and Bureau Veritas as per client requirements.</div>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-50 border border-slate-100">
                    <div className="font-bold text-slate-800 mb-1">Can you supply custom dimensions?</div>
                    <div className="text-xs text-slate-600">Absolutely. We provide cut-to-size, beveled, and custom-machined components based on your engineering drawings.</div>
                  </div>
                </div>
              </div>

            </div>

            {/* RIGHT COLUMN: Sticky Sidebar (5 Cols - Widened) */}
            <div className="lg:col-span-5">
              <div className="sticky top-24 space-y-6">

                {/* Inquiry Form Box */}
                <div id="inquiry-form" className="scroll-mt-24 w-full">
                  <div className="bg-white rounded-2xl border border-slate-200 shadow-lg overflow-hidden">
                    <div className="bg-[#E3000F] px-6 py-4">
                      <h3 className="text-white font-bold text-lg">Request a Quote</h3>
                      <p className="text-white/80 text-xs mt-1">Fill out the details for {product.name}.</p>
                    </div>
                    <div className="p-5 sm:p-6">
                      <InquiryForm
                        defaultCategory={product.name}
                        title=""
                      />
                    </div>
                  </div>
                </div>

                {/* Related Product Cards */}
                <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4 border-b border-slate-100 pb-2 flex items-center justify-between">
                    <span>Related Categories</span>
                    <Link to="/product" className="text-[#0055A4] hover:text-[#E3000F] normal-case font-semibold">View All</Link>
                  </div>

                  <div className="space-y-3">
                    {relatedProducts.map((rel) => (
                      <Link
                        key={rel.id}
                        to={`/product/${rel.id}`}
                        className="group flex items-center gap-4 p-2 rounded-xl bg-slate-50 border border-slate-200 hover:border-[#0055A4] hover:bg-white transition-all"
                      >
                        <div className="w-16 h-16 rounded-lg bg-white border border-slate-200 flex items-center justify-center p-2 shrink-0">
                          <img
                            src={rel.image}
                            alt={rel.name}
                            className="w-full h-full object-contain mix-blend-multiply"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-bold text-slate-800 group-hover:text-[#0055A4] transition-colors truncate">
                            {rel.name}
                          </h4>
                          <p className="text-[10px] text-slate-500 font-mono mt-0.5 truncate">
                            {rel.specs?.standards?.split(',')[0] || 'ASME / ASTM'}
                          </p>
                        </div>
                        <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#E3000F] group-hover:translate-x-1 transition-all shrink-0" />
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Support Box */}
                <div className="bg-[#0055A4] rounded-2xl p-5 text-white text-center shadow-md">
                  <ShieldCheck className="w-8 h-8 mx-auto mb-2 text-white/80" />
                  <h4 className="font-bold text-sm">Need Technical Assistance?</h4>
                  <p className="text-xs text-white/80 mt-1 mb-3">Our engineering team is here to help you with specifications.</p>
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