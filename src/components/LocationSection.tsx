import React from 'react';
import { MapPin, Navigation, Clock, Building, Compass, ExternalLink } from 'lucide-react';
import { NEIGHBORHOOD_POINTS, APARTMENT_INFO, FORM_URL } from '../data/apartmentData';

export const LocationSection: React.FC = () => {
  return (
    <section id="localizacao" className="py-20 bg-neutral-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Context and Points of Interest */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5" />
              Localização Estratégica
            </div>

            <h2 className="font-serif-heading text-3xl sm:text-4xl font-bold text-white tracking-tight leading-snug">
              No Quadrilátero Mais Nobre e Arborizado de São Paulo
            </h2>

            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
              Morar nos Jardins é ter o privilégio de fazer tudo a pé: das melhores boutiques e confeitarias da Oscar Freire aos clubes mais tradicionais do país.
            </p>

            {/* Neighborhood Points Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {NEIGHBORHOOD_POINTS.map((pt, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl bg-neutral-900/80 border border-neutral-800 flex items-start gap-3 hover:border-amber-500/30 transition-all"
                >
                  <div className="w-8 h-8 rounded-lg bg-neutral-800 flex items-center justify-center shrink-0 mt-0.5 text-amber-400">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-amber-400 tracking-wider block">
                      {pt.category}
                    </span>
                    <strong className="text-sm font-semibold text-white block">
                      {pt.name}
                    </strong>
                    <span className="text-xs text-neutral-400 mt-0.5 block">
                      {pt.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <a
                id="location-btn-tenho-interesse"
                href={FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-neutral-950 font-bold text-sm shadow-lg shadow-amber-500/20 hover:from-amber-300 hover:to-amber-400 transition-all cursor-pointer"
              >
                <span>Tenho Interesse • Agendar Roteiro de Visita</span>
                <ExternalLink className="w-4 h-4 stroke-[2.5]" />
              </a>
            </div>
          </div>

          {/* Right Column: Stylized Interactive Map Card */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden bg-neutral-900 border border-neutral-800 p-8 shadow-2xl">
              {/* Dark Map Stylized Visual Background */}
              <div className="absolute inset-0 bg-[radial-gradient(#262626_1px,transparent_1px)] [background-size:16px_16px] opacity-40" />
              
              <div className="relative z-10 space-y-6">
                <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
                  <div>
                    <span className="text-xs text-neutral-400">Endereço do Imóvel</span>
                    <h3 className="font-serif-heading text-lg font-bold text-white">
                      {APARTMENT_INFO.location}
                    </h3>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center">
                    <Navigation className="w-5 h-5" />
                  </div>
                </div>

                {/* Map Mockup graphic with pinpoint */}
                <div className="h-64 rounded-2xl bg-neutral-950/90 border border-neutral-800 flex flex-col items-center justify-center relative p-6 text-center overflow-hidden">
                  <div className="w-16 h-16 rounded-full bg-amber-500/20 animate-ping absolute" />
                  <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-amber-500 to-amber-300 text-neutral-950 flex items-center justify-center shadow-xl shadow-amber-500/40 relative z-10 mb-3">
                    <Building className="w-7 h-7" />
                  </div>
                  <h4 className="font-serif-heading font-bold text-white text-base relative z-10">
                    Residencial Lumina Privilège
                  </h4>
                  <p className="text-xs text-neutral-400 mt-1 max-w-xs relative z-10">
                    Rua arborizada e residencial, com total privacidade e fácil acesso às principais vias da cidade.
                  </p>
                </div>

                <div className="bg-neutral-950/60 p-4 rounded-xl border border-neutral-800 flex items-center justify-between text-xs text-neutral-300">
                  <span>Visitas com cadastro prévio e recepção privativa.</span>
                  <span className="text-amber-400 font-semibold">Portaria com Concierge</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
