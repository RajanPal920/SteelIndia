import React from 'react';
import Breadcrumb from '../components/Breadcrumb';
import InquiryForm from '../components/InquiryForm';
import SEO from '../components/SEO';
import {
  Mail, Phone, MapPin, Clock, MessageSquare,
  Globe2, ShieldCheck, AlertCircle, FileText, Building2, ExternalLink,
  User, Briefcase
} from 'lucide-react';

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-left font-sans">
      <SEO
        title="Contact Steel India Co. (Chennai) Pvt. Ltd. | Request Quotation & Technical Inquiries"
        description="Submit your product dimensions, material grades, and specifications to Steel India Co. (Chennai) Pvt. Ltd. Contact our Chennai, Bangalore, Mumbai, and Anantapur branches."
      />

      <Breadcrumb items={[{ label: 'Contact Us' }]} />

      {/* Hero Strip */}
      <section className="bg-[#E3000F] text-white py-14 sm:py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-[#0055A4]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#E3000F] bg-white px-4 py-1.5 rounded-full shadow-sm">
              COMMERCIAL & TECHNICAL RFQ DESK
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white drop-shadow-md">
              Contact Steel India Co. <br className="hidden sm:block" /> (Chennai) Pvt. Ltd.
            </h1>
            <p className="text-base sm:text-lg text-white/90 leading-relaxed">
              Have an upcoming project requisition or Bill of Materials? Share your product category, grade, dimensions, and quantity for a prompt technical review from our Chennai team.
            </p>
          </div>
        </div>
      </section>

      {/* Main 2-Column Content */}
      <section className="py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

            {/* Left 5 Cols */}
            <div className="lg:col-span-5 space-y-6">

              {/* Main Contact Card */}
              <div className="bg-white rounded-2xl border border-slate-200 shadow-lg overflow-hidden">
                <div className="bg-[#0055A4] px-6 py-4">
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-[#E3000F] bg-white rounded-full p-0.5" />
                    Head Office & Site Office
                  </h3>
                </div>
                <div className="p-6 space-y-6 text-sm text-slate-700">
                  {/* H.O Address */}
                  <div className="flex items-start space-x-3.5">
                    <div className="w-10 h-10 rounded-full bg-red-50 text-[#E3000F] flex items-center justify-center shrink-0 border border-red-100">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">Head Office (H.O)</div>
                      <div className="text-slate-900 font-medium text-[15px] leading-snug">
                        No 25, Muthumari Chetty Street,<br />
                        Chennai – 600 001.
                      </div>
                    </div>
                  </div>

                  {/* S.O Address */}
                  <div className="flex items-start space-x-3.5">
                    <div className="w-10 h-10 rounded-full bg-blue-50 text-[#0055A4] flex items-center justify-center shrink-0 border border-blue-100">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">Site Office (S.O)</div>
                      <div className="text-slate-900 font-medium text-[15px] leading-snug">
                        125, Linghi Chetty Street,<br />
                        Chennai – 600 001.
                      </div>
                    </div>
                  </div>

                  <hr className="border-slate-100" />

                  {/* Email */}
                  <div className="flex items-start space-x-3.5">
                    <div className="w-10 h-10 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">Email Inquiry</div>
                      <a href="mailto:steelindialtd@yahoo.com" className="text-[#0055A4] font-bold hover:underline text-[15px]">
                        steelindialtd@yahoo.com
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start space-x-3.5">
                    <div className="w-10 h-10 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">Phone Lines</div>
                      <a href="tel:+914425228058" className="text-slate-900 font-bold hover:text-[#E3000F] transition-colors block text-[15px]">
                        +91 44 2522 8058
                      </a>
                      <a href="tel:+914423463810" className="text-slate-900 font-bold hover:text-[#E3000F] transition-colors block text-[15px]">
                        +91 44 2346 3810
                      </a>
                      <div className="text-slate-500 mt-1 font-medium">Mobile: <a href="tel:+919840425654" className="hover:text-[#E3000F]">+91 98404 25654</a></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Key Contact Persons */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
                <h4 className="text-sm font-bold text-slate-800 uppercase tracking-widest border-b border-slate-100 pb-3 mb-4 flex items-center justify-between">
                  <span>Key Contact Persons</span>
                  <User className="w-4 h-4 text-[#0055A4]" />
                </h4>
                <div className="space-y-3">
                  {/* Person 1 */}
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100 hover:border-[#0055A4] transition-colors group">
                    <div className="w-10 h-10 rounded-full bg-[#0055A4] text-white flex items-center justify-center font-bold text-sm shrink-0">
                      SM
                    </div>
                    <div className="flex-1 min-w-0">
                      <h5 className="text-sm font-bold text-slate-800 group-hover:text-[#0055A4] transition-colors">Sales Manager</h5>
                      <p className="text-xs text-slate-500 truncate">Commercial & RFQ Inquiries</p>
                    </div>
                    <a href="tel:+919840425654" className="p-2 rounded-full bg-white text-[#0055A4] hover:bg-[#0055A4] hover:text-white transition-colors shadow-sm" aria-label="Call Sales Manager">
                      <Phone className="w-4 h-4" />
                    </a>
                  </div>

                  {/* Person 2 */}
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100 hover:border-[#0055A4] transition-colors group">
                    <div className="w-10 h-10 rounded-full bg-[#E3000F] text-white flex items-center justify-center font-bold text-sm shrink-0">
                      TE
                    </div>
                    <div className="flex-1 min-w-0">
                      <h5 className="text-sm font-bold text-slate-800 group-hover:text-[#0055A4] transition-colors">Technical Engineer</h5>
                      <p className="text-xs text-slate-500 truncate">Specifications & Standards</p>
                    </div>
                    <a href="tel:+914425228058" className="p-2 rounded-full bg-white text-[#0055A4] hover:bg-[#0055A4] hover:text-white transition-colors shadow-sm" aria-label="Call Technical Engineer">
                      <Phone className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Branch Contacts Card - FIXED ALIGNMENT */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
                <h4 className="text-sm font-bold text-slate-800 uppercase tracking-widest border-b border-slate-100 pb-3 mb-4 flex items-center justify-between">
                  <span>Our Branches</span>
                  <Globe2 className="w-4 h-4 text-[#0055A4]" />
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {/* Anantapur */}
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 flex flex-col justify-center">
                    <div className="text-[#E3000F] font-bold text-[11px] uppercase tracking-wider mb-1">Anantapur</div>
                    <a href="tel:+917373535350" className="text-slate-800 text-xs font-bold hover:text-[#0055A4] whitespace-nowrap">
                      +91 73735 35350
                    </a>
                  </div>
                  {/* Bangalore */}
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 flex flex-col justify-center">
                    <div className="text-[#E3000F] font-bold text-[11px] uppercase tracking-wider mb-1">Bangalore</div>
                    <a href="tel:+918838854885" className="text-slate-800 text-xs font-bold hover:text-[#0055A4] whitespace-nowrap">
                      +91 88388 54885
                    </a>
                  </div>
                  {/* Mumbai */}
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 flex flex-col justify-center">
                    <div className="text-[#E3000F] font-bold text-[11px] uppercase tracking-wider mb-1">Mumbai</div>
                    <a href="tel:+919820045251" className="text-slate-800 text-xs font-bold hover:text-[#0055A4] whitespace-nowrap">
                      +91 98200 45251
                    </a>
                  </div>
                </div>
              </div>

            </div>

            {/* Right 7 Cols: Complete Inquiry Form */}
            <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 shadow-lg p-6 sm:p-8">
              <div className="mb-6 border-b border-slate-100 pb-4">
                <h2 className="text-2xl font-bold text-[#0055A4]">Project Inquiry Form</h2>
                <p className="text-slate-500 text-sm mt-1">Fill out the details below and our team will get back to you within 24 hours.</p>
              </div>
              <InquiryForm title="" />
            </div>

          </div>
        </div>
      </section>

      {/* Full Width Map Section with Proper Padding */}
      <section className="w-full bg-slate-200 border-t border-slate-300">
        <div className="relative w-full h-[400px] sm:h-[500px]">
          {/* Map Iframe */}
          <iframe
            title="Steel India Co. Chennai Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.1!2d80.2785!3d13.0937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265d!2sLinghi%20Chetty%20Street%2C%20Sowcarpet%2C%20Chennai%2C%20Tamil%20Nadu%20600001!5e0!3m2!1sen!2sin!4v1"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0"
          />

          {/* Floating Address Card on Map - FIXED PADDING */}
          <div className="absolute bottom-6 left-4 right-4 sm:left-8 sm:right-auto sm:w-[380px] bg-white p-5 rounded-xl shadow-xl flex items-start gap-4 border border-slate-200 z-10">
            <div className="w-10 h-10 rounded-full bg-red-50 text-[#E3000F] flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-slate-800 text-sm mb-1">Site Office Location</h4>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                125, Linghi Chetty Street,<br />
                Sowcarpet, Chennai – 600 001.
              </p>
              <a
                href="https://maps.google.com/?q=125+Linghi+Chetty+Street+Chennai+600001"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-xs font-bold text-[#0055A4] hover:text-[#E3000F] transition-colors"
              >
                Get Directions <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}