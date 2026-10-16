import React, { useState, useEffect } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight, Image as ImageIcon, Sparkles } from 'lucide-react';
import { GalleryItem } from '../types';

interface PropertyGalleryProps {
  items: GalleryItem[];
  projectName: string;
}

export const PropertyGallery: React.FC<PropertyGalleryProps> = ({ items, projectName }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);
  const [imageErrors, setImageErrors] = useState<{ [key: string]: boolean }>({});

  const categories = ['All', 'Exterior', 'Interior', 'Amenities', 'Master Plan'];

  const filteredItems = activeCategory === 'All'
    ? items
    : items.filter(item => item.category === activeCategory);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeLightboxIndex === null) return;
      if (e.key === 'Escape') setActiveLightboxIndex(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeLightboxIndex, filteredItems.length]);

  const handleNext = () => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex((activeLightboxIndex + 1) % filteredItems.length);
  };

  const handlePrev = () => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex((activeLightboxIndex - 1 + filteredItems.length) % filteredItems.length);
  };

  const handleImageError = (id: string) => {
    setImageErrors(prev => ({ ...prev, [id]: true }));
  };

  return (
    <div className="space-y-6">
      {/* Category selector without Curated Visual Gallery text */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1.5 rounded-lg border border-blue-200 shadow-xs">
            Architectural Gallery Perspectives
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-white border border-slate-200 rounded-xl shadow-xs">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                activeCategory === cat
                  ? 'bg-blue-600 text-white shadow-sm shadow-blue-600/30'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredItems.map((item, index) => {
          const hasError = imageErrors[item.id];
          return (
            <div
              key={item.id}
              onClick={() => setActiveLightboxIndex(index)}
              className="group relative rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 aspect-[16/10] cursor-pointer hover:border-blue-500 transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-blue-500/10 flex flex-col justify-end"
            >
              {!hasError ? (
                <img
                  src={item.url}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  onError={() => handleImageError(item.id)}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                /* Styled Fallback Container */
                <div className="absolute inset-0 bg-slate-100 flex flex-col items-center justify-center p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-blue-100 border border-blue-200 flex items-center justify-center text-blue-600 mb-3">
                    <ImageIcon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-semibold text-slate-800">{item.title}</span>
                  <span className="text-[10px] text-slate-500 mt-1">{item.category} Perspective</span>
                </div>
              )}

              {/* Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

              {/* Content overlay */}
              <div className="relative z-10 p-4 transform translate-y-1 group-hover:translate-y-0 transition-transform">
                <div className="flex items-center justify-between text-[11px] text-sky-300 font-medium mb-1">
                  <span>{item.category}</span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 text-xs text-white">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>Expand</span>
                  </span>
                </div>
                <h4 className="text-sm font-bold text-white tracking-tight line-clamp-1">{item.title}</h4>
                {item.description && (
                  <p className="text-xs text-slate-200 line-clamp-1 mt-0.5 font-light">
                    {item.description}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Lightbox Modal */}
      {activeLightboxIndex !== null && filteredItems[activeLightboxIndex] && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-8 animate-in fade-in duration-200">
          {/* Top bar of lightbox */}
          <div className="flex items-center justify-between z-10">
            <div>
              <span className="text-xs text-blue-400 font-semibold uppercase tracking-wider">
                {filteredItems[activeLightboxIndex].category} · {activeLightboxIndex + 1} of {filteredItems.length}
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-white font-title">
                {filteredItems[activeLightboxIndex].title}
              </h3>
            </div>

            <button
              onClick={() => setActiveLightboxIndex(null)}
              className="p-2.5 rounded-full bg-slate-900 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Main viewing area with arrows */}
          <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden">
            <button
              onClick={handlePrev}
              className="absolute left-2 sm:left-6 z-10 p-3 rounded-full bg-[#070c1a]/90 border border-slate-700 text-white hover:bg-blue-600 hover:border-blue-500 transition-all cursor-pointer shadow-xl"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="max-w-5xl max-h-[75vh] w-full h-full flex items-center justify-center">
              {!imageErrors[filteredItems[activeLightboxIndex].id] ? (
                <img
                  src={filteredItems[activeLightboxIndex].url}
                  alt={filteredItems[activeLightboxIndex].title}
                  referrerPolicy="no-referrer"
                  className="max-h-[75vh] max-w-full object-contain rounded-xl shadow-2xl"
                />
              ) : (
                <div className="w-full max-w-2xl h-96 bg-[#0b1329] border border-slate-800 rounded-2xl flex flex-col items-center justify-center p-8 text-center">
                  <ImageIcon className="w-16 h-16 text-blue-400/60 mb-4" />
                  <h4 className="text-xl font-bold text-white mb-2 font-title">{filteredItems[activeLightboxIndex].title}</h4>
                  <p className="text-sm text-slate-400 max-w-md">{filteredItems[activeLightboxIndex].description}</p>
                </div>
              )}
            </div>

            <button
              onClick={handleNext}
              className="absolute right-2 sm:right-6 z-10 p-3 rounded-full bg-[#070c1a]/90 border border-slate-700 text-white hover:bg-blue-600 hover:border-blue-500 transition-all cursor-pointer shadow-xl"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Bottom caption */}
          <div className="text-center max-w-2xl mx-auto z-10">
            <p className="text-sm text-slate-300">
              {filteredItems[activeLightboxIndex].description || 'Official architectural rendering.'}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
