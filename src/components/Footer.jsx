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
      <footer className="bg-navy-950 text-slate-300 border-t-2 border-slate-800 text-left relative z-20">
        {/* Top Footer Strip: Brand, Accent Line & Steel Decorative Detail */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10 border-b border-navy-900">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            {/* Brand Logo & Tagline */}
            <div className="flex items-center space-x-3.5">
              <div className="w-11 h-11 bg-navy-900 rounded-lg flex items-center justify-center border border-slate-700 shadow-inner">
                <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 7l8-4 8 4-8 4-8-4z" fill="#D95C14" stroke="#D95C14" fillOpacity="0.4" />
                  <path d="M4 7v10l8 4 8-4V7" />
                  <path d="M12 11v10" />
                </svg>
              </div>
              <div>
                <div className="flex items-center tracking-tight font-extrabold text-2xl font-sans text-white">
                  <span>STEEL</span>
                  <span className="text-industrial-amber ml-0.5">INDIA</span>
                </div>
                <p className="text-xs text-slate-400 mt-0.5">
                  Precision Industrial Steel, High-Pressure Piping Components & Alloy Supply
                </p>
              </div>
            </div>

            {/* Industrial Geometric Steel Accent Line Detail */}
            <div className="flex items-center space-x-2 text-xs font-mono text-slate-400">
              <span className="h-0.5 w-12 bg-industrial-amber inline-block"></span>
              <span className="text-slate-400">QUALITY VERIFIED</span>
              <span className="h-0.5 w-6 bg-slate-700 inline-block"></span>
              <span className="text-slate-400">MTC EN 10204 3.1</span>
              <span className="h-0.5 w-12 bg-steel-600 inline-block"></span>
            </div>
          </div>
        </div>

        {/* 4 Structured Footer Columns */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
            {/* Column 1: Company (3 cols) */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono border-b border-navy-800 pb-2 flex items-center justify-between">
                <span>Company</span>
                <span className="text-[10px] text-industrial-amber font-normal font-sans">Corporate</span>
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                SteelIndia connects global engineering, infrastructure, and process industries with tailored steel products, certified material grades, and comprehensive test documentation.
              </p>
              <ul className="space-y-2 text-xs">
                <li>
                  <Link to="/about" className="hover:text-industrial-amber transition-colors flex items-center space-x-1.5">
                    <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                    <span>About SteelIndia</span>
                  </Link>
                </li>
                <li>
                  <Link to="/certificate" className="hover:text-industrial-amber transition-colors flex items-center space-x-1.5">
                    <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                    <span>Quality & Documentation</span>
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-industrial-amber transition-colors flex items-center space-x-1.5">
                    <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                    <span>Submit Inquiry & RFQ</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2: Selected Products (3 cols) */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono border-b border-navy-800 pb-2 flex items-center justify-between">
                <span>Products</span>
                <span className="text-[10px] text-slate-400 font-sans">17 Categories</span>
              </h4>
              <ul className="grid grid-cols-1 gap-2 text-xs">
                {products.slice(0, 7).map((p) => (
                  <li key={p.id}>
                    <Link
                      to={`/product/${p.id}`}
                      className="hover:text-white transition-colors flex items-center space-x-1.5 text-slate-400"
                    >
                      <span className="w-1 h-1 rounded-full bg-slate-600"></span>
                      <span>{p.name}</span>
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    to="/product"
                    className="text-industrial-amber hover:underline font-semibold flex items-center space-x-1 mt-1 text-xs"
                  >
                    <span>View All 17 Categories &rarr;</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Selected Materials (3 cols) */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono border-b border-navy-800 pb-2 flex items-center justify-between">
                <span>Materials</span>
                <span className="text-[10px] text-slate-400 font-sans">15 Families</span>
              </h4>
              <ul className="grid grid-cols-1 gap-2 text-xs">
                {materials.slice(0, 7).map((m) => (
                  <li key={m.id}>
                    <Link
                      to={`/material/${m.id}`}
                      className="hover:text-white transition-colors flex items-center space-x-1.5 text-slate-400"
                    >
                      <span className="w-1 h-1 rounded-full bg-steel-500"></span>
                      <span>{m.name}</span>
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    to="/material"
                    className="text-steel-400 hover:text-white hover:underline font-semibold flex items-center space-x-1 mt-1 text-xs"
                  >
                    <span>View All 15 Materials &rarr;</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Contact & Demo Markers (3 cols) */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono border-b border-navy-800 pb-2 flex items-center justify-between">
                <span>Contact Desk</span>
                <span className="text-[10px] bg-navy-800 text-industrial-amber px-1.5 py-0.5 rounded font-mono">Demo Data</span>
              </h4>
              
              <div className="space-y-3 text-xs text-slate-400">
                <div className="flex items-start space-x-2.5">
                  <Mail className="w-4 h-4 text-industrial-amber shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-slate-200 font-medium">sales@example.com</span>
                    <span className="text-[10px] text-slate-500">Demo Inquiry Email</span>
                  </div>
                </div>

                <div className="flex items-start space-x-2.5">
                  <Phone className="w-4 h-4 text-industrial-amber shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-slate-200 font-medium">+91 00000 00000</span>
                    <span className="text-[10px] text-slate-500">Demo Helpline / WhatsApp</span>
                  </div>
                </div>

                <div className="flex items-start space-x-2.5">
                  <MapPin className="w-4 h-4 text-industrial-amber shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-slate-200 font-medium">Mumbai, Maharashtra, India</span>
                    <span className="text-[10px] text-slate-500">Demo Corporate Address</span>
                  </div>
                </div>

                <div className="flex items-start space-x-2.5">
                  <Clock className="w-4 h-4 text-industrial-amber shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-slate-200 font-medium">Monday – Saturday</span>
                    <span className="text-[10px] text-slate-500">Business Hours: To be confirmed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer: Copyright, Policy Placeholders & Back to Top */}
        <div className="bg-navy-950 border-t border-navy-900 py-6 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <div>
              &copy; {currentYear} SteelIndia. All Rights Reserved. Built with React & Tailwind CSS.
            </div>

            <div className="flex items-center space-x-6">
              <button
                type="button"
                onClick={() => setModalType('privacy')}
                className="hover:text-white transition-colors underline-offset-4 hover:underline"
              >
                Privacy Policy Placeholder
              </button>
              <span>•</span>
              <button
                type="button"
                onClick={() => setModalType('terms')}
                className="hover:text-white transition-colors underline-offset-4 hover:underline"
              >
                Terms & Conditions Placeholder
              </button>
              <span>•</span>
              <button
                type="button"
                onClick={scrollToTop}
                className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded bg-navy-900 hover:bg-slate-800 text-slate-200 transition-colors border border-slate-700/60"
                aria-label="Back to top"
              >
                <span>Back to Top</span>
                <ArrowUp className="w-3.5 h-3.5 text-industrial-amber" />
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Interactive Modal for Privacy Policy & Terms of Service */}
      {modalType && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-xl shadow-2xl max-w-lg w-full p-6 text-left relative max-h-[80vh] overflow-y-auto">
            <button
              type="button"
              onClick={() => setModalType(null)}
              className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center space-x-2 text-navy-950 font-bold text-lg mb-3">
              <FileText className="w-5 h-5 text-industrial-amber" />
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
                className="px-4 py-2 bg-slate-900 text-white rounded-lg text-xs font-semibold hover:bg-slate-800"
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
