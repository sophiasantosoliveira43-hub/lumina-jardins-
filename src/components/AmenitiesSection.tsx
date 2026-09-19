import React from 'react';
import { Waves, Dumbbell, Sparkles, Wine, Briefcase, Smile, Dog, Shield, ExternalLink } from 'lucide-react';
import { AMENITIES, FORM_URL } from '../data/apartmentData';

export const AmenitiesSection: React.FC = () => {
  const getAmenityIcon = (name: string) => {
    switch (name) {
      case 'Waves':
        return <Waves className="w-6 h-6 text-amber-400" />;
      case 'Dumbbell':
        return <Dumbbell className="w-6 h-6 text-amber-400" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-amber-400" />;
      case 'Wine':
        return <Wine className="w-6 h-6 text-amber-400" />;
      case 'Briefcase':
        return <Briefcase className="w-6 h-6 text-amber-400" />;
      case 'Smile':
        return <Smile className="w-6 h-6 text-amber-400" />;
      case 'Dog':
        return <Dog className="w-6 h-6 text-amber-400" />;
      case 'Shield':
        return <Shield className="w-6 h-6 text-amber-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-amber-400" />;
    }
  };

  return (
    <section id="lazer" className="py-20 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-widest text-amber-400 uppercase block mb-2">
            Condomínio Clube Privativo
          </span>
          <h2 className="font-serif-heading text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Lazer e Bem-Estar sem Sair de Casa
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base mt-3">
            Áreas de convivência planejadas com mobiliário nobre assinado por designers brasileiros e paisagismo integrado.
          </p>
        </div>

        {/* Grid of Amenities */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {AMENITIES.map((amenity, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800 hover:border-amber-500/40 hover:bg-neutral-900 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getAmenityIcon(amenity.icon)}
                  </div>
                  {amenity.tag && (
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300 bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 rounded-full">
                      {amenity.tag}
                    </span>
                  )}
                </div>

                <h3 className="font-serif-heading text-lg font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                  {amenity.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  {amenity.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Visual Callout for Condominium Tour */}
        <div className="mt-12 text-center">
          <a
            id="amenities-btn-tenho-interesse"
            href={FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-neutral-900 border border-neutral-700 hover:border-amber-400 text-neutral-100 font-semibold text-sm hover:text-amber-300 transition-all shadow-lg hover:shadow-amber-500/10"
          >
            <span>Tenho Interesse em Conhecer as Áreas Comuns</span>
            <ExternalLink className="w-4 h-4 text-amber-400" />
          </a>
        </div>
      </div>
    </section>
  );
};
