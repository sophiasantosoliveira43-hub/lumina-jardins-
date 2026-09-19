import React from 'react';
import { ExternalLink, Sparkles, ShieldCheck, Clock, Calendar } from 'lucide-react';
import balconyImg from '../assets/images/apartment_balcony_gourmet_1789843352486.jpg';
import { APARTMENT_INFO, FORM_URL } from '../data/apartmentData';

export const CtaBanner: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background with Ambient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={balconyImg}
          alt="Varanda gourmet entardecer"
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-neutral-950/90 backdrop-blur-sm" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-neutral-950/70" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-6">
          <Sparkles className="w-4 h-4 text-amber-400" />
          Última Unidade Disponível Neste Andar
        </div>

        <h2 className="font-serif-heading text-3xl sm:text-5xl font-bold text-white tracking-tight max-w-3xl mx-auto leading-tight mb-6">
          Oportunidade Rara no Ponto Mais Desejado dos Jardins
        </h2>

        <p className="text-neutral-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
          Agende sua visita exclusiva com hora marcada e conheça de perto a sofisticação, a vista e o silêncio do{' '}
          <strong className="text-white font-semibold">{APARTMENT_INFO.name}</strong>.
        </p>

        {/* Big Conversion Button requested by User */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <a
            id="cta-banner-btn-tenho-interesse"
            href={FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full sm:w-auto px-10 py-5 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-neutral-950 font-extrabold text-lg tracking-wide shadow-2xl shadow-amber-500/40 hover:shadow-amber-500/60 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3 cursor-pointer"
          >
            <span>Tenho Interesse</span>
            <ExternalLink className="w-5 h-5 stroke-[2.5] group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Three Guarantees */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto text-xs text-neutral-300 pt-6 border-t border-neutral-800/80">
          <div className="flex items-center justify-center gap-2">
            <Clock className="w-4 h-4 text-amber-400" />
            <span>Retorno Rápido em até 15 min</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Calendar className="w-4 h-4 text-amber-400" />
            <span>Visitas Todos os Dias c/ Agendamento</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>Sigilo & Privacidade Garantidos</span>
          </div>
        </div>
      </div>
    </section>
  );
};
