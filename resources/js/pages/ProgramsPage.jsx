import React, { useState } from 'react';
import { 
  ArrowRight, Building, Rocket, Sparkles, Sprout, GraduationCap, 
  Users, ShieldCheck, CheckCircle2, HeartHandshake, History, BedDouble 
} from 'lucide-react';
import { Link, router } from '@inertiajs/react';
import Layout from '../Layouts/Layout';
import ProgramModal from '../components/ProgramModal';

export default function ProgramsPage() {
  const navigate = (path) => router.visit(path);
  const [selectedProgram, setSelectedProgram] = useState(null);

  const pillars = [
    {
      id: '01',
      num: '01',
      title: "Accès à l'Éducation & Pédagogie Sensible au Genre",
      description: "Réduire les fractures éducatives par des méthodes innovantes et inclusives, favorisant l'accès des filles aux filières d'excellence et aux filières scientifiques.",
      image: "/images/professional_photography_of_a_modern_classroom_in_senegal_with_young_girls_and_screen.png",
      tags: ["#ÉducationPourTous", "#STEM", "#Inclusion"],
      badgeColor: "bg-[#a0c6ff] text-[#2a5284]",
      textColor: "text-[#396093]",
      features: [
        "Bourses d'études et kits pédagogiques",
        "Ateliers de mentorat scientifique",
        "Sensibilisation communautaire"
      ],
      budget: "1,8M €",
      region: "Saint-Louis, Kaolack, Ziguinchor",
      beneficiaries: "4 800 boursières & lycéennes"
    },
    {
      id: '02',
      num: '02',
      title: "Académie du Leadership & Engagement des Jeunes",
      description: "Former la prochaine génération de décideurs à travers des programmes de mentorat et de renforcement des capacités citoyennes et professionnelles.",
      image: "/images/inspiring_portrait_of_a_young_west_african_woman_leader_speaking_at_a_community_screen.png",
      tags: ["#LeadershipFéminin", "#Jeunesse", "#Autonomisation"],
      badgeColor: "bg-[#4e3800] text-[#ffdea0]",
      textColor: "text-[#D97706]",
      features: [
        "Incubateur de leadership territorial",
        "Parcours d'éloquence et négociation",
        "Réseau national d'alumni engagés"
      ],
      budget: "1,4M €",
      region: "Dakar, Thiès, Diourbel",
      beneficiaries: "3 200 jeunes leaders"
    },
    {
      id: '03',
      num: '03',
      title: "Résilience Agricole & Sécurité Alimentaire",
      description: "Accompagner les communautés rurales dans l'adaptation aux changements climatiques et la valorisation durable des filières agricoles locales.",
      image: "/images/cinematic_photography_of_a_sustainable_agricultural_project_in_rural_senegal_screen.png",
      tags: ["#Climat", "#AgricultureDurable", "#Terroirs"],
      badgeColor: "bg-[#1b4332] text-[#86af99]",
      textColor: "text-[#1B4332]",
      features: [
        "Irrigation solaire haute efficacité",
        "Certification bio-équitable",
        "Mutualisation des récoltes"
      ],
      budget: "3,2M €",
      region: "Podor, Matam, Bakel",
      beneficiaries: "12 500 agricultrices & agriculteurs"
    },
    {
      id: '04',
      num: '04',
      title: "Observatoire & Influence des Politiques Publiques",
      description: "Transformer les données de terrain en leviers de plaidoyer pour des politiques publiques plus justes, inclusives et plus efficaces.",
      image: "/images/a_clean_institutional_scene_of_researchers_analyzing_data_and_documents_in_a_screen.png",
      tags: ["#Plaidoyer", "#RechercheAction", "#Gouvernance"],
      badgeColor: "bg-[#001c3a] text-[#d4e3ff]",
      textColor: "text-[#396093]",
      features: [
        "Rapports annuels de gouvernance territoriale",
        "Baromètre de satisfaction citoyenne",
        "Conseils techniques aux mairies"
      ],
      budget: "2,5M €",
      region: "Échelle Nationale (14 Régions)",
      beneficiaries: "100+ Collectivités locales"
    },
    {
      id: '05',
      num: '05',
      title: "Paix, Sécurité Humaine & Cohésion Territoriale",
      description: "Prévention des conflits, médiation communautaire, renforcement du tissu social et consolidation de la sécurité citoyenne dans les zones frontalières et urbaines.",
      image: "/images/professional_high_quality_photography_of_a_senegalese_community_gathering_soft_screen.png",
      tags: ["#PaixEtSécurité", "#CohésionSociale", "#Médiation"],
      badgeColor: "bg-[#012d1d] text-[#a5d0b9]",
      textColor: "text-[#012d1d]",
      features: [
        "Comités locaux de paix et médiation",
        "Observatoire de prévention des conflits",
        "Formations des leaders locaux à la négociation"
      ],
      budget: "1,6M €",
      region: "Ziguinchor, Kédougou, Matam, Tambacounda",
      beneficiaries: "80 000 Citoyens & Communautés"
    },
    {
      id: '06',
      num: '06',
      title: "Dialogue Intergénérationnel & Transmission des Savoirs (Aînés & Jeunes)",
      description: "Sessions immersives de partage d'expériences entre les aînés dépositaires de sagesse et les jeunes générations, alliant savoirs endogènes et prospective.",
      image: "/images/high_quality_artistic_photography_of_senegalese_nature_and_local_citizens_screen.png",
      tags: ["#AînésEtJeunes", "#Transmission", "#SavoirsEndogènes"],
      badgeColor: "bg-[#4e3800] text-[#ffdea0]",
      textColor: "text-[#D97706]",
      features: [
        "Rencontres et cercles sous l'Apatam",
        "Recueil des récits de vie et savoir-faire",
        "Mentorat moral et civique réciproque"
      ],
      budget: "950K €",
      region: "Thiès, Saint-Louis, Fatick, Kolda",
      beneficiaries: "5 500 Aînés et Jeunes mobilisés"
    }
  ];

  return (
    <Layout>
      <div className="pt-28 pb-20 bg-[#f8f9fa] text-[#0A2540] selection:bg-[#1B4332]/20">
      
      {/* ============================================================ */}
      {/* 1. HERO SECTION */}
      {/* ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 mb-20 relative overflow-visible">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          <div className="z-10 space-y-6">
            <span className="text-[#396093] font-bold tracking-[0.2em] uppercase text-xs block">
              Impact & Transformation
            </span>
            
            <h1 className="font-headline font-extrabold text-4xl sm:text-5xl text-[#012d1d] leading-tight">
              Nos Programmes & <br />
              <span className="text-[#1B4332]">Axes d'Intervention</span>
            </h1>
            
            <p className="font-body text-base sm:text-lg text-[#414844] max-w-xl leading-relaxed">
              Nous déployons des solutions systémiques pour relever les défis de l'inclusion, du leadership, de la paix et sécurité, et de la transmission intergénérationnelle au cœur des territoires.
            </p>

            <div className="flex items-center gap-4 pt-2">
              <Link
                href="/contact"
                className="px-8 py-4 bg-[#012d1d] hover:bg-[#1B4332] text-white rounded-full font-bold text-sm shadow-xl hover:-translate-y-1 transition-all"
              >
                Rejoindre une initiative
              </Link>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="relative w-full max-w-lg rounded-[40px] overflow-hidden shadow-2xl border-4 border-white/80 animate-float">
              <img
                src="/images/a_dynamic_floating_3d_composition_of_4_interconnected_glowing_spheres_or_screen.png"
                alt="3D Strategic Molecule Visualization"
                className="w-full h-auto object-cover drop-shadow-2xl"
              />
            </div>
            <div className="absolute -top-10 -right-10 w-72 h-72 bg-[#1B4332]/10 rounded-full blur-3xl -z-10" />
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. PILLARS GRID */}
      {/* ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {pillars.map((pillar) => (
            <div
              key={pillar.id}
              className="glass-panel p-6 sm:p-8 rounded-[36px] bg-white/90 border border-white/80 shadow-xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 group flex flex-col justify-between"
            >
              <div>
                {/* Image Container with Badge */}
                <div className="relative h-64 sm:h-72 mb-6 rounded-[28px] overflow-hidden shadow-md">
                  <img
                    src={pillar.image}
                    alt={pillar.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/60 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-4 left-4">
                    <span className={`px-4 py-1.5 rounded-full font-bold text-xs shadow-md ${pillar.badgeColor}`}>
                      {pillar.num}
                    </span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {pillar.tags.map((tag, tIdx) => (
                    <span key={tIdx} className={`text-xs font-bold ${pillar.textColor}`}>
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title & Description */}
                <h3 className="font-headline font-bold text-2xl text-[#012d1d] mb-3 leading-snug">
                  {pillar.title}
                </h3>
                <p className="font-body text-sm text-[#414844] mb-6 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              {/* Action */}
              <div className="pt-4 border-t border-[#c1c8c2]/30 flex items-center justify-between">
                <button
                  onClick={() => setSelectedProgram(pillar)}
                  className={`flex items-center gap-2 font-bold text-sm ${pillar.textColor} hover:gap-3 transition-all`}
                >
                  <span>En savoir plus</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => navigate('/contact')}
                  className="px-4 py-2 bg-white border border-[#c1c8c2] hover:border-[#1B4332] text-[#012d1d] rounded-full text-xs font-semibold shadow-sm transition-all"
                >
                  Candidater
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. SPECIAL MODULE: ESPACES MUTUALISÉS & HÉBERGEMENTS */}
      {/* ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 mb-20">
        <div className="glass-panel p-8 sm:p-12 rounded-[40px] bg-gradient-to-r from-white via-white/90 to-[#f8f9fa] border-2 border-white/80 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          
          <div className="relative z-10 max-w-2xl space-y-3">
            <span className="text-[#1B4332] font-bold text-xs uppercase tracking-widest block">Infrastructures & Accueil</span>
            <h2 className="font-headline font-extrabold text-3xl text-[#012d1d]">Espaces Mutualisés & Chambres d'Hôtes</h2>
            <p className="font-body text-sm sm:text-base text-[#414844] leading-relaxed">
              Besoin d'un cadre professionnel pour vos formations, séminaires, assemblées générales ou séjours de travail ? Nos salles équipées à Thiès et nos chambres d'hôtes à Thiès et Saly sont à votre disposition.
            </p>
          </div>

          <div className="relative z-10 shrink-0 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => navigate('/contact')}
              className="px-7 py-3.5 bg-[#012d1d] hover:bg-[#1B4332] text-white rounded-full font-bold text-xs sm:text-sm shadow-xl hover:-translate-y-1 transition-all"
            >
              Réserver une salle
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="px-7 py-3.5 bg-[#396093] hover:bg-[#1e4879] text-white rounded-full font-bold text-xs sm:text-sm shadow-xl hover:-translate-y-1 transition-all"
            >
              Chambres d'hôtes
            </button>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. CTA BANNER */}
      {/* ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 text-center py-12 relative">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="font-headline font-extrabold text-3xl sm:text-4xl text-[#012d1d]">
            Soutenez nos programmes prioritaires
          </h2>
          <p className="font-body text-base text-[#414844] leading-relaxed">
            Chaque initiative est un pas vers une transformation durable. Devenez partenaire de notre vision et contribuez à amplifier notre impact.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-10 py-4 bg-[#D97706] hover:bg-[#b45309] text-white rounded-full font-bold text-sm shadow-2xl hover:scale-105 transition-all"
          >
            <span>Devenir Partenaire</span>
            <Rocket className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Modal */}
      {selectedProgram && (
        <ProgramModal
          program={selectedProgram}
          onClose={() => setSelectedProgram(null)}
          onContact={() => navigate('/contact')}
        />
      )}

    </div>
    </Layout>
  );
}
