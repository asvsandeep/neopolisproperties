import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProjectOverviewStrip } from './components/ProjectOverviewStrip';
import { FeaturedProjectsSection } from './components/FeaturedProjectsSection';
import { ProjectSpotlightSection } from './components/ProjectSpotlightSection';
import { LocationSection } from './components/LocationSection';
import { LifestyleSection } from './components/LifestyleSection';
import { AboutNeopolisSection } from './components/AboutNeopolisSection';
import { LeadCaptureSection } from './components/LeadCaptureSection';
import { Footer } from './components/Footer';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { PROJECTS_DATA, ProjectData } from './data/projectsData';
import { Building2, PhoneCall, Sparkles } from 'lucide-react';

export default function App() {
  const [selectedModalProject, setSelectedModalProject] = useState<ProjectData | null>(null);
  const [preselectedLeadProject, setPreselectedLeadProject] = useState<string>('all');
  const [preselectedLeadConfig, setPreselectedLeadConfig] = useState<string>('flexible');
  const [showMobileBottomBar, setShowMobileBottomBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show bottom quick actions bar after scrolling past hero section
      setShowMobileBottomBar(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll helper for on-page navigation
  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // When clicking "Enquire Now" on a card or spotlight
  const handleEnquireProject = (project: ProjectData, configuration?: string) => {
    setPreselectedLeadProject(project.name);
    if (configuration) {
      setPreselectedLeadConfig(configuration);
    }
    scrollToSection('contact');
  };

  // When clicking "Request a Callback" in Hero or Navbar
  const handleOpenGeneralEnquiry = () => {
    setPreselectedLeadProject('all');
    scrollToSection('contact');
  };

  // Detailed projects (the first 4)
  const detailedProjects = PROJECTS_DATA.filter(p => p.isDetailed);

  return (
    <div className="min-h-screen bg-[#F8F6F1] text-[#20242C] font-sans selection:bg-[#C7A66A]/30 selection:text-[#101827] overflow-x-hidden w-full relative">
      {/* 1. Sticky Navigation Bar */}
      <Navbar
        onOpenEnquiry={handleOpenGeneralEnquiry}
        onNavigateSection={scrollToSection}
      />

      <main className="w-full overflow-x-hidden">
        {/* 2. Hero Section */}
        <HeroSection
          onExploreProjects={() => scrollToSection('projects')}
          onRequestCallback={handleOpenGeneralEnquiry}
        />

        {/* 3. Project Overview Strip */}
        <ProjectOverviewStrip />

        {/* 4. Featured Projects Section (7 projects) */}
        <FeaturedProjectsSection
          projects={PROJECTS_DATA}
          onSelectProjectDetails={(project) => setSelectedModalProject(project)}
          onEnquireProject={handleEnquireProject}
        />

        {/* 5. In-Depth Project Spotlights & Floor Plans (4 detailed projects) */}
        <ProjectSpotlightSection
          detailedProjects={detailedProjects}
          onEnquireProject={handleEnquireProject}
        />

        {/* 6. Strategic Location & Connectivity */}
        <LocationSection />

        {/* 7. Luxury Lifestyle & Amenities (8 curated amenities) */}
        <LifestyleSection />

        {/* 8. About Neopolis Kokapet & FAQs */}
        <AboutNeopolisSection />

        {/* 9. Lead Capture & Private Advisory Form */}
        <LeadCaptureSection
          preselectedProject={preselectedLeadProject}
          preselectedConfig={preselectedLeadConfig}
          onLeadSuccess={({ name, project, refId }) => {
            // Success state tracked in component
          }}
        />
      </main>

      {/* 10. Quiet Luxury Footer */}
      <Footer
        onNavigateSection={scrollToSection}
        onSelectProject={(project) => {
          setSelectedModalProject(project);
        }}
      />

      {/* 11. Interactive Project Detail Modal */}
      <ProjectDetailModal
        project={selectedModalProject}
        onClose={() => setSelectedModalProject(null)}
        onEnquire={handleEnquireProject}
      />

      {/* 12. Floating Mobile Quick Action Bar (Bottom sticky for effortless lead enquiry on mobile) */}
      <div 
        className={`md:hidden fixed bottom-0 left-0 right-0 z-30 bg-[#101827]/95 backdrop-blur-lg border-t border-[#C7A66A]/30 px-4 py-2.5 transition-transform duration-300 shadow-2xl ${
          showMobileBottomBar ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <div className="flex items-center gap-2.5 max-w-md mx-auto">
          <button
            onClick={() => scrollToSection('projects')}
            className="flex-1 py-2.5 px-3 bg-white/10 hover:bg-white/15 active:bg-white/20 text-white text-xs font-sans font-medium uppercase tracking-wider rounded-sm flex items-center justify-center gap-1.5 border border-white/10"
          >
            <Building2 className="w-3.5 h-3.5 text-[#C7A66A]" />
            <span>View 7 Projects</span>
          </button>

          <button
            onClick={handleOpenGeneralEnquiry}
            className="flex-1 py-2.5 px-3 bg-[#C7A66A] hover:bg-[#d6b77d] active:bg-[#b89556] text-[#101827] text-xs font-sans font-semibold uppercase tracking-wider rounded-sm flex items-center justify-center gap-1.5 shadow-md shadow-[#C7A66A]/20"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Enquire Now</span>
          </button>
        </div>
      </div>
    </div>
  );
}
