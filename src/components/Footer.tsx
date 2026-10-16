import React from 'react';
import { TableProperties, Shield, ArrowUpRight } from 'lucide-react';
import { PropertyId } from '../types';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#081329] border-t border-slate-800 text-slate-300 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 mb-12">
          {/* Brand & Overview */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xl font-bold text-white tracking-tight flex items-baseline gap-1.5 font-title">
              <span>NEOPOLIS</span>
              <span className="font-semibold text-blue-400 text-[11px] tracking-widest uppercase font-sans">LUXURY</span>
            </span>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              The authoritative luxury real estate portal for Neopolis, Kokapet, Hyderabad. Showcasing landmark high-rise residences by Brigade Group, Godrej Properties, and Sattva Group.
            </p>
          </div>

          {/* Featured Projects */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-semibold mb-3 uppercase tracking-wider text-[11px]">
              Neopolis Projects
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate('brigade-barcelona')}
                  className="hover:text-blue-400 transition-colors text-left cursor-pointer flex items-center gap-1 text-slate-300"
                >
                  <span>Brigade Barcelona</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-500" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('godrej-epoque')}
                  className="hover:text-blue-400 transition-colors text-left cursor-pointer flex items-center gap-1 text-slate-300"
                >
                  <span>Godrej Epoque</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-500" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('sattva-lago')}
                  className="hover:text-blue-400 transition-colors text-left cursor-pointer flex items-center gap-1 text-slate-300"
                >
                  <span>Sattva Lago Phase 2</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-500" />
                </button>
              </li>
            </ul>
          </div>

          {/* Advisory & Office */}
          <div className="lg:col-span-4">
            <h4 className="text-white font-semibold mb-3 uppercase tracking-wider text-[11px]">
              Advisory Desk
            </h4>
            <div className="space-y-2 text-slate-400">
              <p className="text-white font-medium">Neopolis Kokapet Showcase Pavilion</p>
              <p>Phase III, Neopolis Layout, Kokapet, Gandipet Mandal, Hyderabad 500075</p>
              <p className="text-blue-400 pt-1 font-medium">inquiries@neopolisluxury.in</p>
            </div>
          </div>
        </div>

        {/* Legal & RERA Notice */}
        <div className="pt-8 border-t border-slate-800/80 text-[11px] text-slate-400 space-y-3">
          <p className="leading-relaxed">
            Disclaimer: All project visuals, specifications, dimensions, amenities, and delivery dates mentioned for Brigade Barcelona, Godrej Epoque, and Sattva Lago Phase 2 are based on builder disclosures, architectural concepts, and authorized RERA filings. Prices exclude applicable taxes, registration, and statutory stamp duty. This portal acts as an authorized marketing showcase and connects inquiries directly to the respective developers’ priority sales teams.
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
            <div>
              &copy; {new Date().getFullYear()} Neopolis Luxury Living Hyderabad. All rights reserved.
            </div>
            <div className="flex items-center gap-4 text-slate-300">
              <span className="flex items-center gap-1">
                <Shield className="w-3.5 h-3.5 text-blue-400" />
                RERA Authorized Channel Partner
              </span>
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
