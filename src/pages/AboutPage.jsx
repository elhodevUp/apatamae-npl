import React, { useState } from 'react';
import { 
  Quote, Scale, ShieldCheck, Users, Lightbulb, Handshake, 
  BookOpen, Search, Megaphone, Calculator, UserCheck, 
  Laptop, Truck, Settings, Sparkles, Globe, ChevronRight, X 
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export default function AboutPage() {
  const navigate = useNavigate();
  const [selectedDept, setSelectedDept] = useState(null);

  const deptDetails = {
    conseil: { 
      title: "Conseil d'Orientation Stratégique", 
      text: "Composé de personnalités éminentes de la société civile, d'universitaires et d'experts du développement territorial, il définit les grandes orientations et veille à l'alignement éthique de l'Institut." 
    },
    direction: { 
      title: "Direction Générale", 
      text: "Assure la mise en œuvre opérationnelle des orientations stratégiques, la supervision des directoires et le rayonnement institutionnel d'APATAM@E au niveau national et international." 
    },
    programmes: { 
      title: "Direction des Programmes et de la Formation", 
      text: "Conçoit, coordonne et déploie les programmes phares (Académie Territoriale, Green Territoires, Équité STEM) avec un suivi pédagogique rigoureux et adapté aux réalités locales." 
    },
    recherche: { 
      title: "Direction de la Recherche, des Études et de l'Observatoire", 
      text: "Pilote l'Observatoire de la gouvernance locale, produit des analyses de données de terrain, des cartographies territoriales et des publications scientifiques pour éclairer le plaidoyer." 
    },
    partenariats: { 
      title: "Direction des Partenariats, de la Mobilisation et de la Communication", 
      text: "Développe les alliances institutionnelles, coordonne les relations avec les bailleurs de fonds et assure la visibilité des initiatives auprès des citoyens et des médias." 
    },
    admin: { 
      title: "Direction Administrative et Financière", 
      text: "Garantit une gouvernance financière exemplaire, la transparence des flux, la passation rigoureuse des marchés et la conformité aux normes internationales de gestion." 
    }
  };

  return (
    <div className="pt-24 pb-20 bg-[#f8f9fa] text-[#191c1d] selection:bg-[#1b4332]/20 overflow-x-hidden">
      
      {/* ============================================================ */}
      {/* 1. HERO SECTION */}
      {/* ============================================================ */}
      <section className="relative min-h-[65vh] sm:min-h-[75vh] flex items-center overflow-hidden pt-12 pb-16">
        
        {/* Background Abstract Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#012d1d]/5 via-[#f8f9fa]/80 to-[#f8f9fa] z-10" />
          <img
            src="/images/a_modern_glowing_abstract_3d_map_of_senegal_composed_of_floating_dots_and_nodes_screen.png"
            alt="Abstract Senegal Map"
            className="w-full h-full object-cover opacity-20 blur-[1px]"
          />
          {/* Floating Decorative Elements */}
          <div className="absolute top-1/4 left-10 w-32 h-32 bg-[#012d1d]/10 rounded-full blur-2xl animate-float" />
          <div className="absolute bottom-1/4 right-20 w-48 h-48 bg-[#396093]/10 rounded-full blur-2xl animate-float" />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-8 w-full">
          <div className="max-w-3xl space-y-6">
            <span className="text-[#396093] font-bold tracking-[0.2em] uppercase text-xs sm:text-sm block">
              Notre ADN & Convictions
            </span>
            
            <h1 className="font-headline font-extrabold text-4xl sm:text-6xl text-[#012d1d] leading-tight tracking-tight">
              Notre Identité & <br />
              <span className="text-[#396093]">Notre Vision</span>
            </h1>
            
            <p className="font-body text-base sm:text-lg text-[#414844] max-w-2xl leading-relaxed">
              Bâtir une société sénégalaise égalitaire où chaque citoyen, ancré dans ses valeurs, devient le moteur d'un développement durable et inclusif.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button 
                onClick={() => {
                  const el = document.getElementById('mot-presidente');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-[#012d1d] hover:bg-[#1b4332] text-white px-8 py-4 rounded-full font-bold text-sm shadow-xl hover:-translate-y-1 transition-all"
              >
                Notre Manifeste
              </button>

              <button 
                onClick={() => {
                  const el = document.getElementById('principes-action');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="border-2 border-[#012d1d] text-[#012d1d] hover:bg-[#012d1d]/5 px-8 py-4 rounded-full font-bold text-sm transition-all"
              >
                En savoir plus
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. MOT DE LA PRÉSIDENTE */}
      {/* ============================================================ */}
      <section className="relative z-30 px-4 sm:px-8 max-w-7xl mx-auto mb-28" id="mot-presidente">
        <div className="glass-panel rounded-[40px] overflow-hidden shadow-2xl flex flex-col md:flex-row items-stretch border border-white/80 bg-white/95 backdrop-blur-xl">
          
          {/* Portrait Column */}
          <div className="md:w-5/12 relative overflow-hidden group min-h-[380px] sm:min-h-[440px]">
            <img
              src="/images/professional_corporate_portrait_of_a_west_african_woman_leader_elegant_and_screen.png"
              alt="Adama Mbengue - Présidente Fondatrice"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#012d1d]/80 via-[#012d1d]/20 to-transparent" />
            
            <div className="absolute bottom-8 left-8 text-white">
              <p className="font-headline text-2xl sm:text-3xl font-bold">Adama Mbengue</p>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#d4e3ff] mt-1">Présidente Fondatrice</p>
            </div>
          </div>

          {/* Quote Column */}
          <div className="md:w-7/12 p-8 sm:p-14 flex flex-col justify-center space-y-6 bg-white/40">
            <Quote className="w-12 h-12 text-[#012d1d] opacity-40" />
            
            <p className="font-headline text-xl sm:text-2xl text-[#012d1d] italic font-semibold leading-relaxed">
              "Notre mission est de promouvoir des modèles endogènes de gouvernance et de développement, en réconciliant modernité et traditions positives pour une Afrique debout."
            </p>

            <div className="pt-6 border-t border-[#c1c8c2]/30 flex items-center justify-between">
              <div>
                <p className="text-xs font-bold text-[#012d1d]">APATAM@E Sénégal</p>
                <p className="text-[11px] text-[#717973]">Thiès • Dakar • Régions</p>
              </div>
              <div className="font-serif italic text-lg sm:text-xl font-bold text-[#396093]">
                Adama Mbengue
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. NOS PRINCIPES D'ACTION & VALEURS FONDATRICES */}
      {/* ============================================================ */}
      <section className="py-24 bg-[#edeeef]/60 overflow-hidden" id="principes-action">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center space-y-16">
          
          <div className="max-w-2xl mx-auto space-y-3">
            <span className="text-[#012d1d] font-bold tracking-[0.2em] uppercase text-xs block">Fondements Éthiques</span>
            <h2 className="font-headline text-3xl sm:text-4xl font-extrabold text-[#012d1d]">Nos Principes d'Action</h2>
            <p className="text-xs sm:text-sm text-[#414844] max-w-xl mx-auto">
              L'ensemble de nos actions est guidé par un socle de valeurs cardinales garantissant l'éthique, la cohésion et l'impact durable au service des citoyens.
            </p>
            <div className="w-24 h-1.5 bg-[#012d1d] mx-auto rounded-full mt-2" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6">
            {[
              { label: "L'Équité", desc: "Justice sociale & égalité des chances", icon: Scale },
              { label: "L'Intégrité", desc: "Transparence & exemplarité", icon: ShieldCheck },
              { label: "L'Inclusion", desc: "Participation de tous les terroirs", icon: Users },
              { label: "L'Innovation", desc: "Modernité & savoirs endogènes", icon: Lightbulb },
              { label: "La Collaboration", desc: "Synergies & co-construction", icon: Handshake },
              { label: "Paix & Sécurité", desc: "Médiation & vivre-ensemble", icon: ShieldCheck },
              { label: "Transmission", desc: "Dialogue aînés & jeunesse", icon: Sparkles }
            ].map((val, idx) => {
              const IconComp = val.icon;
              return (
                <div key={idx} className="flex flex-col items-center group cursor-pointer space-y-3 p-3 rounded-2xl hover:bg-white/80 transition-all">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white glass shadow-xl flex items-center justify-center group-hover:scale-110 group-hover:bg-[#012d1d] group-hover:text-white transition-all duration-500 text-[#012d1d] border border-white/80">
                    <IconComp className="w-8 h-8 group-hover:text-[#daa520] transition-colors" />
                  </div>
                  <p className="font-bold text-xs sm:text-sm text-[#012d1d] tracking-wide">
                    {val.label}
                  </p>
                  <p className="text-[10px] text-[#717973] text-center leading-tight">
                    {val.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. PLAN STRATÉGIQUE (OBJECTIFS STRATÉGIQUES) */}
      {/* ============================================================ */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-[#396093] font-bold tracking-[0.2em] uppercase text-xs block">Cap & Perspectives</span>
          <h2 className="font-headline text-3xl sm:text-4xl font-extrabold text-[#012d1d]">Objectifs Stratégiques</h2>
          <div className="w-24 h-1.5 bg-[#012d1d] mx-auto rounded-full" />
        </div>

        <div className="relative py-8">
          {/* Central Timeline Line on Desktop */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#c1c8c2] hidden md:block -translate-x-1/2" />

          <div className="space-y-12">
            
            {/* Node 1: OS1 Education */}
            <div className="relative flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0 w-full">
                <div className="glass-panel p-8 rounded-3xl shadow-lg border border-white/80 bg-white/90 hover:-translate-y-1 transition-all">
                  <span className="text-xs font-bold text-[#012d1d] uppercase tracking-wider block mb-1">Axe 01</span>
                  <h3 className="font-headline text-xl font-bold text-[#012d1d] mb-2">OS1 Éducation & Savoirs</h3>
                  <p className="font-body text-xs sm:text-sm text-[#414844] leading-relaxed">
                    Promouvoir une éducation de qualité inclusive et accessible, intégrant les savoirs endogènes et les outils numériques pour tous les terroirs.
                  </p>
                </div>
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#012d1d] border-4 border-white shadow-md z-10 hidden md:block" />
              <div className="md:w-1/2 md:pl-12" />
            </div>

            {/* Node 2: OS2 Politiques Publiques */}
            <div className="relative flex flex-col md:flex-row items-center">
              <div className="md:w-1/2" />
              <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#396093] border-4 border-white shadow-md z-10 hidden md:block" />
              <div className="md:w-1/2 md:pl-12 mb-6 md:mb-0 w-full">
                <div className="glass-panel p-8 rounded-3xl shadow-lg border border-white/80 bg-white/90 hover:-translate-y-1 transition-all">
                  <span className="text-xs font-bold text-[#396093] uppercase tracking-wider block mb-1">Axe 02</span>
                  <h3 className="font-headline text-xl font-bold text-[#396093] mb-2">OS2 Politiques Publiques</h3>
                  <p className="font-body text-xs sm:text-sm text-[#414844] leading-relaxed">
                    Influencer les cadres législatifs pour une meilleure prise en compte des réalités locales dans les politiques nationales de développement.
                  </p>
                </div>
              </div>
            </div>

            {/* Node 3: OS3 Capacités Institutionnelles */}
            <div className="relative flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0 w-full">
                <div className="glass-panel p-8 rounded-3xl shadow-lg border border-white/80 bg-white/90 hover:-translate-y-1 transition-all">
                  <span className="text-xs font-bold text-[#012d1d] uppercase tracking-wider block mb-1">Axe 03</span>
                  <h3 className="font-headline text-xl font-bold text-[#012d1d] mb-2">OS3 Capacités Institutionnelles</h3>
                  <p className="font-body text-xs sm:text-sm text-[#414844] leading-relaxed">
                    Renforcer l'excellence opérationnelle, l'intégrité et la transparence au sein des organisations communautaires et des mairies.
                  </p>
                </div>
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#012d1d] border-4 border-white shadow-md z-10 hidden md:block" />
              <div className="md:w-1/2 md:pl-12" />
            </div>

          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 5. ORGANIGRAMME (STRUCTURE ORGANISATIONNELLE) */}
      {/* ============================================================ */}
      <section className="py-24 bg-[#edeeef]/60 relative overflow-hidden" id="organigramme">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10 space-y-16">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-[#012d1d] font-bold tracking-[0.2em] uppercase text-xs block">Gouvernance Interne</span>
            <h2 className="font-headline text-3xl sm:text-4xl font-extrabold text-[#012d1d]">Structure Organisationnelle</h2>
            <div className="w-24 h-1.5 bg-[#012d1d] mx-auto rounded-full" />
          </div>

          <div className="flex flex-col items-center gap-12 max-w-5xl mx-auto">
            
            {/* Level 1: Strategic Board */}
            <div 
              onClick={() => setSelectedDept(deptDetails.conseil)}
              className="bg-[#396093] text-white p-6 rounded-2xl shadow-xl w-80 text-center border border-white/20 hover:scale-105 transition-all cursor-pointer group"
            >
              <div className="flex justify-center mb-2">
                <Users className="w-8 h-8 text-[#daa520]" />
              </div>
              <h3 className="font-headline text-lg font-bold">Conseil d'Orientation Stratégique</h3>
              <p className="text-[11px] text-white/80 mt-1">Cliquer pour détails</p>
            </div>

            {/* Level 2: General Management & Secretariat */}
            <div className="relative flex flex-col md:flex-row items-center gap-8 w-full justify-center">
              <div 
                onClick={() => setSelectedDept(deptDetails.direction)}
                className="bg-[#012d1d] text-white p-6 rounded-2xl shadow-xl w-80 text-center border border-white/20 hover:scale-105 transition-all cursor-pointer group z-10"
              >
                <div className="flex justify-center mb-2">
                  <UserCheck className="w-8 h-8 text-[#daa520]" />
                </div>
                <h3 className="font-headline text-lg font-bold">Direction Générale</h3>
                <p className="text-[11px] text-white/80 mt-1">Supervision opérationnelle</p>
              </div>

              {/* Secretariat */}
              <div className="md:absolute md:left-[65%] bg-white glass-panel p-4 rounded-xl shadow-md w-64 border border-[#012d1d]/10 text-left">
                <div className="flex items-center gap-2 mb-1 text-[#012d1d]">
                  <Sparkles className="w-4 h-4 text-[#daa520]" />
                  <h4 className="font-bold text-xs text-[#012d1d]">Secrétariat de Direction</h4>
                </div>
                <p className="text-[11px] text-[#414844]">Gestion d'agenda, courrier, accueil et standard.</p>
              </div>
            </div>

            {/* Level 3: Main Directions (4) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
              
              <div 
                onClick={() => setSelectedDept(deptDetails.programmes)}
                className="bg-[#1b4332] text-white p-6 rounded-2xl shadow-lg border border-white/10 hover:-translate-y-1 transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <BookOpen className="w-7 h-7 text-[#daa520] mb-3" />
                  <h4 className="font-bold text-sm mb-2">Direction des Programmes et de la Formation</h4>
                  <p className="text-xs text-white/80">Conception, coordination et suivi pédagogique.</p>
                </div>
              </div>

              <div 
                onClick={() => setSelectedDept(deptDetails.recherche)}
                className="bg-[#1b4332] text-white p-6 rounded-2xl shadow-lg border border-white/10 hover:-translate-y-1 transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <Search className="w-7 h-7 text-[#daa520] mb-3" />
                  <h4 className="font-bold text-sm mb-2">Direction de la Recherche & Observatoire</h4>
                  <p className="text-xs text-white/80">Observatoire de la gouvernance et analyse de données.</p>
                </div>
              </div>

              <div 
                onClick={() => setSelectedDept(deptDetails.partenariats)}
                className="bg-[#1b4332] text-white p-6 rounded-2xl shadow-lg border border-white/10 hover:-translate-y-1 transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <Megaphone className="w-7 h-7 text-[#daa520] mb-3" />
                  <h4 className="font-bold text-sm mb-2">Direction des Partenariats & Com</h4>
                  <p className="text-xs text-white/80">Coopération, ressources et communication.</p>
                </div>
              </div>

              <div 
                onClick={() => setSelectedDept(deptDetails.admin)}
                className="bg-[#1b4332] text-white p-6 rounded-2xl shadow-lg border border-white/10 hover:-translate-y-1 transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <Calculator className="w-7 h-7 text-[#daa520] mb-3" />
                  <h4 className="font-bold text-sm mb-2">Direction Administrative & Financière</h4>
                  <p className="text-xs text-white/80">Gestion financière, comptable et passation des marchés.</p>
                </div>
              </div>

            </div>

            {/* Level 4: Support Services (5) */}
            <div className="w-full space-y-6">
              <div className="bg-[#012d1d]/10 py-3 px-8 rounded-full text-center max-w-xs mx-auto">
                <span className="font-bold text-xs text-[#012d1d] uppercase tracking-widest">Services d'Appui</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                {[
                  { label: "Comptabilité & Finances", icon: Calculator },
                  { label: "Ressources Humaines", icon: Users },
                  { label: "Informatique & Digital", icon: Laptop },
                  { label: "Logistique & Patrimoine", icon: Truck },
                  { label: "Suivi-Évaluation & Qualité", icon: Settings }
                ].map((serv, sIdx) => {
                  const ServIcon = serv.icon;
                  return (
                    <div key={sIdx} className="bg-white p-4 rounded-2xl shadow-sm border border-[#c1c8c2]/50 text-center hover:border-[#012d1d] transition-all">
                      <ServIcon className="w-6 h-6 text-[#012d1d] mx-auto mb-2" />
                      <p className="text-xs font-bold text-[#012d1d]">{serv.label}</p>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Mission Banner */}
          <div className="mt-16 bg-[#012d1d] text-white p-8 sm:p-10 rounded-[32px] flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
            <div className="flex items-center gap-4 shrink-0">
              <Sparkles className="w-8 h-8 text-[#daa520]" />
              <h4 className="font-headline font-extrabold text-xl uppercase tracking-wider text-white">Notre Mission :</h4>
            </div>
            <p className="font-body text-sm sm:text-base text-white/90 text-center md:text-left max-w-3xl leading-relaxed">
              Former, informer, accompagner et mobiliser les citoyens et les acteurs territoriaux pour une gouvernance responsable et un développement local inclusif et durable.
            </p>
            <Globe className="w-8 h-8 text-[#daa520] hidden md:block shrink-0" />
          </div>

        </div>
      </section>

      {/* Dept Details Modal */}
      {selectedDept && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-8 max-w-lg w-full shadow-2xl border border-white space-y-4 relative">
            <button 
              onClick={() => setSelectedDept(null)}
              className="absolute top-5 right-5 text-gray-400 hover:text-gray-600 p-1"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="font-headline text-2xl font-bold text-[#012d1d] pr-6">{selectedDept.title}</h3>
            <p className="text-sm text-[#414844] leading-relaxed">{selectedDept.text}</p>
            <div className="pt-4 flex justify-end">
              <button 
                onClick={() => setSelectedDept(null)}
                className="px-6 py-2.5 bg-[#012d1d] text-white rounded-full text-xs font-bold shadow-md hover:bg-[#1b4332]"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
