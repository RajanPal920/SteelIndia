import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import {
  Menu, X, ChevronDown, Phone, Mail, ArrowRight,
  Layers, ShieldCheck, Box, ChevronRight, FileText
} from 'lucide-react';
import {
  FaWhatsapp,
  FaFacebookF,
  FaInstagram
} from 'react-icons/fa';
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

  // FIXED UNDERLINE CLASSES: inline-block ensures the underline is exactly as wide as the text
  const activeLinkClass = ({ isActive }) =>
    isActive
      ? 'text-[#0055A4] font-bold border-b-2 border-[#E3000F] pb-1 inline-block'
      : 'text-slate-700 hover:text-[#0055A4] font-medium transition-colors pb-1 inline-block';

  return (
    <>
      {/* Top Micro Bar: Contact Info Left, Social Icons Right */}
      <div className="bg-[#0055A4] text-white text-xs py-2 px-4 hidden lg:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Left: Phone & Email */}
          <div className="flex items-center space-x-6">
            <a
              href="tel:+914425228058"
              className="flex items-center space-x-2 hover:text-[#E3000F] transition-colors font-medium"
              title="Call Steel India Co."
            >
              <Phone className="w-3.5 h-3.5" />
              <span>+91 44 2522 8058 / 2346 3810</span>
            </a>
            <span className="text-white/30">|</span>
            <a
              href="mailto:steelindialtd@yahoo.com"
              className="flex items-center space-x-2 hover:text-[#E3000F] transition-colors font-medium"
              title="Email Steel India Co."
            >
              <Mail className="w-3.5 h-3.5" />
              <span>steelindialtd@yahoo.com</span>
            </a>
          </div>

          {/* Right: Social Icons */}
          <div className="flex items-center space-x-4">
            <span className="text-white/70 text-[11px] font-medium uppercase tracking-wider mr-2">Connect With Us</span>
            <a
              href="https://wa.me/919840425654"
              target="_blank"
              rel="noreferrer"
              className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#25D366] transition-colors"
              aria-label="WhatsApp"
            >
              <FaWhatsapp className="w-4 h-4" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#1877F2] transition-colors"
              aria-label="Facebook"
            >
              <FaFacebookF className="w-3.5 h-3.5" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#E4405F] transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm" ref={dropdownRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-26">
            {/* Official Steel India Co. (Chennai) Pvt. Ltd. Logo */}
            <Link to="/" className="flex items-center group" aria-label="Steel India Co. (Chennai) Pvt. Ltd. Home">
              <img
                src="/images/logo-steelindia.png"
                alt="Steel India Co. (Chennai) Pvt. Ltd."
                className="h-34 w-auto object-contain"
                style={{ maxWidth: '260px' }}
              />
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
                  className={`flex items-center space-x-1 ${location.pathname.startsWith('/product')
                    ? 'text-[#0055A4] font-bold border-b-2 border-[#E3000F] pb-1'
                    : 'text-slate-700 hover:text-[#0055A4] font-medium transition-colors pb-1'
                    }`}
                  onClick={() => setProductDropdownOpen(false)}
                >
                  <span>Product</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${productDropdownOpen ? 'rotate-180 text-[#0055A4]' : 'text-slate-400'}`} />
                </Link>

                {/* Product Dropdown Menu - RED BG */}
                {productDropdownOpen && (
                  <div
                    className="absolute left-1/2 -translate-x-1/2 mt-2 w-[720px] bg-[#E3000F] rounded-xl shadow-2xl border border-red-700/50 py-5 px-6 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                    onMouseLeave={() => setProductDropdownOpen(false)}
                  >
                    <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/20">
                      <div className="flex items-center space-x-2 text-white font-bold text-sm">
                        <Box className="w-4 h-4 text-white" />
                        <span>All 17 Industrial Product Categories</span>
                      </div>
                      <Link
                        to="/product"
                        onClick={() => setProductDropdownOpen(false)}
                        className="text-xs font-semibold text-white hover:text-black flex items-center space-x-1"
                      >
                        <span>View Full Product Catalog</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>

                    <div className="grid grid-cols-4 gap-x-6 gap-y-2.5 max-h-[420px] overflow-y-auto pr-1">
                      {products.map((p) => (
                        <Link
                          key={p.id}
                          to={`/product/${p.id}`}
                          onClick={() => setProductDropdownOpen(false)}
                          className="group flex items-start space-x-2.5 p-2 rounded-lg hover:bg-white transition-colors text-left"
                        >
                          <div className="w-2 h-2 rounded-full bg-white/40 group-hover:bg-white mt-1.5 shrink-0 transition-colors" />
                          <div>
                            <div className="text-xs font-semibold text-white group-hover:text-black transition-colors">
                              {p.name}
                            </div>
                            <div className="text-[11px] text-white/70 group-hover:text-black/70 line-clamp-1">
                              {p.tag}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>

                    <div className="mt-4 pt-3 border-t border-white/20 bg-red-700/50 -mx-6 -mb-5 px-6 py-3 rounded-b-xl flex items-center justify-between text-xs text-white">
                      <span>Looking for custom dimensional tolerances or test requirements?</span>
                      <Link
                        to="/contact"
                        onClick={() => setProductDropdownOpen(false)}
                        className="font-semibold text-white hover:text-black underline"
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
                  className={`flex items-center space-x-1 ${location.pathname.startsWith('/material')
                    ? 'text-[#0055A4] font-bold border-b-2 border-[#E3000F] pb-1'
                    : 'text-slate-700 hover:text-[#0055A4] font-medium transition-colors pb-1'
                    }`}
                  onClick={() => setMaterialDropdownOpen(false)}
                >
                  <span>Material</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${materialDropdownOpen ? 'rotate-180 text-[#0055A4]' : 'text-slate-400'}`} />
                </Link>

                {/* Material Dropdown Menu - RED BG */}
                {materialDropdownOpen && (
                  <div
                    className="absolute left-1/2 -translate-x-1/2 mt-2 w-[680px] bg-[#E3000F] rounded-xl shadow-2xl border border-red-700/50 py-5 px-6 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                    onMouseLeave={() => setMaterialDropdownOpen(false)}
                  >
                    <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/20">
                      <div className="flex items-center space-x-2 text-white font-bold text-sm">
                        <Layers className="w-4 h-4 text-white" />
                        <span>All 15 Steel & Alloy Families</span>
                      </div>
                      <Link
                        to="/material"
                        onClick={() => setMaterialDropdownOpen(false)}
                        className="text-xs font-semibold text-white hover:text-black flex items-center space-x-1"
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
                          className="group flex items-start space-x-2.5 p-2 rounded-lg hover:bg-white transition-colors text-left"
                        >
                          <div className="w-2 h-2 rounded-full bg-white/40 group-hover:bg-white mt-1.5 shrink-0 transition-colors" />
                          <div>
                            <div className="text-xs font-semibold text-white group-hover:text-black transition-colors">
                              {m.name}
                            </div>
                            <div className="text-[11px] text-white/70 group-hover:text-black/70 line-clamp-1">
                              {m.grades[0]}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>

                    <div className="mt-4 pt-3 border-t border-white/20 bg-red-700/50 -mx-6 -mb-5 px-6 py-2.5 rounded-b-xl text-[11px] text-white text-center">
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
                  className={`flex items-center space-x-1 ${location.pathname.startsWith('/certificate')
                    ? 'text-[#0055A4] font-bold border-b-2 border-[#E3000F] pb-1'
                    : 'text-slate-700 hover:text-[#0055A4] font-medium transition-colors pb-1'
                    }`}
                  onClick={() => setCertDropdownOpen(false)}
                >
                  <span>Certificate</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${certDropdownOpen ? 'rotate-180 text-[#0055A4]' : 'text-slate-400'}`} />
                </Link>

                {/* Certificate Dropdown Menu - RED BG */}
                {certDropdownOpen && (
                  <div
                    className="absolute left-1/2 -translate-x-1/2 mt-2 w-[460px] bg-[#E3000F] rounded-xl shadow-2xl border border-red-700/50 py-5 px-6 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                    onMouseLeave={() => setCertDropdownOpen(false)}
                  >
                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/20">
                      <div className="flex items-center space-x-2 text-white font-bold text-sm">
                        <ShieldCheck className="w-4 h-4 text-white" />
                        <span>Quality & Documentation Categories</span>
                      </div>
                      <Link
                        to="/certificate"
                        onClick={() => setCertDropdownOpen(false)}
                        className="text-xs font-semibold text-white hover:text-black"
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
                          className="group block p-2 rounded-lg hover:bg-white transition-colors"
                        >
                          <div className="text-xs font-semibold text-white group-hover:text-black flex items-center justify-between">
                            <span>{cert.name}</span>
                            <span className="text-[10px] text-white/60 font-normal">Demo</span>
                          </div>
                          <div className="text-[11px] text-white/70 group-hover:text-black/70 line-clamp-1 mt-0.5">
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
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-[#E3000F] hover:bg-[#C2000D] shadow-sm transition-all duration-150 hover:shadow"
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
                className="p-2 rounded-lg text-slate-700 hover:text-[#0055A4] hover:bg-slate-100 transition-colors focus:outline-none"
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
            {/* Mobile Top Bar Details */}
            <div className="flex flex-col space-y-2 pb-3 border-b border-slate-100">
              <a href="tel:+914425228058" className="flex items-center space-x-2 text-xs font-medium text-slate-600">
                <Phone className="w-3.5 h-3.5 text-[#E3000F]" />
                <span>+91 44 2522 8058</span>
              </a>
              <a href="mailto:steelindialtd@yahoo.com" className="flex items-center space-x-2 text-xs font-medium text-slate-600">
                <Mail className="w-3.5 h-3.5 text-[#E3000F]" />
                <span>steelindialtd@yahoo.com</span>
              </a>
            </div>

            <Link to="/" className="block py-2 text-base font-semibold text-slate-800 hover:text-[#0055A4] border-b border-slate-100">
              Home
            </Link>

            <Link to="/about" className="block py-2 text-base font-semibold text-slate-800 hover:text-[#0055A4] border-b border-slate-100">
              About SteelIndia
            </Link>

            {/* Product Mobile Accordion */}
            <div className="border-b border-slate-100 pb-2">
              <button
                type="button"
                onClick={() => toggleMobileSubmenu('product')}
                className="w-full flex items-center justify-between py-2 text-base font-semibold text-slate-800 hover:text-[#0055A4]"
              >
                <span className="flex items-center space-x-2">
                  <Box className="w-4 h-4 text-[#E3000F]" />
                  <span>Product Categories ({products.length})</span>
                </span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileSubmenu === 'product' ? 'rotate-180 text-[#0055A4]' : 'text-slate-400'}`} />
              </button>

              {mobileSubmenu === 'product' && (
                <div className="pl-4 py-2 space-y-1.5 bg-slate-50 rounded-lg my-1">
                  <Link to="/product" className="block py-1.5 text-xs font-bold text-[#0055A4] hover:underline">
                    &rarr; View All 17 Products
                  </Link>
                  {products.map((p) => (
                    <Link key={p.id} to={`/product/${p.id}`} className="block py-1 text-xs text-slate-700 hover:text-[#0055A4]">
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
                className="w-full flex items-center justify-between py-2 text-base font-semibold text-slate-800 hover:text-[#0055A4]"
              >
                <span className="flex items-center space-x-2">
                  <Layers className="w-4 h-4 text-[#0055A4]" />
                  <span>Material Families ({materials.length})</span>
                </span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileSubmenu === 'material' ? 'rotate-180 text-[#0055A4]' : 'text-slate-400'}`} />
              </button>

              {mobileSubmenu === 'material' && (
                <div className="pl-4 py-2 space-y-1.5 bg-slate-50 rounded-lg my-1">
                  <Link to="/material" className="block py-1.5 text-xs font-bold text-[#0055A4] hover:underline">
                    &rarr; View All Material Families
                  </Link>
                  {materials.map((m) => (
                    <Link key={m.id} to={`/material/${m.id}`} className="block py-1 text-xs text-slate-700 hover:text-[#0055A4]">
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
                className="w-full flex items-center justify-between py-2 text-base font-semibold text-slate-800 hover:text-[#0055A4]"
              >
                <span className="flex items-center space-x-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Certificates & Testing</span>
                </span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileSubmenu === 'certificate' ? 'rotate-180 text-[#0055A4]' : 'text-slate-400'}`} />
              </button>

              {mobileSubmenu === 'certificate' && (
                <div className="pl-4 py-2 space-y-1.5 bg-slate-50 rounded-lg my-1">
                  <Link to="/certificate" className="block py-1.5 text-xs font-bold text-[#0055A4] hover:underline">
                    &rarr; View Documentation Overview
                  </Link>
                  {certificateCategories.map((c) => (
                    <Link key={c.id} to="/certificate" className="block py-1 text-xs text-slate-700 hover:text-[#0055A4]">
                      {c.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/contact" className="block py-2 text-base font-semibold text-slate-800 hover:text-[#0055A4] border-b border-slate-100">
              Contact Us
            </Link>

            <div className="pt-2">
              <Link
                to="/contact"
                className="w-full inline-flex items-center justify-center px-5 py-3 rounded-lg text-sm font-semibold text-white bg-[#E3000F] hover:bg-[#C2000D] shadow text-center"
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