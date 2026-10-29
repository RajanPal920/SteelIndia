import React, { useState, useMemo } from 'react';
import { countries } from '../data/countries';
import {
  Globe2, ShieldCheck, PackageCheck, FileCheck2,
  AlertCircle, ArrowUpRight
} from 'lucide-react';

export default function CountryGrid() {
  const [selectedRegion, setSelectedRegion] = useState('ALL');
  const [imageErrors, setImageErrors] = useState({});

  const handleImageError = (code) => {
    setImageErrors((prev) => ({ ...prev, [code]: true }));
  };

  // Distinct continental regions
  const regions = useMemo(() => {
    const map = {};
    countries.forEach((c) => {
      map[c.region] = (map[c.region] || 0) + 1;
    });
    return [
      { name: 'ALL', label: 'All Markets', count: countries.length },
      ...Object.keys(map).sort().map((region) => ({
        name: region,
        label: region,
        count: map[region]
      }))
    ];
  }, []);

  // Filter countries
  const filteredCountries = useMemo(() => {
    return countries.filter((c) => {
      return selectedRegion === 'ALL' || c.region === selectedRegion;
    });
  }, [selectedRegion]);

  return (
    <section
      className="relative py-16 sm:py-24 bg-slate-50 border-y border-slate-200 select-none overflow-hidden"
      aria-labelledby="countries-heading"
      id="international-reach"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Section Header */}
        <div className="max-w-3xl mx-auto space-y-4 mb-10 sm:mb-12">
          <div className="inline-flex items-center space-x-2 bg-blue-50 text-[#0055A4] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border border-blue-100 shadow-sm">
            <Globe2 className="w-4 h-4 text-[#E3000F]" />
            <span>International Markets Reach</span>
          </div>

          <h2 id="countries-heading" className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0055A4] tracking-tight">
            Connecting Steel Supply Across Borders
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Supplying precision steel pipes, forged flanges, and specialty alloys to global industrial and infrastructure projects.
            Our export network spans across major international markets.
          </p>
        </div>

        {/* Region Filter Tabs */}
        <div className="mb-10 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
          {regions.map((region) => {
            const isActive = selectedRegion === region.name;
            return (
              <button
                key={region.name}
                type="button"
                onClick={() => setSelectedRegion(region.name)}
                className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 border ${isActive
                    ? 'bg-[#E3000F] text-white border-[#E3000F] shadow-md scale-105'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-[#0055A4] hover:text-[#0055A4] shadow-sm'
                  }`}
              >
                <span>{region.label}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono ${isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
                  }`}>
                  {region.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Country Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3.5 sm:gap-4 text-left">
          {filteredCountries.map((country) => {
            const hasError = imageErrors[country.code];
            return (
              <div
                key={country.code}
                className="group relative bg-white rounded-2xl border border-slate-200 hover:border-[#0055A4]/40 p-3.5 sm:p-4 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex items-center space-x-3.5 overflow-hidden"
              >
                {/* Top Accent Bar (Red on hover) */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#E3000F] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                {/* Flag Frame */}
                <div className="w-11 h-7.5 sm:w-12 sm:h-8 rounded-lg overflow-hidden border border-slate-200 shadow-sm bg-slate-100 shrink-0 flex items-center justify-center">
                  {!hasError ? (
                    <img
                      src={`https://flagcdn.com/w160/${country.code}.png`}
                      alt={`${country.name} flag`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      loading="lazy"
                      onError={() => handleImageError(country.code)}
                    />
                  ) : (
                    <span className="text-[10px] font-bold text-slate-600 uppercase font-mono">
                      {country.code}
                    </span>
                  )}
                </div>

                {/* Country Info */}
                <div className="min-w-0 flex-1">
                  <h3 className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-[#0055A4] transition-colors truncate tracking-tight">
                    {country.name}
                  </h3>
                  <div className="text-[11px] text-slate-500 truncate flex items-center justify-between mt-0.5 font-normal">
                    <span className="truncate">{country.region}</span>
                    <span className="font-mono text-slate-400 text-[10px] ml-1 bg-slate-50 px-1.5 py-0.5 rounded border border-slate-200/60 shrink-0">
                      {country.dial}
                    </span>
                  </div>
                </div>

                {/* Hover Arrow */}
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-[#E3000F] transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0 opacity-0 group-hover:opacity-100" />
              </div>
            );
          })}
        </div>

        {/* Global Logistics & Export Assurance Strip */}
        <div className="mt-14 pt-8 border-t border-slate-200 grid grid-cols-1 md:grid-cols-3 gap-5 text-left">

          <div className="flex items-start space-x-3.5 bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:border-[#0055A4] transition-colors group">
            <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#0055A4] flex items-center justify-center shrink-0 group-hover:bg-[#0055A4] group-hover:text-white transition-colors">
              <PackageCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900">Seaworthy Export Packing</div>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Treated wooden boxes, plastic pipe end-caps, hex-bundling, and VCI anti-corrosion barrier wrapping for ocean freight.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3.5 bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:border-[#0055A4] transition-colors group">
            <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#0055A4] flex items-center justify-center shrink-0 group-hover:bg-[#0055A4] group-hover:text-white transition-colors">
              <FileCheck2 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900">Comprehensive Export Dossiers</div>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Complete Mill Test Certificates (EN 10204 3.1 / 3.2), Certificate of Origin (COO), and customs clearance documentation.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3.5 bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:border-[#0055A4] transition-colors group">
            <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#0055A4] flex items-center justify-center shrink-0 group-hover:bg-[#0055A4] group-hover:text-white transition-colors">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900">Third-Party Inspection Ready</div>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Inspection coordination with leading international agencies: SGS, TUV, Bureau Veritas, DNV, and Lloyd's Register.
              </p>
            </div>
          </div>

        </div>

        {/* Notice */}
        <div className="mt-8 max-w-2xl mx-auto flex items-start justify-center space-x-2 text-xs text-slate-600 bg-white border border-slate-200 p-4 rounded-xl text-left shadow-sm">
          <AlertCircle className="w-4 h-4 text-[#E3000F] shrink-0 mt-0.5" />
          <p>
            <span className="font-bold text-slate-800">International Trade Notice:</span> The countries listed above represent active and target export destinations for inquiry planning. Official supply terms, port clearances, and incoterms (FOB/CIF/DDP) are confirmed on an order-by-order basis.
          </p>
        </div>

      </div>
    </section>
  );
}