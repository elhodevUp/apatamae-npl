import React, { useState } from 'react';
import { PROGRAM_PILLARS } from '../data/apatamData';
import { Sprout, GraduationCap, Scale, Building2, ArrowRight, CheckCircle, Sparkles } from 'lucide-react';

const iconMap = {
  Sprout: Sprout,
  GraduationCap: GraduationCap,
  Scale: Scale,
  Building2: Building2
};

export default function ProgramsSection({ onSelectProgram }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Environnement', 'Éducation', 'Institutions', 'Développement Local'];

  const filteredPillars = selectedCategory === 'All'
    ? PROGRAM_PILLARS
    : PROGRAM_PILLARS.filter(p => p.category === selectedCategory);

  return (
    <section id="programs" className="py-24 bg-[#f8f9fa] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#396093]/10 text-[#396093] text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#daa520]" />
            <span>Nos Programmes Stratégiques</span>
          </div>
          <h2 className="font-headline text-3xl sm:text-4xl font-extrabold text-[#012d1d] tracking-tight">
            Quatre Piliers d'Intervention pour un Impact Durable
          </h2>
          <p className="mt-4 text-[#414844] text-base">
            Chaque programme est conçu pour être modulaire, reproductible et directement mesurable sur le terrain.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
                selectedCategory === cat
                  ? 'bg-[#012d1d] text-white shadow-md'
                  : 'bg-[#edeeef] text-[#414844] hover:bg-white hover:shadow-sm'
              }`}
            >
              {cat === 'All' ? 'Tous les Piliers' : cat}
            </button>
          ))}
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredPillars.map((program) => {
            const IconComp = iconMap[program.iconName] || Sprout;
            return (
              <div
                key={program.id}
                className="glass-panel p-8 rounded-3xl border border-white/80 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative group"
              >
                <div>
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#012d1d] to-[#1b4332] text-[#daa520] flex items-center justify-center shadow-md">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-[#a0c6ff]/30 text-[#396093] text-xs font-bold tracking-wider">
                      {program.badge}
                    </span>
                  </div>

                  <h3 className="font-headline text-2xl font-bold text-[#012d1d] mb-1">
                    {program.title}
                  </h3>
                  <p className="text-xs font-bold text-[#396093] uppercase tracking-wider mb-4">
                    {program.tagline}
                  </p>

                  <p className="text-sm text-[#414844] leading-relaxed mb-6">
                    {program.description}
                  </p>

                  {/* Highlights List */}
                  <div className="space-y-2 mb-6">
                    {program.highlights.map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-[#012d1d]">
                        <CheckCircle className="w-4 h-4 text-[#1b4332] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Action & Stat */}
                <div className="pt-6 border-t border-[#c1c8c2]/40 flex items-center justify-between mt-4">
                  <span className="text-xs font-semibold text-[#717973] bg-[#edeeef] px-3 py-1 rounded-lg">
                    {program.stats}
                  </span>
                  <button
                    onClick={() => onSelectProgram(program)}
                    className="flex items-center gap-2 text-xs font-bold text-[#012d1d] hover:text-[#396093] transition-colors group-hover:translate-x-1 transition-transform"
                  >
                    <span>En savoir plus</span>
                    <ArrowRight className="w-4 h-4 text-[#daa520]" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
