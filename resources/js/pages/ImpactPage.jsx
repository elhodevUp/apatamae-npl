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
    <Layout>
      <div className="pt-24 pb-20 bg-[#f8f9fa] text-[#191c1d]">
      
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-[#012d1d] via-[#1b4332] to-[#396093] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#daa520]/20 border border-[#daa520]/40 text-[#daa520] text-xs font-semibold uppercase tracking-wider">
            <BarChart3 className="w-3.5 h-3.5" />
            <span>Mesure de la Performance & Transformation</span>
          </span>
          <h1 className="font-headline font-extrabold text-3xl sm:text-5xl tracking-tight">
            Impact & Récits de Terrain
          </h1>
          <p className="text-sm sm:text-base text-white/80 max-w-2xl font-body">
            Évaluation rigoureuse des résultats environnementaux, sociaux et scientifiques de la plateforme APATAM@E à travers le Sénégal.
          </p>
        </div>
      </section>

      {/* High Level Metrics Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((m, idx) => (
            <div key={idx} className="glass-panel p-6 rounded-2xl bg-white/95 border border-white shadow-xl space-y-2 text-center">
              <span className="font-headline font-extrabold text-3xl sm:text-4xl text-[#012d1d] block">
                {m.val}
              </span>
              <h3 className="font-headline font-bold text-xs uppercase tracking-wider text-[#396093]">
                {m.label}
              </h3>
              <p className="text-[11px] text-[#717973]">{m.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Field Stories Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold text-[#daa520] uppercase tracking-widest">Témoignages Vivants</span>
          <h2 className="font-headline font-extrabold text-3xl text-[#012d1d]">Récits de Transformation</h2>
          <p className="text-sm text-[#414844]">Découvrez comment nos programmes modifient concrètement le quotidien des communautés bénéficiaires.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {stories.map((story, i) => (
            <div key={i} className="glass-panel p-8 rounded-3xl bg-white/90 border border-white/80 shadow-xl space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <img src={story.image} alt={story.name} className="w-16 h-16 rounded-2xl object-cover border-2 border-[#012d1d]/20 shadow-md" />
                  <div>
                    <h3 className="font-headline font-bold text-base text-[#012d1d]">{story.name}</h3>
                    <p className="text-xs font-semibold text-[#396093]">{story.role}</p>
                    <span className="inline-flex items-center gap-1 text-[10px] text-[#717973] mt-1">
                      <MapPin className="w-3 h-3 text-[#daa520]" />
                      <span>{story.region}</span>
                    </span>
                  </div>
                </div>

                <h4 className="font-headline font-bold text-lg text-[#012d1d] leading-snug">{story.title}</h4>

                <div className="relative bg-[#f8f9fa] p-5 rounded-2xl border border-[#c1c8c2]/30 italic text-xs text-[#414844] leading-relaxed">
                  <Quote className="w-6 h-6 text-[#daa520]/30 absolute top-3 left-3 -z-0" />
                  <span className="relative z-10">{story.quote}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-[#c1c8c2]/30 flex items-center justify-between">
                <span className="text-xs font-bold text-[#012d1d] flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  <span>{story.impact}</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Download Reports CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 sm:p-10 rounded-3xl border border-[#c1c8c2]/40 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h3 className="font-headline font-bold text-xl text-[#012d1d]">Rapports d'Impact & Publications scientifiques</h3>
            <p className="text-xs text-[#414844]">Téléchargez nos rapports d'évaluation triennale 2023-2026 au format PDF.</p>
          </div>
          <button 
            onClick={() => alert("Le téléchargement du rapport complet 2026 démarrera sous peu.")}
            className="btn bg-[#012d1d] hover:bg-[#1b4332] text-white font-bold border-none rounded-full px-6 text-xs flex items-center gap-2 shrink-0 shadow-md"
          >
            <Download className="w-4 h-4 text-[#daa520]" />
            <span>Télécharger le Rapport (PDF)</span>
          </button>
        </div>
      </section>

    </div>
    </Layout>
  );
}
