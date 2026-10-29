import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export default function Breadcrumb({ items = [] }) {
  return (
    <nav aria-label="Breadcrumb" className="py-3 px-4 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto flex items-center space-x-2 text-xs sm:text-sm text-slate-500">

        {/* Home Link - Brand Blue on hover */}
        <Link
          to="/"
          className="flex items-center hover:text-[#0055A4] transition-colors group"
        >
          <Home className="w-3.5 h-3.5 mr-1 group-hover:text-[#E3000F] transition-colors" />
          <span>Home</span>
        </Link>

        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <React.Fragment key={idx}>
              {/* Separator - Brand Red */}
              <ChevronRight className="w-3.5 h-3.5 text-[#E3000F] shrink-0" />

              {isLast || !item.to ? (
                // Current Page (No Link) - Brand Blue and Bold
                <span
                  className="font-bold text-[#0055A4] truncate"
                  aria-current="page"
                >
                  {item.label}
                </span>
              ) : (
                // Previous Pages (Clickable) - Standard with Blue Hover
                <Link
                  to={item.to}
                  className="hover:text-[#0055A4] transition-colors truncate font-medium"
                >
                  {item.label}
                </Link>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </nav>
  );
}