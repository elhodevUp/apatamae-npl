import React, { useState } from 'react';
import { IMPACT_STORIES } from '../data/apatamData';
import { Quote, BookOpen, Sparkles, X, Award } from 'lucide-react';

export default function ImpactSection() {
  const [activeStory, setActiveStory] = useState(null);

  return (
    <section id="impact" className="py-24 bg-gradient-to-b from-[#f8f9fa] to-[#edeeef]/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#daa520]/20 text-[#332300] text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#daa520]" />
            <span>Impact & Récits de Terrain</span>
          </div>
          <h2 className="font-headline text-3xl sm:text-4xl font-extrabold text-[#012d1d] tracking-tight">
            Des Vies Transformées, des Communautés Autonomisées
          </h2>
          <p className="mt-4 text-[#414844] text-base">
            Découvrez la réalité du terrain à travers les témoignages directs des actrices et acteurs du développement rural au Sénégal.
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {IMPACT_STORIES.map((story) => (
            <div
              key={story.id}
              className="glass-panel p-8 rounded-3xl border border-white/80 flex flex-col justify-between hover:shadow-xl transition-all duration-300 relative group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-[#012d1d] text-white text-[11px] font-bold uppercase tracking-wider">
                    {story.category}
                  </span>
                  <span className="text-xs font-medium text-[#717973]">
                    {story.date}
                  </span>
                </div>

                <h3 className="font-headline text-2xl font-bold text-[#012d1d] mb-3 leading-snug">
                  {story.title}
                </h3>

                <p className="text-sm text-[#414844] leading-relaxed mb-6">
                  "{story.summary}"
                </p>

                <div className="p-4 rounded-2xl bg-white/70 border border-[#c1c8c2]/40 mb-6 flex items-start gap-3">
                  <Quote className="w-5 h-5 text-[#daa520] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-[#012d1d] block">
                      {story.author}
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#c1c8c2]/40 flex items-center justify-between">
                <span className="text-xs font-bold text-[#396093] bg-[#a0c6ff]/20 px-3 py-1 rounded-lg flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5" />
                  {story.metrics}
                </span>

                <button
                  onClick={() => setActiveStory(story)}
                  className="btn btn-xs bg-[#012d1d] text-white hover:bg-[#1b4332] rounded-full px-4 text-xs font-semibold"
                >
                  Lire le Témoignage
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Story Modal Detail */}
        {activeStory && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-fade-in">
            <div className="glass-panel w-full max-w-2xl rounded-3xl p-8 max-h-[85vh] overflow-y-auto relative border border-white/80 shadow-2xl">
              <button
                onClick={() => setActiveStory(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-[#edeeef] hover:bg-[#c1c8c2] text-[#012d1d] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="mb-4">
                <span className="px-3 py-1 rounded-full bg-[#012d1d] text-white text-xs font-bold uppercase tracking-wider">
                  {activeStory.category} — Témoignage Intégral
                </span>
              </div>

              <h3 className="font-headline text-2xl font-bold text-[#012d1d] mb-2">
                {activeStory.title}
              </h3>
              <p className="text-xs font-semibold text-[#396093] mb-6">
                Par {activeStory.author} ({activeStory.date})
              </p>

              <div className="p-5 rounded-2xl bg-[#012d1d] text-white text-sm leading-relaxed mb-6 shadow-md italic">
                "{activeStory.fullStory}"
              </div>

              <div className="p-4 rounded-xl bg-[#c1ecd4]/50 border border-[#1b4332]/20 text-xs font-bold text-[#012d1d] flex items-center justify-between">
                <span>Résultat Clé :</span>
                <span className="text-[#396093]">{activeStory.metrics}</span>
              </div>

              <div className="mt-6 text-right">
                <button
                  onClick={() => setActiveStory(null)}
                  className="btn btn-sm bg-[#012d1d] text-white rounded-full px-6"
                >
                  Fermer
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
