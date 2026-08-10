import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProgramsPage from './pages/ProgramsPage';
import ImpactPage from './pages/ImpactPage';
import PartnersPage from './pages/PartnersPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#f8f9fa] text-[#191c1d] relative">
        
        {/* Fixed Header Navbar */}
        <Navbar />

        {/* Dynamic Multi-Page Router View */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/qui-sommes-nous" element={<AboutPage />} />
            <Route path="/nos-programmes" element={<ProgramsPage />} />
            <Route path="/impact-recits" element={<ImpactPage />} />
            <Route path="/partenaires" element={<PartnersPage />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* Catch-all fallback redirect */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />

      </div>
    </BrowserRouter>
  );
}
