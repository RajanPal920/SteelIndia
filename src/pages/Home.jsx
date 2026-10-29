import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import HeroSlider from '../components/HeroSlider';
import Marquee from '../components/Marquee';
import ProductCard from '../components/ProductCard';
import MaterialCard from '../components/MaterialCard';
import IndustryCard from '../components/IndustryCard';
import CountryGrid from '../components/CountryGrid';
import InquiryForm from '../components/InquiryForm';
import FAQAccordion from '../components/FAQAccordion';
import Reveal from '../components/Reveal';
import SEO from '../components/SEO';
import { products } from '../data/products';
import { materials } from '../data/materials';
import { industries } from '../data/industries';
import {
  ArrowRight, ShieldCheck, CheckCircle2, FileCheck2,
  Layers, Compass, Headphones, MessageSquare, Globe,
  Boxes, Sliders, Mail, Phone, MapPin, Clock, ExternalLink,
  Award,
  Factory
} from 'lucide-react';

// Exact 8 product categories for the homepage in specified order
const HOMEPAGE_PRODUCT_ORDER = [
  'butt-weld-fittings',
  'forged-fittings',
  'pipes-tubes',
  'sheets-plates',
  'flanges',
  'fasteners',
  'rods-bars',
  'ferrule-fittings'
];

