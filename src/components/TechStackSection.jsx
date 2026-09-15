import React, { useState } from 'react';
import { 
  Terminal, 
  Layers, 
  Cpu, 
  Database, 
  Cloud, 
  Shield, 
  Smartphone, 
  GitBranch, 
  Workflow, 
  BrainCircuit, 
  Radio, 
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { websiteData } from '../data/websiteContent';

export function TechStackSection({ onOpenContact }) {
  const [activeCategory, setActiveCategory] = useState(websiteData.technologies[0]);

  const catIcons = {
    Frontend: Layers,
    Backend: Terminal,
    Mobile: Smartphone,
    Databases: Database,
    Cloud: Cloud,
    "DevOps & CI/CD": GitBranch,
    "Data Engineering": Workflow,
    "AI & Machine Learning": BrainCircuit,
    "IoT & Embedded": Radio,
    "Testing & QA": CheckCircle2,
    Cybersecurity: Shield
  };

  return (
    <section id="tech-stack" className="section-spacing" style={{ background: '#0e0f13' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge lime">
            <Cpu size={14} />
            <span>Proven Technology Stacks</span>
          </div>
          <h2 className="section-title">
            Engineered with <span className="text-gradient-lime">Proven & Modern Tools</span>
          </h2>
          <p className="section-subtitle">
            Our technology choices are guided by what best solves the problem at hand — favoring proven, well-supported tools over fleeting trends.
          </p>
        </div>

        {/* Stack Grid Layout */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '24px',
            alignItems: 'stretch'
          }}
          className="tech-bento-grid"
        >

          {/* Left Column: Category Pills Grid */}
          <div 
            className="bento-card" 
            style={{ 
              gridColumn: 'span 5',
              padding: '18px',
              display: 'flex',
              flexDirection: 'column',
              gap: '6px'
            }}
          >
            <span style={{ fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '8px', padding: '0 8px' }}>
              Stack Disciplines
            </span>

            {websiteData.technologies.map((t) => {
              const Icon = catIcons[t.category] || Cpu;
              const isSelected = activeCategory.category === t.category;
              return (
                <button
                  key={t.category}
                  onClick={() => setActiveCategory(t)}
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
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <Icon size={18} color={isSelected ? 'var(--lime-text)' : 'var(--lime-primary)'} />
                    <span style={{ fontSize: '0.92rem', fontWeight: 700 }}>{t.category}</span>
                  </div>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, opacity: isSelected ? 0.9 : 0.5 }}>
                    {t.stack.length}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Column: Active Category Deep Dive */}
          <div 
            className="bento-card" 
            style={{ 
              gridColumn: 'span 7',
              background: 'linear-gradient(145deg, #18191f 0%, #131418 100%)',
              border: '1px solid var(--border-medium)',
              padding: '36px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div 
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '14px',
                      background: 'var(--lime-subtle)',
                      border: '1px solid var(--lime-border)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    {React.createElement(catIcons[activeCategory.category] || Cpu, {
                      size: 24,
                      color: 'var(--lime-primary)'
                    })}
                  </div>
                  <div>
                    <span style={{ fontSize: '0.78rem', color: 'var(--lime-primary)', fontWeight: 700, textTransform: 'uppercase' }}>
                      Technology Discipline
                    </span>
                    <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#ffffff' }}>
                      {activeCategory.category}
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
                  Production Ready
                </span>
              </div>

              <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '28px' }}>
                {activeCategory.desc}
              </p>

              <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '16px' }}>
                Frameworks, Tooling & Engines:
              </h4>

              {/* Stack Pills Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '12px' }}>
                {activeCategory.stack.map((tech) => (
                  <div 
                    key={tech} 
                    style={{
                      background: 'var(--bg-subtle)',
                      border: '1px solid var(--border-subtle)',
                      padding: '12px 16px',
                      borderRadius: 'var(--radius-md)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px'
                    }}
                  >
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--lime-primary)' }}></div>
                    <span style={{ fontSize: '0.92rem', fontWeight: 600, color: '#ffffff' }}>{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Card Footer */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', marginTop: '36px', paddingTop: '20px', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                Need a tailored stack review for your architecture?
              </span>
              <button 
                className="btn btn-lime btn-sm"
                onClick={() => onOpenContact('consultation')}
              >
                <span>Request Architecture Audit</span>
              </button>
            </div>

          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .tech-bento-grid {
            grid-template-columns: repeat(1, 1fr) !important;
          }
          .tech-bento-grid > div {
            grid-column: span 1 !important;
          }
        }
      `}</style>
    </section>
  );
}
