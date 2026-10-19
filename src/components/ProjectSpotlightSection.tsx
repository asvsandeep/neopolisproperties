import React, { useState } from 'react';
import { ProjectData, FloorPlan } from '../data/projectsData';
import { 
  Building2, 
  Layers, 
  MapPin, 
  Compass, 
  Maximize, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Home,
  Bed,
  Bath,
  Sun
} from 'lucide-react';

interface ProjectSpotlightSectionProps {
  detailedProjects: ProjectData[];
  onEnquireProject: (project: ProjectData, configuration?: string) => void;
}

export const ProjectSpotlightSection: React.FC<ProjectSpotlightSectionProps> = ({
  detailedProjects,
  onEnquireProject
}) => {
  const [selectedProjectId, setSelectedProjectId] = useState<string>(detailedProjects[0]?.id || 'sattva-lakeridge');
  const currentProject = detailedProjects.find(p => p.id === selectedProjectId) || detailedProjects[0];

  // Selected floor plan within current project
  const [selectedPlanId, setSelectedPlanId] = useState<string>(
    currentProject?.floorPlans?.[0]?.id || ''
  );

  // Sync floor plan when project changes
  const handleProjectSelect = (projectId: string) => {
    setSelectedProjectId(projectId);
    const targetProject = detailedProjects.find(p => p.id === projectId);
    if (targetProject?.floorPlans && targetProject.floorPlans.length > 0) {
      setSelectedPlanId(targetProject.floorPlans[0].id);
    } else {
      setSelectedPlanId('');
    }
  };

  const activeFloorPlan: FloorPlan | undefined = currentProject?.floorPlans?.find(
    fp => fp.id === selectedPlanId
  ) || currentProject?.floorPlans?.[0];

  return (
    <section id="spotlight" className="py-14 sm:py-20 lg:py-28 bg-[#101827] text-white relative overflow-hidden">
      {/* Subtle luxury ambient backdrops */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[400px] bg-[#C7A66A]/5 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[350px] bg-blue-900/10 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-12 space-y-2 sm:space-y-3">
          <span className="text-[11px] sm:text-xs font-sans font-semibold tracking-[0.2em] sm:tracking-[0.25em] text-[#C7A66A] uppercase block">
            Detailed Architectural Intelligence
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-normal text-white tracking-tight leading-[1.15]">
            Curated Project Spotlights
          </h2>
          <p className="text-sm sm:text-base text-[#737780] font-sans font-normal leading-relaxed">
            Examine in-depth masterplan specifications, architectural signatures, and unit configurations for Neopolis’s landmark residential towers.
          </p>
        </div>

        {/* Project Selector Tabs (Mobile Scrollable Swipe Strip) */}
        <div className="w-full overflow-x-auto pb-3 mb-8 sm:mb-10 border-b border-white/10 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
          <div className="flex items-center gap-2 w-max sm:w-auto sm:flex-wrap">
            {detailedProjects.map((project) => {
              const isSelected = project.id === selectedProjectId;
              return (
                <button
                  key={project.id}
                  onClick={() => handleProjectSelect(project.id)}
                  className={`px-3.5 sm:px-5 py-2.5 sm:py-3 rounded-sm text-xs sm:text-sm font-sans tracking-wide transition-all cursor-pointer flex items-center gap-2 whitespace-nowrap ${
                    isSelected
                      ? 'bg-[#C7A66A] text-[#101827] font-semibold shadow-lg shadow-[#C7A66A]/20'
                      : 'bg-white/5 hover:bg-white/10 text-white/80 hover:text-white border border-white/10'
                  }`}
                >
                  <span>{project.name}</span>
                  <span className={`text-[9px] sm:text-[10px] px-1.5 py-0.5 rounded-xs uppercase tracking-wider ${
                    isSelected ? 'bg-[#101827]/20 text-[#101827]' : 'bg-white/10 text-[#C7A66A]'
                  }`}>
                    {project.statusBadge}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Project Spotlight Showcase */}
        {currentProject && (
          <div className="space-y-8 sm:space-y-12">
            {/* Top Row: Visual & Core Brief */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
              {/* Architectural Image */}
              <div className="lg:col-span-7 rounded-md overflow-hidden relative border border-white/10 bg-[#162032] min-h-[260px] sm:min-h-[360px] lg:min-h-[460px]">
                <img
                  src={currentProject.image}
                  alt={currentProject.imageAlt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#101827] via-[#101827]/30 to-transparent" />
                
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
                  <div className="flex items-center gap-1.5 text-xs text-[#C7A66A] font-sans font-medium uppercase tracking-widest mb-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span className="text-[11px] sm:text-xs">{currentProject.location}</span>
                  </div>
                  <h3 className="text-xl sm:text-3xl font-serif font-normal text-white">
                    {currentProject.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/80 font-sans mt-0.5 sm:mt-1 line-clamp-2">
                    {currentProject.headline}
                  </p>
                </div>
              </div>

              {/* Project Brief & Highlights */}
              <div className="lg:col-span-5 flex flex-col justify-between bg-white/[0.03] border border-white/10 rounded-md p-5 sm:p-8 space-y-5 sm:space-y-6">
                <div>
                  <span className="text-xs font-sans text-[#C7A66A] tracking-wider uppercase font-semibold block mb-2">
                    Developer Brief & Concept
                  </span>
                  <p className="text-xs sm:text-sm lg:text-base text-neutral-300 font-sans leading-relaxed">
                    {currentProject.description}
                  </p>
                </div>

                {/* Key Highlights list */}
                <div className="space-y-2.5 pt-4 border-t border-white/10">
                  <span className="text-xs font-sans font-semibold text-white uppercase tracking-wider block">
                    Architectural & Lifestyle Signatures
                  </span>
                  <ul className="space-y-2">
                    {(currentProject.highlights || currentProject.suppliedFeatures || []).slice(0, 4).map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-neutral-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C7A66A] shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Fast Action */}
                <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
                  <div>
                    <span className="text-[10px] text-[#737780] uppercase tracking-wider block">Status</span>
                    <span className="text-xs font-sans font-semibold text-[#C7A66A]">{currentProject.statusBadge}</span>
                  </div>
                  <button
                    onClick={() => onEnquireProject(currentProject, activeFloorPlan?.bhk)}
                    className="w-full sm:w-auto py-3 px-5 bg-[#C7A66A] hover:bg-[#d6b77d] text-[#101827] text-xs font-sans font-semibold uppercase tracking-wider rounded-sm transition-all cursor-pointer flex items-center justify-center gap-2 shadow-md shadow-[#C7A66A]/20"
                  >
                    <span>{currentProject.ctaLabel}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Specifications Matrix */}
            {currentProject.keySpecs && currentProject.keySpecs.length > 0 && (
              <div className="bg-white/[0.02] border border-white/10 rounded-md p-5 sm:p-8">
                <div className="mb-5 sm:mb-6">
                  <span className="text-[11px] sm:text-xs font-sans font-semibold text-[#C7A66A] uppercase tracking-wider block">
                    Verified Specification Matrix
                  </span>
                  <h4 className="text-lg sm:text-xl font-serif text-white mt-1">
                    Masterplan & Structural Details
                  </h4>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-4 lg:gap-6">
                  {currentProject.keySpecs.map((spec, idx) => (
                    <div key={idx} className="p-3 sm:p-4 rounded-sm bg-white/[0.03] border border-white/5 space-y-1">
                      <span className="text-[10px] sm:text-[11px] font-sans text-[#737780] uppercase tracking-wider block">
                        {spec.label}
                      </span>
                      <span className="text-xs sm:text-sm lg:text-base font-sans font-medium text-white block truncate">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Dynamic Apartment Configurations & Layouts Section */}
            {currentProject.floorPlans && currentProject.floorPlans.length > 0 && (
              <div className="bg-white/[0.03] border border-white/10 rounded-md p-5 sm:p-8 space-y-6 sm:space-y-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-5 sm:pb-6 border-b border-white/10">
                  <div className="space-y-1">
                    <span className="text-[11px] sm:text-xs font-sans font-semibold text-[#C7A66A] uppercase tracking-wider block">
                      Apartment Configurations & Layouts
                    </span>
                    <h4 className="text-lg sm:text-2xl font-serif text-white">
                      Explore Floor Plates & Room Dimensions
                    </h4>
                    <p className="text-xs text-[#737780] font-sans">
                      Select a configuration below to examine room dimensions, terrace spaces, and architectural layout details.
                    </p>
                  </div>

                  {/* BHK Configuration Tabs (Mobile Horizontal Scrollable) */}
                  <div className="w-full md:w-auto overflow-x-auto pb-1 scrollbar-none -mx-2 px-2 sm:mx-0 sm:px-0">
                    <div className="flex items-center gap-1.5 p-1 bg-white/5 border border-white/10 rounded-sm w-max sm:w-auto">
                      {currentProject.floorPlans.map((plan) => {
                        const isActive = plan.id === selectedPlanId;
                        return (
                          <button
                            key={plan.id}
                            onClick={() => setSelectedPlanId(plan.id)}
                            className={`px-3.5 py-1.5 sm:px-4 sm:py-2 text-xs font-sans font-medium rounded-xs transition-all cursor-pointer whitespace-nowrap ${
                              isActive
                                ? 'bg-[#C7A66A] text-[#101827] font-semibold shadow-sm'
                                : 'text-white/80 hover:text-white hover:bg-white/5'
                            }`}
                          >
                            {plan.bhk}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Active Floor Plan Details */}
                {activeFloorPlan && (
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
                    {/* Left: Configuration Highlights & Dimensions */}
                    <div className="lg:col-span-6 space-y-5 sm:space-y-6">
                      <div className="space-y-1">
                        <span className="text-[10px] sm:text-xs font-sans text-[#C7A66A] font-semibold uppercase tracking-wider">
                          Configuration Profile
                        </span>
                        <h5 className="text-xl sm:text-2xl font-serif text-white">
                          {activeFloorPlan.name}
                        </h5>
                        <p className="text-xs text-[#737780] leading-relaxed">
                          Super Built-Up Area: <strong className="text-white font-medium">{activeFloorPlan.superBuiltUpArea}</strong>
                          {activeFloorPlan.carpetArea && ` · Usable Carpet: ${activeFloorPlan.carpetArea}`}
                        </p>
                      </div>

                      {/* Key Accommodation Metrics */}
                      <div className="grid grid-cols-3 gap-2 sm:gap-3">
                        <div className="p-2.5 sm:p-3.5 bg-white/[0.03] border border-white/5 rounded-sm">
                          <div className="flex items-center gap-1 text-[10px] sm:text-[11px] text-[#737780] uppercase tracking-wider mb-1">
                            <Bed className="w-3 h-3 text-[#C7A66A] shrink-0" />
                            <span className="truncate">Beds</span>
                          </div>
                          <span className="text-xs sm:text-sm font-sans font-semibold text-white block truncate">
                            {activeFloorPlan.bedrooms}
                          </span>
                        </div>

                        <div className="p-2.5 sm:p-3.5 bg-white/[0.03] border border-white/5 rounded-sm">
                          <div className="flex items-center gap-1 text-[10px] sm:text-[11px] text-[#737780] uppercase tracking-wider mb-1">
                            <Bath className="w-3 h-3 text-[#C7A66A] shrink-0" />
                            <span className="truncate">Baths</span>
                          </div>
                          <span className="text-xs sm:text-sm font-sans font-semibold text-white block truncate">
                            {activeFloorPlan.bathrooms}
                          </span>
                        </div>

                        <div className="p-2.5 sm:p-3.5 bg-white/[0.03] border border-white/5 rounded-sm">
                          <div className="flex items-center gap-1 text-[10px] sm:text-[11px] text-[#737780] uppercase tracking-wider mb-1">
                            <Sun className="w-3 h-3 text-[#C7A66A] shrink-0" />
                            <span className="truncate">Balcony</span>
                          </div>
                          <span className="text-xs sm:text-sm font-sans font-semibold text-white block truncate">
                            {activeFloorPlan.balconies}
                          </span>
                        </div>
                      </div>

                      {/* Room Dimensions Table (Responsive wrap prevents text overlapping) */}
                      <div className="border border-white/10 rounded-sm overflow-hidden">
                        <div className="bg-white/5 px-3.5 sm:px-4 py-2 sm:py-2.5 text-xs font-sans font-semibold text-white uppercase tracking-wider">
                          Key Room Clear Dimensions
                        </div>
                        <div className="divide-y divide-white/5 text-xs font-sans">
                          <div className="px-3.5 sm:px-4 py-2 sm:py-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-neutral-300">
                            <span className="text-neutral-400">Formal Living & Dining</span>
                            <span className="font-mono text-white font-medium text-[11px] sm:text-xs">{activeFloorPlan.roomDimensions.livingDining}</span>
                          </div>
                          <div className="px-3.5 sm:px-4 py-2 sm:py-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-neutral-300">
                            <span className="text-neutral-400">Master Suite</span>
                            <span className="font-mono text-white font-medium text-[11px] sm:text-xs">{activeFloorPlan.roomDimensions.masterBedroom}</span>
                          </div>
                          <div className="px-3.5 sm:px-4 py-2 sm:py-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-neutral-300">
                            <span className="text-neutral-400">Bedroom 2</span>
                            <span className="font-mono text-white font-medium text-[11px] sm:text-xs">{activeFloorPlan.roomDimensions.bedroom2}</span>
                          </div>
                          <div className="px-3.5 sm:px-4 py-2 sm:py-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-neutral-300">
                            <span className="text-neutral-400">Bedroom 3</span>
                            <span className="font-mono text-white font-medium text-[11px] sm:text-xs">{activeFloorPlan.roomDimensions.bedroom3}</span>
                          </div>
                          {activeFloorPlan.roomDimensions.bedroom4 && (
                            <div className="px-3.5 sm:px-4 py-2 sm:py-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-neutral-300">
                              <span className="text-neutral-400">Bedroom 4 / Den</span>
                              <span className="font-mono text-white font-medium text-[11px] sm:text-xs">{activeFloorPlan.roomDimensions.bedroom4}</span>
                            </div>
                          )}
                          {activeFloorPlan.roomDimensions.bedroom5 && (
                            <div className="px-3.5 sm:px-4 py-2 sm:py-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-neutral-300">
                              <span className="text-neutral-400">Bedroom 5 / Lounge</span>
                              <span className="font-mono text-white font-medium text-[11px] sm:text-xs">{activeFloorPlan.roomDimensions.bedroom5}</span>
                            </div>
                          )}
                          <div className="px-3.5 sm:px-4 py-2 sm:py-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-neutral-300">
                            <span className="text-neutral-400">Kitchen & Wet Utility</span>
                            <span className="font-mono text-white font-medium text-[11px] sm:text-xs">{activeFloorPlan.roomDimensions.kitchen}</span>
                          </div>
                          <div className="px-3.5 sm:px-4 py-2 sm:py-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-neutral-300">
                            <span className="text-neutral-400">Terrace / Balconies</span>
                            <span className="font-mono text-white font-medium text-[11px] sm:text-xs">{activeFloorPlan.roomDimensions.balconies}</span>
                          </div>
                        </div>
                      </div>

                      {/* Key Features */}
                      <div className="space-y-2">
                        <span className="text-[11px] sm:text-xs font-sans text-neutral-400 uppercase tracking-wider block">
                          Layout Special Highlights:
                        </span>
                        <ul className="space-y-1.5">
                          {activeFloorPlan.keyFeatures.map((feat, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-xs text-neutral-300">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#C7A66A] shrink-0" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Right: Architectural Floor Plan Graphic Schematic */}
                    <div className="lg:col-span-6 bg-[#0B132B] border border-white/10 rounded-sm p-4 sm:p-6 flex flex-col justify-between space-y-4 sm:space-y-6">
                      <div className="flex items-center justify-between text-xs text-[#737780] pb-2.5 border-b border-white/10">
                        <span className="font-sans font-medium uppercase tracking-wider text-[#C7A66A] text-[11px] sm:text-xs truncate">
                          Schematic Blueprint Representation
                        </span>
                        <span className="text-white/60 text-[10px] sm:text-xs whitespace-nowrap">{activeFloorPlan.bhk}</span>
                      </div>

                      {/* SVG Architectural Floor Plan Schematic */}
                      <div className="w-full min-h-[290px] sm:aspect-[4/3] bg-[#070D1F] border border-[#C7A66A]/20 rounded-sm relative flex items-center justify-center p-2.5 sm:p-4 overflow-hidden">
                        {/* Blueprint Grid Lines */}
                        <div 
                          className="absolute inset-0 opacity-15"
                          style={{
                            backgroundImage: 'linear-gradient(to right, #C7A66A 1px, transparent 1px), linear-gradient(to bottom, #C7A66A 1px, transparent 1px)',
                            backgroundSize: '24px 24px'
                          }}
                        />

                        {/* Interactive Blueprint Diagram */}
                        <div className="relative z-10 w-full h-full flex flex-col justify-between p-2 sm:p-3 border border-[#C7A66A]/40 rounded-sm bg-[#0B132B]/85 text-center">
                          {/* Top: Balcony & Master Bedroom */}
                          <div className="grid grid-cols-2 gap-1.5 sm:gap-2 h-1/3">
                            <div className="border border-white/20 p-1.5 sm:p-2 rounded-xs flex flex-col items-center justify-center bg-white/5">
                              <span className="text-[10px] sm:text-[11px] font-sans font-semibold text-white">Master Suite</span>
                              <span className="text-[8px] sm:text-[9px] text-[#C7A66A] font-mono mt-0.5">{activeFloorPlan.roomDimensions.masterBedroom}</span>
                            </div>
                            <div className="border border-[#C7A66A]/40 p-1.5 sm:p-2 rounded-xs flex flex-col items-center justify-center bg-[#C7A66A]/10">
                              <span className="text-[10px] sm:text-[11px] font-sans font-semibold text-[#C7A66A]">Viewing Balcony</span>
                              <span className="text-[8px] sm:text-[9px] text-neutral-300 font-mono mt-0.5">{activeFloorPlan.roomDimensions.balconies}</span>
                            </div>
                          </div>

                          {/* Center: Grand Living & Dining */}
                          <div className="my-1.5 sm:my-2 border border-blue-400/30 p-2 sm:p-3 rounded-xs flex flex-col items-center justify-center bg-blue-500/5 h-1/3">
                            <span className="text-xs sm:text-sm font-serif font-bold text-white tracking-wide">
                              Formal Living & Dining Salon
                            </span>
                            <span className="text-[9px] sm:text-[10px] text-blue-200 font-mono mt-0.5">
                              {activeFloorPlan.roomDimensions.livingDining}
                            </span>
                            <span className="text-[8px] sm:text-[9px] text-neutral-400 mt-0.5">Double Glazed Ceiling Clearance 12 ft.</span>
                          </div>

                          {/* Bottom: Secondary Bedrooms & Kitchen */}
                          <div className="grid grid-cols-3 gap-1 sm:gap-2 h-1/3">
                            <div className="border border-white/20 p-1 sm:p-1.5 rounded-xs flex flex-col items-center justify-center bg-white/5">
                              <span className="text-[9px] sm:text-[10px] font-sans text-white font-medium truncate w-full">Bed 2</span>
                              <span className="text-[7px] sm:text-[8px] text-[#737780] font-mono truncate w-full">{activeFloorPlan.roomDimensions.bedroom2}</span>
                            </div>
                            <div className="border border-white/20 p-1 sm:p-1.5 rounded-xs flex flex-col items-center justify-center bg-white/5">
                              <span className="text-[9px] sm:text-[10px] font-sans text-white font-medium truncate w-full">
                                {activeFloorPlan.roomDimensions.bedroom4 ? 'Bed 3 & 4' : 'Bed 3'}
                              </span>
                              <span className="text-[7px] sm:text-[8px] text-[#737780] font-mono truncate w-full">{activeFloorPlan.roomDimensions.bedroom3}</span>
                            </div>
                            <div className="border border-white/20 p-1 sm:p-1.5 rounded-xs flex flex-col items-center justify-center bg-white/5">
                              <span className="text-[9px] sm:text-[10px] font-sans text-white font-medium truncate w-full">Kitchen</span>
                              <span className="text-[7px] sm:text-[8px] text-[#737780] font-mono truncate w-full">{activeFloorPlan.roomDimensions.kitchen}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4">
                        <span className="text-[10px] sm:text-[11px] text-[#737780] text-center sm:text-left">
                          *Schematic representation based on supplied developer marketing floor plate.
                        </span>

                        <button
                          onClick={() => onEnquireProject(currentProject, activeFloorPlan.bhk)}
                          className="w-full sm:w-auto py-2.5 px-5 bg-[#C7A66A] hover:bg-[#d6b77d] text-[#101827] text-xs font-sans font-semibold uppercase tracking-wider rounded-sm transition-all cursor-pointer flex items-center justify-center gap-2"
                        >
                          <span>Enquire for {activeFloorPlan.bhk}</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};
