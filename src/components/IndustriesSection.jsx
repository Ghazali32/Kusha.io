import React, { useState } from 'react';
import { 
  Building2, 
  HeartPulse, 
  ShoppingCart, 
  Truck, 
  Factory, 
  Home, 
  GraduationCap, 
  Store, 
  CloudRain, 
  Car, 
  Briefcase, 
  Plane, 
  Cpu, 
  Rocket,
  ArrowUpRight,
  CheckCircle2,
  Globe2
} from 'lucide-react';
import { websiteData } from '../data/websiteContent';

export function IndustriesSection({ onOpenContact }) {
  const [selectedIndustry, setSelectedIndustry] = useState(websiteData.industries[0]);

  const industryIcons = {
    fintech: Building2,
    healthcare: HeartPulse,
    ecommerce: ShoppingCart,
    logistics: Truck,
    manufacturing: Factory,
    realestate: Home,
    education: GraduationCap,
    retail: Store,
    saas: CloudRain,
    automotive: Car,
    "professional-services": Briefcase,
    travel: Plane,
    "industrial-tech": Cpu,
    startups: Rocket
  };

  return (
    <section id="industries" className="section-spacing" style={{ background: '#0c0d10' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge lavender">
            <Globe2 size={14} />
            <span>Industry Domain Capabilities</span>
          </div>
          <h2 className="section-title">
            Domain-Specific Architecture Across <span className="text-gradient-lavender">14+ Industries</span>
          </h2>
          <p className="section-subtitle">
            We apply our engineering capabilities across a wide range of regulated, high-throughput, and high-growth industry sectors.
          </p>
        </div>

        {/* Bento Layout: Interactive Industry Selector (Left 5 cols) & Spotlight Details (Right 7 cols) */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '24px',
            alignItems: 'stretch'
          }}
          className="industries-bento-grid"
        >

          {/* Left: Scrollable Industry List */}
          <div 
            className="bento-card" 
            style={{ 
              gridColumn: 'span 5',
              padding: '16px',
              display: 'flex',
              flexDirection: 'column',
              gap: '6px',
              maxHeight: '560px',
              overflowY: 'auto'
            }}
          >
            {websiteData.industries.map((ind) => {
              const Icon = industryIcons[ind.id] || Building2;
              const isSelected = selectedIndustry.id === ind.id;
              return (
                <button
                  key={ind.id}
                  onClick={() => setSelectedIndustry(ind)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '12px 16px',
                    borderRadius: 'var(--radius-md)',
                    background: isSelected ? 'var(--lime-primary)' : 'rgba(255, 255, 255, 0.02)',
                    color: isSelected ? 'var(--lime-text)' : '#ffffff',
                    border: isSelected ? '1px solid var(--lime-primary)' : '1px solid transparent',
                    transition: 'all 0.18s ease',
                    textAlign: 'left'
                  }}
                  onMouseEnter={(e) => {
                    if (!isSelected) e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)';
                  }}
                  onMouseLeave={(e) => {
                    if (!isSelected) e.currentTarget.style.background = 'rgba(255, 255, 255, 0.02)';
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div 
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '8px',
                        background: isSelected ? 'rgba(0,0,0,0.1)' : 'rgba(255, 255, 255, 0.06)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <Icon size={16} color={isSelected ? 'var(--lime-text)' : 'var(--lime-primary)'} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.92rem', fontWeight: 700 }}>{ind.name}</div>
                      <div style={{ fontSize: '0.72rem', opacity: isSelected ? 0.85 : 0.6 }}>{ind.tag}</div>
                    </div>
                  </div>

                  <ArrowUpRight size={16} opacity={isSelected ? 1 : 0.4} />
                </button>
              );
            })}
          </div>

          {/* Right: Featured Industry Spotlight Card */}
          <div 
            className="bento-card" 
            style={{ 
              gridColumn: 'span 7',
              background: 'linear-gradient(145deg, #191a21 0%, #15161b 100%)',
              border: '1px solid rgba(212, 255, 79, 0.2)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              padding: '36px'
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div 
                    style={{
                      width: '52px',
                      height: '52px',
                      borderRadius: '16px',
                      background: 'var(--lime-subtle)',
                      border: '1px solid var(--lime-border)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    {React.createElement(industryIcons[selectedIndustry.id] || Building2, {
                      size: 26,
                      color: 'var(--lime-primary)'
                    })}
                  </div>
                  <div>
                    <span style={{ fontSize: '0.78rem', color: 'var(--lime-primary)', fontWeight: 700, textTransform: 'uppercase' }}>
                      {selectedIndustry.tag}
                    </span>
                    <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#ffffff' }}>
                      {selectedIndustry.name}
                    </h3>
                  </div>
                </div>

                <span 
                  style={{
                    background: 'rgba(255, 255, 255, 0.06)',
                    color: 'var(--text-secondary)',
                    padding: '4px 12px',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.78rem',
                    fontWeight: 600
                  }}
                >
                  Global Architecture
                </span>
              </div>

              <div style={{ background: 'var(--bg-subtle)', padding: '20px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)', marginBottom: '28px' }}>
                <span style={{ fontSize: '0.76rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>
                  Domain Engineering Scope
                </span>
                <p style={{ fontSize: '1.05rem', color: '#ffffff', lineHeight: 1.65 }}>
                  {selectedIndustry.description}
                </p>
              </div>

              <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#ffffff', marginBottom: '14px' }}>
                Key Technical Deliverables & Focus Areas:
              </h4>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px', marginBottom: '24px' }}>
                {selectedIndustry.highlights.map((h, i) => (
                  <div 
                    key={i} 
                    style={{
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.06)',
                      padding: '12px 14px',
                      borderRadius: 'var(--radius-sm)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px'
                    }}
                  >
                    <CheckCircle2 size={16} color="var(--lime-primary)" style={{ flexShrink: 0 }} />
                    <span style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', fontWeight: 500 }}>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Actions */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', paddingTop: '20px', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                Targeting: Europe • UK • USA • Australia • Singapore • Middle East
              </div>
              <button 
                className="btn btn-lime"
                onClick={() => onOpenContact('project', `${selectedIndustry.name} Solution`)}
              >
                <span>Discuss {selectedIndustry.name} Project</span>
                <ArrowUpRight size={16} />
              </button>
            </div>

          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .industries-bento-grid {
            grid-template-columns: repeat(1, 1fr) !important;
          }
          .industries-bento-grid > div {
            grid-column: span 1 !important;
          }
        }
      `}</style>
    </section>
  );
}
