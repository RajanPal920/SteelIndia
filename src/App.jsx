import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// --- Layout Components ---
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import FloatingContactButtons from './components/FloatingContactButtons';

// --- Pages ---
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import ProductTypes from './pages/ProductTypes';
import ProductCategory from './pages/ProductCategory';
import ProductTypeMaterialDetail from './pages/ProductTypeMaterialDetail';
import Materials from './pages/Materials';
import MaterialCategory from './pages/MaterialCategory';
import GradeDetail from './pages/GradeDetail';
import ProductMaterialDetail from './pages/ProductMaterialDetail';
import MaterialSubRoute from './pages/MaterialSubRoute';
import Certificate from './pages/Certificate';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <BrowserRouter>
      {/* ScrollToTop ensures scroll position resets on navigation */}
      <ScrollToTop />

      {/* Main Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          {/* Product Listing Routes (both /products and /product) */}
          <Route path="/products" element={<Products />} />
          <Route path="/product" element={<Products />} />

          {/* Product Category Page (e.g. /products/butt-weld-fittings) */}
          <Route path="/products/:categorySlug" element={<ProductTypes />} />
          <Route path="/product/:categorySlug" element={<ProductTypes />} />

          {/* Product Type + Material Detail Route */}
          <Route path="/products/:categorySlug/:typeSlug/materials/:materialSlug" element={<ProductTypeMaterialDetail />} />
          <Route path="/product/:categorySlug/:typeSlug/materials/:materialSlug" element={<ProductTypeMaterialDetail />} />

          {/* Product Category + Material Detail Route */}
          <Route path="/products/:categorySlug/materials/:materialSlug" element={<ProductMaterialDetail />} />
          <Route path="/product/:categorySlug/materials/:materialSlug" element={<ProductMaterialDetail />} />

          {/* Product Type Detail Page (e.g. /products/butt-weld-fittings/elbow-90) */}
          <Route path="/products/:categorySlug/:typeSlug" element={<ProductCategory />} />
          <Route path="/product/:categorySlug/:typeSlug" element={<ProductCategory />} />

          {/* Material Listing Routes (both /materials and /material) */}
          <Route path="/materials" element={<Materials />} />
          <Route path="/material" element={<Materials />} />

          {/* Material Detail Page (e.g. /materials/stainless-steel) */}
          <Route path="/materials/:materialSlug" element={<MaterialCategory />} />
          <Route path="/material/:materialSlug" element={<MaterialCategory />} />

          {/* Product Material explicit routes */}
          <Route path="/materials/:materialSlug/products/:productSlug" element={<ProductMaterialDetail />} />
          <Route path="/material/:materialSlug/products/:productSlug" element={<ProductMaterialDetail />} />

          {/* Grade explicit routes */}
          <Route path="/materials/:materialSlug/grades/:gradeSlug" element={<GradeDetail />} />
          <Route path="/material/:materialSlug/grades/:gradeSlug" element={<GradeDetail />} />
          <Route path="/grades/:gradeSlug" element={<GradeDetail />} />
          <Route path="/grade/:gradeSlug" element={<GradeDetail />} />

          {/* Smart SubRoute: dynamically resolves either Grade or ProductMaterial */}
          <Route path="/materials/:materialSlug/:slug" element={<MaterialSubRoute />} />
          <Route path="/material/:materialSlug/:slug" element={<MaterialSubRoute />} />

          {/* Other Standard Routes */}
          <Route path="/certificate" element={<Certificate />} />
          <Route path="/contact" element={<Contact />} />

          {/* 404 Catch-All */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp and Call Buttons */}
      <FloatingContactButtons />
    </BrowserRouter>
  );
}
