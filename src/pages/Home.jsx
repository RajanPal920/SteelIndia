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
  Boxes, Sliders, Mail, Phone, MapPin, Clock, ExternalLink
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

      {/* 3. Our Product Range Section — Exactly 8 Cards on Homepage */}
      <section className="py-16 sm:py-20 bg-white" id="products-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <div className="max-w-3xl mx-auto space-y-3">
              <span className="inline-block text-xs font-bold tracking-widest uppercase text-steel-700 bg-steel-50 px-3.5 py-1 rounded-full border border-steel-200">
                Core Product Portfolio
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight">
                Steel Products for Every Industrial Need
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Explore our range of steel products designed to support diverse industrial and engineering requirements.
              </p>
            </div>
          </Reveal>

          {/* Grid of exactly 8 product categories */}
          <div className="mt-12 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {homepageProducts.map((product, idx) => (
              <Reveal key={product.id} delay={(idx % 4) * 80}>
                <ProductCard product={product} />
              </Reveal>
            ))}
          </div>

          {/* View All Products CTA */}
          <Reveal delay={200}>
            <div className="mt-12">
              <Link
                to="/product"
                className="inline-flex items-center space-x-2 px-7 py-3.5 rounded-lg text-sm font-bold text-navy-950 bg-slate-100 hover:bg-steel-50 border border-slate-300 hover:border-steel-400 transition-all duration-200 shadow-2xs hover:shadow-sm"
              >
                <span>View All Products</span>
                <ArrowRight className="w-4 h-4 text-industrial-amber" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 4. About SteelIndia — Homepage Section (Fresh Split Layout) */}
      <section className="py-16 sm:py-20 bg-slate-50 border-y border-slate-200" id="about-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Image: Organized Industrial Setting */}
            <div className="lg:col-span-6 relative">
              <Reveal>
                <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200/90 aspect-[4/3] bg-white group">
                  <img
                    src="/images/about-showcase.jpg"
                    alt="SteelIndia organized finished steel components and industrial fittings warehouse showcase"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* Float badge */}
                <div className="absolute -bottom-5 -right-5 hidden sm:flex items-center space-x-3 bg-navy-950 text-white p-4 rounded-xl shadow-xl border border-slate-700">
                  <ShieldCheck className="w-8 h-8 text-industrial-amber" />
                  <div className="text-left">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-300">Traceable Supply</div>
                    <div className="text-sm font-semibold text-white">EN 10204 3.1 & 3.2 Standards</div>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right Side: Introduction & Highlights */}
            <div className="lg:col-span-6 space-y-5 text-left">
              <Reveal delay={100}>
                <div className="space-y-2">
                  <span className="text-xs font-bold tracking-widest uppercase text-industrial-amber">
                    ABOUT STEELINDIA
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight leading-tight">
                    Connecting Industries with the Right Steel Solutions
                  </h2>
                </div>

                <div className="space-y-3.5 text-slate-600 text-sm sm:text-base leading-relaxed pt-2">
                  <p>
                    At SteelIndia, we focus on bridging industrial project requirements with precision-engineered steel products and specialty alloy solutions. Sourcing the appropriate steel requires strict adherence to dimensional tolerances, chemical compositions, and applicable international manufacturing standards.
                  </p>
                  <p>
                    Whether your engineering team requires seamless pipes for high-temperature steam lines, precision stainless steel fittings for sterile pharmaceutical loops, or high-tensile bolting for flanged joints, our focus is delivering clear specifications and reliable customer support.
                  </p>
                </div>

                {/* 3 Compact Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-4">
                  <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-1">
                    <Boxes className="w-5 h-5 text-steel-600 mb-1" />
                    <div className="text-xs font-bold text-navy-950">Diverse Product Range</div>
                    <div className="text-[11px] text-slate-500 leading-snug">
                      Comprehensive product lines from fittings to drawn wire.
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-1">
                    <Layers className="w-5 h-5 text-industrial-amber mb-1" />
                    <div className="text-xs font-bold text-navy-950">Multiple Material Options</div>
                    <div className="text-[11px] text-slate-500 leading-snug">
                      15 material families including stainless, duplex, and nickel alloys.
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-1">
                    <Headphones className="w-5 h-5 text-emerald-600 mb-1" />
                    <div className="text-xs font-bold text-navy-950">Inquiry-Focused Support</div>
                    <div className="text-[11px] text-slate-500 leading-snug">
                      Rapid technical review of client drawings and BOM specifications.
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <Link
                    to="/about"
                    className="inline-flex items-center space-x-2 px-6 py-3 rounded-lg text-sm font-bold text-white bg-navy-900 hover:bg-steel-800 shadow-sm transition-all duration-200"
                  >
                    <span>Discover SteelIndia</span>
                    <ArrowRight className="w-4 h-4 text-industrial-amber" />
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Material Range Section (Continuous Left-to-Right Marquee) */}
      <section className="py-16 sm:py-20 bg-white overflow-hidden" id="materials-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <div className="max-w-3xl mx-auto space-y-3">
              <span className="inline-block text-xs font-bold tracking-widest uppercase text-steel-700 bg-steel-50 px-3.5 py-1 rounded-full border border-steel-200">
                Metallurgical Diversity
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight">
                Explore Our Material Range
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                We cater to diverse industrial environments with standard and high-performance material families. Material families shown as available categories; specific grade availability confirmed on inquiry.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Continuous Left-to-Right Marquee Track */}
        <div className="mt-10 sm:mt-12 relative w-full overflow-hidden group">
          {/* Subtle Left and Right Edge Gradient Masks */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />

          {/* Marquee Track Moving Left to Right */}
          <div className="flex w-max animate-marquee-ltr hover:[animation-play-state:paused] py-3">
            {/* Track 1 (All 15 Material Cards) */}
            <div className="flex shrink-0 items-stretch space-x-5 pr-5">
              {materials.map((material) => (
                <div key={`m1-${material.id}`} className="w-[280px] sm:w-[320px] shrink-0 flex">
                  <MaterialCard material={material} className="w-full" />
                </div>
              ))}
            </div>

            {/* Track 2 (Clone for 100% gapless continuous left-to-right loop) */}
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
          <div className="mt-3 flex items-center justify-center space-x-2 text-xs text-slate-400 font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Continuous Left-to-Right Stream &bull; Hover card to pause</span>
          </div>

          <Reveal delay={200}>
            <div className="mt-8 sm:mt-10">
              <Link
                to="/material"
                className="inline-flex items-center space-x-2 px-7 py-3 rounded-lg text-sm font-bold text-slate-800 bg-slate-50 hover:bg-slate-100 border border-slate-300 transition-colors shadow-sm"
              >
                <span>Explore Complete Material Specifications & Applications</span>
                <ArrowRight className="w-4 h-4 text-steel-600" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 6. Industries We Serve — Exactly 9 Industries (Images & Names Only) */}
      <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200" id="industries-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <div className="max-w-3xl mx-auto space-y-3">
              <span className="inline-block text-xs font-bold tracking-widest uppercase text-steel-700 bg-white px-3.5 py-1 rounded-full border border-slate-200">
                APPLICATION SECTORS
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight">
                Steel Solutions Across Industries
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Supporting a broad range of industrial, engineering and infrastructure applications worldwide.
              </p>
            </div>
          </Reveal>

          {/* Responsive grid of exactly 9 industries */}
          <div className="mt-12 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, idx) => (
              <Reveal key={industry.id} delay={(idx % 3) * 80}>
                <IndustryCard industry={industry} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Why Choose SteelIndia */}
      <section className="py-16 sm:py-20 bg-white border-t border-slate-200" id="why-choose-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <div className="max-w-3xl mx-auto space-y-3">
              <span className="inline-block text-xs font-bold tracking-widest uppercase text-steel-700 bg-steel-50 px-3.5 py-1 rounded-full border border-steel-200">
                Trust & Integrity
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight">
                Why Choose SteelIndia?
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Structured to support client specifications with clarity, responsive communication, and comprehensive documentation.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            <Reveal delay={0}>
              <div className="p-6 rounded-xl border border-slate-200 hover:border-steel-400 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white space-y-3">
                <div className="w-12 h-12 rounded-lg bg-steel-50 text-steel-700 flex items-center justify-center border border-steel-100">
                  <Boxes className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-navy-950">Wide Product Selection</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  From seamless pipes and fittings to forged flanges, fasteners, and drawn wires, source comprehensive steel categories under one roof.
                </p>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <div className="p-6 rounded-xl border border-slate-200 hover:border-steel-400 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white space-y-3">
                <div className="w-12 h-12 rounded-lg bg-steel-50 text-steel-700 flex items-center justify-center border border-steel-100">
                  <Layers className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-navy-950">Multiple Material Categories</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Extensive support across 15 material families, including commercial stainless steel, high-pressure carbon steel, duplex, and nickel alloys.
                </p>
              </div>
            </Reveal>

            <Reveal delay={160}>
              <div className="p-6 rounded-xl border border-slate-200 hover:border-steel-400 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white space-y-3">
                <div className="w-12 h-12 rounded-lg bg-steel-50 text-steel-700 flex items-center justify-center border border-steel-100">
                  <Compass className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-navy-950">Application-Focused Discovery</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Find the right product specifications matched to your operating conditions, whether temperature, pressure, or corrosive chemical environments.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0}>
              <div className="p-6 rounded-xl border border-slate-200 hover:border-steel-400 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white space-y-3">
                <div className="w-12 h-12 rounded-lg bg-steel-50 text-steel-700 flex items-center justify-center border border-steel-100">
                  <Sliders className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-navy-950">Clear Inquiry Process</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Structured RFQ handling with transparent verification of dimensional tolerances, testing criteria, and project delivery parameters.
                </p>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <div className="p-6 rounded-xl border border-slate-200 hover:border-steel-400 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white space-y-3">
                <div className="w-12 h-12 rounded-lg bg-steel-50 text-steel-700 flex items-center justify-center border border-steel-100">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-navy-950">Responsive Communication</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Dedicated customer service desk ensuring timely updates, clear technical feedback, and swift quotation processing for procurement teams.
                </p>
              </div>
            </Reveal>

            <Reveal delay={160}>
              <div className="p-6 rounded-xl border border-slate-200 hover:border-steel-400 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white space-y-3">
                <div className="w-12 h-12 rounded-lg bg-steel-50 text-steel-700 flex items-center justify-center border border-steel-100">
                  <Globe className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-navy-950">Domestic & Export Inquiries</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Equipped to discuss documentation and packaging requirements tailored for regional engineering projects and global export markets.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 8. Countries We Export To — Exactly 25 Countries in 5 x 5 Grid */}
      <CountryGrid />

      {/* 9. Quality, Specifications & Documentation Section */}
      <section className="py-16 sm:py-20 bg-white" id="quality-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="bg-gradient-to-br from-slate-50 to-steel-50/40 rounded-2xl border border-slate-200 p-8 sm:p-12 text-left">
              <div className="max-w-3xl space-y-3">
                <span className="text-xs font-bold uppercase tracking-widest text-steel-700">
                  VERIFICATION & COMPLIANCE
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight">
                  Quality, Specifications & Documentation
                </h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Product selection can be discussed according to the customer's required material grade, dimensions, applicable specifications, and documentation requirements.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl border border-slate-200/90 shadow-2xs space-y-2">
                  <div className="w-10 h-10 rounded-lg bg-steel-100 text-steel-700 flex items-center justify-center font-bold">
                    01
                  </div>
                  <h3 className="text-base font-bold text-navy-950">Material & Grade Requirements</h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                    Review chemical compositions, mechanical yield/tensile strength, and corrosion-resistance characteristics against ASTM, ASME, DIN, or customer specifications.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl border border-slate-200/90 shadow-2xs space-y-2">
                  <div className="w-10 h-10 rounded-lg bg-steel-100 text-steel-700 flex items-center justify-center font-bold">
                    02
                  </div>
                  <h3 className="text-base font-bold text-navy-950">Product Dimensions & Specs</h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                    Confirmation of outer diameter, nominal bore (NB), wall thickness (SCH 10 to XXS), length, end preparations (beveled/threaded), and surface finishes.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl border border-slate-200/90 shadow-2xs space-y-2">
                  <div className="w-10 h-10 rounded-lg bg-steel-100 text-steel-700 flex items-center justify-center font-bold">
                    03
                  </div>
                  <h3 className="text-base font-bold text-navy-950">Certificate & Test Inquiries</h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                    Discussion of Mill Test Certificates (EN 10204 3.1 / 3.2), PMI reports, Ultrasonic/Radiographic NDT examination, and third-party witness inspection.
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-4">
                <span className="text-xs text-slate-500">
                  All certificates, test dossiers, and documentation are reviewed based on mutual project agreement.
                </span>
                <Link
                  to="/certificate"
                  className="inline-flex items-center space-x-2 px-6 py-3 rounded-lg text-sm font-bold text-white bg-steel-700 hover:bg-steel-800 shadow-sm transition-colors"
                >
                  <span>Discuss Your Requirements</span>
                  <ArrowRight className="w-4 h-4 text-industrial-amber" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 10. Frequently Asked Questions (Accessible Accordion) */}
      <FAQAccordion />

      {/* 11. Final Homepage CTA */}
      <section className="py-16 bg-navy-950 text-white border-y border-navy-900" id="final-cta">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <Reveal>
            <div className="inline-flex items-center space-x-2 bg-navy-900 text-industrial-amber px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-slate-700">
              <span>START YOUR INQUIRY TODAY</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-3">
              Looking for the Right Steel Product?
            </h2>

            <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed mt-2">
              Share your specifications and let us help you identify the appropriate product category, material grade, and testing criteria for your project.
            </p>

            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Link
                to="/product"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg text-sm font-bold text-navy-950 bg-white hover:bg-slate-100 shadow transition-all duration-200"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-4 h-4 ml-2 text-industrial-amber" />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg text-sm font-bold text-white bg-industrial-amber hover:bg-industrial-hover shadow transition-all duration-200"
              >
                <span>Send an Inquiry</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 12. Get in Touch / Inquiry Section (2 Columns) */}
      <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200" id="inquiry-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="max-w-3xl mb-12 text-left space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-industrial-amber">
                GET IN TOUCH WITH OUR DESK
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight">
                Tell Us What Steel You Need
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Share your product, grade, size and quantity requirements. Our team can review your inquiry and discuss the next steps.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Contact information with clearly marked demo data */}
            <div className="lg:col-span-5 space-y-6 text-left">
              <Reveal delay={50}>
                <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-sm">
                  <div className="border-b border-slate-100 pb-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-base font-bold text-navy-950">Inquiry & Sales Desk</h3>
                      <span className="text-[10px] bg-amber-50 text-industrial-amber px-2 py-0.5 rounded font-mono font-bold border border-amber-200">
                        Demo Details
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 mt-1">
                      Contact information below contains placeholder data to be configured with the client's official lines.
                    </p>
                  </div>

                  <div className="space-y-4 text-xs sm:text-sm text-slate-700">
                    <div className="flex items-start space-x-3">
                      <Mail className="w-5 h-5 text-industrial-amber shrink-0 mt-0.5" />
                      <div>
                        <div className="font-bold text-slate-900">Email Address</div>
                        <a href="mailto:sales@example.com" className="text-steel-600 hover:underline">
                          sales@example.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Phone className="w-5 h-5 text-industrial-amber shrink-0 mt-0.5" />
                      <div>
                        <div className="font-bold text-slate-900">Phone & WhatsApp</div>
                        <a href="tel:+910000000000" className="text-steel-600 hover:underline">
                          +91 00000 00000
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-industrial-amber shrink-0 mt-0.5" />
                      <div>
                        <div className="font-bold text-slate-900">Registered Office / Warehouse</div>
                        <div className="text-slate-600">
                          Mumbai, Maharashtra, India — Demo Address
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Clock className="w-5 h-5 text-industrial-amber shrink-0 mt-0.5" />
                      <div>
                        <div className="font-bold text-slate-900">Business Hours</div>
                        <div className="text-slate-600">
                          To be confirmed by client
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-100 text-xs text-slate-500 leading-relaxed bg-slate-50 -mx-6 -mb-6 sm:-mx-8 sm:-mb-8 p-4 rounded-b-xl">
                    <strong>Notice:</strong> For technical clarifications, you may attach drawings or Bills of Materials (BOM) when speaking with our engineers directly.
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
