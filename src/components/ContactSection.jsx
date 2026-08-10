import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    department: 'Partenariats & Institutions',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        department: 'Partenariats & Institutions',
        subject: '',
        message: ''
      });
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-[#edeeef]/40 to-[#f8f9fa] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#012d1d]/10 text-[#012d1d] text-xs font-bold uppercase tracking-wider mb-4">
            <span>Contact & Secrétariat</span>
          </div>
          <h2 className="font-headline text-3xl sm:text-4xl font-extrabold text-[#012d1d] tracking-tight">
            Échangez avec l'Équipe APATAM@E
          </h2>
          <p className="mt-4 text-[#414844] text-base">
            Notre secrétariat exécutif est disponible pour répondre à vos questions, propositions de partenariat ou demandes d'intervention.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Info Panel */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel p-8 rounded-3xl border border-white/80 space-y-6">
              <h3 className="font-headline text-2xl font-bold text-[#012d1d]">
                Siège Exécutif
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#012d1d] text-white flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#daa520]" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#012d1d] block uppercase tracking-wider">Adresses Bureaux</span>
                    <p className="text-sm text-[#414844] mt-0.5 leading-relaxed">
                      <strong>Thiès :</strong> ZAC NORD Thiès Nº2688 (Rond Point Mosquée)<br />
                      <strong>Dakar :</strong> Cité Promocap nº158
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#012d1d] text-white flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-[#daa520]" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#012d1d] block uppercase tracking-wider">Email Officiel</span>
                    <p className="text-sm text-[#396093] font-semibold mt-0.5">
                      contact@apatame.org
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#012d1d] text-white flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-[#daa520]" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#012d1d] block uppercase tracking-wider">Téléphones</span>
                    <p className="text-sm text-[#414844] mt-0.5">
                      +221 71 055 31 31 / +221 77 608 07 69
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#012d1d] text-white flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-[#daa520]" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#012d1d] block uppercase tracking-wider">Heures d'Ouverture</span>
                    <p className="text-sm text-[#414844] mt-0.5">
                      Lundi — Vendredi : 08h00 - 17h00 (GMT)
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#c1ecd4]/40 border border-[#1b4332]/20 text-xs text-[#012d1d]">
                <strong>Antennes Régionales :</strong> Saint-Louis, Kaolack, Ziguinchor, Podor et Tambacounda.
              </div>
            </div>
          </div>

          {/* Right Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/80 shadow-xl">
              
              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-[#1b4332] text-white mx-auto flex items-center justify-center shadow-lg">
                    <CheckCircle2 className="w-10 h-10 text-[#daa520]" />
                  </div>
                  <h3 className="font-headline text-2xl font-bold text-[#012d1d]">
                    Message Transmis avec Succès !
                  </h3>
                  <p className="text-sm text-[#414844] max-w-md mx-auto">
                    Merci pour votre intérêt envers APATAM@E. Notre secrétariat exécutif traitera votre demande dans un délai de 24 à 48 heures.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="font-headline text-2xl font-bold text-[#012d1d] mb-4">
                    Formulaire de Contact
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-[#012d1d] uppercase tracking-wider mb-2">
                        Nom Complet *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Dr. Mariama Diallo"
                        className="input w-full bg-white/80 border-[#c1c8c2] focus:border-[#012d1d] focus:outline-none rounded-xl text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#012d1d] uppercase tracking-wider mb-2">
                        Adresse Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="m.diallo@institution.org"
                        className="input w-full bg-white/80 border-[#c1c8c2] focus:border-[#012d1d] focus:outline-none rounded-xl text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-[#012d1d] uppercase tracking-wider mb-2">
                        Département Concerné
                      </label>
                      <select
                        value={formData.department}
                        onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                        className="select w-full bg-white/80 border-[#c1c8c2] focus:border-[#012d1d] focus:outline-none rounded-xl text-sm"
                      >
                        <option>Partenariats & Institutions</option>
                        <option>Programme Agriculture & Climat</option>
                        <option>Programme Équité STEM</option>
                        <option>Gouvernance & Recherche-Action</option>
                        <option>Presse & Communication</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#012d1d] uppercase tracking-wider mb-2">
                        Sujet *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="Proposition de collaboration..."
                        className="input w-full bg-white/80 border-[#c1c8c2] focus:border-[#012d1d] focus:outline-none rounded-xl text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#012d1d] uppercase tracking-wider mb-2">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Précisez votre demande ou projet..."
                      className="textarea w-full bg-white/80 border-[#c1c8c2] focus:border-[#012d1d] focus:outline-none rounded-xl text-sm"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full btn bg-[#012d1d] hover:bg-[#1b4332] text-white border-none rounded-xl py-3 font-headline font-bold text-sm tracking-wide gap-2 shadow-lg"
                  >
                    <span>Envoyer la Demande</span>
                    <Send className="w-4 h-4 text-[#daa520]" />
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
