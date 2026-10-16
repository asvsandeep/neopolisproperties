import React, { useState } from 'react';
import { Send, CheckCircle2, Shield, Building2, Sparkles } from 'lucide-react';
import { submitLead } from '../services/leadService';
import { PropertyId } from '../types';

interface LeadCaptureFormProps {
  variant: 'top' | 'bottom';
  defaultProperty?: PropertyId | 'all';
  sourcePageName: string;
  onSubmitted: (leadId: string, leadName: string) => void;
}

export const LeadCaptureForm: React.FC<LeadCaptureFormProps> = ({
  variant,
  defaultProperty = 'all',
  sourcePageName,
  onSubmitted
}) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [propertyInterest, setPropertyInterest] = useState<string>(
    defaultProperty === 'brigade-barcelona'
      ? 'Brigade Barcelona'
      : defaultProperty === 'godrej-epoque'
      ? 'Godrej Epoque'
      : defaultProperty === 'sattva-lago'
      ? 'SATTVA LAGO – Phase 2'
      : 'All Neopolis Projects'
  );
  const [configuration, setConfiguration] = useState('3.5 BHK');
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    // Form validation
    if (!fullName.trim()) {
      setErrorMsg('Please enter your full name');
      return;
    }
    const cleanPhone = phone.replace(/[^0-9]/g, '');
    if (cleanPhone.length < 10) {
      setErrorMsg('Please enter a valid 10-digit mobile number');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMsg('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);
    try {
      const result = await submitLead({
        fullName: fullName.trim(),
        phone: phone.trim(),
        email: email.trim(),
        propertyInterest,
        configuration,
        notes: variant === 'bottom' ? notes : undefined,
        sourcePage: sourcePageName
      });

      // Successful submission redirect to thank you page
      onSubmitted(result.id, result.fullName);
    } catch (err) {
      console.error('Submission failed', err);
      setErrorMsg('An error occurred. Please try again.');
      setIsSubmitting(false);
    }
  };

  if (variant === 'top') {
    return (
      <div className="bg-white border border-blue-200/90 rounded-2xl p-4 md:p-6 shadow-xl shadow-blue-900/5 relative overflow-hidden">
        {/* Subtle royal blue accent hairline */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-sky-400 to-blue-700" />
        
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-4">
          <div>
            <div className="flex items-center gap-2 text-xs text-blue-600 font-semibold tracking-wider uppercase mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Priority Access · Direct Developer Rates</span>
            </div>
            <h3 className="text-lg md:text-xl font-bold text-slate-900 tracking-tight font-title">
              Register for Floor Plans, Official Pricing & Private Site Tour
            </h3>
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-600 shrink-0 font-medium">
            <Shield className="w-3.5 h-3.5 text-blue-600" />
            <span>Zero Brokerage · Verified Direct Rates</span>
          </div>
        </div>

        {errorMsg && (
          <div className="mb-4 p-2.5 bg-red-50 border border-red-200 rounded-lg text-xs text-red-700 font-medium">
            {errorMsg}
          </div>
        )}

        <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          <div>
            <label className="block text-[11px] font-semibold text-slate-700 mb-1">Your Full Name *</label>
            <input
              type="text"
              required
              placeholder="e.g. Vikram Reddy"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full bg-slate-50 border border-slate-300 focus:bg-white focus:border-blue-600 focus:ring-1 focus:ring-blue-600 rounded-xl px-3.5 py-2.5 min-h-[44px] text-base sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none transition-colors"
            />
          </div>

          <div>
            <label className="block text-[11px] font-semibold text-slate-700 mb-1">Mobile Phone Number *</label>
            <input
              type="tel"
              required
              placeholder="+91 98490 XXXXX"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full bg-slate-50 border border-slate-300 focus:bg-white focus:border-blue-600 focus:ring-1 focus:ring-blue-600 rounded-xl px-3.5 py-2.5 min-h-[44px] text-base sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none transition-colors"
            />
          </div>

          <div>
            <label className="block text-[11px] font-semibold text-slate-700 mb-1">Official Email *</label>
            <input
              type="email"
              required
              placeholder="name@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-slate-50 border border-slate-300 focus:bg-white focus:border-blue-600 focus:ring-1 focus:ring-blue-600 rounded-xl px-3.5 py-2.5 min-h-[44px] text-base sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none transition-colors"
            />
          </div>

          <div>
            <label className="block text-[11px] font-semibold text-slate-700 mb-1">Interested Project</label>
            <select
              value={propertyInterest}
              onChange={(e) => setPropertyInterest(e.target.value)}
              className="w-full bg-slate-50 border border-slate-300 focus:bg-white focus:border-blue-600 focus:ring-1 focus:ring-blue-600 rounded-xl px-3.5 py-2.5 min-h-[44px] text-base sm:text-sm text-slate-900 focus:outline-none transition-colors"
            >
              <option value="All Neopolis Projects">All Neopolis Projects</option>
              <option value="Brigade Barcelona">Brigade Barcelona (52 Fl)</option>
              <option value="Godrej Epoque">Godrej Epoque (57 Fl)</option>
              <option value="SATTVA LAGO – Phase 2">Sattva Lago Phase 2 (10 Ac)</option>
            </select>
          </div>

          <div className="sm:col-span-2 lg:col-span-1 flex items-end">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold px-4 py-2.5 min-h-[44px] rounded-xl text-sm transition-all duration-150 flex items-center justify-center gap-2 shadow-md shadow-blue-600/25 disabled:opacity-50 cursor-pointer whitespace-nowrap active:scale-[0.98]"
            >
              {isSubmitting ? (
                <span>Connecting...</span>
              ) : (
                <>
                  <span>Get Instant Pricing</span>
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    );
  }

  // Bottom comprehensive luxury variant (Rich Blue and White Division)
  return (
    <section className="bg-gradient-to-br from-[#0c2354] via-[#091b42] to-[#061433] rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-sky-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 relative z-10">
        {/* Left copy & credibility */}
        <div className="lg:col-span-5 flex flex-col justify-between text-white">
          <div>
            <div className="inline-flex items-center gap-2 text-xs text-blue-300 font-semibold tracking-wider uppercase mb-3">
              <Building2 className="w-3.5 h-3.5" />
              <span>Direct Developer Advisory Desk</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight mb-4 font-title">
              Reserve Your Private Residence at Neopolis
            </h2>

            <p className="text-blue-100/90 text-sm leading-relaxed mb-6 font-light">
              Connect with our Senior Neopolis Real Estate Portfolio Advisors. Receive authenticated brochures, payment plans, unit allotment matrices, and schedule a chauffeured site tour of Kokapet.
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-sky-400 mt-1 shrink-0" />
                <span className="text-xs text-blue-100">Direct Developer First-Mover Pricing (Zero Brokerage Fee)</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-sky-400 mt-1 shrink-0" />
                <span className="text-xs text-blue-100">Complete Architectural Blueprints & High-Res Floor Plans</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-sky-400 mt-1 shrink-0" />
                <span className="text-xs text-blue-100">Verified RERA Sanctions & Clear Title Transparency</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-sky-400 mt-1 shrink-0" />
                <span className="text-xs text-blue-100">Dedicated Response within 15 Minutes from Senior Advisor</span>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-blue-900/60 text-xs text-blue-200 flex items-center justify-between">
            <span className="flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-sky-400" />
              RERA Compliant & Verified
            </span>
            <span>Neopolis, Kokapet, Hyderabad</span>
          </div>
        </div>

        {/* Right form fields on a pristine white card */}
        <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 shadow-2xl border border-slate-100">
          <div className="mb-4">
            <h3 className="text-lg font-bold text-slate-900 font-title">Direct Sales Registration</h3>
            <p className="text-xs text-slate-500 mt-0.5">Fill the form below to receive priority pricing & floor plans.</p>
          </div>

          {errorMsg && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-xs text-red-700 font-medium">
              {errorMsg}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Dr. Rajesh Kumar"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 focus:bg-white focus:border-blue-600 focus:ring-1 focus:ring-blue-600 rounded-xl px-3.5 py-2.5 min-h-[44px] text-base sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">Mobile Phone Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98490 00000"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 focus:bg-white focus:border-blue-600 focus:ring-1 focus:ring-blue-600 rounded-xl px-3.5 py-2.5 min-h-[44px] text-base sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">Email Address *</label>
                <input
                  type="email"
                  required
                  placeholder="rajesh@enterprise.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 focus:bg-white focus:border-blue-600 focus:ring-1 focus:ring-blue-600 rounded-xl px-3.5 py-2.5 min-h-[44px] text-base sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">Select Property</label>
                <select
                  value={propertyInterest}
                  onChange={(e) => setPropertyInterest(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 focus:bg-white focus:border-blue-600 focus:ring-1 focus:ring-blue-600 rounded-xl px-3.5 py-2.5 min-h-[44px] text-base sm:text-sm text-slate-900 focus:outline-none transition-colors"
                >
                  <option value="All Neopolis Projects">All 3 Neopolis Projects</option>
                  <option value="Brigade Barcelona">Brigade Barcelona (Spanish Architecture)</option>
                  <option value="Godrej Epoque">Godrej Epoque (57-Storey Art Deco)</option>
                  <option value="SATTVA LAGO – Phase 2">Sattva Lago Phase 2 (10-Acre Lagoon)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">Preferred Configuration</label>
              <select
                value={configuration}
                onChange={(e) => setConfiguration(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 focus:bg-white focus:border-blue-600 focus:ring-1 focus:ring-blue-600 rounded-xl px-3.5 py-2.5 min-h-[44px] text-base sm:text-sm text-slate-900 focus:outline-none transition-colors"
              >
                <option value="3 BHK">3 BHK (2,790 - 3,100 sft)</option>
                <option value="3.5 BHK">3.5 BHK (3,240 - 3,850 sft)</option>
                <option value="4 BHK">4 BHK (3,764 - 4,900 sft)</option>
                <option value="Sky Villa / Penthouse">Sky Villa / Penthouse</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">Specific Requirements / Inquiries (Optional)</label>
              <textarea
                rows={2}
                placeholder="Mention floor preference, vastu direction, or specific inquiries..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 focus:bg-white focus:border-blue-600 focus:ring-1 focus:ring-blue-600 rounded-xl px-3.5 py-2.5 text-base sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold py-3.5 px-6 min-h-[48px] rounded-xl text-base transition-all duration-150 flex items-center justify-center gap-3 shadow-xl shadow-blue-600/30 disabled:opacity-50 cursor-pointer active:scale-[0.98]"
            >
              {isSubmitting ? (
                <span>Generating Brochure & Allocating Advisor...</span>
              ) : (
                <>
                  <span>Submit Inquiry & Unlock Brochure</span>
                  <Send className="w-5 h-5" />
                </>
              )}
            </button>

            <div className="flex items-center justify-center gap-4 text-[11px] text-slate-500 pt-2 text-center">
              <span>✓ Priority Sales Desk Routing</span>
              <span>·</span>
              <span>✓ Direct Response in 15 Mins</span>
              <span>·</span>
              <span>✓ Verified RERA Advisory</span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
