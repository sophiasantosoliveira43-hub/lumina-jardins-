import React from 'react';
import { Building2, ExternalLink, ShieldCheck } from 'lucide-react';
import { APARTMENT_INFO, FORM_URL } from '../data/apartmentData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-900 pt-16 pb-24 sm:pb-16 text-neutral-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-neutral-900">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-amber-500 flex items-center justify-center text-neutral-950 font-bold">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <span className="font-serif-heading font-bold text-lg text-white tracking-wider block">
                  LUMINA PRIVILÈGE
                </span>
                <span className="text-[10px] tracking-widest text-neutral-400 uppercase block -mt-1">
                  Jardins • São Paulo
                </span>
              </div>
            </div>

            <p className="text-neutral-400 leading-relaxed max-w-sm">
              Empreendimento residencial de altíssimo padrão, unindo arquitetura contemporânea, privacidade e a conveniência de morar no coração dos Jardins.
            </p>

            <div className="flex items-center gap-2 text-neutral-400">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>Intermediação Imobiliária Credenciada • CRECI-SP 038.912-J</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-serif-heading text-sm font-bold text-white uppercase tracking-wider">
              Navegação
            </h4>
            <ul className="space-y-2">
              <li><a href="#sobre" className="hover:text-amber-400 transition-colors">O Apartamento</a></li>
              <li><a href="#galeria" className="hover:text-amber-400 transition-colors">Galeria de Fotos</a></li>
              <li><a href="#lazer" className="hover:text-amber-400 transition-colors">Lazer & Estrutura</a></li>
              <li><a href="#plantas" className="hover:text-amber-400 transition-colors">Opções de Plantas</a></li>
              <li><a href="#localizacao" className="hover:text-amber-400 transition-colors">Localização & Entorno</a></li>
              <li><a href="#faq" className="hover:text-amber-400 transition-colors">Perguntas Frequentes</a></li>
            </ul>
          </div>

          {/* Form CTA & Contact */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-serif-heading text-sm font-bold text-white uppercase tracking-wider">
              Atendimento Exclusivo
            </h4>
            <p className="text-neutral-400">
              Agende uma visita guiada com total privacidade para você e sua família.
            </p>
            <div>
              <a
                id="footer-btn-tenho-interesse"
                href={FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-amber-500/40 text-amber-300 font-semibold transition-all hover:border-amber-400"
              >
                <span>Acessar Formulário de Interesse</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-neutral-400">
          <p>
            © {new Date().getFullYear()} Edifício Lumina Privilège. Todos os direitos reservados.
          </p>
          <p className="text-center md:text-right max-w-xl">
            As imagens e perspectivas são meramente ilustrativas. Os acabamentos, mobiliários e equipamentos serão entregues conforme o Memorial Descritivo do empreendimento.
          </p>
        </div>
      </div>
    </footer>
  );
};
