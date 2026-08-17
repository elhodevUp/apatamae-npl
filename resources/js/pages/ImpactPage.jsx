import React from 'react';
import { 
  BarChart3, TrendingUp, Users, Award, MapPin, 
  Quote, Download, ArrowRight, CheckCircle 
} from 'lucide-react';
import { Link } from '@inertiajs/react';
import Layout from '../Layouts/Layout';

export default function ImpactPage() {
  const metrics = [
    { label: "Bénéficiaires Directs", val: "25,000+", desc: "Agricultrices, lycéennes & élus locaux engagés" },
    { label: "Projets Décarbonés", val: "48", desc: "Périmètres maraîchers solaires autonomes" },
    { label: "Taux d'Autonomie", val: "94%", desc: "Des coopératives féminines viables après 24 mois" },
    { label: "Publications & Data", val: "14", desc: "Notes de synthèse scientifique en accès libre" }
  ];

  const stories = [
    {
      name: "Mariama Diallo",
      role: "Présidente de la Coopérative Éco-Podor",
      region: "Podor (Nord)",
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=800",
      title: "« Du puits manuel à l’autonomie solaire complète »",
      quote: "Avant l’arrivée d'APATAM@E, nous tirions l'eau à la main sous 45°C. Aujourd’hui, le pompage solaire alimente 3 hectares de goutte-à-goutte. Nos récoltes ont triplé et nos enfants vont à l'école toute l'année.",
      impact: "+300% de rendement maraîcher sur 18 mois"
    },
    {
      name: "Aïda Ndiaye",
      role: "Étudiante en Master 2 Hydrologie & Lauréate STEM",
      region: "Saint-Louis",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800",
      title: "« Concevoir des solutions climatiques chez nous, pour nous »",
      quote: "Grâce à la bourse d'excellence et aux laboratoires IoT d'APATAM@E, notre équipe a développé une sonde à bas coût pour mesurer l'intrusion saline dans la vallée de la Somone.",
      impact: "1er Prix national de l'innovation éco-scientifique"
    }
  ];

  return (
    <div className="pt-[72px] pb-20 bg-[#f8f9fa] text-[#0A2540] selection:bg-[#1B4332]/20">
      
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-[#0A2540] via-[#0A2540]/95 to-[#1B4332] text-white pt-16 pb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#daa520]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative z-10">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#daa520] text-xs font-bold uppercase tracking-wider shadow-glass">
            <BarChart3 className="w-4 h-4" />
            <span>Mesure de la Performance & Transformation</span>
          </span>
          <h1 className="font-headline font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight">
            Impact & Récits <br /> de Terrain
          </h1>
          <p className="text-base sm:text-lg text-white/90 max-w-2xl font-body leading-relaxed drop-shadow-sm">
            Évaluation rigoureuse des résultats environnementaux, sociaux et scientifiques de la plateforme APATAM@E à travers le Sénégal.
          </p>
        </div>
      </section>

      {/* High Level Metrics Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((m, idx) => (
            <div key={idx} className="glass-panel p-8 rounded-[2rem] bg-white border border-white shadow-[0_20px_40px_rgba(10,37,64,0.08)] space-y-3 text-center hover-lift transition-all">
              <span className="font-headline font-extrabold text-4xl sm:text-5xl text-[#0A2540] block">
                {m.val}
              </span>
              <h3 className="font-headline font-bold text-xs uppercase tracking-widest text-[#daa520]">
                {m.label}
              </h3>
              <p className="text-xs text-[#414844] font-body">{m.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Field Stories Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <span className="text-xs font-bold text-[#daa520] uppercase tracking-widest block">Témoignages Vivants</span>
          <h2 className="font-headline font-extrabold text-3xl sm:text-4xl text-[#0A2540]">Récits de Transformation</h2>
          <div className="w-24 h-1.5 bg-[#1B4332] mx-auto rounded-full" />
          <p className="text-sm sm:text-base text-[#414844] font-body mt-4">Découvrez comment nos programmes modifient concrètement le quotidien des communautés bénéficiaires.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {stories.map((story, i) => (
            <div key={i} className="glass-panel p-8 sm:p-10 rounded-[2.5rem] bg-white border border-white shadow-[0_20px_50px_rgba(10,37,64,0.06)] space-y-8 flex flex-col justify-between hover-lift transition-all">
              <div className="space-y-6">
                <div className="flex items-center gap-5">
                  <div className="relative">
                    <img src={story.image} alt={story.name} className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-md z-10 relative" />
                    <div className="absolute inset-0 bg-[#daa520] rounded-full blur-md opacity-20 translate-y-2 -z-10" />
                  </div>
                  <div>
                    <h3 className="font-headline font-extrabold text-lg sm:text-xl text-[#0A2540]">{story.name}</h3>
                    <p className="text-xs font-bold text-[#1B4332] mt-1">{story.role}</p>
                    <span className="inline-flex items-center gap-1.5 text-[11px] text-[#414844] mt-2 font-bold uppercase tracking-wider">
                      <MapPin className="w-3.5 h-3.5 text-[#daa520]" />
                      <span>{story.region}</span>
                    </span>
                  </div>
                </div>

                <h4 className="font-headline font-bold text-xl text-[#0A2540] leading-snug">{story.title}</h4>

                <div className="relative bg-[#0A2540]/5 p-6 rounded-3xl border border-[#0A2540]/10 italic text-sm text-[#414844] leading-relaxed font-body">
                  <Quote className="w-8 h-8 text-[#1B4332]/20 absolute top-4 left-4 -z-0" />
                  <span className="relative z-10 block pl-2 pt-2">{story.quote}</span>
                </div>
              </div>

              <div className="pt-6 border-t border-[#0A2540]/10 flex items-center justify-between">
                <span className="text-xs font-bold text-[#1B4332] flex items-center gap-2 uppercase tracking-wide">
                  <CheckCircle className="w-5 h-5 text-[#daa520]" />
                  <span>{story.impact}</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Download Reports CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-white p-8 sm:p-12 rounded-[2.5rem] border border-[#0A2540]/10 shadow-[0_20px_40px_rgba(27,67,50,0.08)] flex flex-col sm:flex-row items-center justify-between gap-8 hover-lift transition-all">
          <div className="space-y-3 max-w-xl">
            <h3 className="font-headline font-extrabold text-2xl sm:text-3xl text-[#0A2540]">Rapports d'Impact & Publications scientifiques</h3>
            <p className="text-sm text-[#414844] font-body leading-relaxed">Consultez en détail notre méthodologie et téléchargez nos rapports d'évaluation triennale 2023-2026 au format PDF.</p>
          </div>
          <button 
            onClick={() => alert("Le téléchargement du rapport complet 2026 démarrera sous peu.")}
            className="px-8 py-4 bg-[#0A2540] hover:bg-[#1B4332] text-white font-bold rounded-full text-xs sm:text-sm flex items-center gap-3 shrink-0 shadow-xl hover:-translate-y-1 transition-all"
          >
            <Download className="w-5 h-5 text-[#daa520]" />
            <span>Télécharger le Rapport</span>
          </button>
        </div>
      </section>

    </div>
  );
}
