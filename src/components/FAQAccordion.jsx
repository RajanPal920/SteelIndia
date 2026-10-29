import React, { useState } from 'react';
import { faqs } from '../data/faqs';
import { ChevronDown, HelpCircle, ShieldCheck } from 'lucide-react';

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200" aria-labelledby="faq-heading">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-[#0055A4] bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100">
            <HelpCircle className="w-3.5 h-3.5 text-[#E3000F]" />
            <span>Buyer Guidance & Inquiries</span>
          </div>
          <h2 id="faq-heading" className="text-2xl sm:text-3xl font-extrabold text-[#0055A4]">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-slate-600 max-w-xl mx-auto">
            Find answers to common questions about product categorization, material grades, specifications, and test documentation.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`border rounded-xl overflow-hidden transition-all duration-300 ${isOpen
                    ? 'border-[#E3000F] shadow-md ring-1 ring-[#E3000F]/10'
                    : 'border-slate-200 bg-white hover:border-[#0055A4]/30'
                  }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(idx)}
                  className={`w-full flex items-center justify-between p-4 sm:p-5 text-left transition-colors focus:outline-none ${isOpen ? 'bg-red-50/50' : 'bg-white hover:bg-slate-50'
                    }`}
                  aria-expanded={isOpen}
                >
                  <span className={`text-sm sm:text-base font-bold pr-4 transition-colors ${isOpen ? 'text-[#E3000F]' : 'text-slate-900'
                    }`}>
                    {faq.question}
                  </span>

                  {/* Icon background changes based on state */}
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${isOpen ? 'bg-[#E3000F] text-white' : 'bg-slate-100 text-slate-500'
                    }`}>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''
                        }`}
                    />
                  </div>
                </button>

                {/* Answer Body with smooth transition */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                >
                  <div className="px-4 sm:px-5 pb-5 pt-1 text-sm text-slate-600 leading-relaxed bg-white border-t border-slate-100">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Trust Note */}
        <div className="mt-8 flex items-center justify-center gap-2 text-xs text-slate-500">
          <ShieldCheck className="w-4 h-4 text-[#E3000F]" />
          <span>All products are supplied with relevant Mill Test Certificates (EN 10204 3.1/3.2) upon request.</span>
        </div>

      </div>
    </section>
  );
}