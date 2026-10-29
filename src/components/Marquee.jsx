import React from 'react';

const marqueeLabels = [
  'STEEL PIPES & TUBES',
  'SHEETS & PLATES',
  'RODS & BARS',
  'BUTT WELD FITTINGS',
  'FORGED FITTINGS',
  'FLANGES',
  'INDUSTRIAL STEEL SOLUTIONS'
];

export default function Marquee() {
  return (
    <div
      className="bg-[#0055A4] border-y border-[#003d7a] py-3.5 overflow-hidden select-none w-full"
      aria-label="SteelIndia Industrial Capabilities Continuous Marquee"
    >
      <div className="flex w-max">
        {/* Track 1 */}
        <div className="flex shrink-0 items-center space-x-8 pr-8 animate-marquee-rl">
          {marqueeLabels.map((item, idx) => (
            <React.Fragment key={`t1-a-${idx}`}>
              <span className="text-xs sm:text-sm font-extrabold tracking-widest text-white uppercase font-mono whitespace-nowrap">
                {item}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#E3000F] shrink-0" aria-hidden="true" />
            </React.Fragment>
          ))}
          {marqueeLabels.map((item, idx) => (
            <React.Fragment key={`t1-b-${idx}`}>
              <span className="text-xs sm:text-sm font-extrabold tracking-widest text-white uppercase font-mono whitespace-nowrap">
                {item}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#E3000F] shrink-0" aria-hidden="true" />
            </React.Fragment>
          ))}
        </div>

        {/* Track 2 (Clone for 100% gapless continuous right-to-left loop) */}
        <div className="flex shrink-0 items-center space-x-8 pr-8 animate-marquee-rl" aria-hidden="true">
          {marqueeLabels.map((item, idx) => (
            <React.Fragment key={`t2-a-${idx}`}>
              <span className="text-xs sm:text-sm font-extrabold tracking-widest text-white uppercase font-mono whitespace-nowrap">
                {item}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#E3000F] shrink-0" />
            </React.Fragment>
          ))}
          {marqueeLabels.map((item, idx) => (
            <React.Fragment key={`t2-b-${idx}`}>
              <span className="text-xs sm:text-sm font-extrabold tracking-widest text-white uppercase font-mono whitespace-nowrap">
                {item}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#E3000F] shrink-0" />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}