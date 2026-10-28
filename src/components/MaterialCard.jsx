import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export default function MaterialCard({ material, className = '' }) {
  return (
    <Link
      to={`/material/${material.id}`}
      className={`group block bg-white rounded-xl border border-slate-200/90 p-5 hover:border-steel-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 text-left relative overflow-hidden flex flex-col justify-between ${className}`}
    >
      <div className="absolute top-0 right-0 w-16 h-16 bg-slate-50 group-hover:bg-steel-50 rounded-bl-full transition-colors -mr-6 -mt-6 pointer-events-none" />
      
      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] font-bold uppercase tracking-wider text-steel-700 bg-steel-50 px-2 py-0.5 rounded border border-steel-100">
            {material.category}
          </span>
          <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-industrial-amber group-hover:translate-x-1 transition-all" />
        </div>

        <h3 className="text-base font-bold text-navy-950 group-hover:text-steel-700 transition-colors">
          {material.name}
        </h3>

        <div className="mt-2.5 flex flex-wrap gap-1">
          {material.grades.slice(0, 3).map((grade, idx) => (
            <span 
              key={idx}
              className="text-[11px] font-mono bg-slate-100 text-slate-700 px-1.5 py-0.5 rounded"
            >
              {grade}
            </span>
          ))}
          {material.grades.length > 3 && (
            <span className="text-[10px] text-slate-400 self-center">
              +{material.grades.length - 3} more
            </span>
          )}
        </div>

        <p className="text-xs text-slate-500 mt-2.5 line-clamp-2 leading-relaxed">
          {material.characteristics}
        </p>
      </div>

      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
        <span>Typical standards:</span>
        <span className="font-mono text-slate-600 font-semibold">{material.standards[0]}</span>
      </div>
    </Link>
  );
}
