import React, { useState } from 'react';
import { Menu, X, Sparkles, ArrowRight } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  onOpenQuickTour: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  onOpenQuickTour
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Overview', desc: 'Corridor & Projects' },
    { id: 'brigade-barcelona', label: 'Brigade Barcelona', desc: '52-Storey Spanish Icon' },
    { id: 'godrej-epoque', label: 'Godrej Epoque', desc: '57-Storey Art Deco' },
    { id: 'sattva-lago', label: 'Sattva Lago', desc: '10-Acre Lagoon Estate' }
  ];

  const handleLinkClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-xl border-b border-slate-200/90 transition-all shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-4 sm:gap-8">
        {/* Zone 1: Brand wordmark (single text element) */}
        <button
          onClick={() => handleLinkClick('home')}
          className="text-lg sm:text-2xl font-bold tracking-tight text-slate-900 hover:text-blue-600 transition-colors whitespace-nowrap shrink-0 text-left cursor-pointer flex items-baseline gap-1.5"
        >
          <span className="font-extrabold tracking-tighter font-title text-xl sm:text-2xl text-slate-900">NEOPOLIS</span>
          <span className="font-semibold text-blue-600 text-[11px] sm:text-xs tracking-widest uppercase font-sans">LUXURY</span>
        </button>

        {/* Zone 2: 4-5 Clean single-line nav links (desktop) */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600">
          {navLinks.map((link) => {
            const isActive = currentPage === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`transition-colors whitespace-nowrap shrink-0 py-1 relative cursor-pointer ${
                  isActive
                    ? 'text-blue-600 font-semibold'
                    : 'text-slate-600 hover:text-blue-600'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: 1 primary action button */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <button
            onClick={onOpenQuickTour}
            className="px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-xl shadow-md shadow-blue-600/20 transition-all whitespace-nowrap shrink-0 cursor-pointer flex items-center gap-2 min-h-[40px] sm:min-h-[44px]"
          >
            <Sparkles className="w-3.5 h-3.5 text-blue-200" />
            <span>Site Visit</span>
          </button>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 text-slate-700 hover:text-blue-600 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center border border-slate-200"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-2xl border-b border-slate-200 px-4 pt-3 pb-6 animate-in slide-in-from-top-4 duration-200 shadow-xl">
          <div className="text-[10px] uppercase font-bold tracking-widest text-slate-400 px-2 mb-2">
            Explore Neopolis
          </div>
          <div className="flex flex-col space-y-1.5">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`w-full text-left px-3.5 py-3 rounded-xl transition-all cursor-pointer flex items-center justify-between min-h-[48px] ${
                    isActive
                      ? 'bg-blue-50 border border-blue-200 text-blue-700'
                      : 'bg-slate-50 border border-slate-200 text-slate-700 active:bg-slate-100'
                  }`}
                >
                  <div>
                    <span className="text-sm font-semibold block">{link.label}</span>
                    <span className="text-[11px] text-slate-500 block font-light mt-0.5">{link.desc}</span>
                  </div>
                  <ArrowRight className={`w-4 h-4 ${isActive ? 'text-blue-600' : 'text-slate-400'}`} />
                </button>
              );
            })}
          </div>

          <div className="pt-3 mt-3 border-t border-slate-100">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuickTour();
              }}
              className="w-full py-3 text-center text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-md shadow-blue-600/25"
            >
              Book Chauffeured Site Visit & Pricing
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
