import React from 'react';

export const ProjectOverviewStrip: React.FC = () => {
  const stats = [
    {
      primary: '7',
      label: 'Featured Projects',
      subtext: 'Curated corridor portfolio'
    },
    {
      primary: 'Neopolis',
      label: 'Kokapet, Hyderabad',
      subtext: 'Flagship growth sector'
    },
    {
      primary: 'Luxury',
      label: 'Residential Developments',
      subtext: 'Iconic high-rise masterplans'
    },
    {
      primary: '3 to 5 BHK',
      label: 'Selected Project Options',
      subtext: 'Subject to availability'
    }
  ];

  return (
    <section className="bg-[#101827] border-y border-[#C7A66A]/20 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 items-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`flex flex-col items-center sm:items-start text-center sm:text-left p-2 sm:p-0 ${
                index !== 0 ? 'lg:border-l lg:border-white/10 lg:pl-8' : ''
              }`}
            >
              <span className="text-xl sm:text-2xl lg:text-4xl font-serif font-normal text-[#C7A66A] tracking-tight leading-none break-words">
                {stat.primary}
              </span>
              <span className="text-[11px] sm:text-xs lg:text-sm font-sans font-semibold text-[#FFFFFF] mt-1.5 sm:mt-2 uppercase tracking-wider">
                {stat.label}
              </span>
              <span className="text-[10px] sm:text-[11px] font-sans font-light text-[#737780] mt-0.5 line-clamp-1">
                {stat.subtext}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
