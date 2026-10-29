import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export default function MaterialCard({ material, className = '' }) {
  return (
    <Link
      to={`/material/${material.id}`}
      className={`group block bg-white rounded-xl border border-slate-200/90 p-5 hover:border-[#0055A4] hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 text-left relative overflow-hidden flex flex-col justify-between ${className}`}
    >
      <div>
        {/* Top Row: Category & Arrow Icon */}
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#0055A4] bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100">
            {material.category}
          </span>
          <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#E3000F] group-hover:translate-x-1 transition-all" />
        </div>

        {/* Material Name */}
        <h3 className="text-base font-bold text-slate-800 group-hover:text-[#0055A4] transition-colors mt-1">
          {material.name}
        </h3>

        {/* Grades */}
        <div className="mt-2.5 flex flex-wrap gap-1.5">
          {material.grades.slice(0, 3).map((grade, idx) => (
            <span
              key={idx}
              className="text-[11px] font-mono bg-slate-100 text-slate-700 px-2 py-0.5 rounded border border-slate-200/60"
            >
              {grade}
            </span>
          ))}
          {material.grades.length > 3 && (
            <span className="text-[10px] text-slate-400 self-center font-medium">
              +{material.grades.length - 3} more
            </span>
          )}
        </div>

        {/* Characteristics */}
        <p className="text-xs text-slate-500 mt-3 line-clamp-2 leading-relaxed">
          {material.characteristics}
        </p>
      </div>

      {/* Bottom Row: Standards */}
      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
        <span className="font-medium">Typical standards:</span>
        <span className="font-mono text-[#0055A4] font-bold">{material.standards[0]}</span>
      </div>
    </Link>
  );
}