import React, { useState } from 'react';
import { products } from '../data/products';
import { materials } from '../data/materials';
import { countries } from '../data/countries';
import { Send, CheckCircle2, AlertCircle, RefreshCw } from 'lucide-react';

export default function InquiryForm({ defaultCategory = '', defaultMaterial = '', title = "Submit a Product Inquiry" }) {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    country: '',
    productCategory: defaultCategory,
    materialGrade: defaultMaterial,
    dimensions: '',
    quantity: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full Name is required.';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid corporate email address.';
    }
    if (!formData.phone.trim()) errs.phone = 'Contact phone number is required.';
    if (!formData.productCategory) errs.productCategory = 'Please select a product category.';
    if (!formData.quantity.trim()) errs.quantity = 'Estimated quantity or tonnage is required.';
    
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Documented demo handler: Simulates network payload handling
    // In production, connect this to an endpoint e.g., fetch('/api/inquiries', { method: 'POST', body: JSON.stringify(formData) })
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData({ ...formData });
    }, 600);
  };

  const handleReset = () => {
    setSubmittedData(null);
    setFormData({
      fullName: '',
      companyName: '',
      email: '',
      phone: '',
      country: '',
      productCategory: '',
      materialGrade: '',
      dimensions: '',
      quantity: '',
      message: ''
    });
    setErrors({});
  };

  if (submittedData) {
    return (
      <div className="bg-white rounded-xl border border-emerald-200 p-6 sm:p-8 text-center space-y-4 shadow-sm animate-in fade-in duration-300">
        <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <h3 className="text-xl font-bold text-navy-950">Inquiry Logged (Demo Mode)</h3>

        <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
          Thank you, <span className="font-semibold text-slate-900">{submittedData.fullName}</span>. Your inquiry for{' '}
          <span className="font-semibold text-steel-700">{submittedData.productCategory}</span> has been simulated successfully.
        </p>

        <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 text-left text-xs font-mono space-y-1 max-w-md mx-auto text-slate-700 overflow-x-auto">
          <div><span className="text-slate-400">Company:</span> {submittedData.companyName || 'N/A'}</div>
          <div><span className="text-slate-400">Email:</span> {submittedData.email}</div>
          <div><span className="text-slate-400">Phone:</span> {submittedData.phone}</div>
          <div><span className="text-slate-400">Product:</span> {submittedData.productCategory}</div>
          <div><span className="text-slate-400">Grade:</span> {submittedData.materialGrade || 'Standard Grade'}</div>
          <div><span className="text-slate-400">Dimensions:</span> {submittedData.dimensions || 'Standard'}</div>
          <div><span className="text-slate-400">Quantity:</span> {submittedData.quantity}</div>
        </div>

        <div className="text-[11px] text-slate-500 italic max-w-md mx-auto">
          Note: This website is in demonstration mode. No live email has been transmitted to a live server. Replace this handler with your API or CRM endpoint before official release.
        </div>

        <button
          type="button"
          onClick={handleReset}
          className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-lg bg-steel-700 hover:bg-steel-800 text-white text-xs font-semibold shadow transition-colors"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>Submit Another Inquiry</span>
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-4 text-left">
      <div className="border-b border-slate-100 pb-3">
        <h3 className="text-lg font-bold text-navy-950">{title}</h3>
        <p className="text-xs text-slate-500 mt-0.5">
          Please provide required dimensions, material grade, and estimated quantities.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Full Name */}
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1" htmlFor="fullName">
            Full Name <span className="text-rose-500">*</span>
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="e.g. John Doe"
            className={`w-full px-3.5 py-2 text-sm rounded-lg border ${
              errors.fullName ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300'
            } focus:outline-none focus:ring-2 focus:ring-steel-500`}
          />
          {errors.fullName && <p className="text-[11px] text-rose-500 mt-1">{errors.fullName}</p>}
        </div>

        {/* Company Name */}
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1" htmlFor="companyName">
            Company Name
          </label>
          <input
            id="companyName"
            name="companyName"
            type="text"
            value={formData.companyName}
            onChange={handleChange}
            placeholder="e.g. Acme Piping Ltd."
            className="w-full px-3.5 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-steel-500"
          />
        </div>

        {/* Email Address */}
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1" htmlFor="email">
            Email Address <span className="text-rose-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="procurement@company.com"
            className={`w-full px-3.5 py-2 text-sm rounded-lg border ${
              errors.email ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300'
            } focus:outline-none focus:ring-2 focus:ring-steel-500`}
          />
          {errors.email && <p className="text-[11px] text-rose-500 mt-1">{errors.email}</p>}
        </div>

        {/* Phone Number */}
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1" htmlFor="phone">
            Phone / Mobile <span className="text-rose-500">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+1 (555) 000-0000"
            className={`w-full px-3.5 py-2 text-sm rounded-lg border ${
              errors.phone ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300'
            } focus:outline-none focus:ring-2 focus:ring-steel-500`}
          />
          {errors.phone && <p className="text-[11px] text-rose-500 mt-1">{errors.phone}</p>}
        </div>

        {/* Country */}
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1" htmlFor="country">
            Destination Country / Region
          </label>
          <select
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="w-full px-3.5 py-2 text-sm rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-steel-500"
          >
            <option value="">Select Target Country</option>
            {countries.map((c) => (
              <option key={c.code} value={c.name}>
                {c.name}
              </option>
            ))}
            <option value="Other">Other Global Location</option>
          </select>
        </div>

        {/* Product Category (All 17 categories) */}
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1" htmlFor="productCategory">
            Product Category <span className="text-rose-500">*</span>
          </label>
          <select
            id="productCategory"
            name="productCategory"
            value={formData.productCategory}
            onChange={handleChange}
            className={`w-full px-3.5 py-2 text-sm rounded-lg border ${
              errors.productCategory ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300'
            } bg-white focus:outline-none focus:ring-2 focus:ring-steel-500`}
          >
            <option value="">Select One of 17 Categories</option>
            {products.map((p) => (
              <option key={p.id} value={p.name}>
                {p.name}
              </option>
            ))}
          </select>
          {errors.productCategory && <p className="text-[11px] text-rose-500 mt-1">{errors.productCategory}</p>}
        </div>

        {/* Material / Grade */}
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1" htmlFor="materialGrade">
            Material Family / Grade
          </label>
          <input
            id="materialGrade"
            name="materialGrade"
            type="text"
            value={formData.materialGrade}
            onChange={handleChange}
            placeholder="e.g. SS 316L, Duplex 2205, Inconel 625"
            className="w-full px-3.5 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-steel-500"
          />
        </div>

        {/* Dimensions / Size */}
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1" htmlFor="dimensions">
            Required Size / Dimensions
          </label>
          <input
            id="dimensions"
            name="dimensions"
            type="text"
            value={formData.dimensions}
            onChange={handleChange}
            placeholder="e.g. 4 inch NB SCH 40, or 2000x6000x12mm"
            className="w-full px-3.5 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-steel-500"
          />
        </div>

        {/* Quantity */}
        <div className="sm:col-span-2">
          <label className="block text-xs font-bold text-slate-700 mb-1" htmlFor="quantity">
            Estimated Quantity / Tonnage <span className="text-rose-500">*</span>
          </label>
          <input
            id="quantity"
            name="quantity"
            type="text"
            value={formData.quantity}
            onChange={handleChange}
            placeholder="e.g. 500 meters, 5 metric tons, or 250 pieces"
            className={`w-full px-3.5 py-2 text-sm rounded-lg border ${
              errors.quantity ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300'
            } focus:outline-none focus:ring-2 focus:ring-steel-500`}
          />
          {errors.quantity && <p className="text-[11px] text-rose-500 mt-1">{errors.quantity}</p>}
        </div>

        {/* Message */}
        <div className="sm:col-span-2">
          <label className="block text-xs font-bold text-slate-700 mb-1" htmlFor="message">
            Specific Testing, Standards & Packaging Notes
          </label>
          <textarea
            id="message"
            name="message"
            rows="3"
            value={formData.message}
            onChange={handleChange}
            placeholder="Mention ASTM/ASME standards, EN 10204 3.1 MTC requirement, bevel ends, third-party inspection, or target delivery timeframe..."
            className="w-full px-3.5 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-steel-500"
          />
        </div>
      </div>

      {/* Privacy Notice Placeholder */}
      <div className="flex items-start space-x-2 text-[11px] text-slate-500 pt-1">
        <AlertCircle className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
        <p>
          <span className="font-semibold text-slate-700">Privacy Notice Placeholder:</span> Inquiry data submitted via this form will be treated confidentially for quotation purposes only and will not be shared with unauthorized third parties.
        </p>
      </div>

      <div className="pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3 rounded-lg text-sm font-bold text-white bg-industrial-amber hover:bg-industrial-hover shadow-sm transition-all duration-150 disabled:opacity-70"
        >
          {isSubmitting ? (
            <span>Processing Inquiry...</span>
          ) : (
            <>
              <span>Submit Inquiry</span>
              <Send className="w-4 h-4 ml-2" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
