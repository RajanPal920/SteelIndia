import React, { useState } from 'react';
import { products } from '../data/products';
import { Send, AlertCircle } from 'lucide-react';

export default function InquiryForm({ defaultCategory = '', defaultMaterial = '', title = "Submit a Product Inquiry" }) {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    productCategory: defaultCategory,
    materialGrade: defaultMaterial,
    dimensions: '',
    quantity: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full Name is required.';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.phone.trim()) errs.phone = 'Phone number is required.';
    if (!formData.productCategory) errs.productCategory = 'Please select a product.';
    if (!formData.quantity.trim()) errs.quantity = 'Quantity is required.';

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

    // Email body format karein
    const emailSubject = `New Inquiry: ${formData.productCategory} from ${formData.fullName}`;
    const emailBody = `
New Inquiry from Website

--- Contact Details ---
Name: ${formData.fullName}
Company: ${formData.companyName || 'N/A'}
Email: ${formData.email}
Phone: ${formData.phone}

--- Product Details ---
Product Category: ${formData.productCategory}
Material/Grade: ${formData.materialGrade || 'N/A'}
Dimensions: ${formData.dimensions || 'N/A'}
Quantity: ${formData.quantity}

--- Additional Notes ---
${formData.message || 'No additional notes provided.'}
    `;

    // Mailto link create karein aur email client open karein
    const mailtoLink = `mailto:steelindialtd@yahoo.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

    window.location.href = mailtoLink;

    // Thodi der baad form reset kar dein (optional)
    setTimeout(() => {
      setFormData({
        fullName: '',
        companyName: '',
        email: '',
        phone: '',
        productCategory: '',
        materialGrade: '',
        dimensions: '',
        quantity: '',
        message: ''
      });
    }, 2000);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-5 text-left">

      {/* Form Header */}
      <div className="border-b border-slate-100 pb-3">
        <h3 className="text-xl font-bold text-[#0055A4]">{title}</h3>
        <p className="text-xs text-slate-500 mt-1">Fill this form to send us your requirement directly to our email.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

        {/* Full Name */}
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1" htmlFor="fullName">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="John Doe"
            className={`w-full px-3 py-2 text-sm rounded-md border ${errors.fullName ? 'border-red-500' : 'border-slate-300'} focus:outline-none focus:border-[#0055A4]`}
          />
          {errors.fullName && <p className="text-xs text-red-500 mt-1">{errors.fullName}</p>}
        </div>

        {/* Company Name */}
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1" htmlFor="companyName">
            Company Name
          </label>
          <input
            id="companyName"
            name="companyName"
            type="text"
            value={formData.companyName}
            onChange={handleChange}
            placeholder="Acme Piping Ltd."
            className="w-full px-3 py-2 text-sm rounded-md border border-slate-300 focus:outline-none focus:border-[#0055A4]"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1" htmlFor="email">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@company.com"
            className={`w-full px-3 py-2 text-sm rounded-md border ${errors.email ? 'border-red-500' : 'border-slate-300'} focus:outline-none focus:border-[#0055A4]`}
          />
          {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1" htmlFor="phone">
            Phone <span className="text-red-500">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+91 98765 43210"
            className={`w-full px-3 py-2 text-sm rounded-md border ${errors.phone ? 'border-red-500' : 'border-slate-300'} focus:outline-none focus:border-[#0055A4]`}
          />
          {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
        </div>

        {/* Product Category */}
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1" htmlFor="productCategory">
            Product Category <span className="text-red-500">*</span>
          </label>
          <select
            id="productCategory"
            name="productCategory"
            value={formData.productCategory}
            onChange={handleChange}
            className={`w-full px-3 py-2 text-sm rounded-md border ${errors.productCategory ? 'border-red-500' : 'border-slate-300'} bg-white focus:outline-none focus:border-[#0055A4]`}
          >
            <option value="">Select Product</option>
            {products.map((p) => (
              <option key={p.id} value={p.name}>{p.name}</option>
            ))}
          </select>
          {errors.productCategory && <p className="text-xs text-red-500 mt-1">{errors.productCategory}</p>}
        </div>

        {/* Material Grade */}
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1" htmlFor="materialGrade">
            Material / Grade
          </label>
          <input
            id="materialGrade"
            name="materialGrade"
            type="text"
            value={formData.materialGrade}
            onChange={handleChange}
            placeholder="SS 316L, Duplex 2205"
            className="w-full px-3 py-2 text-sm rounded-md border border-slate-300 focus:outline-none focus:border-[#0055A4]"
          />
        </div>

        {/* Dimensions */}
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1" htmlFor="dimensions">
            Size / Dimensions
          </label>
          <input
            id="dimensions"
            name="dimensions"
            type="text"
            value={formData.dimensions}
            onChange={handleChange}
            placeholder="4 inch NB SCH 40"
            className="w-full px-3 py-2 text-sm rounded-md border border-slate-300 focus:outline-none focus:border-[#0055A4]"
          />
        </div>

        {/* Quantity */}
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1" htmlFor="quantity">
            Quantity <span className="text-red-500">*</span>
          </label>
          <input
            id="quantity"
            name="quantity"
            type="text"
            value={formData.quantity}
            onChange={handleChange}
            placeholder="500 meters / 5 tons"
            className={`w-full px-3 py-2 text-sm rounded-md border ${errors.quantity ? 'border-red-500' : 'border-slate-300'} focus:outline-none focus:border-[#0055A4]`}
          />
          {errors.quantity && <p className="text-xs text-red-500 mt-1">{errors.quantity}</p>}
        </div>

        {/* Message */}
        <div className="sm:col-span-2">
          <label className="block text-sm font-semibold text-slate-700 mb-1" htmlFor="message">
            Additional Notes / Testing Requirements
          </label>
          <textarea
            id="message"
            name="message"
            rows="3"
            value={formData.message}
            onChange={handleChange}
            placeholder="Mention ASTM standards, MTC requirements, delivery timeframe..."
            className="w-full px-3 py-2 text-sm rounded-md border border-slate-300 focus:outline-none focus:border-[#0055A4] resize-none"
          />
        </div>
      </div>

      {/* Info Notice */}
      <div className="flex items-start space-x-2 text-xs text-slate-500 bg-slate-50 p-3 rounded-md border border-slate-200">
        <AlertCircle className="w-4 h-4 text-[#0055A4] shrink-0 mt-0.5" />
        <p>
          Clicking <strong>Submit</strong> will open your email app (like Gmail/Outlook) with all details pre-filled. You just need to hit Send.
        </p>
      </div>

      {/* Submit Button */}
      <div>
        <button
          type="submit"
          className="w-full inline-flex items-center justify-center px-6 py-3 rounded-md text-sm font-bold text-white bg-[#E3000F] hover:bg-[#C2000D] transition-colors"
        >
          <span>Send Inquiry via Email</span>
          <Send className="w-4 h-4 ml-2" />
        </button>
      </div>
    </form>
  );
}