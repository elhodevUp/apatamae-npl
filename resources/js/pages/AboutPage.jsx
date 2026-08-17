import React, { useState, useEffect } from 'react';
import { 
  Quote, Scale, ShieldCheck, Users, Lightbulb, Handshake, 
  BookOpen, Search, Megaphone, Calculator, UserCheck, 
  Laptop, Truck, Settings, Sparkles, Globe, ChevronRight, X 
} from 'lucide-react';
import { Link, router } from '@inertiajs/react';
import Layout from '../Layouts/Layout';
import { LEADERSHIP_TEAM } from '../data/apatamData';
import NoiseCanvas from '../components/NoiseCanvas';

export default function AboutPage() {
  const navigate = (path) => router.visit(path);
  const [selectedDept, setSelectedDept] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.apple-reveal, .scale-reveal, .slide-up-reveal');
    elements.forEach(el => observer.observe(el));

    return () => elements.forEach(el => observer.unobserve(el));
  }, []);

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
    <div className="pt-[72px] pb-20 bg-[#f8f9fa] text-[#0A2540] selection:bg-[#1B4332]/20 overflow-x-hidden">
      
      {/* ============================================================ */}
      {/* 1. HERO SECTION */}
      {/* ============================================================ */}
      <section className="relative pt-28 pb-32 px-4 sm:px-8 overflow-hidden flex items-center bg-[#f8f9fa]">
        
        <NoiseCanvas className="absolute inset-0 w-full h-full z-0 opacity-100 pointer-events-none" />

        {/* Background Glow Blobs */}
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-[700px] h-[700px] bg-[#1B4332]/10 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-[5%] left-[-10%] w-[800px] h-[800px] bg-[#0A2540]/10 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto space-y-6 relative z-10 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1B4332]/10 border border-[#1B4332]/20 text-[#1B4332] text-xs font-bold uppercase tracking-wider shadow-sm">
            <Sparkles className="w-4 h-4" />
            <span>Notre ADN & Convictions</span>
          </span>
          <h1 className="font-headline font-extrabold text-headline-xl text-[#0A2540] tracking-tight leading-tight">
            Notre Identité & <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1B4332] to-[#396093]">Notre Vision</span>
          </h1>
          <p className="text-base sm:text-lg text-[#414844] max-w-2xl mx-auto font-body leading-relaxed drop-shadow-sm">
            Bâtir une société sénégalaise égalitaire où chaque citoyen, ancré dans ses valeurs, devient le moteur d'un développement durable et inclusif.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. MOT DE LA PRÉSIDENTE */}
      {/* ============================================================ */}
      <section className="relative z-30 px-4 sm:px-8 max-w-7xl mx-auto mb-28 -mt-12" id="mot-presidente">
        <div className="glass-panel rounded-[2.5rem] overflow-hidden shadow-[0_30px_60px_rgba(27,67,50,0.1)] flex flex-col md:flex-row items-stretch bg-white/95 backdrop-blur-xl border border-white/50">
          
          {/* Portrait Column */}
          <div className="md:w-5/12 relative overflow-hidden group min-h-[380px] sm:min-h-[440px]">
            <img
              src="/images/professional_corporate_portrait_of_a_west_african_woman_leader_elegant_and_screen.png"
              alt="Adama Mbengue - Présidente Fondatrice"
              className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540] via-[#0A2540]/60 to-transparent opacity-95 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="absolute inset-0 p-8 flex flex-col justify-end z-10 text-white">
              <p className="font-headline text-2xl sm:text-3xl font-bold drop-shadow-md">Adama Mbengue</p>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#daa520] mt-2 drop-shadow-sm">Présidente Fondatrice</p>
            </div>
          </div>

          {/* Quote Column */}
          <div className="md:w-7/12 p-8 sm:p-14 flex flex-col justify-center space-y-8 bg-transparent">
            <Quote className="w-12 h-12 text-[#1B4332] opacity-30" />
            
            <p className="font-headline text-xl sm:text-2xl text-[#0A2540] italic font-semibold leading-relaxed">
              "Notre mission est de promouvoir des modèles endogènes de gouvernance et de développement, en réconciliant modernité et traditions positives pour une Afrique debout."
            </p>

            <div className="pt-6 border-t border-[#1B4332]/10 flex items-center justify-between">
              <div>
                <p className="text-xs font-bold text-[#0A2540]">APATAM@E Sénégal</p>
                <p className="text-[11px] text-[#414844]">Thiès • Dakar • Régions</p>
              </div>
              <div className="font-headline italic text-lg sm:text-xl font-bold text-[#1B4332]">
                Adama Mbengue
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 2.5 NOTRE ÉQUIPE DIRIGEANTE */}
      {/* ============================================================ */}
      <section className="py-20 bg-white relative overflow-hidden border-t border-[#c1c8c2]/30" id="equipe">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="space-y-4 mb-16 apple-reveal">
            <span className="text-[#1B4332] font-bold tracking-[0.25em] uppercase text-xs flex items-center gap-3">
              <span className="w-12 h-[2px] bg-[#daa520] block" />
              L'Excellence Opérationnelle
            </span>
            <h2 className="font-headline text-headline-lg text-[#0A2540] mb-4">
              Notre Équipe <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1B4332] to-[#396093]">Dirigeante.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {LEADERSHIP_TEAM.map((member, idx) => (
              <div key={idx} className="glass-panel rounded-[2.5rem] overflow-hidden shadow-[0_20px_40px_rgba(10,37,64,0.05)] border border-white/80 bg-white group hover-lift transition-all">
                <div className="h-72 overflow-hidden relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540] via-[#0A2540]/20 to-transparent opacity-80" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="font-headline text-2xl font-bold text-white drop-shadow-md">{member.name}</h3>
                    <p className="text-[11px] font-bold text-[#daa520] uppercase tracking-widest mt-1 drop-shadow-sm">{member.role}</p>
                  </div>
                </div>
                <div className="p-8">
                  <p className="font-body text-sm text-[#414844] leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. NOS PRINCIPES D'ACTION & VALEURS FONDATRICES */}
      {/* ============================================================ */}
      <section className="py-24 bg-[#edeeef]/60 overflow-hidden border-t border-[#c1c8c2]/30" id="principes-action">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center space-y-16">
          
          <div className="space-y-4 max-w-2xl text-left apple-reveal">
            <span className="text-[#daa520] font-bold tracking-[0.25em] uppercase text-xs flex items-center gap-3">
              <span className="w-12 h-[2px] bg-[#daa520] block" />
              Fondements Éthiques
            </span>
            <h2 className="font-headline text-headline-lg text-[#0A2540] mb-4">
              Nos Principes <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#daa520] to-[#1B4332]">d'Action.</span>
            </h2>
            <p className="font-body text-[#414844] text-lg leading-relaxed max-w-lg">
              L'ensemble de nos actions est guidé par un socle de valeurs cardinales garantissant l'éthique, la cohésion et l'impact durable au service des citoyens.
            </p>
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
                <div key={idx} className="flex flex-col items-center group cursor-pointer space-y-4 p-4 rounded-3xl hover:bg-white/80 transition-all hover-lift">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white shadow-glass flex items-center justify-center group-hover:scale-110 group-hover:bg-[#1B4332] group-hover:text-white transition-all duration-500 text-[#0A2540] border border-white/50">
                    <IconComp className="w-8 h-8 group-hover:text-[#daa520] transition-colors" />
                  </div>
                  <p className="font-bold text-xs sm:text-sm text-[#0A2540] tracking-wide font-headline">
                    {val.label}
                  </p>
                  <p className="text-[10px] text-[#414844] text-center leading-tight font-body">
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
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 apple-reveal">
          <div className="space-y-4 max-w-2xl">
            <span className="text-[#0A2540] font-bold tracking-[0.2em] uppercase text-xs">Cap & Perspectives</span>
            <h2 className="font-headline text-headline-lg text-[#1B4332]">Objectifs Stratégiques.</h2>
          </div>
        </div>

        <div className="relative py-8">
          {/* Central Timeline Line on Desktop */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#1B4332]/20 hidden md:block -translate-x-1/2" />

          <div className="space-y-12">
            
            {/* Node 1: OS1 Education */}
            <div className="relative flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0 w-full">
                <div className="glass-panel p-8 rounded-3xl shadow-[0_20px_40px_rgba(27,67,50,0.05)] border border-white/80 bg-white/90 hover-lift transition-all">
                  <span className="text-xs font-bold text-[#daa520] uppercase tracking-wider block mb-1">Axe 01</span>
                  <h3 className="font-headline text-xl font-bold text-[#0A2540] mb-2">OS1 Éducation & Savoirs</h3>
                  <p className="font-body text-xs sm:text-sm text-[#414844] leading-relaxed">
                    Promouvoir une éducation de qualité inclusive et accessible, intégrant les savoirs endogènes et les outils numériques pour tous les terroirs.
                  </p>
                </div>
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#1B4332] border-4 border-white shadow-md z-10 hidden md:block" />
              <div className="md:w-1/2 md:pl-12" />
            </div>

            {/* Node 2: OS2 Politiques Publiques */}
            <div className="relative flex flex-col md:flex-row items-center">
              <div className="md:w-1/2" />
              <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#daa520] border-4 border-white shadow-md z-10 hidden md:block" />
              <div className="md:w-1/2 md:pl-12 mb-6 md:mb-0 w-full">
                <div className="glass-panel p-8 rounded-3xl shadow-[0_20px_40px_rgba(27,67,50,0.05)] border border-white/80 bg-white/90 hover-lift transition-all">
                  <span className="text-xs font-bold text-[#daa520] uppercase tracking-wider block mb-1">Axe 02</span>
                  <h3 className="font-headline text-xl font-bold text-[#0A2540] mb-2">OS2 Politiques Publiques</h3>
                  <p className="font-body text-xs sm:text-sm text-[#414844] leading-relaxed">
                    Influencer les cadres législatifs pour une meilleure prise en compte des réalités locales dans les politiques nationales de développement.
                  </p>
                </div>
              </div>
            </div>

            {/* Node 3: OS3 Capacités Institutionnelles */}
            <div className="relative flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0 w-full">
                <div className="glass-panel p-8 rounded-3xl shadow-[0_20px_40px_rgba(27,67,50,0.05)] border border-white/80 bg-white/90 hover-lift transition-all">
                  <span className="text-xs font-bold text-[#daa520] uppercase tracking-wider block mb-1">Axe 03</span>
                  <h3 className="font-headline text-xl font-bold text-[#0A2540] mb-2">OS3 Capacités Institutionnelles</h3>
                  <p className="font-body text-xs sm:text-sm text-[#414844] leading-relaxed">
                    Renforcer l'excellence opérationnelle, l'intégrité et la transparence au sein des organisations communautaires et des mairies.
                  </p>
                </div>
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#1B4332] border-4 border-white shadow-md z-10 hidden md:block" />
              <div className="md:w-1/2 md:pl-12" />
            </div>

          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 5. ORGANIGRAMME (STRUCTURE ORGANISATIONNELLE) */}
      {/* ============================================================ */}
      <section className="py-24 bg-white relative overflow-hidden border-t border-[#c1c8c2]/30" id="organigramme">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10 space-y-16">
          
          <div className="space-y-4 max-w-2xl mx-auto text-center mb-16 apple-reveal">
            <span className="text-[#1B4332] font-bold tracking-[0.25em] uppercase text-xs flex items-center justify-center gap-3">
              <span className="w-12 h-[2px] bg-[#daa520] block" />
              Gouvernance Interne
              <span className="w-12 h-[2px] bg-[#daa520] block" />
            </span>
            <h2 className="font-headline text-headline-lg text-[#0A2540]">
              Structure Organisationnelle.
            </h2>
          </div>

          <div className="flex flex-col items-center gap-12 max-w-5xl mx-auto">
            
            {/* Level 1: Strategic Board */}
            <div 
              onClick={() => setSelectedDept(deptDetails.conseil)}
              className="bg-[#0A2540] text-white p-6 rounded-3xl shadow-xl w-80 text-center border border-white/20 hover:scale-105 transition-all cursor-pointer group hover:shadow-[0_20px_40px_rgba(10,37,64,0.3)]"
            >
              <div className="flex justify-center mb-3">
                <Users className="w-8 h-8 text-[#daa520]" />
              </div>
              <h3 className="font-headline text-lg font-bold">Conseil d'Orientation Stratégique</h3>
              <p className="text-[11px] text-white/60 mt-1 uppercase tracking-widest font-bold">Cliquer pour détails</p>
            </div>

            {/* Level 2: General Management & Secretariat */}
            <div className="relative flex flex-col md:flex-row items-center gap-8 w-full justify-center">
              <div 
                onClick={() => setSelectedDept(deptDetails.direction)}
                className="bg-[#1B4332] text-white p-6 rounded-3xl shadow-xl w-80 text-center border border-white/20 hover:scale-105 transition-all cursor-pointer group z-10 hover:shadow-[0_20px_40px_rgba(27,67,50,0.3)]"
              >
                <div className="flex justify-center mb-3">
                  <UserCheck className="w-8 h-8 text-[#daa520]" />
                </div>
                <h3 className="font-headline text-lg font-bold">Direction Générale</h3>
                <p className="text-[11px] text-white/60 mt-1 uppercase tracking-widest font-bold">Supervision opérationnelle</p>
              </div>

              {/* Secretariat */}
              <div className="md:absolute md:left-[65%] bg-white glass-panel p-5 rounded-3xl shadow-glass w-64 border border-[#0A2540]/10 text-left">
                <div className="flex items-center gap-3 mb-2 text-[#0A2540]">
                  <div className="w-8 h-8 rounded-full bg-[#1B4332]/10 flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-[#daa520]" />
                  </div>
                  <h4 className="font-headline font-bold text-xs text-[#0A2540]">Secrétariat de Direction</h4>
                </div>
                <p className="font-body text-[11px] text-[#414844]">Gestion d'agenda, courrier, accueil et standard.</p>
              </div>
            </div>

            {/* Level 3: Main Directions (4) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
              
              <div 
                onClick={() => setSelectedDept(deptDetails.programmes)}
                className="bg-white text-[#0A2540] p-6 rounded-3xl shadow-glass border border-[#0A2540]/5 hover-lift transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-full bg-[#1B4332]/10 flex items-center justify-center mb-4 group-hover:bg-[#1B4332] transition-colors">
                    <BookOpen className="w-5 h-5 text-[#1B4332] group-hover:text-white transition-colors" />
                  </div>
                  <h4 className="font-headline font-bold text-sm mb-2">Direction des Programmes et de la Formation</h4>
                  <p className="font-body text-xs text-[#414844]">Conception, coordination et suivi pédagogique.</p>
                </div>
              </div>

              <div 
                onClick={() => setSelectedDept(deptDetails.recherche)}
                className="bg-white text-[#0A2540] p-6 rounded-3xl shadow-glass border border-[#0A2540]/5 hover-lift transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-full bg-[#1B4332]/10 flex items-center justify-center mb-4 group-hover:bg-[#1B4332] transition-colors">
                    <Search className="w-5 h-5 text-[#1B4332] group-hover:text-white transition-colors" />
                  </div>
                  <h4 className="font-headline font-bold text-sm mb-2">Direction de la Recherche & Observatoire</h4>
                  <p className="font-body text-xs text-[#414844]">Observatoire de la gouvernance et analyse de données.</p>
                </div>
              </div>

              <div 
                onClick={() => setSelectedDept(deptDetails.partenariats)}
                className="bg-white text-[#0A2540] p-6 rounded-3xl shadow-glass border border-[#0A2540]/5 hover-lift transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-full bg-[#1B4332]/10 flex items-center justify-center mb-4 group-hover:bg-[#1B4332] transition-colors">
                    <Megaphone className="w-5 h-5 text-[#1B4332] group-hover:text-white transition-colors" />
                  </div>
                  <h4 className="font-headline font-bold text-sm mb-2">Direction des Partenariats & Com</h4>
                  <p className="font-body text-xs text-[#414844]">Coopération, ressources et communication.</p>
                </div>
              </div>

              <div 
                onClick={() => setSelectedDept(deptDetails.admin)}
                className="bg-white text-[#0A2540] p-6 rounded-3xl shadow-glass border border-[#0A2540]/5 hover-lift transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-full bg-[#1B4332]/10 flex items-center justify-center mb-4 group-hover:bg-[#1B4332] transition-colors">
                    <Calculator className="w-5 h-5 text-[#1B4332] group-hover:text-white transition-colors" />
                  </div>
                  <h4 className="font-headline font-bold text-sm mb-2">Direction Administrative & Financière</h4>
                  <p className="font-body text-xs text-[#414844]">Gestion financière, comptable et marchés.</p>
                </div>
              </div>

            </div>

            {/* Level 4: Support Services (5) */}
            <div className="w-full space-y-6">
              <div className="bg-[#0A2540]/5 py-3 px-8 rounded-full text-center max-w-xs mx-auto">
                <span className="font-headline font-bold text-xs text-[#0A2540] uppercase tracking-widest">Services d'Appui</span>
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
                    <div key={sIdx} className="bg-white p-5 rounded-3xl shadow-sm border border-[#0A2540]/10 text-center hover:border-[#1B4332] hover-lift transition-all">
                      <div className="w-8 h-8 rounded-full bg-[#0A2540]/5 mx-auto flex items-center justify-center mb-3">
                        <ServIcon className="w-4 h-4 text-[#0A2540]" />
                      </div>
                      <p className="font-body text-[11px] font-bold text-[#0A2540] uppercase tracking-wide">{serv.label}</p>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Mission Banner */}
          <div className="mt-16 bg-[#1B4332] text-white p-8 sm:p-12 rounded-[2.5rem] flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_30px_60px_rgba(27,67,50,0.3)] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="flex items-center gap-4 shrink-0 relative z-10">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md">
                <Globe className="w-6 h-6 text-[#daa520]" />
              </div>
              <h4 className="font-headline font-extrabold text-2xl uppercase tracking-wider text-white drop-shadow-md">Notre Mission</h4>
            </div>
            <p className="font-body text-sm sm:text-base text-white/90 text-center md:text-left max-w-3xl leading-relaxed relative z-10 drop-shadow-sm">
              Former, informer, accompagner et mobiliser les citoyens et les acteurs territoriaux pour une gouvernance responsable et un développement local inclusif et durable.
            </p>
          </div>

        </div>
      </section>

      {/* Dept Details Modal */}
      {selectedDept && (
        <div className="fixed inset-0 z-50 bg-[#0A2540]/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-white rounded-[2.5rem] p-8 sm:p-10 max-w-lg w-full shadow-2xl border border-white/20 space-y-4 relative animate-fade-in">
            <button 
              onClick={() => setSelectedDept(null)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-[#f8f9fa] flex items-center justify-center text-[#414844] hover:bg-[#0A2540] hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="font-headline text-2xl font-bold text-[#0A2540] pr-8">{selectedDept.title}</h3>
            <p className="font-body text-sm text-[#414844] leading-relaxed">{selectedDept.text}</p>
            <div className="pt-6 flex justify-end">
              <button 
                onClick={() => setSelectedDept(null)}
                className="px-8 py-3 bg-[#1B4332] text-white rounded-full text-xs font-bold shadow-lg hover:bg-[#122c21] tracking-widest uppercase transition-colors"
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
