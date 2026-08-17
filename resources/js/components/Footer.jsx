import React from 'react';
import { Link } from '@inertiajs/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import NoiseCanvas from './NoiseCanvas';

export default function Footer() {
  return (
    <footer className="relative bg-[#f8f9fa] text-[#0A2540] pt-20 pb-10 border-t border-[#c1c8c2]/30 overflow-hidden" id="official-apatame-footer">
      
      {/* Background Noise identical to the Header */}
      <NoiseCanvas className="absolute inset-0 w-full h-full z-0 opacity-60 pointer-events-none" />
      
      {/* Background Glow Blobs for depth */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#1B4332]/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-[5%] left-[-10%] w-[600px] h-[600px] bg-[#0A2540]/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 mb-16">

          {/* Col 1: Brand & Presentation */}
          <div className="md:col-span-4 space-y-5">
            <div className="flex items-center gap-3">
              <img
                src="/logo1.png"
                alt="APATAM@E Logo"
                className="h-12 w-auto object-contain bg-white/50 p-1.5 rounded-xl border border-[#c1c8c2]/40 shadow-sm"
              />
              <div>
                <span className="font-headline font-extrabold text-xl tracking-tight block leading-none">
                  <span className="text-[#396093]">APATAM</span>
                  <span className="text-[#daa520]">@</span>
                  <span className="text-[#1B4332]">E</span>
                </span>
                <span className="font-body text-[10px] font-bold text-[#414844] uppercase tracking-wider block mt-1">
                  Institutional & Development
                </span>
              </div>
            </div>

            <p className="font-body text-sm text-[#414844] leading-relaxed max-w-sm">
              Former, accompagner et innover pour des territoires durables. Une initiative citoyenne pour la gouvernance inclusive et le développement local au Sénégal.
            </p>

            <div className="pt-2 font-body text-xs text-[#daa520] font-bold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#daa520] animate-ping" />
              <span>Thiès • Dakar • Saly • Podor • Régions</span>
            </div>

            {/* Social Media Links */}
            <div className="pt-4 space-y-3">
              <span className="font-headline text-[11px] font-bold text-[#0A2540] uppercase tracking-widest block">Suivez-nous :</span>
              <div className="flex items-center gap-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook APATAM@E"
                  className="w-10 h-10 rounded-xl bg-white border border-[#c1c8c2]/50 hover:bg-[#1877F2] hover:border-[#1877F2] hover:text-white text-[#0A2540] flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1"
                  title="Facebook"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>

                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram APATAM@E"
                  className="w-10 h-10 rounded-xl bg-white border border-[#c1c8c2]/50 hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:border-transparent hover:text-white text-[#0A2540] flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1"
                  title="Instagram"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>

                <a
                  href="https://wa.me/221710553131"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp APATAM@E"
                  className="w-10 h-10 rounded-xl bg-white border border-[#c1c8c2]/50 hover:bg-[#25D366] hover:border-[#25D366] hover:text-white text-[#0A2540] flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1"
                  title="WhatsApp (+221 71 055 31 31)"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.572-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                </a>

                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X (Twitter) APATAM@E"
                  className="w-10 h-10 rounded-xl bg-white border border-[#c1c8c2]/50 hover:bg-black hover:border-black hover:text-white text-[#0A2540] flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1"
                  title="X (Twitter)"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Direct Contact & Coordinates */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-headline font-bold text-sm uppercase tracking-widest text-[#0A2540] mb-4 border-b border-[#0A2540]/10 pb-3">
              Coordonnées
            </h4>
            <ul className="space-y-3 font-body text-sm text-[#414844]">
              <li className="flex items-start gap-3 group">
                <div className="w-8 h-8 rounded-full bg-[#1B4332]/5 flex items-center justify-center shrink-0 group-hover:bg-[#1B4332] transition-colors">
                  <MapPin className="w-4 h-4 text-[#1B4332] group-hover:text-white transition-colors" />
                </div>
                <div className="pt-1.5">
                  <span className="block"><strong>Thiès :</strong> ZAC NORD Thiès Nº2688</span>
                  <span className="block mt-1"><strong>Dakar :</strong> Cité Promocap nº158</span>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="w-8 h-8 rounded-full bg-[#daa520]/5 flex items-center justify-center shrink-0 group-hover:bg-[#daa520] transition-colors">
                  <Mail className="w-4 h-4 text-[#daa520] group-hover:text-white transition-colors" />
                </div>
                <div className="pt-1.5">
                  <a href="mailto:contact@apatame.com" className="hover:text-[#daa520] block transition-colors font-medium">
                    contact@apatame.org
                  </a>
                  <a href="mailto:secretariat@apatame.org" className="hover:text-[#daa520] block text-[13px] transition-colors mt-0.5">
                    secretariat@apatame.org
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="w-8 h-8 rounded-full bg-[#396093]/5 flex items-center justify-center shrink-0 group-hover:bg-[#396093] transition-colors">
                  <Phone className="w-4 h-4 text-[#396093] group-hover:text-white transition-colors" />
                </div>
                <div className="pt-1.5">
                  <span className="block"><a href="tel:+221710553131" className="hover:text-[#396093] font-medium transition-colors">71 055 31 31</a></span>
                  <span className="block mt-0.5"><a href="tel:+221776080769" className="hover:text-[#396093] transition-colors">77 608 07 69</a></span>
                  <span className="block mt-0.5"><a href="tel:+221339040895" className="hover:text-[#396093] transition-colors">33 904 08 95</a></span>
                </div>
              </li>
            </ul>
          </div>

          {/* Col 3: Navigation Links */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="font-headline font-bold text-sm uppercase tracking-widest text-[#0A2540] mb-4 border-b border-[#0A2540]/10 pb-3">
              Navigation
            </h4>
            <ul className="space-y-2.5 font-body text-sm font-medium text-[#414844]">
              <li><Link href="/" className="hover:text-[#1B4332] hover:translate-x-1 inline-block transition-transform">Accueil</Link></li>
              <li><Link href="/qui-sommes-nous" className="hover:text-[#1B4332] hover:translate-x-1 inline-block transition-transform">Qui Sommes-Nous</Link></li>
              <li><Link href="/nos-programmes" className="hover:text-[#1B4332] hover:translate-x-1 inline-block transition-transform">Nos Programmes</Link></li>
              <li><Link href="/impact-recits" className="hover:text-[#1B4332] hover:translate-x-1 inline-block transition-transform">Impact & Récits</Link></li>
              <li><Link href="/galerie" className="hover:text-[#1B4332] hover:translate-x-1 inline-block transition-transform">Galerie Photo</Link></li>
              <li><Link href="/partenaires" className="hover:text-[#1B4332] hover:translate-x-1 inline-block transition-transform">Partenaires</Link></li>
              <li><Link href="/contact" className="hover:text-[#1B4332] hover:translate-x-1 inline-block transition-transform">Réservations & Contact</Link></li>
            </ul>
          </div>

          {/* Col 4: Newsletter */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-headline font-bold text-sm uppercase tracking-widest text-[#0A2540] mb-4 border-b border-[#0A2540]/10 pb-3">
              Lettre d'Information
            </h4>
            <p className="font-body text-sm text-[#414844] mb-4">
              Recevez nos actualités, notes d'impact et publications territoriales.
            </p>

            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="votre.email@domaine.com"
                className="w-full bg-white border border-[#c1c8c2] focus:border-[#1B4332] focus:ring-1 focus:ring-[#1B4332] text-[#0A2540] placeholder:text-[#414844]/60 text-sm rounded-xl px-4 py-3 outline-none transition-all"
              />
              <button
                type="submit"
                className="w-full bg-[#1B4332] hover:bg-[#1B4332]/90 text-white rounded-xl text-sm font-bold px-4 py-3 flex items-center justify-center gap-2 shadow-sm transition-colors"
              >
                <span>S'inscrire</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Rights */}
        <div className="pt-8 border-t border-[#c1c8c2]/30 flex flex-col sm:flex-row items-center justify-between text-xs font-body font-medium text-[#414844] gap-4">
          <div>
            © 2026 APATAM@E Institutional. Tous droits réservés.
          </div>

          <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2">
            <Link href="/" className="hover:text-[#1B4332]">Mentions Légales</Link>
            <span className="hidden sm:inline text-[#c1c8c2]">•</span>
            <Link href="/" className="hover:text-[#1B4332]">Politique de Confidentialité</Link>
            <span className="hidden sm:inline text-[#c1c8c2]">•</span>
            <Link href="/contact" className="hover:text-[#1B4332]">Espaces & Chambres d'Hôtes</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