export default function Home() {
  // Filter and sort exactly the 8 homepage product categories
  const homepageProducts = useMemo(() => {
    return HOMEPAGE_PRODUCT_ORDER
      .map(id => products.find(p => p.id === id))
      .filter(Boolean);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <SEO
        title="SteelIndia | Precision Industrial Steel, Pipes, Fittings & Alloys Supply"
        description="Explore quality steel pipes, tubes, sheets, plates, flanges, fittings and high-performance alloys for engineering, energy and infrastructure requirements."
      />

      {/* 1. Full-Width Hero Image Slider */}
      <HeroSlider />

      {/* 2. Industrial Continuous Marquee (Continuous Right-to-Left Loop) */}
      <Marquee />

      {/* 4. About SteelIndia — Homepage Section (Fresh Split Layout) */}
      <section className="py-16 sm:py-20 bg-slate-50 border-y border-slate-200" id="about-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

            {/* Left Image: Organized Industrial Setting */}
            <div className="lg:col-span-6 relative">
              <Reveal>
                <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200/90 aspect-[4/3] bg-white group relative">
                  <img
                    src="/images/about-showcase.jpg"
                    alt="Steel India Co. Chennai - Industrial steel pipes, flanges and fittings warehouse"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Subtle overlay for text readability if needed, kept clean here */}
                </div>

                {/* Float Badge: Since 1990 */}
                <div className="absolute -bottom-5 -right-5 hidden sm:flex items-center space-x-3 bg-[#E3000F] text-white p-4 rounded-xl shadow-xl border border-red-700">
                  <Award className="w-8 h-8 text-white" />
                  <div className="text-left">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-white/80">Trusted Since</div>
                    <div className="text-xl font-extrabold text-white leading-none">1990</div>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right Side: Introduction & Highlights */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <Reveal delay={100}>
                <div className="space-y-3">
                  <span className="text-xs font-bold tracking-widest uppercase text-[#E3000F] bg-red-50 px-3 py-1 rounded-full border border-red-100 inline-block">
                    ABOUT STEEL INDIA CO.
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0055A4] tracking-tight leading-tight">
                    Your Trusted Partner in Industrial Metals
                  </h2>
                </div>

                <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed pt-2">
                  <p>
                    <strong className="text-slate-900">Steel India Co. (Chennai) Pvt. Ltd.</strong> commenced its journey in <strong>1990</strong>. Over three decades, we have grown to become a premier manufacturer, importer, dealer, supplier, and stockist of Stainless Steel, Carbon Steel, and Mild Steel products.
                  </p>
                  <p>
                    Headquartered in Chennai with branches in <strong>Anantapur, Bangalore, and Mumbai</strong>, our product portfolio includes Pipes, Tubes, Sheets, Plates, Coils, Flanges, Fasteners, Buttweld Fittings, Forged Fittings, and Valves. We never compromise on quality, ensuring strict norms from procurement to final delivery.
                  </p>
                </div>

                {/* 3 Compact Highlights - Aligned with PDF Data */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                  <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1.5 hover:border-[#0055A4] transition-colors group">
                    <Factory className="w-5 h-5 text-[#0055A4] mb-1 group-hover:text-[#E3000F] transition-colors" />
                    <div className="text-xs font-bold text-slate-900">Wide Product Range</div>
                    <div className="text-[11px] text-slate-500 leading-snug">
                      Pipes, Tubes, Flanges, Fasteners, and Fittings.
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1.5 hover:border-[#0055A4] transition-colors group">
                    <ShieldCheck className="w-5 h-5 text-[#0055A4] mb-1 group-hover:text-[#E3000F] transition-colors" />
                    <div className="text-xs font-bold text-slate-900">100% Satisfaction</div>
                    <div className="text-[11px] text-slate-500 leading-snug">
                      Quality norms followed strictly from procurement to delivery.
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1.5 hover:border-[#0055A4] transition-colors group">
                    <MapPin className="w-5 h-5 text-[#0055A4] mb-1 group-hover:text-[#E3000F] transition-colors" />
                    <div className="text-xs font-bold text-slate-900">Pan-India Presence</div>
                    <div className="text-[11px] text-slate-500 leading-snug">
                      Chennai, Mumbai, Bangalore, and Anantapur.
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <Link
                    to="/about"
                    className="inline-flex items-center space-x-2 px-6 py-3 rounded-lg text-sm font-bold text-white bg-[#0055A4] hover:bg-[#003d7a] shadow-sm transition-all duration-200 group"
                  >
                    <span>Discover Our Legacy</span>
                    <ArrowRight className="w-4 h-4 text-white transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Our Product Range Section — Unique Architectural Bento Layout for 8 Cards */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200" id="products-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          {/* Section Header */}
          <Reveal>
            <div className="max-w-3xl mx-auto space-y-3">
              <div className="inline-flex items-center space-x-2 bg-blue-50 px-3.5 py-1 rounded-full border border-blue-100">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E3000F] animate-pulse" />
                <span className="text-xs font-bold tracking-widest uppercase text-[#0055A4]">
                  Core Product Portfolio
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0055A4] tracking-tight">
                Steel Products for Every Industrial Need
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Explore our range of steel products including Pipes, Tubes, Sheets, Plates, Flanges, Fasteners, and Fittings, designed to support diverse industrial and engineering requirements.
              </p>
            </div>
          </Reveal>

          {/* Asymmetric Bento Showcase: 2 Flagship Horizontal + 6 Precision Vertical */}
          <div className="mt-12 sm:mt-14 space-y-6">

            {/* Top Tier: 2 Flagship Engineering Horizontal Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {homepageProducts.slice(0, 2).map((product, idx) => (
                <Reveal key={product.id} delay={idx * 100}>
                  <ProductCard product={product} variant="featured" index={idx} />
                </Reveal>
              ))}
            </div>

            {/* Bottom Tier: 6 Precision Staggered Cards (3 Columns) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {homepageProducts.slice(2).map((product, idx) => (
                <Reveal key={product.id} delay={(idx % 3) * 80 + 150}>
                  <ProductCard product={product} variant="standard" index={idx + 2} />
                </Reveal>
              ))}
            </div>
          </div>

          {/* View All Products CTA */}
          <Reveal delay={200}>
            <div className="mt-12">
              <Link
                to="/product"
                className="group inline-flex items-center space-x-2 px-8 py-4 rounded-lg text-sm font-bold text-white bg-[#E3000F] hover:bg-[#C2000D] shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
              >
                <span>View All 17 Product Categories</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>

        </div>
      </section>

      {/* 9. Quality, Specifications & Documentation Section */}
      <section className="py-16 sm:py-20 bg-white" id="quality-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-8 sm:p-12 text-left relative overflow-hidden">

              {/* Decorative Background Accent */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-60 pointer-events-none"></div>

              <div className="max-w-3xl space-y-3 relative z-10">
                <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#E3000F] bg-red-50 px-3 py-1 rounded-full border border-red-100">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Verification & Compliance
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0055A4] tracking-tight">
                  Quality, Specifications & Documentation
                </h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Product selection can be discussed according to the customer's required material grade, dimensions, applicable specifications, and documentation requirements. All our products adhere to international standards.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
                {/* Card 1 */}
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:border-[#0055A4] hover:shadow-md transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-lg bg-blue-50 text-[#0055A4] flex items-center justify-center font-bold text-lg mb-4 group-hover:bg-[#0055A4] group-hover:text-white transition-colors">
                    01
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">Material & Grade Requirements</h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                    Review chemical compositions, mechanical yield/tensile strength, and corrosion-resistance characteristics against ASTM, ASME, DIN, or customer specifications.
                  </p>
                </div>

                {/* Card 2 */}
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:border-[#0055A4] hover:shadow-md transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-lg bg-blue-50 text-[#0055A4] flex items-center justify-center font-bold text-lg mb-4 group-hover:bg-[#0055A4] group-hover:text-white transition-colors">
                    02
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">Product Dimensions & Specs</h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                    Confirmation of outer diameter, nominal bore (NB), wall thickness (SCH 10 to XXS), length, end preparations (beveled/threaded), and surface finishes.
                  </p>
                </div>

                {/* Card 3 */}
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:border-[#0055A4] hover:shadow-md transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-lg bg-blue-50 text-[#0055A4] flex items-center justify-center font-bold text-lg mb-4 group-hover:bg-[#0055A4] group-hover:text-white transition-colors">
                    03
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">Certificate & Test Inquiries</h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                    Discussion of Mill Test Certificates (EN 10204 3.1 / 3.2), PMI reports, Ultrasonic/Radiographic NDT examination, and third-party witness inspection.
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200 relative z-10 flex flex-wrap items-center justify-between gap-4">
                <span className="text-xs text-slate-500 font-medium">
                  All certificates, test dossiers, and documentation are reviewed based on mutual project agreement.
                </span>
                <Link
                  to="/certificate"
                  className="inline-flex items-center space-x-2 px-6 py-3 rounded-lg text-sm font-bold text-white bg-[#0055A4] hover:bg-[#003d7a] shadow-sm transition-all duration-200 group"
                >
                  <span>Discuss Your Requirements</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 5. Material Range Section (Continuous Left-to-Right Marquee) */}
      <section className="py-16 sm:py-20 bg-slate-50 overflow-hidden border-y border-slate-200" id="materials-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <div className="max-w-3xl mx-auto space-y-3">

              {/* Section Badge */}
              <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#0055A4] bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E3000F] animate-pulse"></span>
                Metallurgical Diversity
              </span>

              {/* Section Heading */}
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0055A4] tracking-tight">
                Explore Our Material Range
              </h2>

              {/* Section Description */}
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                We cater to diverse industrial environments with standard and high-performance material families.
                Material families shown as available categories; specific grade availability confirmed on inquiry.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Continuous Right-to-Left Marquee Track */}
        <div className="mt-10 sm:mt-12 relative w-full overflow-hidden group">

          {/* Subtle Left and Right Edge Gradient Masks */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-slate-50 via-slate-50/90 to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-slate-50 via-slate-50/90 to-transparent z-10" />

          {/* Marquee Track - Changed to Right to Left (marquee-rtl) */}
          <div className="flex w-max animate-marquee-rtl hover:[animation-play-state:paused] py-4">

            {/* Track 1 (All 15 Material Cards) */}
            <div className="flex shrink-0 items-stretch space-x-5 pr-5">
              {materials.map((material) => (
                <div key={`m1-${material.id}`} className="w-[280px] sm:w-[320px] shrink-0 flex">
                  <MaterialCard material={material} className="w-full" />
                </div>
              ))}
            </div>

            {/* Track 2 (Clone for 100% gapless loop) */}
            <div className="flex shrink-0 items-stretch space-x-5 pr-5" aria-hidden="true">
              {materials.map((material) => (
                <div key={`m2-${material.id}`} className="w-[280px] sm:w-[320px] shrink-0 flex">
                  <MaterialCard material={material} className="w-full" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          {/* Live Status Indicator */}
          <div className="mt-3 flex items-center justify-center space-x-2 text-xs text-slate-500 font-medium">
            <span className="w-2 h-2 rounded-full bg-[#E3000F] animate-pulse"></span>
            <span>Continuous Stream &bull; Hover card to pause</span>
          </div>

          {/* CTA Button - Shadow Removed */}
          <Reveal delay={200}>
            <div className="mt-8 sm:mt-10">
              <Link
                to="/material"
                className="group inline-flex items-center space-x-2 px-7 py-3.5 rounded-lg text-sm font-bold text-white bg-[#0055A4] hover:bg-[#003d7a] transition-colors duration-200"
              >
                <span>Explore Complete Material Specifications</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 6. Industries We Serve — 4-Column Responsive Card Grid (Prompt-aligned) */}
      <section className="py-16 sm:py-24 bg-white border-t border-slate-200" id="industries-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Header */}
          <Reveal>
            <div className="max-w-3xl mx-auto text-center space-y-3 mb-10 sm:mb-14">
              <div className="inline-flex items-center space-x-2 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E3000F] animate-pulse" />
                <span className="text-xs font-bold tracking-widest uppercase text-[#0055A4]">
                  APPLICATION SECTORS
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0055A4] tracking-tight">
                Industries We Serve
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Delivering reliable steel solutions for diverse industries worldwide. From petrochemical plants to power generation, our products support critical applications.
              </p>
            </div>
          </Reveal>

          {/* Responsive Grid: 4 → 2 → 1 cards per row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {industries.map((industry, index) => (
              <Reveal key={industry.id ?? index} delay={index * 60}>
                <IndustryCard industry={industry} />
              </Reveal>
            ))}
          </div>

        </div>
      </section>

      {/* 7. Why Choose SteelIndia */}
      <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200" id="why-choose-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          {/* Section Header */}
          <Reveal>
            <div className="max-w-3xl mx-auto space-y-3">
              <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#0055A4] bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E3000F] animate-pulse" />
                Trust & Integrity
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0055A4] tracking-tight">
                Why Choose SteelIndia?
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Structured to support client specifications with clarity, responsive communication, and comprehensive documentation.
                Our 30+ years of industrial experience ensures reliable supply.
              </p>
            </div>
          </Reveal>

          {/* Grid of 6 Cards */}
          <div className="mt-12 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">

            {/* Card 1 */}
            <Reveal delay={0}>
              <div className="p-6 rounded-xl border border-slate-200 hover:border-[#0055A4] hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white space-y-3 group">
                <div className="w-12 h-12 rounded-lg bg-blue-50 text-[#0055A4] flex items-center justify-center border border-blue-100 group-hover:bg-[#0055A4] group-hover:text-white transition-colors">
                  <Boxes className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-[#0055A4] transition-colors">
                  Wide Product Selection
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  From seamless pipes and fittings to forged flanges, fasteners, and drawn wires, source comprehensive steel categories under one roof.
                </p>
              </div>
            </Reveal>

            {/* Card 2 */}
            <Reveal delay={80}>
              <div className="p-6 rounded-xl border border-slate-200 hover:border-[#0055A4] hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white space-y-3 group">
                <div className="w-12 h-12 rounded-lg bg-blue-50 text-[#0055A4] flex items-center justify-center border border-blue-100 group-hover:bg-[#0055A4] group-hover:text-white transition-colors">
                  <Layers className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-[#0055A4] transition-colors">
                  Multiple Material Categories
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Extensive support across 15 material families, including commercial stainless steel, high-pressure carbon steel, duplex, and nickel alloys.
                </p>
              </div>
            </Reveal>

            {/* Card 3 */}
            <Reveal delay={160}>
              <div className="p-6 rounded-xl border border-slate-200 hover:border-[#0055A4] hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white space-y-3 group">
                <div className="w-12 h-12 rounded-lg bg-blue-50 text-[#0055A4] flex items-center justify-center border border-blue-100 group-hover:bg-[#0055A4] group-hover:text-white transition-colors">
                  <Compass className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-[#0055A4] transition-colors">
                  Application-Focused Discovery
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Find the right product specifications matched to your operating conditions, whether temperature, pressure, or corrosive chemical environments.
                </p>
              </div>
            </Reveal>

            {/* Card 4 */}
            <Reveal delay={0}>
              <div className="p-6 rounded-xl border border-slate-200 hover:border-[#0055A4] hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white space-y-3 group">
                <div className="w-12 h-12 rounded-lg bg-blue-50 text-[#0055A4] flex items-center justify-center border border-blue-100 group-hover:bg-[#0055A4] group-hover:text-white transition-colors">
                  <Sliders className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-[#0055A4] transition-colors">
                  Clear Inquiry Process
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Structured RFQ handling with transparent verification of dimensional tolerances, testing criteria, and project delivery parameters.
                </p>
              </div>
            </Reveal>

            {/* Card 5 */}
            <Reveal delay={80}>
              <div className="p-6 rounded-xl border border-slate-200 hover:border-[#0055A4] hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white space-y-3 group">
                <div className="w-12 h-12 rounded-lg bg-blue-50 text-[#0055A4] flex items-center justify-center border border-blue-100 group-hover:bg-[#0055A4] group-hover:text-white transition-colors">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-[#0055A4] transition-colors">
                  Responsive Communication
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Dedicated customer service desk ensuring timely updates, clear technical feedback, and swift quotation processing for procurement teams.
                </p>
              </div>
            </Reveal>

            {/* Card 6 */}
            <Reveal delay={160}>
              <div className="p-6 rounded-xl border border-slate-200 hover:border-[#0055A4] hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white space-y-3 group">
                <div className="w-12 h-12 rounded-lg bg-blue-50 text-[#0055A4] flex items-center justify-center border border-blue-100 group-hover:bg-[#0055A4] group-hover:text-white transition-colors">
                  <Globe className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-[#0055A4] transition-colors">
                  Domestic & Export Inquiries
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Equipped to discuss documentation and packaging requirements tailored for regional engineering projects and global export markets.
                </p>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* 8. Countries We Export To — 3D Flag Button Icons Grid */}
      <CountryGrid />

      {/* 10. Frequently Asked Questions (Accessible Accordion) */}
      <FAQAccordion />

      {/* 12. Get in Touch / Inquiry Section (2 Columns) */}
      <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200" id="inquiry-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Header */}
          <Reveal>
            <div className="max-w-3xl mb-12 text-left space-y-3">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#E3000F] bg-red-50 px-3 py-1.5 rounded-full border border-red-100">
                <MessageSquare className="w-3.5 h-3.5" />
                Get In Touch With Our Desk
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0055A4] tracking-tight">
                Tell Us What Steel You Need
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Share your product, grade, size and quantity requirements. Our team can review your inquiry and discuss the next steps.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

            {/* Left Column: Contact Information (PDF Data) */}
            <div className="lg:col-span-5 space-y-6 text-left">
              <Reveal delay={50}>
                <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-lg">

                  {/* Header */}
                  <div className="border-b border-slate-100 pb-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-bold text-[#0055A4]">Inquiry & Sales Desk</h3>
                      <span className="text-[10px] bg-green-50 text-green-700 px-2 py-0.5 rounded font-mono font-bold border border-green-200 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                        Active
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 mt-1">
                      Reach out to our Chennai office directly for any steel product requirements.
                    </p>
                  </div>

                  {/* Contact Info List */}
                  <div className="space-y-5 text-sm text-slate-700">

                    {/* Email */}
                    <div className="flex items-start space-x-3 group">
                      <div className="w-9 h-9 rounded-lg bg-blue-50 text-[#0055A4] flex items-center justify-center shrink-0 group-hover:bg-[#0055A4] group-hover:text-white transition-colors">
                        <Mail className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Email Address</div>
                        <a href="mailto:steelindialtd@yahoo.com" className="font-semibold text-slate-800 hover:text-[#E3000F] transition-colors">
                          steelindialtd@yahoo.com
                        </a>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-start space-x-3 group">
                      <div className="w-9 h-9 rounded-lg bg-blue-50 text-[#0055A4] flex items-center justify-center shrink-0 group-hover:bg-[#0055A4] group-hover:text-white transition-colors">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Phone Lines</div>
                        <a href="tel:+914425228058" className="font-semibold text-slate-800 hover:text-[#E3000F] transition-colors block">
                          +91 44 2522 8058
                        </a>
                        <a href="tel:+914423463810" className="font-semibold text-slate-800 hover:text-[#E3000F] transition-colors block">
                          +91 44 2346 3810
                        </a>
                        <div className="text-xs text-slate-500 mt-0.5">Mobile: <a href="tel:+919840425654" className="hover:text-[#E3000F]">+91 98404 25654</a></div>
                      </div>
                    </div>

                    {/* Address */}
                    <div className="flex items-start space-x-3 group">
                      <div className="w-9 h-9 rounded-lg bg-blue-50 text-[#0055A4] flex items-center justify-center shrink-0 group-hover:bg-[#0055A4] group-hover:text-white transition-colors">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Head Office</div>
                        <div className="font-semibold text-slate-800">
                          No 25, Muthumari Chetty Street,<br />
                          Chennai – 600 001.
                        </div>
                        <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mt-2">Site Office</div>
                        <div className="font-semibold text-slate-800">
                          125, Linghi Chetty Street,<br />
                          Chennai – 600 001.
                        </div>
                      </div>
                    </div>

                    {/* Hours */}
                    <div className="flex items-start space-x-3 group">
                      <div className="w-9 h-9 rounded-lg bg-blue-50 text-[#0055A4] flex items-center justify-center shrink-0 group-hover:bg-[#0055A4] group-hover:text-white transition-colors">
                        <Clock className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Business Hours</div>
                        <div className="font-semibold text-slate-800">Monday – Saturday</div>
                        <div className="text-xs text-slate-500">9:30 AM – 6:30 PM</div>
                      </div>
                    </div>

                  </div>

                  {/* Footer Notice */}
                  <div className="pt-2 border-t border-slate-100 text-xs text-slate-500 leading-relaxed bg-slate-50 -mx-6 -mb-6 sm:-mx-8 sm:-mb-8 p-5 rounded-b-2xl">
                    <strong className="text-slate-700">Note:</strong> For technical clarifications, you may attach drawings or Bills of Materials (BOM) when speaking with our engineers directly.
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right Column: Complete Inquiry Form */}
            <div className="lg:col-span-7">
              <Reveal delay={100}>
                <InquiryForm title="Product & Material Specification Form" />
              </Reveal>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
