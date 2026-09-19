import React, { useState } from 'react';
import { Check, Compass, Download, ExternalLink, Home, Layers, MoveRight } from 'lucide-react';
import { FLOOR_PLANS, FORM_URL } from '../data/apartmentData';

export const FloorPlanSection: React.FC = () => {
  const [selectedPlanId, setSelectedPlanId] = useState<string>(FLOOR_PLANS[0].id);

  const activePlan = FLOOR_PLANS.find((p) => p.id === selectedPlanId) || FLOOR_PLANS[0];

  return (
    <section id="plantas" className="py-20 bg-neutral-900/50 border-t border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-semibold tracking-widest text-amber-400 uppercase block mb-2">
            Plantas Humanizadas & Flexibilidade
          </span>
          <h2 className="font-serif-heading text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Arquitetura Inteligente que se Adapta à sua Vida
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base mt-3">
            Estrutura com pilares periféricos permitindo personalização de layout sem comprometer a estrutura do edifício.
          </p>
        </div>

        {/* Plan Switcher Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {FLOOR_PLANS.map((plan) => (
            <button
              key={plan.id}
              onClick={() => setSelectedPlanId(plan.id)}
              className={`px-5 py-3 rounded-xl font-semibold text-sm transition-all flex items-center gap-2 cursor-pointer ${
                selectedPlanId === plan.id
                  ? 'bg-amber-500 text-neutral-950 shadow-lg shadow-amber-500/20 scale-105'
                  : 'bg-neutral-800/80 text-neutral-300 hover:bg-neutral-800 hover:text-white border border-neutral-700/60'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>{plan.name}</span>
            </button>
          ))}
        </div>

        {/* Plan Detail Card */}
        <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Graphical Blueprint Representation */}
            <div className="lg:col-span-6 bg-neutral-950/90 rounded-2xl p-6 border border-neutral-800 relative overflow-hidden flex flex-col items-center justify-center min-h-[380px]">
              {/* Blueprint Grid Lines Aesthetic */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

              <div className="relative z-10 w-full text-center">
                <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center mx-auto mb-4">
                  <Compass className="w-8 h-8" />
                </div>
                <h4 className="font-serif-heading text-xl font-bold text-white mb-1">
                  {activePlan.area}
                </h4>
                <p className="text-xs text-amber-400 font-medium tracking-wider uppercase mb-6">
                  {activePlan.bedrooms} • {activePlan.parking}
                </p>

                {/* Spatial Distribution Diagram */}
                <div className="grid grid-cols-2 gap-3 max-w-sm mx-auto text-left text-xs">
                  <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800">
                    <span className="text-neutral-400 block text-[10px] uppercase">Área Social</span>
                    <strong className="text-neutral-100 text-sm">Living + Varanda</strong>
                    <span className="text-amber-400 block text-[11px] mt-0.5">Aprox. 78 m²</span>
                  </div>
                  <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800">
                    <span className="text-neutral-400 block text-[10px] uppercase">Área Íntima</span>
                    <strong className="text-neutral-100 text-sm">Suítes Privativas</strong>
                    <span className="text-amber-400 block text-[11px] mt-0.5">Aprox. 92 m²</span>
                  </div>
                  <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800">
                    <span className="text-neutral-400 block text-[10px] uppercase">Serviços & Copa</span>
                    <strong className="text-neutral-100 text-sm">Cozinha + DCE</strong>
                    <span className="text-amber-400 block text-[11px] mt-0.5">Aprox. 32 m²</span>
                  </div>
                  <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800">
                    <span className="text-neutral-400 block text-[10px] uppercase">Circulação</span>
                    <strong className="text-neutral-100 text-sm">Hall Privativo</strong>
                    <span className="text-amber-400 block text-[11px] mt-0.5">Aprox. 16 m²</span>
                  </div>
                </div>

                <p className="text-[11px] text-neutral-400 mt-6 italic">
                  * Plantas ilustrativas com medidas precisas disponíveis no book executivo.
                </p>
              </div>
            </div>

            {/* Right: Plan Features & CTA */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs uppercase font-bold text-amber-400 tracking-wider">
                  Layout Selecionado
                </span>
                <h3 className="font-serif-heading text-2xl sm:text-3xl font-bold text-white mt-1">
                  {activePlan.name}
                </h3>
                <p className="text-sm text-neutral-300 mt-3 leading-relaxed">
                  {activePlan.description}
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                  Destaques desta Configuração:
                </h4>
                {activePlan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-neutral-200">
                    <div className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <a
                  id="plan-btn-tenho-interesse"
                  href={FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-7 py-4 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-neutral-950 font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-amber-500/25 transition-all cursor-pointer"
                >
                  <span>Tenho Interesse nesta Planta</span>
                  <ExternalLink className="w-4 h-4 stroke-[2.5]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
