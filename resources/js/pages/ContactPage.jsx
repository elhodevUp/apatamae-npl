import React, { useState } from 'react';
import {
  Mail, Phone, MapPin, Clock, Send, CheckCircle2,
  Building2, BedDouble, Users, Calendar, Sparkles,
  Coffee, Wifi, ShieldCheck, ArrowRight, Home, HelpCircle
} from 'lucide-react';
import Layout from '../Layouts/Layout';

export default function ContactPage() {
  const [activeTab, setActiveTab] = useState('general'); // 'general' | 'salle' | 'chambre'

  // --- Form 1: General Contact ---
  const [generalForm, setGeneralForm] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    subject: 'general',
    message: ''
  });

  // --- Form 2: Room / Salle Mutualisée Booking ---
  const [salleForm, setSalleForm] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    activityType: 'Séminaire',
    otherActivity: '',
    headcount: '25',
    date: '',
    duration: 'Journée complète (08h - 18h)',
    needsProjector: true,
    needsCoffee: true,
    needsSound: false,
    specialNotes: ''
  });

  // --- Form 3: Chambres d'Hôtes Booking (Thiès & Saly) ---
  const [chambreForm, setChambreForm] = useState({
    name: '',
    email: '',
    phone: '',
    location: 'Thiès (ZAC Nord)',
    roomType: 'Chambre Confort Exécutive',
    checkIn: '',
    checkOut: '',
    guests: '2',
    shuttleAirport: false,
    breakfastIncluded: true,
    specialNotes: ''
  });

  const [submittedType, setSubmittedType] = useState(null);

  const handleGeneralSubmit = (e) => {
    e.preventDefault();
    setSubmittedType('general');
  };

  const handleSalleSubmit = (e) => {
    e.preventDefault();
    setSubmittedType('salle');
  };

  const handleChambreSubmit = (e) => {
    e.preventDefault();
    setSubmittedType('chambre');
  };

  return (
    <div className="pt-[72px] pb-20 bg-[#f8f9fa] text-[#0A2540] selection:bg-[#1B4332]/20">

      {/* ============================================================ */}
      {/* 1. HERO BANNER */}
      {/* ============================================================ */}
      <section className="bg-gradient-to-r from-[#0A2540] via-[#0A2540]/95 to-[#1B4332] text-white pt-16 pb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#daa520]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative z-10">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#daa520] text-xs font-bold uppercase tracking-wider shadow-glass">
            <Mail className="w-4 h-4" />
            <span>Secrétariat Exécutif, Espaces & Hébergements</span>
          </span>
          <h1 className="font-headline font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight">
            Contact & Réservations APATAM<span className="text-[#daa520]">@</span><span className="text-[#1B4332]">E</span>
          </h1>
          <p className="text-base sm:text-lg text-white/90 max-w-2xl font-body leading-relaxed drop-shadow-sm">
            Échangez avec la Présidente Adama Mbengue et notre équipe institutionnelle, ou réservez en ligne nos salles équipées et chambres d'hôtes à Thiès et Saly.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. MAIN INTERACTIVE CONTENT */}
      {/* ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* LEFT COLUMN: Official Coordinates & Address */}
          <div className="lg:col-span-5 xl:col-span-4 space-y-8">

            {/* Headquarters Card */}
            <div className="glass-panel p-8 sm:p-10 rounded-[2.5rem] bg-white border border-[#0A2540]/5 shadow-[0_20px_40px_rgba(10,37,64,0.06)] hover-lift transition-all space-y-8">
              <div>
                <span className="text-[10px] font-bold text-[#daa520] uppercase tracking-widest block">Siège National</span>
                <h2 className="font-headline font-extrabold text-2xl text-[#0A2540] mt-1">Maison de la Citoyenneté</h2>
                <p className="text-xs text-[#414844] mt-1 font-body">Présidente Fondatrice : Adama Mbengue</p>
              </div>

              <div className="space-y-5 text-sm font-body">

                <div className="flex items-start gap-4 text-[#414844] p-4 rounded-3xl bg-[#f8f9fa] border border-[#0A2540]/5 transition-colors hover:bg-white hover:border-[#1B4332]/20">
                  <MapPin className="w-6 h-6 text-[#daa520] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#0A2540] block mb-2">Adresses Officielles</span>
                    <div className="space-y-2 leading-relaxed text-xs">
                      <p>
                        <strong className="text-[#0A2540]">Bureau Thiès :</strong><br />
                        ZAC NORD Thiès Nº2688 (Rond Point Mosquée)
                      </p>
                      <p>
                        <strong className="text-[#0A2540]">Bureau Dakar :</strong><br />
                        Cité Promocap nº158
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4 text-[#414844] p-4 rounded-3xl bg-[#f8f9fa] border border-[#0A2540]/5 transition-colors hover:bg-white hover:border-[#1B4332]/20">
                  <Mail className="w-6 h-6 text-[#1B4332] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#0A2540] block mb-1">Courriels Institutionnels</span>
                    <a href="mailto:contact@apatame.com" className="text-[#1B4332] hover:text-[#daa520] transition-colors font-bold block text-xs">
                      contact@apatame.com
                    </a>
                    <a href="mailto:secretariat@apatame.org" className="text-[#414844] hover:text-[#0A2540] transition-colors block text-[11px] mt-1">
                      secretariat@apatame.org
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 text-[#414844] p-4 rounded-3xl bg-[#f8f9fa] border border-[#0A2540]/5 transition-colors hover:bg-white hover:border-[#1B4332]/20">
                  <Phone className="w-6 h-6 text-[#0A2540] shrink-0 mt-0.5" />
                  <div className="text-xs space-y-1">
                    <span className="font-bold text-[#0A2540] block mb-1 text-sm">Téléphones Officiels</span>
                    <span className="block">Contact : <a href="tel:+221339040895" className="text-[#0A2540] font-bold hover:text-[#daa520] transition-colors">33 904 08 95</a></span>
                    <span className="block">Contact : <a href="tel:+221710553131" className="text-[#0A2540] font-bold hover:text-[#daa520] transition-colors">71 055 31 31</a></span>
                    <span className="block">Contact : <a href="tel:+221776080769" className="text-[#0A2540] font-bold hover:text-[#daa520] transition-colors">77 608 07 69</a></span>
                  </div>
                </div>

                <div className="flex items-start gap-4 text-[#414844] p-4 rounded-3xl bg-[#f8f9fa] border border-[#0A2540]/5 transition-colors hover:bg-white hover:border-[#1B4332]/20">
                  <Clock className="w-6 h-6 text-[#717973] shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <span className="font-bold text-[#0A2540] block mb-1 text-sm">Disponibilité</span>
                    <span>Lundi — Vendredi : 08h00 - 18h00 (GMT)</span>
                    <span className="text-[10px] text-[#414844] block mt-1 font-bold">Accueil 7j/7 pour les chambres d'hôtes</span>
                  </div>
                </div>

                {/* Social Networks */}
                <div className="p-5 rounded-3xl bg-[#0A2540]/5 border border-[#0A2540]/10 space-y-3">
                  <span className="font-bold text-[#0A2540] text-xs block uppercase tracking-wider text-center">Réseaux Sociaux Officiels</span>
                  <div className="flex items-center justify-center gap-4">
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-[0.85rem] bg-[#0A2540] hover:bg-[#1877F2] text-white flex items-center justify-center transition-all duration-300 shadow-md hover:-translate-y-1"
                      title="Facebook"
                    >
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </a>

                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-[0.85rem] bg-[#0A2540] hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] text-white flex items-center justify-center transition-all duration-300 shadow-md hover:-translate-y-1"
                      title="Instagram"
                    >
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </a>

                    <a
                      href="https://wa.me/221710553131"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-[0.85rem] bg-[#25D366] hover:bg-[#128C7E] text-white flex items-center justify-center transition-all duration-300 shadow-md hover:-translate-y-1"
                      title="WhatsApp (+221 71 055 31 31)"
                    >
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.572-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                      </svg>
                    </a>

                    <a
                      href="https://x.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-[0.85rem] bg-[#0A2540] hover:bg-black text-white flex items-center justify-center transition-all duration-300 shadow-md hover:-translate-y-1"
                      title="X (Twitter)"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {/* Hubs & Guest Houses Info */}
            <div className="glass-panel p-8 rounded-[2.5rem] bg-gradient-to-br from-[#0A2540] to-[#1B4332] text-white space-y-4 shadow-glass hover-lift transition-all relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#daa520]/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/3" />
              <div className="flex items-center gap-3 relative z-10">
                <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center backdrop-blur-md border border-white/20">
                  <BedDouble className="w-5 h-5 text-[#daa520]" />
                </div>
                <h3 className="font-headline font-extrabold text-lg text-white drop-shadow-md">Chambres d'Hôtes & Accueil</h3>
              </div>
              <p className="text-sm text-white/90 leading-relaxed font-body relative z-10">
                APATAM@E dispose de résidences équipées et confortables à <strong>Thiès (ZAC Nord)</strong> et <strong>Saly Portudal</strong> pour vos missions, séjours d'études ou retraites professionnelles.
              </p>
            </div>

          </div>

          {/* RIGHT COLUMN: Interactive Tabs & Forms */}
          <div className="lg:col-span-7 xl:col-span-8">
            <div className="glass-panel p-6 sm:p-12 rounded-[3rem] bg-white border border-[#0A2540]/5 shadow-[0_30px_60px_rgba(10,37,64,0.08)] space-y-10 relative">

              {/* Tab Navigation */}
              <div className="flex flex-wrap md:flex-nowrap gap-2 p-2 bg-[#f8f9fa] rounded-[1.5rem] border border-[#0A2540]/5 shadow-inner">

                <button
                  onClick={() => { setActiveTab('general'); setSubmittedType(null); }}
                  className={`flex-1 py-4 px-4 rounded-[1.2rem] text-xs font-bold transition-all flex items-center justify-center gap-2 uppercase tracking-wide ${activeTab === 'general'
                    ? 'bg-[#0A2540] text-white shadow-md'
                    : 'text-[#414844] hover:bg-white hover:shadow-sm'
                    }`}
                >
                  <Mail className={`w-4 h-4 ${activeTab === 'general' ? 'text-[#daa520]' : 'text-[#1B4332]'}`} />
                  <span>Contact</span>
                </button>

                <button
                  onClick={() => { setActiveTab('salle'); setSubmittedType(null); }}
                  className={`flex-1 py-4 px-4 rounded-[1.2rem] text-xs font-bold transition-all flex items-center justify-center gap-2 uppercase tracking-wide ${activeTab === 'salle'
                    ? 'bg-[#0A2540] text-white shadow-md'
                    : 'text-[#414844] hover:bg-white hover:shadow-sm'
                    }`}
                >
                  <Building2 className={`w-4 h-4 ${activeTab === 'salle' ? 'text-[#daa520]' : 'text-[#1B4332]'}`} />
                  <span>Salle</span>
                </button>

                <button
                  onClick={() => { setActiveTab('chambre'); setSubmittedType(null); }}
                  className={`flex-1 py-4 px-4 rounded-[1.2rem] text-xs font-bold transition-all flex items-center justify-center gap-2 uppercase tracking-wide ${activeTab === 'chambre'
                    ? 'bg-[#0A2540] text-white shadow-md'
                    : 'text-[#414844] hover:bg-white hover:shadow-sm'
                    }`}
                >
                  <BedDouble className={`w-4 h-4 ${activeTab === 'chambre' ? 'text-[#daa520]' : 'text-[#1B4332]'}`} />
                  <span>Chambres</span>
                </button>

              </div>

              {/* SUCCESS STATE */}
              {submittedType ? (
                <div className="bg-[#1B4332]/5 border border-[#1B4332]/20 p-10 sm:p-14 rounded-[2.5rem] text-center space-y-6 animate-fade-in shadow-inner">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-10 h-10 text-[#1B4332]" />
                  </div>
                  <h3 className="font-headline font-extrabold text-2xl sm:text-3xl text-[#0A2540]">
                    {submittedType === 'salle'
                      ? 'Demande de Réservation de Salle Enregistrée !'
                      : submittedType === 'chambre'
                        ? 'Demande de Réservation de Chambre Transmise !'
                        : 'Message Envoyé avec Succès !'}
                  </h3>
                  <p className="text-sm sm:text-base text-[#414844] font-body max-w-lg mx-auto leading-relaxed">
                    Merci pour votre sollicitation. Notre secrétariat exécutif prend en charge votre demande <strong className="text-[#0A2540]">(Réf : APATAM-{Math.floor(1000 + Math.random() * 9000)})</strong> et vous confirmera les disponibilités sous 24h ouvrables par email ou téléphone.
                  </p>
                  <button
                    onClick={() => setSubmittedType(null)}
                    className="px-8 py-4 bg-[#0A2540] hover:bg-[#1B4332] text-white rounded-full font-bold text-xs uppercase tracking-widest shadow-xl hover:-translate-y-1 transition-all mt-4"
                  >
                    Faire une nouvelle demande
                  </button>
                </div>
              ) : (
                <>
                  {/* TAB 1: CONTACT GÉNÉRAL */}
                  {activeTab === 'general' && (
                    <form onSubmit={handleGeneralSubmit} className="space-y-6 text-sm font-body animate-fade-in">
                      <div className="border-b border-[#0A2540]/10 pb-4 mb-6">
                        <h3 className="font-headline font-extrabold text-2xl text-[#0A2540]">Formulaire Institutionnel</h3>
                        <p className="text-sm text-[#414844] mt-1">Pour vos demandes générales, propositions de partenariats ou notes de recherche.</p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="font-bold text-[#0A2540] text-xs uppercase tracking-wide">Nom complet *</label>
                          <input
                            type="text"
                            required
                            value={generalForm.name}
                            onChange={(e) => setGeneralForm({ ...generalForm, name: e.target.value })}
                            placeholder="M. Sidy Fall"
                            className="w-full px-5 py-4 bg-[#f8f9fa] border border-[#c1c8c2]/50 focus:border-[#0A2540] focus:ring-1 focus:ring-[#0A2540] rounded-2xl text-sm transition-all"
                          />
                        </div>

                        <div className="space-y-2">
                          <label className="font-bold text-[#0A2540] text-xs uppercase tracking-wide">Institution / Organisme</label>
                          <input
                            type="text"
                            value={generalForm.organization}
                            onChange={(e) => setGeneralForm({ ...generalForm, organization: e.target.value })}
                            placeholder="Mairie / Université / ONG"
                            className="w-full px-5 py-4 bg-[#f8f9fa] border border-[#c1c8c2]/50 focus:border-[#0A2540] focus:ring-1 focus:ring-[#0A2540] rounded-2xl text-sm transition-all"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="font-bold text-[#0A2540] text-xs uppercase tracking-wide">Adresse Email *</label>
                          <input
                            type="email"
                            required
                            value={generalForm.email}
                            onChange={(e) => setGeneralForm({ ...generalForm, email: e.target.value })}
                            placeholder="contact@domaine.com"
                            className="w-full px-5 py-4 bg-[#f8f9fa] border border-[#c1c8c2]/50 focus:border-[#0A2540] focus:ring-1 focus:ring-[#0A2540] rounded-2xl text-sm transition-all"
                          />
                        </div>

                        <div className="space-y-2">
                          <label className="font-bold text-[#0A2540] text-xs uppercase tracking-wide">Téléphone de contact *</label>
                          <input
                            type="tel"
                            required
                            value={generalForm.phone}
                            onChange={(e) => setGeneralForm({ ...generalForm, phone: e.target.value })}
                            placeholder="71 055 31 31"
                            className="w-full px-5 py-4 bg-[#f8f9fa] border border-[#c1c8c2]/50 focus:border-[#0A2540] focus:ring-1 focus:ring-[#0A2540] rounded-2xl text-sm transition-all"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="font-bold text-[#0A2540] text-xs uppercase tracking-wide">Objet de la démarche *</label>
                        <select
                          value={generalForm.subject}
                          onChange={(e) => setGeneralForm({ ...generalForm, subject: e.target.value })}
                          className="w-full px-5 py-4 bg-[#f8f9fa] border border-[#c1c8c2]/50 focus:border-[#0A2540] focus:ring-1 focus:ring-[#0A2540] rounded-2xl text-sm font-bold text-[#0A2540] transition-all appearance-none"
                        >
                          <option value="general">Renseignement Général</option>
                          <option value="partenariat">Partenariat & Coopération</option>
                          <option value="programmes">Candidature à un Programme</option>
                          <option value="paix_securite">Programme Paix & Sécurité</option>
                          <option value="intergenerationnel">Échanges Aînés & Jeunes</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label className="font-bold text-[#0A2540] text-xs uppercase tracking-wide">Message détaillé *</label>
                        <textarea
                          required
                          rows={5}
                          value={generalForm.message}
                          onChange={(e) => setGeneralForm({ ...generalForm, message: e.target.value })}
                          placeholder="Précisez les détails de votre message..."
                          className="w-full px-5 py-4 bg-[#f8f9fa] border border-[#c1c8c2]/50 focus:border-[#0A2540] focus:ring-1 focus:ring-[#0A2540] rounded-3xl text-sm transition-all resize-none"
                        />
                      </div>

                      <div className="pt-4">
                        <button
                          type="submit"
                          className="w-full bg-[#0A2540] hover:bg-[#1B4332] text-white font-bold rounded-full py-4 text-sm uppercase tracking-widest shadow-[0_15px_30px_rgba(10,37,64,0.2)] hover:-translate-y-1 transition-all flex items-center justify-center gap-3"
                        >
                          <span>Transmettre le Message</span>
                          <Send className="w-4 h-4 text-[#daa520]" />
                        </button>
                      </div>
                    </form>
                  )}

                  {/* TAB 2: RÉSERVATION DE SALLE ÉQUIPÉE */}
                  {activeTab === 'salle' && (
                    <form onSubmit={handleSalleSubmit} className="space-y-6 text-sm font-body animate-fade-in">
                      <div className="border-b border-[#0A2540]/10 pb-4 mb-6">
                        <div className="flex items-center justify-between">
                          <h3 className="font-headline font-extrabold text-2xl text-[#0A2540]">Espaces Mutualisés</h3>
                          <span className="px-3 py-1 bg-[#1B4332]/10 text-[#1B4332] rounded-full text-xs font-bold border border-[#1B4332]/20 shadow-sm uppercase tracking-wide">Thiès ZAC Nord</span>
                        </div>
                        <p className="text-sm text-[#414844] mt-2">Salles climatisées, sonorisées, équipées de visioconférence et modulables selon vos effectifs.</p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="font-bold text-[#0A2540] text-xs uppercase tracking-wide">Nom du responsable *</label>
                          <input
                            type="text"
                            required
                            value={salleForm.name}
                            onChange={(e) => setSalleForm({ ...salleForm, name: e.target.value })}
                            placeholder="Nom et Prénom"
                            className="w-full px-5 py-4 bg-[#f8f9fa] border border-[#c1c8c2]/50 focus:border-[#0A2540] rounded-2xl text-sm transition-all"
                          />
                        </div>

                        <div className="space-y-2">
                          <label className="font-bold text-[#0A2540] text-xs uppercase tracking-wide">Structure / Organisation</label>
                          <input
                            type="text"
                            value={salleForm.organization}
                            onChange={(e) => setSalleForm({ ...salleForm, organization: e.target.value })}
                            placeholder="Nom de votre structure"
                            className="w-full px-5 py-4 bg-[#f8f9fa] border border-[#c1c8c2]/50 focus:border-[#0A2540] rounded-2xl text-sm transition-all"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="font-bold text-[#0A2540] text-xs uppercase tracking-wide">Email de confirmation *</label>
                          <input
                            type="email"
                            required
                            value={salleForm.email}
                            onChange={(e) => setSalleForm({ ...salleForm, email: e.target.value })}
                            placeholder="email@organisation.sn"
                            className="w-full px-5 py-4 bg-[#f8f9fa] border border-[#c1c8c2]/50 focus:border-[#0A2540] rounded-2xl text-sm transition-all"
                          />
                        </div>

                        <div className="space-y-2">
                          <label className="font-bold text-[#0A2540] text-xs uppercase tracking-wide">Téléphone portable *</label>
                          <input
                            type="tel"
                            required
                            value={salleForm.phone}
                            onChange={(e) => setSalleForm({ ...salleForm, phone: e.target.value })}
                            placeholder="71 055 31 31"
                            className="w-full px-5 py-4 bg-[#f8f9fa] border border-[#c1c8c2]/50 focus:border-[#0A2540] rounded-2xl text-sm transition-all"
                          />
                        </div>
                      </div>

                      {/* Activité & Effectif */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6 rounded-[2rem] bg-[#f8f9fa] border border-[#0A2540]/5">
                        <div className="space-y-2">
                          <label className="font-bold text-[#0A2540] text-xs uppercase tracking-wide block">Type d'activité *</label>
                          <select
                            value={salleForm.activityType}
                            onChange={(e) => setSalleForm({ ...salleForm, activityType: e.target.value })}
                            className="w-full px-5 py-4 bg-white border border-[#c1c8c2]/50 focus:border-[#0A2540] rounded-2xl text-sm font-bold text-[#0A2540] transition-all appearance-none"
                          >
                            <option value="Séminaire">Séminaire</option>
                            <option value="Réunion">Réunion</option>
                            <option value="Assemblée générale">Assemblée Générale</option>
                            <option value="Formation / Atelier">Formation / Atelier</option>
                            <option value="Autre">Autres (à préciser)</option>
                          </select>
                        </div>

                        <div className="space-y-2">
                          <label className="font-bold text-[#0A2540] text-xs uppercase tracking-wide block">
                            Effectif prévu *
                          </label>
                          <div className="flex items-center gap-3 w-full bg-white border border-[#c1c8c2]/50 focus-within:border-[#0A2540] rounded-2xl px-5 transition-all">
                            <Users className="w-5 h-5 text-[#daa520]" />
                            <input
                              type="number"
                              min="1"
                              max="200"
                              required
                              value={salleForm.headcount}
                              onChange={(e) => setSalleForm({ ...salleForm, headcount: e.target.value })}
                              placeholder="ex: 35"
                              className="w-full py-4 bg-transparent border-none focus:outline-none focus:ring-0 text-sm font-bold text-[#0A2540]"
                            />
                          </div>
                        </div>

                        {salleForm.activityType === 'Autre' && (
                          <div className="sm:col-span-2 space-y-2">
                            <label className="font-bold text-[#0A2540] text-xs uppercase tracking-wide block">Précisez le type d'activité *</label>
                            <input
                              type="text"
                              required
                              value={salleForm.otherActivity}
                              onChange={(e) => setSalleForm({ ...salleForm, otherActivity: e.target.value })}
                              placeholder="ex: Conférence de presse, Hackathon..."
                              className="w-full px-5 py-4 bg-white border border-[#daa520] focus:border-[#daa520] focus:ring-1 focus:ring-[#daa520] rounded-2xl text-sm transition-all"
                            />
                          </div>
                        )}
                      </div>

                      {/* Date & Durée */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="font-bold text-[#0A2540] text-xs uppercase tracking-wide">Date souhaitée *</label>
                          <input
                            type="date"
                            required
                            value={salleForm.date}
                            onChange={(e) => setSalleForm({ ...salleForm, date: e.target.value })}
                            className="w-full px-5 py-4 bg-[#f8f9fa] border border-[#c1c8c2]/50 focus:border-[#0A2540] rounded-2xl text-sm transition-all text-[#414844]"
                          />
                        </div>

                        <div className="space-y-2">
                          <label className="font-bold text-[#0A2540] text-xs uppercase tracking-wide">Formule de durée</label>
                          <select
                            value={salleForm.duration}
                            onChange={(e) => setSalleForm({ ...salleForm, duration: e.target.value })}
                            className="w-full px-5 py-4 bg-[#f8f9fa] border border-[#c1c8c2]/50 focus:border-[#0A2540] rounded-2xl text-sm transition-all appearance-none text-[#0A2540] font-bold"
                          >
                            <option>Journée complète (08h - 18h)</option>
                            <option>Demi-journée Matin (08h - 13h)</option>
                            <option>Demi-journée Après-midi (14h - 19h)</option>
                            <option>Soirée / Événement spécial</option>
                            <option>Plusieurs jours consécutifs</option>
                          </select>
                        </div>
                      </div>

                      {/* Équipements inclus */}
                      <div className="space-y-3 pt-2">
                        <span className="font-bold text-[#0A2540] text-xs uppercase tracking-wide block">Besoins logistiques & Services :</span>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                          <label className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-[#c1c8c2]/50 cursor-pointer hover:border-[#1B4332] transition-colors shadow-sm">
                            <input
                              type="checkbox"
                              checked={salleForm.needsProjector}
                              onChange={(e) => setSalleForm({ ...salleForm, needsProjector: e.target.checked })}
                              className="w-5 h-5 rounded border-[#c1c8c2] text-[#1B4332] focus:ring-[#1B4332]"
                            />
                            <span className="font-bold text-xs text-[#0A2540]">Vidéoprojecteur</span>
                          </label>

                          <label className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-[#c1c8c2]/50 cursor-pointer hover:border-[#1B4332] transition-colors shadow-sm">
                            <input
                              type="checkbox"
                              checked={salleForm.needsCoffee}
                              onChange={(e) => setSalleForm({ ...salleForm, needsCoffee: e.target.checked })}
                              className="w-5 h-5 rounded border-[#c1c8c2] text-[#1B4332] focus:ring-[#1B4332]"
                            />
                            <span className="font-bold text-xs text-[#0A2540]">Pause-café</span>
                          </label>

                          <label className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-[#c1c8c2]/50 cursor-pointer hover:border-[#1B4332] transition-colors shadow-sm">
                            <input
                              type="checkbox"
                              checked={salleForm.needsSound}
                              onChange={(e) => setSalleForm({ ...salleForm, needsSound: e.target.checked })}
                              className="w-5 h-5 rounded border-[#c1c8c2] text-[#1B4332] focus:ring-[#1B4332]"
                            />
                            <span className="font-bold text-xs text-[#0A2540]">Sonorisation</span>
                          </label>
                        </div>
                      </div>

                      <div className="pt-4">
                        <button
                          type="submit"
                          className="w-full bg-[#0A2540] hover:bg-[#1B4332] text-white font-bold rounded-full py-4 text-sm uppercase tracking-widest shadow-[0_15px_30px_rgba(10,37,64,0.2)] hover:-translate-y-1 transition-all flex items-center justify-center gap-3"
                        >
                          <span>Réserver pour {salleForm.headcount || '...'} pers.</span>
                          <Building2 className="w-4 h-4 text-[#daa520]" />
                        </button>
                      </div>
                    </form>
                  )}

                  {/* TAB 3: RÉSERVATION DE CHAMBRES D'HÔTES (THIÈS & SALY) */}
                  {activeTab === 'chambre' && (
                    <form onSubmit={handleChambreSubmit} className="space-y-6 text-sm font-body animate-fade-in">
                      <div className="border-b border-[#0A2540]/10 pb-4 mb-6">
                        <div className="flex items-center justify-between">
                          <h3 className="font-headline font-extrabold text-2xl text-[#0A2540]">Chambres d'Hôtes</h3>
                          <span className="px-3 py-1 bg-[#daa520]/10 text-[#daa520] border border-[#daa520]/20 rounded-full text-xs font-bold uppercase tracking-wide">Thiès & Saly</span>
                        </div>
                        <p className="text-sm text-[#414844] mt-2">Cadre serein, sécurisé, haut débit Wifi et prestations personnalisées pour vos séjours professionnels ou touristiques.</p>
                      </div>

                      {/* Choix de la Destination */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div
                          onClick={() => setChambreForm({ ...chambreForm, location: 'Thiès (ZAC Nord)' })}
                          className={`p-6 rounded-[2rem] border-2 cursor-pointer transition-all ${chambreForm.location.includes('Thiès')
                            ? 'border-[#0A2540] bg-[#0A2540]/5 shadow-md'
                            : 'border-transparent bg-[#f8f9fa] opacity-70 hover:opacity-100 hover:bg-[#f8f9fa]/80'
                            }`}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-headline font-bold text-lg text-[#0A2540]">Résidence Thiès</span>
                            <Home className="w-5 h-5 text-[#0A2540]" />
                          </div>
                          <p className="text-xs text-[#414844] leading-relaxed">ZAC Nord Nº2688, calme et proximité des universités et centres de formation.</p>
                        </div>

                        <div
                          onClick={() => setChambreForm({ ...chambreForm, location: 'Saly Portudal' })}
                          className={`p-6 rounded-[2rem] border-2 cursor-pointer transition-all ${chambreForm.location.includes('Saly')
                            ? 'border-[#daa520] bg-[#daa520]/5 shadow-md'
                            : 'border-transparent bg-[#f8f9fa] opacity-70 hover:opacity-100 hover:bg-[#f8f9fa]/80'
                            }`}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-headline font-bold text-lg text-[#daa520]">Villa Hôtes Saly</span>
                            <Sparkles className="w-5 h-5 text-[#daa520]" />
                          </div>
                          <p className="text-xs text-[#414844] leading-relaxed">Petite Côte, piscine, détente et cadre inspirant pour séjours de ressourcement.</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="font-bold text-[#0A2540] text-xs uppercase tracking-wide">Nom complet du voyageur *</label>
                          <input
                            type="text"
                            required
                            value={chambreForm.name}
                            onChange={(e) => setChambreForm({ ...chambreForm, name: e.target.value })}
                            placeholder="M. ou Mme..."
                            className="w-full px-5 py-4 bg-[#f8f9fa] border border-[#c1c8c2]/50 focus:border-[#0A2540] rounded-2xl text-sm transition-all"
                          />
                        </div>

                        <div className="space-y-2">
                          <label className="font-bold text-[#0A2540] text-xs uppercase tracking-wide">Téléphone WhatsApp *</label>
                          <input
                            type="tel"
                            required
                            value={chambreForm.phone}
                            onChange={(e) => setChambreForm({ ...chambreForm, phone: e.target.value })}
                            placeholder="77 608 07 69"
                            className="w-full px-5 py-4 bg-[#f8f9fa] border border-[#c1c8c2]/50 focus:border-[#0A2540] rounded-2xl text-sm transition-all"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="font-bold text-[#0A2540] text-xs uppercase tracking-wide">Email de confirmation *</label>
                          <input
                            type="email"
                            required
                            value={chambreForm.email}
                            onChange={(e) => setChambreForm({ ...chambreForm, email: e.target.value })}
                            placeholder="contact@apatame.com"
                            className="w-full px-5 py-4 bg-[#f8f9fa] border border-[#c1c8c2]/50 focus:border-[#0A2540] rounded-2xl text-sm transition-all"
                          />
                        </div>

                        <div className="space-y-2">
                          <label className="font-bold text-[#0A2540] text-xs uppercase tracking-wide">Type d'hébergement</label>
                          <select
                            value={chambreForm.roomType}
                            onChange={(e) => setChambreForm({ ...chambreForm, roomType: e.target.value })}
                            className="w-full px-5 py-4 bg-[#f8f9fa] border border-[#c1c8c2]/50 focus:border-[#0A2540] rounded-2xl text-sm transition-all appearance-none font-bold text-[#0A2540]"
                          >
                            <option>Chambre Confort Exécutive</option>
                            <option>Suite Master Territoriale</option>
                            <option>Chambre Twin (2 lits séparés)</option>
                            <option>Privatisation Villa complète</option>
                          </select>
                        </div>
                      </div>

                      {/* Dates & Nombre de Personnes */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-6 rounded-[2rem] bg-[#f8f9fa] border border-[#0A2540]/5">
                        <div className="space-y-2">
                          <label className="font-bold text-[#0A2540] text-xs uppercase tracking-wide block">Date d'Arrivée *</label>
                          <input
                            type="date"
                            required
                            value={chambreForm.checkIn}
                            onChange={(e) => setChambreForm({ ...chambreForm, checkIn: e.target.value })}
                            className="w-full px-5 py-4 bg-white border border-[#c1c8c2]/50 focus:border-[#0A2540] rounded-2xl text-sm transition-all text-[#414844]"
                          />
                        </div>

                        <div className="space-y-2">
                          <label className="font-bold text-[#0A2540] text-xs uppercase tracking-wide block">Date de Départ *</label>
                          <input
                            type="date"
                            required
                            value={chambreForm.checkOut}
                            onChange={(e) => setChambreForm({ ...chambreForm, checkOut: e.target.value })}
                            className="w-full px-5 py-4 bg-white border border-[#c1c8c2]/50 focus:border-[#0A2540] rounded-2xl text-sm transition-all text-[#414844]"
                          />
                        </div>

                        <div className="space-y-2">
                          <label className="font-bold text-[#0A2540] text-xs uppercase tracking-wide block">Nombre de pers.</label>
                          <div className="flex items-center gap-3 w-full bg-white border border-[#c1c8c2]/50 focus-within:border-[#0A2540] rounded-2xl px-5 transition-all">
                            <Users className="w-5 h-5 text-[#daa520]" />
                            <select
                              value={chambreForm.guests}
                              onChange={(e) => setChambreForm({ ...chambreForm, guests: e.target.value })}
                              className="w-full py-4 bg-transparent border-none focus:outline-none focus:ring-0 text-sm font-bold text-[#0A2540] appearance-none"
                            >
                              <option value="1">1 personne</option>
                              <option value="2">2 personnes</option>
                              <option value="3">3 personnes</option>
                              <option value="4+">4 personnes et plus</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      {/* Services additionnels */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                        <label className="flex items-center gap-3 p-4 bg-[#f8f9fa] rounded-2xl border border-[#c1c8c2]/50 cursor-pointer hover:border-[#1B4332] transition-colors shadow-sm">
                          <input
                            type="checkbox"
                            checked={chambreForm.breakfastIncluded}
                            onChange={(e) => setChambreForm({ ...chambreForm, breakfastIncluded: e.target.checked })}
                            className="w-5 h-5 rounded border-[#c1c8c2] text-[#1B4332] focus:ring-[#1B4332]"
                          />
                          <span className="font-bold text-xs text-[#0A2540]">Petit-déjeuner local bio inclus</span>
                        </label>

                        <label className="flex items-center gap-3 p-4 bg-[#f8f9fa] rounded-2xl border border-[#c1c8c2]/50 cursor-pointer hover:border-[#1B4332] transition-colors shadow-sm">
                          <input
                            type="checkbox"
                            checked={chambreForm.shuttleAirport}
                            onChange={(e) => setChambreForm({ ...chambreForm, shuttleAirport: e.target.checked })}
                            className="w-5 h-5 rounded border-[#c1c8c2] text-[#1B4332] focus:ring-[#1B4332]"
                          />
                          <span className="font-bold text-xs text-[#0A2540]">Navette Aéroport AIBD</span>
                        </label>
                      </div>

                      <div className="space-y-2">
                        <label className="font-bold text-[#0A2540] text-xs uppercase tracking-wide">Demandes particulières ou horaires d'arrivée</label>
                        <textarea
                          rows={3}
                          value={chambreForm.specialNotes}
                          onChange={(e) => setChambreForm({ ...chambreForm, specialNotes: e.target.value })}
                          placeholder="Ex: arrivée tardive, régime alimentaire, besoin d'espace de travail..."
                          className="w-full px-5 py-4 bg-[#f8f9fa] border border-[#c1c8c2]/50 focus:border-[#0A2540] focus:ring-1 focus:ring-[#0A2540] rounded-3xl text-sm transition-all resize-none"
                        />
                      </div>

                      <div className="pt-4">
                        <button
                          type="submit"
                          className="w-full bg-[#0A2540] hover:bg-[#1B4332] text-white font-bold rounded-full py-4 text-sm uppercase tracking-widest shadow-[0_15px_30px_rgba(10,37,64,0.2)] hover:-translate-y-1 transition-all flex items-center justify-center gap-3"
                        >
                          <span>Confirmer la demande à {chambreForm.location}</span>
                          <BedDouble className="w-5 h-5 text-[#daa520]" />
                        </button>
                      </div>
                    </form>
                  )}
                </>
              )}

            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
