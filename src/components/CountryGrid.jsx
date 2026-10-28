import React, { useState } from 'react';
import { countries } from '../data/countries';
import { Globe2, AlertCircle } from 'lucide-react';

export default function CountryGrid() {
  const [imageErrors, setImageErrors] = useState({});

  const handleImageError = (code) => {
    setImageErrors((prev) => ({ ...prev, [code]: true }));
  };

  return (
    <section className="py-16 bg-slate-50 border-y border-slate-200" aria-labelledby="countries-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-steel-700 bg-steel-100 px-3 py-1 rounded-full border border-steel-200">
            <Globe2 className="w-3.5 h-3.5 text-steel-600" />
            <span>International Markets Reach</span>
          </div>

          <h2 id="countries-heading" className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy-950 tracking-tight">
            Connecting Steel Supply Across Borders
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Contact our team to discuss your product and material requirements for your destination market.
          </p>
        </div>

        {/* 5 x 5 Responsive Grid: 5 columns on desktop, 3 columns on tablet, 2 columns on mobile */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 text-left">
          {countries.map((country, idx) => {
            const hasError = imageErrors[country.code];
            return (
              <div
                key={country.code}
                className="group bg-white rounded-lg border border-slate-200 p-3.5 hover:border-steel-400 hover:shadow-md transition-all duration-200 flex items-center space-x-3 text-left"
              >
                {/* Flag Icon */}
                <div className="w-8 h-6 rounded overflow-hidden shrink-0 shadow-xs border border-slate-200 bg-slate-100 flex items-center justify-center">
                  {!hasError ? (
                    <img
                      src={`https://flagcdn.com/w80/${country.code}.png`}
                      alt={`${country.name} flag`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      onError={() => handleImageError(country.code)}
                    />
                  ) : (
                    <span className="text-[10px] font-bold text-slate-600 uppercase font-mono">
                      {country.code}
                    </span>
                  )}
                </div>

                {/* Country Details */}
                <div className="min-w-0 flex-1">
                  <div className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-steel-700 transition-colors truncate">
                    {country.name}
                  </div>
                  <div className="text-[10px] text-slate-400 truncate flex items-center justify-between">
                    <span>{country.region}</span>
                    <span className="font-mono text-slate-300">#{idx + 1}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Target Market Notice Requirement */}
        <div className="mt-8 max-w-2xl mx-auto flex items-start justify-center space-x-2 text-xs text-slate-500 bg-white border border-slate-200 p-3 rounded-lg text-left">
          <AlertCircle className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
          <p>
            <span className="font-semibold text-slate-700">Notice:</span> The countries listed above represent sample target export destinations for inquiry planning. Official supply terms and export clearances are confirmed on a per-order basis.
          </p>
        </div>
      </div>
    </section>
  );
}
