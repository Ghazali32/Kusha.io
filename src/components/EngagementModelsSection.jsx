import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Layers, 
  ArrowUpRight, 
  Clock, 
  ShieldCheck, 
  Users, 
  Target, 
  Zap, 
  Sparkles 
} from 'lucide-react';
import { websiteData } from '../data/websiteContent';

export function EngagementModelsSection({ onOpenContact }) {
  const [selectedModel, setSelectedModel] = useState(null);

  return (
    <section id="engagement" className="section-spacing" style={{ background: '#0e0f13' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge lime">
            <Target size={14} />
            <span>Commercial & Collaboration Frameworks</span>
          </div>
          <h2 className="section-title">
            Flexible Engagement Models Built for <span className="text-gradient-lime">Your Growth</span>
          </h2>
          <p className="section-subtitle">
            Every project is different. We offer flexible engagement models so you can choose the structure that fits your project, budget, and risk tolerance.
          </p>
        </div>

        {/* 6 Engagement Models Bento Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
            gap: '20px'
          }}
        >
          {websiteData.engagementModels.map((model) => (
            <div
              key={model.id}
              className="bento-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '380px',
                transition: 'all 0.3s ease'
              }}
            >
              <div>
                {/* Top Badge */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <span 
                    style={{
                      background: 'var(--lime-subtle)',
                      color: 'var(--lime-primary)',
                      border: '1px solid var(--lime-border)',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      padding: '4px 12px',
                      borderRadius: 'var(--radius-full)'
                    }}
                  >
                    {model.badge}
                  </span>

                  <button 
                    className="circle-arrow-btn subtle"
                    onClick={() => onOpenContact('project', `Engagement: ${model.title}`)}
                  >
                    <ArrowUpRight size={18} />
                  </button>
                </div>

                <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#ffffff', marginBottom: '10px' }}>
                  {model.title}
                </h3>

                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '20px' }}>
                  {model.bestFor}
                </p>

                {/* Features List */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                  {model.features.map((f, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.86rem', color: '#ffffff' }}>
                      <CheckCircle2 size={16} color="var(--lime-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Use Cases & CTA */}
              <div style={{ paddingTop: '16px', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', marginBottom: '6px' }}>
                  TYPICAL FIT:
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '16px' }}>
                  {model.useCases.map((uc, i) => (
                    <span key={i} style={{ fontSize: '0.76rem', background: 'var(--bg-subtle)', padding: '3px 8px', borderRadius: '4px', color: 'var(--text-secondary)' }}>
                      {uc}
                    </span>
                  ))}
                </div>

                <button
                  className="btn btn-secondary"
                  style={{ width: '100%', fontSize: '0.88rem' }}
                  onClick={() => onOpenContact('project', `Engagement: ${model.title}`)}
                >
                  <span>Select {model.title}</span>
                  <ArrowUpRight size={15} />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
