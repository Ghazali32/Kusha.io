import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingDock } from './components/FloatingDock';
import { SearchModal } from './components/SearchModal';
import { NotificationDrawer } from './components/NotificationDrawer';
import { ContactModalAndSection } from './components/ContactModalAndSection';

// Route-Based Code Splitting: Lazy load each page on demand
const HomePage = lazy(() => import('./pages/HomePage').then(m => ({ default: m.HomePage })));
const WebsiteDevelopmentPage = lazy(() => import('./pages/WebsiteDevelopmentPage').then(m => ({ default: m.WebsiteDevelopmentPage })));
const ThankYouPage = lazy(() => import('./pages/ThankYouPage').then(m => ({ default: m.ThankYouPage })));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage').then(m => ({ default: m.PrivacyPolicyPage })));

// Minimal non-blocking fallback for route transitions
function PageLoader() {
  return (
    <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg-app)' }}>
      <div 
        style={{ 
          width: '32px', 
          height: '32px', 
          borderRadius: '50%', 
          border: '2px solid rgba(212, 255, 79, 0.15)', 
          borderTopColor: 'var(--lime-primary)', 
          animation: 'spin 0.7s linear infinite' 
        }} 
      />
    </div>
  );
}

// Helper component to scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

export function App() {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [contactType, setContactType] = useState('project');
  const [contactSubject, setContactSubject] = useState('');
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  const handleOpenContact = (type = 'project', subject = '') => {
    setContactType(type);
    setContactSubject(subject);
    setContactModalOpen(true);
  };

  const handleOpenScoper = () => {
    const el = document.getElementById('estimator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-app)', color: 'var(--text-primary)', position: 'relative' }}>
      <ScrollToTop />

      {/* Top Navbar */}
      <Navbar 
        onOpenContact={handleOpenContact} 
        onOpenSearch={() => setSearchModalOpen(true)} 
      />

      {/* Main Page Routing with Suspense Boundary */}
      <main>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route 
              path="/" 
              element={
                <HomePage 
                  onOpenContact={handleOpenContact}
                  onOpenScoper={handleOpenScoper}
                  contactModalOpen={contactModalOpen}
                  setContactModalOpen={setContactModalOpen}
                  contactType={contactType}
                  contactSubject={contactSubject}
                />
              } 
            />
            <Route 
              path="/services/website-development" 
              element={
                <WebsiteDevelopmentPage 
                  onOpenContact={handleOpenContact} 
                />
              } 
            />
            <Route 
              path="/thankyou" 
              element={
                <ThankYouPage />
              } 
            />
            <Route 
              path="/privacy" 
              element={
                <PrivacyPolicyPage />
              } 
            />
            <Route 
              path="/privacy-policy" 
              element={
                <PrivacyPolicyPage />
              } 
            />
            {/* Catch-all route: redirects to home */}
            <Route path="*" element={<Navigate to="/" replace />} />

          </Routes>
        </Suspense>
      </main>

      {/* Global Contact Modal (Triggered via Buttons / Navbar) */}
      <ContactModalAndSection 
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
        initialType={contactType}
        initialSubject={contactSubject}
        modalOnly={true}
      />

      {/* Global Footer with KVK 98986708, GDPR, Legal, and Target Markets */}
      <Footer 
        onOpenContact={handleOpenContact} 
      />

      {/* Floating Bottom Navigation Dock */}
      <FloatingDock 
        onOpenSearch={() => setSearchModalOpen(true)}
        onOpenNotifications={() => setNotificationsOpen(true)}
        onOpenContact={handleOpenContact}
      />

      {/* Global Spotlight Search Modal (⌘K) */}
      <SearchModal 
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        onOpenContact={handleOpenContact}
      />

      {/* Operational Feed / Notification Drawer */}
      <NotificationDrawer 
        isOpen={notificationsOpen}
        onClose={() => setNotificationsOpen(false)}
        onOpenContact={handleOpenContact}
      />

    </div>
  );
}

export default App;
