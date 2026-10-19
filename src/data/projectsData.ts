export interface ProjectSpec {
  label: string;
  value: string;
}

export interface FloorPlan {
  id: string;
  bhk: string;
  name: string;
  superBuiltUpArea: string;
  carpetArea?: string;
  bedrooms: string;
  bathrooms: string;
  balconies: string;
  facing: string;
  keyFeatures: string[];
  roomDimensions: {
    livingDining: string;
    masterBedroom: string;
    bedroom2: string;
    bedroom3: string;
    bedroom4?: string;
    bedroom5?: string;
    kitchen: string;
    balconies: string;
  };
}

export interface ProjectData {
  id: string;
  name: string;
  statusBadge: string;
  statusType: 'featured' | 'premium' | 'landmark' | 'prelaunch' | 'upcoming';
  isDetailed: boolean;
  location: string;
  headline: string;
  description: string;
  image: string;
  imageAlt: string;
  configurations?: string[];
  areaRange?: string;
  keySpecs?: ProjectSpec[];
  highlights?: string[];
  suppliedFeatures?: string[];
  locationHighlights?: string[];
  floorPlans?: FloorPlan[];
  ctaLabel: string;
  additionalDetailsNote?: string;
}

export const PROJECTS_DATA: ProjectData[] = [
  {
    id: 'sattva-lakeridge',
    name: 'Sattva Lakeridge',
    statusBadge: 'Featured Project',
    statusType: 'featured',
    isDetailed: true,
    location: 'Neopolis / Hyderabad',
    headline: 'High-Rise Luxury in Hyderabad’s Most Promising Location.',
    description: 'Discover spacious luxury residences designed around expansive views, premium lifestyle amenities, and environmentally conscious living in Hyderabad’s growing luxury corridor.',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'Sattva Lakeridge high-rise luxury residential towers with lakefront vistas',
    configurations: ['3 BHK', '4 BHK', '5 BHK'],
    areaRange: '2,744–5,472 sq.ft.',
    keySpecs: [
      { label: 'Land Area', value: '9.5 Acres' },
      { label: 'Towers', value: '6 Towers' },
      { label: 'Structure', value: 'G+37 Floors' },
      { label: 'Configurations', value: '3, 4 & 5 BHK' },
      { label: 'Area Range', value: '2,744–5,472 sq.ft.' },
      { label: 'Clubhouse', value: '65,000 sq.ft.' },
      { label: 'Views', value: 'Lake View' },
      { label: 'Floor-to-Floor Height', value: '12 ft.' },
      { label: 'Glass Specification', value: 'Double-Glazed' },
      { label: 'Green Certification', value: 'IGBC Gold Rated (as supplied)' }
    ],
    highlights: [
      'Floor-to-ceiling windows with expansive natural illumination',
      'Acoustic double-glazed glass for enhanced thermal and sound insulation',
      'Panoramic unhindered lake-view residences',
      '65,000 sq.ft. multi-level recreational clubhouse with temperature pool',
      'Spacious 3, 4 & 5 BHK apartment configurations with 12 ft ceilings'
    ],
    floorPlans: [
      {
        id: 'sl-3bhk',
        bhk: '3 BHK',
        name: '3 Bedroom Lake Suite',
        superBuiltUpArea: '2,744 sq.ft.',
        carpetArea: '1,960 sq.ft.',
        bedrooms: '3 Bedrooms',
        bathrooms: '3 En-Suite Baths + Powder Room',
        balconies: '2 Expansive Lake-View Balconies',
        facing: 'East / North-East',
        keyFeatures: [
          'Direct lake-facing living and master suite',
          'Acoustic double-glazed floor-to-ceiling windows',
          'Dry and wet kitchen separation with utility deck'
        ],
        roomDimensions: {
          livingDining: '28’ 6” × 17’ 0”',
          masterBedroom: '18’ 4” × 14’ 6”',
          bedroom2: '15’ 0” × 13’ 0”',
          bedroom3: '14’ 0” × 12’ 6”',
          kitchen: '14’ 0” × 10’ 6”',
          balconies: '22’ 0” × 6’ 6”'
        }
      },
      {
        id: 'sl-4bhk',
        bhk: '4 BHK',
        name: '4 Bedroom Grand Residence',
        superBuiltUpArea: '3,850 sq.ft.',
        carpetArea: '2,780 sq.ft.',
        bedrooms: '4 Bedrooms + Maid Quarters',
        bathrooms: '4 En-Suite Baths + Powder + Maid Bath',
        balconies: '3 Wraparound Panoramic Terraces',
        facing: 'Corner East-Facing',
        keyFeatures: [
          'Dual master suites with walk-in designer closets',
          'Expansive formal and family double living rooms',
          'Independent maid suite with separate service entry'
        ],
        roomDimensions: {
          livingDining: '34’ 0” × 20’ 0”',
          masterBedroom: '21’ 0” × 16’ 0”',
          bedroom2: '17’ 0” × 14’ 0”',
          bedroom3: '16’ 0” × 13’ 0”',
          bedroom4: '14’ 6” × 12’ 6”',
          kitchen: '16’ 6” × 12’ 0”',
          balconies: '30’ 0” × 7’ 6”'
        }
      },
      {
        id: 'sl-5bhk',
        bhk: '5 BHK',
        name: '5 Bedroom Sky Manor',
        superBuiltUpArea: '5,472 sq.ft.',
        carpetArea: '4,020 sq.ft.',
        bedrooms: '5 Bedrooms + Maid Suite + Private Lounge',
        bathrooms: '5 Luxury Baths + Powder Room',
        balconies: '360° Viewing Terraces & Sky Deck',
        facing: 'Panoramic Corner',
        keyFeatures: [
          'Full-floor panoramic footprint with unhindered lake horizon',
          'Private elevator lobby opening directly into the grand foyer',
          'Bespoke entertainment lounge and temperature-controlled wine cellar zone'
        ],
        roomDimensions: {
          livingDining: '42’ 0” × 24’ 0”',
          masterBedroom: '25’ 0” × 18’ 0”',
          bedroom2: '19’ 0” × 15’ 0”',
          bedroom3: '18’ 0” × 14’ 6”',
          bedroom4: '16’ 0” × 14’ 0”',
          bedroom5: '15’ 6” × 13’ 0”',
          kitchen: '20’ 0” × 14’ 0”',
          balconies: '45’ 0” × 9’ 0”'
        }
      }
    ],
    ctaLabel: 'Enquire About Sattva Lakeridge'
  },
  {
    id: 'brigade-barcelona',
    name: 'Brigade Barcelona',
    statusBadge: 'Premium Residence',
    statusType: 'premium',
    isDetailed: true,
    location: 'Neopolis Phase III, Kokapet, Hyderabad',
    headline: 'Spanish-Inspired Architecture. Contemporary Luxury.',
    description: 'Brigade Barcelona by Brigade Group is presented as a premium residential development inspired by Spanish architecture, combining contemporary design, spacious residences, and elevated lifestyle amenities.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'Brigade Barcelona Spanish architectural luxury residential tower',
    configurations: ['3 BHK', '3.5 BHK', '4 BHK'],
    areaRange: '2,790–3,764 sq.ft. (Super Built-Up)',
    keySpecs: [
      { label: 'Land Area', value: 'Approx. 4.04 acres' },
      { label: 'Total Apartments', value: '666 Residences' },
      { label: 'Tower Configuration', value: 'One T-shaped mono tower' },
      { label: 'Floors', value: '52 floors' },
      { label: 'Structure', value: '2 Basement + 5 Podium + 52 Floors' },
      { label: 'Configurations', value: '3 BHK, 3.5 BHK & 4 BHK' },
      { label: 'Apartment Sizes', value: '2,790–3,764 sq.ft.' },
      { label: 'Clubhouse & Amenities', value: 'Approx. 150,000 sq.ft. (Club & Sky Lounges)' },
      { label: 'Possession Date', value: 'July 2032 (as supplied)' }
    ],
    highlights: [
      'Iconic Spanish architectural motif blended with contemporary glass lines',
      'Monumental ~1.5 Lakh sq.ft. clubhouse and high-altitude sky lounges',
      'Single landmark 52-storey T-shaped mono tower maximizing corner views',
      'Spacious residences spanning 2,790 to 3,764 sq.ft.',
      'Possession timeline: July 2032 (as supplied in developer brief)'
    ],
    floorPlans: [
      {
        id: 'bb-3bhk',
        bhk: '3 BHK',
        name: '3 Bedroom Spanish Classic',
        superBuiltUpArea: '2,790 sq.ft.',
        carpetArea: '1,985 sq.ft.',
        bedrooms: '3 Bedrooms',
        bathrooms: '3 Full Baths + Powder Room',
        balconies: '2 Spanish Arch Viewing Balconies',
        facing: 'East / West',
        keyFeatures: [
          'Spanish-inspired arched balcony portals with terracotta detailing',
          'Dual living and dining pavilion with 11 ft clear ceiling heights',
          'Spacious kitchen layout with utility wash and store area'
        ],
        roomDimensions: {
          livingDining: '29’ 0” × 16’ 8”',
          masterBedroom: '18’ 0” × 14’ 0”',
          bedroom2: '15’ 4” × 13’ 2”',
          bedroom3: '14’ 2” × 12’ 6”',
          kitchen: '13’ 6” × 10’ 4”',
          balconies: '20’ 0” × 6’ 6”'
        }
      },
      {
        id: 'bb-35bhk',
        bhk: '3.5 BHK',
        name: '3.5 Bedroom Catalan Elite',
        superBuiltUpArea: '3,240 sq.ft.',
        carpetArea: '2,320 sq.ft.',
        bedrooms: '3 Bedrooms + Multi-Purpose Study / Den',
        bathrooms: '4 Full Baths + Powder Room',
        balconies: '2 Extended Terraces',
        facing: 'North-East',
        keyFeatures: [
          'Dedicated executive study / private library room',
          'Corner orientation offering cross-ventilation and daylight',
          'Private family lounge separating guest and personal quarters'
        ],
        roomDimensions: {
          livingDining: '32’ 0” × 18’ 6”',
          masterBedroom: '19’ 6” × 15’ 0”',
          bedroom2: '16’ 0” × 13’ 6”',
          bedroom3: '15’ 0” × 13’ 0”',
          bedroom4: '11’ 0” × 10’ 0” (Study/Den)',
          kitchen: '15’ 0” × 11’ 0”',
          balconies: '24’ 0” × 7’ 0”'
        }
      },
      {
        id: 'bb-4bhk',
        bhk: '4 BHK',
        name: '4 Bedroom Barcelona Grandeur',
        superBuiltUpArea: '3,764 sq.ft.',
        carpetArea: '2,710 sq.ft.',
        bedrooms: '4 Bedrooms + Maid Quarters',
        bathrooms: '5 Luxury Baths',
        balconies: 'Corner 360° Viewing Terraces',
        facing: 'Triple-Aspect Corner',
        keyFeatures: [
          'Grand entrance foyer leading to palatial salon living area',
          'Panoramic corner terraces capturing Neopolis and lake views',
          'Five en-suite luxury bathrooms with Italian marble specifications'
        ],
        roomDimensions: {
          livingDining: '36’ 4” × 20’ 0”',
          masterBedroom: '22’ 0” × 16’ 6”',
          bedroom2: '17’ 6” × 14’ 0”',
          bedroom3: '16’ 0” × 13’ 6”',
          bedroom4: '15’ 0” × 13’ 0”',
          kitchen: '17’ 0” × 12’ 0”',
          balconies: '28’ 0” × 7’ 6”'
        }
      }
    ],
    ctaLabel: 'Enquire About Brigade Barcelona'
  },
  {
    id: 'godrej-epoque',
    name: 'Godrej Epoque',
    statusBadge: 'Luxury Landmark',
    statusType: 'landmark',
    isDetailed: true,
    location: 'Neopolis, Hyderabad',
    headline: 'An Iconic Expression of Contemporary Luxury.',
    description: 'Godrej Epoque is presented as a premium high-rise residential development with Art Deco-inspired architecture, elevated leisure spaces, and spacious luxury residences.',
    image: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'Godrej Epoque 57-storey landmark towers with Art Deco architectural styling',
    configurations: ['3 & 4 BHK Luxury Residences'],
    areaRange: 'Contact for Details',
    keySpecs: [
      { label: 'Architecture', value: 'Art Deco-inspired landmark design' },
      { label: 'Tower Height', value: '57-storey landmark towers' },
      { label: 'Signature Feature', value: 'Sky Bridge & Sky Retreat' },
      { label: 'Aquatics', value: 'Infinity Pool & Heated Indoor Pool' },
      { label: 'Podium', value: '100% Vehicle-Free Landscaped Podium' },
      { label: 'Greenery', value: 'Curated Miyawaki Forest' },
      { label: 'Financial District', value: '~5 Mins (approx. traffic-dependent)' },
      { label: 'HITEC City', value: '~10–15 Mins (approx. traffic-dependent)' }
    ],
    suppliedFeatures: [
      'Art Deco-inspired architectural geometry and metallic accents',
      '57-storey landmark towers dominating the Neopolis skyline',
      'Exclusive illuminated Sky Bridge & high-altitude Sky Retreat',
      'Rooftop Infinity Pool & Temperature-Controlled Indoor Lap Pool',
      'Fully equipped Gym, Squash & Badminton Sports Courts',
      '100% Vehicle-Free Landscaped Podium with children’s play zones',
      'Private Mini Theatre, Café & Resident Library',
      'Dense native Miyawaki Forest & Zen meditation gardens',
      'Spa, Wellness Hydrotherapy Zones & Sunset Party Decks'
    ],
    locationHighlights: [
      'Approximately 5 minutes from Financial District (traffic-dependent)',
      'Approximately 10–15 minutes to HITEC City (traffic-dependent)',
      'Direct Outer Ring Road (ORR) high-speed connectivity'
    ],
    floorPlans: [
      {
        id: 'ge-3bhk',
        bhk: '3 BHK',
        name: '3 Bedroom Art Deco Suite',
        superBuiltUpArea: 'Contact for Details',
        bedrooms: '3 Bedrooms',
        bathrooms: '3 En-Suite Baths',
        balconies: 'Skyline Viewing Deck',
        facing: 'East / North',
        keyFeatures: [
          'High-altitude living room with expansive skyline horizons',
          'Bespoke Art Deco geometric finishes and tall double-glazed glass',
          'Private foyer with smart biometric entry lock'
        ],
        roomDimensions: {
          livingDining: 'Spacious Formal Salon (Custom Layout)',
          masterBedroom: 'Grand Master Suite with Walk-in Wardrobe',
          bedroom2: 'Guest Luxury Bedroom',
          bedroom3: 'Children’s / Second Suite',
          kitchen: 'Modular Gourmet Kitchen with Utility',
          balconies: 'High-Altitude Sky Balcony'
        }
      },
      {
        id: 'ge-4bhk',
        bhk: '4 BHK',
        name: '4 Bedroom Epoque Presidential',
        superBuiltUpArea: 'Contact for Details',
        bedrooms: '4 Bedrooms + Maid Suite',
        bathrooms: '5 Baths',
        balconies: 'Dual High-Altitude Sky Decks',
        facing: 'Corner Skyline View',
        keyFeatures: [
          'Direct access to 57th-floor observatory and Sky Bridge',
          'Double-height ceiling option in formal living salon',
          'Private elevator access with dedicated service entrance'
        ],
        roomDimensions: {
          livingDining: 'Palatial Reception & Dining Salon',
          masterBedroom: 'Presidential Suite with Spa Bathroom',
          bedroom2: 'Junior Master Suite',
          bedroom3: 'Luxury Guest Bedroom',
          bedroom4: 'Private Executive Suite',
          kitchen: 'Chef’s Show Kitchen & Wet Preparation Area',
          balconies: 'Skyline Terrace overlooking Financial District'
        }
      }
    ],
    ctaLabel: 'Enquire About Godrej Epoque'
  },
  {
    id: 'sattva-lago-phase-2',
    name: 'Sattva Lago — Phase 2',
    statusBadge: 'Pre-Launch',
    statusType: 'prelaunch',
    isDetailed: true,
    location: 'Neopolis, Kokapet, Hyderabad',
    headline: 'Elevated Living. Expansive Spaces.',
    description: 'Sattva Lago Phase 2 is presented as a premium residential development featuring large-format apartments, high-rise towers, and private terraces in selected residences.',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'Sattva Lago Phase 2 high-rise residential towers and elevated leisure spaces',
    configurations: ['3 BHK', '3.5 BHK', '4 BHK'],
    areaRange: '3,100–4,900 sq.ft.',
    additionalDetailsNote: 'Pre-Launch — Details Subject to Confirmation',
    keySpecs: [
      { label: 'Land Area', value: '10 Acres' },
      { label: 'Towers', value: '5 Towers' },
      { label: 'Structure', value: 'G+46 Floors' },
      { label: 'Total Units', value: '1,261 Residences' },
      { label: 'Configurations', value: '3 BHK, 3.5 BHK & 4 BHK' },
      { label: 'Area Range', value: '3,100–4,900 sq.ft.' },
      { label: 'Private Terraces', value: 'Available in selected residences (as supplied)' },
      { label: 'Towers Open for Sale', value: 'Tower 3, Tower 4 & Tower 5 (as supplied)' }
    ],
    highlights: [
      'Expansive 10-acre greenfield high-rise enclave in Neopolis',
      'Grand G+46 storey towers overlooking scenic water bodies',
      'Large-format configurations from 3,100 to 4,900 sq.ft.',
      'Select residences with expansive private outdoor terraces',
      'Towers 3, 4 & 5 currently open for priority registrations'
    ],
    floorPlans: [
      {
        id: 'slago-3bhk',
        bhk: '3 BHK',
        name: '3 Bedroom Lago Vista',
        superBuiltUpArea: '3,100 sq.ft.',
        carpetArea: '2,240 sq.ft.',
        bedrooms: '3 Bedrooms',
        bathrooms: '3 En-Suite Baths + Powder Room',
        balconies: 'Large Panoramic Deck',
        facing: 'East / Lake View',
        keyFeatures: [
          'Open-concept living room with 11.5 ft ceiling clearance',
          'Panoramic glass frontage looking toward lake corridors',
          'Spacious kitchen and dedicated utility balcony'
        ],
        roomDimensions: {
          livingDining: '30’ 6” × 18’ 0”',
          masterBedroom: '19’ 0” × 15’ 0”',
          bedroom2: '16’ 0” × 13’ 6”',
          bedroom3: '15’ 0” × 13’ 0”',
          kitchen: '14’ 6” × 11’ 0”',
          balconies: '22’ 0” × 7’ 0”'
        }
      },
      {
        id: 'slago-35bhk',
        bhk: '3.5 BHK',
        name: '3.5 Bedroom Family Residence',
        superBuiltUpArea: '3,850 sq.ft.',
        carpetArea: '2,790 sq.ft.',
        bedrooms: '3 Bedrooms + Multi-Gen Study / Lounge',
        bathrooms: '4 Baths',
        balconies: '2 Expansive Decks',
        facing: 'North-East',
        keyFeatures: [
          'Separate private family entertainment room',
          'Three sprawling ensuite bedroom chambers',
          'Expansive outdoor deck with landscaped planter boxes'
        ],
        roomDimensions: {
          livingDining: '35’ 0” × 19’ 6”',
          masterBedroom: '21’ 6” × 16’ 0”',
          bedroom2: '17’ 0” × 14’ 0”',
          bedroom3: '16’ 0” × 13’ 6”',
          bedroom4: '13’ 0” × 11’ 0” (Study/Lounge)',
          kitchen: '16’ 0” × 11’ 6”',
          balconies: '26’ 0” × 7’ 6”'
        }
      },
      {
        id: 'slago-4bhk',
        bhk: '4 BHK',
        name: '4 Bedroom Sky Villa with Private Terrace',
        superBuiltUpArea: '4,900 sq.ft.',
        carpetArea: '3,580 sq.ft.',
        bedrooms: '4 Bedrooms + Maid Quarters',
        bathrooms: '5 Baths',
        balconies: 'Private Sky Terrace (Select Residences)',
        facing: 'Corner Lake Horizon',
        keyFeatures: [
          'Exclusive private open-to-sky terrace garden in select units',
          'Double master suites with private terrace access',
          'Direct service elevator access for staff and delivery'
        ],
        roomDimensions: {
          livingDining: '40’ 0” × 22’ 0”',
          masterBedroom: '24’ 0” × 17’ 6”',
          bedroom2: '19’ 0” × 15’ 0”',
          bedroom3: '17’ 6” × 14’ 0”',
          bedroom4: '16’ 0” × 13’ 6”',
          kitchen: '18’ 6” × 13’ 0”',
          balconies: '34’ 0” × 8’ 6”'
        }
      }
    ],
    ctaLabel: 'Register Your Interest'
  },
  {
    id: 'cascades',
    name: 'Cascades',
    statusBadge: 'Launching Soon',
    statusType: 'upcoming',
    isDetailed: false,
    location: 'Neopolis — Hyderabad',
    headline: 'A New Address Is on the Horizon.',
    description: 'Discover upcoming residential opportunities in Hyderabad’s evolving premium property landscape.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'Cascades upcoming luxury high-rise development concept in Neopolis',
    additionalDetailsNote: 'To Be Announced',
    ctaLabel: 'Get Launch Updates'
  },
  {
    id: 'msn',
    name: 'MSN',
    statusBadge: 'Launching Soon',
    statusType: 'upcoming',
    isDetailed: false,
    location: 'Neopolis — Hyderabad',
    headline: 'Stay Ahead of What’s Next.',
    description: 'Register your interest to receive project announcements and further information when available.',
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb18f156f?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'MSN upcoming luxury development architecture in Neopolis Hyderabad',
    additionalDetailsNote: 'To Be Announced',
    ctaLabel: 'Notify Me'
  },
  {
    id: 'rise-by-9',
    name: 'Rise By 9',
    statusBadge: 'Launching Soon',
    statusType: 'upcoming',
    isDetailed: false,
    location: 'Neopolis — Hyderabad',
    headline: 'Your Next Luxury Address Could Be Here.',
    description: 'Be among the first to receive updates about this upcoming residential opportunity.',
    image: 'https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'Rise By 9 upcoming luxury residential landmark in Neopolis',
    additionalDetailsNote: 'To Be Announced',
    ctaLabel: 'Register Interest'
  }
];

