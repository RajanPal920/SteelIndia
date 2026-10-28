import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { Home, ArrowLeft, Box, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-[70vh] items-center justify-center bg-white px-4 py-20 text-center">
      <SEO title="Page Not Found (404) | SteelIndia" />

      <div className="w-16 h-16 rounded-2xl bg-amber-50 text-industrial-amber flex items-center justify-center mb-6 border border-amber-200">
        <Box className="w-8 h-8" />
      </div>

      <span className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400">
        ERROR 404
      </span>

      <h1 className="text-3xl sm:text-4xl font-extrabold text-navy-950 mt-2 mb-3">
        Page Not Found
      </h1>

      <p className="text-sm sm:text-base text-slate-500 max-w-md mb-8 leading-relaxed">
        The steel category, material specification, or URL you requested does not exist or may have been relocated.
      </p>

      <div className="flex flex-wrap justify-center gap-3">
        <Link
          to="/"
          className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold text-white bg-navy-950 hover:bg-slate-800 transition-colors shadow"
        >
          <Home className="w-4 h-4" />
          <span>Return to Homepage</span>
        </Link>

        <Link
          to="/product"
          className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors border border-slate-200"
        >
          <Box className="w-4 h-4 text-industrial-amber" />
          <span>Explore Product Range</span>
        </Link>
      </div>
    </div>
  );
}
