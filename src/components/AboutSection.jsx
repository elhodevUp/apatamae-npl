import React from 'react';
import { GOVERNANCE_VALUES, LEADERSHIP_TEAM } from '../data/apatamData';
import { HeartHandshake, ShieldCheck, Sparkles, BookOpenCheck, CheckCircle2 } from 'lucide-react';

const iconMap = {
  HeartHandshake: HeartHandshake,
  ShieldCheck: ShieldCheck,
  Sparkles: Sparkles,
  BookOpenCheck: BookOpenCheck
};

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-[#f8f9fa] to-[#edeeef]/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1b4332]/10 text-[#012d1d] text-xs font-bold uppercase tracking-wider mb-4">
            <span>Qui Sommes-Nous</span>
          </div>
          <h2 className="font-headline text-3xl sm:text-4xl font-extrabold text-[#012d1d] tracking-tight">
            Une Institution Dédiée à l'Autonomisation et à la Transition Écologique
          </h2>
          <p className="mt-4 text-[#414844] text-base sm:text-lg">
            Née d'une volonté d'apporter des réponses durables et concrètes, APATAM@E réinvente la gouvernance et l'action communautaire à travers une architecture institutionnelle moderne.
          </p>
        </div>

        {/* Vision & Mission Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="glass-panel p-8 rounded-3xl border border-white/80 relative overflow-hidden group hover:shadow-xl transition-all">
            <div className="w-12 h-12 rounded-2xl bg-[#012d1d] text-white flex items-center justify-center mb-6 shadow-md">
              <Sparkles className="w-6 h-6 text-[#daa520]" />
            </div>
            <h3 className="font-headline text-2xl font-bold text-[#012d1d] mb-4">
              Notre Mission
            </h3>
            <p className="text-[#414844] leading-relaxed text-sm sm:text-base mb-6">
              Co-concevoir et déployer des programmes à fort impact socio-économique en associant rigueur scientifique, technologies vertes et leadership local. Nous visons la résilience intégrale des populations rurales et péri-urbaines.
            </p>
            <ul className="space-y-3 text-xs sm:text-sm text-[#012d1d] font-medium">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#396093]" />
                <span>Accompagnement de proximité sur 14 régions</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#396093]" />
                <span>Transparence & gouvernance participative</span>
              </li>
            </ul>
          </div>

          <div className="glass-panel-dark p-8 rounded-3xl text-white relative overflow-hidden group hover:shadow-2xl transition-all">
            <div className="w-12 h-12 rounded-2xl bg-[#daa520] text-[#012d1d] flex items-center justify-center mb-6 shadow-md font-bold">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-headline text-2xl font-bold text-white mb-4">
              La Philosophie "Antigravity"
            </h3>
            <p className="text-white/80 leading-relaxed text-sm sm:text-base mb-6">
              Inspirée de la canopée du Baobab, l'approche Antigravity allège les structures pesantes au profit d'interfaces souples, de solutions décentralisées et d'un partage fluide du savoir.
            </p>
            <div className="p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 text-xs text-white/90">
              "Créer un équilibre harmonieux entre souveraineté locale et innovation d'avant-garde."
            </div>
          </div>
        </div>

        {/* Governance & Core Values */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h3 className="font-headline text-2xl font-bold text-[#012d1d]">
              Nos Valeurs Cardinaux
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {GOVERNANCE_VALUES.map((val, idx) => {
              const IconComp = iconMap[val.icon] || Sparkles;
              return (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-[#c1c8c2]/50 shadow-sm hover:shadow-md transition-all">
                  <div className="w-10 h-10 rounded-xl bg-[#edeeef] text-[#012d1d] flex items-center justify-center mb-4">
                    <IconComp className="w-5 h-5 text-[#396093]" />
                  </div>
                  <h4 className="font-headline font-bold text-base text-[#012d1d] mb-2">
                    {val.title}
                  </h4>
                  <p className="text-xs text-[#717973] leading-relaxed">
                    {val.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Leadership Team */}
        <div>
          <div className="text-center mb-12">
            <h3 className="font-headline text-2xl sm:text-3xl font-bold text-[#012d1d]">
              Organigramme & Direction
            </h3>
            <p className="text-sm text-[#717973] mt-2">
              Une équipe d'experts multidisciplinaires engagés sur le terrain.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {LEADERSHIP_TEAM.map((member, idx) => (
              <div key={idx} className="glass-panel rounded-3xl overflow-hidden border border-white/80 group hover:shadow-xl transition-all">
                <div className="h-56 overflow-hidden relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#012d1d]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h4 className="font-headline font-bold text-lg">{member.name}</h4>
                    <p className="text-xs text-[#daa520] font-medium">{member.role}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-xs text-[#414844] leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
