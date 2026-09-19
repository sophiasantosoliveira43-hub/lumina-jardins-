import React from 'react';
import { Maximize, BedDouble, Car, Flame, Sun, ShieldCheck } from 'lucide-react';
import { APARTMENT_SPECS, FORM_URL } from '../data/apartmentData';

export const SpecsGrid: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Maximize':
        return <Maximize className="w-6 h-6 text-amber-400" />;
      case 'BedDouble':
        return <BedDouble className="w-6 h-6 text-amber-400" />;
      case 'Car':
        return <Car className="w-6 h-6 text-amber-400" />;
      case 'Flame':
        return <Flame className="w-6 h-6 text-amber-400" />;
      case 'Sun':
        return <Sun className="w-6 h-6 text-amber-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-amber-400" />;
      default:
        return <Maximize className="w-6 h-6 text-amber-400" />;
    }
  };

  return (
    <section id="sobre" className="py-16 bg-neutral-900/60 border-y border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-semibold tracking-widest text-amber-400 uppercase block mb-2">
            Especificações Gerais
          </span>
          <h2 className="font-serif-heading text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Projetado para Superar Todas as Expectativas
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base mt-3">
            Cada metro quadrado foi planejado para proporcionar conforto acústico, amplitude térmica e privacidade absoluta.
          </p>
        </div>

        {/* Specs 6-column Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {APARTMENT_SPECS.map((spec) => (
            <div
              key={spec.label}
              className="p-5 rounded-2xl bg-neutral-900/90 border border-neutral-800 hover:border-amber-500/40 hover:bg-neutral-800/60 transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {getIcon(spec.icon)}
                </div>
                <span className="text-xs text-neutral-400 font-medium block">
                  {spec.label}
                </span>
                <span className="text-xl sm:text-2xl font-bold text-white font-serif-heading block mt-0.5">
                  {spec.value}
                </span>
              </div>
              <p className="text-xs text-neutral-400 mt-3 pt-3 border-t border-neutral-800/80 leading-snug">
                {spec.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Floating Quick Banner */}
        <div className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-neutral-900 via-neutral-900 to-amber-950/40 border border-amber-500/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-bold text-white font-serif-heading">
              Gostaria de receber a apresentação completa em PDF?
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 mt-0.5">
              Envie seus dados através do formulário de interesse e receba o book digital com todos os detalhes técnicos.
            </p>
          </div>
          <a
            id="specs-btn-tenho-interesse"
            href={FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold text-sm tracking-wide transition-all shadow-md shadow-amber-500/20"
          >
            Tenho Interesse no Book Completo
          </a>
        </div>
      </div>
    </section>
  );
};
