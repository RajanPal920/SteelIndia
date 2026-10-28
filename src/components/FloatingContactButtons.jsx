import React, { useState } from 'react';
import { Phone, MessageCircle, X } from 'lucide-react';

// Client-configurable contact parameters
export const CONTACT_CONFIG = {
  // Replace with client's actual international phone number without spaces or '+' for WhatsApp API (e.g. '919876543210')
  whatsappNumber: '910000000000',
  // Replace with client's actual tel link (e.g. '+919876543210')
  telNumber: '+910000000000',
  defaultWhatsappMessage: 'Hello SteelIndia team, I would like to inquire about steel products and material specifications for an upcoming project.',
  isDemo: true
};

export default function FloatingContactButtons() {
  const [showDemoTip, setShowDemoTip] = useState(false);

  const encodedMessage = encodeURIComponent(CONTACT_CONFIG.defaultWhatsappMessage);
  const whatsappUrl = `https://wa.me/${CONTACT_CONFIG.whatsappNumber}?text=${encodedMessage}`;

  return (
    <div className="fixed bottom-6 right-5 z-40 flex flex-col items-end space-y-3 pointer-events-auto">
      {/* Demo Warning Tooltip / Badge */}
      {showDemoTip && (
        <div className="bg-navy-950 text-white text-xs p-3 rounded-lg shadow-xl max-w-xs border border-slate-700 animate-in fade-in duration-200">
          <div className="flex items-center justify-between font-bold text-industrial-amber mb-1">
            <span>Demo Contact Links</span>
            <button 
              type="button" 
              onClick={() => setShowDemoTip(false)}
              className="text-slate-400 hover:text-white"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
          <p className="text-[11px] text-slate-300 leading-normal">
            These floating buttons connect to configurable constants. Update <code className="text-industrial-glow">CONTACT_CONFIG</code> in <code className="text-slate-200">FloatingContactButtons.jsx</code> with your official phone numbers before launch.
          </p>
        </div>
      )}

      {/* Action Buttons Group */}
      <div className="flex flex-col space-y-2.5">
        {/* Call Button */}
        <a
          href={`tel:${CONTACT_CONFIG.telNumber}`}
          onMouseEnter={() => setShowDemoTip(true)}
          className="group flex items-center bg-steel-700 hover:bg-steel-800 text-white p-3.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5 border border-steel-600 focus:outline-none"
          aria-label="Direct Phone Call (Demo Contact)"
          title="Direct Phone Call: +91 00000 00000"
        >
          <Phone className="w-5 h-5 text-white" />
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:px-2 text-xs font-bold transition-all duration-300">
            Call +91 00000 00000 (Demo)
          </span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setShowDemoTip(true)}
          className="group flex items-center bg-emerald-600 hover:bg-emerald-700 text-white p-3.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5 border border-emerald-500 focus:outline-none"
          aria-label="Chat on WhatsApp (Demo Contact)"
          title="WhatsApp Inquiry: +91 00000 00000"
        >
          {/* Custom crisp SVG WhatsApp Icon */}
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.101-.476-.15-.676.15-.2.301-.776.978-.952 1.18-.175.2-.351.226-.652.075-.301-.15-1.272-.469-2.423-1.496-.896-.799-1.501-1.787-1.677-2.088-.175-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.176.2-.301.301-.502.101-.2.05-.376-.025-.526-.075-.151-.677-1.632-.927-2.235-.244-.588-.492-.508-.676-.518-.175-.008-.376-.01-.577-.01-.2 0-.527.075-.802.376-.276.301-1.053 1.03-1.053 2.512s1.078 2.913 1.229 3.114c.15.2 2.122 3.24 5.141 4.544.718.31 1.278.495 1.716.634.722.23 1.38.197 1.9.12.58-.087 1.78-.727 2.03-1.43.25-.702.25-1.304.175-1.43-.075-.125-.276-.201-.577-.351zM12.042 21.928h-.008c-1.777 0-3.522-.477-5.048-1.383l-.362-.215-3.753.984 1.002-3.66-.236-.375c-.996-1.585-1.522-3.418-1.522-5.304 0-5.496 4.475-9.971 9.976-9.971 2.663 0 5.166 1.038 7.047 2.921 1.88 1.882 2.915 4.387 2.914 7.051 0 5.498-4.474 9.976-9.978 9.976zm8.465-18.441C18.253 1.227 15.26 0 12.042 0 5.397 0 .002 5.396 0 12.04c0 2.123.555 4.197 1.609 6.024L0 24l6.104-1.601c1.767.964 3.765 1.472 5.93 1.472h.008c6.643 0 12.039-5.397 12.041-12.042 0-3.218-1.252-6.242-3.526-8.514z"/>
          </svg>
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:px-2 text-xs font-bold transition-all duration-300">
            WhatsApp Inquiry
          </span>
        </a>
      </div>
    </div>
  );
}
