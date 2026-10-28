import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { 
  Menu, X, ChevronDown, Phone, Mail, ArrowRight, 
  Layers, ShieldCheck, Box, ChevronRight, FileText
} from 'lucide-react';
import { products } from '../data/products';
import { materials } from '../data/materials';
import { certificateCategories } from '../data/certificates';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productDropdownOpen, setProductDropdownOpen] = useState(false);
  const [materialDropdownOpen, setMaterialDropdownOpen] = useState(false);
  const [certDropdownOpen, setCertDropdownOpen] = useState(false);

  // Mobile submenu accordions
  const [mobileSubmenu, setMobileSubmenu] = useState(null);

  const location = useLocation();
  const dropdownRef = useRef(null);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setProductDropdownOpen(false);
    setMaterialDropdownOpen(false);
    setCertDropdownOpen(false);
    setMobileSubmenu(null);
  }, [location.pathname]);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setProductDropdownOpen(false);
        setMaterialDropdownOpen(false);
        setCertDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleMobileSubmenu = (menuName) => {
    setMobileSubmenu(mobileSubmenu === menuName ? null : menuName);
  };

  const activeLinkClass = ({ isActive }) =>
    isActive
      ? 'text-steel-600 font-semibold border-b-2 border-steel-600 pb-1'
      : 'text-slate-700 hover:text-steel-600 font-medium transition-colors pb-1';

  return (
    <>
      {/* Top micro bar for corporate trust & direct contact */}
      <div className="bg-navy-950 text-slate-300 text-xs border-b border-navy-900 py-2 px-4 hidden lg:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center space-x-1.5 text-slate-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse"></span>
              <span>Supplying Global Industrial Steel & Alloy Specifications</span>
            </span>
            <span className="text-slate-500">|</span>
            <span className="text-slate-400">EN 10204 3.1 & 3.2 Certified Mill Documentation Available</span>
          </div>
          <div className="flex items-center space-x-6">
            <a 
              href="mailto:sales@example.com" 
              className="flex items-center space-x-1.5 hover:text-white transition-colors"
              title="Demo sales contact"
            >
              <Mail className="w-3.5 h-3.5 text-industrial-amber" />
              <span>sales@example.com <span className="text-[10px] text-slate-400 font-mono">(Demo)</span></span>
            </a>
            <span className="text-slate-600">•</span>
            <a 
              href="tel:+910000000000" 
              className="flex items-center space-x-1.5 hover:text-white transition-colors"
              title="Demo phone contact"
            >
              <Phone className="w-3.5 h-3.5 text-industrial-amber" />
              <span>+91 00000 00000 <span className="text-[10px] text-slate-400 font-mono">(Demo)</span></span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm" ref={dropdownRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Temporary SteelIndia Brand Logo */}
            <Link to="/" className="flex items-center space-x-3 group" aria-label="SteelIndia Home">
              <div className="w-11 h-11 bg-navy-900 rounded-lg flex items-center justify-center border border-slate-700 shadow-inner group-hover:bg-steel-800 transition-colors">
                {/* Clean industrial geometric steel ingot/plate symbol */}
                <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 7l8-4 8 4-8 4-8-4z" fill="#D95C14" stroke="#D95C14" fillOpacity="0.3" />
                  <path d="M4 7v10l8 4 8-4V7" />
                  <path d="M12 11v10" />
                </svg>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center tracking-tight font-extrabold text-2xl font-sans text-navy-950">
                  <span>STEEL</span>
                  <span className="text-industrial-amber ml-0.5">INDIA</span>
                </div>
                <span className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold -mt-1">
                  Industrial Piping & Alloys
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8 text-sm">
              <NavLink to="/" className={activeLinkClass} end>
                Home
              </NavLink>

              <NavLink to="/about" className={activeLinkClass}>
                About
              </NavLink>

              {/* Product Mega Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => {
                  setProductDropdownOpen(true);
                  setMaterialDropdownOpen(false);
                  setCertDropdownOpen(false);
                }}
              >
                <Link
                  to="/product"
                  className={`flex items-center space-x-1 ${
                    location.pathname.startsWith('/product')
                      ? 'text-steel-600 font-semibold border-b-2 border-steel-600 pb-1'
                      : 'text-slate-700 hover:text-steel-600 font-medium transition-colors pb-1'
                  }`}
                  onClick={() => setProductDropdownOpen(false)}
                >
                  <span>Product</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${productDropdownOpen ? 'rotate-180 text-steel-600' : 'text-slate-400'}`} />
                </Link>

                {/* Dropdown Menu Box */}
                {productDropdownOpen && (
                  <div 
                    className="absolute left-1/2 -translate-x-1/2 mt-2 w-[720px] bg-white rounded-xl shadow-2xl border border-slate-200/90 py-5 px-6 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                    onMouseLeave={() => setProductDropdownOpen(false)}
                  >
                    <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100">
                      <div className="flex items-center space-x-2 text-slate-800 font-bold text-sm">
                        <Box className="w-4 h-4 text-industrial-amber" />
                        <span>All 17 Industrial Product Categories</span>
                      </div>
                      <Link 
                        to="/product" 
                        onClick={() => setProductDropdownOpen(false)}
                        className="text-xs font-semibold text-steel-600 hover:text-steel-800 flex items-center space-x-1"
                      >
                        <span>View Full Product Catalog</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>

                    <div className="grid grid-cols-3 gap-x-6 gap-y-2.5 max-h-[420px] overflow-y-auto pr-1">
                      {products.map((p) => (
                        <Link
                          key={p.id}
                          to={`/product/${p.id}`}
                          onClick={() => setProductDropdownOpen(false)}
                          className="group flex items-start space-x-2.5 p-2 rounded-lg hover:bg-slate-50 transition-colors text-left"
                        >
                          <div className="w-2 h-2 rounded-full bg-slate-300 group-hover:bg-industrial-amber mt-1.5 shrink-0 transition-colors" />
                          <div>
                            <div className="text-xs font-semibold text-slate-800 group-hover:text-steel-600 transition-colors">
                              {p.name}
                            </div>
                            <div className="text-[11px] text-slate-400 line-clamp-1">
                              {p.tag}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-100 bg-slate-50 -mx-6 -mb-5 px-6 py-3 rounded-b-xl flex items-center justify-between text-xs text-slate-600">
                      <span>Looking for custom dimensional tolerances or test requirements?</span>
                      <Link 
                        to="/contact" 
                        onClick={() => setProductDropdownOpen(false)}
                        className="font-semibold text-steel-700 hover:text-industrial-amber"
                      >
                        Send Project Specifications &rarr;
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Material Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => {
                  setMaterialDropdownOpen(true);
                  setProductDropdownOpen(false);
                  setCertDropdownOpen(false);
                }}
              >
                <Link
                  to="/material"
                  className={`flex items-center space-x-1 ${
                    location.pathname.startsWith('/material')
                      ? 'text-steel-600 font-semibold border-b-2 border-steel-600 pb-1'
                      : 'text-slate-700 hover:text-steel-600 font-medium transition-colors pb-1'
                  }`}
                  onClick={() => setMaterialDropdownOpen(false)}
                >
                  <span>Material</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${materialDropdownOpen ? 'rotate-180 text-steel-600' : 'text-slate-400'}`} />
                </Link>

                {materialDropdownOpen && (
                  <div 
                    className="absolute left-1/2 -translate-x-1/2 mt-2 w-[680px] bg-white rounded-xl shadow-2xl border border-slate-200/90 py-5 px-6 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                    onMouseLeave={() => setMaterialDropdownOpen(false)}
                  >
                    <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100">
                      <div className="flex items-center space-x-2 text-slate-800 font-bold text-sm">
                        <Layers className="w-4 h-4 text-industrial-amber" />
                        <span>All 15 Steel & Alloy Families</span>
                      </div>
                      <Link 
                        to="/material" 
                        onClick={() => setMaterialDropdownOpen(false)}
                        className="text-xs font-semibold text-steel-600 hover:text-steel-800 flex items-center space-x-1"
                      >
                        <span>Material Overview</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>

                    <div className="grid grid-cols-3 gap-x-4 gap-y-2.5 max-h-[380px] overflow-y-auto pr-1">
                      {materials.map((m) => (
                        <Link
                          key={m.id}
                          to={`/material/${m.id}`}
                          onClick={() => setMaterialDropdownOpen(false)}
                          className="group flex items-start space-x-2.5 p-2 rounded-lg hover:bg-slate-50 transition-colors text-left"
                        >
                          <div className="w-2 h-2 rounded-full bg-slate-300 group-hover:bg-steel-600 mt-1.5 shrink-0 transition-colors" />
                          <div>
                            <div className="text-xs font-semibold text-slate-800 group-hover:text-steel-600 transition-colors">
                              {m.name}
                            </div>
                            <div className="text-[11px] text-slate-400 line-clamp-1">
                              {m.grades[0]}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-100 bg-slate-50 -mx-6 -mb-5 px-6 py-2.5 rounded-b-xl text-[11px] text-slate-500 text-center">
                      Material families shown as available categories; grade availability confirmed upon specific inquiry.
                    </div>
                  </div>
                )}
              </div>

              {/* Certificate Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => {
                  setCertDropdownOpen(true);
                  setProductDropdownOpen(false);
                  setMaterialDropdownOpen(false);
                }}
              >
                <Link
                  to="/certificate"
                  className={`flex items-center space-x-1 ${
                    location.pathname.startsWith('/certificate')
                      ? 'text-steel-600 font-semibold border-b-2 border-steel-600 pb-1'
                      : 'text-slate-700 hover:text-steel-600 font-medium transition-colors pb-1'
                  }`}
                  onClick={() => setCertDropdownOpen(false)}
                >
                  <span>Certificate</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${certDropdownOpen ? 'rotate-180 text-steel-600' : 'text-slate-400'}`} />
                </Link>

                {certDropdownOpen && (
                  <div 
                    className="absolute left-1/2 -translate-x-1/2 mt-2 w-[460px] bg-white rounded-xl shadow-2xl border border-slate-200/90 py-5 px-6 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                    onMouseLeave={() => setCertDropdownOpen(false)}
                  >
                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                      <div className="flex items-center space-x-2 text-slate-800 font-bold text-sm">
                        <ShieldCheck className="w-4 h-4 text-emerald-600" />
                        <span>Quality & Documentation Categories</span>
                      </div>
                      <Link 
                        to="/certificate" 
                        onClick={() => setCertDropdownOpen(false)}
                        className="text-xs font-semibold text-steel-600 hover:text-steel-800"
                      >
                        All Info &rarr;
                      </Link>
                    </div>

                    <div className="space-y-1.5">
                      {certificateCategories.map((cert) => (
                        <Link
                          key={cert.id}
                          to="/certificate"
                          onClick={() => setCertDropdownOpen(false)}
                          className="group block p-2 rounded-lg hover:bg-slate-50 transition-colors"
                        >
                          <div className="text-xs font-semibold text-slate-800 group-hover:text-steel-600 flex items-center justify-between">
                            <span>{cert.name}</span>
                            <span className="text-[10px] text-slate-400 font-normal">Demo</span>
                          </div>
                          <div className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                            {cert.summary}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <NavLink to="/contact" className={activeLinkClass}>
                Contact
              </NavLink>
            </nav>

            {/* Right Action: Get a Quote */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-industrial-amber hover:bg-industrial-hover shadow-sm transition-all duration-150 hover:shadow"
              >
                <span>Get a Quote</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-700 hover:text-steel-600 hover:bg-slate-100 transition-colors focus:outline-none"
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 max-h-[85vh] overflow-y-auto">
            <Link
              to="/"
              className="block py-2 text-base font-semibold text-slate-800 hover:text-steel-600 border-b border-slate-100"
            >
              Home
            </Link>

            <Link
              to="/about"
              className="block py-2 text-base font-semibold text-slate-800 hover:text-steel-600 border-b border-slate-100"
            >
              About SteelIndia
            </Link>

            {/* Product Mobile Accordion */}
            <div className="border-b border-slate-100 pb-2">
              <button
                type="button"
                onClick={() => toggleMobileSubmenu('product')}
                className="w-full flex items-center justify-between py-2 text-base font-semibold text-slate-800 hover:text-steel-600"
              >
                <span className="flex items-center space-x-2">
                  <Box className="w-4 h-4 text-industrial-amber" />
                  <span>Product Categories ({products.length})</span>
                </span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileSubmenu === 'product' ? 'rotate-180 text-steel-600' : 'text-slate-400'}`} />
              </button>

              {mobileSubmenu === 'product' && (
                <div className="pl-4 py-2 space-y-1.5 bg-slate-50 rounded-lg my-1">
                  <Link
                    to="/product"
                    className="block py-1.5 text-xs font-bold text-steel-700 hover:underline"
                  >
                    &rarr; View All 17 Products
                  </Link>
                  {products.map((p) => (
                    <Link
                      key={p.id}
                      to={`/product/${p.id}`}
                      className="block py-1 text-xs text-slate-700 hover:text-steel-600"
                    >
                      {p.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Material Mobile Accordion */}
            <div className="border-b border-slate-100 pb-2">
              <button
                type="button"
                onClick={() => toggleMobileSubmenu('material')}
                className="w-full flex items-center justify-between py-2 text-base font-semibold text-slate-800 hover:text-steel-600"
              >
                <span className="flex items-center space-x-2">
                  <Layers className="w-4 h-4 text-steel-600" />
                  <span>Material Families ({materials.length})</span>
                </span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileSubmenu === 'material' ? 'rotate-180 text-steel-600' : 'text-slate-400'}`} />
              </button>

              {mobileSubmenu === 'material' && (
                <div className="pl-4 py-2 space-y-1.5 bg-slate-50 rounded-lg my-1">
                  <Link
                    to="/material"
                    className="block py-1.5 text-xs font-bold text-steel-700 hover:underline"
                  >
                    &rarr; View All Material Families
                  </Link>
                  {materials.map((m) => (
                    <Link
                      key={m.id}
                      to={`/material/${m.id}`}
                      className="block py-1 text-xs text-slate-700 hover:text-steel-600"
                    >
                      {m.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Certificate Mobile Accordion */}
            <div className="border-b border-slate-100 pb-2">
              <button
                type="button"
                onClick={() => toggleMobileSubmenu('certificate')}
                className="w-full flex items-center justify-between py-2 text-base font-semibold text-slate-800 hover:text-steel-600"
              >
                <span className="flex items-center space-x-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Certificates & Testing</span>
                </span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileSubmenu === 'certificate' ? 'rotate-180 text-steel-600' : 'text-slate-400'}`} />
              </button>

              {mobileSubmenu === 'certificate' && (
                <div className="pl-4 py-2 space-y-1.5 bg-slate-50 rounded-lg my-1">
                  <Link
                    to="/certificate"
                    className="block py-1.5 text-xs font-bold text-steel-700 hover:underline"
                  >
                    &rarr; View Documentation Overview
                  </Link>
                  {certificateCategories.map((c) => (
                    <Link
                      key={c.id}
                      to="/certificate"
                      className="block py-1 text-xs text-slate-700 hover:text-steel-600"
                    >
                      {c.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/contact"
              className="block py-2 text-base font-semibold text-slate-800 hover:text-steel-600 border-b border-slate-100"
            >
              Contact Us
            </Link>

            {/* Direct Contact info inside mobile menu */}
            <div className="pt-2 pb-1 space-y-2 text-xs text-slate-600">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-industrial-amber" />
                <span>sales@example.com (Demo)</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-industrial-amber" />
                <span>+91 00000 00000 (Demo)</span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                to="/contact"
                className="w-full inline-flex items-center justify-center px-5 py-3 rounded-lg text-sm font-semibold text-white bg-industrial-amber hover:bg-industrial-hover shadow text-center"
              >
                <span>Request a Quotation</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
