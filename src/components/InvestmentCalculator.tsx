import React, { useState } from 'react';
import { Calculator, ExternalLink, Percent, ShieldCheck } from 'lucide-react';
import { FORM_URL } from '../data/apartmentData';

export const InvestmentCalculator: React.FC = () => {
  const propertyValue = 3850000;
  const [downPaymentPercent, setDownPaymentPercent] = useState<number>(30);
  const [months, setMonths] = useState<number>(240); // 20 years

  const downPaymentValue = (propertyValue * downPaymentPercent) / 100;
  const financedValue = propertyValue - downPaymentValue;

  // Simple amortization estimate (Price system ~ 0.85% monthly effective interest)
  const monthlyRate = 0.0085;
  const estimatedInstallment =
    (financedValue * (monthlyRate * Math.pow(1 + monthlyRate, months))) /
    (Math.pow(1 + monthlyRate, months) - 1);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <section className="py-20 bg-neutral-900/60 border-t border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-semibold tracking-widest text-amber-400 uppercase block mb-2">
            Simulador de Condições
          </span>
          <h2 className="font-serif-heading text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Planeje a Aquisição do seu Novo Apartamento
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base mt-2">
            Simule os valores aproximados de entrada e parcelamento bancário ou solicite uma proposta customizada.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-neutral-900 border border-neutral-800 rounded-3xl p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Sliders Column */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2 text-sm">
                  <span className="text-neutral-300 font-medium">Entrada Inicial ({downPaymentPercent}%)</span>
                  <span className="text-white font-bold">{formatCurrency(downPaymentValue)}</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="60"
                  step="5"
                  value={downPaymentPercent}
                  onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                  className="w-full accent-amber-400 bg-neutral-800 h-2 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-neutral-400 mt-1">
                  <span>Mínimo 20%</span>
                  <span>50%</span>
                  <span>Até 60%</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2 text-sm">
                  <span className="text-neutral-300 font-medium">Prazo de Financiamento</span>
                  <span className="text-white font-bold">{months / 12} Anos ({months} meses)</span>
                </div>
                <input
                  type="range"
                  min="120"
                  max="360"
                  step="60"
                  value={months}
                  onChange={(e) => setMonths(Number(e.target.value))}
                  className="w-full accent-amber-400 bg-neutral-800 h-2 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-neutral-400 mt-1">
                  <span>10 Anos (120x)</span>
                  <span>20 Anos (240x)</span>
                  <span>30 Anos (360x)</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-neutral-950/60 border border-neutral-800/80 text-xs text-neutral-400 flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  Assessoria de crédito imobiliário gratuita inclusa: nós cuidamos de toda a aprovação junto ao seu banco de preferência com as melhores taxas do mercado.
                </span>
              </div>
            </div>

            {/* Result Column */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-neutral-950 border border-amber-500/30 flex flex-col justify-between text-center">
              <div>
                <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider block">
                  Estimativa de Parcela Mensal
                </span>
                <div className="text-3xl sm:text-4xl font-extrabold text-amber-300 font-serif-heading my-3">
                  {formatCurrency(estimatedInstallment)}
                </div>
                <div className="space-y-1.5 text-xs text-neutral-400 border-t border-neutral-800 pt-3">
                  <div className="flex justify-between">
                    <span>Valor do Imóvel:</span>
                    <strong className="text-white">{formatCurrency(propertyValue)}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Saldo Financiado:</span>
                    <strong className="text-white">{formatCurrency(financedValue)}</strong>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <a
                  id="simulator-btn-tenho-interesse"
                  href={FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-neutral-950 font-bold text-sm tracking-wide flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 transition-all cursor-pointer"
                >
                  <span>Tenho Interesse nesta Condição</span>
                  <ExternalLink className="w-4 h-4 stroke-[2.5]" />
                </a>
                <span className="text-[11px] text-neutral-400 block mt-2">
                  Preencha o formulário para receber a simulação oficial
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
