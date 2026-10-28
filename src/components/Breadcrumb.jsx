import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export default function Breadcrumb({ items = [] }) {
  return (
    <nav aria-label="Breadcrumb" className="py-3 px-4 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto flex items-center space-x-2 text-xs sm:text-sm text-slate-500">
        <Link to="/" className="flex items-center hover:text-steel-600 transition-colors">
          <Home className="w-3.5 h-3.5 mr-1" />
          <span>Home</span>
        </Link>
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <React.Fragment key={idx}>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              {isLast || !item.to ? (
                <span className="font-semibold text-slate-800 truncate" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link to={item.to} className="hover:text-steel-600 transition-colors truncate">
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
