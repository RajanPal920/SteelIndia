import React from 'react';
import Breadcrumb from '../components/Breadcrumb';
import InquiryForm from '../components/InquiryForm';
import SEO from '../components/SEO';
import { 
  Mail, Phone, MapPin, Clock, MessageSquare, 
  Globe2, ShieldCheck, AlertCircle, FileText 
} from 'lucide-react';

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-left">
      <SEO 
        title="Contact SteelIndia | Request Quotation & Technical Inquiries"
        description="Submit your product dimensions, material grades, and specifications to SteelIndia's inquiry desk. Demo contact channels for domestic and international buyers."
      />

      <Breadcrumb items={[{ label: 'Contact Us' }]} />

      {/* Hero Strip */}
      <section className="bg-slate-50 border-b border-slate-200 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-industrial-amber bg-white px-3 py-1 rounded-full border border-slate-200">
              COMMERCIAL & TECHNICAL RFQ DESK
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-navy-950 tracking-tight">
              Contact SteelIndia
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Have an upcoming project requisition or Bill of Materials? Share your product category, grade, dimensions, and quantity for an prompt technical review.
            </p>
          </div>
        </div>
      </section>

      {/* Main 2-Column Content */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left 5 Cols: Contact Information Cards & Map Placeholder */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-sm">
                <div className="border-b border-slate-100 pb-4 flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-navy-950">Corporate Sales Desk</h3>
                    <p className="text-xs text-slate-500 mt-0.5">Direct technical communication</p>
                  </div>
                  <span className="text-[10px] font-mono font-bold bg-amber-50 text-industrial-amber px-2 py-0.5 rounded border border-amber-200">
                    Demo Details
                  </span>
                </div>

                <div className="space-y-4 text-xs sm:text-sm text-slate-700">
                  <div className="flex items-start space-x-3.5">
                    <div className="w-9 h-9 rounded-lg bg-steel-50 text-steel-700 flex items-center justify-center shrink-0 border border-steel-100">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Email Inquiry</div>
                      <a href="mailto:sales@example.com" className="text-steel-700 font-semibold hover:underline text-sm">
                        sales@example.com
                      </a>
                      <div className="text-[11px] text-slate-400">Response within 24 hours</div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3.5">
                    <div className="w-9 h-9 rounded-lg bg-steel-50 text-steel-700 flex items-center justify-center shrink-0 border border-steel-100">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Phone / WhatsApp</div>
                      <a href="tel:+910000000000" className="text-steel-700 font-semibold hover:underline text-sm">
                        +91 00000 00000
                      </a>
                      <div className="text-[11px] text-slate-400">Configurable official client line</div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3.5">
                    <div className="w-9 h-9 rounded-lg bg-steel-50 text-steel-700 flex items-center justify-center shrink-0 border border-steel-100">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Office & Warehouse Location</div>
                      <div className="text-slate-800 font-semibold">
                        Mumbai, Maharashtra, India
                      </div>
                      <div className="text-[11px] text-slate-400">Official registered address to be updated</div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3.5">
                    <div className="w-9 h-9 rounded-lg bg-steel-50 text-steel-700 flex items-center justify-center shrink-0 border border-steel-100">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Business Working Hours</div>
                      <div className="text-slate-800 font-semibold">
                        Monday to Saturday
                      </div>
                      <div className="text-[11px] text-slate-400">Standard business operating hours</div>
                    </div>
                  </div>
                </div>

                {/* International Inquiries Support Note */}
                <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-1">
                  <div className="font-bold text-navy-950 flex items-center space-x-1.5">
                    <Globe2 className="w-4 h-4 text-industrial-amber" />
                    <span>Global Export Inquiries</span>
                  </div>
                  <p>
                    We welcome inquiries from international EPC contractors and stockists. Our commercial team assists with custom sea-worthy export crating, fumigation certificates, and consular invoice preparation.
                  </p>
                </div>
              </div>

              {/* Map Placeholder Card (Not embedding an incorrect address as instructed) */}
              <div className="bg-slate-50 rounded-xl border border-slate-200 p-6 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Location Map Placeholder
                  </div>
                  <span className="text-[10px] text-slate-400 font-mono">Interactive Map</span>
                </div>
                
                <div className="h-44 rounded-lg bg-slate-200/80 border border-slate-300 flex flex-col items-center justify-center p-4 text-center space-y-2">
                  <MapPin className="w-8 h-8 text-slate-400 animate-bounce" />
                  <div className="text-xs font-bold text-slate-700">
                    Google Maps Integration Placeholder
                  </div>
                  <p className="text-[11px] text-slate-500 max-w-xs">
                    This placeholder will embed the live Google Maps iframe once the client's official GPS coordinates and registered address are confirmed.
                  </p>
                </div>
              </div>
            </div>

            {/* Right 7 Cols: Complete Inquiry Form */}
            <div className="lg:col-span-7">
              <InquiryForm title="Project Inquiry & Quotation Request" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
