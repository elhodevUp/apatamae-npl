import React, { useState, useEffect } from 'react';
import {
  ArrowRight, ChevronLeft, ChevronRight, Eye, Users,
  ShieldCheck, Lightbulb, Landmark, GraduationCap, Handshake,
  Check, Mail, MoveRight, Leaf, Sparkles, Laptop, Sprout
} from 'lucide-react';
import { Link, router } from '@inertiajs/react';
import Layout from '../Layouts/Layout';
import MosaicGallery from '../components/MosaicGallery';
import NoiseCanvas from '../components/NoiseCanvas';

export default function HomePage() {
  const navigate = (path) => router.visit(path);
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      title: "Ensemble, construisons des",
      highlight: "territoires d'avenir.",
      description: "Former, informer, accompagner et mobiliser les citoyens pour une gouvernance responsable et un développement local inclusif et durable au Sénégal.",
      image: "/images/senegal_gouvernance_citoyenne_hero.png",
      badgeDomain: "Gouvernance Locale",
      badgeObjective: "Innovation Durable",
      iconDomain: Landmark,
      iconObjective: Leaf,
      tag: "Gouvernance & Citoyenneté"
    },
    {
      title: "Agroécologie &",
      highlight: "Résilience Écologique",
      description: "Systèmes d'irrigation solaire de précision et valorisation des savoirs agricoles locaux dans la vallée du fleuve Sénégal.",
      image: "/images/cinematic_photography_of_a_sustainable_agricultural_project_in_rural_senegal_screen.png",
      badgeDomain: "Agriculture & Climat",
      badgeObjective: "Souveraineté Alimentaire",
      iconDomain: Sprout,
      iconObjective: Leaf,
      tag: "Éco-Agri Sahel"
    },
    {
      title: "Équité STEM &",
      highlight: "Leadership Féminin",
      description: "Bourses d'excellence, mentorat scientifique et laboratoires numériques mobiles pour former les leaders de demain.",
      image: "/images/senegal_stem_leadership_hero.png",
      badgeDomain: "Équité Scientifique",
      badgeObjective: "Futur Numérique",
      iconDomain: GraduationCap,
      iconObjective: Sparkles,
      tag: "Équité & Jeunesse"
    },
    {
      title: "Ancrage National &",
      highlight: "Infrastructures Vertes",
      description: "Des espaces d'incubation écologiques légers et décentralisés au cœur de 5 régions stratégiques du Sénégal.",
      image: "/images/senegal_infrastructure_verte_realiste.png",
      badgeDomain: "Siège Éco-Responsable",
      badgeObjective: "Transition Énergétique",
      iconDomain: Landmark,
      iconObjective: Leaf,
      tag: "Sénégal Durable"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 9000);
    return () => clearInterval(interval);
  }, [heroSlides.length]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

    const elements = document.querySelectorAll('.apple-reveal');
    elements.forEach(el => observer.observe(el));

    return () => elements.forEach(el => observer.unobserve(el));
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  return (
    <div className="bg-[#f8f9fa] text-[#0A2540] selection:bg-[#1B4332]/20 overflow-x-hidden">

        {/* ============================================================ */}
        {/* 1. HERO SLIDER SECTION WITH ANIMATED SLIDE CROSS-FADE */}
        {/* ============================================================ */}
        <section className="relative min-h-screen pt-28 pb-16 px-4 sm:px-8 overflow-hidden flex items-center bg-[#f8f9fa]">
          
          <NoiseCanvas className="absolute inset-0 w-full h-full z-0 opacity-100 pointer-events-none" />

          {/* Background Glow Blobs */}
          <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
            <div className="absolute top-[-10%] right-[-5%] w-[700px] h-[700px] bg-[#1B4332]/10 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-[5%] left-[-10%] w-[800px] h-[800px] bg-[#0A2540]/10 rounded-full blur-[120px]" />
          </div>

          <div className="relative w-full max-w-7xl mx-auto min-h-[600px] flex flex-col justify-center z-10">

            {/* Active Slide Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

              {/* Left Content Column */}
              <div className="lg:col-span-6 space-y-6 text-left relative min-h-[320px]">
                {heroSlides.map((slide, i) => (
                  <div
                    key={i}
                    className={`transition-all duration-1000 ease-in-out ${currentSlide === i
                        ? 'opacity-100 translate-y-0 relative z-10'
                        : 'opacity-0 translate-y-2 absolute inset-0 pointer-events-none z-0'
                      }`}
                  >
                    <span className="inline-block px-4 py-1.5 bg-[#1B4332]/10 border border-[#1B4332]/20 text-[#1B4332] rounded-full text-xs font-bold uppercase tracking-widest mb-4">
                      {slide.tag}
                    </span>

                    <h1 className="font-headline font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#0A2540] leading-tight mb-4">
                      {slide.title}{" "}
                      <span className="text-[#1B4332]">{slide.highlight}</span>
                    </h1>

                    <p className="font-body text-base sm:text-lg text-[#414844] leading-relaxed max-w-xl mb-6">
                      {slide.description}
                    </p>

                    <div className="flex flex-wrap items-center gap-4 pt-2">
                      <button
                        onClick={() => navigate('/qui-sommes-nous')}
                        className="px-8 py-4 bg-[#1B4332] hover:bg-[#1B4332]/90 text-white rounded-full font-bold shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center gap-3 text-sm"
                      >
                        <span>Découvrir notre vision</span>
                        <ArrowRight className="w-4 h-4 text-[#daa520]" />
                      </button>

                      <button
                        onClick={() => navigate('/contact')}
                        className="px-8 py-4 bg-white/80 border border-[#c1c8c2] text-[#0A2540] rounded-full font-bold hover:bg-white transition-all text-sm shadow-sm"
                      >
                        Soutenir l'initiative
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right Image Container with Cross-fading Slides & Badges */}
              <div className="lg:col-span-6 relative aspect-[4/3] xl:aspect-[4/3] mt-8 lg:mt-0">

                <div className="relative rounded-[30px] sm:rounded-[40px] overflow-hidden shadow-2xl w-full h-full">
                  {heroSlides.map((slide, i) => (
                    <div
                      key={i}
                      className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${currentSlide === i ? 'opacity-100 z-10' : 'opacity-0 z-0'
                        }`}
                    >
                      <img
                        src={slide.image}
                        alt={slide.highlight}
                        className="w-full h-full object-cover transform scale-100 hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/60 via-transparent to-transparent" />
                    </div>
                  ))}
                </div>

                {/* Slider Controls */}
                <div className="absolute -bottom-16 left-0 w-full flex justify-center">
                  <div className="flex items-center gap-6 z-20">
                    <button
                      onClick={prevSlide}
                      className="text-[#0A2540] hover:text-[#1B4332] transition-colors p-1"
                      aria-label="Previous slide"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>

                    <div className="flex gap-2.5 items-center">
                      {heroSlides.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setCurrentSlide(i)}
                          className={`h-2.5 rounded-full transition-all duration-500 ${currentSlide === i ? 'bg-[#1B4332] w-8' : 'bg-[#0A2540]/30 w-2.5'
                            }`}
                        />
                      ))}
                    </div>

                    <button
                      onClick={nextSlide}
                      className="text-[#0A2540] hover:text-[#1B4332] transition-colors p-1"
                      aria-label="Next slide"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>

              </div>

            </div>



          </div>
        </section>

        {/* ============================================================ */}
        {/* 2. L'ESSENCE (MISSION & VISION) */}
        {/* ============================================================ */}
        <section className="pt-16 pb-40 sm:py-24 lg:py-32 xl:py-40 px-4 sm:px-8 bg-[#f8f9fa] relative overflow-hidden" id="vision">
          <div className="max-w-5xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              
              {/* Left: Oversized Typography */}
              <div className="space-y-8 apple-reveal">
                <div className="space-y-4">
                  <span className="text-[#1B4332] font-bold tracking-[0.25em] uppercase text-xs flex items-center gap-3">
                    <span className="w-12 h-[2px] bg-[#daa520] block" />
                    Notre Essence
                  </span>
                  <h2 className="font-headline text-headline-xl text-[#0A2540] mb-4">
                    Forger <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1B4332] to-[#396093]">l'Avenir</span> <br />
                    des Territoires.
                  </h2>
                </div>
                <p className="font-body text-[#414844] text-lg leading-relaxed max-w-lg">
                  <strong className="text-[#1B4332]">Notre Mission :</strong> Former, informer, accompagner et mobiliser les citoyens pour une gouvernance responsable et un développement local inclusif et durable au Sénégal.
                </p>
                
                <div className="flex gap-4 pt-4">
                   <button onClick={() => navigate('/qui-sommes-nous')} className="group flex items-center gap-3 text-[#1B4332] font-bold text-sm hover:text-[#daa520] transition-colors">
                     Découvrir notre histoire
                     <div className="w-8 h-8 rounded-full bg-[#1B4332]/10 flex items-center justify-center group-hover:bg-[#daa520]/20 transition-colors">
                       <MoveRight className="w-4 h-4" />
                     </div>
                   </button>
                </div>
              </div>

              {/* Right: Cinematic Image & Vision Quote */}
              <div className="relative apple-reveal" style={{ transitionDelay: '0.2s' }}>
                <div className="aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl relative">
                  <img 
                    src="/images/senegal_notre_essence.png" 
                    alt="Communauté et Nature" 
                    className="w-full h-full object-cover img-ken-burns scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/80 via-transparent to-transparent opacity-60" />
                </div>
                
                {/* Overlapping Vision Quote */}
                <div className="absolute -bottom-20 sm:-bottom-12 left-4 sm:-left-6 lg:-left-8 bg-white/95 backdrop-blur-xl p-5 sm:p-8 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.1)] border border-white/50 max-w-[calc(100%-2rem)] sm:max-w-sm z-20 sm:mx-0">
                  <div className="w-10 h-10 rounded-xl bg-[#daa520]/20 flex items-center justify-center mb-4 text-[#daa520] hidden sm:flex">
                    <Eye className="w-5 h-5" />
                  </div>
                  <h3 className="font-headline font-bold text-xl text-[#1B4332] mb-2">Notre Vision</h3>
                  <p className="font-body text-[#414844] text-sm italic">
                    "Faire émerger des territoires mieux gouvernés, inclusifs, innovants et capables de porter leur propre développement."
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 3. NOS VALEURS FONDAMENTALES (LIGHT & ASYMMETRICAL) */}
        {/* ============================================================ */}
        <section className="pt-16 pb-40 sm:py-24 lg:py-32 xl:py-40 px-4 sm:px-8 bg-white relative overflow-hidden border-t border-[#c1c8c2]/30" id="fondations">
          <div className="max-w-5xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              
              {/* Left: Cinematic Image & Values Overlap */}
              <div className="relative apple-reveal order-2 lg:order-1">
                <div className="aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl relative">
                  <img 
                    src="/images/senegal_fondations_impact_humain.png" 
                    alt="Fondations et Valeurs" 
                    className="w-full h-full object-cover img-ken-burns scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/80 via-transparent to-transparent opacity-60" />
                </div>
                
                {/* Overlapping Values Highlight (Aligned Right to contrast with Essence) */}
                <div className="absolute -bottom-20 sm:-bottom-12 right-4 sm:-right-6 lg:-right-8 bg-white/95 backdrop-blur-xl p-5 sm:p-8 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.1)] border border-white/50 max-w-[calc(100%-2rem)] sm:max-w-sm z-20 sm:mx-0">
                  <div className="w-10 h-10 rounded-xl bg-[#1B4332]/20 flex items-center justify-center mb-4 text-[#1B4332] hidden sm:flex">
                    <Users className="w-5 h-5" />
                  </div>
                  <h3 className="font-headline font-bold text-xl text-[#1B4332] mb-2">Impact Humain</h3>
                  <p className="font-body text-[#414844] text-sm italic">
                    "Placer l'humain et les communautés locales au centre de toutes nos initiatives et de notre vision du développement."
                  </p>
                </div>
              </div>

              {/* Right: Typography and Values */}
              <div className="space-y-8 apple-reveal order-1 lg:order-2" style={{ transitionDelay: '0.2s' }}>
                <div className="space-y-4">
                  <span className="text-[#daa520] font-bold tracking-[0.25em] uppercase text-xs flex items-center gap-3">
                    <span className="w-12 h-[2px] bg-[#daa520] block" />
                    Nos Fondations
                  </span>
                  <h2 className="font-headline text-headline-xl text-[#0A2540] mb-4">
                    Ce qui nous <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#daa520] to-[#1B4332]">guide</span> <br />
                    au quotidien.
                  </h2>
                </div>
                <p className="font-body text-[#414844] text-lg leading-relaxed max-w-lg mb-8">
                  Nos valeurs ne sont pas que des mots ; elles sont le socle de chaque action, de chaque projet et de chaque partenariat que nous bâtissons.
                </p>

                <div className="space-y-6">
                  {/* Engagement */}
                  <div className="flex items-start gap-4 group hover-lift p-4 -ml-4 rounded-3xl hover:bg-white border border-transparent hover:border-[#c1c8c2]/30 transition-all">
                    <div className="w-12 h-12 rounded-2xl bg-[#f8f9fa] border border-[#c1c8c2]/50 flex items-center justify-center text-[#1B4332] shrink-0 group-hover:bg-[#1B4332] group-hover:text-white transition-colors duration-300">
                      <Users className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-headline font-bold text-lg xl:text-xl text-[#0A2540]">Engagement</h4>
                      <p className="font-body text-[#414844] text-sm mt-1">Au service du développement humain et des communautés locales.</p>
                    </div>
                  </div>
                  {/* Intégrité */}
                  <div className="flex items-start gap-4 group hover-lift p-4 -ml-4 rounded-3xl hover:bg-white border border-transparent hover:border-[#c1c8c2]/30 transition-all">
                    <div className="w-12 h-12 rounded-2xl bg-[#f8f9fa] border border-[#c1c8c2]/50 flex items-center justify-center text-[#1B4332] shrink-0 group-hover:bg-[#1B4332] group-hover:text-white transition-colors duration-300">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-headline font-bold text-lg xl:text-xl text-[#0A2540]">Intégrité</h4>
                      <p className="font-body text-[#414844] text-sm mt-1">Transparence, éthique et responsabilité inébranlables.</p>
                    </div>
                  </div>
                  {/* Innovation */}
                  <div className="flex items-start gap-4 group hover-lift p-4 -ml-4 rounded-3xl hover:bg-white border border-transparent hover:border-[#c1c8c2]/30 transition-all">
                    <div className="w-12 h-12 rounded-2xl bg-[#f8f9fa] border border-[#c1c8c2]/50 flex items-center justify-center text-[#1B4332] shrink-0 group-hover:bg-[#1B4332] group-hover:text-white transition-colors duration-300">
                      <Lightbulb className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-headline font-bold text-lg xl:text-xl text-[#0A2540]">Innovation</h4>
                      <p className="font-body text-[#414844] text-sm mt-1">Recherche constante de solutions durables et d'avenir.</p>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 4. NOTRE EMPREINTE (IMPACT) */}
        {/* ============================================================ */}
        <section className="py-16 sm:py-24 lg:py-32 xl:py-40 px-4 sm:px-8 relative overflow-hidden bg-[#0A2540]" id="impact">
          {/* Background Image Parallax Effect */}
          <div className="absolute inset-0 z-0">
            <img 
              src="/images/a_masonry_grid_of_high_quality_professional_photography_showcasing_community_screen.png" 
              alt="Impact" 
              className="w-full h-full object-cover opacity-20 mix-blend-luminosity"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1B4332]/95 to-[#0A2540]/95" />
          </div>

          <div className="max-w-[90rem] mx-auto relative z-10 space-y-16">
            <div className="text-center max-w-2xl mx-auto space-y-4 apple-reveal">
              <h2 className="font-headline text-headline-xl text-white">Notre Empreinte</h2>
              <div className="w-16 h-1.5 bg-[#daa520] mx-auto rounded-full" />
              <p className="font-body text-white/80">Des actions concrètes, des résultats mesurables au plus près des besoins.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {[
                { val: "5 000+", label: "Citoyens formés" },
                { val: "100+", label: "Collectivités aidées" },
                { val: "50+", label: "Études publiées" },
                { val: "12", label: "Régions touchées" }
              ].map((m, idx) => (
                <div 
                  key={idx} 
                  className="glass-panel-dark border-white/10 p-6 sm:p-8 lg:p-4 xl:p-8 rounded-[2rem] text-center space-y-3 hover-lift apple-reveal backdrop-blur-xl bg-white/5" 
                  style={{ transitionDelay: `${idx * 0.1}s` }}
                >
                  <span className="font-headline font-extrabold text-5xl lg:text-4xl xl:text-5xl text-white block drop-shadow-[0_0_20px_rgba(255,255,255,0.2)] break-words">{m.val}</span>
                  <p className="font-bold text-xs lg:text-[11px] xl:text-xs text-[#daa520] uppercase tracking-wider">{m.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 5. DOMAINES D'ACTION (BENTO GRID) */}
        {/* ============================================================ */}
        <section className="py-16 sm:py-24 lg:py-32 xl:py-40 px-4 sm:px-8 bg-[#f8f9fa] overflow-hidden" id="programmes">
          <div className="max-w-5xl mx-auto space-y-16">
            
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 apple-reveal">
              <div className="space-y-4 max-w-2xl">
                <span className="text-[#0A2540] font-bold tracking-[0.2em] uppercase text-xs">Piliers d'Intervention</span>
                <h2 className="font-headline text-headline-lg text-[#1B4332]">Des Programmes Ambitieux.</h2>
              </div>
              <Link href="/nos-programmes" className="btn-press px-8 py-4 bg-white border border-[#1B4332]/20 text-[#1B4332] rounded-full font-bold hover:bg-[#1B4332] hover:text-white shadow-sm inline-flex items-center gap-2 transition-all">
                Voir tous les programmes <MoveRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Asymmetrical Bento Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:items-center">
              
              {/* Main Large Card */}
              <div className="lg:col-span-8 relative rounded-[2.5rem] overflow-hidden group apple-reveal cursor-pointer aspect-[4/3] lg:aspect-[16/10] hover-lift hover:shadow-[0_30px_60px_rgba(27,67,50,0.2)]">
                <img src="/images/senegal_academie_territoriale.png" alt="Académie" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s] ease-out" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540] via-[#0A2540]/60 to-transparent opacity-95 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute inset-0 p-8 sm:p-12 lg:p-16 flex flex-col justify-end z-10">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-xl flex items-center justify-center text-white mb-6 border border-white/20 shadow-glass group-hover:bg-white/20 transition-all duration-500">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <h3 className="font-headline font-extrabold text-3xl lg:text-5xl text-white mb-3 drop-shadow-lg">Académie Territoriale</h3>
                  <p className="font-body text-lg text-white drop-shadow-md max-w-md mb-8 leading-relaxed hidden sm:block">
                    Formation continue et leadership pour les élus locaux de demain.
                  </p>
                  {/* Mobile Button: Explorer Link */}
                  <div className="flex sm:hidden items-center w-fit px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white font-bold text-xs tracking-wider uppercase gap-2 group-hover:bg-[#0A2540] group-hover:gap-4 transition-all duration-500 shadow-glass">
                    Explorer <MoveRight className="w-4 h-4" />
                  </div>
                  
                  {/* Desktop Button: Solid Découvrir */}
                  <div className="hidden sm:flex items-center text-white bg-[#daa520] w-fit px-6 py-3 rounded-full font-bold text-sm tracking-widest uppercase gap-3 group-hover:gap-5 hover:bg-[#b86505] shadow-lg transition-all duration-500">
                    Découvrir <MoveRight className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Sidebar Cards */}
              <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
                
                {/* Smaller Card 1 */}
                <div className="relative rounded-[2.5rem] overflow-hidden group apple-reveal cursor-pointer aspect-[4/3] lg:aspect-[4/3] hover-lift hover:shadow-[0_30px_60px_rgba(27,67,50,0.15)]" style={{ transitionDelay: '0.1s' }}>
                  <img src="/images/sustainable_solar_agriculture_1785937869292.png" alt="Green Territoires" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s] ease-out" />
                  <div className="absolute inset-0 bg-[#1B4332]/20" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1B4332] via-[#1B4332]/80 to-transparent opacity-100 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white mb-4 group-hover:bg-[#1B4332] transition-colors duration-500 border border-white/20 shadow-glass">
                      <Leaf className="w-5 h-5" />
                    </div>
                    <h3 className="font-headline font-bold text-3xl text-white mb-3 drop-shadow-md">Green Territoires</h3>
                    <p className="font-body text-white mb-6 drop-shadow-sm max-w-[90%] line-clamp-2">
                      Transition écologique et énergétique locale.
                    </p>
                    <div className="flex items-center w-fit px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white font-bold text-xs tracking-wider uppercase gap-2 group-hover:bg-[#1B4332] group-hover:gap-4 transition-all duration-500 shadow-glass">
                      Explorer <MoveRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Smaller Card 2 */}
                <div className="relative rounded-[2.5rem] overflow-hidden group apple-reveal cursor-pointer aspect-[4/3] lg:aspect-[4/3] hover-lift hover:shadow-[0_30px_60px_rgba(27,67,50,0.15)]" style={{ transitionDelay: '0.2s' }}>
                  <img src="/images/senegal_lab_innovation.png" alt="Lab Innovation" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s] ease-out" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540] via-[#0A2540]/60 to-transparent opacity-95 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white mb-4 group-hover:bg-[#1B4332] transition-colors duration-500 border border-white/20 shadow-glass">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <h3 className="font-headline font-bold text-3xl text-white mb-3 drop-shadow-md">Lab Innovation</h3>
                    <p className="font-body text-white mb-4 drop-shadow-sm max-w-[90%]">
                      Incubation et financement.
                    </p>
                    <div className="flex items-center w-fit px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white font-bold text-xs tracking-wider uppercase gap-2 group-hover:bg-[#daa520] group-hover:gap-4 transition-all duration-500 shadow-glass">
                      Explorer <MoveRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* ============================================================ */}
        {/* 6. ALLIANCE STRATÉGIQUE (ÉCOSYSTÈME & PARTENARIAT) */}
        {/* ============================================================ */}
        <section className="py-16 sm:py-24 lg:py-32 xl:py-40 px-4 sm:px-8 bg-[#0A2540] relative overflow-hidden" id="partenariat">
          
          {/* Background Glows */}
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-[#1B4332]/30 rounded-full blur-[100px] animate-blob" />
            <div className="absolute bottom-[-20%] left-[-10%] w-[800px] h-[800px] bg-[#daa520]/10 rounded-full blur-[120px] animate-slow-pulse" />
          </div>

          <div className="max-w-[90rem] mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              
              {/* Left Content: CTA */}
              <div className="space-y-8 apple-reveal">
                <div className="space-y-4">
                  <span className="text-[#daa520] font-bold tracking-[0.25em] uppercase text-xs flex items-center gap-3">
                    <span className="w-12 h-[2px] bg-[#daa520] block" />
                    Rejoignez le Mouvement
                  </span>
                  <h2 className="font-headline text-headline-xl text-white mb-4">
                    Bâtissons ensemble <br/> l'excellence territoriale.
                  </h2>
                </div>
                <p className="font-body text-lg text-white/80 max-w-lg leading-relaxed">
                  Que vous soyez citoyen, collectivité, expert ou partenaire financier, notre écosystème mutualisé offre un espace de collaboration dynamique pour décupler votre impact.
                </p>
                <div className="pt-4 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="btn-press inline-flex items-center justify-center px-8 py-4 bg-[#1B4332] hover:bg-white text-white hover:text-[#0A2540] rounded-full font-bold shadow-glow-green text-sm tracking-widest uppercase gap-3 transition-colors duration-300"
                  >
                    <span>Devenir Partenaire</span>
                    <MoveRight className="w-4 h-4 text-[#daa520]" />
                  </Link>
                </div>
              </div>

              {/* Right Content: Floating Glass Cards Grid */}
              <div className="relative">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
                  
                  {/* Column 1 (Staggered) */}
                  <div className="space-y-6 sm:mt-12">
                    {[
                      { label: "Partenaire Fondateur", icon: Landmark, delay: '0.1s' },
                      { label: "Acteur Territorial", icon: Leaf, delay: '0.3s' }
                    ].map((mode, idx) => {
                      const IconComp = mode.icon;
                      return (
                        <div key={idx} className="glass-panel-dark border-white/10 p-8 rounded-[2rem] backdrop-blur-xl bg-white/5 hover:bg-white/10 transition-colors apple-reveal hover-lift flex flex-col gap-6 group" style={{ transitionDelay: mode.delay }}>
                          <div className="w-14 h-14 rounded-2xl bg-[#1B4332]/40 border border-white/10 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                            <IconComp className="w-6 h-6 text-[#daa520]" />
                          </div>
                          <div>
                            <span className="font-headline font-bold text-xl text-white">{mode.label}</span>
                            <p className="font-body text-sm text-white/60 mt-2">Soutenez la vision à long terme.</p>
                          </div>
                        </div>
                      )
                    })}
                  </div>

                  {/* Column 2 */}
                  <div className="space-y-6">
                    {[
                      { label: "Partenaire Programme", icon: Users, delay: '0.2s' },
                      { label: "Expert Technique", icon: Lightbulb, delay: '0.4s' }
                    ].map((mode, idx) => {
                      const IconComp = mode.icon;
                      return (
                        <div key={idx} className="glass-panel-dark border-white/10 p-8 rounded-[2rem] backdrop-blur-xl bg-white/5 hover:bg-white/10 transition-colors apple-reveal hover-lift flex flex-col gap-6 group" style={{ transitionDelay: mode.delay }}>
                          <div className="w-14 h-14 rounded-2xl bg-[#1B4332]/40 border border-white/10 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                            <IconComp className="w-6 h-6 text-[#daa520]" />
                          </div>
                          <div>
                            <span className="font-headline font-bold text-xl text-white">{mode.label}</span>
                            <p className="font-body text-sm text-white/60 mt-2">Apportez votre expertise métier.</p>
                          </div>
                        </div>
                      )
                    })}
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 6. MOSAIC GALLERY PREVIEW SECTION */}
        {/* ============================================================ */}
        <MosaicGallery limit={8} />
        <div className="text-center pb-16 bg-[#f8f9fa]">
          <Link
            href="/galerie"
            className="inline-flex items-center gap-3 px-8 py-3.5 bg-[#012d1d] hover:bg-[#1b4332] text-white rounded-full font-bold text-xs uppercase tracking-wider shadow-lg hover:scale-105 transition-all"
          >
            <span>Découvrir toute la Galerie</span>
            <MoveRight className="w-4 h-4 text-[#daa520]" />
          </Link>
        </div>

      </div>
  );
}
