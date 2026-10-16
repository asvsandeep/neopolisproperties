import React from 'react';
import { CheckCircle2, Download, ArrowLeft, Sparkles, Building2, Shield } from 'lucide-react';
import { PropertyId } from '../types';

interface ThankYouPageProps {
  leadId?: string;
  leadName?: string;
  onNavigateHome: () => void;
  onNavigateProperty: (id: PropertyId) => void;
}

export const ThankYouPage: React.FC<ThankYouPageProps> = ({
  leadId,
  leadName,
  onNavigateHome,
  onNavigateProperty
}) => {
  const handleDownloadBrochure = () => {
    // Generate a downloadable text/brochure summary file
    const content = `NEOPOLIS LUXURY RESIDENTIAL COLLECTION - HYDERABAD
=====================================================
Official Brochure & Project Summary Pack
Inquiry Reference: ${leadId || 'NEOPOLIS-LEAD'}
Recipient: ${leadName || 'Valued Buyer'}
Date: ${new Date().toLocaleDateString('en-IN')}

FEATURED DEVELOPMENTS IN NEOPOLIS, KOKAPET:
------------------------------------------
1. BRIGADE BARCELONA - NEOPOLIS
   Developer: Brigade Group
   Location: Neopolis Phase III, Kokapet, Hyderabad
   Total Land Area: ~4.04 Acres | 666 Units | 52 Floors
   Clubhouse: ~1.5 Lakh sq. ft. (150,000 sq. ft.)
   Configurations: 3 BHK, 3.5 BHK, 4 BHK (2,790 - 3,764 sft)
   Possession: July 2032
   Style: Spanish Architectural Grandeur

2. GODREJ EPOQUE - NEOPOLIS
   Developer: Godrej Properties
   Location: Heart of Neopolis, Kokapet, Hyderabad
   Floors: 57-Storey Landmark Towers
   Standout: Art Deco Design, Sky Bridge, Miyawaki Forest
   Amenities: Infinity Pool, Temperature-Controlled Indoor Pool, Observatory
   Proximity: 5 mins to Financial District, 10-15 mins to HITEC City

3. SATTVA LAGO - PHASE 2
   Developer: Sattva Group
   Location: Neopolis, Kokapet, Hyderabad
   Land Area: 10 Acres | 5 Towers | G+46 Floors | 1261 Units
   Open for Sale: Tower 3, Tower 4, Tower 5
   Configurations: 3 BHK, 3.5 BHK, 4 BHK (3100 - 4900 sft + Private Terraces)

SALES ADVISORY:
Executive Pavilion: Neopolis Phase III, Kokapet, Hyderabad
Official Inquiries: inquiries@neopolisluxury.in
`;

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Neopolis_Luxury_Projects_Brochure_${leadId || 'Official'}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl w-full bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 lg:p-12 text-center shadow-xl relative overflow-hidden">
        {/* Soft blue ambient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-24 w-80 h-80 bg-blue-100/60 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10">
          {/* Success Checkmark */}
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-50 border-2 border-blue-200 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-600 shadow-md shadow-blue-500/10">
            <CheckCircle2 className="w-10 h-10 sm:w-12 sm:h-12" />
          </div>

          <div className="inline-flex items-center gap-1.5 text-xs text-blue-700 font-semibold tracking-wider uppercase mb-2 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Inquiry Successfully Recorded</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-3 font-title">
            Thanks for contacting us!
          </h1>

          <p className="text-base sm:text-lg text-slate-700 font-normal max-w-lg mx-auto mb-3">
            We will get back to you soon.
          </p>

          <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto mb-6 leading-relaxed">
            {leadName ? `${leadName}, our` : 'Our'} Senior Neopolis Portfolio Director has received your inquiry details and will reach out to you within 15 minutes with verified floor plans and developer pricing.
          </p>

          {leadId && (
            <div className="inline-block bg-slate-50 border border-slate-200 rounded-xl px-4 py-2 text-xs text-slate-600 font-mono-numbers mb-6">
              Inquiry Tracking Reference: <span className="text-blue-700 font-bold">{leadId}</span>
            </div>
          )}

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8">
            <button
              onClick={handleDownloadBrochure}
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-6 py-3.5 min-h-[48px] bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold rounded-xl text-sm transition-all shadow-md shadow-blue-600/25 cursor-pointer active:scale-[0.98]"
            >
              <Download className="w-4 h-4" />
              <span>Download Digital Brochure Pack</span>
            </button>

            <button
              onClick={onNavigateHome}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3.5 min-h-[48px] bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-800 font-semibold rounded-xl text-sm transition-all cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Return to Homepage</span>
            </button>
          </div>

          {/* Quick jump to project pages */}
          <div className="pt-6 border-t border-slate-100">
            <p className="text-xs text-slate-500 mb-3">Explore individual projects in Neopolis:</p>
            <div className="flex flex-wrap items-center justify-center gap-2">
              <button
                onClick={() => onNavigateProperty('brigade-barcelona')}
                className="px-3.5 py-2 text-xs text-slate-700 bg-slate-50 hover:bg-blue-50 hover:text-blue-700 border border-slate-200 rounded-lg transition-colors cursor-pointer"
              >
                Brigade Barcelona (52 Fl)
              </button>
              <button
                onClick={() => onNavigateProperty('godrej-epoque')}
                className="px-3.5 py-2 text-xs text-slate-700 bg-slate-50 hover:bg-blue-50 hover:text-blue-700 border border-slate-200 rounded-lg transition-colors cursor-pointer"
              >
                Godrej Epoque (57 Fl)
              </button>
              <button
                onClick={() => onNavigateProperty('sattva-lago')}
                className="px-3.5 py-2 text-xs text-slate-700 bg-slate-50 hover:bg-blue-50 hover:text-blue-700 border border-slate-200 rounded-lg transition-colors cursor-pointer"
              >
                Sattva Lago Phase 2 (10 Ac)
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
