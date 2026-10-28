import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingContactButtons from './components/FloatingContactButtons';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import ProductCategory from './pages/ProductCategory';
import Materials from './pages/Materials';
import MaterialCategory from './pages/MaterialCategory';
import Certificate from './pages/Certificate';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen text-slate-800 bg-white">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/product" element={<Products />} />
            <Route path="/product/:category" element={<ProductCategory />} />
            <Route path="/material" element={<Materials />} />
            <Route path="/material/:material" element={<MaterialCategory />} />
            <Route path="/certificate" element={<Certificate />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <FloatingContactButtons />
      </div>
    </BrowserRouter>
  );
}
