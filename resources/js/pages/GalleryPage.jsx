import React from 'react';
import { Camera, Sparkles, Image as ImageIcon, HeartHandshake, ArrowRight } from 'lucide-react';
import { Link } from '@inertiajs/react';
import Layout from '../Layouts/Layout';
import MosaicGallery from '../components/MosaicGallery';

export default function GalleryPage() {
  return (
    <div className="pt-[72px] pb-20 bg-[#f8f9fa] text-[#0A2540] selection:bg-[#1B4332]/20 overflow-hidden">
        
        {/* Hero Banner */}
        <section className="bg-gradient-to-r from-[#0A2540] via-[#0A2540]/95 to-[#1B4332] text-white pt-16 pb-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#daa520]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative z-10">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#daa520] text-xs font-bold uppercase tracking-wider shadow-glass">
              <Camera className="w-4 h-4" />
              <span>Galerie Mosaïque & Mémoire Visuelle</span>
            </span>
            <h1 className="font-headline font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight">
              Nos Actions de Terrain en <span className="text-[#daa520]">Images</span>
            </h1>
            <p className="text-base sm:text-lg text-white/90 max-w-2xl font-body leading-relaxed drop-shadow-sm">
              Explorez en mosaïque la réalité de nos projets : concertations citoyennes, périmètres agricoles solaires, ateliers STEM et nos résidences d'accueil à Thiès et Saly.
            </p>
          </div>
        </section>

        {/* Mosaic Gallery Section */}
        <div className="py-12">
          <MosaicGallery showTitle={false} />
        </div>

        {/* Bottom CTA */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 mb-12">
          <div className="glass-panel-dark p-10 sm:p-14 rounded-[2.5rem] text-white flex flex-col md:flex-row items-center justify-between gap-10 shadow-[0_30px_60px_rgba(27,67,50,0.3)] border border-white/10 relative overflow-hidden hover-lift transition-all">
            <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
            <div className="space-y-4 max-w-xl text-center md:text-left relative z-10">
              <span className="inline-flex items-center gap-2 text-xs font-bold text-[#daa520] uppercase tracking-widest drop-shadow-sm">
                <Sparkles className="w-4 h-4" />
                <span>Rejoignez l'Aventure APATAM@E</span>
              </span>
              <h2 className="font-headline text-3xl sm:text-4xl font-extrabold text-white drop-shadow-md">
                Vous souhaitez participer à nos prochains événements ?
              </h2>
              <p className="text-sm sm:text-base text-white/90 leading-relaxed font-body drop-shadow-sm">
                Contactez notre secrétariat pour réserver une salle de conférence, une chambre d'hôtes ou proposer un partenariat sur le terrain.
              </p>
            </div>

            <Link
              href="/contact"
              className="px-8 py-4 bg-[#daa520] hover:bg-[#b45309] text-white font-bold rounded-full text-sm uppercase tracking-widest shadow-xl hover:scale-105 transition-all shrink-0 flex items-center gap-3 relative z-10"
            >
              <span>Réserver ou Contacter</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>

      </div>
  );
}
