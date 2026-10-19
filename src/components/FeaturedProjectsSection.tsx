import React, { useState } from 'react';
import { ProjectData } from '../data/projectsData';
import { 
  Building2, 
  Layers, 
  Maximize2, 
  MapPin, 
  ArrowRight, 
  Sparkles,
  Info
} from 'lucide-react';

interface FeaturedProjectsSectionProps {
  projects: ProjectData[];
  onSelectProjectDetails: (project: ProjectData) => void;
  onEnquireProject: (project: ProjectData) => void;
}

export const FeaturedProjectsSection: React.FC<FeaturedProjectsSectionProps> = ({
  projects,
  onSelectProjectDetails,
  onEnquireProject
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'detailed' | 'upcoming'>('all');

  const filteredProjects = projects.filter(project => {
    if (activeFilter === 'detailed') return project.isDetailed;
    if (activeFilter === 'upcoming') return !project.isDetailed;
    return true;
  });

  const getStatusBadgeStyle = (statusType: ProjectData['statusType']) => {
    switch (statusType) {
      case 'featured':
        return 'bg-[#C7A66A] text-[#101827] font-semibold';
      case 'premium':
        return 'bg-[#101827]/90 text-[#C7A66A] border border-[#C7A66A]/40 font-semibold';
      case 'landmark':
        return 'bg-white/10 text-white border border-white/20 font-semibold';
      case 'prelaunch':
        return 'bg-amber-950/80 text-amber-300 border border-amber-500/30 font-semibold';
      case 'upcoming':
        return 'bg-slate-800/90 text-slate-300 border border-slate-700 font-medium';
      default:
        return 'bg-slate-800 text-white';
    }
  };

  return (
    <section id="projects" className="py-14 sm:py-20 lg:py-28 bg-[#F8F6F1] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-12">
          <div className="max-w-2xl space-y-2 sm:space-y-3">
            <span className="text-[11px] sm:text-xs font-sans font-semibold tracking-[0.2em] sm:tracking-[0.25em] text-[#C7A66A] uppercase block">
              Curated Neopolis Portfolio
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#101827] tracking-tight leading-[1.15]">
              Find Your Exceptional Address
            </h2>
            <p className="text-sm sm:text-base text-[#737780] font-sans font-normal leading-relaxed">
              Explore premium residential developments in and around Neopolis, Kokapet.
            </p>
          </div>

          {/* Interactive Filter Tabs (Mobile Scrollable & Touch-Friendly) */}
          <div className="w-full md:w-auto overflow-x-auto pb-1 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
            <div className="flex items-center gap-1.5 p-1 bg-neutral-200/90 rounded-md border border-neutral-300/80 w-max sm:w-auto">
              <button
                onClick={() => setActiveFilter('all')}
                className={`px-3.5 sm:px-4 py-2 text-xs font-sans font-medium rounded-sm transition-all cursor-pointer whitespace-nowrap ${
                  activeFilter === 'all'
                    ? 'bg-[#101827] text-white shadow-sm'
                    : 'text-[#20242C] hover:text-[#101827]'
                }`}
              >
                All Projects ({projects.length})
              </button>
              <button
                onClick={() => setActiveFilter('detailed')}
                className={`px-3.5 sm:px-4 py-2 text-xs font-sans font-medium rounded-sm transition-all cursor-pointer whitespace-nowrap ${
                  activeFilter === 'detailed'
                    ? 'bg-[#101827] text-white shadow-sm'
                    : 'text-[#20242C] hover:text-[#101827]'
                }`}
              >
                Featured & Detailed (4)
              </button>
              <button
                onClick={() => setActiveFilter('upcoming')}
                className={`px-3.5 sm:px-4 py-2 text-xs font-sans font-medium rounded-sm transition-all cursor-pointer whitespace-nowrap ${
                  activeFilter === 'upcoming'
                    ? 'bg-[#101827] text-white shadow-sm'
                    : 'text-[#20242C] hover:text-[#101827]'
                }`}
              >
                Launching Soon (3)
              </button>
            </div>
          </div>
        </div>

        {/* 7 Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-md border border-neutral-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group hover:border-[#C7A66A]/40"
            >
              {/* Project Image Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100">
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#101827]/90 via-[#101827]/25 to-transparent" />

                {/* Status Badge */}
                <div className="absolute top-3.5 left-3.5 z-10">
                  <span className={`text-[10px] sm:text-[11px] uppercase tracking-wider px-2.5 sm:px-3 py-1 rounded-xs shadow-sm ${getStatusBadgeStyle(project.statusType)}`}>
                    {project.statusBadge}
                  </span>
                </div>

                {/* Location Overlay at bottom of image */}
                <div className="absolute bottom-2.5 left-3.5 right-3.5 z-10 flex items-center justify-between text-white">
                  <div className="flex items-center gap-1.5 text-xs text-white/90">
                    <MapPin className="w-3.5 h-3.5 text-[#C7A66A] shrink-0" />
                    <span className="font-sans font-medium text-[11px] sm:text-xs">{project.location}</span>
                  </div>
                  {project.configurations && project.configurations.length > 0 && (
                    <span className="text-[10px] sm:text-[11px] font-sans text-[#C7A66A] font-semibold">
                      {project.configurations.join(' · ')}
                    </span>
                  )}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4 sm:space-y-5">
                <div className="space-y-3">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-serif font-normal text-[#101827] group-hover:text-[#C7A66A] transition-colors leading-snug">
                      {project.name}
                    </h3>
                    <p className="text-xs font-sans text-[#C7A66A] italic mt-1 font-medium line-clamp-1">
                      "{project.headline}"
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-[#737780] font-sans line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Specifications Grid / Info */}
                  {project.isDetailed ? (
                    <div className="pt-2 grid grid-cols-2 gap-2 text-xs border-t border-neutral-100">
                      {project.areaRange && (
                        <div className="bg-[#F8F6F1] p-2.5 rounded-sm">
                          <span className="text-[10px] text-[#737780] uppercase tracking-wider block font-sans">
                            Area Range
                          </span>
                          <span className="font-sans font-semibold text-[#101827] mt-0.5 block truncate text-xs">
                            {project.areaRange}
                          </span>
                        </div>
                      )}
                      {project.keySpecs && project.keySpecs[1] && (
                        <div className="bg-[#F8F6F1] p-2.5 rounded-sm">
                          <span className="text-[10px] text-[#737780] uppercase tracking-wider block font-sans">
                            {project.keySpecs[1].label}
                          </span>
                          <span className="font-sans font-semibold text-[#101827] mt-0.5 block truncate text-xs">
                            {project.keySpecs[1].value}
                          </span>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="pt-2 border-t border-neutral-100 bg-[#F8F6F1] p-2.5 sm:p-3 rounded-sm flex items-center gap-2 text-xs text-[#737780]">
                      <Info className="w-4 h-4 text-[#C7A66A] shrink-0" />
                      <span className="text-[11px] sm:text-xs">Specifications: <strong className="text-[#101827]">To Be Announced</strong></span>
                    </div>
                  )}

                  {/* Notes / Special Features */}
                  {project.additionalDetailsNote && (
                    <div className="text-[10px] sm:text-[11px] text-[#737780] italic flex items-center gap-1 line-clamp-1">
                      <span>Note:</span>
                      <span>{project.additionalDetailsNote}</span>
                    </div>
                  )}
                </div>

                {/* Card Actions */}
                <div className="pt-3.5 border-t border-neutral-100 flex flex-col sm:flex-row items-center gap-2 sm:gap-2.5">
                  <button
                    onClick={() => onSelectProjectDetails(project)}
                    className="w-full sm:w-1/2 py-2.5 px-3 border border-neutral-300 hover:border-[#101827] hover:bg-neutral-50 active:bg-neutral-100 text-[#101827] text-xs font-sans font-medium uppercase tracking-wider rounded-sm transition-all cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <span>View Details</span>
                    <Maximize2 className="w-3 h-3 text-[#737780]" />
                  </button>

                  <button
                    onClick={() => onEnquireProject(project)}
                    className="w-full sm:w-1/2 py-2.5 px-3 bg-[#101827] hover:bg-[#1f2937] active:bg-black text-[#C7A66A] hover:text-white text-xs font-sans font-semibold uppercase tracking-wider rounded-sm transition-all cursor-pointer flex items-center justify-center gap-1.5 shadow-sm"
                  >
                    <span>Enquire Now</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
