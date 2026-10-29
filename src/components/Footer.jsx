import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowUp, Mail, Phone, MapPin, Clock, ShieldCheck,
  ChevronRight, ExternalLink, X, FileText, CheckCircle2
} from 'lucide-react';
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
      {/* Main Footer - Matching Logo Red Background */}
      <footer className="bg-[#E3000F] text-white border-t-4 border-white/20 text-left relative z-20 font-sans">

        {/* Top Footer Strip: Brand, Accent Line & Steel Decorative Detail */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10 border-b border-white/20">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            {/* Brand Logo & Tagline */}
            <div className="flex items-center space-x-3.5 bg-white p-3 rounded-xl shadow-lg">
              <img
                src="/images/logo.png"
                alt="Steel India Co. (Chennai) Pvt. Ltd."
                className="h-20 w-auto object-contain"
                style={{ maxWidth: '250px' }}
              />
            </div>

            {/* Industrial Geometric Steel Accent Line Detail (White/Blue) */}
            <div className="flex items-center space-x-2 text-xs font-mono text-white/80">
              <span className="h-0.5 w-12 bg-white inline-block"></span>
              <span className="text-white">QUALITY VERIFIED</span>
              <span className="h-0.5 w-6 bg-white/50 inline-block"></span>
              <span className="text-white">MTC EN 10204 3.1</span>
              <span className="h-0.5 w-12 bg-blue-500 inline-block"></span>
            </div>
          </div>
        </div>

        {/* 4 Structured Footer Columns */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">

            {/* Column 1: Company (3 cols) */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="text-lg font-bold text-white uppercase tracking-wider font-mono border-b border-white/30 pb-2 flex items-center justify-between">
                <span>Company</span>
                <span className="text-[10px] text-white/70 font-normal font-sans">Corporate</span>
              </h4>
              <p className="font-bold text-md text-white leading-relaxed">
                SteelIndia connects global engineering, infrastructure, and process industries with tailored steel products, certified material grades, and comprehensive test documentation.
              </p>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/about" className="text-white hover:text-[#0055A4] transition-colors flex items-center space-x-1.5 group">
                    <ChevronRight className="w-3.5 h-3.5 text-white/50 group-hover:text-[#0055A4]" />
                    <span>About SteelIndia</span>
                  </Link>
                </li>
                <li>
                  <Link to="/certificate" className="text-white hover:text-[#0055A4] transition-colors flex items-center space-x-1.5 group">
                    <ChevronRight className="w-3.5 h-3.5 text-white/50 group-hover:text-[#0055A4]" />
                    <span>Quality & Documentation</span>
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-white hover:text-[#0055A4] transition-colors flex items-center space-x-1.5 group">
                    <ChevronRight className="w-3.5 h-3.5 text-white/50 group-hover:text-[#0055A4]" />
                    <span>Submit Inquiry & RFQ</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2: Selected Products (3 cols) */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="text-lg font-bold text-white uppercase tracking-wider font-mono border-b border-white/30 pb-2 flex items-center justify-between">
                <span>Products</span>
                <span className="text-[10px] text-white/70 font-sans">Categories</span>
              </h4>
              <ul className="grid grid-cols-1 gap-2 text-xs">
                {products.slice(0, 7).map((p) => (
                  <li key={p.id}>
                    <Link
                      to={`/product/${p.id}`}
                      className="text-white text-[14px] font-medium hover:text-[#0055A4] transition-colors flex items-center space-x-1.5 group"
                    >
                      <span className="w-1 h-1 rounded-full bg-white group-hover:bg-[#0055A4]"></span>
                      <span>{p.name}</span>
                    </Link>
                  </li>
                ))}

              </ul>
            </div>

            {/* Column 3: Selected Materials (3 cols) */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="text-lg font-bold text-white uppercase tracking-wider font-mono border-b border-white/30 pb-2 flex items-center justify-between">
                <span>Materials</span>
                <span className="text-[10px] text-white/70 font-sans">15 Families</span>
              </h4>
              <ul className="grid grid-cols-1 gap-2 text-xs">
                {materials.slice(0, 7).map((m) => (
                  <li key={m.id}>
                    <Link
                      to={`/material/${m.id}`}
                      className="text-white text-[14px] font-medium hover:text-[#0055A4] transition-colors flex items-center space-x-1.5 group"
                    >
                      <span className="w-1 h-1 rounded-full bg-white group-hover:bg-[#0055A4]"></span>
                      <span>{m.name}</span>
                    </Link>
                  </li>
                ))}

              </ul>
            </div>

            {/* Column 4: Contact & Demo Markers (3 cols) */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="text-lg font-bold text-white uppercase tracking-wider font-mono border-b border-white/30 pb-2 flex items-center justify-between">
                <span>Contact Desk</span>
              </h4>

              <div className="space-y-3 text-xs text-white text-[14px] font-medium">
                <div className="flex items-start space-x-2.5 group">
                  <Mail className="w-4 h-4 text-white shrink-0 mt-0.5 group-hover:text-[#0055A4] transition-colors" />
                  <div>
                    <span className="block text-white font-medium group-hover:text-[#0055A4] transition-colors text-[14px]">steelindialtd@yahoo.com</span>
                    <span className="text-[10px] text-white/60 font-[14px] font-medium">Email Inquiry</span>
                  </div>
                </div>

                <div className="flex items-start space-x-2.5 group">
                  <Phone className="w-4 h-4 text-white shrink-0 mt-0.5 group-hover:text-[#0055A4] transition-colors" />
                  <div>
                    <span className="block text-white font-medium group-hover:text-[#0055A4] transition-colors text-[14px]">+91 44 2522 8058 / 2346 3810</span>
                    <span className="text-[10px] text-white/60">Mobile: +91 98404 25654</span>
                  </div>
                </div>

                <div className="flex items-start space-x-2.5 group">
                  <MapPin className="w-4 h-4 text-white shrink-0 mt-0.5 group-hover:text-[#0055A4] transition-colors" />
                  <div>
                    <span className="block text-white font-medium group-hover:text-[#0055A4] transition-colors text-[14px]">125, Linghi Chetty Street, Chennai – 600 001</span>
                    <span className="text-[10px] text-white/60">Head Office, Chennai</span>
                  </div>
                </div>

                <div className="flex items-start space-x-2.5 group">
                  <Clock className="w-4 h-4 text-white shrink-0 mt-0.5 group-hover:text-[#0055A4] transition-colors" />
                  <div>
                    <span className="block text-white font-medium group-hover:text-[#0055A4] transition-colors text-[14px]">Monday – Saturday</span>
                    <span className="text-[10px] text-white/60">Mon – Sat, 9:30 AM – 6:30 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer: Copyright, Policy Placeholders & Back to Top */}
        <div className="bg-[#C2000D] border-t border-white/20 py-6 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/90">
            <div>
              &copy; {currentYear} Steel India Co. (Chennai) Pvt. Ltd. All Rights Reserved | Design & SEO by <a href="https://sunmargindia.com" className="text-white hover:text-[#0055A4] transition-colors font-semibold">sunmargindia</a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              <button
                type="button"
                onClick={() => setModalType('privacy')}
                className="hover:text-[#0055A4] transition-colors underline-offset-4 hover:underline"
              >
                Privacy Policy
              </button>
              <span className="text-white/40">•</span>
              <button
                type="button"
                onClick={() => setModalType('terms')}
                className="hover:text-[#0055A4] transition-colors underline-offset-4 hover:underline"
              >
                Terms & Conditions
              </button>
              <span className="text-white/40">•</span>
              <button
                type="button"
                onClick={scrollToTop}
                className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded bg-[#A30009] hover:bg-[#0055A4] text-white transition-colors border border-white/20 group"
                aria-label="Back to top"
              >
                <span>Back to Top</span>
                <ArrowUp className="w-3.5 h-3.5 text-white group-hover:text-white" />
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Interactive Modal for Privacy Policy & Terms of Service */}
      {modalType && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-xl shadow-2xl max-w-lg w-full p-6 text-left relative max-h-[80vh] overflow-y-auto">
            <button
              type="button"
              onClick={() => setModalType(null)}
              className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center space-x-2 text-slate-900 font-bold text-lg mb-3">
              <FileText className="w-5 h-5 text-[#E3000F]" />
              <span>
                {modalType === 'privacy' ? 'Privacy Policy Placeholder' : 'Terms & Conditions Placeholder'}
              </span>
            </div>

            <div className="text-xs text-slate-600 space-y-3 leading-relaxed">
              <p>
                <span className="font-semibold text-slate-800">Demo Legal Placeholder:</span> This template placeholder will be replaced with official legal policies prior to final commercial deployment.
              </p>
              {modalType === 'privacy' ? (
                <>
                  <p>
                    SteelIndia values client confidentiality. Technical specifications, Bill of Materials (BOM), CAD drawings, and contact details transmitted through this website are used strictly for RFQ evaluation and technical correspondence.
                  </p>
                  <p>
                    No customer data is sold, rented, or distributed to marketing third parties.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    Product descriptions, weights, chemical tolerances, and dimensions published on this website are based on standard industrial standards (ASTM, ASME, DIN, EN).
                  </p>
                  <p>
                    Final commercial supply terms, mill tolerances, inspection certifications, and delivery schedules are confirmed in official written proforma invoices and purchase orders.
                  </p>
                </>
              )}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex justify-end">
              <button
                type="button"
                onClick={() => setModalType(null)}
                className="px-4 py-2 bg-slate-900 text-white rounded-lg text-xs font-semibold hover:bg-slate-800 transition-colors"
              >
                Close Placeholder
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}