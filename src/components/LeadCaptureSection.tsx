import React, { useState } from 'react';
import { PROJECTS_DATA, ProjectData } from '../data/projectsData';
import { 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  Phone, 
  Mail, 
  User, 
  Building2, 
  Layers, 
  Calendar,
  Lock
} from 'lucide-react';

interface LeadCaptureSectionProps {
  preselectedProject?: string;
  preselectedConfig?: string;
  onLeadSuccess: (leadDetails: { name: string; project: string; refId: string }) => void;
}

export const LeadCaptureSection: React.FC<LeadCaptureSectionProps> = ({
  preselectedProject,
  preselectedConfig,
  onLeadSuccess
}) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [project, setProject] = useState(preselectedProject || 'all');
  const [configuration, setConfiguration] = useState(preselectedConfig || 'flexible');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Sync if preselected props change
  React.useEffect(() => {
    if (preselectedProject) setProject(preselectedProject);
    if (preselectedConfig) setConfiguration(preselectedConfig);
  }, [preselectedProject, preselectedConfig]);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!fullName.trim()) newErrors.fullName = 'Please enter your full name';
    if (!phone.trim()) {
      newErrors.phone = 'Please provide a contact phone number';
    } else if (!/^[0-9+() -]{8,15}$/.test(phone.trim())) {
      newErrors.phone = 'Please provide a valid 10-digit contact number';
    }
    if (!email.trim()) {
      newErrors.email = 'Please provide your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      newErrors.email = 'Please provide a valid email address';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate verified luxury CRM submission
    setTimeout(() => {
      const generatedRef = `NEO-${Math.floor(100000 + Math.random() * 900000)}`;
      setIsSubmitting(false);
      setSubmittedRef(generatedRef);
      onLeadSuccess({
        name: fullName,
        project: project === 'all' ? 'All Neopolis Projects' : project,
        refId: generatedRef
      });
    }, 600);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#101827] text-white relative overflow-hidden">
      {/* Ambient background accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C7A66A]/5 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/10 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Advisory Value Proposition */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-sans font-semibold tracking-[0.25em] text-[#C7A66A] uppercase block">
                Private Advisory Desk
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-white tracking-tight leading-[1.15]">
                Request Current Availability & Brochures
              </h2>
              <p className="text-base text-neutral-300 font-sans font-normal leading-relaxed">
                Connect with our verified luxury residential desk for developer floor plans, current unit allocations, payment schedules, and private on-site presentations.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3.5 p-4 rounded-sm bg-white/[0.03] border border-white/5">
                <ShieldCheck className="w-5 h-5 text-[#C7A66A] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-sans font-semibold text-white">Direct Developer Coordination</h4>
                  <p className="text-xs text-[#737780] font-sans mt-0.5">
                    Receive unadulterated specifications directly verified from authorized builder disclosures.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-sm bg-white/[0.03] border border-white/5">
                <Calendar className="w-5 h-5 text-[#C7A66A] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-sans font-semibold text-white">Escorted Site Visits</h4>
                  <p className="text-xs text-[#737780] font-sans mt-0.5">
                    Private transportation and guided walkthroughs of Neopolis Phase III masterplan and project sites.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-sm bg-white/[0.03] border border-white/5">
                <Lock className="w-5 h-5 text-[#C7A66A] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-sans font-semibold text-white">Confidential Consultation</h4>
                  <p className="text-xs text-[#737780] font-sans mt-0.5">
                    Your preferences and contact records remain strictly confidential. Zero spam policy.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-md p-8 sm:p-10 shadow-2xl text-[#20242C]">
              {submittedRef ? (
                <div className="py-8 text-center space-y-5 animate-in fade-in duration-300">
                  <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto text-emerald-600 border border-emerald-200">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div className="space-y-2">
                    <span className="text-xs font-sans font-semibold text-[#C7A66A] uppercase tracking-widest block">
                      Enquiry Registered
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-serif text-[#101827]">
                      Thank You, {fullName}
                    </h3>
                    <p className="text-sm text-[#737780] font-sans max-w-md mx-auto leading-relaxed">
                      Your consultation request for <strong className="text-[#101827]">{project === 'all' ? 'Neopolis Luxury Residences' : project}</strong> has been logged with Reference ID:
                    </p>
                    <div className="inline-block px-4 py-2 bg-neutral-100 rounded-sm font-mono text-sm font-bold text-[#101827] tracking-wider mt-2">
                      {submittedRef}
                    </div>
                  </div>

                  <p className="text-xs text-[#737780] font-sans max-w-sm mx-auto">
                    A senior relationship manager will connect via phone and email within 2 business hours with current availability and digital floor plans.
                  </p>

                  <button
                    onClick={() => {
                      setSubmittedRef(null);
                      setFullName('');
                      setPhone('');
                      setEmail('');
                      setMessage('');
                    }}
                    className="mt-4 px-6 py-2.5 border border-neutral-300 hover:border-[#101827] text-xs font-sans font-medium uppercase tracking-wider rounded-sm transition-colors cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-neutral-200 pb-4 mb-2">
                    <h3 className="text-xl sm:text-2xl font-serif text-[#101827]">
                      Schedule a Private Presentation
                    </h3>
                    <p className="text-xs text-[#737780] font-sans mt-1">
                      Complete the form below to receive verified brochures and schedule a personalized tour.
                    </p>
                  </div>

                  {/* Full Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-sans font-semibold text-[#101827] uppercase tracking-wider block">
                        Full Name *
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="e.g. Rajesh Reddy"
                          className={`w-full px-3.5 py-2.5 text-xs sm:text-sm font-sans bg-neutral-50 border rounded-sm focus:outline-none focus:ring-1 focus:ring-[#C7A66A] focus:border-[#C7A66A] ${
                            errors.fullName ? 'border-red-500' : 'border-neutral-300'
                          }`}
                        />
                      </div>
                      {errors.fullName && (
                        <span className="text-[11px] text-red-600 block">{errors.fullName}</span>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-sans font-semibold text-[#101827] uppercase tracking-wider block">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <input
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+91 98765 43210"
                          className={`w-full px-3.5 py-2.5 text-xs sm:text-sm font-sans bg-neutral-50 border rounded-sm focus:outline-none focus:ring-1 focus:ring-[#C7A66A] focus:border-[#C7A66A] ${
                            errors.phone ? 'border-red-500' : 'border-neutral-300'
                          }`}
                        />
                      </div>
                      {errors.phone && (
                        <span className="text-[11px] text-red-600 block">{errors.phone}</span>
                      )}
                    </div>
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-sans font-semibold text-[#101827] uppercase tracking-wider block">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. rajesh.reddy@example.com"
                      className={`w-full px-3.5 py-2.5 text-xs sm:text-sm font-sans bg-neutral-50 border rounded-sm focus:outline-none focus:ring-1 focus:ring-[#C7A66A] focus:border-[#C7A66A] ${
                        errors.email ? 'border-red-500' : 'border-neutral-300'
                      }`}
                    />
                    {errors.email && (
                      <span className="text-[11px] text-red-600 block">{errors.email}</span>
                    )}
                  </div>

                  {/* Project Selector & Configuration Preference */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-sans font-semibold text-[#101827] uppercase tracking-wider block">
                        Project of Interest
                      </label>
                      <select
                        value={project}
                        onChange={(e) => setProject(e.target.value)}
                        className="w-full px-3 py-2.5 text-xs sm:text-sm font-sans bg-neutral-50 border border-neutral-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-[#C7A66A] focus:border-[#C7A66A]"
                      >
                        <option value="all">All 7 Neopolis Projects</option>
                        {PROJECTS_DATA.map((p) => (
                          <option key={p.id} value={p.name}>
                            {p.name} ({p.statusBadge})
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-sans font-semibold text-[#101827] uppercase tracking-wider block">
                        Preferred Configuration
                      </label>
                      <select
                        value={configuration}
                        onChange={(e) => setConfiguration(e.target.value)}
                        className="w-full px-3 py-2.5 text-xs sm:text-sm font-sans bg-neutral-50 border border-neutral-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-[#C7A66A] focus:border-[#C7A66A]"
                      >
                        <option value="flexible">Flexible / Exploring Options</option>
                        <option value="3 BHK">3 BHK Luxury Residence</option>
                        <option value="3.5 BHK">3.5 BHK (with Study/Lounge)</option>
                        <option value="4 BHK">4 BHK Grand Residence</option>
                        <option value="5 BHK">5 BHK Sky Villa / Penthouse</option>
                      </select>
                    </div>
                  </div>

                  {/* Message (Optional) */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-sans font-semibold text-[#101827] uppercase tracking-wider block">
                      Specific Inquiries / Preferred Site Visit Date (Optional)
                    </label>
                    <textarea
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Please share pricing, floor plan details, or request a weekend site walkthrough..."
                      className="w-full px-3.5 py-2 text-xs sm:text-sm font-sans bg-neutral-50 border border-neutral-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-[#C7A66A] focus:border-[#C7A66A]"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-[#101827] hover:bg-[#1a2538] active:bg-black text-[#C7A66A] hover:text-white text-xs sm:text-sm font-sans font-semibold uppercase tracking-widest rounded-sm transition-all shadow-md cursor-pointer flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span>Logging Request...</span>
                    ) : (
                      <>
                        <span>Submit Private Consultation Request</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#737780] font-sans pt-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Strict privacy assurance. Details protected and never sold.</span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
