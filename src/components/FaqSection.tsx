import React, { useState } from 'react';
import { ChevronDown, ExternalLink, HelpCircle } from 'lucide-react';
import { FAQS, FORM_URL } from '../data/apartmentData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-neutral-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold tracking-widest text-amber-400 uppercase block mb-2">
            Tire Suas Dúvidas
          </span>
          <h2 className="font-serif-heading text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Perguntas Frequentes
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base mt-2">
            Tudo o que você precisa saber sobre a negociação e características do imóvel.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all ${
                  isOpen
                    ? 'bg-neutral-900 border-amber-500/40 shadow-lg'
                    : 'bg-neutral-900/50 border-neutral-800 hover:border-neutral-700'
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-medium text-base sm:text-lg text-white font-serif-heading">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-amber-500 text-neutral-950' : 'text-neutral-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 pt-0 text-sm sm:text-base text-neutral-300 leading-relaxed border-t border-neutral-800/80 mt-1 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions CTA */}
        <div className="mt-12 text-center p-8 rounded-2xl bg-neutral-900/60 border border-neutral-800">
          <HelpCircle className="w-8 h-8 text-amber-400 mx-auto mb-3" />
          <h3 className="font-serif-heading text-lg font-bold text-white mb-1">
            Tem alguma dúvida específica sobre o imóvel?
          </h3>
          <p className="text-xs sm:text-sm text-neutral-400 mb-6 max-w-md mx-auto">
            Nossa equipe de consultoria imobiliária está pronta para responder todas as suas questões em detalhes.
          </p>
          <a
            id="faq-btn-tenho-interesse"
            href={FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold text-sm tracking-wide shadow-md shadow-amber-500/20 transition-all cursor-pointer"
          >
            <span>Tenho Interesse • Falar com a Equipe</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
