import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Expand, ExternalLink, X } from 'lucide-react';
import { GALLERY_IMAGES, FORM_URL } from '../data/apartmentData';
import { GalleryImage } from '../types';

export const GallerySection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'living' | 'suite' | 'gourmet' | 'lazer' | 'fachada'>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const filteredImages = activeFilter === 'all'
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.filter((img) => img.category === activeFilter);

  const openLightbox = (image: GalleryImage) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const handleNext = () => {
    if (!selectedImage) return;
    const currentIndex = GALLERY_IMAGES.findIndex((img) => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % GALLERY_IMAGES.length;
    setSelectedImage(GALLERY_IMAGES[nextIndex]);
  };

  const handlePrev = () => {
    if (!selectedImage) return;
    const currentIndex = GALLERY_IMAGES.findIndex((img) => img.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length;
    setSelectedImage(GALLERY_IMAGES[prevIndex]);
  };

  const filterTabs = [
    { id: 'all', label: 'Todos os Ambientes' },
    { id: 'living', label: 'Living & Estar' },
    { id: 'suite', label: 'Suítes & Banho' },
    { id: 'gourmet', label: 'Varanda & Cozinha' },
    { id: 'lazer', label: 'Lazer & Áreas Comuns' },
    { id: 'fachada', label: 'Fachada' },
  ];

  return (
    <section id="galeria" className="py-20 bg-neutral-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <span className="text-xs font-semibold tracking-widest text-amber-400 uppercase block mb-2">
              Tour Fotográfico
            </span>
            <h2 className="font-serif-heading text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Conheça Cada Detalhe dos Ambientes
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base mt-2 max-w-xl">
              Acabamentos nobres, marcenaria de alto nível, iluminação natural privilegiada e vista panorâmica permanente.
            </p>
          </div>

          {/* Quick CTA */}
          <a
            id="gallery-btn-tenho-interesse"
            href={FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-neutral-900 hover:bg-neutral-800 border border-amber-500/40 text-amber-300 font-semibold text-sm transition-all hover:border-amber-400 shrink-0 self-start md:self-auto"
          >
            <span>Tenho Interesse • Agendar Visita</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id as any)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all cursor-pointer ${
                activeFilter === tab.id
                  ? 'bg-amber-500 text-neutral-950 shadow-md shadow-amber-500/20'
                  : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800 hover:border-neutral-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              onClick={() => openLightbox(image)}
              className="group relative rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 hover:border-amber-500/50 cursor-pointer transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-black/60 flex flex-col"
            >
              <div className="relative aspect-video w-full overflow-hidden bg-neutral-950">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                
                {/* Zoom Icon Badge */}
                <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-neutral-950/80 backdrop-blur-md border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Expand className="w-4 h-4" />
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-white font-serif-heading group-hover:text-amber-300 transition-colors">
                    {image.title}
                  </h3>
                  <p className="text-xs text-neutral-400 mt-2 line-clamp-2 leading-relaxed">
                    {image.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-neutral-800/80 flex items-center justify-between text-xs text-amber-400 font-medium">
                  <span>Clique para ampliar</span>
                  <span className="text-neutral-300 font-semibold group-hover:translate-x-1 transition-transform">
                    Ver detalhes →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-5 right-5 z-50 p-3 rounded-full bg-neutral-900/90 text-neutral-200 hover:text-white hover:bg-neutral-800 border border-neutral-700 transition-colors"
              aria-label="Fechar visualizador"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-neutral-900/80 text-white hover:bg-amber-500 hover:text-neutral-950 border border-neutral-700 transition-colors"
              aria-label="Foto anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-neutral-900/80 text-white hover:bg-amber-500 hover:text-neutral-950 border border-neutral-700 transition-colors"
              aria-label="Próxima foto"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Lightbox Card Content */}
            <div className="max-w-5xl w-full max-h-[90vh] bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden flex flex-col shadow-2xl">
              <div className="relative flex-1 bg-black flex items-center justify-center min-h-[320px] max-h-[65vh] overflow-hidden">
                <img
                  src={selectedImage.url}
                  alt={selectedImage.title}
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Lightbox Footer with Info and CTA */}
              <div className="p-6 bg-neutral-900 border-t border-neutral-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="font-serif-heading text-lg sm:text-xl font-bold text-white">
                    {selectedImage.title}
                  </h3>
                  <p className="text-sm text-neutral-400 mt-1 max-w-xl">
                    {selectedImage.description}
                  </p>
                </div>

                <a
                  id="lightbox-btn-tenho-interesse"
                  href={FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-neutral-950 font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 shrink-0"
                >
                  <span>Tenho Interesse</span>
                  <ExternalLink className="w-4 h-4 stroke-[2.5]" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