export const LIFESTYLE_AMENITIES = [
  {
    id: 'swimming-pools',
    title: 'Luxury Swimming Pools',
    category: 'Aquatics & Leisure',
    description: 'Infinity edge lap pools and temperature-controlled indoor aquatic facilities designed for year-round relaxation and wellness.',
    image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=800&q=80',
    features: ['Olympic-Length Lap Pools', 'Kids’ Heated Splash Deck', 'Jacuzzi Hydrotherapy Pods', 'Sun Lounger Decks']
  },
  {
    id: 'landscaped-gardens',
    title: 'Landscaped Gardens',
    category: 'Nature & Greenery',
    description: 'Curated botanical lawns, native Miyawaki micro-forests, reflexology footpaths, and quiet zen seating alcoves.',
    image: 'https://images.unsplash.com/photo-1584467735871-8e85353a8413?auto=format&fit=crop&w=800&q=80',
    features: ['Native Miyawaki Forest', 'Reflexology Walking Track', 'Aromatic Herb Gardens', 'Sculpture Pavilions']
  },
  {
    id: 'modern-clubhouses',
    title: 'Modern Clubhouses',
    category: 'Social & Hospitality',
    description: 'Sprawling multi-level club facilities up to 150,000 sq.ft. featuring private resident lounges, banqueting salons, and bespoke cafés.',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
    features: ['Up to 1.5 Lakh sq.ft.', 'Private Resident Banquet', 'Business Executive Suites', 'Artisan Coffee Bar']
  },
  {
    id: 'fitness-wellness',
    title: 'Fitness & Wellness',
    category: 'Health & Vitality',
    description: 'State-of-the-art strength and cardio zones, aerial yoga pavilions, steam & sauna suites, and restorative therapeutic spas.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80',
    features: ['Technogym / LifeFitness Equipment', 'Outdoor Yoga Deck', 'Steam & Sauna Cabins', 'Nutrition & Juice Bar']
  },
  {
    id: 'sports-facilities',
    title: 'Sports Facilities',
    category: 'Active Recreation',
    description: 'International-standard indoor badminton courts, glass squash courts, rooftop tennis courts, and multi-sport turf arenas.',
    image: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?auto=format&fit=crop&w=800&q=80',
    features: ['Indoor Badminton Arenas', 'Glass-Back Squash Courts', 'Floodlit Tennis Courts', 'Golf Simulation Studio']
  },
  {
    id: 'spacious-residences',
    title: 'Spacious Residences',
    category: 'Interior Splendor',
    description: 'Expansive 12 ft. ceiling heights, acoustic double-glazing, open formal living salons, and private panoramic sky terraces.',
    image: 'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=800&q=80',
    features: ['12 ft. Ceiling Clearance', 'Double-Glazed Facades', 'Large Format Floor Plates', 'Corner Glass Living Rooms']
  },
  {
    id: 'childrens-play',
    title: 'Children’s Play Areas',
    category: 'Family & Play',
    description: '100% vehicle-free landscaped podium play arenas, sensory sandpits, and creative hobby workshops for growing minds.',
    image: 'https://images.unsplash.com/photo-1587301621068-fa21345abd37?auto=format&fit=crop&w=800&q=80',
    features: ['Vehicle-Free Podium Safety', 'Rubberized Adventure Tracks', 'Creative Arts Atelier', 'Toddler Activity Zone']
  },
  {
    id: 'rooftop-sky-lounges',
    title: 'Rooftop & Sky Lounges',
    category: 'Skyline Horizons',
    description: 'High-altitude sky bridges, observation telescope decks, and panoramic sunset viewing terraces 50+ storeys above Hyderabad.',
    image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=800&q=80',
    features: ['High-Altitude Sky Bridge', 'Stargazing Telescope Deck', 'Private Cocktail Lounges', '360° Sunset Terraces']
  }
];

