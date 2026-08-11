import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProgramsPage from './pages/ProgramsPage';
import ImpactPage from './pages/ImpactPage';
import GalleryPage from './pages/GalleryPage';
import PartnersPage from './pages/PartnersPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/qui-sommes-nous" element={<AboutPage />} />
        <Route path="/nos-programmes" element={<ProgramsPage />} />
        <Route path="/impact-recits" element={<ImpactPage />} />
        <Route path="/galerie" element={<GalleryPage />} />
        <Route path="/partenaires" element={<PartnersPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}
