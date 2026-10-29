import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

const slides = [
  {
    id: 1,
    eyebrow: 'STEEL INDIA | INDUSTRIAL STEEL SUPPLY',
    heading: 'Precision Pipes & Tubes. Built for Performance.',
    description: 'Explore a comprehensive range of seamless and welded steel pipes and tubes for engineering, process and industrial applications.',
    primaryCta: 'Explore Pipes & Tubes',
    primaryLink: '/product',
    secondaryCta: 'Request a Quote',
    secondaryLink: '/contact',
    image: '/images/hero-pipes.jpg',
    imageAlt: 'High-grade industrial steel piping systems and precision pipes in manufacturing facility',
    featureBadge: '1/8" to 48" NB Seamless & Welded'
  },
  {
    id: 2,
    eyebrow: 'QUALITY MATERIALS | DIVERSE APPLICATIONS',
    heading: 'Reliable Flanges for Every Connection.',
    description: 'Discover a broad selection of forged flanges including ASME B16.5, socket-weld, threaded and specialty flanges to support your project specifications.',
    primaryCta: 'Explore Flanges',
    primaryLink: '/material',
    secondaryCta: 'Contact Our Team',
    secondaryLink: '/contact',
    image: '/images/hero-fittings.jpg',
    imageAlt: 'Organized inventory of stainless steel flanges, butt-weld elbows, tees and connection components',
    featureBadge: 'ASME B16.5 Forged Flanges'
  },
  {
    id: 3,
    eyebrow: 'STEEL INDIA | INDUSTRIAL STEEL SUPPLY',
    heading: 'Precision Round Bars & Sheets.',
    description: 'Explore centerless ground round bars, forged bars and precision components for diverse engineering, process and infrastructure applications.',
    primaryCta: 'View Round Bars & Sheets',
    primaryLink: '/product',
    secondaryCta: 'Get in Touch',
    secondaryLink: '/contact',
    image: '/images/hero-bars.jpg',
    imageAlt: 'High-precision alloy materials, round bars and engineered steel components in metalworking facility',
    featureBadge: 'Centerless Ground & Forged'
  },
  {
    id: 4,
    eyebrow: 'QUALITY MATERIALS | DIVERSE APPLICATIONS',
    heading: 'Coils & Wires for Demanding Projects.',
    description: 'Discover precision steel coils, strips and wires in stainless steel, carbon steel and alloy grades for engineering, refinery and manufacturing sectors.',
    primaryCta: 'Explore Coils & Wires',
    primaryLink: '/material',
    secondaryCta: 'Contact Our Team',
    secondaryLink: '/contact',
    image: '/images/prod-coils-wire.jpg',
    imageAlt: 'Steel coils, strips and wire spools stacked in an industrial warehouse',
    featureBadge: 'Coils, Strips & Wires'
  }
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);
  const sliderRef = useRef(null);

  const totalSlides = slides.length;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  // Autoplay timer
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;

    if (!isPaused) {
      timerRef.current = setInterval(() => {
        nextSlide();
      }, 5500);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, nextSlide]);

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') prevSlide();
    else if (e.key === 'ArrowRight') nextSlide();
  };

  return (
    <section
      ref={sliderRef}
      className="relative w-full bg-slate-100 overflow-hidden select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      aria-label="Steel India Hero Showcase"
    >
      {/* Top Brand Accent Line (Logo Blue & Red) */}
      <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#0055A4] via-[#0055A4] to-[#E3000F] z-30"></div>

      <div className="relative w-full min-h-[550px] sm:min-h-[600px] md:min-h-[640px] lg:h-[600px]">

        {/* Background Images Layer — Clear, No Overlay */}
        {slides.map((slide, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${isActive ? 'opacity-100 z-0' : 'opacity-0 z-0 pointer-events-none'
                }`}
              aria-hidden={!isActive}
            >
              <img
                src={slide.image}
                alt={slide.imageAlt}
                className="w-full h-full object-cover object-center lg:object-[center_40%]"
                loading={index === 0 ? "eager" : "lazy"}
                fetchPriority={index === 0 ? "high" : "auto"}
              />
            </div>
          );
        })}

        {/* Foreground Content Layer */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-between py-10 lg:py-14">

          <div className="flex-1 flex flex-col justify-center">
            {slides.map((slide, index) => {
              const isActive = index === currentSlide;
              if (!isActive) return null;

              return (
                <div
                  key={`content-${slide.id}`}
                  className="w-full sm:max-w-xl md:max-w-2xl lg:w-[60%] xl:w-[55%] text-left animate-fadeIn"
                >
                  {/* Clean White Glass Card - No dark overlay, highly readable */}
                  <div className="bg-blue-100/60  backdrop-blur-m p-6 sm:p-8 lg:p-10 rounded-2xl border border-white/50">

                    {/* Eyebrow Label - Brand Colors */}
                    <div className="inline-flex items-center space-x-2 bg-white/50 text-[#0055A4] px-3.5 py-1.5 rounded-full text-[11px] sm:text-xs font-bold tracking-widest uppercase border border-blue-100 mb-4 sm:mb-5">
                      <span className="w-2 h-2 rounded-full bg-[#E3000F] animate-pulse" aria-hidden="true" />
                      <span>{slide.eyebrow}</span>
                    </div>

                    {/* Main Heading - Brand Blue */}
                    <h1 className="font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[44px] text-[#0055A4] leading-[1.1] tracking-tight mb-4">
                      {slide.heading}
                    </h1>

                    {/* Description Text */}
                    <p className="font-bold text-sm sm:text-base text-gray-700 leading-relaxed max-w-xl mb-6">
                      {slide.description}
                    </p>

                    {/* Feature Badges */}
                    <div className="flex flex-wrap items-center gap-2.5 mb-8">
                      <div className="inline-flex items-center space-x-1.5 bg-slate-50 text-slate-700 px-3 py-1.5 rounded-md text-xs font-bold border border-slate-200">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0055A4] shrink-0" />
                        <span>{slide.featureBadge}</span>
                      </div>
                      <div className="inline-flex items-center space-x-1.5 bg-slate-50 text-slate-700 px-3 py-1.5 rounded-md text-xs font-bold border border-slate-200">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#E3000F] shrink-0" />
                        <span>MTC EN 10204 3.1</span>
                      </div>
                    </div>

                    {/* CTA Buttons with Animations */}
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">

                      {/* Primary CTA - Brand Red with Hover effect */}
                      <Link
                        to={slide.primaryLink}
                        className="group relative inline-flex items-center justify-center px-7 py-3.5 rounded-lg text-sm font-bold text-white bg-[#E3000F] overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_10px_20px_-10px_rgba(227,0,15,0.5)] focus:outline-none focus:ring-2 focus:ring-[#E3000F] focus:ring-offset-2"
                      >
                        {/* Sliding background animation on hover */}
                        <span className="absolute inset-0 w-full h-full bg-[#C2000D] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
                        <span className="relative z-10 flex items-center">
                          {slide.primaryCta}
                          <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1.5" />
                        </span>
                      </Link>

                      {/* Secondary CTA - Brand Blue Outline with Hover effect */}
                      <Link
                        to={slide.secondaryLink}
                        className="group inline-flex items-center justify-center px-7 py-3.5 rounded-lg text-sm font-bold text-[#0055A4] bg-transparent border-2 border-[#0055A4] hover:bg-[#0055A4] hover:text-white transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-[#0055A4] focus:ring-offset-2"
                      >
                        <span>{slide.secondaryCta}</span>
                      </Link>

                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Slider Controls - Clean White Dock */}
          <div className="flex items-center justify-between pt-6 mt-auto">

            {/* Progress Indicators */}
            <div className="flex items-center space-x-4 bg-white/90 backdrop-blur-md px-4 py-2.5 rounded-full border border-slate-200 shadow-sm">
              <div className="flex items-center space-x-2">
                {slides.map((_, dotIdx) => (
                  <button
                    key={`dot-${dotIdx}`}
                    type="button"
                    onClick={() => setCurrentSlide(dotIdx)}
                    className={`h-2 transition-all duration-300 rounded-full focus:outline-none ${dotIdx === currentSlide
                      ? 'w-8 bg-[#E3000F]'
                      : 'w-2 bg-slate-300 hover:bg-slate-400'
                      }`}
                    aria-label={`Go to slide ${dotIdx + 1}`}
                  />
                ))}
              </div>
              <span className="text-xs font-mono font-bold text-slate-700 tracking-wider">
                <span className="text-[#0055A4]">0{currentSlide + 1}</span> / 0{totalSlides}
              </span>
            </div>

            {/* Navigation Arrows */}
            <div className="flex items-center space-x-2 bg-white/90 backdrop-blur-md p-1.5 rounded-full border border-slate-200 shadow-sm">
              <button
                type="button"
                onClick={prevSlide}
                className="p-2.5 rounded-full bg-slate-50 hover:bg-[#0055A4] text-slate-600 hover:text-white border border-slate-200 hover:border-[#0055A4] transition-all duration-300 focus:outline-none"
                aria-label="Previous Slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={nextSlide}
                className="p-2.5 rounded-full bg-slate-50 hover:bg-[#0055A4] text-slate-600 hover:text-white border border-slate-200 hover:border-[#0055A4] transition-all duration-300 focus:outline-none"
                aria-label="Next Slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}