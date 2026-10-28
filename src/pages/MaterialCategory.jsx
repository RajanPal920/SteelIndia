import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';
import InquiryForm from '../components/InquiryForm';
import SEO from '../components/SEO';
import { materials } from '../data/materials';
import { 
  CheckCircle2, ArrowRight, ShieldCheck, FileCheck2, 
  Layers, Compass, AlertCircle, ChevronRight 
} from 'lucide-react';

export default function MaterialCategory() {
  const { material: materialId } = useParams();

  const material = materials.find(m => m.id === materialId);

  if (!material) {
    return <Navigate to="/material" replace />;
  }

  const relatedMaterials = materials
    .filter(m => m.id !== material.id)
    .slice(0, 4);

  return (
    <div className="flex flex-col min-h-screen bg-white text-left">
      <SEO 
        title={`${material.name} Specifications & Applications | SteelIndia`}
        description={material.tagline}
      />

      <Breadcrumb 
        items={[
          { label: 'Materials', to: '/material' },
          { label: material.name }
        ]} 
      />

      {/* Hero Strip */}
      <section className="bg-slate-50 border-b border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-steel-700 bg-white px-3 py-1 rounded-full border border-slate-200">
              {material.category}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-950 tracking-tight">
              {material.name}
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              {material.tagline}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content & Specs */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left 7 cols */}
            <div className="lg:col-span-7 space-y-8">
              {/* Characteristics */}
              <div className="space-y-3">
                <h2 className="text-xl font-bold text-navy-950">
                  Metallurgical Characteristics
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {material.characteristics}
                </p>
              </div>

              {/* Supported Grades */}
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-navy-950">
                  Commonly Supplied Grades
                </h3>
                <div className="flex flex-wrap gap-2">
                  {material.grades.map((grade, idx) => (
                    <span
                      key={idx}
                      className="px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold bg-steel-50 text-steel-800 border border-steel-200"
                    >
                      {grade}
                    </span>
                  ))}
                </div>
              </div>

              {/* Available Product Forms */}
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-navy-950">
                  Available Supply Forms
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {material.typicalForms.map((form, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-800 flex items-center space-x-2"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{form}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Applicable Standards */}
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-navy-950">
                  Applicable International Standards
                </h3>
                <div className="flex flex-wrap gap-2">
                  {material.standards.map((std, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded text-xs font-mono bg-slate-100 text-slate-700 border border-slate-200"
                    >
                      {std}
                    </span>
                  ))}
                </div>
              </div>

              {/* Applications */}
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-navy-950">
                  Industry Applications
                </h3>
                <div className="grid grid-cols-2 gap-2 text-xs text-slate-600">
                  {material.applications.map((app, idx) => (
                    <div key={idx} className="p-3 bg-white rounded-lg border border-slate-200 shadow-2xs flex items-center space-x-2">
                      <Compass className="w-4 h-4 text-steel-600 shrink-0" />
                      <span>{app}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Disclaimer */}
              <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-500 flex items-start space-x-2.5">
                <AlertCircle className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <p>
                  Exact grade availability, minimum order quantity, and mill test requirements for {material.name} will be validated upon submission of your detailed RFQ.
                </p>
              </div>
            </div>

            {/* Right 5 cols: Inquiry Form */}
            <div className="lg:col-span-5">
              <div className="sticky top-28 space-y-6">
                <InquiryForm
                  defaultMaterial={material.name}
                  title={`Inquire for ${material.name}`}
                />

                {/* Related Materials List */}
                <div className="bg-slate-50 rounded-xl border border-slate-200 p-5 space-y-3">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Other Material Families
                  </div>
                  <div className="space-y-2">
                    {relatedMaterials.map((rel) => (
                      <Link
                        key={rel.id}
                        to={`/material/${rel.id}`}
                        className="flex items-center justify-between p-2.5 rounded-lg bg-white border border-slate-200 hover:border-steel-400 text-xs font-semibold text-slate-800 transition-colors"
                      >
                        <span>{rel.name}</span>
                        <ChevronRight className="w-4 h-4 text-slate-400" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
