import React, { useState } from 'react';
import { faqs } from '../data/faqs';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-16 bg-white border-b border-slate-200" aria-labelledby="faq-heading">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-2 mb-10">
          <div className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-steel-700 bg-steel-50 px-3 py-1 rounded-full border border-steel-200">
            <HelpCircle className="w-3.5 h-3.5 text-steel-600" />
            <span>Buyer Guidance & Inquiries</span>
          </div>
          <h2 id="faq-heading" className="text-2xl sm:text-3xl font-extrabold text-navy-950">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-slate-500 max-w-xl mx-auto">
            Find answers to common questions about product categorization, material grades, specifications, and test documentation.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border border-slate-200 rounded-lg overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 text-left bg-white hover:bg-slate-50 transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-slate-900 pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-industrial-amber' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed bg-slate-50/50 border-t border-slate-100">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
