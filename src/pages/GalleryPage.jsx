import React from 'react';
import { Camera, Sparkles, Image as ImageIcon, HeartHandshake, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import MosaicGallery from '../components/MosaicGallery';

export default function GalleryPage() {
  return (
    <div className="pt-24 pb-20 bg-[#f8f9fa] text-[#191c1d]">
      
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-[#012d1d] via-[#1b4332] to-[#396093] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#daa520]/20 border border-[#daa520]/40 text-[#daa520] text-xs font-semibold uppercase tracking-wider">
            <Camera className="w-3.5 h-3.5" />
            <span>Galerie Mosaïque & Mémoire Visuelle</span>
          </span>
          <h1 className="font-headline font-extrabold text-3xl sm:text-5xl tracking-tight">
            Nos Actions de Terrain en <span className="text-[#daa520]">Images</span>
          </h1>
          <p className="text-sm sm:text-base text-white/80 max-w-2xl font-body">
            Explorez en mosaïque la réalité de nos projets : concertations citoyennes, périmètres agricoles solaires, ateliers STEM et nos résidences d'accueil à Thiès et Saly.
          </p>
        </div>
      </section>

      {/* Mosaic Gallery Section */}
      <MosaicGallery showTitle={false} />

      {/* Bottom CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="glass-panel p-8 sm:p-12 rounded-3xl bg-[#012d1d] text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl border border-white/20">
          <div className="space-y-3 max-w-xl text-center md:text-left">
            <span className="inline-flex items-center gap-2 text-xs font-bold text-[#daa520] uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>Rejoignez l'Aventure APATAM@E</span>
            </span>
            <h2 className="font-headline text-2xl sm:text-3xl font-extrabold text-white">
              Vous souhaitez participer à nos prochains événements ?
            </h2>
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
              Contactez notre secrétariat pour réserver une salle de conférence, réserver une chambre d'hôtes ou proposer un partenariat sur le terrain.
            </p>
          </div>

          <Link
            to="/contact"
            className="btn bg-[#daa520] hover:bg-[#b8860b] text-[#012d1d] font-bold border-none rounded-full px-8 py-3 text-xs uppercase tracking-wider shadow-xl hover:scale-105 transition-all shrink-0 flex items-center gap-2"
          >
            <span>Réserver ou Contact</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}
