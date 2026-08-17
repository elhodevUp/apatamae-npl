import React, { useState, useEffect } from 'react';
import { Link, usePage } from '@inertiajs/react';
import { Menu, X, ArrowUpRight, ChevronDown } from 'lucide-react';

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
    {
      label: "L'Institut",
      subLinks: [
        { path: '/qui-sommes-nous', label: 'Qui Sommes-Nous' },
        { path: '/partenaires', label: 'Partenaires' },
      ]
    },
    {
      label: 'Nos Actions',
      subLinks: [
        { path: '/nos-programmes', label: 'Programmes' },
        { path: '/impact-recits', label: 'Impact & Récits' },
      ]
    },
    { path: '/galerie', label: 'Galeries' },
    { path: '/contact', label: 'Contacts' },
  ];

  const isActiveRoute = (path) => {
    if (path === '/' && url === '/') return true;
    if (path !== '/' && url.startsWith(path)) return true;
    return false;
  };

  const isSubMenuActive = (subLinks) => {
    if (!subLinks) return false;
    return subLinks.some(sub => isActiveRoute(sub.path));
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? 'py-2 bg-white/95 backdrop-blur-xl shadow-glass border-b border-white/40'
        : 'py-3 bg-white/80 backdrop-blur-md'
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
              src="/logo1.png"
              alt="Logo APATAM@E"
              className="h-12 w-auto object-contain group-hover:scale-105 transition-transform drop-shadow-sm"
            />
            <div className="flex items-center">
              <span className="font-headline font-extrabold text-base sm:text-lg tracking-tight leading-none">
                <span className="text-[#396093]">APATAM</span>
                <span className="text-[#daa520]">@</span>
                <span className="text-[#012d1d]">E</span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 2xl:gap-4 bg-[#edeeef]/70 backdrop-blur-md p-1.5 rounded-full border border-white/60 shadow-inner">
            {navLinks.map((link, idx) => (
              link.subLinks ? (
                <div key={idx} className="relative group">
                  <button className={`flex items-center gap-1.5 whitespace-nowrap px-4 py-2 rounded-full text-[14px] font-semibold tracking-wide transition-all focus:outline-none ${
                    isSubMenuActive(link.subLinks)
                      ? 'bg-[#012d1d] text-white shadow-md'
                      : 'text-[#414844] hover:text-[#012d1d] hover:bg-white/60'
                  }`}>
                    {link.label}
                    <ChevronDown className="w-4 h-4 opacity-70 group-hover:rotate-180 transition-transform duration-300" />
                  </button>
                  {/* Dropdown Menu */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-50">
                    <div className="bg-white/95 backdrop-blur-xl border border-white/60 shadow-xl rounded-2xl p-2.5 flex flex-col gap-1">
                      {link.subLinks.map((sub, sIdx) => (
                        <Link
                          key={sIdx}
                          href={sub.path}
                          className={`px-4 py-2.5 rounded-xl text-[14px] font-semibold transition-all ${isActiveRoute(sub.path)
                            ? 'bg-[#012d1d] text-white shadow-sm'
                            : 'text-[#414844] hover:bg-[#edeeef] hover:text-[#012d1d]'
                            } ${sub.className || ''}`}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={idx}
                  href={link.path}
                  className={`whitespace-nowrap px-4 py-2 rounded-full text-[14px] font-semibold tracking-wide transition-all ${isActiveRoute(link.path)
                    ? 'bg-[#012d1d] text-white shadow-md'
                    : 'text-[#414844] hover:text-[#012d1d] hover:bg-white/60'
                    } ${link.className || ''}`}
                >
                  {link.label}
                </Link>
              )
            ))}
          </nav>

          {/* Action CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className="btn btn-sm bg-[#012d1d] hover:bg-[#1b4332] text-white font-bold border-none rounded-full px-5 py-2 shadow-md hover:shadow-lg transition-all duration-300 gap-2 text-[11px] xl:text-xs uppercase tracking-wider flex items-center"
            >
              <span>Nous Rejoindre</span>
              <ArrowUpRight className="w-4 h-4 text-[#daa520]" />
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="lg:hidden flex items-center">
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
        <div className="lg:hidden glass-panel mt-3 mx-4 p-5 rounded-2xl animate-fade-in shadow-2xl border border-white/80 bg-white/95">
          <div className="flex flex-col gap-2">
            {navLinks.map((link, idx) => (
              link.subLinks ? (
                <div key={idx} className="flex flex-col gap-1 mb-1">
                  <div className={`text-left px-4 py-2 rounded-xl text-[11px] font-extrabold uppercase tracking-widest ${
                    isSubMenuActive(link.subLinks)
                      ? 'text-[#012d1d]'
                      : 'text-[#012d1d]/60'
                  }`}>
                    {link.label}
                  </div>
                  <div className="pl-4 flex flex-col gap-1 border-l-2 border-[#edeeef] ml-6 mb-2">
                    {link.subLinks.map((sub, sIdx) => (
                      <Link
                        key={sIdx}
                        href={sub.path}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`text-left px-4 py-2.5 rounded-xl text-sm font-bold transition-colors ${isActiveRoute(sub.path)
                          ? 'bg-[#012d1d] text-white shadow-sm'
                          : 'text-[#191c1d] hover:bg-[#edeeef]'
                          } ${sub.className || ''}`}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={idx}
                  href={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-left px-4 py-3 rounded-xl text-sm font-bold transition-colors ${isActiveRoute(link.path)
                    ? 'bg-[#012d1d] text-white shadow-md'
                    : 'text-[#191c1d] hover:bg-[#edeeef]'
                    } ${link.className || ''}`}
                >
                  {link.label}
                </Link>
              )
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
