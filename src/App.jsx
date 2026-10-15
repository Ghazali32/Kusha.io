import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { HomePage } from './pages/HomePage';
import { WebsiteDevelopmentPage } from './pages/WebsiteDevelopmentPage';
import { ThankYouPage } from './pages/ThankYouPage';
import { Footer } from './components/Footer';

import { FloatingDock } from './components/FloatingDock';
import { SearchModal } from './components/SearchModal';
import { NotificationDrawer } from './components/NotificationDrawer';
import { ContactModalAndSection } from './components/ContactModalAndSection';

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

      {/* Main Page Routing */}
      <main>
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
          {/* Catch-all route: redirects to home */}
          <Route path="*" element={<Navigate to="/" replace />} />

        </Routes>
      </main>

      {/* Global Contact Modal (Triggered via Buttons / Navbar) */}
      <ContactModalAndSection 
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
        initialType={contactType}
        initialSubject={contactSubject}
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
