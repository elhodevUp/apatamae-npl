import React from 'react';
import { PARTNERS_LIST } from '../data/apatamData';
import { Building, Shield, Globe, Handshake, ArrowUpRight } from 'lucide-react';

export default function PartnersSection({ onContactClick }) {
  return (
    <section id="partners" className="py-20 bg-[#f8f9fa] border-t border-[#c1c8c2]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#012d1d]/10 text-[#012d1d] text-xs font-bold uppercase tracking-wider mb-4">
            <Handshake className="w-3.5 h-3.5 text-[#396093]" />
            <span>Alliance & Partenariats</span>
          </div>
          <h2 className="font-headline text-3xl sm:text-4xl font-extrabold text-[#012d1d] tracking-tight">
            Ils Nous Font Confiance
          </h2>
          <p className="mt-4 text-[#414844] text-base">
            Une synergie stratégique entre institutions publiques, organismes internationaux, laboratoires de recherche et collectivités territoriales.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {PARTNERS_LIST.map((partner, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl border border-[#c1c8c2]/60 shadow-sm hover:shadow-md transition-all flex items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#edeeef] text-[#012d1d] flex items-center justify-center font-bold text-lg group-hover:bg-[#012d1d] group-hover:text-white transition-colors shrink-0">
                <Building className="w-6 h-6 text-[#396093] group-hover:text-[#daa520]" />
              </div>
              <div>
                <h4 className="font-headline font-bold text-sm text-[#012d1d] group-hover:text-[#396093] transition-colors">
                  {partner.name}
                </h4>
                <span className="text-xs font-medium text-[#717973]">
                  {partner.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Collaboration Banner */}
        <div className="glass-panel-dark p-8 sm:p-12 rounded-3xl text-white flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-2xl">
          <div className="max-w-xl">
            <span className="px-3 py-1 rounded-full bg-[#daa520] text-[#012d1d] text-xs font-bold uppercase tracking-wider mb-4 inline-block">
              Devenir Partenaire
            </span>
            <h3 className="font-headline text-2xl sm:text-3xl font-extrabold text-white mb-3">
              Co-construisons le Développement Durable de Demain
            </h3>
            <p className="text-white/80 text-sm leading-relaxed">
              Vous êtes une institution, un bailleur ou un centre de recherche ? Rejoignez l'écosystème APATAM@E pour démultiplier l'impact sur le terrain.
            </p>
          </div>

          <button
            onClick={onContactClick}
            className="btn btn-lg bg-[#daa520] hover:bg-[#b8860b] text-[#012d1d] border-none rounded-2xl px-8 shadow-glow-ochre font-headline font-bold text-sm tracking-wide gap-2 shrink-0"
          >
            <span>Initier un Partenariat</span>
            <ArrowUpRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
}
