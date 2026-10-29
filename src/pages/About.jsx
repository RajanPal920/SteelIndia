import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';
import SEO from '../components/SEO';
import {
  ShieldCheck, CheckCircle2, ArrowRight, Target,
  Compass, FileCheck2, Users2, Layers, Boxes, Clock,
  Award, TrendingUp, Factory, Check, MapPin
} from 'lucide-react';

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-left font-sans">
      <SEO
        title="About Steel India Co. (Chennai) Pvt. Ltd. | Since 1990"
        description="Learn about Steel India Co. (Chennai) Pvt. Ltd., established in 1990. A trusted manufacturer, importer, dealer, supplier, and stockist of stainless steel, carbon steel, and mild steel products."
      />

      <Breadcrumb items={[{ label: 'About Us' }]} />

      {/* Page Hero - Brand Red Theme */}
      <section className="bg-[#E3000F] text-white py-14 sm:py-20 relative overflow-hidden">
        {/* Decorative Blue Accent Line from Logo */}
        <div className="absolute top-0 left-0 w-full h-2 bg-[#0055A4]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#E3000F] bg-white px-4 py-1.5 rounded-full shadow-sm">
              COMPANY PROFILE
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white drop-shadow-md">
              Steel India Co. <br className="hidden sm:block" /> (Chennai) Pvt. Ltd.
            </h1>
            <p className="text-base sm:text-lg text-white/90 leading-relaxed">
              Established in 1990, we are a premier manufacturer, importer, dealer, supplier, and stockist of high-grade stainless steel, carbon steel, and mild steel products. Serving industry across India and globally from the heart of Chennai.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content: Legacy & Overview */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            {/* Left Image Showcase */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200 aspect-[4/5] bg-slate-100 relative group">
                <img
                  src="/images/about-showcase.jpg"
                  alt="Steel India Co. industrial steel pipes and fittings inventory"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/95 backdrop-blur-sm p-4 rounded-xl border border-white/20 shadow-lg">
                    <div className="flex items-center gap-3">
                      <div className="bg-[#E3000F] p-2 rounded-lg text-white">
                        <Award className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="text-2xl font-extrabold text-[#0055A4] leading-none">30+</div>
                        <div className="text-[11px] font-bold text-slate-600 uppercase tracking-widest mt-1">Years of Trust</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Text Introduction */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#E3000F]">
                WHO WE ARE
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold text-[#0055A4] tracking-tight leading-snug">
                Your Trusted Partner in Industrial Metals Since 1990
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                <p>
                  <strong className="text-slate-800">Steel India Co. (Chennai) Pvt. Ltd.</strong> commenced its journey in the year 1990. Over the decades, we have grown to become one of the most trustworthy manufacturers, importers, dealers, suppliers, and stockists of Stainless Steel products.
                </p>
                <p>
                  Headquartered in the historic trading district of Sowcarpet, Chennai, our operations span across India with dedicated branch presence in <strong>Anantapur, Bangalore, and Mumbai</strong>. We also import high-quality products to meet diverse industrial demands.
                </p>
                <p>
                  We never compromise on quality, which makes us a preferred choice among our competitors. Quality norms are strictly followed not only during procurement but stretch all the way to final delivery. After receiving client requests, we ensure prompt delivery within the defined timeframe while maintaining constant touch to understand exact requirements.
                </p>
              </div>

              {/* Core Values / Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-100">
                <div className="flex items-start gap-3">
                  <div className="bg-blue-50 text-[#0055A4] p-2 rounded-lg shrink-0 mt-1">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm">100% Customer Satisfaction</h4>
                    <p className="text-xs text-slate-500 mt-1">Client-oriented organization providing qualitative products in diverse specifications.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-red-50 text-[#E3000F] p-2 rounded-lg shrink-0 mt-1">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm">Uncompromising Quality</h4>
                    <p className="text-xs text-slate-500 mt-1">Fair business policies and transparency in every transaction.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Secret of Success & Product Portfolio */}
      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

            {/* Secret of Success */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#E3000F]/5 rounded-bl-full"></div>
              <h3 className="text-xl font-bold text-[#0055A4] mb-4 flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-[#E3000F]" />
                Our Secret of Success
              </h3>
              <div className="bg-blue-50/50 p-5 rounded-xl border border-blue-100 mb-4">
                <p className="text-slate-700 font-medium italic text-sm leading-relaxed">
                  "Industrial experience blended with quality, commitment, promptness, punctuality & trustworthiness has been our <strong className="text-[#E3000F]">SECRET OF SUCCESS</strong>. The quality-oriented customer who once experiences our empathetic approach really wants us by all means, which has been our <strong className="text-[#0055A4]">STRENGTH</strong>. We enjoy serving you."
                </p>
                <div className="text-right mt-3 text-xs font-bold text-slate-500 uppercase tracking-widest">— The Owners</div>
              </div>
              <p className="text-sm text-slate-600">
                Owing to our mentor's industrial experience and managerial skills, we have attained a huge success rate. By adopting fair business policies and transparency, we ensure complete client satisfaction.
              </p>
            </div>

            {/* Product Portfolio */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-xl font-bold text-[#0055A4] mb-4 flex items-center gap-2">
                <Boxes className="w-6 h-6 text-[#E3000F]" />
                Our Product Portfolios
              </h3>
              <p className="text-sm text-slate-600 mb-4">
                Since our commencement, we have been executing business operations smoothly with a vast plethora of industrial raw materials:
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  'Stainless Steel', 'Carbon Steel', 'Mild Steel', 'Plates', 'Pipes', 'Tubes',
                  'Flats', 'Angles', 'Rods', 'Channels', 'Sheets', 'Coils', 'Chequered Plates',
                  'Flanges', 'Fasteners', 'Buttweld Fittings', 'Forged Fittings', 'Valves'
                ].map((item, idx) => (
                  <span key={idx} className="bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1.5 rounded-md border border-slate-200">
                    {item}
                  </span>
                ))}
              </div>
              <p className="text-xs text-slate-500 mt-4 border-t border-slate-100 pt-3">
                * Any non-standard size can be provided as per specific client requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4 hover:border-[#0055A4] transition-colors group">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0055A4] flex items-center justify-center group-hover:bg-[#0055A4] group-hover:text-white transition-colors">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-800">Our Mission</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                To simplify the procurement of industrial steel and specialty alloys by providing accurate technical specification matching, prompt customer communication, and reliable documentation support for critical engineering projects. We strive to deliver these products within the defined time frame, keeping constant touch with clients to know their exact requirements.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4 hover:border-[#E3000F] transition-colors group">
              <div className="w-12 h-12 rounded-xl bg-red-50 text-[#E3000F] flex items-center justify-center group-hover:bg-[#E3000F] group-hover:text-white transition-colors">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-800">Our Vision</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                To emerge as a globally recognized steel supply partner renowned for transparency in grade verification, dependable project coordination, and customer-focused service across international borders. We aim to be the preferred choice for clients by maintaining fair business policies and providing a broad spectrum of quality products.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Inquiry Process (4-Step Visual Flow) */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-3 mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E3000F] bg-red-50 px-3.5 py-1 rounded-full border border-red-100">
              TRANSPARENT WORKFLOW
            </span>
            <h2 className="text-3xl font-extrabold text-[#0055A4]">
              Customer Inquiry & Supply Process
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              A structured, step-by-step approach ensuring clear specifications from initial RFQ to final documentation dispatch.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {/* Step 1 */}
            <div className="p-6 rounded-xl bg-white border border-slate-200 space-y-3 relative group hover:border-[#0055A4] hover:shadow-md transition-all">
              <div className="text-3xl font-extrabold text-slate-200 font-mono group-hover:text-[#E3000F] transition-colors">
                01
              </div>
              <h4 className="text-base font-bold text-slate-800">Inquiry Submission</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Submit product specifications, dimensions, required material grades, quantities, and applicable ASTM/ASME standards.
              </p>
            </div>

            {/* Step 2 */}
            <div className="p-6 rounded-xl bg-white border border-slate-200 space-y-3 relative group hover:border-[#0055A4] hover:shadow-md transition-all">
              <div className="text-3xl font-extrabold text-slate-200 font-mono group-hover:text-[#E3000F] transition-colors">
                02
              </div>
              <h4 className="text-base font-bold text-slate-800">Technical Evaluation</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Our team reviews dimensional tolerances, chemistry criteria, test requirements (e.g. PMI, NDT), and production lead times.
              </p>
            </div>

            {/* Step 3 */}
            <div className="p-6 rounded-xl bg-white border border-slate-200 space-y-3 relative group hover:border-[#0055A4] hover:shadow-md transition-all">
              <div className="text-3xl font-extrabold text-slate-200 font-mono group-hover:text-[#E3000F] transition-colors">
                03
              </div>
              <h4 className="text-base font-bold text-slate-800">Quotation & Alignment</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Receive commercial terms, packaging details, and verification of Mill Test Certificate (MTC) availability.
              </p>
            </div>

            {/* Step 4 */}
            <div className="p-6 rounded-xl bg-white border border-slate-200 space-y-3 relative group hover:border-[#0055A4] hover:shadow-md transition-all">
              <div className="text-3xl font-extrabold text-slate-200 font-mono group-hover:text-[#E3000F] transition-colors">
                04
              </div>
              <h4 className="text-base font-bold text-slate-800">Fulfillment & Dossiers</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Orders are packed with heat number stenciling and dispatched accompanied by full quality test dossiers and documentation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-[#0055A4] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <h2 className="text-2xl sm:text-4xl font-bold text-white">
            Ready to Discuss Your Project Specifications?
          </h2>
          <p className="text-sm sm:text-base text-blue-100 max-w-xl mx-auto">
            Contact our inquiry desk today for responsive technical review of your steel product and material requirements.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Link
              to="/contact"
              className="px-8 py-3.5 rounded-lg text-sm font-bold text-white bg-[#E3000F] hover:bg-red-700 shadow-lg transition-colors"
            >
              Get in Touch with Our Team
            </Link>
            <Link
              to="/product"
              className="px-8 py-3.5 rounded-lg text-sm font-bold text-[#0055A4] bg-white hover:bg-slate-100 transition-colors shadow-lg"
            >
              Explore Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}