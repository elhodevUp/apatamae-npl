import React from 'react';
import { HERO_STATS } from '../data/apatamData';
import { ArrowRight, Sparkles, ShieldCheck, Compass } from 'lucide-react';

export default function Hero({ onExploreClick, onContactClick }) {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-36 md:pb-28 overflow-hidden">
      {/* Background Decorative Glow Blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#012d1d]/10 via-[#396093]/10 to-[#daa520]/10 rounded-full blur-3xl -z-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Levitating Badge */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-[#c1c8c2] shadow-sm text-xs font-semibold text-[#012d1d] uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-[#daa520]" />
            <span>Plateforme Institutionnelle & Développement Durable</span>
          </div>
        </div>

        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6 text-left">
            <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#012d1d] tracking-tight leading-tight">
              Ensemble, construisons des <br />
              <span className="text-gradient-green">territoires d'avenir</span> au Sénégal.
            </h1>

            <p className="text-base sm:text-lg text-[#414844] max-w-xl font-normal leading-relaxed">
              APATAM@E allie action-recherche, technologies décarbonées et ancrage communautaire pour former, informer et mobiliser les citoyens pour une gouvernance responsable.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <button
                onClick={onExploreClick}
                className="w-full sm:w-auto btn btn-lg bg-[#012d1d] hover:bg-[#1b4332] text-white border-none rounded-2xl px-8 shadow-glow-green hover:shadow-xl transition-all duration-300 gap-3 group font-headline font-bold text-sm tracking-wide"
              >
                <span>Découvrir les Programmes</span>
                <ArrowRight className="w-5 h-5 text-[#daa520] group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onContactClick}
                className="w-full sm:w-auto btn btn-lg bg-white/90 hover:bg-white text-[#012d1d] border border-[#c1c8c2] rounded-2xl px-8 shadow-sm hover:shadow-md transition-all duration-300 gap-2 font-headline font-semibold text-sm"
              >
                <Compass className="w-5 h-5 text-[#396093]" />
                <span>Contacter l'Équipe</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative rounded-[40px] overflow-hidden shadow-2xl border-4 border-white/80 group">
              <img 
                src="/images/high_quality_artistic_photography_of_senegalese_nature_and_local_citizens_screen.png" 
                alt="Territoires d'avenir APATAM@E" 
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#012d1d]/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white p-4 glass-panel-dark rounded-2xl border border-white/20">
                <span className="text-[10px] font-bold text-[#daa520] uppercase tracking-widest block">Gouvernance & Climat</span>
                <h4 className="font-headline font-bold text-sm">Action-Recherche & Ancrage Communautaire</h4>
              </div>
            </div>
          </div>

        </div>

        {/* Floating Antigravity Statistics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
          {HERO_STATS.map((stat, idx) => (
            <div
              key={idx}
              className="glass-panel p-6 rounded-3xl transition-all duration-300 hover:-translate-y-2 hover:shadow-glass-hover relative group border border-white/80 bg-white/90"
            >
              <div className="w-2 h-2 rounded-full bg-[#daa520] absolute top-5 right-5 group-hover:scale-150 transition-transform" />
              <div className="font-headline text-3xl lg:text-4xl font-extrabold text-[#012d1d] tracking-tight mb-1">
                {stat.value}
              </div>
              <div className="font-headline text-sm font-bold text-[#396093] mb-2 uppercase tracking-wide">
                {stat.label}
              </div>
              <p className="text-xs text-[#717973] leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
