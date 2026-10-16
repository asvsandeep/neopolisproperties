import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { PropertyDetailPage } from './pages/PropertyDetailPage';
import { ThankYouPage } from './pages/ThankYouPage';
import { PROPERTIES } from './data/properties';
import { PropertyId } from './types';
import { X } from 'lucide-react';
import { LeadCaptureForm } from './components/LeadCaptureForm';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [selectedPropertyId, setSelectedPropertyId] = useState<PropertyId>('brigade-barcelona');
  const [latestLeadId, setLatestLeadId] = useState<string>('');
  const [latestLeadName, setLatestLeadName] = useState<string>('');
  const [isQuickTourModalOpen, setIsQuickTourModalOpen] = useState(false);

  // Sync with URL parameters on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const pageParam = params.get('page');
    const projectParam = params.get('project') as PropertyId;

    if (pageParam === 'thank-you') {
      setCurrentPage('thank-you');
    } else if (projectParam && ['brigade-barcelona', 'godrej-epoque', 'sattva-lago'].includes(projectParam)) {
      setSelectedPropertyId(projectParam);
      setCurrentPage(projectParam);
    } else if (pageParam && ['brigade-barcelona', 'godrej-epoque', 'sattva-lago'].includes(pageParam)) {
      setSelectedPropertyId(pageParam as PropertyId);
      setCurrentPage(pageParam);
    }

    const handlePopState = () => {
      const currentParams = new URLSearchParams(window.location.search);
      const curPage = currentParams.get('page') || 'home';
      const curProject = currentParams.get('project') as PropertyId;
      if (curProject) {
        setSelectedPropertyId(curProject);
        setCurrentPage(curProject);
      } else {
        setCurrentPage(curPage);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Navigation handler
  const handleNavigate = (page: string) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (page === 'home') {
      setCurrentPage('home');
      window.history.pushState({}, '', window.location.pathname);
    } else if (['brigade-barcelona', 'godrej-epoque', 'sattva-lago'].includes(page)) {
      setSelectedPropertyId(page as PropertyId);
      setCurrentPage(page);
      window.history.pushState({}, '', `?project=${page}`);
    } else if (page === 'thank-you') {
      setCurrentPage('thank-you');
      window.history.pushState({}, '', `?page=thank-you`);
    }
  };

  const handlePropertySelect = (propertyId: PropertyId) => {
    setSelectedPropertyId(propertyId);
    setCurrentPage(propertyId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.history.pushState({}, '', `?project=${propertyId}`);
  };

  // Called whenever any lead form is submitted (top or bottom of any page)
  const handleLeadSubmitted = (leadId: string, leadName: string) => {
    setLatestLeadId(leadId);
    setLatestLeadName(leadName);
    setIsQuickTourModalOpen(false);
    setCurrentPage('thank-you');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.history.pushState({}, '', `?page=thank-you&ref=${leadId}`);
  };

  const selectedProperty = PROPERTIES.find(p => p.id === selectedPropertyId) || PROPERTIES[0];

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* Top Navigation */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenQuickTour={() => setIsQuickTourModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigateProperty={handlePropertySelect}
            onLeadSubmitted={handleLeadSubmitted}
            onOpenQuickTour={() => setIsQuickTourModalOpen(true)}
          />
        )}

        {['brigade-barcelona', 'godrej-epoque', 'sattva-lago'].includes(currentPage) && (
          <PropertyDetailPage
            property={selectedProperty}
            onNavigateProperty={handlePropertySelect}
            onLeadSubmitted={handleLeadSubmitted}
            onBookSiteVisit={() => setIsQuickTourModalOpen(true)}
          />
        )}

        {currentPage === 'thank-you' && (
          <ThankYouPage
            leadId={latestLeadId}
            leadName={latestLeadName}
            onNavigateHome={() => handleNavigate('home')}
            onNavigateProperty={handlePropertySelect}
          />
        )}
      </main>

      {/* Quiet Footer */}
      <Footer
        onNavigate={handleNavigate}
      />

      {/* Quick Tour Modal (When clicking header button) */}
      {isQuickTourModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white border border-slate-200 rounded-3xl max-w-xl w-full p-6 sm:p-8 relative shadow-2xl">
            <button
              onClick={() => setIsQuickTourModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-lg cursor-pointer transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="mb-4">
              <span className="text-[11px] text-blue-600 font-bold uppercase tracking-wider block">
                VIP Priority Access
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-title">Schedule Private Site Tour</h3>
              <p className="text-xs text-slate-600 mt-1">
                Select your preferred project and receive developer pricing directly.
              </p>
            </div>
            <LeadCaptureForm
              variant="top"
              defaultProperty={selectedPropertyId}
              sourcePageName="Header Modal / Site Tour"
              onSubmitted={handleLeadSubmitted}
            />
          </div>
        </div>
      )}
    </div>
  );
}
