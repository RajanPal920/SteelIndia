import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

const slides = [
  {
    id: 1,
    eyebrow: 'STEELINDIA | INDUSTRIAL STEEL SUPPLY',
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
    eyebrow: 'STEELINDIA | INDUSTRIAL STEEL SUPPLY',
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

  // Autoplay timer with 5.5s duration, paused on user interaction
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      return;
    }

    if (!isPaused) {
      timerRef.current = setInterval(() => {
        nextSlide();
      }, 5500);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, nextSlide]);

  // Keyboard navigation support
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      prevSlide();
    } else if (e.key === 'ArrowRight') {
      nextSlide();
    }
  };

  return (
    <section
      ref={sliderRef}
      className="relative w-full bg-navy-950 overflow-hidden border-b border-navy-900 select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      aria-label="SteelIndia Full-Width Industrial Hero Showcase"
    >
      {/* 
        Hero Container Dimensions:
        Full-width edge-to-edge container without dark overlay layer
      */}
      <div className="relative w-full min-h-[500px] sm:min-h-[520px] md:min-h-[540px] lg:h-[650px]">

        {/* Background Images Layer — Full Natural Brightness with Smooth Crossfade (NO OVERLAY) */}
        {slides.map((slide, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${isActive ? 'opacity-100 z-0' : 'opacity-0 z-0 pointer-events-none'
                }`}
              aria-hidden={!isActive}
            >
              {/* Full-width clean background photograph without any dark overlay */}
              <img
                src={slide.image}
                alt={slide.imageAlt}
                className="w-full h-full object-cover object-center lg:object-[center_35%] transform scale-100 will-change-transform"
                loading={index === 0 ? "eager" : "lazy"}
                fetchPriority={index === 0 ? "high" : "auto"}
              />
            </div>
          );
        })}

        {/* Foreground Content Layer — Centered Max-Width Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-between py-8 sm:py-10 lg:py-12">

          {/* Main Hero Content Block */}
          <div className="flex-1 flex flex-col justify-center my-auto">
            {slides.map((slide, index) => {
              const isActive = index === currentSlide;
              if (!isActive) return null;

              return (
                <div
                  key={`content-${slide.id}`}
                  className="w-full sm:max-w-xl md:max-w-2xl lg:w-[58%] xl:w-[54%] text-left animate-fadeIn bg-navy-950/70 sm:bg-navy-950/65 backdrop-blur-md p-6 sm:p-8 lg:p-9 rounded-2xl border border-white/20 shadow-2xl"
                >
                  {/* Eyebrow Label with illuminated accent dot */}
                  <div className="inline-flex items-center space-x-2 bg-navy-900 text-industrial-glow px-3 py-1.5 rounded-md text-xs font-bold tracking-widest uppercase border border-white/20 shadow-sm mb-3.5 sm:mb-4">
                    <span className="w-2 h-2 rounded-full bg-industrial-amber shadow-[0_0_8px_rgba(217,92,20,1)] animate-pulse" aria-hidden="true" />
                    <span>{slide.eyebrow}</span>
                  </div>

                  {/* Main Large Bold Heading with crisp text shadow for readability */}
                  <h1
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] xl:text-[46px] font-extrabold text-white leading-[1.15] tracking-tight mb-3.5 sm:mb-4"
                    style={{
                      textShadow: '0 2px 4px rgba(0, 0, 0, 0.9), 0 4px 16px rgba(0, 0, 0, 0.8)'
                    }}
                  >
                    {slide.heading}
                  </h1>

                  {/* Description Text */}
                  <p
                    className="text-sm sm:text-base lg:text-[17px] text-slate-100 leading-relaxed max-w-xl mb-5 sm:mb-6 font-normal"
                    style={{
                      textShadow: '0 1px 3px rgba(0, 0, 0, 0.9), 0 2px 8px rgba(0, 0, 0, 0.7)'
                    }}
                  >
                    {slide.description}
                  </p>

                  {/* Trust & Specification Feature Badges */}
                  <div className="flex flex-wrap items-center gap-2.5 mb-6 sm:mb-7">
                    <div className="inline-flex items-center space-x-1.5 bg-navy-900/90 text-white px-3 py-1.5 rounded-md text-xs font-semibold border border-white/20 shadow-sm">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{slide.featureBadge}</span>
                    </div>
                    <div className="inline-flex items-center space-x-1.5 bg-navy-900/90 text-white px-3 py-1.5 rounded-md text-xs font-semibold border border-white/20 shadow-sm">
                      <ShieldCheck className="w-3.5 h-3.5 text-steel-300 shrink-0" />
                      <span>MTC EN 10204 3.1 Traceability</span>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                    {/* Primary CTA (SteelIndia Orange) */}
                    <Link
                      to={slide.primaryLink}
                      id="hero-primary-cta"
                      className="group inline-flex items-center justify-center px-6 sm:px-7 py-3 sm:py-3.5 rounded-lg text-sm sm:text-base font-bold text-white bg-industrial-amber hover:bg-industrial-hover shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-industrial-amber focus:ring-offset-2 focus:ring-offset-navy-950"
                    >
                      <span>{slide.primaryCta}</span>
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
                    </Link>

                    {/* Secondary CTA (Solid High-Contrast Navy/Border) */}
                    <Link
                      to={slide.secondaryLink}
                      id="hero-secondary-cta"
                      className="inline-flex items-center justify-center px-6 sm:px-7 py-3 sm:py-3.5 rounded-lg text-sm sm:text-base font-bold text-white bg-navy-900 hover:bg-navy-800 border-2 border-white/40 hover:border-white shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-navy-950"
                    >
                      <span>{slide.secondaryCta}</span>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Slider Controls Bar: Docked Controls with Dark Backdrop */}
          <div className="flex items-center justify-between pt-4 mt-auto">

            {/* Left: Interactive Progress Indicators & Number Counter Dock */}
            <div className="flex items-center space-x-3 bg-navy-950/85 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/20 shadow-lg">
              <div className="flex items-center space-x-2">
                {slides.map((_, dotIdx) => (
                  <button
                    key={`dot-${dotIdx}`}
                    type="button"
                    onClick={() => setCurrentSlide(dotIdx)}
                    className={`h-2.5 transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-industrial-amber ${dotIdx === currentSlide
                      ? 'w-8 sm:w-10 bg-industrial-amber shadow-[0_0_8px_rgba(217,92,20,0.8)]'
                      : 'w-2.5 sm:w-3 bg-white/40 hover:bg-white/80'
                      }`}
                    aria-label={`Go to slide ${dotIdx + 1} of ${totalSlides}`}
                  />
                ))}
              </div>

              {/* Slide Counter (e.g. 01 / 03) */}
              <span className="text-xs sm:text-sm font-mono text-white font-bold tracking-wider ml-1" aria-live="polite">
                0{currentSlide + 1} <span className="text-slate-400">/</span> 0{totalSlides}
              </span>
            </div>

            {/* Right: Prev / Next Navigation Arrows Dock */}
            <div className="flex items-center space-x-2 bg-navy-950/85 backdrop-blur-md p-1.5 rounded-xl border border-white/20 shadow-lg">
              <button
                type="button"
                onClick={prevSlide}
                id="hero-prev-slide-btn"
                className="p-2 sm:p-2.5 rounded-lg bg-navy-900 hover:bg-navy-800 text-white border border-white/10 hover:border-white/30 transition-colors focus:outline-none focus:ring-2 focus:ring-industrial-amber"
                aria-label="Previous Slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                type="button"
                onClick={nextSlide}
                id="hero-next-slide-btn"
                className="p-2 sm:p-2.5 rounded-lg bg-navy-900 hover:bg-navy-800 text-white border border-white/10 hover:border-white/30 transition-colors focus:outline-none focus:ring-2 focus:ring-industrial-amber"
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
