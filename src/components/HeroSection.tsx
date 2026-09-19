import React from 'react';
import { ArrowRight, CheckCircle2, ChevronDown, ExternalLink, MapPin, Sparkles, KeyRound } from 'lucide-react';
import livingImg from '../assets/images/luxury_apartment_living_1789843329463.jpg';
import { APARTMENT_INFO, FORM_URL } from '../data/apartmentData';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Image with Dark Vignette & Gradient Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src={livingImg}
          alt="Living integrado do apartamento de alto padrão"
          className="w-full h-full object-cover object-center scale-105 transform duration-1000 ease-out"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/75 to-neutral-950/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/90 via-neutral-950/60 to-transparent" />
        <div className="absolute inset-0 bg-radial from-transparent via-neutral-950/40 to-neutral-950" />
      </div>

      {/* Decorative Subtle Gold Blur in Background */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900/80 border border-amber-500/30 backdrop-blur-md mb-6 shadow-lg shadow-black/40">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span className="text-xs font-semibold text-amber-300 tracking-wide uppercase">
              Oportunidade Exclusiva • {APARTMENT_INFO.status}
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-serif-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15] mb-6">
            Viva o Alto Padrão no Ponto Mais Nobre dos{' '}
            <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent">
              Jardins
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-neutral-300 font-normal leading-relaxed mb-6 max-w-2xl">
            Apartamento de luxo com <strong className="text-white font-semibold">218m² privativos</strong>,{' '}
            <strong className="text-white font-semibold">3 amplas suítes</strong>, living integrado ao terraço gourmet e{' '}
            <strong className="text-white font-semibold">3 vagas livres</strong> de garagem.
          </p>

          {/* Location & Delivery Indicator */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-300 mb-8">
            <div className="flex items-center gap-1.5 bg-neutral-900/60 px-3 py-1.5 rounded-lg border border-neutral-800">
              <MapPin className="w-4 h-4 text-amber-400" />
              <span>{APARTMENT_INFO.location}</span>
            </div>
            <div className="flex items-center gap-1.5 bg-neutral-900/60 px-3 py-1.5 rounded-lg border border-neutral-800">
              <KeyRound className="w-4 h-4 text-amber-400" />
              <span>Chaves Imediatas • Imóvel Novo</span>
            </div>
          </div>

          {/* Price Highlight & Primary CTA Card */}
          <div className="p-6 sm:p-7 rounded-2xl bg-neutral-900/90 border border-neutral-700/70 backdrop-blur-xl shadow-2xl shadow-black/80 mb-8 max-w-2xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5">
              <div>
                <span className="text-xs uppercase tracking-wider text-neutral-400 font-semibold block mb-1">
                  Valor de Venda Exclusivo
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl sm:text-4xl font-extrabold text-white font-serif-heading">
                    {APARTMENT_INFO.priceFormatted}
                  </span>
                </div>
                <span className="text-xs text-amber-400/90 font-medium block mt-1">
                  Financiamento aprovado em até 24h ou proposta personalizada
                </span>
              </div>

              {/* Main Tenho Interesse Button requested by the user */}
              <a
                id="hero-btn-tenho-interesse"
                href={FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-neutral-950 font-bold text-base tracking-wide shadow-xl shadow-amber-500/30 hover:shadow-amber-500/50 hover:scale-[1.03] active:scale-[0.98] transition-all cursor-pointer whitespace-nowrap"
              >
                <span className="tracking-wide">Tenho Interesse</span>
                <ExternalLink className="w-5 h-5 stroke-[2.5] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                {/* Glow ring */}
                <span className="absolute -inset-0.5 rounded-xl bg-amber-400/30 opacity-0 group-hover:opacity-100 transition-opacity blur-sm -z-10" />
              </a>
            </div>

            {/* Quick Benefits Checklist */}
            <div className="mt-5 pt-4 border-t border-neutral-800 grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs text-neutral-300">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Atendimento Reservado</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Documentação Pronta</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Sem Intermediários Extras</span>
              </div>
            </div>
          </div>

          {/* Quick Explore Link */}
          <div className="flex items-center gap-3">
            <a
              href="#galeria"
              className="inline-flex items-center gap-2 text-sm font-medium text-neutral-300 hover:text-white transition-colors"
            >
              <span>Ver fotos dos ambientes e planta</span>
              <ChevronDown className="w-4 h-4 animate-bounce" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