export const LOCATION_DISTANCES = [
  {
    destination: 'Financial District',
    travelTime: '~5 Minutes',
    distance: '3.2 km',
    details: 'Immediate access to Microsoft, Google, Amazon, Apple, Micron, Salesforce campus & US Consulate General.'
  },
  {
    destination: 'HITEC City & Cyber Towers',
    travelTime: '~10–15 Minutes',
    distance: '8.5 km',
    details: 'Direct multi-lane arterial connectivity via Financial District corridor to Mindspace and Cyber Gateway.'
  },
  {
    destination: 'Rajiv Gandhi International Airport (RGIA)',
    travelTime: '~20–25 Minutes',
    distance: '24 km',
    details: 'Direct signal-free transit via Outer Ring Road (ORR) 8-lane Kokapet trumpet interchange.'
  },
  {
    destination: 'Gachibowli Stadium & Tech Hub',
    travelTime: '~8–10 Minutes',
    distance: '6.0 km',
    details: 'Seamless access to premier sports arenas, hospital clusters, and educational institutions.'
  },
  {
    destination: 'Jubilee Hills / Banjara Hills',
    travelTime: '~20–25 Minutes',
    distance: '16 km',
    details: 'Direct access to Hyderabad’s premier luxury fine-dining, luxury retail, and elite social clubs.'
  }
];

