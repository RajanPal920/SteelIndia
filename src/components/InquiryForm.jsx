import React, { useState } from 'react';
import { products } from '../data/products';
import { materials } from '../data/materials';
import { countries } from '../data/countries';
import { Send, CheckCircle2, AlertCircle, RefreshCw, ShieldCheck } from 'lucide-react';

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

    // Simulates network payload handling
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

  // --- SUCCESS STATE UI ---
  if (submittedData) {
    return (
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 text-center space-y-5 shadow-lg animate-in fade-in duration-300">
        <div className="w-16 h-16 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto border border-green-100">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <h3 className="text-2xl font-bold text-[#0055A4]">Inquiry Received Successfully</h3>

        <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
          Thank you, <span className="font-semibold text-slate-900">{submittedData.fullName}</span>. Your inquiry for{' '}
          <span className="font-bold text-[#E3000F]">{submittedData.productCategory}</span> has been logged. Our commercial team will review your specifications and respond within 24 hours.
        </p>

        <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 text-left text-xs font-mono space-y-2 max-w-md mx-auto text-slate-700 overflow-x-auto relative">
          <div className="absolute top-0 right-0 bg-[#0055A4] text-white text-[10px] px-2 py-0.5 rounded-bl-lg">Reference</div>
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
          className="inline-flex items-center space-x-1.5 px-6 py-2.5 rounded-lg bg-[#0055A4] hover:bg-[#003d7a] text-white text-sm font-semibold shadow transition-colors"
        >
          <RefreshCw className="w-4 h-4" />
          <span>Submit Another Inquiry</span>
        </button>
      </div>
    );
  }

  // --- FORM INPUT UI ---
  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-lg space-y-6 text-left">

      {/* Form Header */}
      <div className="border-b border-slate-100 pb-4">
        <h3 className="text-xl font-bold text-[#0055A4] flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-[#E3000F]" />
          {title}
        </h3>
        <p className="text-xs text-slate-500 mt-1">
          Please provide required dimensions, material grade, and estimated quantities for accurate quotation.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Full Name */}
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1.5" htmlFor="fullName">
            Full Name <span className="text-[#E3000F]">*</span>
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="e.g. John Doe"
            className={`w-full px-4 py-2.5 text-sm rounded-lg border ${errors.fullName ? 'border-[#E3000F] bg-red-50/20' : 'border-slate-300'
              } focus:outline-none focus:ring-2 focus:ring-[#0055A4] focus:border-[#0055A4] transition-all`}
          />
          {errors.fullName && <p className="text-[11px] text-[#E3000F] mt-1">{errors.fullName}</p>}
        </div>

        {/* Company Name */}
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1.5" htmlFor="companyName">
            Company Name
          </label>
          <input
            id="companyName"
            name="companyName"
            type="text"
            value={formData.companyName}
            onChange={handleChange}
            placeholder="e.g. Acme Piping Ltd."
            className="w-full px-4 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0055A4] focus:border-[#0055A4] transition-all"
          />
        </div>

        {/* Email Address */}
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1.5" htmlFor="email">
            Email Address <span className="text-[#E3000F]">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="procurement@company.com"
            className={`w-full px-4 py-2.5 text-sm rounded-lg border ${errors.email ? 'border-[#E3000F] bg-red-50/20' : 'border-slate-300'
              } focus:outline-none focus:ring-2 focus:ring-[#0055A4] focus:border-[#0055A4] transition-all`}
          />
          {errors.email && <p className="text-[11px] text-[#E3000F] mt-1">{errors.email}</p>}
        </div>

        {/* Phone Number */}
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1.5" htmlFor="phone">
            Phone / Mobile <span className="text-[#E3000F]">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+91 98765 43210"
            className={`w-full px-4 py-2.5 text-sm rounded-lg border ${errors.phone ? 'border-[#E3000F] bg-red-50/20' : 'border-slate-300'
              } focus:outline-none focus:ring-2 focus:ring-[#0055A4] focus:border-[#0055A4] transition-all`}
          />
          {errors.phone && <p className="text-[11px] text-[#E3000F] mt-1">{errors.phone}</p>}
        </div>

        {/* Country */}
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1.5" htmlFor="country">
            Destination Country / Region
          </label>
          <select
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="w-full px-4 py-2.5 text-sm rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#0055A4] focus:border-[#0055A4] transition-all"
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

        {/* Product Category */}
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1.5" htmlFor="productCategory">
            Product Category <span className="text-[#E3000F]">*</span>
          </label>
          <select
            id="productCategory"
            name="productCategory"
            value={formData.productCategory}
            onChange={handleChange}
            className={`w-full px-4 py-2.5 text-sm rounded-lg border ${errors.productCategory ? 'border-[#E3000F] bg-red-50/20' : 'border-slate-300'
              } bg-white focus:outline-none focus:ring-2 focus:ring-[#0055A4] focus:border-[#0055A4] transition-all`}
          >
            <option value="">Select One of 17 Categories</option>
            {products.map((p) => (
              <option key={p.id} value={p.name}>
                {p.name}
              </option>
            ))}
          </select>
          {errors.productCategory && <p className="text-[11px] text-[#E3000F] mt-1">{errors.productCategory}</p>}
        </div>

        {/* Material / Grade */}
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1.5" htmlFor="materialGrade">
            Material Family / Grade
          </label>
          <input
            id="materialGrade"
            name="materialGrade"
            type="text"
            value={formData.materialGrade}
            onChange={handleChange}
            placeholder="e.g. SS 316L, Duplex 2205, Inconel 625"
            className="w-full px-4 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0055A4] focus:border-[#0055A4] transition-all"
          />
        </div>

        {/* Dimensions / Size */}
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1.5" htmlFor="dimensions">
            Required Size / Dimensions
          </label>
          <input
            id="dimensions"
            name="dimensions"
            type="text"
            value={formData.dimensions}
            onChange={handleChange}
            placeholder="e.g. 4 inch NB SCH 40, or 2000x6000x12mm"
            className="w-full px-4 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0055A4] focus:border-[#0055A4] transition-all"
          />
        </div>

        {/* Quantity */}
        <div className="sm:col-span-2">
          <label className="block text-xs font-bold text-slate-700 mb-1.5" htmlFor="quantity">
            Estimated Quantity / Tonnage <span className="text-[#E3000F]">*</span>
          </label>
          <input
            id="quantity"
            name="quantity"
            type="text"
            value={formData.quantity}
            onChange={handleChange}
            placeholder="e.g. 500 meters, 5 metric tons, or 250 pieces"
            className={`w-full px-4 py-2.5 text-sm rounded-lg border ${errors.quantity ? 'border-[#E3000F] bg-red-50/20' : 'border-slate-300'
              } focus:outline-none focus:ring-2 focus:ring-[#0055A4] focus:border-[#0055A4] transition-all`}
          />
          {errors.quantity && <p className="text-[11px] text-[#E3000F] mt-1">{errors.quantity}</p>}
        </div>

        {/* Message */}
        <div className="sm:col-span-2">
          <label className="block text-xs font-bold text-slate-700 mb-1.5" htmlFor="message">
            Specific Testing, Standards & Packaging Notes
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            placeholder="Mention ASTM/ASME standards, EN 10204 3.1 MTC requirement, bevel ends, third-party inspection, or target delivery timeframe..."
            className="w-full px-4 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0055A4] focus:border-[#0055A4] transition-all resize-none"
          />
        </div>
      </div>

      {/* Privacy Notice */}
      <div className="flex items-start space-x-2 text-[11px] text-slate-500 pt-2 bg-slate-50 p-3 rounded-lg border border-slate-100">
        <AlertCircle className="w-4 h-4 text-[#0055A4] shrink-0 mt-0.5" />
        <p>
          <span className="font-bold text-slate-700">Privacy Notice:</span> Inquiry data submitted via this form will be treated confidentially for quotation purposes only and will not be shared with unauthorized third parties.
        </p>
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full inline-flex items-center justify-center px-8 py-3.5 rounded-lg text-sm font-bold text-white bg-[#E3000F] hover:bg-[#C2000D] shadow-md hover:shadow-lg transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed group"
        >
          {isSubmitting ? (
            <span className="flex items-center gap-2">
              <RefreshCw className="w-4 h-4 animate-spin" />
              Processing Inquiry...
            </span>
          ) : (
            <>
              <span>Submit Inquiry</span>
              <Send className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}