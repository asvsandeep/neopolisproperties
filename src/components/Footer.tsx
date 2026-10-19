import React from 'react';
import { Shield, ArrowUpRight } from 'lucide-react';
import { PROJECTS_DATA, ProjectData } from '../data/projectsData';

interface FooterProps {
  onNavigateSection: (sectionId: string) => void;
  onSelectProject: (project: ProjectData) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateSection, onSelectProject }) => {
  return (
    <footer className="bg-[#0B111C] border-t border-[#C7A66A]/20 text-[#737780] text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 mb-12">
          {/* Brand & Overview */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex flex-col items-start">
              <span className="font-serif text-2xl font-bold tracking-[0.18em] text-[#FFFFFF] uppercase leading-none">
                NEOPOLIS
              </span>
              <span className="text-[10px] tracking-[0.3em] font-sans font-medium text-[#C7A66A] uppercase mt-1">
                LUXURY RESIDENCES
              </span>
            </div>
            <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed max-w-sm font-sans">
              The premier digital portfolio for ultra-luxury residential towers across Neopolis and Kokapet, Hyderabad. Showcasing landmark high-rise developments by India’s tier-one institutional builders.
            </p>
            <div className="flex items-center gap-2 pt-2 text-[#C7A66A] text-xs font-sans font-medium">
              <Shield className="w-4 h-4" />
              <span>Verified Developer Disclosures</span>
            </div>
          </div>

          {/* Featured Projects Column */}
          <div className="lg:col-span-4">
            <h4 className="text-white font-sans font-semibold mb-3 uppercase tracking-wider text-[11px] text-[#C7A66A]">
              Featured Neopolis Projects
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {PROJECTS_DATA.map((project) => (
                <button
                  key={project.id}
                  onClick={() => onSelectProject(project)}
                  className="text-left text-neutral-300 hover:text-[#C7A66A] transition-colors py-1 cursor-pointer flex items-center justify-between text-xs group"
                >
                  <span className="truncate">{project.name}</span>
                  <ArrowUpRight className="w-3 h-3 text-neutral-600 group-hover:text-[#C7A66A] transition-colors shrink-0" />
                </button>
              ))}
            </div>
          </div>

          {/* Quick Navigation & Office */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white font-sans font-semibold mb-3 uppercase tracking-wider text-[11px] text-[#C7A66A]">
              Quick Navigation
            </h4>
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs">
              <button
                onClick={() => onNavigateSection('hero')}
                className="text-neutral-300 hover:text-[#C7A66A] transition-colors cursor-pointer"
              >
                Home
              </button>
              <button
                onClick={() => onNavigateSection('projects')}
                className="text-neutral-300 hover:text-[#C7A66A] transition-colors cursor-pointer"
              >
                Projects
              </button>
              <button
                onClick={() => onNavigateSection('spotlight')}
                className="text-neutral-300 hover:text-[#C7A66A] transition-colors cursor-pointer"
              >
                Spotlights
              </button>
              <button
                onClick={() => onNavigateSection('location')}
                className="text-neutral-300 hover:text-[#C7A66A] transition-colors cursor-pointer"
              >
                Location
              </button>
              <button
                onClick={() => onNavigateSection('lifestyle')}
                className="text-neutral-300 hover:text-[#C7A66A] transition-colors cursor-pointer"
              >
                Lifestyle
              </button>
              <button
                onClick={() => onNavigateSection('about-neopolis')}
                className="text-neutral-300 hover:text-[#C7A66A] transition-colors cursor-pointer"
              >
                About Neopolis
              </button>
              <button
                onClick={() => onNavigateSection('contact')}
                className="text-neutral-300 hover:text-[#C7A66A] transition-colors cursor-pointer"
              >
                Contact
              </button>
            </div>

            <div className="pt-2 text-neutral-400 space-y-1">
              <p className="text-white font-medium">Advisory Pavilion</p>
              <p>Phase III Layout, Kokapet, Gandipet Mandal, Hyderabad 500075</p>
            </div>
          </div>
        </div>

        {/* Legal & Disclaimer */}
        <div className="pt-8 border-t border-white/10 text-[11px] text-[#737780] space-y-3 font-sans">
          <p className="leading-relaxed">
            Disclaimer: The information provided on this website is for informational and representational purposes only and is based on marketing material supplied by respective developers. It does not constitute an offer, contract, or legal commitment. Prospective purchasers are advised to verify all project details, approvals, specifications, and RERA registration directly with the respective builders before making any investment or purchase decisions.
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2 border-t border-white/5">
            <div>
              &copy; {new Date().getFullYear()} Neopolis Luxury Residences. All rights reserved.
            </div>
            <div className="flex items-center gap-4 text-neutral-400">
              <span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
              <span>·</span>
              <span className="hover:text-white transition-colors cursor-pointer">Terms of Consultation</span>
              <span>·</span>
              <span className="hover:text-white transition-colors cursor-pointer">RERA Compliance</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
