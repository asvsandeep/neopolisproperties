import React, { useState } from 'react';
import { 
  Building2, 
  MapPin, 
  Layers, 
  Calendar, 
  Maximize2, 
  CheckCircle2, 
  Sparkles, 
  Compass, 
  ShieldCheck, 
  Waves, 
  TreePine, 
  Crown, 
  Coffee, 
  Dumbbell, 
  Film, 
  Heart, 
  Zap, 
  ArrowRight
} from 'lucide-react';
import { Property, PropertyId } from '../types';
import { LeadCaptureForm } from '../components/LeadCaptureForm';
import { PropertyGallery } from '../components/PropertyGallery';

interface PropertyDetailPageProps {
  property: Property;
  onNavigateProperty: (id: PropertyId) => void;
  onLeadSubmitted: (leadId: string, leadName: string) => void;
  onBookSiteVisit: () => void;
}

export const PropertyDetailPage: React.FC<PropertyDetailPageProps> = ({
  property,
  onNavigateProperty,
  onLeadSubmitted,
  onBookSiteVisit
}) => {
  const [selectedFloorPlanIndex, setSelectedFloorPlanIndex] = useState(0);

  // Icon resolver
  const renderAmenityIcon = (iconName: string) => {
    switch (iconName) {
      case 'Crown': return <Crown className="w-5 h-5 text-blue-600" />;
      case 'Coffee': return <Coffee className="w-5 h-5 text-sky-600" />;
      case 'Waves': return <Waves className="w-5 h-5 text-sky-600" />;
      case 'Dumbbell': return <Dumbbell className="w-5 h-5 text-blue-600" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-blue-600" />;
      case 'Film': return <Film className="w-5 h-5 text-indigo-600" />;
      case 'Compass': return <Compass className="w-5 h-5 text-blue-600" />;
      case 'Layers': return <Layers className="w-5 h-5 text-blue-600" />;
      case 'Trees': return <TreePine className="w-5 h-5 text-emerald-600" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-blue-600" />;
      case 'Droplets': return <Waves className="w-5 h-5 text-sky-600" />;
      case 'Maximize2': return <Maximize2 className="w-5 h-5 text-blue-600" />;
      case 'Heart': return <Heart className="w-5 h-5 text-rose-500" />;
      case 'Zap': return <Zap className="w-5 h-5 text-amber-500" />;
      default: return <Sparkles className="w-5 h-5 text-blue-600" />;
    }
  };

  const currentFloorPlan = property.floorPlans[selectedFloorPlanIndex];

  // Dynamic schematic room data depending on whether 3 BHK, 3.5 BHK, or 4 BHK is chosen
  const getSchematicRooms = (planIdx: number) => {
    if (planIdx === 0) {
      // 3 BHK Configuration Layout
      return {
        planLabel: '3 BHK Grand Luxury Floorplate',
        rooms: [
          { name: 'Entrance Foyer', size: '8\' x 6\'', zone: 'Entry', colSpan: 'col-span-1', color: 'bg-blue-50 border-blue-200 text-blue-900' },
          { name: 'Formal Living & Dining', size: '26\' x 16\'', zone: 'Living', colSpan: 'col-span-2', color: 'bg-sky-50 border-sky-200 text-sky-950 font-semibold' },
          { name: 'Master Suite + Dressing', size: '17\' x 14\'', zone: 'Master Bed', colSpan: 'col-span-2', color: 'bg-blue-100/70 border-blue-300 text-blue-950 font-bold' },
          { name: 'En-suite Master Bath', size: '10\' x 7\'', zone: 'Bath', colSpan: 'col-span-1', color: 'bg-slate-50 border-slate-200 text-slate-800' },
          { name: 'Bedroom 2', size: '14\' x 12\'', zone: 'Bedroom', colSpan: 'col-span-1', color: 'bg-blue-50/80 border-blue-200 text-slate-900' },
          { name: 'Bedroom 3', size: '13\' x 12\'', zone: 'Bedroom', colSpan: 'col-span-1', color: 'bg-blue-50/80 border-blue-200 text-slate-900' },
          { name: 'Chef Kitchen & Utility', size: '12\' x 9\'', zone: 'Kitchen', colSpan: 'col-span-1', color: 'bg-indigo-50 border-indigo-200 text-indigo-950' },
          { name: 'Expansive Sky Sit-out 1', size: '16\' x 6\'', zone: 'Balcony', colSpan: 'col-span-2', color: 'bg-emerald-50 border-emerald-300 text-emerald-900 font-semibold' },
          { name: 'Private Bedroom Balcony 2', size: '12\' x 5\'', zone: 'Balcony', colSpan: 'col-span-1', color: 'bg-emerald-50 border-emerald-300 text-emerald-900' },
        ]
      };
    } else if (planIdx === 1) {
      // 3.5 BHK Configuration Layout
      return {
        planLabel: '3.5 BHK Royale Layout + Executive Study',
        rooms: [
          { name: 'Private Lift Lobby & Vestibule', size: '10\' x 7\'', zone: 'Foyer', colSpan: 'col-span-1', color: 'bg-blue-50 border-blue-200 text-blue-900' },
          { name: 'Grand Living & Banquet Dining', size: '28\' x 17\'', zone: 'Living', colSpan: 'col-span-2', color: 'bg-sky-50 border-sky-200 text-sky-950 font-semibold' },
          { name: 'Executive Home Office / Study', size: '11\' x 10\'', zone: 'Work Suite', colSpan: 'col-span-1', color: 'bg-amber-50 border-amber-300 text-amber-950 font-semibold' },
          { name: 'Master Presidential Chamber', size: '18\' x 15\'', zone: 'Master Bed', colSpan: 'col-span-2', color: 'bg-blue-100/70 border-blue-300 text-blue-950 font-bold' },
          { name: 'Spa En-suite Bath & Walk-in', size: '11\' x 8\'', zone: 'Bath', colSpan: 'col-span-1', color: 'bg-slate-50 border-slate-200 text-slate-800' },
          { name: 'Junior Suite (Bed 2)', size: '15\' x 13\'', zone: 'Bedroom', colSpan: 'col-span-1', color: 'bg-blue-50/80 border-blue-200 text-slate-900' },
          { name: 'Bedroom 3 with Bath', size: '14\' x 12\'', zone: 'Bedroom', colSpan: 'col-span-1', color: 'bg-blue-50/80 border-blue-200 text-slate-900' },
          { name: 'Modular Kitchen & Pantry', size: '14\' x 10\'', zone: 'Kitchen', colSpan: 'col-span-1', color: 'bg-indigo-50 border-indigo-200 text-indigo-950' },
          { name: 'Wraparound Deck 1', size: '20\' x 6\'', zone: 'Balcony', colSpan: 'col-span-1', color: 'bg-emerald-50 border-emerald-300 text-emerald-900' },
          { name: 'Scenic Viewing Deck 2', size: '14\' x 5\'', zone: 'Balcony', colSpan: 'col-span-1', color: 'bg-emerald-50 border-emerald-300 text-emerald-900' },
          { name: 'Dedicated Staff Quarters', size: '8\' x 6\'', zone: 'Staff', colSpan: 'col-span-1', color: 'bg-slate-50 border-slate-200 text-slate-700' },
        ]
      };
    } else {
      // 4 BHK Configuration Layout
      return {
        planLabel: '4 BHK Palatial Sky Villa Layout',
        rooms: [
          { name: 'Private Grand Double Foyer', size: '12\' x 8\'', zone: 'Grand Entry', colSpan: 'col-span-1', color: 'bg-blue-50 border-blue-200 text-blue-900' },
          { name: 'Palatial Formal Living & Dining', size: '32\' x 20\'', zone: 'Grand Living', colSpan: 'col-span-2', color: 'bg-sky-50 border-sky-200 text-sky-950 font-bold' },
          { name: 'Family Entertainment Lounge', size: '15\' x 12\'', zone: 'Family Lounge', colSpan: 'col-span-1', color: 'bg-amber-50 border-amber-300 text-amber-950 font-semibold' },
          { name: 'Presidential Master Suite', size: '20\' x 16\'', zone: 'Presidential Bed', colSpan: 'col-span-2', color: 'bg-blue-100/90 border-blue-400 text-blue-950 font-extrabold' },
          { name: 'Jacuzzi Spa & Dressing Salon', size: '13\' x 9\'', zone: 'Luxury Bath', colSpan: 'col-span-1', color: 'bg-slate-50 border-slate-300 text-slate-800' },
          { name: 'Junior Master Suite (Bed 2)', size: '16\' x 14\'', zone: 'Bedroom 2', colSpan: 'col-span-1', color: 'bg-blue-50 border-blue-200 text-slate-900 font-semibold' },
          { name: 'Guest Chamber (Bed 3)', size: '15\' x 13\'', zone: 'Bedroom 3', colSpan: 'col-span-1', color: 'bg-blue-50 border-blue-200 text-slate-900 font-semibold' },
          { name: 'Luxury Bedroom 4', size: '14\' x 12\'', zone: 'Bedroom 4', colSpan: 'col-span-1', color: 'bg-blue-50 border-blue-200 text-slate-900 font-semibold' },
          { name: 'Chef Show & Wet Kitchen', size: '16\' x 11\'', zone: 'Culinary Suite', colSpan: 'col-span-1', color: 'bg-indigo-50 border-indigo-200 text-indigo-950' },
          { name: 'Corner 360° Viewing Terraces', size: '36\' x 8\'', zone: 'Panoramic Terrace', colSpan: 'col-span-2', color: 'bg-emerald-50 border-emerald-400 text-emerald-950 font-bold' },
          { name: 'Domestic Staff Suite + Wash', size: '10\' x 7\'', zone: 'Staff Quarters', colSpan: 'col-span-1', color: 'bg-slate-50 border-slate-200 text-slate-700' },
        ]
      };
    }
  };

  const currentSchematic = getSchematicRooms(selectedFloorPlanIndex);

  return (
    <div className="space-y-14 lg:space-y-20 pb-16">
      {/* 1. TOP SECTION: Lead Capture Form at Top of Page */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="p-1 sm:p-2 bg-gradient-to-r from-blue-100 via-sky-50 to-indigo-100 rounded-3xl border border-blue-200/70 shadow-lg shadow-blue-500/5">
          <LeadCaptureForm
            variant="top"
            defaultProperty={property.id}
            sourcePageName={`${property.name} Page (Top Bar)`}
            onSubmitted={onLeadSubmitted}
          />
        </div>
      </section>

      {/* 2. HERO SECTION (Crisp Blue & White Luxury Division) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-sm relative overflow-hidden">
          {/* Ambient light blur glow */}
          <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[550px] h-[260px] bg-blue-100/60 blur-[100px] rounded-full pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-2 text-xs font-semibold tracking-wider uppercase">
                <span className="bg-blue-50 border border-blue-200 px-2.5 py-1 rounded-md text-blue-700">
                  {property.developer}
                </span>
                <span className="text-slate-400">·</span>
                <span className="text-slate-600">{property.subLocation}</span>
                {property.openTowers && (
                  <>
                    <span className="text-slate-400">·</span>
                    <span className="text-blue-700 font-bold bg-blue-100/80 border border-blue-300 px-2 py-0.5 rounded">
                      Open: {property.openTowers}
                    </span>
                  </>
                )}
              </div>

              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight font-title">
                {property.name}
              </h1>

              <p className="text-base sm:text-xl text-slate-700 font-normal leading-relaxed">
                {property.tagline}
              </p>

              <p className="text-sm text-slate-600 leading-relaxed max-w-2xl font-light">
                {property.summary}
              </p>

              {/* Quick specs strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 pt-2">
                <div className="bg-[#f8fafc] border border-slate-200 p-3 sm:p-3.5 rounded-xl shadow-xs">
                  <span className="text-[11px] text-slate-500 font-medium block">Floors & Height</span>
                  <span className="text-sm font-bold text-slate-900 block mt-0.5">{property.floors}</span>
                </div>
                <div className="bg-[#f8fafc] border border-slate-200 p-3 sm:p-3.5 rounded-xl shadow-xs">
                  <span className="text-[11px] text-slate-500 font-medium block">Land Parcel</span>
                  <span className="text-sm font-bold text-slate-900 block mt-0.5">{property.landArea}</span>
                </div>
                <div className="bg-[#f8fafc] border border-slate-200 p-3 sm:p-3.5 rounded-xl shadow-xs">
                  <span className="text-[11px] text-slate-500 font-medium block">Configurations</span>
                  <span className="text-sm font-bold text-slate-900 block mt-0.5">{property.configurations.join(', ')}</span>
                </div>
                <div className="bg-[#f8fafc] border border-slate-200 p-3 sm:p-3.5 rounded-xl shadow-xs">
                  <span className="text-[11px] text-slate-500 font-medium block">Possession</span>
                  <span className="text-sm font-bold text-blue-700 block mt-0.5">{property.possession}</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-2">
                <button
                  onClick={onBookSiteVisit}
                  className="w-full sm:w-auto px-6 py-3.5 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold text-sm rounded-xl transition-all shadow-md shadow-blue-600/25 cursor-pointer flex items-center justify-center gap-2 min-h-[44px] active:scale-[0.98]"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Schedule Chauffeured Site Tour</span>
                </button>
                <div className="text-xs text-slate-500 text-center sm:text-left">
                  <span className="block text-slate-900 font-semibold font-mono-numbers text-base">{property.priceStarting}</span>
                  <span>Estimated Pricing ({property.pricePerSqft || 'Direct Rates'})</span>
                </div>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 bg-slate-100 shadow-xl aspect-[4/3] group">
                <img
                  src={property.gallery[0]?.url || 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80'}
                  alt={property.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
                <div className="absolute bottom-4 left-4 right-4 p-3 bg-white/95 backdrop-blur-md rounded-xl border border-slate-200 text-xs text-slate-700 flex items-center justify-between shadow-md">
                  <div>
                    <span className="font-semibold text-slate-900 block">{property.name} · Neopolis</span>
                    <span className="text-[11px] text-blue-700 font-medium">{property.architecturalStyle}</span>
                  </div>
                  <span className="text-[10px] text-blue-700 font-semibold bg-blue-50 border border-blue-200 px-2 py-0.5 rounded">
                    {property.reraStatus}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ARCHITECTURAL HIGHLIGHTS & SPECIFICATIONS (Soft Ice-Blue Division) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#f1f6fd] border border-blue-200/70 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Highlights */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs text-blue-600 font-semibold uppercase tracking-wider block mb-1">
                  Development Pillars
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight font-title">
                  Why {property.name} Stands Out
                </h2>
              </div>

              <div className="space-y-3.5">
                {property.keyHighlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-light">
                      {highlight}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Full Specifications Table */}
            <div className="lg:col-span-6 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-4 pb-3 border-b border-slate-100 font-title">
                Technical Project Specifications
              </h3>

              <div className="divide-y divide-slate-100 text-xs">
                <div className="py-2.5 flex justify-between">
                  <span className="text-slate-500">Developer</span>
                  <span className="font-semibold text-slate-900">{property.developer}</span>
                </div>
                <div className="py-2.5 flex justify-between">
                  <span className="text-slate-500">Exact Location</span>
                  <span className="font-semibold text-slate-900 text-right">{property.location}</span>
                </div>
                <div className="py-2.5 flex justify-between">
                  <span className="text-slate-500">Total Land Area</span>
                  <span className="font-semibold text-slate-900">{property.landArea}</span>
                </div>
                <div className="py-2.5 flex justify-between">
                  <span className="text-slate-500">Total Towers</span>
                  <span className="font-semibold text-slate-900">{property.towers}</span>
                </div>
                <div className="py-2.5 flex justify-between">
                  <span className="text-slate-500">Total Floors</span>
                  <span className="font-semibold text-slate-900">{property.floors}</span>
                </div>
                <div className="py-2.5 flex justify-between">
                  <span className="text-slate-500">Total Inventory</span>
                  <span className="font-semibold text-slate-900">{property.totalUnits}</span>
                </div>
                <div className="py-2.5 flex justify-between">
                  <span className="text-slate-500">Apartment Sizes</span>
                  <span className="font-semibold text-blue-700 font-mono-numbers">{property.sizeRange}</span>
                </div>
                <div className="py-2.5 flex justify-between">
                  <span className="text-slate-500">Clubhouse & Amenities Area</span>
                  <span className="font-semibold text-slate-900">{property.amenitiesArea}</span>
                </div>
                {property.openTowers && (
                  <div className="py-2.5 flex justify-between bg-blue-50 -mx-2 px-2 rounded border border-blue-200">
                    <span className="text-blue-700 font-semibold">Towers Open For Sale</span>
                    <span className="font-bold text-blue-900">{property.openTowers}</span>
                  </div>
                )}
                <div className="py-2.5 flex justify-between">
                  <span className="text-slate-500">RERA Status</span>
                  <span className="font-semibold text-blue-600">{property.reraStatus}</span>
                </div>
                <div className="py-2.5 flex justify-between">
                  <span className="text-slate-500">Possession Timeline</span>
                  <span className="font-semibold text-slate-900 font-mono-numbers">{property.possession}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. HIGH QUALITY IMAGE GALLERY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PropertyGallery items={property.gallery} projectName={property.name} />
      </section>

      {/* 5. FLOOR PLANS & LAYOUT EXPLORER (Pristine White Division) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-xs text-blue-600 font-semibold uppercase tracking-wider block mb-1">
                Architectural Blueprints
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight font-title">
                Apartment Configurations & Layouts
              </h3>
            </div>

            {/* Plan selector buttons (3 BHK, 3.5 BHK, 4 BHK) */}
            <div className="flex flex-wrap gap-2">
              {property.floorPlans.map((plan, idx) => (
                <button
                  key={plan.id}
                  onClick={() => setSelectedFloorPlanIndex(idx)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
                    selectedFloorPlanIndex === idx
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30 ring-2 ring-blue-600/30'
                      : 'bg-slate-100 text-slate-700 hover:text-slate-900 hover:bg-slate-200 border border-slate-200'
                  }`}
                >
                  {plan.type}
                </button>
              ))}
            </div>
          </div>

          {currentFloorPlan && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Plan Specs on Left */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <h4 className="text-xl font-bold text-slate-900 font-title">{currentFloorPlan.name}</h4>
                  <div className="text-3xl font-extrabold text-blue-700 font-mono-numbers mt-1">
                    {currentFloorPlan.sft}
                  </div>
                </div>

                {/* Clear, High-Legibility Bedrooms, Bathrooms, Balconies Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="bg-blue-50/70 border border-blue-200/80 p-3.5 rounded-2xl shadow-xs text-center sm:text-left">
                    <span className="text-[11px] font-bold text-blue-700 uppercase tracking-wider block mb-0.5">
                      Bedrooms
                    </span>
                    <span className="text-lg font-bold text-slate-900 block font-title">
                      {currentFloorPlan.bedrooms} Beds
                    </span>
                  </div>

                  <div className="bg-blue-50/70 border border-blue-200/80 p-3.5 rounded-2xl shadow-xs text-center sm:text-left">
                    <span className="text-[11px] font-bold text-blue-700 uppercase tracking-wider block mb-0.5">
                      Bathrooms
                    </span>
                    <span className="text-lg font-bold text-slate-900 block font-title">
                      {currentFloorPlan.bathrooms} Baths
                    </span>
                  </div>

                  <div className="bg-blue-50/70 border border-blue-200/80 p-3.5 rounded-2xl shadow-xs text-center sm:text-left">
                    <span className="text-[11px] font-bold text-blue-700 uppercase tracking-wider block mb-0.5">
                      Balconies
                    </span>
                    <span className="text-xs font-bold text-slate-900 block leading-tight mt-1">
                      {currentFloorPlan.balconies}
                    </span>
                  </div>
                </div>

                {/* Key Layout Highlights */}
                <div className="space-y-2.5 pt-2 border-t border-slate-100">
                  <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider block">
                    Design Highlights & Key Features
                  </span>
                  {currentFloorPlan.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                      <span className="leading-relaxed">{h}</span>
                    </div>
                  ))}
                </div>

                <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-600 flex items-center justify-between">
                  <span>Configuration Type:</span>
                  <span className="font-bold text-blue-700">{currentFloorPlan.type}</span>
                </div>
              </div>

              {/* Dynamic Architectural Schematic Graphic on Right */}
              <div className="lg:col-span-7 bg-[#f8fafc] border border-blue-200 rounded-2xl p-6 sm:p-7 shadow-inner flex flex-col justify-between">
                {/* Header of Floor Plan Blueprint */}
                <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-4 border-b border-blue-200/70 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-blue-800 bg-blue-100/80 px-2 py-0.5 rounded text-[11px]">
                      {currentSchematic.planLabel}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 font-mono-numbers text-[11px]">
                    <span className="font-semibold text-slate-800">NORTH ↑</span>
                    <span>·</span>
                    <span className="text-blue-700 font-medium">11&apos; CLEAR CEILING</span>
                  </div>
                </div>

                {/* Interactive Dynamic Room Grid that alters dynamically based on configuration */}
                <div className="grid grid-cols-3 gap-2.5 my-2">
                  {currentSchematic.rooms.map((room, rIdx) => (
                    <div
                      key={rIdx}
                      className={`p-3 rounded-xl border transition-all duration-300 shadow-xs flex flex-col justify-between ${room.colSpan} ${room.color}`}
                    >
                      <div className="flex items-center justify-between text-[10px] text-slate-500 uppercase tracking-wider mb-1">
                        <span>{room.zone}</span>
                      </div>
                      <div>
                        <span className="text-xs sm:text-sm font-bold block">{room.name}</span>
                        <span className="text-[11px] font-mono-numbers mt-0.5 block opacity-80">{room.size}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Footer of Blueprint */}
                <div className="pt-4 mt-4 border-t border-blue-200/70 flex flex-col sm:flex-row sm:items-center justify-between text-[11px] text-slate-500 gap-2">
                  <span>{property.name} Official Floor Plate · {currentFloorPlan.sft}</span>
                  <span className="text-blue-700 font-semibold bg-white px-2 py-0.5 rounded border border-blue-200 inline-block w-fit">
                    100% Vaastu Compliant Layout
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 6. LIFESTYLE AMENITIES (Soft Ice-Blue Wellness Division) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#f1f6fd] border border-blue-200/70 rounded-3xl p-6 sm:p-10 shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs text-blue-600 font-semibold uppercase tracking-wider block mb-1">
              Exclusive Lifestyle Amenities
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight font-title">
              Curated World-Class Leisure & Wellness
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm mt-2">
              Over {property.amenitiesArea} designed to elevate everyday life for residents and families.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {property.amenities.map((amenity, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 hover:border-blue-400 rounded-2xl p-5 transition-all shadow-xs hover:shadow-md"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center mb-3">
                  {renderAmenityIcon(amenity.icon)}
                </div>
                <h4 className="text-sm font-bold text-slate-900 mb-1.5 font-title">{amenity.name}</h4>
                <p className="text-xs text-slate-600 leading-relaxed font-light">{amenity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. BOTTOM SECTION: Comprehensive Lead Capture Form at Bottom of Page */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <LeadCaptureForm
          variant="bottom"
          defaultProperty={property.id}
          sourcePageName={`${property.name} Page (Bottom Inquiry)`}
          onSubmitted={onLeadSubmitted}
        />
      </section>
    </div>
  );
};
