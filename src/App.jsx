import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroBento } from './components/HeroBento';
import { GlobalDeliverySection } from './components/GlobalDeliverySection';
import { ServicesSection } from './components/ServicesSection';
import { InteractiveEstimator } from './components/InteractiveEstimator';
import { IndustriesSection } from './components/IndustriesSection';
import { TechStackSection } from './components/TechStackSection';
import { ProcessSection } from './components/ProcessSection';
import { EngagementModelsSection } from './components/EngagementModelsSection';
import { TrustAndCaseStudyBlueprint } from './components/TrustAndCaseStudyBlueprint';
import { FaqSection } from './components/FaqSection';
import { ContactModalAndSection } from './components/ContactModalAndSection';
import { Footer } from './components/Footer';
import { FloatingDock } from './components/FloatingDock';
import { SearchModal } from './components/SearchModal';
import { NotificationDrawer } from './components/NotificationDrawer';

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
      
      {/* Top Navbar */}
      <Navbar 
        onOpenContact={handleOpenContact} 
        onOpenSearch={() => setSearchModalOpen(true)} 
      />

      {/* Hero Section with Interactive Bento Dashboard */}
      <HeroBento 
        onOpenContact={handleOpenContact}
        onOpenScoper={handleOpenScoper}
      />

      {/* Global Delivery Model: Netherlands Entity + India Engineering */}
      <GlobalDeliverySection 
        onOpenContact={handleOpenContact} 
      />

      {/* Core 10 Services */}
      <ServicesSection 
        onOpenContact={handleOpenContact} 
      />

      {/* Interactive Project Estimator & Scope Configurator */}
      <InteractiveEstimator 
        onOpenContact={handleOpenContact} 
      />

      {/* 14+ Target Industries */}
      <IndustriesSection 
        onOpenContact={handleOpenContact} 
      />

      {/* 11 Tech Stack Disciplines */}
      <TechStackSection 
        onOpenContact={handleOpenContact} 
      />

      {/* 9-Step Delivery Process */}
      <ProcessSection 
        onOpenContact={handleOpenContact} 
      />

      {/* 6 Flexible Engagement Models */}
      <EngagementModelsSection 
        onOpenContact={handleOpenContact} 
      />

      {/* Why Kusha.io & Trust Badges */}
      <TrustAndCaseStudyBlueprint 
        onOpenContact={handleOpenContact} 
      />

      {/* Frequently Asked Questions */}
      <FaqSection 
        onOpenContact={handleOpenContact} 
      />

      {/* Comprehensive In-Page Contact & Project Scoping Form */}
      <ContactModalAndSection 
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
        initialType={contactType}
        initialSubject={contactSubject}
      />

      {/* Footer with KVK 98986708, GDPR, Legal, and Target Markets */}
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