export const NEOPOLIS_CORRIDOR_ADVANTAGES = [
  {
    title: '45-Meter Wide Master Roads',
    description: 'Designed with massive 8-lane road grids, dedicated bicycle paths, pedestrian boulevards, and landscaped median dividers.'
  },
  {
    title: '100% Underground Utility Grid',
    description: 'Modern subterranean ducts house all high-voltage electrical cables, telecommunications, gas mains, and dual water pipes with zero overhead wires.'
  },
  {
    title: 'Direct ORR Trumpet Interchange',
    description: 'Dedicated multi-tier trumpet flyover eliminates surface bottlenecks and provides uninterrupted high-speed access to the Outer Ring Road.'
  },
  {
    title: 'Eco-Buffers & Natural Lakes',
    description: 'Surrounded by Osman Sagar and Gandipet lake catchment zones, providing unhindered breezes, cooler micro-climates, and permanent green vistas.'
  }
];

export const FAQS = [
  {
    question: 'What makes Neopolis, Kokapet Hyderabad’s premier residential corridor?',
    answer: 'Neopolis in Kokapet is Telangana’s flagship master-planned urban layout spanning over 530 acres. It features 45-meter-wide arterial roads, 100% underground utility grid with zero overhead cables, direct 8-lane ORR connectivity, and prime high-rise zoning attracting India’s leading developers like Sattva, Brigade, and Godrej.'
  },
  {
    question: 'Which projects are currently available for enquiry in Neopolis?',
    answer: 'The featured developments include Sattva Lakeridge (G+37, 3 to 5 BHK), Brigade Barcelona (52 storeys, Spanish-inspired 3 to 4 BHK), Godrej Epoque (57 storeys with sky bridge), and Sattva Lago Phase 2 (G+46, 10-acre enclave). Upcoming launches include Cascades, MSN, and Rise By 9.'
  },
  {
    question: 'How close is Neopolis to major IT hubs and the airport?',
    answer: 'Neopolis is located just ~5 minutes from the Financial District, ~10–15 minutes from HITEC City, and ~20–25 minutes from Rajiv Gandhi International Airport (RGIA) via the direct Kokapet ORR trumpet interchange.'
  },
  {
    question: 'Are site visits and private presentations available?',
    answer: 'Yes. You can register your interest through our advisory desk to arrange a private project consultation, receive verified developer brochures and floor plans, or schedule an escorted site visit to Neopolis.'
  }
];
