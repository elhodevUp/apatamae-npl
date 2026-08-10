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
    <Layout>
      <div className="pt-24 pb-20 bg-[#f8f9fa] text-[#191c1d]">
      
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-[#012d1d] via-[#1b4332] to-[#396093] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#daa520]/20 border border-[#daa520]/40 text-[#daa520] text-xs font-semibold uppercase tracking-wider">
            <Handshake className="w-3.5 h-3.5" />
            <span>Coopération & Synergies Institutionnelles</span>
          </span>
          <h1 className="font-headline font-extrabold text-3xl sm:text-5xl tracking-tight">
            Partenaires & Alliances
          </h1>
          <p className="text-sm sm:text-base text-white/80 max-w-2xl font-body">
            Ensemble avec l'État du Sénégal, les institutions multilatérales et la recherche académique pour démultiplier l'impact sur les territoires.
          </p>
        </div>
      </section>

      {/* Partners Categories List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        {categories.map((cat, idx) => {
          const IconComp = cat.icon;
          return (
            <div key={idx} className="glass-panel p-8 sm:p-10 rounded-3xl bg-white/90 border border-white/80 shadow-xl space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#012d1d] text-[#daa520] flex items-center justify-center shadow-md">
                  <IconComp className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="font-headline font-bold text-xl text-[#012d1d]">{cat.title}</h2>
                  <p className="text-xs text-[#717973]">{cat.desc}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {cat.partners.map((p, pIdx) => (
                  <div key={pIdx} className="bg-[#f8f9fa] p-4 rounded-xl border border-[#c1c8c2]/30 flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#396093] shrink-0 mt-0.5" />
                    <span className="text-xs font-bold text-[#012d1d] leading-snug">{p}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </section>

      {/* Partnership Charter / Join */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#012d1d] to-[#1b4332] text-white p-8 sm:p-12 rounded-3xl shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-8">
          <div className="space-y-3">
            <span className="text-xs font-bold text-[#daa520] uppercase tracking-widest">Rejoindre le Réseau</span>
            <h3 className="font-headline font-bold text-2xl">Devenir Institution Partenaire d'APATAM@E</h3>
            <p className="text-xs sm:text-sm text-white/80 max-w-xl">
              Vous êtes une fondation, une université ou un bailleur de fonds ? Soumettez votre proposition d'alliance stratégique ou de co-financement.
            </p>
          </div>

          <Link
            href="/contact"
            className="btn bg-[#daa520] hover:bg-[#b8860b] text-[#012d1d] font-bold border-none rounded-full px-8 text-xs flex items-center gap-2 shrink-0 shadow-lg"
          >
            <Mail className="w-4 h-4" />
            <span>Contacter le Pôle Partenariats</span>
          </Link>
        </div>
      </section>

    </div>
    </Layout>
  );
}
