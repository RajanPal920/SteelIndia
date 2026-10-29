import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowUp, Mail, Phone, MapPin, Clock, ShieldCheck,
  ChevronRight, X, FileText, CheckCircle2
} from 'lucide-react';
// Ensure you have react-icons installed or use custom SVGs
import { FaWhatsapp, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { products } from '../data/products';
import { materials } from '../data/materials';

export default function Footer() {
  const [modalType, setModalType] = useState(null); // 'privacy' | 'terms' | null

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* Main Footer - Brand Red Background */}
      <footer className="bg-[#E3000F] text-white relative z-20 font-sans overflow-hidden">

        {/* Top Border Accent */}
        <div className="w-full h-1.5 bg-[#0055A4]"></div>

        {/* Top Section: Brand & Trust Badges */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10 border-b border-white/20">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

            {/* Brand Logo (White Box for Logo Visibility) */}
            <div className="bg-white p-3 rounded-xl shadow-lg w-fit">
              <img
                src="/images/logo.png"
                alt="Steel India Co. (Chennai) Pvt. Ltd."
                className="h-16 sm:h-20 w-auto object-contain"
                style={{ maxWidth: '280px' }}
              />
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center space-x-2 bg-black/10 px-4 py-2 rounded-lg border border-white/20">
                <ShieldCheck className="w-5 h-5 text-white" />
                <div className="text-xs">
                  <div className="font-bold text-white">MTC EN 10204 3.1</div>
                  <div className="text-white/70">Certified Documentation</div>
                </div>
              </div>
              <div className="flex items-center space-x-2 bg-black/10 px-4 py-2 rounded-lg border border-white/20">
                <CheckCircle2 className="w-5 h-5 text-white" />
                <div className="text-xs">
                  <div className="font-bold text-white">ISO 9001:2015</div>
                  <div className="text-white/70">Quality Assured</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Structured Columns */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">

            {/* Column 1: Company Profile & Socials */}
            <div className="lg:col-span-3 space-y-5">
              <h4 className="text-sm font-bold text-white uppercase tracking-widest border-l-4 border-white pl-3">
                Company Profile
              </h4>
              <p className="text-sm text-white/90 leading-relaxed font-medium">
                Since 1990, Steel India Co. (Chennai) Pvt. Ltd. has been a leading manufacturer, importer, dealer, supplier, and stockist of Stainless Steel, Carbon Steel, and Mild Steel products.
              </p>

              {/* Social Icons */}
              <div className="flex items-center space-x-3 pt-2">
                <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#0055A4] transition-colors border border-white/20">
                  <FaFacebookF className="w-3.5 h-3.5 text-white" />
                </a>
                <a href="https://wa.me/919840425654" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#25D366] transition-colors border border-white/20">
                  <FaWhatsapp className="w-4 h-4 text-white" />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#E4405F] transition-colors border border-white/20">
                  <FaInstagram className="w-4 h-4 text-white" />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#0A66C2] transition-colors border border-white/20">
                  <FaLinkedinIn className="w-3.5 h-3.5 text-white" />
                </a>
              </div>
            </div>

            {/* Column 2: Products */}
            <div className="lg:col-span-3 space-y-5">
              <h4 className="text-sm font-bold text-white uppercase tracking-widest border-l-4 border-white pl-3">
                Our Products
              </h4>
              <ul className="grid grid-cols-1 gap-2.5 text-sm">
                {products.slice(0, 6).map((p) => (
                  <li key={p.id}>
                    <Link
                      to={`/product/${p.id}`}
                      className="text-white/80 hover:text-white transition-colors flex items-center group font-medium"
                    >
                      <ChevronRight className="w-3.5 h-3.5 text-white/50 group-hover:text-white mr-1.5 transition-transform group-hover:translate-x-1" />
                      <span>{p.name}</span>
                    </Link>
                  </li>
                ))}
                <li>
                  <Link to="/product" className="text-white font-bold hover:underline text-xs mt-2 inline-block">
                    View All 17 Categories &rarr;
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Materials */}
            <div className="lg:col-span-3 space-y-5">
              <h4 className="text-sm font-bold text-white uppercase tracking-widest border-l-4 border-white pl-3">
                Materials
              </h4>
              <ul className="grid grid-cols-1 gap-2.5 text-sm">
                {materials.slice(0, 6).map((m) => (
                  <li key={m.id}>
                    <Link
                      to={`/material/${m.id}`}
                      className="text-white/80 hover:text-white transition-colors flex items-center group font-medium"
                    >
                      <ChevronRight className="w-3.5 h-3.5 text-white/50 group-hover:text-white mr-1.5 transition-transform group-hover:translate-x-1" />
                      <span>{m.name}</span>
                    </Link>
                  </li>
                ))}
                <li>
                  <Link to="/material" className="text-white font-bold hover:underline text-xs mt-2 inline-block">
                    View All 15 Families &rarr;
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Contact */}
            <div className="lg:col-span-3 space-y-5">
              <h4 className="text-sm font-bold text-white uppercase tracking-widest border-l-4 border-white pl-3">
                Contact Desk
              </h4>
              <ul className="space-y-4 text-sm text-white/90">
                {/* Email */}
                <li className="flex items-start">
                  <Mail className="w-4 h-4 text-white mr-3 mt-1 shrink-0" />
                  <div>
                    <div className="text-[10px] font-bold text-white/60 uppercase tracking-wider mb-0.5">Email</div>
                    <a href="mailto:steelindialtd@yahoo.com" className="hover:text-white transition-colors block font-medium">
                      steelindialtd@yahoo.com
                    </a>
                  </div>
                </li>
                {/* Phone */}
                <li className="flex items-start">
                  <Phone className="w-4 h-4 text-white mr-3 mt-1 shrink-0" />
                  <div>
                    <div className="text-[10px] font-bold text-white/60 uppercase tracking-wider mb-0.5">Phone</div>
                    <a href="tel:+914425228058" className="hover:text-white transition-colors block font-medium">
                      +91 44 2522 8058
                    </a>
                    <a href="tel:+919840425654" className="hover:text-white transition-colors block font-medium">
                      +91 98404 25654
                    </a>
                  </div>
                </li>
                {/* Address */}
                <li className="flex items-start">
                  <MapPin className="w-4 h-4 text-white mr-3 mt-1 shrink-0" />
                  <div>
                    <div className="text-[10px] font-bold text-white/60 uppercase tracking-wider mb-0.5">Location</div>
                    <span className="block leading-relaxed font-medium">
                      125, Linghi Chetty Street,<br />
                      Chennai – 600 001.
                    </span>
                  </div>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Footer Strip */}
        <div className="bg-black/20 border-t border-white/20 py-5 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/80">
            <div>
              &copy; {currentYear} Steel India Co. (Chennai) Pvt. Ltd. All Rights Reserved | Design by <a href="https://sunmargindia.com" target="_blank" rel="noreferrer" className="text-white hover:underline transition-colors font-bold">sunmargindia</a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              <button onClick={() => setModalType('privacy')} className="hover:text-white transition-colors font-medium">Privacy Policy</button>
              <span className="text-white/30">|</span>
              <button onClick={() => setModalType('terms')} className="hover:text-white transition-colors font-medium">Terms & Conditions</button>
              <span className="text-white/30">|</span>
              <button
                onClick={scrollToTop}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-black/20 hover:bg-[#0055A4] text-white rounded transition-colors font-bold border border-white/10"
              >
                Back to Top <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Modal */}
      {modalType && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="bg-white rounded-xl shadow-2xl max-w-lg w-full p-6 text-left relative max-h-[80vh] overflow-y-auto">
            <button
              onClick={() => setModalType(null)}
              className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-slate-800 hover:bg-slate-100"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center space-x-2 text-slate-900 font-bold text-lg mb-3">
              <FileText className="w-5 h-5 text-[#E3000F]" />
              <span>{modalType === 'privacy' ? 'Privacy Policy' : 'Terms & Conditions'}</span>
            </div>

            <div className="text-xs text-slate-600 space-y-3 leading-relaxed max-h-[60vh] overflow-y-auto pr-2">

              {modalType === 'privacy' ? (
                <>
                  <p>
                    <span className="font-bold text-slate-800 text-sm block mb-1">Privacy Policy</span>
                    At <strong>Steel India Co. (Chennai) Pvt. Ltd.</strong>, we value client confidentiality and trust. Any technical specifications, Bill of Materials (BOM), CAD drawings, material grades, or contact details transmitted through this website are used strictly for evaluating your Request for Quotation (RFQ) and for technical correspondence.
                  </p>
                  <p>
                    We do not sell, rent, or distribute customer data to unauthorized marketing third parties. Your information is handled securely by our internal sales and engineering teams only. We keep constant touch with clients to understand their exact requirements, ensuring complete client satisfaction.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    <span className="font-bold text-slate-800 text-sm block mb-1">Terms & Conditions</span>
                    Welcome to <strong>Steel India Co. (Chennai) Pvt. Ltd.</strong> Established in <strong>1990</strong>, we are a manufacturer, importer, dealer, supplier, and stockist of industrial metals including Pipes, Tubes, Sheets, Plates, Coils, Rods, Flanges, Fasteners, Buttweld Fittings, Forged Fittings, and Valves.
                  </p>
                  <p>
                    <span className="font-semibold text-slate-700">1. Product Information:</span> Product descriptions, dimensions, chemical tolerances, and weights published on this website are based on standard industrial specifications (ASTM, ASME, DIN, EN, IS). Actual mill tolerances and test certifications may vary slightly based on the manufacturing mill.
                  </p>
                  <p>
                    <span className="font-semibold text-slate-700">2. Quality & Documentation:</span> We never compromise on quality. Final commercial supply terms, material grade verification, and inspection certifications are confirmed in official written proforma invoices and purchase orders. Mill Test Certificates (EN 10204 3.1/3.2) are provided as per project requirements.
                  </p>
                  <p>
                    <span className="font-semibold text-slate-700">3. Delivery & Logistics:</span> Delivery schedules are confirmed at the time of order placement. We ensure timely delivery within the defined time frame from our Chennai headquarters and branch network in Anantapur, Bangalore, and Mumbai.
                  </p>
                  <p>
                    <span className="font-semibold text-slate-700">4. Jurisdiction:</span> Any disputes arising from the use of this website or commercial transactions are subject to the exclusive jurisdiction of the courts in Chennai, Tamil Nadu, India.
                  </p>
                </>
              )}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setModalType(null)}
                className="px-4 py-2 bg-slate-900 text-white rounded-lg text-xs font-semibold hover:bg-slate-800 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}