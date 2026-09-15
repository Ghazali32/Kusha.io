import React, { useState, useEffect } from 'react';
import { 
  Activity, 
  Layers, 
  Globe2, 
  GitMerge, 
  BookOpen, 
  Mail, 
  Search, 
  Bell, 
  Sparkles,
  ArrowUp
} from 'lucide-react';

export function FloatingDock({ activeSection, onOpenSearch, onOpenNotifications, onOpenContact }) {
  const [currentSection, setCurrentSection] = useState('overview');
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);

      const sections = ['services', 'global-model', 'industries', 'tech-stack', 'how-we-work', 'engagement', 'insights', 'faq', 'contact'];
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
  }, []);

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
          className={`dock-item ${currentSection === 'services' ? 'active' : ''}`}
          onClick={() => scrollToSection('services')}
        >
          <Layers size={15} />
          <span>Services</span>
        </button>

        <button
          className={`dock-item ${currentSection === 'global-model' ? 'active' : ''}`}
          onClick={() => scrollToSection('global-model')}
        >
          <Globe2 size={15} />
          <span>Global Model</span>
        </button>

        <button
          className={`dock-item ${currentSection === 'how-we-work' ? 'active' : ''}`}
          onClick={() => scrollToSection('how-we-work')}
        >
          <GitMerge size={15} />
          <span>Process</span>
        </button>

        <button
          className={`dock-item ${currentSection === 'insights' ? 'active' : ''}`}
          onClick={() => scrollToSection('insights')}
        >
          <BookOpen size={15} />
          <span>Insights</span>
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
