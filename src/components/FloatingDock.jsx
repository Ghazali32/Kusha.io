import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { 
  Activity, 
  Layers, 
  Globe2, 
  GitMerge, 
  Mail, 
  Search, 
  Bell, 
  Sparkles,
  ArrowUp,
  Calendar
} from 'lucide-react';

export function FloatingDock({ activeSection, onOpenSearch, onOpenNotifications, onOpenContact }) {
  const [currentSection, setCurrentSection] = useState('overview');
  const [showBackToTop, setShowBackToTop] = useState(false);
  const location = useLocation();
  const isWebDev = location.pathname === '/services/website-development';

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);

      if (isWebDev) {
        return;
      }

      const sections = ['global-model', 'services', 'industries', 'tech-stack', 'how-we-work', 'engagement', 'faq', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const sec of sections) {
        const el = document.getElementById(sec);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setCurrentSection(sec);
            return;
          }
        }
      }
      if (window.scrollY < 400) {
        setCurrentSection('overview');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isWebDev]);

  const scrollToSection = (id) => {
    if (id === 'overview') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Dedicated handler for scrolling to the consultation form on /services/website-development
  const handleScrollToConsultation = () => {
    const formSection = document.getElementById('enquiry-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });

      // Automatically switch the in-page form tab to 'Book Free Consultation'
      window.dispatchEvent(new CustomEvent('switch-contact-tab', { 
        detail: 'consultation', 
        detailTarget: 'page' 
      }));

      const tabBtn = document.getElementById('page-tab-consultation');
      if (tabBtn) {
        tabBtn.click();
      }

      // Visual feedback pulse on the form
      formSection.classList.add('highlight-form-pulse');
      setTimeout(() => {
        formSection.classList.remove('highlight-form-pulse');
      }, 2400);

      // Focus first input field
      setTimeout(() => {
        const input = document.getElementById('page-fullName') || formSection.querySelector('input');
        if (input) input.focus();
      }, 450);
    } else if (onOpenContact) {
      onOpenContact('consultation', 'Website Development Consultation');
    }
  };

  // Specialized interaction dock for /services/website-development
  if (isWebDev) {
    return (
      <div className="floating-dock-container">
        <div className="floating-dock webdev-dock">

          {/* Customer Trust & Live Availability Status Indicator */}
          <div className="dock-status-indicator" title="Kusha.io • Netherlands KVK 98986708">
            <span className="dock-status-dot"></span>
            <span className="dock-status-text">24h Response SLA</span>
          </div>

          <div style={{ width: '1px', height: '22px', background: 'rgba(255,255,255,0.12)', margin: '0 4px' }} className="hide-on-mobile"></div>

          {/* 1. Primary CTA Button: Book Free Consultation (Scrolls & opens the Consultation form on this page) */}
          <button
            id="dock-book-consultation-btn"
            className="dock-cta-btn primary"
            onClick={handleScrollToConsultation}
            title="Book Free Consultation (Opens form on this page)"
          >
            <Calendar size={16} />
            <span>Book Free Consultation</span>
          </button>

          {/* 2. Customer Interaction: Instant Popup Modal (For users who prefer modal overlay without scrolling) */}
          <button
            className="dock-cta-btn secondary"
            onClick={() => onOpenContact && onOpenContact('consultation', 'Website Development Consultation')}
            title="Open Instant Consultation Popup"
          >
            <Sparkles size={15} color="var(--lime-primary)" />
            <span className="hide-on-mobile">Quick Scope</span>
          </button>

          {/* 3. Customer Interaction: Direct Email Desk */}
          <a
            href="mailto:info@kusha.io?subject=Website%20Development%20Consultation%20Inquiry"
            className="dock-icon-btn"
            title="Direct Email: info@kusha.io (Netherlands Desk)"
            aria-label="Send direct email to info@kusha.io"
          >
            <Mail size={16} />
          </a>

          {/* 4. Customer Interaction: Back to Top */}
          {showBackToTop && (
            <button
              className="dock-icon-btn"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              title="Back to Top"
              aria-label="Scroll back to top"
            >
              <ArrowUp size={16} />
            </button>
          )}

        </div>
      </div>
    );
  }

  // Standard Home Page Dock
  return (
    <div className="floating-dock-container">
      <div className="floating-dock">
        
        {/* Dock Navigation Items */}
        <button
          className={`dock-item ${currentSection === 'overview' ? 'active' : ''}`}
          onClick={() => scrollToSection('overview')}
        >
          <Activity size={15} />
          <span>Overview</span>
        </button>

        <button
          className={`dock-item ${currentSection === 'global-model' ? 'active' : ''}`}
          onClick={() => scrollToSection('global-model')}
        >
          <Globe2 size={15} />
          <span>Global Model</span>
        </button>

        <button
          className={`dock-item ${currentSection === 'services' ? 'active' : ''}`}
          onClick={() => scrollToSection('services')}
        >
          <Layers size={15} />
          <span>Services</span>
        </button>

        <button
          className={`dock-item ${currentSection === 'how-we-work' ? 'active' : ''}`}
          onClick={() => scrollToSection('how-we-work')}
        >
          <GitMerge size={15} />
          <span>Process</span>
        </button>

        <button
          className={`dock-item ${currentSection === 'contact' ? 'active' : ''}`}
          onClick={() => scrollToSection('contact')}
        >
          <Mail size={15} />
          <span>Contact</span>
        </button>

        {/* Separator */}
        <div style={{ width: '1px', height: '24px', background: 'rgba(255,255,255,0.1)', margin: '0 4px' }}></div>

        {/* Search */}
        <button 
          className="dock-icon-btn" 
          onClick={onOpenSearch} 
          title="Search (⌘K)"
        >
          <Search size={15} />
        </button>

        {/* Notifications */}
        <button 
          className="dock-icon-btn" 
          onClick={onOpenNotifications} 
          title="Notifications & Feed"
        >
          <Bell size={15} />
          <span className="dock-dot"></span>
        </button>

        {/* Consultation Quick Trigger */}
        <button
          className="dock-icon-btn"
          onClick={() => onOpenContact('consultation')}
          title="Start Consultation"
          style={{ background: 'var(--lime-primary)', color: 'var(--lime-text)' }}
        >
          <Sparkles size={15} />
        </button>

      </div>
    </div>
  );
}
