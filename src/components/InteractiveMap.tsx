import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import { MapPin, Navigation, Building2, School, Hospital, Plane, Sparkles, ExternalLink } from 'lucide-react';
import { NEOPOLIS_LANDMARKS, PROPERTIES } from '../data/properties';
import { PropertyId } from '../types';

interface InteractiveMapProps {
  selectedPropertyId?: PropertyId;
  onSelectProperty?: (id: PropertyId) => void;
  onOpenInquiry?: (propertyName: string) => void;
}

export const InteractiveMap: React.FC<InteractiveMapProps> = ({
  selectedPropertyId,
  onSelectProperty,
  onOpenInquiry
}) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const markersRef = useRef<{ [key: string]: L.Marker }>({});
  const [activeFilter, setActiveFilter] = useState<'All' | 'Properties' | 'Commercial' | 'Hospital' | 'Transit'>('All');
  const [selectedItemName, setSelectedItemName] = useState<string>(
    selectedPropertyId
      ? PROPERTIES.find(p => p.id === selectedPropertyId)?.name || 'Neopolis Phase III (Brigade Barcelona)'
      : 'Neopolis Phase III (Brigade Barcelona)'
  );

  useEffect(() => {
    if (!mapContainerRef.current) return;

    if (!mapInstanceRef.current) {
      // Initialize map centered at Neopolis Kokapet
      const map = L.map(mapContainerRef.current, {
        center: [17.4065, 78.3340],
        zoom: 14,
        zoomControl: false,
        attributionControl: false
      });

      L.control.zoom({ position: 'bottomright' }).addTo(map);

      // Dark theme map tiles from CartoDB
      L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        maxZoom: 19,
        subdomains: 'abcd'
      }).addTo(map);

      mapInstanceRef.current = map;
    }

    const map = mapInstanceRef.current;

    // Clear existing markers
    Object.values(markersRef.current).forEach(m => m.remove());
    markersRef.current = {};

    // Custom icon helper
    const createCustomIcon = (isProperty: boolean, isSelected: boolean) => {
      const bgClass = isProperty
        ? (isSelected ? 'bg-blue-600 text-white scale-125 ring-4 ring-blue-500/40 shadow-blue-600/40' : 'bg-blue-600 text-white')
        : (isSelected ? 'bg-indigo-600 text-white scale-110' : 'bg-slate-800 text-slate-200 border border-slate-600');

      return L.divIcon({
        className: 'custom-leaflet-marker',
        html: `
          <div class="flex items-center justify-center w-8 h-8 rounded-full shadow-lg transition-transform duration-200 ${bgClass}">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
          </div>
        `,
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32]
      });
    };

    // Add Landmarks
    NEOPOLIS_LANDMARKS.forEach((landmark) => {
      const isProperty = landmark.name.includes('Brigade') || landmark.name.includes('Godrej') || landmark.name.includes('Sattva');
      
      // Filter check
      if (activeFilter === 'Properties' && !isProperty) return;
      if (activeFilter === 'Commercial' && landmark.category !== 'Commercial') return;
      if (activeFilter === 'Hospital' && landmark.category !== 'Hospital' && landmark.category !== 'School') return;
      if (activeFilter === 'Transit' && landmark.category !== 'Transit') return;

      const isSelected = selectedItemName === landmark.name;
      const marker = L.marker(landmark.coordinates, {
        icon: createCustomIcon(isProperty, isSelected)
      }).addTo(map);

      // Popup content
      const popupHtml = `
        <div class="p-1 min-w-[200px]">
          <div class="text-[10px] uppercase font-bold tracking-wider ${isProperty ? 'text-blue-400' : 'text-slate-400'} mb-1">
            ${isProperty ? 'Luxury Residential Project' : landmark.category}
          </div>
          <div class="text-sm font-bold text-white mb-1">
            ${landmark.name}
          </div>
          <div class="flex items-center gap-2 text-xs text-slate-300 mb-2">
            <span>📍 ${landmark.distance}</span>
            <span>·</span>
            <span>⏱️ ${landmark.travelTime}</span>
          </div>
          ${isProperty ? `
            <div class="text-xs text-blue-300 font-medium">
              Click in panel to view full specifications & blueprints
            </div>
          ` : ''}
        </div>
      `;

      marker.bindPopup(popupHtml);
      marker.on('click', () => {
        setSelectedItemName(landmark.name);
      });

      markersRef.current[landmark.name] = marker;
    });

    return () => {
      // Map instance preserved across renders
    };
  }, [activeFilter, selectedItemName]);

  const handleSelectLandmark = (landmarkName: string, coords: [number, number]) => {
    setSelectedItemName(landmarkName);
    if (mapInstanceRef.current) {
      mapInstanceRef.current.flyTo(coords, 15, { duration: 1.2 });
      const marker = markersRef.current[landmarkName];
      if (marker) {
        marker.openPopup();
      }
    }
  };

  return (
    <div className="bg-[#0b1329] border border-slate-800 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-2xl overflow-hidden">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-5 sm:mb-6">
        <div>
          <div className="flex items-center gap-2 text-xs text-blue-400 font-semibold tracking-wider uppercase mb-1">
            <Navigation className="w-3.5 h-3.5" />
            <span>Kokapet Golden Triangle GIS Map</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight font-title">
            Interactive Neopolis Masterplan & Strategic Connectivity
          </h3>
          <p className="text-slate-400 text-xs sm:text-sm mt-1">
            Explore precise project locations, 8-lane expressway corridors, and proximity to Hyderabad’s financial tech epicenters.
          </p>
        </div>

        {/* Filter controls with mobile scroll */}
        <div className="overflow-x-auto pb-1 flex sm:flex-wrap items-center gap-1.5 p-1 bg-[#070c1a] border border-slate-800 rounded-xl">
          {(['All', 'Properties', 'Commercial', 'Transit', 'Hospital'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer min-h-[36px] flex items-center ${
                activeFilter === cat
                  ? 'bg-blue-600 text-white shadow-sm shadow-blue-600/30'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              {cat === 'All' ? 'All Points' : cat === 'Commercial' ? 'IT Titans' : cat === 'Hospital' ? 'Civic & Health' : cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">
        {/* Interactive Map Box */}
        <div className="lg:col-span-8 min-h-[300px] sm:min-h-[460px] rounded-2xl overflow-hidden border border-slate-800 relative z-10 shadow-inner">
          <div ref={mapContainerRef} className="w-full h-full min-h-[300px] sm:min-h-[460px]" />
          <div className="absolute top-3 left-3 z-20 bg-[#070c1a]/90 backdrop-blur-md border border-slate-800 px-3 py-1.5 rounded-lg text-[11px] text-slate-300 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-500 inline-block shadow-sm shadow-blue-400"></span>
            <span>Neopolis Residential Corridors</span>
          </div>
        </div>

        {/* Key Destinations / Landmarks list */}
        <div className="lg:col-span-4 flex flex-col justify-between bg-[#070c1a]/80 border border-slate-800 rounded-2xl p-4 sm:p-5">
          <div className="mb-3">
            <h4 className="text-xs uppercase tracking-wider font-semibold text-slate-400 mb-2">
              Strategic Vicinity (Click to Locate)
            </h4>
            <div className="space-y-2 max-h-[340px] overflow-y-auto pr-1">
              {NEOPOLIS_LANDMARKS.map((lm) => {
                const isSelected = selectedItemName === lm.name;
                const isProperty = lm.name.includes('Brigade') || lm.name.includes('Godrej') || lm.name.includes('Sattva');
                return (
                  <button
                    key={lm.name}
                    onClick={() => handleSelectLandmark(lm.name, lm.coordinates)}
                    className={`w-full text-left p-2.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                      isSelected
                        ? 'bg-[#0b1329] border-blue-500/80 text-white shadow-md shadow-blue-900/20'
                        : 'bg-[#0b1329]/50 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-[#0b1329]'
                    }`}
                  >
                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5">
                        <MapPin className={`w-3.5 h-3.5 shrink-0 ${isProperty ? 'text-blue-400' : 'text-slate-500'}`} />
                        <span className={`text-xs font-semibold truncate ${isSelected ? 'text-blue-300' : 'text-white'}`}>
                          {lm.name}
                        </span>
                      </div>
                      <div className="text-[11px] text-slate-400 mt-0.5 pl-5">
                        {lm.travelTime} · {lm.distance}
                      </div>
                    </div>

                    {isProperty && onSelectProperty && (
                      <span className="shrink-0 text-[10px] text-blue-300 font-semibold uppercase bg-blue-950/80 border border-blue-800/80 px-2 py-0.5 rounded">
                        View
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="pt-3 border-t border-slate-800 text-[11px] text-slate-400 space-y-1.5">
            <div className="flex justify-between">
              <span>Financial District:</span>
              <span className="text-white font-medium">5 Mins via Neopolis Link Road</span>
            </div>
            <div className="flex justify-between">
              <span>Outer Ring Road:</span>
              <span className="text-white font-medium">Exit 1 Trumpet (Direct Ramp)</span>
            </div>
            <div className="flex justify-between">
              <span>International Airport:</span>
              <span className="text-white font-medium">22 Mins Signal-Free</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
