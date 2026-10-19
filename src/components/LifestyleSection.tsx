import React from 'react';
import { LIFESTYLE_AMENITIES } from '../data/projectsData';
import { Sparkles, Check } from 'lucide-react';

export const LifestyleSection: React.FC = () => {
  return (
    <section id="lifestyle" className="py-14 sm:py-20 lg:py-28 bg-[#101827] text-white relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#C7A66A]/5 blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-14 space-y-2 sm:space-y-3">
          <span className="text-[11px] sm:text-xs font-sans font-semibold tracking-[0.2em] sm:tracking-[0.25em] text-[#C7A66A] uppercase block">
            Elevated Living & Leisure
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-normal text-white tracking-tight leading-[1.15]">
            World-Class Lifestyle Amenities
          </h2>
          <p className="text-sm sm:text-base text-[#737780] font-sans font-normal leading-relaxed">
            Designed for an uncompromising standard of living, residential developments across Neopolis curate sprawling clubhouses, wellness sanctuaries, and high-altitude leisure decks.
          </p>
        </div>

        {/* 8 Curated Lifestyle Amenities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {LIFESTYLE_AMENITIES.map((amenity) => (
            <div
              key={amenity.id}
              className="bg-white/[0.03] border border-white/10 rounded-md overflow-hidden hover:border-[#C7A66A]/40 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* Visual Asset Container */}
                <div className="aspect-[16/10] overflow-hidden relative bg-[#182236]">
                  <img
                    src={amenity.image}
                    alt={amenity.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#101827] via-[#101827]/40 to-transparent" />
                  
                  <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3">
                    <span className="text-[9px] sm:text-[10px] font-sans font-medium uppercase tracking-wider text-[#C7A66A] bg-[#101827]/80 backdrop-blur-xs px-2.5 py-1 rounded-xs border border-[#C7A66A]/20">
                      {amenity.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-5 space-y-2 sm:space-y-3">
                  <h3 className="text-base sm:text-lg font-serif font-normal text-white group-hover:text-[#C7A66A] transition-colors">
                    {amenity.title}
                  </h3>
                  <p className="text-xs text-[#737780] font-sans leading-relaxed">
                    {amenity.description}
                  </p>
                </div>
              </div>

              {/* Amenity Features Checklist */}
              <div className="px-4 sm:px-5 pb-4 sm:pb-5 pt-2 border-t border-white/5 space-y-1.5">
                {amenity.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-[11px] text-neutral-300 font-sans">
                    <Check className="w-3 h-3 text-[#C7A66A] shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
