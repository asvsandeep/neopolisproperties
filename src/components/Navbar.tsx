import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Building2 } from 'lucide-react';

interface NavbarProps {
  onOpenEnquiry: (projectName?: string) => void;
  onNavigateSection: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEnquiry, onNavigateSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', target: 'hero' },
    { label: 'Projects', target: 'projects' },
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
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#101827]/95 backdrop-blur-md shadow-xl border-b border-[#C7A66A]/20 py-3.5'
          : 'bg-gradient-to-b from-[#101827]/90 via-[#101827]/70 to-transparent py-5 sm:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Typographic Logo */}
        <button
          onClick={() => handleLinkClick('hero')}
          className="text-left group cursor-pointer flex flex-col items-start transition-opacity hover:opacity-90"
          aria-label="Neopolis Luxury Residences Home"
        >
          <span className="font-serif text-xl sm:text-2xl font-bold tracking-[0.18em] text-[#FFFFFF] group-hover:text-[#C7A66A] transition-colors uppercase leading-none">
            NEOPOLIS
          </span>
          <span className="text-[9px] sm:text-[10px] tracking-[0.3em] font-sans font-medium text-[#C7A66A] uppercase mt-1">
            LUXURY RESIDENCES
          </span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 text-[13px] font-sans font-medium tracking-wide text-[#FFFFFF]/80">
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

        {/* Primary CTA Button */}
        <div className="hidden sm:flex items-center gap-4">
          <button
            onClick={() => handleLinkClick('projects')}
            className="px-5 py-2.5 bg-[#C7A66A] hover:bg-[#d6b77d] active:bg-[#b89556] text-[#101827] text-xs font-semibold tracking-wider uppercase rounded-md transition-all shadow-md shadow-[#C7A66A]/10 hover:shadow-lg hover:shadow-[#C7A66A]/20 cursor-pointer flex items-center gap-2 group"
          >
            <span>Explore Properties</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-[#FFFFFF] hover:text-[#C7A66A] rounded-lg transition-colors cursor-pointer"
          aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#101827]/98 backdrop-blur-xl border-b border-[#C7A66A]/30 px-6 pt-5 pb-8 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-3 pt-2">
            {navLinks.map((link) => (
              <button
                key={link.target}
                onClick={() => handleLinkClick(link.target)}
                className="w-full text-left py-2.5 text-sm font-sans font-medium text-[#FFFFFF]/90 hover:text-[#C7A66A] border-b border-white/5 transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ArrowRight className="w-4 h-4 text-[#C7A66A]/60" />
              </button>
            ))}
          </div>

          <div className="pt-6 mt-4">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handleLinkClick('projects');
              }}
              className="w-full py-3 bg-[#C7A66A] hover:bg-[#d6b77d] text-[#101827] text-xs font-semibold tracking-wider uppercase rounded-md text-center transition-colors shadow-lg"
            >
              Explore Properties
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEnquiry();
              }}
              className="w-full mt-2.5 py-3 border border-[#C7A66A]/40 text-[#FFFFFF] hover:text-[#C7A66A] text-xs font-medium tracking-wider uppercase rounded-md text-center transition-colors"
            >
              Request a Callback
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
