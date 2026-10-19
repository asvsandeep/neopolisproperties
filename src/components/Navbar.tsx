import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Phone } from 'lucide-react';

interface NavbarProps {
  onOpenEnquiry: (projectName?: string) => void;
  onNavigateSection: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEnquiry, onNavigateSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Home', target: 'hero' },
    { label: 'Projects', target: 'projects' },
    { label: 'Spotlights', target: 'spotlight' },
    { label: 'Location', target: 'location' },
    { label: 'Lifestyle', target: 'lifestyle' },
    { label: 'About Neopolis', target: 'about-neopolis' },
    { label: 'Contact', target: 'contact' },
  ];

  const handleLinkClick = (target: string) => {
    setMobileMenuOpen(false);
    onNavigateSection(target);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 w-full ${
        scrolled
          ? 'bg-[#101827]/95 backdrop-blur-md shadow-xl border-b border-[#C7A66A]/20 py-3'
          : 'bg-gradient-to-b from-[#101827]/95 via-[#101827]/80 to-transparent py-4 sm:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Typographic Logo */}
        <button
          onClick={() => handleLinkClick('hero')}
          className="text-left group cursor-pointer flex flex-col items-start transition-opacity hover:opacity-90 shrink-0"
          aria-label="Neopolis Luxury Residences Home"
        >
          <span className="font-serif text-lg sm:text-2xl font-bold tracking-[0.14em] sm:tracking-[0.18em] text-[#FFFFFF] group-hover:text-[#C7A66A] transition-colors uppercase leading-none">
            NEOPOLIS
          </span>
          <span className="text-[8px] sm:text-[10px] tracking-[0.25em] sm:tracking-[0.3em] font-sans font-medium text-[#C7A66A] uppercase mt-0.5 sm:mt-1">
            LUXURY RESIDENCES
          </span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7 text-[13px] font-sans font-medium tracking-wide text-[#FFFFFF]/80">
          {navLinks.map((link) => (
            <button
              key={link.target}
              onClick={() => handleLinkClick(link.target)}
              className="hover:text-[#C7A66A] transition-colors cursor-pointer relative py-1"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Primary CTA Button for Desktop */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={() => handleLinkClick('projects')}
            className="px-4 lg:px-5 py-2.5 bg-[#C7A66A] hover:bg-[#d6b77d] active:bg-[#b89556] text-[#101827] text-xs font-semibold tracking-wider uppercase rounded-sm transition-all shadow-md shadow-[#C7A66A]/10 hover:shadow-lg hover:shadow-[#C7A66A]/20 cursor-pointer flex items-center gap-2 group"
          >
            <span>Explore Properties</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* Mobile Header Actions (Enquire button + Hamburger) */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={() => handleLinkClick('contact')}
            className="px-2.5 py-1.5 bg-[#C7A66A] text-[#101827] text-[10px] font-bold tracking-wider uppercase rounded-xs"
          >
            Enquire
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#FFFFFF] hover:text-[#C7A66A] rounded-sm transition-colors cursor-pointer min-w-[40px] min-h-[40px] flex items-center justify-center"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Tablet Hamburger (hidden on lg, visible on md/sm) */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="hidden sm:flex lg:hidden p-2 text-[#FFFFFF] hover:text-[#C7A66A] rounded-sm transition-colors cursor-pointer"
          aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu (Full backdrop, scrollable, accessible) */}
      {mobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-x-0 top-[57px] sm:top-[68px] bottom-0 bg-[#101827]/98 backdrop-blur-2xl border-b border-[#C7A66A]/30 px-6 py-6 overflow-y-auto flex flex-col justify-between"
          style={{ height: 'calc(100vh - 57px)' }}
        >
          <div className="flex flex-col space-y-1 divide-y divide-white/5">
            {navLinks.map((link) => (
              <button
                key={link.target}
                onClick={() => handleLinkClick(link.target)}
                className="w-full text-left py-3.5 text-base font-serif text-[#FFFFFF]/90 hover:text-[#C7A66A] transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ArrowRight className="w-4 h-4 text-[#C7A66A]/60" />
              </button>
            ))}
          </div>

          <div className="pt-6 mt-6 border-t border-white/10 space-y-3 pb-8">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handleLinkClick('projects');
              }}
              className="w-full py-3.5 bg-[#C7A66A] hover:bg-[#d6b77d] text-[#101827] text-xs font-semibold tracking-wider uppercase rounded-sm text-center transition-colors shadow-lg"
            >
              Explore Properties
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEnquiry();
              }}
              className="w-full py-3.5 border border-[#C7A66A]/50 text-[#FFFFFF] hover:text-[#C7A66A] text-xs font-medium tracking-wider uppercase rounded-sm text-center transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-[#C7A66A]" />
              <span>Request a Callback</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
