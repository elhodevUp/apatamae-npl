import React from 'react';
import { 
  Building2, Globe2, GraduationCap, Handshake, 
  CheckCircle2, ArrowRight, ShieldCheck, Mail 
} from 'lucide-react';
import { Link } from '@inertiajs/react';
import Layout from '../Layouts/Layout';

export default function PartnersPage() {
  const categories = [
    {
      title: "Ministères & Agences Nationales",
      desc: "Ancrage avec les politiques publiques de transition écologique du Sénégal.",
      icon: Building2,
      partners: [
        "Ministère de l'Environnement et du Développement Durable",
        "Ministère de l'Enseignement Supérieur et de la Recherche",
        "Agence Nationale des Énergies Renouvelables (ANER)",
        "Agence de la Reforestation et de la Grande Muraille Verte"
      ]
    },
    {
      title: "Bailleurs & Partenaires Internationaux",
      desc: "Coopération multilatérale pour le financement des infrastructures vertes.",
      icon: Globe2,
      partners: [
        "Union Européenne (Programme Climat & Jeunesse)",
        "PNUD Sénégal (Fonds pour l'Environnement Mondial)",
        "Coopération Allemande (GIZ)",
        "Fondation pour la Recherche Scientifique Africaine"
      ]
    },
    {
      title: "Universités & Pôles de Recherche",
      desc: "Validation scientifique des protocoles d'action-recherche et bourses.",
      icon: GraduationCap,
      partners: [
        "Université Cheikh Anta Diop (UCAD - Dakar)",
        "Université Gaston Berger (UGB - Saint-Louis)",
        "Institut Sénégalais de Recherches Agricoles (ISRA)",
        "Institut de Technologie Alimentaire (ITA)"
      ]
    }
  ];

  return (
    <div className="pt-[72px] pb-20 bg-[#f8f9fa] text-[#0A2540] selection:bg-[#1B4332]/20 overflow-hidden">
      
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-[#0A2540] via-[#0A2540]/95 to-[#1B4332] text-white pt-16 pb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#daa520]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative z-10">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#daa520] text-xs font-bold uppercase tracking-wider shadow-glass">
            <Handshake className="w-4 h-4" />
            <span>Coopération & Synergies Institutionnelles</span>
          </span>
          <h1 className="font-headline font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight">
            Partenaires <br /> & Alliances
          </h1>
          <p className="text-base sm:text-lg text-white/90 max-w-2xl font-body leading-relaxed drop-shadow-sm">
            Ensemble avec l'État du Sénégal, les institutions multilatérales et la recherche académique pour démultiplier l'impact sur les territoires.
          </p>
        </div>
      </section>

      {/* Partners Categories List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-12 relative z-20">
        {categories.map((cat, idx) => {
          const IconComp = cat.icon;
          return (
            <div key={idx} className="glass-panel p-8 sm:p-12 rounded-[2.5rem] bg-white border border-[#0A2540]/5 shadow-[0_20px_40px_rgba(10,37,64,0.06)] hover-lift transition-all space-y-8">
              <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-8">
                <div className="w-16 h-16 rounded-[1.25rem] bg-[#0A2540] text-[#daa520] flex items-center justify-center shadow-md shrink-0">
                  <IconComp className="w-8 h-8" />
                </div>
                <div>
                  <h2 className="font-headline font-extrabold text-2xl text-[#0A2540] mb-2">{cat.title}</h2>
                  <p className="text-sm text-[#414844] font-body">{cat.desc}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-4 border-t border-[#0A2540]/10">
                {cat.partners.map((p, pIdx) => (
                  <div key={pIdx} className="bg-[#f8f9fa] p-5 rounded-2xl border border-[#c1c8c2]/50 flex items-start gap-4 hover:border-[#1B4332] hover:bg-white transition-colors group">
                    <CheckCircle2 className="w-5 h-5 text-[#1B4332] shrink-0 mt-0.5 group-hover:text-[#daa520] transition-colors" />
                    <span className="text-xs font-bold text-[#0A2540] leading-snug uppercase tracking-wide">{p}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </section>

      {/* Partnership Charter / Join */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-[#1B4332] text-white p-10 sm:p-14 rounded-[2.5rem] shadow-[0_30px_60px_rgba(27,67,50,0.3)] flex flex-col md:flex-row items-center justify-between gap-10 relative overflow-hidden hover-lift transition-all">
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
          <div className="space-y-4 relative z-10 max-w-2xl">
            <span className="text-xs font-bold text-[#daa520] uppercase tracking-widest block drop-shadow-sm">Rejoindre le Réseau</span>
            <h3 className="font-headline font-extrabold text-3xl sm:text-4xl text-white drop-shadow-md">Devenir Institution Partenaire</h3>
            <p className="text-sm sm:text-base text-white/90 font-body leading-relaxed drop-shadow-sm">
              Vous êtes une fondation, une université ou un bailleur de fonds ? Soumettez votre proposition d'alliance stratégique ou de co-financement.
            </p>
          </div>

          <Link
            href="/contact"
            className="px-8 py-4 bg-[#daa520] hover:bg-[#b45309] text-white font-bold rounded-full text-sm flex items-center gap-3 shrink-0 shadow-xl hover:-translate-y-1 transition-all relative z-10 uppercase tracking-widest"
          >
            <Mail className="w-5 h-5" />
            <span>Contacter le Pôle Partenariats</span>
          </Link>
        </div>
      </section>

    </div>
  );
}
