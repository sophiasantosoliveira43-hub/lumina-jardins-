import React, { useState, useEffect } from 'react';
import { Building2, ExternalLink, Menu, X, PhoneCall } from 'lucide-react';
import { FORM_URL, APARTMENT_INFO } from '../data/apartmentData';

interface NavbarProps {
  onOpenInterestModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'O Imóvel', href: '#sobre' },
    { label: 'Galeria', href: '#galeria' },
    { label: 'Lazer & Estrutura', href: '#lazer' },
    { label: 'Plantas', href: '#plantas' },
    { label: 'Localização', href: '#localizacao' },
    { label: 'Dúvidas', href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-neutral-950/90 backdrop-blur-md border-b border-neutral-800/80 py-3 shadow-xl shadow-black/20'
          : 'bg-gradient-to-b from-neutral-950/90 via-neutral-950/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo / Empreendimento */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-neutral-950 shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform">
            <Building2 className="w-5 h-5 stroke-[2.2]" />
          </div>
          <div>
            <span className="font-serif-heading font-bold text-lg sm:text-xl tracking-wider text-neutral-100 block group-hover:text-amber-300 transition-colors">
              LUMINA
            </span>
            <span className="text-[10px] tracking-[0.25em] text-neutral-400 uppercase block -mt-1 font-medium">
              Jardins • São Paulo
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-neutral-300 hover:text-amber-400 transition-colors tracking-wide"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA Button & Quick Contact */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href={`tel:${APARTMENT_INFO.whatsappDirect}`}
            className="text-xs font-semibold text-neutral-400 hover:text-neutral-200 transition-colors flex items-center gap-1.5"
            title="Atendimento Exclusivo"
          >
            <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
            <span className="hidden xl:inline">Atendimento Privativo</span>
          </a>

          <a
            id="nav-btn-tenho-interesse"
            href={FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-neutral-950 font-semibold text-sm tracking-wide shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
          >
            <span>Tenho Interesse</span>
            <ExternalLink className="w-4 h-4 stroke-[2.5]" />
          </a>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-1.5 rounded-full bg-amber-500 text-neutral-950 font-semibold text-xs flex items-center gap-1 shadow-md shadow-amber-500/20"
          >
            <span>Tenho Interesse</span>
            <ExternalLink className="w-3 h-3" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-neutral-400 hover:text-neutral-100 hover:bg-neutral-800/80 transition-colors"
            aria-label="Abrir Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-neutral-950/95 border-b border-neutral-800 px-5 pt-4 pb-6 mt-3 space-y-4 animate-in fade-in slide-in-from-top-4 duration-200 backdrop-blur-xl">
          <div className="space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-base font-medium text-neutral-200 hover:text-amber-400 border-b border-neutral-900"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2">
            <a
              id="mobile-menu-btn-tenho-interesse"
              href={FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-neutral-950 font-bold text-center flex items-center justify-center gap-2 shadow-lg shadow-amber-500/30"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>Tenho Interesse</span>
              <ExternalLink className="w-4 h-4 stroke-[2.5]" />
            </a>
            <p className="text-center text-xs text-neutral-400 mt-2">
              Formulário oficial de atendimento personalizado
            </p>
          </div>
        </div>
      )}
    </header>
  );
};
