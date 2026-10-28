import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';
import InquiryForm from '../components/InquiryForm';
import SEO from '../components/SEO';
import { products } from '../data/products';
import { 
  CheckCircle2, ArrowRight, ShieldCheck, FileText, 
  ChevronRight, Box, Compass 
} from 'lucide-react';

export default function ProductCategory() {
  const { category } = useParams();

  const product = products.find(p => p.id === category);

  if (!product) {
    return <Navigate to="/product" replace />;
  }

  // Related products (next 3)
  const relatedProducts = products
    .filter(p => p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen bg-white text-left">
      <SEO 
        title={`${product.name} Specifications | SteelIndia`}
        description={product.shortDesc}
      />

      <Breadcrumb 
        items={[
          { label: 'Products', to: '/product' },
          { label: product.name }
        ]} 
      />

      {/* Hero Strip */}
      <section className="bg-slate-50 border-b border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-industrial-amber bg-white px-3 py-1 rounded-full border border-slate-200">
                {product.tag}
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-950 tracking-tight">
                {product.name}
              </h1>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                {product.shortDesc}
              </p>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-sm aspect-[4/3] rounded-xl overflow-hidden bg-white border border-slate-200 p-4 shadow-sm">
                <img
                  src={product.image}
                  alt={`${product.name} visual showcase`}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Details & Specification Tables */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left 8 Cols: Specs & Materials */}
            <div className="lg:col-span-7 space-y-10">
              {/* Product Overview Description */}
              <div className="space-y-3">
                <h2 className="text-xl font-bold text-navy-950">
                  Engineering Overview
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {product.longDesc}
                </p>
              </div>

              {/* Technical Specifications Table */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-navy-950 flex items-center space-x-2">
                  <FileText className="w-5 h-5 text-steel-600" />
                  <span>Technical Specifications</span>
                </h3>

                <div className="border border-slate-200 rounded-xl overflow-hidden shadow-xs">
                  <table className="w-full text-xs sm:text-sm text-left">
                    <tbody className="divide-y divide-slate-100">
                      {Object.entries(product.specs).map(([key, val], idx) => (
                        <tr key={key} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/60'}>
                          <td className="px-4 py-3 font-bold text-slate-700 capitalize w-1/3 border-r border-slate-100">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </td>
                          <td className="px-4 py-3 text-slate-600 font-mono">
                            {val}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Supported Material Grades */}
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-navy-950">
                  Supported Material Families & Grades
                </h3>
                <p className="text-xs text-slate-500">
                  Available across the following alloy classifications (subject to inquiry confirmation):
                </p>
                <div className="flex flex-wrap gap-2">
                  {product.materials.map((mat, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 text-slate-800 border border-slate-200"
                    >
                      {mat}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Engineering Features */}
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-navy-950">
                  Quality & Performance Highlights
                </h3>
                <ul className="space-y-2.5">
                  {product.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-xs sm:text-sm text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Primary Industry Applications */}
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-navy-950">
                  Typical Industrial Applications
                </h3>
                <div className="grid grid-cols-2 gap-2 text-xs text-slate-700">
                  {product.applications.map((app, idx) => (
                    <div key={idx} className="p-3 bg-slate-50 rounded-lg border border-slate-200 flex items-center space-x-2">
                      <Compass className="w-4 h-4 text-industrial-amber shrink-0" />
                      <span>{app}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right 5 Cols: Dedicated Inquiry Form */}
            <div className="lg:col-span-5">
              <div className="sticky top-28 space-y-6">
                <InquiryForm 
                  defaultCategory={product.name}
                  title={`Inquire about ${product.name}`}
                />

                {/* Other Categories Link Box */}
                <div className="bg-slate-50 rounded-xl border border-slate-200 p-5 space-y-3">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Related Product Categories
                  </div>
                  <div className="space-y-2">
                    {relatedProducts.map((rel) => (
                      <Link
                        key={rel.id}
                        to={`/product/${rel.id}`}
                        className="flex items-center justify-between p-2 rounded-lg bg-white border border-slate-200 hover:border-steel-400 text-xs font-semibold text-slate-800 transition-colors"
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
