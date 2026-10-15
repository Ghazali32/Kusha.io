import React from 'react';
import { HeroBento } from '../components/HeroBento';
import { GlobalDeliverySection } from '../components/GlobalDeliverySection';
import { ServicesSection } from '../components/ServicesSection';
import { InteractiveEstimator } from '../components/InteractiveEstimator';
import { IndustriesSection } from '../components/IndustriesSection';
import { TechStackSection } from '../components/TechStackSection';
import { ProcessSection } from '../components/ProcessSection';
import { EngagementModelsSection } from '../components/EngagementModelsSection';
import { TrustAndCaseStudyBlueprint } from '../components/TrustAndCaseStudyBlueprint';
import { FaqSection } from '../components/FaqSection';
import { ContactModalAndSection } from '../components/ContactModalAndSection';

export function HomePage({ onOpenContact, onOpenScoper, contactModalOpen, setContactModalOpen, contactType, contactSubject }) {
  return (
    <>
      {/* Hero Section with Interactive Bento Dashboard */}
      <HeroBento 
        onOpenContact={onOpenContact}
        onOpenScoper={onOpenScoper}
      />

      {/* Global Delivery Model: Netherlands Entity + India Engineering */}
      <GlobalDeliverySection 
        onOpenContact={onOpenContact} 
      />

      {/* Core 10 Services */}
      <ServicesSection 
        onOpenContact={onOpenContact} 
      />

      {/* Interactive Project Estimator & Scope Configurator */}
      <InteractiveEstimator 
        onOpenContact={onOpenContact} 
      />

      {/* 14+ Target Industries */}
      <IndustriesSection 
        onOpenContact={onOpenContact} 
      />

      {/* 11 Tech Stack Disciplines */}
      <TechStackSection 
        onOpenContact={onOpenContact} 
      />

      {/* 9-Step Delivery Process */}
      <ProcessSection 
        onOpenContact={onOpenContact} 
      />

      {/* 6 Flexible Engagement Models */}
      <EngagementModelsSection 
        onOpenContact={onOpenContact} 
      />

      {/* Why Kusha.io & Trust Badges */}
      <TrustAndCaseStudyBlueprint 
        onOpenContact={onOpenContact} 
      />

      {/* Frequently Asked Questions */}
      <FaqSection 
        onOpenContact={onOpenContact} 
      />

      {/* Comprehensive In-Page Contact & Project Scoping Form */}
      <ContactModalAndSection 
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
        initialType={contactType}
        initialSubject={contactSubject}
      />
    </>
  );
}
