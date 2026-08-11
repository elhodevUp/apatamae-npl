import React, { useState, useEffect } from 'react';
import {
  ArrowRight, ChevronLeft, ChevronRight, Eye, Users,
  ShieldCheck, Lightbulb, Landmark, GraduationCap, Handshake,
  Check, Mail, MoveRight, Leaf, Sparkles, Laptop, Sprout
} from 'lucide-react';
import { Link, router } from '@inertiajs/react';
import Layout from '../Layouts/Layout';
import MosaicGallery from '../components/MosaicGallery';

export default function HomePage() {
  const navigate = (path) => router.visit(path);
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      title: "Ensemble, construisons des",
      highlight: "territoires d'avenir.",
      description: "Former, informer, accompagner et mobiliser les citoyens pour une gouvernance responsable et un développement local inclusif et durable au Sénégal.",
      image: "/images/high_quality_artistic_photography_of_senegalese_nature_and_local_citizens_screen.png",
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
      image: "/images/professional_photography_of_a_modern_classroom_in_senegal_with_young_girls_and_screen.png",
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
      image: "/images/professional_high_quality_architectural_photography_of_a_modern_eco_friendly_screen.png",
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
    }, 5500);
    return () => clearInterval(interval);
  }, [heroSlides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  return (
    <div className="bg-[#f8f9fa] text-[#0A2540] selection:bg-[#1B4332]/20 overflow-x-hidden">

        {/* ============================================================ */}
        {/* 1. HERO SLIDER SECTION WITH ANIMATED SLIDE CROSS-FADE */}
        {/* ============================================================ */}
        <section className="relative min-h-screen pt-28 pb-16 px-4 sm:px-8 overflow-hidden flex items-center bg-[#f8f9fa]">

          {/* Background Glow Blobs */}
          <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
            <div className="absolute top-[-10%] right-[-5%] w-[700px] h-[700px] bg-[#1B4332]/10 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-[5%] left-[-10%] w-[800px] h-[800px] bg-[#0A2540]/10 rounded-full blur-[120px]" />
          </div>

          <div className="relative w-full max-w-7xl mx-auto min-h-[600px] flex flex-col justify-center">

            {/* Active Slide Layout */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">

              {/* Left Content Column */}
              <div className="md:col-span-7 space-y-6 text-left relative min-h-[320px]">
                {heroSlides.map((slide, i) => (
                  <div
                    key={i}
                    className={`transition-all duration-700 ${currentSlide === i
                        ? 'opacity-100 translate-y-0 relative z-10'
                        : 'opacity-0 translate-y-4 absolute inset-0 pointer-events-none z-0'
                      }`}
                  >
                    <span className="inline-block px-4 py-1.5 bg-[#1B4332]/10 border border-[#1B4332]/20 text-[#1B4332] rounded-full text-xs font-bold uppercase tracking-widest mb-4">
                      {slide.tag}
                    </span>

                    <h1 className="font-headline font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#0A2540] leading-tight mb-4">
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
                        <ArrowRight className="w-4 h-4 text-[#D97706]" />
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
              <div className="md:col-span-5 relative min-h-[420px] sm:min-h-[480px]">

                <div className="relative rounded-[40px] overflow-hidden shadow-2xl border-4 border-white/80 h-[400px] sm:h-[480px]">
                  {heroSlides.map((slide, i) => (
                    <div
                      key={i}
                      className={`absolute inset-0 transition-opacity duration-1000 ${currentSlide === i ? 'opacity-100 z-10' : 'opacity-0 z-0'
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

                {/* Floating Badge 1: Domaine */}
                <div className="absolute -top-5 -right-5 z-20 glass-panel p-4 rounded-2xl shadow-xl flex items-center gap-3 bg-white/90 backdrop-blur-md border border-white/80 transition-all duration-500">
                  <div className="w-10 h-10 rounded-full bg-[#1B4332]/10 flex items-center justify-center text-[#1B4332]">
                    {React.createElement(heroSlides[currentSlide].iconDomain, { className: "w-5 h-5" })}
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-[#1B4332]/70 uppercase tracking-widest">Domaine</p>
                    <p className="text-xs font-bold text-[#0A2540]">{heroSlides[currentSlide].badgeDomain}</p>
                  </div>
                </div>

                {/* Floating Badge 2: Objectif */}
                <div className="absolute -bottom-5 -left-5 z-20 glass-panel p-4 rounded-2xl shadow-xl flex items-center gap-3 bg-white/90 backdrop-blur-md border border-white/80 transition-all duration-500">
                  <div className="w-10 h-10 rounded-full bg-[#D97706]/10 flex items-center justify-center text-[#D97706]">
                    {React.createElement(heroSlides[currentSlide].iconObjective, { className: "w-5 h-5" })}
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-[#D97706]/70 uppercase tracking-widest">Objectif</p>
                    <p className="text-xs font-bold text-[#0A2540]">{heroSlides[currentSlide].badgeObjective}</p>
                  </div>
                </div>

              </div>

            </div>

            {/* Slider Controls */}
            <div className="mt-12 flex justify-center">
              <div className="glass-panel px-6 py-2.5 rounded-full bg-white/90 backdrop-blur-md border border-white/80 shadow-md flex items-center gap-6 z-20">
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
        </section>

        {/* ============================================================ */}
        {/* 2. QUI SOMMES-NOUS / VISION SECTION */}
        {/* ============================================================ */}
        <section className="py-20 px-4 sm:px-8 bg-white/50 border-t border-[#c1c8c2]/30" id="vision">
          <div className="max-w-7xl mx-auto space-y-16">

            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-[#1B4332] font-bold tracking-[0.2em] uppercase text-xs block">Notre Mission</span>
              <h2 className="font-headline text-3xl sm:text-4xl font-extrabold text-[#0A2540]">
                Une Ambition au Cœur des Territoires
              </h2>
              <div className="w-24 h-1.5 bg-[#1B4332] mx-auto rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">

              {/* Vision Card */}
              <div className="md:col-span-7 glass-panel p-8 sm:p-12 rounded-[40px] border border-white/80 bg-white/90 shadow-xl flex flex-col justify-between group hover:-translate-y-2 transition-all duration-500 space-y-6">
                <div className="space-y-6">
                  <div className="w-16 h-16 rounded-2xl bg-[#1B4332]/10 flex items-center justify-center text-[#1B4332] group-hover:bg-[#1B4332] group-hover:text-white transition-colors duration-500">
                    <Eye className="w-8 h-8" />
                  </div>
                  <h3 className="font-headline text-2xl font-bold text-[#0A2540]">Notre Vision</h3>
                  <p className="font-body text-base text-[#414844] leading-relaxed">
                    "Faire émerger des territoires mieux gouvernés, inclusifs, innovants et capables de porter leur propre développement."
                    Nous croyons au potentiel de chaque citoyen pour transformer son cadre de vie.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2.5 pt-4">
                  <span className="px-4 py-1.5 bg-[#1B4332]/10 text-[#1B4332] rounded-full font-bold text-xs">#DéveloppementLocal</span>
                  <span className="px-4 py-1.5 bg-[#0A2540]/10 text-[#0A2540] rounded-full font-bold text-xs">#Inclusion</span>
                  <span className="px-4 py-1.5 bg-gray-200 text-gray-700 rounded-full font-bold text-xs">#Innovation</span>
                </div>
              </div>

              {/* Values Card */}
              <div className="md:col-span-5 glass-panel p-8 sm:p-12 rounded-[40px] border border-white/80 bg-white/90 shadow-xl flex flex-col justify-between hover:-translate-y-2 transition-all duration-500 space-y-6">
                <h3 className="font-headline text-2xl font-bold text-[#0A2540]">Nos Valeurs</h3>
                <div className="space-y-6">

                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-2xl bg-white border border-[#1B4332]/20 flex items-center justify-center text-[#1B4332] group-hover:bg-[#1B4332] group-hover:text-white transition-all shadow-sm shrink-0">
                      <Users className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-bold text-sm text-[#0A2540]">Engagement</p>
                      <p className="text-xs text-[#414844]">Au service des communautés</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-2xl bg-white border border-[#1B4332]/20 flex items-center justify-center text-[#1B4332] group-hover:bg-[#1B4332] group-hover:text-white transition-all shadow-sm shrink-0">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-bold text-sm text-[#0A2540]">Intégrité</p>
                      <p className="text-xs text-[#414844]">Transparence et éthique</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-2xl bg-white border border-[#1B4332]/20 flex items-center justify-center text-[#1B4332] group-hover:bg-[#1B4332] group-hover:text-white transition-all shadow-sm shrink-0">
                      <Lightbulb className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-bold text-sm text-[#0A2540]">Innovation</p>
                      <p className="text-xs text-[#414844]">Solutions de demain</p>
                    </div>
                  </div>

                </div>
              </div>

            </div>

            {/* Ecosystem Section */}
            <div className="space-y-12">
              <div className="text-center max-w-2xl mx-auto space-y-3">
                <h2 className="font-headline text-3xl font-extrabold text-[#0A2540]">Notre Écosystème Mutualisé</h2>
                <p className="text-sm text-[#414844] leading-relaxed">
                  Nous rassemblons les forces vives des territoires dans un espace de collaboration dynamique pour co-construire des solutions adaptées.
                </p>
                <div className="w-24 h-1.5 bg-[#1B4332] mx-auto rounded-full" />
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { title: "Citoyens", icon: Users },
                  { title: "Collectivités", icon: Landmark },
                  { title: "Experts", icon: GraduationCap },
                  { title: "Partenaires", icon: Handshake }
                ].map((item, idx) => {
                  const IconComp = item.icon;
                  return (
                    <div
                      key={idx}
                      className="glass-panel p-8 rounded-[32px] bg-white/90 border border-white/80 text-center hover:-translate-y-2 transition-all duration-300 group cursor-pointer shadow-md"
                    >
                      <div className="w-16 h-16 rounded-2xl bg-[#1B4332]/10 flex items-center justify-center mx-auto mb-4 text-[#1B4332] group-hover:bg-[#1B4332] group-hover:text-white transition-colors duration-500">
                        <IconComp className="w-8 h-8" />
                      </div>
                      <h4 className="font-bold text-sm text-[#0A2540] uppercase tracking-wider">{item.title}</h4>
                    </div>
                  );
                })}
              </div>

              <div className="text-center">
                <button
                  onClick={() => navigate('/contact')}
                  className="px-8 py-4 bg-white border border-[#1B4332]/30 text-[#1B4332] rounded-full font-bold hover:bg-[#1B4332] hover:text-white transition-all duration-300 shadow-md text-sm"
                >
                  Accéder à l'Espace Collaboratif
                </button>
              </div>
            </div>

          </div>
        </section>

        {/* ============================================================ */}
        {/* 3. IMPACT SECTION */}
        {/* ============================================================ */}
        <section className="py-20 px-4 sm:px-8 bg-[#1B4332] text-white relative overflow-hidden" id="impact">
          <div className="max-w-7xl mx-auto space-y-12 relative z-10">

            <div className="text-center max-w-xl mx-auto space-y-3">
              <h2 className="font-headline text-3xl sm:text-4xl font-extrabold text-white">Notre Impact en Chiffres</h2>
              <div className="w-24 h-1.5 bg-white/40 mx-auto rounded-full" />
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { val: "5 000+", label: "Personnes formées" },
                { val: "100+", label: "Collectivités" },
                { val: "50+", label: "Études produites" },
                { val: "12", label: "Régions couvertes" }
              ].map((m, idx) => (
                <div key={idx} className="glass-panel bg-white/10 border-white/20 p-8 rounded-[32px] text-center space-y-2 hover:bg-white/20 transition-all">
                  <span className="font-headline font-extrabold text-3xl sm:text-5xl text-white block">{m.val}</span>
                  <p className="text-xs font-bold text-white/80 uppercase tracking-wider">{m.label}</p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ============================================================ */}
        {/* 4. GRANDS PROGRAMMES SECTION */}
        {/* ============================================================ */}
        <section className="py-20 px-4 sm:px-8 bg-[#f8f9fa]" id="programmes">
          <div className="max-w-7xl mx-auto space-y-16">

            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="text-[#1B4332] font-bold tracking-[0.2em] uppercase text-xs block">Nos Domaines d'Action</span>
              <h2 className="font-headline text-3xl sm:text-4xl font-extrabold text-[#0A2540]">Grands Programmes</h2>
              <div className="w-24 h-1.5 bg-[#1B4332] mx-auto rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

              <div className="glass-panel p-8 rounded-[40px] bg-white/90 border border-white/80 shadow-xl hover:-translate-y-2 transition-all duration-300 group space-y-6 flex flex-col justify-between">
                <div className="space-y-6">
                  <div className="bg-[#1B4332]/10 w-16 h-16 rounded-2xl flex items-center justify-center text-[#1B4332] group-hover:bg-[#1B4332] group-hover:text-white transition-colors">
                    <GraduationCap className="w-8 h-8" />
                  </div>
                  <h4 className="font-headline text-xl font-bold text-[#0A2540]">Académie Territoriale</h4>
                  <p className="text-xs text-[#414844] leading-relaxed">
                    Formation continue et renforcement de capacités pour élus locaux et cadres territoriaux sur la gouvernance moderne.
                  </p>
                </div>
                <Link href="/nos-programmes" className="inline-flex items-center text-xs font-extrabold text-[#1B4332] gap-2 hover:gap-3 transition-all">
                  <span>Voir le programme</span>
                  <MoveRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="glass-panel p-8 rounded-[40px] bg-white/90 border border-white/80 shadow-xl hover:-translate-y-2 transition-all duration-300 group space-y-6 flex flex-col justify-between">
                <div className="space-y-6">
                  <div className="bg-[#0A2540]/10 w-16 h-16 rounded-2xl flex items-center justify-center text-[#0A2540] group-hover:bg-[#0A2540] group-hover:text-white transition-colors">
                    <Leaf className="w-8 h-8" />
                  </div>
                  <h4 className="font-headline text-xl font-bold text-[#0A2540]">Green Territoires</h4>
                  <p className="text-xs text-[#414844] leading-relaxed">
                    Accompagnement à la transition écologique et énergétique des communes pour un avenir durable.
                  </p>
                </div>
                <Link href="/nos-programmes" className="inline-flex items-center text-xs font-extrabold text-[#0A2540] gap-2 hover:gap-3 transition-all">
                  <span>Découvrir l'initiative</span>
                  <MoveRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="glass-panel p-8 rounded-[40px] bg-white/90 border border-white/80 shadow-xl hover:-translate-y-2 transition-all duration-300 group space-y-6 flex flex-col justify-between">
                <div className="space-y-6">
                  <div className="bg-[#1B4332]/10 w-16 h-16 rounded-2xl flex items-center justify-center text-[#1B4332] group-hover:bg-[#1B4332] group-hover:text-white transition-colors">
                    <Sparkles className="w-8 h-8" />
                  </div>
                  <h4 className="font-headline text-xl font-bold text-[#0A2540]">Lab Innovation</h4>
                  <p className="text-xs text-[#414844] leading-relaxed">
                    Incubateur de solutions numériques et sociales pour moderniser les services publics de proximité.
                  </p>
                </div>
                <Link href="/nos-programmes" className="inline-flex items-center text-xs font-extrabold text-[#1B4332] gap-2 hover:gap-3 transition-all">
                  <span>Explorer le Lab</span>
                  <MoveRight className="w-4 h-4" />
                </Link>
              </div>

            </div>

          </div>
        </section>

        {/* ============================================================ */}
        {/* 5. PARTENARIAT SECTION */}
        {/* ============================================================ */}
        <section className="py-20 px-4 sm:px-8 bg-white/40 border-t border-[#c1c8c2]/30" id="partenariat">
          <div className="max-w-7xl mx-auto space-y-16">

            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="text-[#1B4332] font-bold tracking-[0.2em] uppercase text-xs block">Collaboration Stratégique</span>
              <h2 className="font-headline text-3xl sm:text-4xl font-extrabold text-[#0A2540]">Pourquoi devenir partenaire ?</h2>
              <div className="w-24 h-1.5 bg-[#1B4332] mx-auto rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">

              <div className="md:col-span-7 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Développement humain et territorial",
                    "Gouvernance et démocratie locale",
                    "Engagement citoyen et participation",
                    "Jeunesse et innovation sociale"
                  ].map((text, idx) => (
                    <div key={idx} className="glass-panel p-5 rounded-2xl bg-white/90 border border-white/80 shadow-sm flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#1B4332]/10 text-[#1B4332] flex items-center justify-center shrink-0">
                        <Check className="w-4 h-4" />
                      </div>
                      <span className="font-bold text-xs text-[#0A2540] leading-snug">{text}</span>
                    </div>
                  ))}
                </div>

                <div className="p-8 rounded-[32px] bg-[#012d1d] text-white shadow-2xl flex items-center gap-6 mt-6 border border-[#1B4332]">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center shrink-0 border border-white/20">
                    <Handshake className="w-7 h-7 text-[#D97706]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-white">Impact Collectif</h4>
                    <p className="text-xs text-white/90 leading-relaxed">Ensemble, nous créons plus de valeur et d'impact pour les territoires.</p>
                  </div>
                </div>
              </div>

              <div className="md:col-span-5 relative rounded-[32px] overflow-hidden shadow-2xl h-80 sm:h-96">
                <img
                  src="/images/professional_high_quality_photography_of_a_senegalese_community_gathering_soft_screen.png"
                  alt="Partenariat communautaire"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#0A2540]/20" />
              </div>

            </div>

          </div>
        </section>

        {/* ============================================================ */}
        {/* 6. FORMES DE PARTENARIAT */}
        {/* ============================================================ */}
        <section className="py-20 px-4 sm:px-8 bg-[#f8f9fa]" id="formes-partenariat">
          <div className="max-w-7xl mx-auto space-y-16">

            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="text-[#1B4332] font-bold tracking-[0.2em] uppercase text-xs block">Modalités d'Engagement</span>
              <h2 className="font-headline text-3xl sm:text-4xl font-extrabold text-[#0A2540]">Nos Formes de Partenariat</h2>
              <div className="w-24 h-1.5 bg-[#1B4332] mx-auto rounded-full" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

              <div className="p-8 bg-white border border-[#1B4332]/10 rounded-[32px] shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 space-y-4">
                <div className="w-14 h-14 bg-[#0A2540] text-white rounded-full flex items-center justify-center shadow-md">
                  <Landmark className="w-6 h-6" />
                </div>
                <h5 className="font-bold text-[#0A2540] text-sm uppercase tracking-wide">PARTENAIRE FONDATEUR</h5>
                <p className="text-xs text-[#414844] leading-relaxed">
                  À partir de 50 millions FCFA. Soutien stratégique au lancement de l'Institut et aux programmes prioritaires.
                </p>
              </div>

              <div className="p-8 bg-white border border-[#1B4332]/10 rounded-[32px] shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 space-y-4">
                <div className="w-14 h-14 bg-[#1B4332] text-white rounded-full flex items-center justify-center shadow-md">
                  <Users className="w-6 h-6" />
                </div>
                <h5 className="font-bold text-[#0A2540] text-sm uppercase tracking-wide">PARTENAIRE PROGRAMME</h5>
                <p className="text-xs text-[#414844] leading-relaxed">
                  Entre 10 et 50 millions FCFA. Soutien à un ou plusieurs programmes spécifiques.
                </p>
              </div>

              <div className="p-8 bg-white border border-[#1B4332]/10 rounded-[32px] shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 space-y-4">
                <div className="w-14 h-14 bg-[#D97706] text-white rounded-full flex items-center justify-center shadow-md">
                  <Lightbulb className="w-6 h-6" />
                </div>
                <h5 className="font-bold text-[#0A2540] text-sm uppercase tracking-wide">PARTENAIRE TECHNIQUE</h5>
                <p className="text-xs text-[#414844] leading-relaxed">
                  Expertise, formation, accompagnement méthodologique et mise à disposition de compétences.
                </p>
              </div>

              <div className="p-8 bg-white border border-[#1B4332]/10 rounded-[32px] shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 space-y-4">
                <div className="w-14 h-14 bg-[#0A2540] text-white rounded-full flex items-center justify-center shadow-md">
                  <Leaf className="w-6 h-6" />
                </div>
                <h5 className="font-bold text-[#0A2540] text-sm uppercase tracking-wide">PARTENAIRE TERRITORIAL</h5>
                <p className="text-xs text-[#414844] leading-relaxed">
                  Collectivités, organisations locales : participation aux programmes et mobilisation des bénéficiaires.
                </p>
              </div>

            </div>

            <div className="text-center pt-4">
              <Link
                href="/contact"
                className="px-10 py-4 bg-[#1B4332] hover:bg-[#1B4332]/90 text-white rounded-full font-bold text-sm shadow-xl hover:scale-105 transition-all inline-flex items-center gap-3"
              >
                <Mail className="w-4 h-4 text-[#D97706]" />
                <span>Devenir partenaire</span>
              </Link>
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
