import React from 'react';
import { 
  Compass, 
  Clock, 
  MapPin, 
  Navigation, 
  Plane, 
  Building2, 
  Route, 
  ShieldCheck,
  Check
} from 'lucide-react';
import { LOCATION_DISTANCES, NEOPOLIS_CORRIDOR_ADVANTAGES } from '../data/projectsData';

export const LocationSection: React.FC = () => {
  return (
    <section id="location" className="py-20 lg:py-28 bg-[#F8F6F1] text-[#20242C] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-3">
          <span className="text-xs font-sans font-semibold tracking-[0.25em] text-[#C7A66A] uppercase block">
            Strategic Location & Infrastructure
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#101827] tracking-tight leading-[1.15]">
            Unrivaled Strategic Connectivity
          </h2>
          <p className="text-base text-[#737780] font-sans font-normal leading-relaxed">
            Situated in Kokapet, Neopolis is Hyderabad’s master-planned epicenter connecting global technology districts with high-speed, signal-free airport transit.
          </p>
        </div>

        {/* Travel Time Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {LOCATION_DISTANCES.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-md border border-neutral-200 shadow-xs hover:shadow-md transition-shadow duration-300 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-sans font-semibold text-[#C7A66A] uppercase tracking-wider">
                    <Clock className="w-4 h-4" />
                    <span>{item.travelTime}</span>
                  </div>
                  <span className="text-xs font-mono text-[#737780] bg-neutral-100 px-2 py-0.5 rounded-xs">
                    {item.distance}
                  </span>
                </div>

                <h3 className="text-lg font-serif font-medium text-[#101827]">
                  {item.destination}
                </h3>

                <p className="text-xs sm:text-sm text-[#737780] font-sans leading-relaxed">
                  {item.details}
                </p>
              </div>

              <div className="pt-3 border-t border-neutral-100 flex items-center gap-2 text-[11px] font-sans text-[#101827] font-medium">
                <Navigation className="w-3.5 h-3.5 text-[#C7A66A]" />
                <span>Via Outer Ring Road / Arterial Corridors</span>
              </div>
            </div>
          ))}
        </div>

        {/* Infrastructure Highlights Bento Strip */}
        <div className="bg-[#101827] text-white rounded-md p-8 sm:p-12 relative overflow-hidden">
          <div className="max-w-2xl mb-8 space-y-2">
            <span className="text-xs font-sans font-semibold tracking-widest text-[#C7A66A] uppercase">
              Next-Generation Urban Blueprint
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-normal text-white">
              Why Neopolis Kokapet Sets South India's Benchmark
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {NEOPOLIS_CORRIDOR_ADVANTAGES.map((adv, idx) => (
              <div key={idx} className="p-5 rounded-sm bg-white/[0.04] border border-white/10 space-y-3">
                <div className="w-8 h-8 rounded-sm bg-[#C7A66A]/20 flex items-center justify-center text-[#C7A66A]">
                  <Check className="w-4 h-4" />
                </div>
                <h4 className="text-base font-serif font-medium text-white">
                  {adv.title}
                </h4>
                <p className="text-xs text-neutral-300 font-sans leading-relaxed">
                  {adv.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
