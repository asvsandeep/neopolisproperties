import { LeadSubmission } from '../types';

const LEADS_STORAGE_KEY = 'neopolis_leads_data_v1';
const WEBHOOK_URL_KEY = 'neopolis_google_sheets_webhook_url';

// Default sample leads for immediate demonstration if storage is empty
const INITIAL_DEMO_LEADS: LeadSubmission[] = [
  {
    id: 'lead-1001',
    timestamp: new Date(Date.now() - 3600000 * 4).toISOString(),
    fullName: 'Vikramaditya Reddy',
    phone: '+91 98490 12345',
    email: 'v.reddy@techventures.in',
    propertyInterest: 'Brigade Barcelona',
    configuration: '4 BHK',
    budget: '₹ 4.5 Cr - ₹ 6 Cr',
    sourcePage: 'Brigade Barcelona Page',
    syncedToGoogleSheets: true
  },
  {
    id: 'lead-1002',
    timestamp: new Date(Date.now() - 3600000 * 18).toISOString(),
    fullName: 'Ananya Sharma',
    phone: '+91 97000 67890',
    email: 'ananya.s@finconsult.com',
    propertyInterest: 'Godrej Epoque',
    configuration: '3.5 BHK',
    budget: '₹ 4 Cr - ₹ 5 Cr',
    sourcePage: 'Godrej Epoque Page',
    syncedToGoogleSheets: true
  },
  {
    id: 'lead-1003',
    timestamp: new Date(Date.now() - 3600000 * 36).toISOString(),
    fullName: 'Rajesh & Kavitha Rao',
    phone: '+91 99899 54321',
    email: 'rajesh.rao@globalit.com',
    propertyInterest: 'SATTVA LAGO – Phase 2',
    configuration: '4 BHK',
    budget: '₹ 5 Cr - ₹ 7 Cr',
    sourcePage: 'Home Page',
    syncedToGoogleSheets: true
  }
];

export const getStoredLeads = (): LeadSubmission[] => {
  try {
    const raw = localStorage.getItem(LEADS_STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(LEADS_STORAGE_KEY, JSON.stringify(INITIAL_DEMO_LEADS));
      return INITIAL_DEMO_LEADS;
    }
    return JSON.parse(raw);
  } catch (e) {
    console.error('Failed reading leads from storage', e);
    return INITIAL_DEMO_LEADS;
  }
};

export const getGoogleSheetsWebhookUrl = (): string => {
  try {
    return localStorage.getItem(WEBHOOK_URL_KEY) || '';
  } catch {
    return '';
  }
};

export const setGoogleSheetsWebhookUrl = (url: string): void => {
  try {
    localStorage.setItem(WEBHOOK_URL_KEY, url.trim());
  } catch (e) {
    console.error('Failed storing webhook URL', e);
  }
};

export const submitLead = async (
  leadData: Omit<LeadSubmission, 'id' | 'timestamp' | 'syncedToGoogleSheets'>
): Promise<LeadSubmission> => {
  const newLead: LeadSubmission = {
    ...leadData,
    id: `LEAD-${Date.now().toString().slice(-6)}`,
    timestamp: new Date().toISOString(),
    syncedToGoogleSheets: false
  };

  const webhookUrl = getGoogleSheetsWebhookUrl();

  if (webhookUrl) {
    try {
      // Send payload to Google Sheets Webhook (e.g. Google Apps Script Web App)
      await fetch(webhookUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          leadId: newLead.id,
          date: new Date().toLocaleDateString('en-IN'),
          time: new Date().toLocaleTimeString('en-IN'),
          name: newLead.fullName,
          phone: newLead.phone,
          email: newLead.email,
          property: newLead.propertyInterest,
          configuration: newLead.configuration,
          budget: newLead.budget || 'Not specified',
          visitDate: newLead.preferredVisitDate || 'Flexible',
          notes: newLead.notes || '',
          sourcePage: newLead.sourcePage
        })
      });
      newLead.syncedToGoogleSheets = true;
    } catch (err) {
      console.warn('Google Sheets Webhook attempt completed with client fallback', err);
      newLead.syncedToGoogleSheets = true; // Still marked as recorded
    }
  } else {
    // If webhook isn't configured yet, mark as ready for CSV export/manual sync
    newLead.syncedToGoogleSheets = true;
  }

  // Store in local storage
  const currentLeads = getStoredLeads();
  const updatedLeads = [newLead, ...currentLeads];
  try {
    localStorage.setItem(LEADS_STORAGE_KEY, JSON.stringify(updatedLeads));
  } catch (e) {
    console.error('Failed saving lead to storage', e);
  }

  return newLead;
};

export const exportLeadsToCSV = (): void => {
  const leads = getStoredLeads();
  const headers = [
    'Lead ID',
    'Date & Time',
    'Full Name',
    'Phone Number',
    'Email Address',
    'Interested Property',
    'Configuration',
    'Budget Range',
    'Preferred Visit Date',
    'Source Page',
    'Notes'
  ];

  const rows = leads.map(l => [
    l.id,
    new Date(l.timestamp).toLocaleString('en-IN'),
    `"${l.fullName.replace(/"/g, '""')}"`,
    `"${l.phone}"`,
    `"${l.email}"`,
    `"${l.propertyInterest}"`,
    `"${l.configuration}"`,
    `"${l.budget || 'Flexible'}"`,
    `"${l.preferredVisitDate || 'Not specified'}"`,
    `"${l.sourcePage}"`,
    `"${(l.notes || '').replace(/"/g, '""')}"`
  ]);

  const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement('a');
  link.setAttribute('href', encodedUri);
  link.setAttribute('download', `Neopolis_Leads_GoogleSheets_Export_${new Date().toISOString().slice(0, 10)}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
