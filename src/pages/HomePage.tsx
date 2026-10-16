import React from 'react';
import { 
  Building2, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Award, 
  ShieldCheck 
} from 'lucide-react';
import { PROPERTIES, NEOPOLIS_WHY_INVEST_FACTORS } from '../data/properties';
import { PropertyId } from '../types';
import { LeadCaptureForm } from '../components/LeadCaptureForm';

interface HomePageProps {
  onNavigateProperty: (id: PropertyId) => void;
  onLeadSubmitted: (leadId: string, leadName: string) => void;
  onOpenQuickTour: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigateProperty,
  onLeadSubmitted,
  onOpenQuickTour
}) => {
  return (
    <div className="space-y-14 lg:space-y-20 pb-16">
      {/* DIVISION 1: TOP HERO SECTION (Luminous Blue & White Ambient Aesthetic) */}
      <section className="relative pt-8 sm:pt-16 pb-6 overflow-hidden">
        {/* Soft light blur background lights */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[650px] h-[300px] bg-blue-400/10 blur-[130px] rounded-full pointer-events-none" />
        <div className="absolute top-1/3 left-1/4 w-[350px] h-[200px] bg-sky-300/15 blur-[90px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto space-y-4 sm:space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 border border-blue-200/90 rounded-full text-xs font-semibold text-blue-700 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>Hyderabad’s Premier High-Rise Corridor</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-normal text-slate-900 tracking-tight leading-[1.2] sm:leading-[1.18] font-title">
              Neopolis, Kokapet: The Pinnacle of Skyline Luxury
            </h1>

            <p className="text-base sm:text-lg text-slate-600 font-normal max-w-3xl mx-auto leading-relaxed">
              Explore three landmark architectural residential developments defining South India’s most prestigious address: <strong className="text-slate-900 font-semibold">Brigade Barcelona</strong>, <strong className="text-slate-900 font-semibold">Godrej Epoque</strong>, and <strong className="text-slate-900 font-semibold">Sattva Lago Phase 2</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* DIVISION 2: TOP LEAD CAPTURE FORM (Pristine White Luxury Division) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-1 sm:p-2 bg-gradient-to-r from-blue-100 via-sky-50 to-indigo-100 rounded-3xl border border-blue-200/70 shadow-lg shadow-blue-500/5">
          <LeadCaptureForm
            variant="top"
            defaultProperty="all"
            sourcePageName="Home Page (Top Banner Form)"
            onSubmitted={onLeadSubmitted}
          />
        </div>
      </section>

      {/* DIVISION 3: FEATURED NEOPOLIS LUXURY PROPERTIES (Soft Ice-Blue Luxury Division) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#f1f6fd] border border-blue-200/70 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm relative overflow-hidden">
          {/* Subtle light blur ambient corner glow */}
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-blue-300/15 rounded-full blur-[100px] pointer-events-none" />

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-10 relative z-10">
            <div>
              <div className="flex items-center gap-2 text-xs text-blue-600 font-semibold tracking-wider uppercase mb-1">
                <Building2 className="w-3.5 h-3.5" />
                <span>Flagship Developments in Kokapet</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl text-slate-900 tracking-tight font-title">
                Featured Neopolis Luxury Properties
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm mt-1 max-w-xl">
                Iconic architectural landmarks offering monumental clubhouses and elite high-rise living.
              </p>
            </div>
            <span className="text-xs text-blue-700 font-semibold bg-white px-3.5 py-1.5 rounded-xl border border-blue-200 shadow-xs shrink-0">
              3 Verified RERA Developments
            </span>
          </div>

          {/* Project Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch relative z-10">
            {PROPERTIES.map((property) => (
              <div
                key={property.id}
                className="bg-white border border-slate-200 hover:border-blue-500 rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-blue-500/10 group"
              >
                <div>
                  {/* Property Image Banner */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                    <img
                      src={property.gallery[0]?.url || 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80'}
                      alt={property.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm border border-slate-200 px-3 py-1 rounded-lg text-xs font-semibold text-slate-800 shadow-xs">
                      {property.developer}
                    </div>
                  </div>

                  {/* Strictly: Title, Short Description, and 2 Points About Property */}
                  <div className="p-5 sm:p-6 space-y-4">
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors font-title">
                      {property.name}
                    </h3>

                    {/* Short Description */}
                    <p className="text-xs text-slate-600 leading-relaxed font-light line-clamp-3">
                      {property.summary}
                    </p>

                    {/* 2 Points About Property */}
                    <div className="space-y-2 pt-3 border-t border-slate-100">
                      {property.keyHighlights.slice(0, 2).map((point, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                          <span className="line-clamp-2">{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Button: "Explore {property name} details" */}
                <div className="p-5 sm:p-6 pt-0">
                  <button
                    onClick={() => onNavigateProperty(property.id)}
                    className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold rounded-xl text-xs transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-blue-600/20 active:scale-[0.99]"
                  >
                    <span>Explore {property.name} details</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIVISION 4: STRATEGIC REAL ESTATE INTELLIGENCE (Crisp White Card Division) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-sm relative overflow-hidden">
          {/* Subtle light blur accent orb */}
          <div className="absolute -top-16 -right-16 w-72 h-72 bg-blue-100/60 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl mb-10 relative z-10">
            <span className="text-xs text-blue-600 font-semibold uppercase tracking-wider block mb-2">
              Strategic Real Estate Intelligence
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl text-slate-900 tracking-tight font-title">
              Why Neopolis Kokapet is South India&apos;s Most Valuable Micro-Market
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-3 leading-relaxed">
              Designed from the ground up by the Hyderabad Metropolitan Development Authority (HMDA), Neopolis is Telangana’s flagship 533-acre greenfield city. It represents the highest planned urban density and infrastructure standards in India.
            </p>
          </div>

          {/* 4 Pillars Grid (Clean, Without the removed 4 bento items) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6 relative z-10">
            {NEOPOLIS_WHY_INVEST_FACTORS.map((factor) => (
              <div
                key={factor.number}
                className="bg-[#f8fafc] border border-slate-200/90 hover:border-blue-400 rounded-2xl p-6 space-y-3 transition-colors shadow-xs"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-1 rounded">
                    {factor.number}
                  </span>
                  <Award className="w-4 h-4 text-blue-600" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 font-title">{factor.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">{factor.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIVISION 5: SIDE-BY-SIDE COMPARATIVE SPECIFICATIONS MATRIX (Refined Ice-Blue Division) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#edf4fc] border border-blue-200/70 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-6">
            <div>
              <span className="text-xs text-blue-600 font-semibold uppercase tracking-wider block mb-1">
                Side-by-Side Analysis
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight font-title">
                Comparison Matrix: Neopolis Luxury High-Rises
              </h2>
            </div>
            <div className="sm:hidden inline-flex items-center gap-1.5 text-[11px] text-blue-700 font-medium">
              <span>← Swipe horizontally to compare towers →</span>
            </div>
          </div>

          <div className="overflow-x-auto border border-slate-200 rounded-2xl bg-white shadow-sm scrollbar-thin">
            <table className="w-full text-left text-xs text-slate-700">
              <thead className="bg-[#1e3a8a] text-white border-b border-blue-900 uppercase tracking-wider text-[11px]">
                <tr>
                  <th className="p-4 font-bold">Key Specification</th>
                  <th className="p-4 text-blue-100 font-bold">Brigade Barcelona</th>
                  <th className="p-4 text-blue-100 font-bold">Godrej Epoque</th>
                  <th className="p-4 text-blue-100 font-bold">Sattva Lago (Phase 2)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="hover:bg-blue-50/50">
                  <td className="p-4 font-semibold text-slate-900">Developer</td>
                  <td className="p-4 font-medium text-slate-700">Brigade Group</td>
                  <td className="p-4 font-medium text-slate-700">Godrej Properties</td>
                  <td className="p-4 font-medium text-slate-700">Sattva Group</td>
                </tr>
                <tr className="hover:bg-blue-50/50">
                  <td className="p-4 font-semibold text-slate-900">Architectural Style</td>
                  <td className="p-4">Spanish Architecture</td>
                  <td className="p-4">Iconic Art Deco</td>
                  <td className="p-4">Biophilic Waterfront</td>
                </tr>
                <tr className="hover:bg-blue-50/50">
                  <td className="p-4 font-semibold text-slate-900">Land Parcel Area</td>
                  <td className="p-4">Approx 4.04 Acres</td>
                  <td className="p-4">High-Rise Enclave</td>
                  <td className="p-4">10 Acres</td>
                </tr>
                <tr className="hover:bg-blue-50/50">
                  <td className="p-4 font-semibold text-slate-900">Building Structure</td>
                  <td className="p-4">52 Floors (T-Shaped Mono Tower)</td>
                  <td className="p-4">57 Storey Landmark Towers</td>
                  <td className="p-4">G+46 Floors (5 Towers)</td>
                </tr>
                <tr className="hover:bg-blue-50/50">
                  <td className="p-4 font-semibold text-slate-900">Total Units</td>
                  <td className="p-4 font-mono-numbers">666 Residences</td>
                  <td className="p-4">Exclusive Curated Units</td>
                  <td className="p-4 font-mono-numbers">1,261 Residences</td>
                </tr>
                <tr className="hover:bg-blue-50/50">
                  <td className="p-4 font-semibold text-slate-900">Current Availability</td>
                  <td className="p-4">Select Upper Sky Floors</td>
                  <td className="p-4">Curated Tower Inventory</td>
                  <td className="p-4 text-blue-700 font-semibold">Tower 3, 4 & 5 Open</td>
                </tr>
                <tr className="hover:bg-blue-50/50">
                  <td className="p-4 font-semibold text-slate-900">Apartment Configurations</td>
                  <td className="p-4">3, 3.5 & 4 BHK</td>
                  <td className="p-4">3, 3.5, 4 BHK & Sky Mansions</td>
                  <td className="p-4">3, 3.5 & 4 BHK + Terraces</td>
                </tr>
                <tr className="hover:bg-blue-50/50">
                  <td className="p-4 font-semibold text-slate-900">Area Range (Super Built-Up)</td>
                  <td className="p-4 font-mono-numbers font-medium text-slate-800">2,790 – 3,764 sft</td>
                  <td className="p-4 font-mono-numbers font-medium text-slate-800">2,850 – 4,200 sft</td>
                  <td className="p-4 font-mono-numbers font-medium text-slate-800">3,100 – 4,900 sft</td>
                </tr>
                <tr className="hover:bg-blue-50/50">
                  <td className="p-4 font-semibold text-slate-900">Clubhouse & Amenities</td>
                  <td className="p-4 font-semibold text-blue-700">~1.5 Lakh sq. ft.</td>
                  <td className="p-4">100,000+ sq. ft. + Sky Bridge</td>
                  <td className="p-4">120,000+ sq. ft. Lago Club</td>
                </tr>
                <tr className="hover:bg-blue-50/50">
                  <td className="p-4 font-semibold text-slate-900">Possession Commitment</td>
                  <td className="p-4 font-mono-numbers font-medium">July 2032</td>
                  <td className="p-4 font-mono-numbers font-medium">December 2030</td>
                  <td className="p-4 font-mono-numbers font-medium">March 2031 (Pre-Launch)</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-4 font-semibold text-slate-900">Direct Actions</td>
                  <td className="p-4">
                    <button
                      onClick={() => onNavigateProperty('brigade-barcelona')}
                      className="text-blue-600 hover:text-blue-800 font-bold cursor-pointer"
                    >
                      View Brigade &rarr;
                    </button>
                  </td>
                  <td className="p-4">
                    <button
                      onClick={() => onNavigateProperty('godrej-epoque')}
                      className="text-blue-600 hover:text-blue-800 font-bold cursor-pointer"
                    >
                      View Godrej &rarr;
                    </button>
                  </td>
                  <td className="p-4">
                    <button
                      onClick={() => onNavigateProperty('sattva-lago')}
                      className="text-blue-600 hover:text-blue-800 font-bold cursor-pointer"
                    >
                      View Sattva Lago &rarr;
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* DIVISION 6: FREQUENTLY ASKED QUESTIONS (Pristine White Division) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="text-center">
              <span className="text-xs text-blue-600 font-semibold uppercase tracking-wider block mb-1">
                Investor & Buyer Guide
              </span>
              <h2 className="text-2xl sm:text-3xl text-slate-900 tracking-tight font-title">
                Frequently Asked Questions About Neopolis
              </h2>
            </div>

            <div className="space-y-4">
              <div className="bg-[#f8fafc] border border-slate-200 rounded-2xl p-5 shadow-xs">
                <h4 className="text-sm font-bold text-slate-900 mb-2 font-title">
                  What makes Neopolis Kokapet different from other luxury areas in Hyderabad like Jubilee Hills or Gachibowli?
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed font-light">
                  Neopolis is a 533-acre planned greenfield layout created with master civic planning: 36m to 45m arterial avenues, zero overhead cables, automated stormwater and water recycling systems, dedicated cycle tracks, and unrestricted FSI enabling soaring 50+ storey architectural masterpieces. Unlike older congested zones, it features direct signal-free ORR access and proximity to Gandipet lake.
                </p>
              </div>

              <div className="bg-[#f8fafc] border border-slate-200 rounded-2xl p-5 shadow-xs">
                <h4 className="text-sm font-bold text-slate-900 mb-2 font-title">
                  Are Brigade Barcelona, Godrej Epoque, and Sattva Lago RERA registered?
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed font-light">
                  Yes. Brigade Barcelona and Godrej Epoque hold full RERA sanctions and HMDA technical approvals. Sattva Lago Phase 2 is currently in its authorized pre-launch registration phase with Tower 3, Tower 4, and Tower 5 released for priority allotments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DIVISION 7: BOTTOM LEAD CAPTURE FORM */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <LeadCaptureForm
          variant="bottom"
          defaultProperty="all"
          sourcePageName="Home Page (Bottom Inquiry Suite)"
          onSubmitted={onLeadSubmitted}
        />
      </section>
    </div>
  );
};
