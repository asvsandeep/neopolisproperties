import React, { useEffect } from 'react';
import { ProjectData } from '../data/projectsData';
import { 
  X, 
  MapPin, 
  Building2, 
  CheckCircle2, 
  ArrowRight, 
  Calendar, 
  Maximize2,
  Sparkles,
  Info
} from 'lucide-react';

interface ProjectDetailModalProps {
  project: ProjectData | null;
  onClose: () => void;
  onEnquire: (project: ProjectData) => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onEnquire
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative bg-white rounded-md max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-neutral-200 text-[#20242C]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-[#101827]/80 text-white hover:bg-[#101827] transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Image Header */}
        <div className="relative aspect-[16/8] sm:aspect-[21/9] w-full overflow-hidden bg-neutral-900">
          <img
            src={project.image}
            alt={project.imageAlt}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLElement).style.display = 'none';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#101827] via-[#101827]/50 to-transparent" />

          <div className="absolute bottom-6 left-6 right-6 text-white space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-sans uppercase tracking-wider px-2.5 py-1 bg-[#C7A66A] text-[#101827] font-semibold rounded-xs">
                {project.statusBadge}
              </span>
              <div className="flex items-center gap-1 text-xs text-neutral-300 font-sans">
                <MapPin className="w-3.5 h-3.5 text-[#C7A66A]" />
                <span>{project.location}</span>
              </div>
            </div>

            <h3 className="text-2xl sm:text-4xl font-serif font-normal text-white">
              {project.name}
            </h3>
            <p className="text-xs sm:text-sm text-[#C7A66A] font-sans italic">
              "{project.headline}"
            </p>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* Overview Description */}
          <div className="space-y-2">
            <span className="text-xs font-sans font-semibold text-[#C7A66A] uppercase tracking-wider block">
              Project Concept & Overview
            </span>
            <p className="text-sm sm:text-base text-[#737780] font-sans leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Key Specifications (if detailed) */}
          {project.keySpecs && project.keySpecs.length > 0 && (
            <div className="space-y-3">
              <span className="text-xs font-sans font-semibold text-[#101827] uppercase tracking-wider block">
                Verified Technical Specifications
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {project.keySpecs.map((spec, i) => (
                  <div key={i} className="p-3 bg-[#F8F6F1] rounded-sm border border-neutral-200/60">
                    <span className="text-[10px] text-[#737780] uppercase tracking-wider block font-sans">
                      {spec.label}
                    </span>
                    <span className="text-xs sm:text-sm font-sans font-semibold text-[#101827] mt-0.5 block">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Highlights / Supplied Features */}
          {(project.highlights || project.suppliedFeatures) && (
            <div className="space-y-3">
              <span className="text-xs font-sans font-semibold text-[#101827] uppercase tracking-wider block">
                Architectural Highlights & Signature Amenities
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {(project.highlights || project.suppliedFeatures || []).map((feat, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-[#737780] font-sans">
                    <CheckCircle2 className="w-4 h-4 text-[#C7A66A] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Floor Plans Available */}
          {project.floorPlans && project.floorPlans.length > 0 && (
            <div className="space-y-3 pt-2 border-t border-neutral-100">
              <span className="text-xs font-sans font-semibold text-[#101827] uppercase tracking-wider block">
                Offered Configurations & Dimensions
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {project.floorPlans.map((fp) => (
                  <div key={fp.id} className="p-3.5 bg-neutral-50 border border-neutral-200 rounded-sm space-y-1">
                    <span className="text-xs font-sans font-bold text-[#101827] block">{fp.bhk} — {fp.name}</span>
                    <span className="text-xs text-[#C7A66A] font-semibold block">{fp.superBuiltUpArea}</span>
                    <span className="text-[11px] text-[#737780] block">{fp.bedrooms} · {fp.bathrooms}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Upcoming Project Note */}
          {!project.isDetailed && (
            <div className="p-4 bg-neutral-100 rounded-sm border border-neutral-200 space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#101827]">
                <Info className="w-4 h-4 text-[#C7A66A]" />
                <span>Priority Registration Open</span>
              </div>
              <p className="text-xs text-[#737780] font-sans leading-relaxed">
                Detailed blueprints, pricing structures, and RERA approval disclosures will be released to registered parties prior to the public marketing rollout.
              </p>
            </div>
          )}

          {/* Modal Actions */}
          <div className="pt-6 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-[#737780] font-sans">
              Supplied developer marketing information. Subject to official verification.
            </span>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={onClose}
                className="w-1/2 sm:w-auto py-3 px-5 border border-neutral-300 hover:bg-neutral-100 text-xs font-sans font-medium uppercase tracking-wider rounded-sm transition-colors cursor-pointer"
              >
                Close
              </button>

              <button
                onClick={() => {
                  onClose();
                  onEnquire(project);
                }}
                className="w-1/2 sm:w-auto py-3 px-6 bg-[#101827] hover:bg-[#1a2538] text-[#C7A66A] hover:text-white text-xs font-sans font-semibold uppercase tracking-wider rounded-sm transition-all cursor-pointer flex items-center justify-center gap-2 shadow-md"
              >
                <span>{project.ctaLabel}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
