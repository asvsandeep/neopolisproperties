import React, { useState } from 'react';
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

export default function App() {
  const [selectedModalProject, setSelectedModalProject] = useState<ProjectData | null>(null);
  const [preselectedLeadProject, setPreselectedLeadProject] = useState<string>('all');
  const [preselectedLeadConfig, setPreselectedLeadConfig] = useState<string>('flexible');

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
    <div className="min-h-screen bg-[#F8F6F1] text-[#20242C] font-sans selection:bg-[#C7A66A]/30 selection:text-[#101827]">
      {/* 1. Sticky Navigation Bar */}
      <Navbar
        onOpenEnquiry={handleOpenGeneralEnquiry}
        onNavigateSection={scrollToSection}
      />

      <main>
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
            // Success logged
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
    </div>
  );
}
