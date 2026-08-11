import React, { useState, useEffect } from 'react';
import { Link, usePage } from '@inertiajs/react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { url } = usePage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [url]);

  const navLinks = [
    { path: '/', label: 'Accueil' },
    { path: '/qui-sommes-nous', label: 'Qui Sommes-Nous' },
    { path: '/nos-programmes', label: 'Programmes' },
    { path: '/impact-recits', label: 'Impact & Récits' },
    { path: '/galerie', label: 'Galeries' },
    { path: '/partenaires', label: 'Partenaires' },
    { path: '/contact', label: 'Contacts' },
  ];

  const isActiveRoute = (path) => {
    if (path === '/' && url === '/') return true;
    if (path !== '/' && url.startsWith(path)) return true;
    return false;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? 'py-3 bg-white/95 backdrop-blur-xl shadow-glass border-b border-white/40'
        : 'py-5 bg-white/80 backdrop-blur-md'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Brand Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none"
          >
            <img
              src="/logo.png"
              alt="Logo APATAM@E"
              className="h-12 w-auto object-contain group-hover:scale-105 transition-transform drop-shadow-sm"
            />
            <div className="hidden sm:block">
              <span className="font-headline font-extrabold text-xl tracking-tight block leading-none">
                <span className="text-[#396093]">APATAM</span>
                <span className="text-[#daa520]">@</span>
                <span className="text-[#012d1d]">E</span>
              </span>
              <span className="text-[10px] font-semibold text-[#717973] uppercase tracking-wider block mt-1">
                Agence Institutional & Dévs Durable
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-[#edeeef]/70 backdrop-blur-md p-1.5 rounded-full border border-white/60 shadow-inner">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${isActiveRoute(link.path)
                  ? 'bg-[#012d1d] text-white shadow-md'
                  : 'text-[#414844] hover:text-[#012d1d] hover:bg-white/60'
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Action CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className="btn btn-sm bg-[#012d1d] hover:bg-[#1b4332] text-white font-semibold border-none rounded-full px-5 shadow-lg shadow-[#012d1d]/15 hover:shadow-xl transition-all duration-300 gap-2 text-xs uppercase tracking-wider flex items-center"
            >
              <span>Rejoindre l'Action</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#daa520]" />
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[#edeeef] text-[#012d1d] focus:outline-none"
              aria-label="Menu Mobile"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel mt-3 mx-4 p-5 rounded-2xl animate-fade-in shadow-2xl border border-white/80 bg-white/95">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-left px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${isActiveRoute(link.path)
                  ? 'bg-[#012d1d] text-white'
                  : 'text-[#191c1d] hover:bg-[#edeeef]'
                  }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-[#c1c8c2]/40 mt-2">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 bg-[#012d1d] text-white rounded-xl font-semibold text-xs tracking-wider uppercase text-center flex items-center justify-center gap-2 shadow-md"
              >
                <span>Rejoindre l'Action</span>
                <ArrowUpRight className="w-4 h-4 text-[#daa520]" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
