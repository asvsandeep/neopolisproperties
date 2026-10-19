import React, { useState } from 'react';
import { FAQS } from '../data/projectsData';
import { ChevronDown, Building, Award, Shield, Trees } from 'lucide-react';

export const AboutNeopolisSection: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const pillars = [
    {
      icon: Building,
      title: 'Institutional Grade Developers',
      description: 'Home to flagship projects by premier national developers including Sattva Group, Brigade Group, and Godrej Properties.'
    },
    {
      icon: Award,
      title: 'Zoned High-Rise Elegance',
      description: 'Planned with high floor-space index (FSI) provisions allowing towers between 37 to 57 storeys with generous open green podiums.'
    },
    {
      icon: Shield,
      title: 'Zero Overhead Clutter',
      description: 'Every electrical line, optical fiber duct, drainage channel, and municipal water line is completely subterranean.'
    },
    {
      icon: Trees,
      title: 'Permanent Scenic Catchments',
      description: 'Bordered by Gandipet and Osman Sagar scenic reservoirs ensuring permanent ecological buffers and fresh cross-ventilation.'
    }
  ];

  return (
    <section id="about-neopolis" className="py-20 lg:py-28 bg-[#F8F6F1] text-[#20242C] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-3">
          <span className="text-xs font-sans font-semibold tracking-[0.25em] text-[#C7A66A] uppercase block">
            The Micro-Market Narrative
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#101827] tracking-tight leading-[1.15]">
            About Neopolis, Kokapet
          </h2>
          <p className="text-base text-[#737780] font-sans font-normal leading-relaxed">
            Hyderabad’s most anticipated luxury enclave, engineered from the ground up as a master-planned, high-density residential and commercial destination.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pillars.map((pillar, idx) => {
            const IconComponent = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-white p-6 rounded-md border border-neutral-200 shadow-xs space-y-3 hover:border-[#C7A66A]/40 transition-colors"
              >
                <div className="w-10 h-10 rounded-sm bg-[#101827] text-[#C7A66A] flex items-center justify-center">
                  <IconComponent className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-serif font-medium text-[#101827]">
                  {pillar.title}
                </h3>
                <p className="text-xs text-[#737780] font-sans leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* FAQs Accordion */}
        <div className="bg-white rounded-md border border-neutral-200 p-8 sm:p-12 shadow-xs">
          <div className="max-w-2xl mb-8 space-y-2">
            <span className="text-xs font-sans font-semibold text-[#C7A66A] uppercase tracking-wider">
              Common Inquiries
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-normal text-[#101827]">
              Frequently Asked Questions About Neopolis Residences
            </h3>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="border border-neutral-200/90 rounded-sm overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 bg-neutral-50 hover:bg-neutral-100/70 transition-colors cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="font-serif text-base sm:text-lg text-[#101827] font-medium">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#C7A66A] shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 py-4 bg-white text-xs sm:text-sm text-[#737780] font-sans leading-relaxed border-t border-neutral-200/60 animate-in fade-in duration-200">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
