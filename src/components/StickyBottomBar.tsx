import React, { useState, useEffect } from 'react';
import { ExternalLink, Sparkles } from 'lucide-react';
import { APARTMENT_INFO, FORM_URL } from '../data/apartmentData';

export const StickyBottomBar: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled down past hero
      setVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <aside
      aria-label="Barra fixa de interesse"
      className="fixed bottom-0 left-0 right-0 z-40 p-3 sm:p-4 bg-neutral-950/95 backdrop-blur-lg border-t border-neutral-800/90 shadow-2xl transition-all duration-300 animate-in slide-in-from-bottom-5"
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-4 flex items-center justify-between gap-4">
        {/* Left Info: Hidden on tiny screens, shown on sm+ */}
        <div className="hidden sm:flex items-center gap-4">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <div>
            <span className="text-xs text-neutral-400 block font-medium">
              {APARTMENT_INFO.name} • 218m²
            </span>
            <span className="text-sm font-bold text-white font-serif-heading">
              {APARTMENT_INFO.priceFormatted}
            </span>
          </div>
        </div>

        {/* Center message for mobile */}
        <div className="sm:hidden flex items-center gap-2 text-xs text-neutral-300">
          <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
          <span className="truncate">Unidade 218m² • Jardins</span>
        </div>

        {/* Primary Action Button */}
        <a
          id="sticky-btn-tenho-interesse"
          href={FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 sm:px-8 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-neutral-950 font-bold text-xs sm:text-sm tracking-wide shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-105 active:scale-95 transition-all flex items-center gap-2 cursor-pointer shrink-0 ml-auto"
        >
          <span>Tenho Interesse</span>
          <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5]" />
        </a>
      </div>
    </aside>
  );
};
