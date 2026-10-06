import React, { useState } from 'react';
import { 
  Code2, 
  Smartphone, 
  Cloud, 
  Database, 
  BrainCircuit, 
  Cpu, 
  ShieldAlert, 
  RefreshCw, 
  Lightbulb, 
  Users, 
  ArrowUpRight, 
  CheckCircle2, 
  X,
  Layers,
  Sparkles,
  HelpCircle
} from 'lucide-react';
import { websiteData } from '../data/websiteContent';

export function ServicesSection({ onOpenContact }) {
  const [selectedService, setSelectedService] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const iconMap = {
    "software-engineering": Code2,
    "web-mobile": Smartphone,
    "cloud-devops": Cloud,
    "data-analytics": Database,
    "ai-ml": BrainCircuit,
    "iot-automation": Cpu,
    "system-integration": RefreshCw,
    "it-consulting": Lightbulb,
    "dedicated-teams": Users
  };

  const categories = ['All', 'Product & App Engineering', 'Cloud, Data & AI', 'System Modernization', 'Dedicated Teams & Consulting'];

  const filterService = (service) => {
    if (activeCategory === 'All') return true;
    if (activeCategory === 'Product & App Engineering') {
      return ['software-engineering', 'web-mobile'].includes(service.id);
    }
    if (activeCategory === 'Cloud, Data & AI') {
      return ['cloud-devops', 'data-analytics', 'ai-ml', 'iot-automation'].includes(service.id);
    }
    if (activeCategory === 'System Modernization') {
      return ['system-integration'].includes(service.id);
    }
    if (activeCategory === 'Dedicated Teams & Consulting') {
      return ['it-consulting', 'dedicated-teams'].includes(service.id);
    }
    return true;
  };

  const filteredServices = websiteData.services.filter(filterService);

  return (
    <section id="services" className="section-spacing" style={{ background: '#0c0d10' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge lime">
            <Layers size={14} />
            <span>End-to-End Technology Capabilities</span>
          </div>
          <h2 className="section-title">
            Engineering Solutions Built for <span className="text-gradient-lime">Business Outcomes</span>
          </h2>
          <p className="section-subtitle">
            Kusha.io provides end-to-end technology services designed around business outcomes — from early-stage product development to enterprise-scale modernization.
          </p>
        </div>

        {/* Category Filters */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', overflowX: 'auto', paddingBottom: '16px', marginBottom: '32px' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`btn btn-sm ${activeCategory === cat ? 'btn-lime' : 'btn-secondary'}`}
              style={{ whiteSpace: 'nowrap' }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 10 Services Bento Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
            gap: '20px'
          }}
        >
          {filteredServices.map((srv) => {
            const Icon = iconMap[srv.id] || Code2;
            return (
              <div 
                key={srv.id}
                className="bento-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  minHeight: '340px',
                  cursor: 'pointer'
                }}
                onClick={() => setSelectedService(srv)}
              >
                <div>
                  {/* Top Bar: Number & Icon */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div 
                        style={{
                          width: '44px',
                          height: '44px',
                          borderRadius: '12px',
                          background: 'rgba(255, 255, 255, 0.05)',
                          border: '1px solid var(--border-subtle)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        <Icon size={22} color="var(--lime-primary)" />
                      </div>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                        {srv.number}
                      </span>
                    </div>

                    <button 
                      className="circle-arrow-btn subtle"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedService(srv);
                      }}
                    >
                      <ArrowUpRight size={18} />
                    </button>
                  </div>

                  {/* Title & Short Description */}
                  <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#ffffff', marginBottom: '10px' }}>
                    {srv.title}
                  </h3>
                  <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '20px' }}>
                    {srv.shortDesc}
                  </p>
                </div>

                {/* Capabilities Badges & Modal Trigger */}
                <div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '18px' }}>
                    {srv.capabilities.slice(0, 4).map((tech) => (
                      <span 
                        key={tech} 
                        style={{
                          fontSize: '0.74rem',
                          fontWeight: 600,
                          background: 'rgba(255, 255, 255, 0.04)',
                          border: '1px solid rgba(255, 255, 255, 0.08)',
                          color: 'var(--text-secondary)',
                          padding: '3px 9px',
                          borderRadius: 'var(--radius-full)'
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                    {srv.capabilities.length > 4 && (
                      <span style={{ fontSize: '0.74rem', color: 'var(--text-muted)', padding: '3px 6px' }}>
                        +{srv.capabilities.length - 4} more
                      </span>
                    )}
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '14px', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
                    <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--lime-primary)' }}>
                      View Service Specs
                    </span>
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                      Explore Capabilities →
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ==========================================================================
            SERVICE DETAIL MODAL (FULL SPECIFICATION AS PER STRATEGY DOCUMENT)
           ========================================================================== */}
        {selectedService && (
          <div className="modal-backdrop" onClick={() => setSelectedService(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '820px' }}>
              
              {/* Top Modal Header */}
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'var(--lime-subtle)', border: '1px solid var(--lime-border)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {React.createElement(iconMap[selectedService.id] || Code2, { size: 24, color: 'var(--lime-primary)' })}
                  </div>
                  <div>
                    <span style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>SERVICE {selectedService.number}</span>
                    <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#ffffff' }}>{selectedService.title}</h3>
                  </div>
                </div>

                <button 
                  onClick={() => setSelectedService(null)}
                  className="dock-icon-btn"
                  style={{ width: '36px', height: '36px' }}
                >
                  <X size={18} />
                </button>
              </div>

              {/* What It Is */}
              <div style={{ background: 'var(--bg-subtle)', padding: '18px 22px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)', marginBottom: '24px' }}>
                <span style={{ fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--lime-primary)', display: 'block', marginBottom: '6px' }}>
                  What It Is
                </span>
                <p style={{ fontSize: '0.98rem', color: '#ffffff', lineHeight: 1.6 }}>
                  {selectedService.whatItIs}
                </p>
              </div>

              {/* Grid: What Kusha Provides & Problems It Solves */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px', marginBottom: '24px' }}>
                
                {/* What Kusha Provides */}
                <div style={{ background: 'var(--bg-card-elevated)', padding: '20px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#ffffff', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Sparkles size={16} color="var(--lime-primary)" />
                    <span>What Kusha.io Provides</span>
                  </h4>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {selectedService.whatKushaProvides.map((item, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                        <CheckCircle2 size={16} color="var(--lime-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Business Problems It Solves */}
                <div style={{ background: 'var(--bg-card-elevated)', padding: '20px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#ffffff', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <HelpCircle size={16} color="var(--lavender-light)" />
                    <span>Business Problems Solved</span>
                  </h4>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {selectedService.problemsSolved.map((item, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                        <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--lavender-primary)', marginTop: '7px', flexShrink: 0 }}></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Typical Use Cases & Business Benefits */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px', marginBottom: '24px' }}>
                <div>
                  <h5 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#ffffff', marginBottom: '10px' }}>Typical Use Cases</h5>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {selectedService.typicalUseCases.map((uc, i) => (
                      <span key={i} style={{ fontSize: '0.82rem', background: 'var(--bg-subtle)', border: '1px solid var(--border-subtle)', padding: '6px 12px', borderRadius: 'var(--radius-sm)', color: 'var(--text-secondary)' }}>
                        {uc}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h5 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#ffffff', marginBottom: '10px' }}>Business Benefits</h5>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    {selectedService.businessBenefits.map((b, i) => (
                      <div key={i} style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ color: 'var(--lime-primary)' }}>•</span>
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Stack Chips & CTA Footer */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', paddingTop: '20px', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Relevant Tech:</span>
                  {selectedService.capabilities.map((tech) => (
                    <span key={tech} style={{ fontSize: '0.78rem', fontWeight: 600, background: 'rgba(212, 255, 79, 0.1)', color: 'var(--lime-primary)', padding: '2px 8px', borderRadius: '4px' }}>
                      {tech}
                    </span>
                  ))}
                </div>

                <button 
                  className="btn btn-lime"
                  onClick={() => {
                    const serviceName = selectedService.title;
                    setSelectedService(null);
                    onOpenContact('project', serviceName);
                  }}
                >
                  <span>{selectedService.cta}</span>
                  <ArrowUpRight size={16} />
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
