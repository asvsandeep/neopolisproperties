import React from 'react';
import { Building, Sparkles, MapPin, ChevronRight, Phone } from 'lucide-react';

interface HeroSectionProps {
  onExploreProjects: () => void;
  onRequestCallback: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreProjects,
  onRequestCallback
}) => {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] sm:min-h-screen flex items-center justify-center pt-24 sm:pt-28 pb-16 sm:pb-20 overflow-hidden bg-[#101827]"
    >
      {/* Background Architectural Imagery with Multi-Layer Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=2000&q=90"
          alt="Luxury high-rise residential architecture in Neopolis Hyderabad"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000"
          onError={(e) => {
            (e.target as HTMLElement).style.display = 'none';
          }}
        />
        {/* Deep Midnight Navy Overlay with Architectural Scrim */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#101827]/95 via-[#101827]/85 to-[#101827]/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#101827] via-transparent to-[#101827]/40" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-6 sm:py-16">
        <div className="max-w-3xl space-y-5 sm:space-y-8 text-left">
          {/* Small Top Label */}
          <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-xs bg-[#101827]/90 border border-[#C7A66A]/30 backdrop-blur-md">
            <span className="text-[10px] sm:text-xs font-sans font-semibold tracking-[0.2em] sm:tracking-[0.25em] text-[#C7A66A] uppercase">
              HYDERABAD’S PREMIUM ADDRESS
            </span>
          </div>

          {/* Main Headline (Editorial Serif with responsive sizing) */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-normal text-[#FFFFFF] tracking-tight leading-[1.14] sm:leading-[1.1] break-words">
            Discover Luxury Living in <span className="italic text-[#C7A66A] font-light">Neopolis</span>.
          </h1>

          {/* Supporting Text */}
          <p className="text-sm sm:text-lg lg:text-xl text-[#F8F6F1]/85 font-sans font-normal leading-relaxed max-w-2xl">
            Explore an exclusive collection of premium residences in Kokapet, Hyderabad’s emerging luxury real estate destination.
          </p>

          {/* Three Value Propositions (Stacks gracefully on mobile) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3.5 pt-1 sm:pt-2 max-w-2xl">
            <div className="flex items-center gap-2.5 sm:gap-3 p-3 sm:p-3.5 rounded-sm bg-white/[0.04] border border-white/10 backdrop-blur-sm">
              <Building className="w-4 h-4 text-[#C7A66A] shrink-0" />
              <span className="text-xs font-sans font-medium text-[#FFFFFF]/90">
                Premium High-Rise Residences
              </span>
            </div>

            <div className="flex items-center gap-2.5 sm:gap-3 p-3 sm:p-3.5 rounded-sm bg-white/[0.04] border border-white/10 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-[#C7A66A] shrink-0" />
              <span className="text-xs font-sans font-medium text-[#FFFFFF]/90">
                Luxury Lifestyle & Amenities
              </span>
            </div>

            <div className="flex items-center gap-2.5 sm:gap-3 p-3 sm:p-3.5 rounded-sm bg-white/[0.04] border border-white/10 backdrop-blur-sm">
              <MapPin className="w-4 h-4 text-[#C7A66A] shrink-0" />
              <span className="text-xs font-sans font-medium text-[#FFFFFF]/90">
                Connected Urban Living
              </span>
            </div>
          </div>

          {/* CTAs (Full width on mobile, side-by-side on tablet/desktop) */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-3 sm:pt-4">
            <button
              onClick={onExploreProjects}
              className="w-full sm:w-auto px-7 py-3.5 sm:py-4 bg-[#C7A66A] hover:bg-[#d6b77d] active:bg-[#b89556] text-[#101827] text-xs sm:text-sm font-sans font-semibold tracking-wider uppercase rounded-sm transition-all shadow-xl shadow-[#C7A66A]/20 cursor-pointer flex items-center justify-center gap-2 group"
            >
              <span>Explore Projects</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onRequestCallback}
              className="w-full sm:w-auto px-6 py-3.5 sm:py-4 border border-[#C7A66A]/60 hover:border-[#C7A66A] hover:bg-[#C7A66A]/10 active:bg-[#C7A66A]/20 text-[#FFFFFF] text-xs sm:text-sm font-sans font-medium tracking-wider uppercase rounded-sm transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-[#C7A66A]" />
              <span>Request a Callback</span>
            </button>
          </div>
        </div>
      </div>

      {/* Refined Scroll-Down Indicator (Hidden on very short mobile screens to prevent overlap) */}
      <div className="hidden md:flex absolute bottom-5 left-1/2 -translate-x-1/2 z-10 flex-col items-center gap-1.5 opacity-70 hover:opacity-100 transition-opacity">
        <button
          onClick={onExploreProjects}
          className="flex flex-col items-center gap-1 text-slate-300 text-[10px] uppercase font-sans tracking-widest cursor-pointer"
          aria-label="Scroll to featured projects"
        >
          <span>Scroll</span>
          <div className="w-4 h-7 rounded-full border border-white/30 flex items-start justify-center p-1">
            <div className="w-1 h-1.5 rounded-full bg-[#C7A66A] animate-bounce" />
          </div>
        </button>
      </div>
    </section>
  );
};
