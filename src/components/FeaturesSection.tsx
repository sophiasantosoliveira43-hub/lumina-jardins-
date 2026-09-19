import React from 'react';
import { Shield, Sparkles, VolumeX, Cpu, Wind, Lock, BatteryCharging, Check } from 'lucide-react';
import { FORM_URL } from '../data/apartmentData';

export const FeaturesSection: React.FC = () => {
  const differentials = [
    {
      icon: <VolumeX className="w-5 h-5 text-amber-400" />,
      title: 'Atenuação Acústica Superior',
      desc: 'Manta acústica sob o contrapiso em todas as áreas sociais e íntimas, além de esquadrias com vidros duplos laminados de alta performance.'
    },
    {
      icon: <Cpu className="w-5 h-5 text-amber-400" />,
      title: 'Infraestrutura de Automação',
      desc: 'Preparação completa para automação de iluminação dimerizável, persianas elétricas, áudio multizona e ar-condicionado pelo smartphone.'
    },
    {
      icon: <Wind className="w-5 h-5 text-amber-400" />,
      title: 'Climatização VRF Silenciosa',
      desc: 'Infraestrutura instalada para sistema de ar-condicionado split VRF com condensadora oculta na laje técnica independente.'
    },
    {
      icon: <Lock className="w-5 h-5 text-amber-400" />,
      title: 'Hall Social Privativo com Biometria',
      desc: 'Elevador inteligente de alta velocidade com leitor facial e biometria, abrindo diretamente dentro do vestíbulo privativo da unidade.'
    },
    {
      icon: <BatteryCharging className="w-5 h-5 text-amber-400" />,
      title: 'Vaga com Ponto para Carro Elétrico',
      desc: 'Medição individualizada para carregamento rápido veicular já instalada na vaga de garagem principal da unidade.'
    },
    {
      icon: <Shield className="w-5 h-5 text-amber-400" />,
      title: 'Gerador Full de Energia',
      desc: 'Gerador de emergência que atende 100% das áreas comuns e todos os pontos elétricos e tomadas internas do apartamento.'
    }
  ];

  return (
    <section className="py-20 bg-neutral-900/40 border-t border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              Padrão Construtivo de Excelência
            </div>

            <h2 className="font-serif-heading text-3xl sm:text-4xl font-bold text-white tracking-tight leading-snug">
              Engenharia e Acabamentos que Elevam o Seu Bem-Estar
            </h2>

            <p className="text-neutral-300 text-base leading-relaxed">
              Diferente dos empreendimentos convencionais, o Edifício Lumina foi concebido sob os mais rigorosos padrões internacionais de sustentabilidade e isolamento.
            </p>

            <ul className="space-y-3 pt-2">
              {[
                'Pé-direito livre de 2,90m na área social',
                'Banheiros com ventilação e iluminação natural',
                'Tubulações com tratamento anti-ruído nas prumadas',
                'Churrasqueira com duto de exaustão mecânica forçada',
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-sm text-neutral-200">
                  <div className="w-5 h-5 rounded-full bg-amber-400/20 text-amber-400 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <a
                id="features-btn-tenho-interesse"
                href={FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-neutral-950 font-bold text-sm shadow-lg shadow-amber-500/25 hover:from-amber-300 hover:to-amber-400 transition-all cursor-pointer"
              >
                <span>Tenho Interesse • Falar com Especialista</span>
              </a>
            </div>
          </div>

          {/* Right Differentials Cards Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {differentials.map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-neutral-900/80 border border-neutral-800 hover:border-amber-500/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-neutral-800/80 border border-neutral-700 flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h3 className="font-serif-heading text-lg font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
